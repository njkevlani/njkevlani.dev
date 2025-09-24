---
title: "Linux Setup"
---

This page has list of things that makes linux experience better.

## System services [^1]

```shell
# enables ssh-agent, which makes it possible to use ssh-add once and keep using
# it without needing to enter password again.
systemctl --user enable ssh-agent.service
```

And include this in your shell startup file (like `.zshrc`).

```shell
export SSH_AUTH_SOCK=$XDG_RUNTIME_DIR/ssh-agent.socket
```

## Fonts

This list includes fonts for system, symbols, emojis and icons.

```shell
paru -S \
  noto-fonts \
  ttf-liberation \
  ttf-dejavu \
  ttf-opensans \
  noto-fonts-cjk \
  noto-fonts-emoji \
  noto-color-emoji-fontconfig \
  awesome-terminal-fonts \
  woff2-font-awesome \
```

[^1]: <https://wiki.archlinux.org/title/SSH_keys>
