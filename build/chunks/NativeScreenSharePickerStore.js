/** Chunk was on web.js **/
/** chunk id: 571044, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ay: () => Y,
  JA: () => A,
  XA: () => L,
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var A = function(e) {
  return e[e.Present = 0] = "Present", e[e.Update = 1] = "Update", e[e.Cancel = 2] = "Cancel", e[e.Error = 3] = "Error", e
}({});
let I = false,
  S = 0,
  T = 0,
  C = false,
  N = {};

function w() {
  return f.A.supports(b.O5.NATIVE_SCREENSHARE_PICKER)
}

function R() {
  return f.A.getUseSystemScreensharePicker()
}

function P() {
  let e = R() && (T > 0 || I && 0 === S);
  if (e !== C) {
    var t, n;
    C = e, null == (n = f.A.getMediaEngine()) || null == (t = n.setNativeDesktopVideoSourcePickerActive) || t.call(n, C)
  }
}

function D() {
  return (0, a.useEffect)(() => (S++, P(), () => {
    0 == --S && P()
  }), [])
}

function L() {
  return (0, a.useEffect)(() => (T++, P(), () => {
    --T, P()
  }), [])
}

function x() {
  let e = u.A.getChannel(_.A.getVoiceChannelId());
  return I = null != e && (0, m.A)(f.A) && (0, h.vz)(e, d.A, p.A, false), P(), false
}

function M() {
  return null != r ? (0, E.A)(r) : null
}

function j() {
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
    sourceName: null != (e = M()) ? e : O.intl.string(O.t.KKcy95),
    sound: t
  }
}
class U extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([f.A, _.A, u.A, d.A, p.A], x), x()
  }
  supported() {
    return w()
  }
  enabled() {
    return R()
  }
  releasePickerStream() {
    (0, y.E)()
  }
  getPickerState() {
    return N
  }
  getLastPickedContent() {
    return r
  }
  getLastPickedContentTitle() {
    return M()
  }
  getLastPickedContentPID() {
    return j()
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
    }, r = n, 0 === S && !t) {
    let e = u.A.getChannel(_.A.getVoiceChannelId());
    null != e && (0, m.A)(f.A) && (0, h.vz)(e, d.A, p.A, false) && (0, l.XI)(e.getGuildId(), e.id, k())
  }
}

function F() {
  N = {
    lastPickerAction: 2
  }
}

function V(e) {
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
v(U, "displayName", "NativeScreenSharePickerStore");
let Y = new U(Chunk73153.h, {
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: G,
  NATIVE_SCREEN_SHARE_PICKER_CANCEL: F,
  NATIVE_SCREEN_SHARE_PICKER_ERROR: V,
  NATIVE_SCREEN_SHARE_PICKER_PRESENT: B,
  NATIVE_SCREEN_SHARE_PICKER_RELEASE: H
})