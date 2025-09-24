/** Chunk was on web.js **/
/** chunk id: 72897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fh: () => S,
  Ls: () => T,
  p6: () => I,
  rX: () => O
}), require("./704826.js"), require("./35282.js"), require("./413496.js"), require("./433524.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk211266 = require("./211266.js"),
  Chunk110924 = require("./110924.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk145016 = require("./145016.js"),
  Chunk568001 = require("./568001.js"),
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
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.h7.AUDIO_INPUT),
      getCurrentDeviceId: e => e.getInputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().inputDeviceId,
      getNoDevicesMessage: () => _.intl.string(_.t["/QIjDA"])
    },
    [f.h7.AUDIO_OUTPUT]: {
      getRawDevices: e => e.getOutputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.h7.AUDIO_OUTPUT),
      getCurrentDeviceId: e => e.getOutputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().outputDeviceId,
      getNoDevicesMessage: () => _.intl.string(_.t.xlUg0t)
    },
    [f.h7.VIDEO_INPUT]: {
      getRawDevices: e => e.getVideoDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.h7.VIDEO_INPUT),
      getCurrentDeviceId: e => e.getVideoDeviceId(),
      getSelectedDeviceId: e => e.getSettings().videoDeviceId,
      getNoDevicesMessage: () => _.intl.string(_.t.WKWARU)
    }
  })[e]
}

function b() {
  let {
    showDeviceSelectionImprovements: e
  } = (0, Chunk568001.M)({
    location: "getDefaultDevicePrefix"
  });
  return module ? (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t.n4dQ2d) : (0, Chunk358085.isMac)() ? Chunk388032.intl.string(Chunk388032.t.aYrsiI) : Chunk388032.intl.string(Chunk388032.t.Q3YKwc) : Chunk388032.intl.string(Chunk388032.t.bBvAEB)
}

function y(e, t) {
  let {
    getNoDevicesMessage: n
  } = E(e);
  return t.disabled ? n() : t.name.replace(f.fU, b())
}

function O(e) {
  var t;
  return null == (t = new RegExp("^(?<prefix>".concat(b(), ") \\((?<subName>.+)\\)$")).exec(e)) ? true : t.groups
}

function v(e) {
  let {
    getRawDevices: t
  } = E(e), n = (0, a.e7)([l.Z], () => t(l.Z));
  return (0, r.useMemo)(() => {
    let t = h({}, n),
      r = t[f.w5];
    return null != r && (t[f.w5] = g(h({}, r), {
      name: y(e, r)
    })), t
  }, [e, n])
}

function I(e) {
  let t = v(e),
    {
      getCurrentDeviceId: n
    } = E(e);
  return t[(0, a.e7)([l.Z], () => n(l.Z))]
}

function T(e, t) {
  let {
    location: n
  } = t, {
    showDeviceSelectionImprovements: s
  } = (0, d.V)({
    location: n
  }), l = v(e), {
    getAllDeviceIdsSortedByFrecency: c
  } = E(e), _ = (0, o.Z)((0, a.Wu)([u.Z], () => c(u.Z))), {
    id: p
  } = I(e);
  return (0, r.useMemo)(() => {
    let t = e => e.map(e => l[e]),
      n = Object.keys(l),
      r = s && e !== f.h7.VIDEO_INPUT ? [f.w5] : [],
      a = (0, i.intersection)(_, n),
      o = (0, i.difference)(n, _);
    return (null == a ? true : a.length) === 0 ? [(0, i.union)(r, [p], a, o), []].map(t) : [(0, i.union)(r, [p], a), (0, i.difference)(o, r, [p])].map(t)
  }, [l, e, _, p, s])
}

function S(e) {
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