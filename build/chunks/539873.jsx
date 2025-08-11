/** Chunk was on web.js **/
/** chunk id: 539873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk313201 = require("./313201.js"),
  Chunk587446 = require("./587446.js"),
  Chunk996073 = require("./996073.js"),
  Chunk737604 = require("./737604.js"),
  Chunk401460 = require("./401460.jsx"),
  Chunk441319 = require("./441319.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888090 = require("./888090.js"),
  Chunk716827 = require("./716827.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function T(e) {
  let {
    className: t,
    disabled: n,
    isEditor: E,
    renderCTAButtons: y
  } = e, [I] = (0, o.Wu)([d.Z], () => [d.Z.getCurrentDesktopIcon()]), T = i.useRef(null);
  (0, u.Z)(T, p.h1.CUSTOM_APP_ICONS);
  let S = (0, l.Dt)(),
    A = (0, a.arW)({
      orientation: "horizontal",
      labelledBy: S
    }),
    {
      ref: N
    } = A,
    C = v(A, ["ref"]),
    R = e => {
      s.Z.dispatch({
        type: "APP_ICON_UPDATED",
        id: e
      })
    };
  return <div ref={T}><div{...O(b({}, C), {
      ref: N,
      className: m.__invalid_container,
      children: (0, r.jsxs)("div", {
        className: t,
        children: [(0, r.jsxs)("div", {
          className: m.header,
          children: [(0, r.jsxs)("div", {
            className: m.headings,
            children: [!E && (0, r.jsxs)("div", {
              className: m.title,
              children: [(0, r.jsx)(a.X6q, {
                className: m.titleText,
                variant: "text-lg/medium",
                children: h.intl.string(h.t.NThqT0)
              }), (0, r.jsx)(c.Z, {
                className: m.premiumIcon
              })]
            }), (0, r.jsx)(a.X6q, {
              variant: "text-sm/normal",
              className: g.subtext,
              children: h.intl.string(h.t.IgENJi)
            })]
          }), null == y ? true : y()]
        }), (0, r.jsx)("div", {
          className: m.presets,
          children: (0, _.wu)().filter(e => {
            let {
              isHidden: t
            } = e;
            return !t
          }).map((e, t) => (0, r.jsx)(f.Z, {
            icon: e,
            isSelected: I === e.id,
            onSelect: e => R(e),
            disabled: n,
            tabIndex: 0 !== t || n ? true : 0,
            locked: false
          }, e.id))
        })]
      })
    })} /></div>
}