"""The Backup integration."""

from homeassistant.components.hassio import is_hassio
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType

from .const import DOMAIN, LOGGER
from .http import async_register_http_views
from .manager import Backup, BackupManager
from .sync_agent import SyncedBackup
from .websocket import async_register_websocket_handlers

__all__ = [
    "async_register_http_views",
    "async_register_websocket_handlers",
    "async_setup",
    "Backup",
    "BackupManager",
    "CONFIG_SCHEMA",
    "cv",
    "DOMAIN",
    "HomeAssistant",
    "is_hassio",
    "LOGGER",
    "ServiceCall",
    "SyncedBackup",
]

CONFIG_SCHEMA = cv.empty_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up the Backup integration."""
    backup_manager = BackupManager(hass)
    hass.data[DOMAIN] = backup_manager

    with_hassio = is_hassio(hass)

    async_register_websocket_handlers(hass, with_hassio)

    if with_hassio:
        if DOMAIN in config:
            LOGGER.error(
                "The backup integration is not supported on this installation method, "
                "please remove it from your configuration"
            )
        return True

    async def async_handle_create_service(call: ServiceCall) -> None:
        """Service handler for creating backups."""
        backup = await backup_manager.generate_backup()
        await backup_manager.sync_backup(backup=backup)

    hass.services.async_register(DOMAIN, "create", async_handle_create_service)

    async_register_http_views(hass)

    return True
