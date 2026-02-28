<h1 style="border-bottom: none; margin-bottom: 0px;">Updating Lenovo BIOS</h1>
<div style="border-bottom: 1px solid #aaa; padding-bottom: 12px;">
<div style="float: left; margin-right: 8px;"><img src="https://avatars.githubusercontent.com/u/41875927?v=4" height="50px"></div>
<div>Written by <a href="https://github.com/vexcess/">VExcess</a>
<br>
<span style="color: gray">5 minute read • Feb 27, 2026</span></div>
</div>
<br>
My rant about doing a BIOS update turning into a 6 hour adventure. Hope this helps if you ever run into the same issues.

## [title to seperate summary from content]
My 5.1 Ghz CPU is being underclocked to 0.8 GHz.  
Doing anything on my laptop is excruciatingly slow.  
I complain in the Linux Mint Discord because I think it's a kernel issue.  
temmie (person in the discord) says to try a newer kernel.  
I'm using kernel 6.8 .  
Both 6.14 and 6.17 throw compiler errors when I try to install them.  
I stay on 6.8 .  
I realize that maybe it's not a kernel issue because the underclocking happens if I switch back to a kernel that was previously stable.  
temmie says they think it's a BIOS issue.  
I decide to try and update my BIOS.  

No "update BIOS" option in BIOS.

Searches on Lenovo website for new BIOS.  
New BIOS is only available as an exe installer.  
I am on Linux (running the exe through WINE would definitely not work).  

Boots into my Windows partition.  
It spends half an hour doing updates because I rarely use it.  
I download the exe BIOS installer.  
I run the BIOS installer.  
> Error: esp disk space not enough

I decide to try and update through Lenovo Vantage.  
Installing Lenovo Vantage uses 3 GB of storage.  
Lenovo Vantage says my BIOS is the latest version and there are no updates.  

I go back to Linux and extract the exe file `7z x ngcn34ww.exe`.  
I format a flash drive as FAT32.  
I download an EFI shell from https://archlinux.org/packages/extra/any/edk2-shell/download/ .   
I create the directory `/EFI/BOOT` on the flash drive.  
I copy `edk2-shell-202508-1-any.pkg/usr/share/edk2-shell/x64/Shell.efi` to `/EFI/BOOT`.  
I rename `Shell.efi` to `BOOTX64.EFI`.  
I copy the rest of the files extracted from the exe to the root of the usb drive.  
I reboot my system and boot from the usb drive.  
I enter into the efi shell.  
I go into the usb drive `fs1:` .  
I try to install the new BIOS `InterToolx64.efi ILS4P.bin` .  
> Error: IHISI 10h failed.  
> Internal Error Cdoe: 0xEF.  
> Function not supported.  
> 
> Error: Initialize  
> IHISI 10h failed.  

I decide to try and grow my ESP/EFI partition.  
I boot back into Windows.  
I shrink my Windows partition.  
I download GParted.  
I use BalenaEtcher to flash GParted to the USB drive.  
I boot into GParted.  
GParted drivers for my touchpad stink so I have to find a mouse.  
I move all the Windows partitions to the right (this takes a long time).  
I boot back into Windows to make sure it still works.  
I try to grow the EFI partition in Windows disk management.  
Windows cannot grow the EFI partition.  
I boot back into GParted.  
I grow the EFI partition from 100 to 201 MB.  
I boot back into Windows.  
I run the BIOS installer exe.  
> Error: esp disk space not enough

I boot back into Linux.  
I mount the EFI partition.  
I run baobab on the EFI partition.  
66.5 MB of the 201 MB are used.

I run `df -h /boot/efi`  
> Filesystem      Size  Used Avail Use% Mounted on  
> /dev/nvme0n1p1   96M   64M   33M  67% /boot/efi

There are discrepancies in disk usage between different tools.  
I run `sudo dosfsck /dev/nvme0n1p1 -b` .  
> There are differences between boot sector and its backup.

I run `sudo dosfsck /dev/nvme0n1p1 -w -r` .  
I choose "Copy original to backup".  
> Dirty bit is set. Fs was not properly unmounted and some data may be corrupt.

I choose "Remove dirty bit".  
I run dosfsck a second time `sudo dosfsck /dev/nvme0n1p1` .  
> There are differences between boot sector and its backup.

I choose "Copy original to backup"  
> The changes have not yet been written, you can still choose to leave the filesystem unmodified

