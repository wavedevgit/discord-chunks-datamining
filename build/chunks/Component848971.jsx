/** Chunk was on web.js **/
/** chunk id: 848971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk915089 = require("./915089.js"),
  Chunk450232 = require("./450232.jsx"),
  Chunk193658 = require("./193658.js"),
  Chunk526162 = require("./526162.js"),
  Chunk603880 = require("./603880.jsx"),
  Chunk635917 = require("./635917.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk638959 = require("./638959.js"),
  Chunk944255 = require("./944255.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = I(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function S(e) {
  let {
    className: t,
    disabled: n,
    isEditor: y,
    renderCTAButtons: O
  } = e, [I] = (0, a.yK)([f.A], () => [f.A.getCurrentDesktopIcon()]), S = i.useRef(null);
  (0, d.A)(S, h.kq.CUSTOM_APP_ICONS);
  let T = (0, c.GV)(),
    C = (0, s._u)({
      orientation: "horizontal",
      labelledBy: T
    }),
    {
      ref: N
    } = C,
    R = A(C, ["ref"]),
    w = e => {
      l.h.dispatch({
        type: "APP_ICON_UPDATED",
        id: e
      })
    };
  return (0, r.jsx)("div", {
    ref: S,
    children: (0, r.jsx)("div", v(b({}, R), {
      ref: N,
      className: g.__invalid_container,
      children: (0, r.jsxs)("div", {
        className: t,
        children: [(0, r.jsxs)("div", {
          className: g.wx,
          children: [(0, r.jsxs)("div", {
            className: g.so,
            children: [!y && (0, r.jsxs)("div", {
              className: g.DD,
              children: [(0, r.jsx)(o.Heading, {
                className: g.Qw,
                variant: "text-lg/medium",
                children: m.intl.string(m.t.NThqTw)
              }), (0, r.jsx)(u.A, {
                className: g.PC
              })]
            }), (0, r.jsx)(o.Heading, {
              variant: "text-sm/normal",
              className: E.W$,
              children: m.intl.string(m.t.IgENJo)
            })]
          }), null == O ? true : O()]
        }), (0, r.jsx)(o.BJc, {
          direction: "horizontal",
          wrap: true,
          gap: 8,
          style: {
            marginTop: 16
          },
          children: (0, _.v8)().filter(e => {
            let {
              isHidden: t
            } = e;
            return !t
          }).map((e, t) => (0, r.jsx)(p.A, {
            icon: e,
            isSelected: I === e.id,
            onSelect: e => w(e),
            disabled: n,
            tabIndex: 0 !== t || n ? true : 0,
            locked: false
          }, e.id))
        })]
      })
    }))
  })
}