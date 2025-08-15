/** Chunk was on web.js **/
/** chunk id: 72897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fh: () => v,
  Ls: () => O,
  p6: () => y
}), require("./704826.js"), require("./35282.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk211266 = require("./211266.js"),
  Chunk110924 = require("./110924.js"),
  Chunk131951 = require("./131951.js"),
  Chunk679613 = require("./679613.js"),
  Chunk996897 = require("./996897.js"),
  Chunk145016 = require("./145016.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  return ({
    [f.h7.AUDIO_INPUT]: {
      getRawDevices: e => e.getInputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getInputDeviceIdsSortedByFrecency(),
      getCurrentDeviceId: e => e.getInputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().inputDeviceId,
      getNoDevicesMessage: () => _.intl.string(_.t["/QIjDA"])
    },
    [f.h7.AUDIO_OUTPUT]: {
      getRawDevices: e => e.getOutputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getOutputDeviceIdsSortedByFrecency(),
      getCurrentDeviceId: e => e.getOutputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().outputDeviceId,
      getNoDevicesMessage: () => _.intl.string(_.t.xlUg0t)
    },
    [f.h7.VIDEO_INPUT]: {
      getRawDevices: e => e.getVideoDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getVideoDeviceIdsSortedByFrecency(),
      getCurrentDeviceId: e => e.getVideoDeviceId(),
      getSelectedDeviceId: e => e.getSettings().videoDeviceId,
      getNoDevicesMessage: () => _.intl.string(_.t.WKWARU)
    }
  })[e]
}

function b(e) {
  let {
    getRawDevices: t,
    getNoDevicesMessage: n
  } = E(e), i = (0, a.e7)([l.Z], () => t(l.Z)), o = n();
  return (0, r.useMemo)(() => {
    let e = h({}, i),
      t = e[f.w5];
    return null != t && (e[f.w5] = g(h({}, t), {
      name: t.disabled ? o : t.name.replace(f.fU, _.intl.string(_.t.bBvAEB))
    })), e
  }, [i, o])
}

function y(e) {
  let t = b(e),
    {
      getCurrentDeviceId: n
    } = E(e);
  return t[(0, a.e7)([l.Z], () => n(l.Z))]
}

function O(e, t) {
  let {
    location: n
  } = t, {
    shouldSortDevicesByFrecency: s
  } = (0, c._)({
    location: n
  }), {
    shouldFilterDevicesByFrecency: l
  } = (0, u.w)({
    location: n
  }), f = b(e), {
    getAllDeviceIdsSortedByFrecency: _
  } = E(e), p = (0, o.Z)((0, a.Wu)([d.Z], () => _(d.Z))), {
    id: h
  } = y(e);
  return (0, r.useMemo)(() => {
    let e = e => e.map(e => f[e]),
      t = Object.keys(f);
    if (!s) return [t, []].map(e);
    let n = (0, i.intersection)(p, t),
      r = (0, i.difference)(t, p);
    return l && (null == n ? true : n.length) !== 0 ? r.some(e => e === h) ? [(0, i.union)(n, [h]), (0, i.difference)(r, [h])].map(e) : [n, r].map(e) : [(0, i.union)(n, r), []].map(e)
  }, [f, p, h, s, l])
}

function v(e) {
  var t, n;
  let {
    getCurrentDeviceId: r,
    getSelectedDeviceId: i
  } = E(e), {
    resolvedId: o,
    selectedId: c
  } = (0, a.cj)([l.Z], () => ({
    resolvedId: r(l.Z),
    selectedId: i(l.Z)
  })), u = null != (t = (0, s.Z)(o)) ? t : o, d = o !== u, f = null != (n = (0, s.Z)(c)) ? n : c, _ = c !== f;
  return d && !_
}