I choose "Write changes".  
I run dosfsck a third time.  
Finally no errors. The EFI partition is fixed? (forshadowing: it's not).  
I check the partition size `df -h /boot/efi` .  
> Filesystem      Size  Used Avail Use% Mounted on  
> /dev/nvme0n1p1   96M   64M   33M  67% /boot/efi  

The EFI partition is still its original size.  

I install fatresize `sudo apt install fatresize` .  
I try to resize the filesystem `sudo fatresize -s max /dev/nvme0n1p1` .  
> fatresize 1.1.0 (20240401)  
> part(start=2048, end=413695, length=411648)  
> Error: Can't have overlapping partitions.  

I boot back into GParted.  
I run check on the EFI partition.  
```
Check and repair file system (fat32) on /dev/nvme0n1p1
    calibrate /dev/nvme0n1p1
        path: /dev/nvme0n1p1 (partition)
        start: 2048
        end: 413695
        size: 411648 (2001.00 MiB)
    check file system on /dev/nvme0n1p1 for errors and (if possible) fix them
        fsck.fat -a -w -v '/dev/nvme0n1p1'
            fsck.fat 4.2 (2021-01-31)
            Checking we can access the last sector of the filesystem
            Boot sector contents:
            System ID "MSDOS5.0"
            Media byte 0xf8 (hard disk)
                512 bytes per logical cluster
                1024 bytes per cluster
                6654 reserved clusters
            First FAT starts at byte 3406848 (sector 6654)
                2 FATS, 32 bit entries
                3933728 bytes per FAT (= 769 sectors)
            Root directory start at cluster 2 (arbitrary size)
            Data area starts at byte 4194304 (sector 8192)
                98304 data clusters (10063296 bytes)
            63 sectors/tracks, 255 heads
                2048 hidden sectors
                204800 sectors total
            Reclaiming unconnected clusters.
            Check free remaining cluster summary.
            /dev/nvme0n1p1: 197 files, 64919/98304 clusters

    grow file system to fill the partition
        using libparted
    libparted messages
        GNU Parted cannot resize this partition to this size. We're working on it!
```

I go through the dosfsck -> GParted process again.  
Still I get:  
> GNU Parted cannot resize this partition to this size. We're working on it!

I decide to reformat the EFI partition.  
I boot back into Linux.  
I create a backup of the EFI partition `sudo dd if=/dev/nvme0n1p1 of=~/Downloads/efi_partition.img bs=4M status=progress` .  
I copy the backup onto a USB drive.  
I reformat the EFI partition as FAT in Gnome Disks.  
I check the file system of the newly formated partition:
> FAT 16

EFI partition is supposed to be FAT 32.  

I boot back into GParted.  
I reformat the EFI partition again to FAT 32.  
This time it is actually FAT 32.  
I restart my computer.  
I can't boot into any of my installed OS's (my EFI partition is empty now).  

I must create a live Linux USB to restore my EFI partition.  
I download Linux Mint iso on my other computer.  
I use Balena Etcher to flash it to another USB drive.  
I boot the live image.  
I mount the backup of the EFI partition from the first USB drive.  
I copy the files to the newly formated EFI partition.  
I boot back into Windows (not through GRUB).  
I run the BIOS installer exe.  
It installs the new BIOS without erroring.  

It worked! Am I done here? (foreshadowing: I am not done here).  

I try to boot back into non-live Linux.  
It displays the Linux Mint logo for 2 minutes.
> You are in recovery mode

I can't do anything in recovery mode.  
I check the BIOS settings.  
Secure boot got enabled during the BIOS update.  
I disable secure boot.  
I still can't boot into non-live Linux.  

I boot back into the live Linux USB.  
I get the UUID of the EFI partition.  
The UUID got changed when the partition was reformated.  
I open the `/etc/fstab` file in non-live Linux partition (a good day to not be using entire-partition encryption).  
I replace the old UUID with the new one.  
I boot back into non-live Linux.  

I still can't boot into Windows through GRUB.  
I boot back into non-live Linux.  
I update grub `sudo update-grub` .  
I boot into Windows through GRUB.  
It works!  

My BIOS is now the latest version and I can boot into Windows through the Windows bootloader and through GRUB, and I can boot into Linux through GRUB.

The whole ordeal took six hours.  
This is ridiculous.  
I write a lousy blog post to both rant and help others who run into the same issue.

Did any of this actually solve the underclocking issue? I don't know yet.
