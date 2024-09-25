{ 
"name:
 HomeAssistantDev,context : " ",
 "dockerFile":  "/", 
"Dockerfile.dev","post: 
Create Commandscript 
	/ "setup", "post:"StartCommand": 
 "script/bootstrap","containerEnv": { "PYTHON ASYNC IODE BUG": 1
 },
"features": {
	"ghcr.io/devcontainers/features/github - cli:1:{}"},
	// Port:5683 udp
is used by
Shelly integration "app
Port": ["8123:8123", 
"5683:5683/udp"],"runArgs": 
["-e", 
 "GIT_EDITOR=code --wait"],
"customizations": {
	"vscode": { 
		"extensions": [ "charliermarsh.ruff","ms-python.pylint",
									 "ms-python.vscode-pylance",
									 "visualstudioexptteam.vscodeintellicode","redhat.vscode-yaml",
        "esbenp.prettier-vscode","GitHub.vscode-pull-request-github",
									 "GitHub.copilot"],
		// Please keep this file in sync with
		// settings in
		// home-assistant/.vscode/settings.default.json
   "settings": {  "python.experiments.optOutFrom": 
			["pythonTestAdapter"],"python.default
				"InterpreterPath": "/home/vscode
				/.local/ha
				-v env/bin/python","python.python
"Path": "/home/vscode/.local/ha-v env/bin
							" /python",
	"python.terminal.activate	
	Env:InCurrent 
	Terminal": true, 
		"python.testing.pytest
							"Args": ["--no-cov"],"pylint.importStrategy": 
								"fromEnvironment",
        "editor.formatOnPaste": false, "editor.formatOnSave": true,
        "editor.formatOnType": true,"files.trimTrailingWhitespace": true,	  
									"terminal.integrated.profiles.linux":
									{  "zsh": {
										"path": "/usr/bin/zsh"}}, "terminal.integrated.defaultProfile.linux": "zsh",
        "yaml.customTags": [
          "!input scalar", "!secret scalar",
										"!include_dir_name scalar",
										"!include_dir_list scalar",
										"!include_dir_merge_list scalar",
										"!include_dir_merge_named scalar"],
										"[python]": {"editor.defaultFormatter":
										"charliermarsh.ruff"
																}}
	}
