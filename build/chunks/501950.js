/** Chunk was on web.js **/
/** chunk id: 501950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => s,
  HS: () => c,
  Hg: () => l,
  l0: () => u
}), require("./35282.js"), require("./704826.js"), require("./290780.js");
var Chunk264344 = require("./264344.js"),
  i = require.n(Chunk264344),
  Chunk992774 = require("./992774.js"),
  Chunk149396 = require("./149396.js");

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
      return /^default/.test(s) ? (r = true, i = o.w5, s = s.replace("default", "Default")) : i = null != i && "" !== i ? i : s, null != c && (n = c), {
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
  return e !== o.h7.VIDEO_INPUT && !r && (null === i() || true === i() || null == (n = i().os) ? true : n.family) != null && /^win/i.test(i().os.family) && a.unshift({
    id: o.w5,
    type: e,
    index: false,
    name: "Default"
  }), a
}

function l() {
  return new Promise(e => {
    (0, a.zS)().getInputDevices(t => e(s(o.h7.AUDIO_INPUT, t)))
  })
}

function c() {
  return new Promise(e => {
    (0, a.zS)().getOutputDevices(t => e(s(o.h7.AUDIO_OUTPUT, t)))
  })
}

function u() {
  return new Promise(e => {
    (0, a.zS)().getVideoInputDevices(t => e(s(o.h7.VIDEO_INPUT, t)))
  })
}