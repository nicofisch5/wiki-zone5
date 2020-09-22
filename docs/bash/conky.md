# Fichier de conf conky

```bash
# Generated with Conky Wizard
# Copyright (C) 2010 JosÃ© David Abad GarcÃ­a
# GPL Version 3
# 
# WARNING! All changes made in this file will be lost if the program runs again!

# Default Fonts
use_xft yes
xftfont DejaVu Sans:size=7
override_utf8_locale yes

# Performance Settings
update_interval 2
total_run_times 0
double_buffer yes
no_buffers yes
net_avg_samples 2
text_buffer_size 1024

# Window Settings
own_window yes
own_window_transparent yes
#own_window_type override
own_window_type normal
own_window_argb_visual yes
#own_window_type normal
own_window_hints undecorated,below,sticky,skip_taskbar,skip_pager

# Window border
draw_borders no
draw_shades no

# Default Color
default_color 232323
#default_color E0DFDE

# Color Title.
#color0 FFAA00
color0 dc6543

# Color bar
#color1 2c9ccc
color1 abcdef

# Color grey
color2 999999

# Size and position
minimum_size 256 1056
gap_x 0
gap_y 24
alignment top_right

TEXT

${color 383431}${font GE Inspira:pixelsize=70}${voffset -15}${time %H:%M}
${font GE Inspira:pixelsize=48}${voffset -40}${time %A}
${font}${voffset -40}${color dc6543}${font GE Inspira:pixelsize=32}${time %d}${voffset -10}${color 383431}${font GE Inspira:pixelsize=18}${time  %B} ${time %Y}


${voffset -60}
${GOTO 36}${font DejaVu Sans:bold:size=8}${color0}CPU / Mem${font}${color}
${GOTO 36}${color}CPU0 :${GOTO 120}${cpubar cpu0 10,75} ${cpu cpu0} %
${GOTO 36}${color}CPU1 :${GOTO 120}${cpubar cpu1 10,75} ${cpu cpu1} %
${GOTO 36}${color}CPU2 :${GOTO 120}${cpubar cpu2 10,75} ${cpu cpu2} %
${GOTO 36}${color}CPU3 :${GOTO 120}${cpubar cpu3 10,75} ${cpu cpu3} %
${GOTO 36}${color}Temp :${GOTO 120}${acpitemp}°


${GOTO 36}${color}RAM${GOTO 80}$mem / $memmax${GOTO 185}(${memperc}%)
${GOTO 36}${membar 10,180}${color}

${GOTO 36}${color}SWAP${GOTO 80}$swap / $swapmax${GOTO 185}(${swapperc}%)
${GOTO 36}${swapbar 10,180}${color}
#${GOTO 36}Uptime:${GOTO 120}${uptime}


${GOTO 36}${font DejaVu Sans:bold:size=8}${color0}Disks${font}${color}
${GOTO 36}/${GOTO 80}${fs_used /} / ${fs_size /}${GOTO 185}(${fs_used_perc /}%)
${GOTO 36}${fs_bar 10,180 /}${color}

${GOTO 36}/home${GOTO 80}${fs_used /home} / ${fs_size /home}${GOTO 185}(${fs_used_perc /home}%)
${GOTO 36}${fs_bar 10,180 /home}${color}

${GOTO 36}/var${GOTO 80}${fs_used /var} / ${fs_size /var}${GOTO 185}(${fs_used_perc /var}%)
${GOTO 36}${fs_bar 10,180 /var}${color}

${GOTO 36}SSD Linux R: ${GOTO 99}${diskiograph_read /dev/sdb 10,120 } ${diskio_read /dev/sdb}
${GOTO 36}SSD Linux W: ${GOTO 99}${diskiograph_write /dev/sdb 10,120 } ${diskio_write /dev/sdb}

${GOTO 36}SSD W7 R: ${GOTO 99}${diskiograph_read /dev/sda 10,120 } ${diskio_read /dev/sda}
${GOTO 36}SSD W7 W: ${GOTO 99}${diskiograph_write /dev/sda 10,120 } ${diskio_write /dev/sda}

${GOTO 36}${font DejaVu Sans:bold:size=8}${color0}Network${font}${color}
${GOTO 36}Upspeed:${GOTO 120}${upspeedgraph eth0 10,75 B7B2AD B7B2AD} (${downspeedf eth0}k/s)
${GOTO 36}Downspeed:${GOTO 120}${downspeedgraph eth0 10,75 B7B2AD B7B2AD} (${upspeedf eth0}k/s)
#${GOTO 36}Uploaded:${GOTO 120}${totalup eth0}
#${GOTO 36}Downloaded:${GOTO 120}${totaldown eth0}
#${GOTO 36}Local IP:${GOTO 120}${addr eth0}


${GOTO 36}${font DejaVu Sans:bold:size=9}${color0}Process${font}${color}
${GOTO 36}${color}Name${GOTO 120}CPU%${GOTO 160}RAM%
${GOTO 36}${color0}${top name 1}${GOTO 120}${top cpu 1}${GOTO 160}${top mem 1}
${GOTO 36}${color lightgrey}${top name 2}${GOTO 120}${top cpu 2}${GOTO 160}${top mem 2}
#${GOTO 36}${color lightgrey}${top name 3}${GOTO 120}${top cpu 3}${GOTO 160}${top mem 3}

${GOTO 36}${color}Mem usage
${GOTO 36}${color0}${top_mem name 1}${GOTO 120}${top_mem cpu 1}${GOTO 160}${top_mem mem 1}
${GOTO 36}${color lightgrey}${top_mem name 2}${GOTO 120}${top_mem cpu 2}${GOTO 160}${top_mem mem 2}
#${GOTO 36}${color lightgrey}${top_mem name 3}${GOTO 120}${top_mem cpu 3}${GOTO 160}${top_mem mem 3}


#${GOTO 36}${font DejaVu Sans:bold:size=9}${color0}Ports${font}${color}
#${GOTO 36}Ouverts : ${color orange}${tcp_portmon 1 65535 count}${color}  / Entrants : ${color red}${tcp_portmon 1 32767 count}${color} / Sortants : ${color lightgreen}${tcp_portmon 32768 61000 count}${color}


#${execpi 1800 conkyForecast --location=FRXX0042 --template=/home/nico5/.conky/conkyForecast.template}
#${execpi 1800 conkyForecast --location=FRXX0095 --template=/home/nico5/.conky/conkyForecast.template}
```