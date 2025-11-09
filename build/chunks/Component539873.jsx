/** Chunk was on web.js **/
/** chunk id: 539873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk313201 = require("./313201.js"),
  Chunk587446 = require("./587446.jsx"),
  Chunk996073 = require("./996073.js"),
  Chunk368763 = require("./368763.js"),
  Chunk737604 = require("./737604.js"),
  Chunk401460 = require("./401460.jsx"),
  Chunk441319 = require("./441319.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871976 = require("./871976.js"),
  Chunk5874 = require("./5874.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
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

function A(e) {
  let {
    className: t,
    disabled: n,
    isEditor: y,
    renderCTAButtons: v
  } = e, [T] = (0, a.Wu)([_.Z], () => [_.Z.getCurrentDesktopIcon()]), A = (0, f.T)("app_icons_settings_web"), C = i.useRef(null);
  (0, d.Z)(C, m.h1.CUSTOM_APP_ICONS);
  let N = (0, c.Dt)(),
    R = (0, o.Jb)({
      orientation: "horizontal",
      labelledBy: N
    }),
    {
      ref: P
    } = R,
    w = S(R, ["ref"]),
    D = e => {
      l.Z.dispatch({
        type: "APP_ICON_UPDATED",
        id: e
      })
    };
  return (0, r.jsx)("div", {
    ref: C,
    children: (0, r.jsx)("div", I(O({}, w), {
      ref: P,
      className: E.__invalid_container,
      children: (0, r.jsxs)("div", {
        className: t,
        children: [(0, r.jsxs)("div", {
          className: E.header,
          children: [(0, r.jsxs)("div", {
            className: E.headings,
            children: [!y && (0, r.jsxs)("div", {
              className: E.title,
              children: [(0, r.jsx)(s.Heading, {
                className: E.titleText,
                variant: "text-lg/medium",
                children: g.intl.string(g.t.NThqTw)
              }), (0, r.jsx)(u.Z, {
                className: E.premiumIcon
              })]
            }), (0, r.jsx)(s.Heading, {
              variant: "text-sm/normal",
              className: b.subtext,
              children: g.intl.string(g.t.IgENJo)
            })]
          }), null == v ? true : v()]
        }), (0, r.jsx)(s.Kqy, {
          direction: "horizontal",
          wrap: true,
          gap: 8,
          style: {
            marginTop: 16
          },
          children: (0, h.wu)(A).filter(e => {
            let {
              isHidden: t
            } = e;
            return !t
          }).map((e, t) => (0, r.jsx)(p.Z, {
            icon: e,
            isSelected: T === e.id,
            onSelect: e => D(e),
            disabled: n,
            tabIndex: 0 !== t || n ? true : 0,
            locked: false
          }, e.id))
        })]
      })
    }))
  })
}