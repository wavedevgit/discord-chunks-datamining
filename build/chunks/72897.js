/** Chunk was on web.js **/
/** chunk id: 72897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fh: () => A,
  Ls: () => S,
  p6: () => T,
  rX: () => v
}), require("./704826.js"), require("./35282.js"), require("./413496.js"), require("./433524.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk211266 = require("./211266.js"),
  Chunk110924 = require("./110924.js"),
  Chunk131951 = require("./131951.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk145016 = require("./145016.js"),
  Chunk568001 = require("./568001.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  return ({
    [_.h7.AUDIO_INPUT]: {
      getRawDevices: e => e.getInputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(_.h7.AUDIO_INPUT),
      getCurrentDeviceId: e => e.getInputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().inputDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"])
    },
    [_.h7.AUDIO_OUTPUT]: {
      getRawDevices: e => e.getOutputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(_.h7.AUDIO_OUTPUT),
      getCurrentDeviceId: e => e.getOutputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().outputDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v)
    },
    [_.h7.VIDEO_INPUT]: {
      getRawDevices: e => e.getVideoDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(_.h7.VIDEO_INPUT),
      getCurrentDeviceId: e => e.getVideoDeviceId(),
      getSelectedDeviceId: e => e.getSettings().videoDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t.WKWARY)
    }
  })[e]
}

function y() {
  let {
    showDeviceSelectionImprovements: e
  } = (0, Chunk568001.M)({
    location: "getDefaultDevicePrefix"
  });
  return module ? (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t.n4dQ2c) : (0, Chunk358085.isMac)() ? Chunk388032.intl.string(Chunk388032.t.aYrsiB) : Chunk388032.intl.string(Chunk388032.t.Q3YKwS) : Chunk388032.intl.string(Chunk388032.t.bBvAEH)
}

function O(e, t) {
  let {
    getNoDevicesMessage: n
  } = b(e);
  return t.disabled ? n() : t.name.replace(_.fU, y())
}

function v(e) {
  var t;
  return null == (t = new RegExp("^(?<prefix>".concat(y(), ") \\((?<subName>.+)\\)$")).exec(e)) ? true : t.groups
}

function I(e) {
  let {
    getRawDevices: t
  } = b(e), n = (0, a.e7)([l.Z], () => t(l.Z));
  return (0, r.useMemo)(() => {
    let t = m({}, n),
      r = t[_.w5];
    return null != r && (t[_.w5] = E(m({}, r), {
      name: O(e, r)
    })), t
  }, [e, n])
}

function T(e) {
  let t = I(e),
    {
      getCurrentDeviceId: n
    } = b(e);
  return t[(0, a.e7)([l.Z], () => n(l.Z))]
}

function S(e, t) {
  let {
    location: n
  } = t, {
    showDeviceSelectionImprovements: s
  } = (0, f.V)({
    location: n
  }), l = I(e), {
    getAllDeviceIdsSortedByFrecency: u
  } = b(e), p = (0, o.Z)((0, a.Wu)([d.Z], () => u(d.Z))), {
    id: h
  } = T(e);
  return (0, r.useMemo)(() => {
    let t = e => e.map(e => l[e]).filter(c.lm),
      n = Object.keys(l),
      r = s && e !== _.h7.VIDEO_INPUT ? [_.w5] : [],
      a = (0, i.intersection)(p, n),
      o = (0, i.difference)(n, p);
    return (null == a ? true : a.length) === 0 ? [(0, i.union)(r, [h], a, o), []].map(t) : [(0, i.union)(r, [h], a), (0, i.difference)(o, r, [h])].map(t)
  }, [l, e, p, h, s])
}

function A(e) {
  var t, n;
  let {
    getCurrentDeviceId: r,
    getSelectedDeviceId: i
  } = b(e), {
    resolvedId: o,
    selectedId: c
  } = (0, a.cj)([l.Z], () => ({
    resolvedId: r(l.Z),
    selectedId: i(l.Z)
  })), u = null != (t = (0, s.Z)(o)) ? t : o, d = o !== u, f = null != (n = (0, s.Z)(c)) ? n : c, _ = c !== f;
  return d && !_
}