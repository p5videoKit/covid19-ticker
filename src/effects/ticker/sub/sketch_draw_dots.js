//

import eff_ticker from '../sub/eff_ticker_sub.js';

eff_ticker.prototype.draw_dots_fast = function () {
  if (this.draw_paused_count) {
    this.draw_paused_count--;
    if (this.draw_paused_count <= 0) {
      this.draw_paused_count = this.draw_paused_init;
    } else {
      return;
    }
  }
  let n = this.test_fast ? this.test_fast_n : 1;
  // attempt at dot rhythm
  // n = random([0, 1]);
  while (n-- > 0) {
    this.draw_dots();
  }
};

eff_ticker.prototype.draw_dots = function () {
  if (this.draw_figure) {
    if (!this.draw_paused_init) {
      this.draw_paused_init = 10;
      this.draw_paused_count = this.draw_paused_init;
    }
    if (this.a_count > this.draw_paused_count_max) {
      this.draw_paused_count = 1;
      // console.log('this.draw_paused_count = 1');
    }
    this.draw_dot_figures();
    return;
  }
  if (this.a_string_index < this.a_string_date_end_index) {
    return;
  }
  if (this.dot_count_reached()) {
    return;
  }
  this.dot_count++;
  // console.log('draw_dots dot_count', dot_count, 'bit_count', bit_count);
  let x = this.panel_right + this.dot_x;
  let y = this.panel_top + this.dot_y;
  this.fill_dot_color();
  this.draw_dot(x, y, this.pix_len, this.pix_len);
  this.dot_x += this.pix_len;
  if (this.dot_x + this.pix_len >= this.panel_width) {
    this.dot_x = 0;
    this.dot_y += this.pix_len;
    if (this.dot_y + this.pix_len >= this.panel_height) {
      this.dot_y = 0;
    }
  }
};

eff_ticker.prototype.draw_dot_figures = function () {
  if (this.a_string_index < this.a_string_date_end_index) return;
  if (this.dot_count_reached()) return;

  this.dot_count++;

  let scaleFactor = 3;
  let dotSize = this.pix_len * scaleFactor;

  let x = this.panel_right + this.dot_x;
  let y = this.panel_top + this.dot_y;

  this.fill_dot_color();
  this.draw_dot_figure(x, y, dotSize, dotSize);

  this.dot_x += dotSize;
  if (this.dot_x + dotSize >= this.panel_width) {
    this.dot_x = 0;
    this.dot_y += dotSize;
    if (this.dot_y + dotSize >= this.panel_height) {
      this.dot_y = 0;
    }
  }
};

eff_ticker.prototype.dot_next = function () {
  // console.log('dot_next dot_cindex', dot_cindex);
  this.dot_cindex = 1;
  this.dot_count = 0;
  this.select_entry();
  if (this.dot_count_total + this.a_count > this.dot_panel_max) {
    // console.log('dot_next dot_panel_max dot_count_total', this.dot_count_total);
    this.dot_count_total = 0;
  }
  if (this.cycle_done) {
    this.cycle_start_init();
  }
};

eff_ticker.prototype.cycle_start_init = function () {
  // console.log('cycle_start_init a_dir', a_dir);
  this.let_init();
  this.fresh_canvas();
  this.load_json();
};

eff_ticker.prototype.fresh_canvas = function () {
  // console.log('fresh_canvas day_next', this.day_next);
  this.clear_per_day();
  this.dot_x = 0;
  this.dot_y = 0;
};

eff_ticker.prototype.dot_count_reached = function () {
  return this.dot_count >= this.a_count;
};

eff_ticker.prototype.draw_dot = function (a_x, a_y, len_x, len_y) {
  this.output.rect(a_x, a_y, len_x, len_y);
  // ellipse(a_x + len_x / 2, a_y + len_y / 2, len_x, len_y);
};

