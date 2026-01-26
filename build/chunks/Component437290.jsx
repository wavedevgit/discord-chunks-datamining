/** Chunk was on web.js **/
/** chunk id: 437290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk429974 = require("./429974.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  var t;
  let {
    user: n,
    checked: a,
    onChange: d,
    disabled: p,
    tooltipConfig: _
  } = e, h = i.useRef(null), {
    avatarSrc: m,
    eventHandlers: g
  } = (0, c.A)({
    userId: null == n ? true : n.id,
    size: l._3J.SIZE_32
  }), E = null != (t = n.globalName) ? t : n.username;
  return (0, r.jsx)(o.m, {
    text: (null == _ ? true : _.isActive(n, p)) ? _.text(n) : null,
    position: "top",
    anchorRef: h,
    asContainer: true,
    children: (0, r.jsxs)("div", {
      className: u.kL,
      children: [(0, r.jsx)("div", {
        className: u.dj,
        children: (0, r.jsx)(l.euF, f({
          className: s()({
            [u.SU]: p
          }),
          src: m,
          "aria-label": E,
          size: l._3J.SIZE_32
        }, g))
      }), (0, r.jsxs)("div", {
        className: u.QV,
        children: [(0, r.jsx)(l.Text, {
          className: u.nT,
          color: p ? "text-muted" : "text-default",
          variant: "text-md/semibold",
          children: E
        }), (0, r.jsx)(l.Text, {
          className: u.nT,
          color: p ? "text-muted" : "text-subtle",
          variant: "text-xs/normal",
          children: n.username
        })]
      }), (0, r.jsx)("div", {
        ref: h,
        className: u.kv,
        children: (0, r.jsx)(l.Checkbox, {
          disabled: p,
          checked: a,
          onChange: e => d(n, e),
          label: ""
        })
      })]
    })
  })
}