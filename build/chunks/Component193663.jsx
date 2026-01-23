/** Chunk was on web.js **/
/** chunk id: 193663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk758879 = require("./758879.js"),
  Chunk397927 = require("./397927.js"),
  Chunk226540 = require("./226540.js"),
  Chunk227 = require("./227.jsx"),
  Chunk820659 = require("./820659.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = function(e) {
  var t;
  let {
    ref: n,
    avatar: a,
    name: f,
    nameplate: _,
    children: g,
    subText: E,
    decorators: y,
    onClick: b,
    hovered: O,
    selected: v,
    muted: A,
    to: I,
    avatarClassName: S,
    selectedClassName: T,
    innerClassName: C,
    wrapContent: N,
    highlighted: w,
    focusProps: R
  } = e, P = m(e, ["ref", "avatar", "name", "nameplate", "children", "subText", "decorators", "onClick", "hovered", "selected", "muted", "to", "avatarClassName", "selectedClassName", "innerClassName", "wrapContent", "highlighted", "focusProps"]);
  P.className = s()(P.className, d.kL, {
    [d.wH]: v,
    [d.mr]: w,
    [null != T ? T : ""]: v,
    [d.vk]: !v && (null != I || null != b)
  }), P["aria-selected"] = null != (t = P["aria-selected"]) ? t : v;
  let D = i.useRef(null),
    x = (0, r.jsxs)("div", {
      className: s()(d.sn, {
        [d.EY]: null != _
      }),
      children: [(0, r.jsx)(u.A, {
        nameplate: _,
        hovered: O,
        selected: v,
        content: D,
        placement: c.u.MEMBER_LIST
      }), (0, r.jsxs)("div", {
        ref: D,
        className: s()(C, d.Zp, {
          [d.SU]: !v && A,
          [d.Ib]: N
        }),
        children: [(0, r.jsx)("div", {
          className: s()(d.my, S),
          children: a
        }), (0, r.jsxs)("div", {
          className: d.Qs,
          children: [(0, r.jsxs)("div", {
            className: d.BG,
            children: [(0, r.jsx)("div", {
              className: s()(d.UU, {
                [d.to]: N
              }),
              children: f
            }), y]
          }), null != E ? (0, r.jsx)("div", {
            className: d.Sv,
            children: E
          }) : null]
        }), null != g ? (0, r.jsx)("div", {
          className: d.Y_,
          children: g
        }) : null]
      })]
    });
  return null != I ? (0, r.jsx)(l.vN3, h(p({}, R), {
    children: (0, r.jsx)(o.N_, h(p({
      to: I,
      onClick: b
    }, P), {
      role: "listitem",
      ref: n,
      children: x
    }))
  })) : null != b ? (0, r.jsx)(l.DUT, h(p({
    onClick: b,
    focusProps: R
  }, P), {
    role: "listitem",
    innerRef: n,
    children: x
  })) : (0, r.jsx)(l.vN3, h(p({}, R), {
    children: (0, r.jsx)("div", h(p({}, P), {
      role: "listitem",
      ref: n,
      children: x
    }))
  }))
}