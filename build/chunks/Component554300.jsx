/** Chunk was on web.js **/
/** chunk id: 554300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk799899 = require("./799899.js"),
  Chunk481060 = require("./481060.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk81298 = require("./81298.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = function(e) {
  var t, {
      ref: n,
      avatar: a,
      name: f,
      nameplate: p,
      children: g,
      subText: E,
      decorators: b,
      onClick: y,
      hovered: O,
      selected: v,
      muted: I,
      to: S,
      avatarClassName: T,
      selectedClassName: A,
      innerClassName: C,
      wrapContent: N,
      highlighted: R,
      focusProps: P
    } = e,
    w = m(e, ["ref", "avatar", "name", "nameplate", "children", "subText", "decorators", "onClick", "hovered", "selected", "muted", "to", "avatarClassName", "selectedClassName", "innerClassName", "wrapContent", "highlighted", "focusProps"]);
  w.className = o()(w.className, d.container, {
    [d.selected]: v,
    [d.highlighted]: R,
    [null != A ? A : ""]: v,
    [d.clickable]: !v && (null != S || null != y)
  }), w["aria-selected"] = null != (t = w["aria-selected"]) ? t : v;
  let D = i.useRef(null),
    x = (0, r.jsxs)("div", {
      className: o()(d.childContainer, {
        [d.nameplated]: null != p
      }),
      children: [(0, r.jsx)(u.Z, {
        nameplate: p,
        hovered: O,
        selected: v,
        content: D,
        placement: c.i.MEMBER_LIST
      }), (0, r.jsxs)("div", {
        ref: D,
        className: o()(C, d.layout, {
          [d.muted]: !v && I,
          [d.wrappedLayout]: N
        }),
        children: [(0, r.jsx)("div", {
          className: o()(d.avatar, T),
          children: a
        }), (0, r.jsxs)("div", {
          className: d.content,
          children: [(0, r.jsxs)("div", {
            className: d.nameAndDecorators,
            children: [(0, r.jsx)("div", {
              className: o()(d.name, {
                [d.wrappedName]: N
              }),
              children: f
            }), b]
          }), null != E ? (0, r.jsx)("div", {
            className: d.subText,
            children: E
          }) : null]
        }), null != g ? (0, r.jsx)("div", {
          className: d.children,
          children: g
        }) : null]
      })]
    });
  return null != S ? (0, r.jsx)(l.tEY, h(_({}, P), {
    children: (0, r.jsx)(s.rU, h(_({
      to: S,
      onClick: y
    }, w), {
      role: "listitem",
      ref: n,
      children: x
    }))
  })) : null != y ? (0, r.jsx)(l.P3F, h(_({
    onClick: y,
    focusProps: P
  }, w), {
    role: "listitem",
    innerRef: n,
    children: x
  })) : (0, r.jsx)(l.tEY, h(_({}, P), {
    children: (0, r.jsx)("div", h(_({}, w), {
      role: "listitem",
      ref: n,
      children: x
    }))
  }))
}