/** Chunk was on web.js **/
"use strict";
n.d(t, {
  UB: () => C,
  Uc: () => v,
  ZP: () => j,
  kE: () => R
});
var r, i = n(192379),
  o = n(442837),
  a = n(570140),
  s = n(872810),
  l = n(998594),
  c = n(592125),
  u = n(430824),
  d = n(131951),
  f = n(496675),
  _ = n(944486),
  p = n(102172),
  h = n(74299),
  m = n(299570),
  g = n(65154);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var v = function(e) {
  return e[e.Present = 0] = "Present", e[e.Update = 1] = "Update", e[e.Cancel = 2] = "Cancel", e[e.Error = 3] = "Error", e
}({});
let b = !1,
  y = 0,
  O = 0,
  I = !1,
  S = {};

function T() {
  return d.Z.supports(g.AN.NATIVE_SCREENSHARE_PICKER)
}

function N() {
  return d.Z.getUseSystemScreensharePicker()
}

function A() {
  let e = N() && (O > 0 || b && 0 === y);
  if (e !== I) {
    var t, n;
    I = e, null === (n = d.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, I)
  }
}

function C() {
  return (0, i.useEffect)(() => (y++, A(), () => {
    0 == --y && A()
  }), [])
}

function R() {
  return (0, i.useEffect)(() => (O++, A(), () => {
    --O, A()
  }), [])
}

function P() {
  let e = c.Z.getChannel(_.Z.getVoiceChannelId());
  return b = null != e && (0, h.Z)(d.Z) && (0, p.JL)(e, u.Z, f.Z, !1), A(), !1
}
class w extends(r = o.ZP.Store) {
  initialize() {
    this.syncWith([d.Z, _.Z, c.Z, u.Z, f.Z], P), l.Z.subscribe({
      location: "NativeScreenSharePickerStore_initialize"
    }, A), P()
  }
  supported() {
    return T()
  }
  enabled() {
    return N()
  }
  releasePickerStream() {
    (0, m.t)()
  }
  getPickerState() {
    return S
  }
}

function D(e) {
  let {
    existing: t
  } = e;
  if (S = {
      lastPickerAction: 1
    }, 0 === y && !t) {
    let e = c.Z.getChannel(_.Z.getVoiceChannelId());
    null != e && (0, h.Z)(d.Z) && (0, p.JL)(e, u.Z, f.Z, !1) && (0, s.WH)(e.getGuildId(), e.id, {
      sourceId: "prepicked:0",
      nativePickerStyleUsed: S.lastPresentedPickerStyle
    })
  }
}

function L() {
  S = {
    lastPickerAction: 2
  }
}

function x(e) {
  let {
    error: t
  } = e;
  S = {
    lastPickerAction: 3,
    lastPickerError: t
  }
}

function M(e) {
  let {
    style: t
  } = e;
  S = {
    lastPickerAction: 0,
    lastPresentedPickerStyle: t
  }
}

function k() {
  S = {}
}
E(w, "displayName", "NativeScreenSharePickerStore");
let j = new w(a.Z, {
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: D,
  NATIVE_SCREEN_SHARE_PICKER_CANCEL: L,
  NATIVE_SCREEN_SHARE_PICKER_ERROR: x,
  NATIVE_SCREEN_SHARE_PICKER_PRESENT: M,
  NATIVE_SCREEN_SHARE_PICKER_RELEASE: k
})