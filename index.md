---
layout: page
---

Hi, I'm Emma. I'm a musician/developer of sorts. I've worked on a few projects such as [cfw.guide](https://cfw.guide/) and [dumpling](https://github.com/emiyl/dumpling). I'm also currently working on writing my own game, with music written by myself.

## cfw.guide

[cfw.guide](https://cfw.guide/) is a website dedicated to providing easy to understand, beginner level instructions for console hacking. It's written with the idea that where people can go wrong, people will go wrong, so targets at being as clear as possible, providing a simple, step-by-step experience.

<img src="/assets/images/cydia_picture.jpg" alt="Picture of a Jailbroken iPhone">

The site started as just for the [PlayStation Vita](https://vita.hacks.guide) and [PlayStation TV](https://vita.hacks.guide) consoles. It has since evolved to support guides for the [Nintendo DSi](https://dsi.cfw.guide/), Apple's [iOS](https://ios.cfw.guide/) and the [Cemu Emulator](https://cemu.cfw.guide/) for Wii U games. Starting out with just me, the guides have expanded, with multiple writers working on the site.

I'd like to thank [Plailect](https://github.com/Plailect) for creating the guide format that inspired cfw.guide, with his website [hacks.guide](https://hacks.guide/), which the PlayStation Vita guide is now a part of, as a collaboration between us both. He has since left the website to go on to do bigger and better things.

## dumpling

<img style="float: right;" src="/assets/images/dumpling.png" alt="dumpling logo" width="80" height="80">

[dumpling](https://github.com/emiyl/dumpling) is a project that aims to make dumping Wii U games, updates and DLC easier. The dumps are in a decrypted format, ready to use in the [Cemu](https://cemu.info/) emulator.

Before dumpling existed, it was rather difficult and time-consuming to actually get games off the console. Two methods included:

1. Copying over FTP, which is slow and unreliable
2. Extracting a NAND dump, which is slow and doesn't allow dumping from USB sources

Due to the difficulty of dumping the games for use in the emulator, a lot of people resorted to less than legal ways to get the games. dumpling aims to combat this by making it easier and faster to dump games, to an SD card or FAT32 formatted USB device.

The latest 1.1.2 version of dumpling has issues with a poorly optimised FAT driver that makes dumping certain folders extremely slow. This tends to occur when the folder has a large amount of files that start with the same letters. Unfortunately, one of the Wii U's biggest games, Breath of the Wild, has some of the aforementioned folders.

I have worked with [Crementif](https://github.com/Crementif) and the next release of dumpling will include a modified driver, a rewrite of the whole program, and a GUI.

<img src="/assets/images/dumplingGUI.png" alt="dumpling GUI screenshot">

## DungeonNX

DungeonNX is a little videogame project I'm writing to teach myself some programming. It's not much yet, but as a first start I'm quite proud of it. It's being developed for the Nintendo Switch and uses C and SDL. An image of the first room is shown below, from a test build for macOS.

<img src="/assets/images/DungeonNX.png" alt="DungeonNX screenshot">
