---
title: "Linux Distros"
---

Things that I like / dislike about Linux distros.

- Arch Linux
  - :green_circle: Extremely sane package and dependency management.
  - :green_circle: AUR.
  - :green_circle: Rolling release.
  - :green_circle: Ships vanilla packages.
  - :red_circle: Initial setup time (30 minutes - 2 hours).

- Gentoo
  - :green_circle: Too flexible. Can become what we want.
  - :green_circle: Rolling release.
  - :green_circle: Ships vanilla packages.
  - :red_circle: Non binary packages.
  - :red_circle: Managing flags can become complex for nonstandard / minimal systems.
  
- Debian Sid
  - :green_circle: Rolling release.
  - :green_circle: Ships vanilla packages.
  - :red_circle: Package management is suboptimal.
    - Packages are split into too many smaller packages.
    - Dependency management is insane. Installing blueman will result in gnome getting installed.

# Dream Linux Distribution

- [ ] Rolling release, no major version upgrades.
- [ ] Atomic and reversible upgrades.
- [ ] Immutable root filesystem.
- [ ] Easy to install and manage user level packages.
  - [ ] User installed packages should be available in PATH just like root level packages, so that other programs can use them.
- [ ] Performant (not like nix, where packages perform slow (why?))
- [ ] Package manager features
  - [ ] Easy to create and maintain packages when needed (PKGBUILD files were easiest).
  - [ ] Vanilla packages.
- [ ] `arm64` support.
