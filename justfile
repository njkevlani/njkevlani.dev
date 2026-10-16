clean:
	rm -rf public
	rm -rf static/pagefind

build env="development":
	hugo --environment {{env}} --minify
	html2pdf --background --paper A4 public/resume/index.html -o public/resume/pdf/Nilesh_Kevlani.pdf
	npx -y pagefind --site public --glob "kb/**/*.html"

server env="development":
	hugo --environment {{env}}
	npx -y pagefind --site public --glob "kb/**/*.html" --output-path static/pagefind
	hugo server --environment {{env}} --minify --disableLiveReload

server-lan env="development":
	hugo --environment {{env}}
	npx -y pagefind --site public --glob "kb/**/*.html" --output-path static/pagefind
	hugo server --environment {{env}} --minify --disableLiveReload --bind 0.0.0.0

lint:
	typos
	yamllint .
	stylelint "**/*.css" "!public/**/*.css"
	markdownlint-cli2 "**/*.md"

fix-lint:
	typos -w
	stylelint --fix "**/*.css"
	markdownlint-cli2 --fix "**/*.md"

lint-ci:
	stylelint "**/*.css"

lint-deps:
	typos --version || bin install https://github.com/crate-ci/typos
	yamllint --version || pip3 install --user yamllint
	stylelint --version || npm install stylelint stylelint-config-standard @stylistic/stylelint-plugin --global
	which markdownlint-cli2 || npm install markdownlint-cli2 --global
