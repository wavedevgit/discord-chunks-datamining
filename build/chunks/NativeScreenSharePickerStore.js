/** Chunk was on web.js **/
/** chunk id: 571044, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ay: () => Y,
  JA: () => v,
  XA: () => x,
  jd: () => D
});
var i, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk401843 = require("./401843.js"),
  Chunk929921 = require("./929921.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk279250 = require("./279250.js"),
  Chunk880144 = require("./880144.js"),
  Chunk934484 = require("./934484.js"),
  Chunk613235 = require("./613235.js"),
  Chunk997630 = require("./997630.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var v = function(e) {
  return e[e.Present = 0] = "Present", e[e.Update = 1] = "Update", e[e.Cancel = 2] = "Cancel", e[e.Error = 3] = "Error", e
}({});
let S = false,
  I = 0,
  T = 0,
  C = false,
  N = {};

function R() {
  return f.A.supports(y.O5.NATIVE_SCREENSHARE_PICKER)
}

function w() {
  return f.A.getUseSystemScreensharePicker()
}

function P() {
  let e = w() && (T > 0 || S && 0 === I);
  if (e !== C) {
    var t, n;
    C = e, null == (n = f.A.getMediaEngine()) || null == (t = n.setNativeDesktopVideoSourcePickerActive) || t.call(n, C)
  }
}

function D() {
  return (0, a.useEffect)(() => (I++, P(), () => {
    0 == --I && P()
  }), [])
}

function x() {
  return (0, a.useEffect)(() => (T++, P(), () => {
    --T, P()
  }), [])
}

function L() {
  let e = u.A.getChannel(_.A.getVoiceChannelId());
  return S = null != e && (0, m.A)(f.A) && (0, h.vz)(e, d.A, p.A, false), P(), false
}

function j() {
  return null != r ? (0, E.A)(r) : null
}

function M() {
  return null != r ? (0, g.A)(r) : null
}

function k() {
  var e;
  let {
    soundshareEnabled: t
  } = c.A.getState();
  return {
    sourceId: "prepicked:0",
    nativePickerStyleUsed: N.lastPresentedPickerStyle,
    sourceName: null != (e = j()) ? e : O.intl.string(O.t.KKcy95),
    sound: t
  }
}
class U extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([f.A, _.A, u.A, d.A, p.A], L), L()
  }
  supported() {
    return R()
  }
  enabled() {
    return w()
  }
  releasePickerStream() {
    (0, b.E)()
  }
  getPickerState() {
    return N
  }
  getLastPickedContent() {
    return r
  }
  getLastPickedContentTitle() {
    return j()
  }
  getLastPickedContentPID() {
    return M()
  }
  getStreamStartOptions() {
    return k()
  }
}

function G(e) {
  let {
    existing: t,
    content: n
  } = e;
  if (N = {
      lastPickerAction: 1
    }, r = n, 0 === I && !t) {
    let e = u.A.getChannel(_.A.getVoiceChannelId());
    null != e && (0, m.A)(f.A) && (0, h.vz)(e, d.A, p.A, false) && (0, l.XI)(e.getGuildId(), e.id, k())
  }
}

function V() {
  N = {
    lastPickerAction: 2
  }
}

function F(e) {
  let {
    error: t
  } = e;
  N = {
    lastPickerAction: 3,
    lastPickerError: t
  }
}

function B(e) {
  let {
    style: t
  } = e;
  N = {
    lastPickerAction: 0,
    lastPresentedPickerStyle: t
  }
}

function H() {
  N = {}
}
A(U, "displayName", "NativeScreenSharePickerStore");
let Y = new U(Chunk73153.h, {
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: G,
  NATIVE_SCREEN_SHARE_PICKER_CANCEL: V,
  NATIVE_SCREEN_SHARE_PICKER_ERROR: F,
  NATIVE_SCREEN_SHARE_PICKER_PRESENT: B,
  NATIVE_SCREEN_SHARE_PICKER_RELEASE: H
})