---
title: "Arch Linux Setup"
---

This page has list of things that makes Linux experience better.

System will keep functioning without these things, but the experience will be
subpar at places (like not good font rendering, having to enter ssh password
multiple times). Since system will keep functioning, these are easy to miss and
difficult to identify and fix.

Linux distros are always evolving, so there might be things on this page which
might not be relevant because of various reasons like they being by the distro
or they being replaced with something new.

## System Services

### SSH Agent Daemon[^1]

Enabling ssh-agent makes it possible to use ssh-add once and keep using it
without needing to enter password again for ssh.

```shell
systemctl enable --user ssh-agent.service
```

### Ghostty Daemon[^2]

This allows opening a new ghostty terminal window faster.

```shell
systemctl enable --user app-com.mitchellh.ghostty.service
```

## Fonts

This list includes fonts for system, symbols, emojis, and icons. Without these
fonts, fonts do not looks good on website, emojis are not rendered on websites,
symbol fonts are not rendered in system elements (like waybar).

```shell
sudo pacman -S noto-fonts \
  noto-fonts-emoji \
  ttf-dejavu \
  ttf-liberation \
  ttf-nerd-fonts-symbols
```

## Setting up Fingerprint

Follow <https://wiki.archlinux.org/title/Fprint>

For fingerprint support in `swaylock`, follow this - <https://github.com/swaywm/swaylock/issues/61#issuecomment-965175390>

## External Display Brightness Control

Load `i2c-dev` kernel module.

```shell
sudo modprobe i2c-dev
```

To load this module on every boot automatically, use this:

```shell
echo i2c-dev | sudo tee /etc/modules-load.d/i2c-dev.conf
```

Once `i2c-dev` module is loaded, you should be able to use `ddcutil` for
managing external monitor brightness.

## `udev` Rules for QMK Via Keyboards[^3]

By default, QMK Via keyboard devices are added to system without read/write
permissions. This result in being unable to make changes to it via
<http://usevia.app/>.

To resole this, add [50-qmk.rules](https://github.com/qmk/qmk_firmware/blob/master/util/udev/50-qmk.rules)
to `/etc/udev/rules.d/`. This will make the device readable and writable.

[^1]: <https://wiki.archlinux.org/title/SSH_keys>
[^2]: <https://ghostty.org/docs/linux/systemd#starting-ghostty-at-login>
[^3]: <https://docs.qmk.fm/faq_build#linux-udev-rules>
