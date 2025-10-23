//

import eff_ticker from '../sub/eff_ticker_sub.js';

// let page_pause_count;

eff_ticker.prototype.page_pause_start = function () {
  // page_pause_count = test_fast ? 1 : page_pause_frames;
  // page_pause_count = test_fast ? page_pause_frames / 2 : page_pause_frames;
  // console.log('page_pause_start day_next', this.day_next);
  let now = millis();
  let lapse = (now - this.draw_start_time) / 1000;
  this.draw_start_time = now;
  console.log('page_pause_start lapse', lapse);
  let diff = this.page_pause_secs - lapse;
  console.log('page_pause_start diff', diff);
  if (diff < this.draw_min_secs) diff = this.draw_min_secs;
  let n = this.test_fast ? 0 : diff;
  // let n = this.test_fast ? 0 : this.page_pause_secs;
  if (this.test_skip_pause) n = 0;
  // if (this.day_next == 1) n = 0;
  this.page_pause_count = n * frameRate();
  this.a_state = 'page_pause';
  this.set_last();
};

eff_ticker.prototype.page_pause = function () {
  if (!this.dot_count_reached()) {
    return;
  }
  this.page_pause_count -= 1;
  if (this.page_pause_count < 0) {
    this.page_next();
  }
};

eff_ticker.prototype.page_next = function () {
  this.a_state = 'draw_bit';
  this.a_paused = 0;
  this.dot_next();
};

eff_ticker.prototype.set_paused = function () {
  this.a_paused = 1;
  // console.log('a_paused', a_paused, 'y_pos', y_pos);
  this.a_x = 0;
};

eff_ticker.prototype.draw_paused = function () {
  if (this.message_done()) {
    this.page_pause_start();
  }
};
