---
title: "Arch Linux Setup"
---

This page has list of things that makes linux experience better.

System will keep functioning without these things, but the experience will be
subpar at places (like not good font rendering, having to enter ssh password
multiple times). Since system will keep functioning, these are easy to miss and
difficult to identify and fix.

Linux distros are always evolving, so there might be things on this page which
might not be irrelevant because of various reasons like they being by the distro
or they bering replaced with sometthing new.

## System services

### SSH [^1]

Enables ssh-agent makes it possible to use ssh-add once and keep using it
without needing to enter password again for ssh.

```shell
systemctl enable --user ssh-agent.service
```

### Ghostty daemon [^2]

This allows opening a new ghostty terminal window faster.

```shell
systemctl enable --user app-com.mitchellh.ghostty.service
```

## Fonts

This list includes fonts for system, symbols, emojis and icons. Without these
fonts, fonts do not looks good on website, emjies are not rendered on websites,
symbol fonts are not rendered in system elements (like waybar).

```shell
pacman -S noto-fonts \
  noto-fonts-emoji \
  ttf-dejavu \
  ttf-liberation \
  ttf-nerd-fonts-symbols
```

[^1]: <https://wiki.archlinux.org/title/SSH_keys>
[^2]: <https://ghostty.org/docs/linux/systemd#starting-ghostty-at-login>
