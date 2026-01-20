/** Chunk was on web.js **/
/** chunk id: 72897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fh: () => T,
  Ls: () => I,
  p6: () => S,
  rX: () => O
}), require("./704826.js"), require("./35282.js"), require("./413496.js"), require("./433524.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk211266 = require("./211266.js"),
  Chunk110924 = require("./110924.js"),
  Chunk131951 = require("./131951.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk145016 = require("./145016.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
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
      _(e, t, n[t])
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
      getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"])
    },
    [f.h7.AUDIO_OUTPUT]: {
      getRawDevices: e => e.getOutputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.h7.AUDIO_OUTPUT),
      getCurrentDeviceId: e => e.getOutputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().outputDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v)
    },
    [f.h7.VIDEO_INPUT]: {
      getRawDevices: e => e.getVideoDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.h7.VIDEO_INPUT),
      getCurrentDeviceId: e => e.getVideoDeviceId(),
      getSelectedDeviceId: e => e.getSettings().videoDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t.WKWARY)
    }
  })[e]
}

function b() {
  return (0, u.isWindows)() ? p.intl.string(p.t.n4dQ2c) : (0, u.isMac)() ? p.intl.string(p.t.aYrsiB) : p.intl.string(p.t.Q3YKwS)
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

function S(e) {
  let t = v(e),
    {
      getCurrentDeviceId: n
    } = E(e);
  return t[(0, a.e7)([l.Z], () => n(l.Z))]
}

function I(e, t) {
  let {} = t, n = v(e), {
    getAllDeviceIdsSortedByFrecency: s
  } = E(e), l = (0, o.Z)((0, a.Wu)([d.Z], () => s(d.Z))), {
    id: u
  } = S(e);
  return (0, r.useMemo)(() => {
    let t = e => e.map(e => n[e]).filter(c.lm),
      r = Object.keys(n),
      a = e !== f.h7.VIDEO_INPUT ? [f.w5] : [],
      o = (0, i.intersection)(l, r),
      s = (0, i.difference)(r, l),
      d = (0, i.difference)(s, a, [u]);
    return (null == o ? true : o.length) === 0 || d.length <= 1 ? [(0, i.union)(a, [u], o, s), []].map(t) : [(0, i.union)(a, [u], o), d].map(t)
  }, [n, e, l, u])
}

function T(e) {
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
  })), u = null != (t = (0, s.Z)(o)) ? t : o, d = o !== u, f = null != (n = (0, s.Z)(c)) ? n : c, p = c !== f;
  return d && !p
}