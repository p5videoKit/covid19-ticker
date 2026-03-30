# [covid19-ticker](https://github.com/p5videoKit/covid19-ticker.git)

- ?v=8

## Setup

- run locally with VS Code live server
  - [src/index.html](src/index.html)

- Reset in dashboard

- Select ticker in Effect drop down

- https://unpkg.com/p5-video-kit@0.0.17/dist/p5videoKit.esm.js

## TODO

[] fadeout to next day

## Notes

```
2026-03-30 11:13:25

git rm -r --cached .DS_Store

?u=1&d=settings/ticker-bkyn.json

<a href="../index.html?u=1&d=settings/ticker-bkyn.json" target="settings-1">settings/ticker-bkyn.json</><br/><br/>


2026-03-29 21:16:41

    { prop: 'day_count_up', selection: [0, 1] },


2026-03-29 12:19:47

  if (this.day_next == 0) select_down();

eff_ticker.prototype.draw_dot_figure = function (a_x, a_y, len_x, len_y) {
// !!@ TODO [] Sai: source for point data
this.draw_figure
    { prop: 'draw_figure', selection: [0, 1], br: 1 },

2025-10-23 10:48:56 v=7
2025-10-23 08:41:39

fade_down
draw_fade_down
this.a_state == 'fade_down'
this.a_state == 'draw_bit';
this.a_state = 'draw_bit';
this.a_state = 'page_pause';

eff_ticker.prototype.prepareOutput = function () {
    this.draw_bit(); a_state === 'draw_bit
    this.page_pause();

page_next
  dot_next
  select_entry
  begin_day
  clear_per_day
date_next

test_fast
test_fast_n

2025-10-22 21:14:54

  this.page_pause_secs = 10;
  this.draw_min_secs = 3;
  this.draw_start_time = millis();
  this.draw_paused_count_max = 400;

page_pause_start
draw_paused
this.a_paused
set_paused

2025-10-22 09:51:01

>> display last sample date

!!@ most recent note not 2025-10-22 but 2025-08-29
g_ticker.a_data[g_ticker.a_data.length - 1].on
'2025-08-29'

  str += ' - TOTAL DEATHS ' + ds + '';

eff_ticker.prototype.draw_dot_figures = function () {
eff_ticker.prototype.draw_dot_figure = function (a_x, a_y, len_x, len_y) {

2025-10-22 07:44:06
Sai Ram Ved Vijapurapu

// eff_ticker.prototype.draw_dots = function () {

// eff_ticker.prototype.draw_dot = function (a_x, a_y, len_x, len_y) {


```

## DONE

- [x] slower draw_dot_figures
- [x] dashboard option for Sai's figures
- [x] option to check for video - allow no camera mode
