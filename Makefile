
serve: node_modules
	@$</serve/bin/serve -Slojp 0

test: node_modules
	@sed s/'iterative-eval'/'.\/'/ Readme.md | $</jsmd/bin/jsmd --harmony
	@$</hydro/bin/hydro --harmony --setup test/hydro.conf.js

node_modules: package.json
	@packin install --meta $< --folder $@

.PHONY: serve test
