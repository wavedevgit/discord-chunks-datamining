/** Chunk was on web.js **/
/** chunk id: 539873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk313201 = require("./313201.js"),
  Chunk587446 = require("./587446.jsx"),
  Chunk996073 = require("./996073.js"),
  Chunk737604 = require("./737604.js"),
  Chunk401460 = require("./401460.jsx"),
  Chunk441319 = require("./441319.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk339637 = require("./339637.js"),
  Chunk226518 = require("./226518.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
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

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e) {
  let {
    className: t,
    disabled: n,
    isEditor: b,
    renderCTAButtons: O
  } = e, [T] = (0, a.Wu)([f.Z], () => [f.Z.getCurrentDesktopIcon()]), S = i.useRef(null);
  (0, d.Z)(S, h.h1.CUSTOM_APP_ICONS);
  let A = (0, c.Dt)(),
    C = (0, o.Jb)({
      orientation: "horizontal",
      labelledBy: A
    }),
    {
      ref: N
    } = C,
    R = I(C, ["ref"]),
    P = e => {
      l.Z.dispatch({
        type: "APP_ICON_UPDATED",
        id: e
      })
    };
  return (0, r.jsx)("div", {
    ref: S,
    children: (0, r.jsx)("div", v(y({}, R), {
      ref: N,
      className: g.__invalid_container,
      children: (0, r.jsxs)("div", {
        className: t,
        children: [(0, r.jsxs)("div", {
          className: g.header,
          children: [(0, r.jsxs)("div", {
            className: g.headings,
            children: [!b && (0, r.jsxs)("div", {
              className: g.title,
              children: [(0, r.jsx)(s.Heading, {
                className: g.titleText,
                variant: "text-lg/medium",
                children: m.intl.string(m.t.NThqTw)
              }), (0, r.jsx)(u.Z, {
                className: g.premiumIcon
              })]
            }), (0, r.jsx)(s.Heading, {
              variant: "text-sm/normal",
              className: E.subtext,
              children: m.intl.string(m.t.IgENJo)
            })]
          }), null == O ? true : O()]
        }), (0, r.jsx)(s.Kqy, {
          direction: "horizontal",
          wrap: true,
          gap: 8,
          style: {
            marginTop: 16
          },
          children: (0, p.wu)().filter(e => {
            let {
              isHidden: t
            } = e;
            return !t
          }).map((e, t) => (0, r.jsx)(_.Z, {
            icon: e,
            isSelected: T === e.id,
            onSelect: e => P(e),
            disabled: n,
            tabIndex: 0 !== t || n ? true : 0,
            locked: false
          }, e.id))
        })]
      })
    }))
  })
}