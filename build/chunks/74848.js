/** Chunk was on web.js **/
/** chunk id: 74848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Py: () => S,
  d: () => O,
  tR: () => I,
  x5: () => A
}), require("./747238.js"), require("./812715.js"), require("./591487.js"), require("./727858.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk444927 = require("./444927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk430452 = require("./430452.js"),
  Chunk403362 = require("./403362.js"),
  Chunk723702 = require("./723702.js"),
  Chunk835498 = require("./835498.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

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
    [f.oh.AUDIO_INPUT]: {
      getRawDevices: e => e.getInputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.oh.AUDIO_INPUT),
      getCurrentDeviceId: e => e.getInputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().inputDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t["/QIjDA"])
    },
    [f.oh.AUDIO_OUTPUT]: {
      getRawDevices: e => e.getOutputDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.oh.AUDIO_OUTPUT),
      getCurrentDeviceId: e => e.getOutputDeviceId(),
      getSelectedDeviceId: e => e.getSettings().outputDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t.xlUg0v)
    },
    [f.oh.VIDEO_INPUT]: {
      getRawDevices: e => e.getVideoDevices(),
      getAllDeviceIdsSortedByFrecency: e => e.getDeviceIdsSortedByFrecency(f.oh.VIDEO_INPUT),
      getCurrentDeviceId: e => e.getVideoDeviceId(),
      getSelectedDeviceId: e => e.getSettings().videoDeviceId,
      getNoDevicesMessage: () => p.intl.string(p.t.WKWARY)
    }
  })[e]
}

function y() {
  return (0, u.isWindows)() ? p.intl.string(p.t.n4dQ2c) : (0, u.isMac)() ? p.intl.string(p.t.aYrsiB) : p.intl.string(p.t.Q3YKwS)
}

function b(e, t) {
  let {
    getNoDevicesMessage: n
  } = E(e);
  return t.disabled ? n() : t.name.replace(f.vt, y())
}

function O(e) {
  var t;
  return null == (t = new RegExp("^(?<prefix>".concat(y(), ") \\((?<subName>.+)\\)$")).exec(e)) ? true : t.groups
}

function v(e) {
  let {
    getRawDevices: t
  } = E(e), n = (0, a.bG)([l.A], () => t(l.A));
  return (0, r.useMemo)(() => {
    let t = h({}, n),
      r = t[f.dx];
    return null != r && (t[f.dx] = g(h({}, r), {
      name: b(e, r)
    })), t
  }, [e, n])
}

function A(e) {
  let t = v(e),
    {
      getCurrentDeviceId: n
    } = E(e);
  return t[(0, a.bG)([l.A], () => n(l.A))]
}

function I(e, t) {
  let {} = t, n = v(e), {
    getAllDeviceIdsSortedByFrecency: s
  } = E(e), l = (0, o.A)((0, a.yK)([d.A], () => s(d.A))), {
    id: u
  } = A(e);
  return (0, r.useMemo)(() => {
    let t = e => e.map(e => n[e]).filter(c.Vq),
      r = Object.keys(n),
      a = e !== f.oh.VIDEO_INPUT ? [f.dx] : [],
      o = (0, i.intersection)(l, r),
      s = (0, i.difference)(r, l),
      d = (0, i.difference)(s, a, [u]);
    return (null == o ? true : o.length) === 0 || d.length <= 1 ? [(0, i.union)(a, [u], o, s), []].map(t) : [(0, i.union)(a, [u], o), d].map(t)
  }, [n, e, l, u])
}

function S(e) {
  var t, n;
  let {
    getCurrentDeviceId: r,
    getSelectedDeviceId: i
  } = E(e), {
    resolvedId: o,
    selectedId: c
  } = (0, a.cf)([l.A], () => ({
    resolvedId: r(l.A),
    selectedId: i(l.A)
  })), u = null != (t = (0, s.A)(o)) ? t : o, d = o !== u, f = null != (n = (0, s.A)(c)) ? n : c, p = c !== f;
  return d && !p
}