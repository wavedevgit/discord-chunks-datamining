/** Chunk was on web.js **/
/** chunk id: 970636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O,
  r: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk446080 = require("./446080.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk675991 = require("./675991.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk724718 = require("./724718.js");

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

function E(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b(e) {
  let t = (0, u.Q)(e),
    {
      enabled: n,
      cameraUnavailable: a,
      onChange: o,
      onCameraUnavailable: d,
      hasPermission: p,
      children: _,
      channelLimitReached: h = false,
      join: m
    } = e,
    g = (0, c.Us)(),
    E = a ? () => d() : () => o(!e.enabled, g),
    {
      Component: y,
      play: b,
      events: O
    } = (0, s.K)(m || n ? "disable" : "enable");
  i.useEffect(() => () => b(), [n, b]);
  let v = m ? l.npA : g === f.BRT.POPOUT ? n ? l.npA : l.OCo : y;
  return (0, r.jsx)(r.Fragment, {
    children: _({
      onClick: E,
      isActive: n,
      disabled: !n && (!p || h),
      iconComponent: v,
      iconColor: "currentColor",
      label: t,
      unavailable: a,
      onMouseEnter: m ? true : O.onMouseEnter,
      onMouseLeave: m ? true : O.onMouseLeave
    })
  })
}

function O(e) {
  let {
    enabled: t,
    join: n,
    channel: i,
    onChange: a,
    onCameraUnavailable: s,
    cameraUnavailable: l,
    hasPermission: c,
    className: u,
    channelLimitReached: f,
    channelLimit: _,
    centerButton: m = false,
    onPopoutClick: y
  } = e, O = E(e, ["enabled", "join", "channel", "onChange", "onCameraUnavailable", "cameraUnavailable", "hasPermission", "className", "channelLimitReached", "channelLimit", "centerButton", "onPopoutClick"]), v = m ? d.l : d.A, A = () => n ? "join" : t ? "green" : "primaryDark", I = e => n ? "join" : e ? "green" : O.color;
  return (0, r.jsx)(b, {
    enabled: t,
    join: n,
    channel: i,
    onChange: a,
    onCameraUnavailable: s,
    cameraUnavailable: l,
    hasPermission: c,
    channelLimitReached: f,
    channelLimit: _,
    children: e => {
      let {
        unavailable: t,
        onMouseEnter: i,
        onMouseLeave: a,
        isActive: s
      } = e, l = E(e, ["unavailable", "onMouseEnter", "onMouseLeave", "isActive"]);
      return (0, r.jsx)(v, g(h({}, l, O), {
        color: I(s),
        caretColor: A(),
        isActive: s,
        onMouseEnter: e => {
          var t;
          null == (t = O.onMouseEnter) || t.call(O, e), null == i || i()
        },
        onMouseLeave: e => {
          var t;
          null == (t = O.onMouseLeave) || t.call(O, e), null == a || a()
        },
        className: o()(u, {
          [p.t]: t
        }),
        onPopoutClick: y,
        isTrayButton: !n
      }))
    }
  })
}