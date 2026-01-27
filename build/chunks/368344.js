/** Chunk was on web.js **/
/** chunk id: 368344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DT: () => u,
  P5: () => s,
  _e: () => l,
  tS: () => c
}), require("./747238.js"), require("./812715.js"), require("./667532.js");
var Chunk214958 = require("./214958.js"),
  i = require.n(Chunk214958),
  Chunk823598 = require("./823598.js"),
  Chunk713754 = require("./713754.js");

function s(e, t) {
  var n;
  let r = false,
    a = t.map((t, n) => {
      let {
        guid: i,
        guid: a,
        name: s,
        name: l,
        index: c,
        facing: u,
        hardwareId: d,
        containerId: f,
        effects: p
      } = t;
      return /^default/.test(s) ? (r = true, i = o.dx, s = s.replace("default", "Default")) : i = null != i && "" !== i ? i : s, null != c && (n = c), {
        id: i,
        type: e,
        index: n,
        name: s,
        originalName: l,
        originalId: a,
        facing: u,
        hardwareId: d,
        containerId: f,
        effects: p
      }
    });
  return e !== o.oh.VIDEO_INPUT && !r && (null === i() || true === i() || null == (n = i().os) ? true : n.family) != null && /^win/i.test(i().os.family) && a.unshift({
    id: o.dx,
    type: e,
    index: false,
    name: "Default"
  }), a
}

function l() {
  return new Promise(e => {
    (0, a.lE)().getInputDevices(t => e(s(o.oh.AUDIO_INPUT, t)))
  })
}

function c() {
  return new Promise(e => {
    (0, a.lE)().getOutputDevices(t => e(s(o.oh.AUDIO_OUTPUT, t)))
  })
}

function u() {
  return new Promise(e => {
    (0, a.lE)().getVideoInputDevices(t => e(s(o.oh.VIDEO_INPUT, t)))
  })
}