eff_ticker.prototype.draw_dot_figure = function (a_x, a_y, len_x, len_y) {
  const scale = len_y / 13;
  const offsetX = a_x;
  const offsetY = a_y;

  this.output.beginShape();
  this.output.vertex(offsetX + scale * 6, offsetY + scale * 3.5);
  this.output.bezierVertex(
    offsetX + scale * 6.8284,
    offsetY + scale * 3.5,
    offsetX + scale * 7.5,
    offsetY + scale * 2.8284,
    offsetX + scale * 7.5,
    offsetY + scale * 2
  );
  this.output.bezierVertex(
    offsetX + scale * 7.5,
    offsetY + scale * 1.1716,
    offsetX + scale * 6.8284,
    offsetY + scale * 0.5,
    offsetX + scale * 6,
    offsetY + scale * 0.5
  );
  this.output.bezierVertex(
    offsetX + scale * 5.1716,
    offsetY + scale * 0.5,
    offsetX + scale * 4.5,
    offsetY + scale * 1.1716,
    offsetX + scale * 4.5,
    offsetY + scale * 2
  );
  this.output.bezierVertex(
    offsetX + scale * 4.5,
    offsetY + scale * 2.8284,
    offsetX + scale * 5.1716,
    offsetY + scale * 3.5,
    offsetX + scale * 6,
    offsetY + scale * 3.5
  );
  this.output.endShape(this.output.CLOSE);

  this.output.beginShape();
  this.output.vertex(offsetX + scale * 6, offsetY + scale * 4.5);
  this.output.bezierVertex(
    offsetX + scale * 4.4427,
    offsetY + scale * 4.5,
    offsetX + scale * 2.8215,
    offsetY + scale * 4.1431,
    offsetX + scale * 1.3711,
    offsetY + scale * 3.5713
  );
  this.output.vertex(offsetX + scale * 0.6289, offsetY + scale * 5.4285);
  this.output.bezierVertex(
    offsetX + scale * 1.7048,
    offsetY + scale * 5.8579,
    offsetX + scale * 2.8573,
    offsetY + scale * 6.1468,
    offsetX + scale * 3.9999,
    offsetY + scale * 6.3301
  );
  this.output.vertex(offsetX + scale * 3.9999, offsetY + scale * 7.2004);
  this.output.bezierVertex(
    offsetX + scale * 4.0849,
    offsetY + scale * 8.0939,
    offsetX + scale * 3.6832,
    offsetY + scale * 8.8974,
    offsetX + scale * 2.1055,
    offsetY + scale * 12.0528
  );
  this.output.vertex(offsetX + scale * 3.8943, offsetY + scale * 12.9472);
  this.output.vertex(offsetX + scale * 5.4471, offsetY + scale * 9.8416);
  this.output.bezierVertex(
    offsetX + scale * 5.5518,
    offsetY + scale * 9.6322,
    offsetX + scale * 5.7658,
    offsetY + scale * 9.5,
    offsetX + scale * 5.9999,
    offsetY + scale * 9.5
  );
  this.output.bezierVertex(
    offsetX + scale * 6.234,
    offsetY + scale * 9.5,
    offsetX + scale * 6.448,
    offsetY + scale * 9.6323,
    offsetX + scale * 6.5527,
    offsetY + scale * 9.8416
  );
  this.output.vertex(offsetX + scale * 8.1055, offsetY + scale * 12.9472);
  this.output.vertex(offsetX + scale * 9.8943, offsetY + scale * 12.0528);
  this.output.vertex(offsetX + scale * 8.3166, offsetY + scale * 8.8974);
  this.output.bezierVertex(
    offsetX + scale * 7.9149,
    offsetY + scale * 8.0939,
    offsetX + scale * 7.9999,
    offsetY + scale * 7.2004,
    offsetX + scale * 7.9999,
    offsetY + scale * 6.3301
  );
  this.output.bezierVertex(
    offsetX + scale * 9.1409,
    offsetY + scale * 6.1471,
    offsetX + scale * 10.2818,
    offsetY + scale * 5.8534,
    offsetX + scale * 11.359,
    offsetY + scale * 5.4332
  );
  this.output.vertex(offsetX + scale * 10.6264, offsetY + scale * 3.5723);
  this.output.bezierVertex(
    offsetX + scale * 9.1728,
    offsetY + scale * 4.139,
    offsetX + scale * 7.5595,
    offsetY + scale * 4.5,
    offsetX + scale * 6,
    offsetY + scale * 4.5
  );
  this.output.endShape(this.output.CLOSE);
};

// !!@ TODO [] Sai: source for point data

eff_ticker.prototype.fill_dot_color = function () {
  this.output.fill(this.dot_colors[this.dot_cindex]);
};
