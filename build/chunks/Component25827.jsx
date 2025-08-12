/** Chunk was on web.js **/
/** chunk id: 25827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => O,
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk75735 = require("./75735.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk67844 = require("./67844.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk153747 = require("./153747.js");

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

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  let t = (0, u.X)(e),
    {
      enabled: n,
      cameraUnavailable: o,
      onChange: a,
      onCameraUnavailable: d,
      hasPermission: _,
      children: p,
      channelLimitReached: h = false,
      join: m
    } = e,
    g = (0, c.bp)(),
    E = o ? () => d() : () => a(!e.enabled, g),
    {
      Component: b,
      play: y,
      events: O
    } = (0, s.o)(m || n ? "disable" : "enable");
  i.useEffect(() => () => y(), [n, y]);
  let v = m ? l.Odl : g === f.IlC.POPOUT ? n ? l.Odl : l.Amn : b;
  return (0, r.jsx)(r.Fragment, {
    children: p({
      onClick: E,
      isActive: n,
      disabled: !n && (!_ || h),
      iconComponent: v,
      iconColor: "currentColor",
      label: t,
      unavailable: o,
      onMouseEnter: m ? true : O.onMouseEnter,
      onMouseLeave: m ? true : O.onMouseLeave
    })
  })
}

function O(e) {
  var {
    enabled: t,
    join: n,
    channel: i,
    onChange: o,
    onCameraUnavailable: s,
    cameraUnavailable: l,
    hasPermission: c,
    className: u,
    channelLimitReached: f,
    channelLimit: p,
    centerButton: m = false,
    onPopoutClick: b
  } = e, O = E(e, ["enabled", "join", "channel", "onChange", "onCameraUnavailable", "cameraUnavailable", "hasPermission", "className", "channelLimitReached", "channelLimit", "centerButton", "onPopoutClick"]);
  let v = m ? d.d : d.Z,
    I = () => n ? "join" : t ? "green" : "primaryDark",
    T = e => n ? "join" : e ? "green" : O.color;
  return (0, r.jsx)(y, {
    enabled: t,
    join: n,
    channel: i,
    onChange: o,
    onCameraUnavailable: s,
    cameraUnavailable: l,
    hasPermission: c,
    channelLimitReached: f,
    channelLimit: p,
    children: e => {
      var {
        unavailable: t,
        onMouseEnter: i,
        onMouseLeave: o,
        isActive: s
      } = e, l = E(e, ["unavailable", "onMouseEnter", "onMouseLeave", "isActive"]);
      return (0, r.jsx)(v, g(h({}, l, O), {
        color: T(s),
        caretColor: I(),
        isActive: s,
        onMouseEnter: e => {
          var t;
          null == (t = O.onMouseEnter) || t.call(O, e), null == i || i()
        },
        onMouseLeave: e => {
          var t;
          null == (t = O.onMouseLeave) || t.call(O, e), null == o || o()
        },
        className: a()(u, {
          [_.fauxDisabled]: t
        }),
        onPopoutClick: b,
        isTrayButton: !n
      }))
    }
  })
}