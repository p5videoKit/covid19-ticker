//

// establish settings and reload page
function videoKit_settings_init() {
  console.log('videoKit_settings');
  //
  // page will reload to take settings
  videoKit.store_restore_from(aSettings);
}

let aSettings = {
  setting: '',
  comment: '',
  back_color: 1,
  room_name: 'VideoKit-Room-1',
  patch_layout: 'Single',
  canvas_size: '960x540',
  capture_size: 'default',
  render_size: 'Canvas',
  chat_name: 'jht',
  chat_chk: 0,
  live_index: 0,
  live_chk: 0,
  urects_lock: 0,
  urects_count: 2,
  canvas_resize_ref: '',
  canvas_data_chk: 0,
  mediaDiv_states: [
    null,
    {
      vis: 0,
      mute: 1,
    },
  ],
  patches: [
    {
      eff_spec: {
        ipatch: 0,
        imedia: 1,
        eff_label: 'a_example_props',
        urect: {
          width: 960,
          height: 540,
          x0: 0,
          y0: 0,
        },
      },
      eff_props: {
        num_prop: 100,
        str_prop2: 'red',
        textInput_prop: 'Hello world!',
        slider1_prop: 4,
        slider2_prop: 5,
        slider3_prop: 0.5,
      },
    },
    {
      eff_spec: {
        ipatch: 1,
        imedia: 1,
        eff_label: 'ticker',
        urect: {
          width: 960,
          height: 540,
          x0: 0,
          y0: 0,
        },
      },
      eff_props: {
        display_copy_right: 0,
        locale: 'GY',
        display_tall: 0,
        display_single_date: 0,
        most_lost_ndays: 0,
        start_date: '',
        test_fast: 1,
        test_skip_pause: 0,
      },
    },
  ],
};
