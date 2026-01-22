/** Chunk was on web.js **/
/** chunk id: 430858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk763600 = require("./763600.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk526008 = require("./526008.js");

function u(e) {
  let {
    ref: t,
    disabled: n,
    readOnly: i,
    loading: o,
    clearable: l,
    fullWidth: u,
    isOpen: p,
    isInert: _,
    hasValue: h,
    hasError: m,
    showChevronButton: g = true,
    children: E,
    handleToggle: b,
    handleClear: y
  } = e;
  return (0, r.jsxs)(s.FON, {
    ref: t,
    containerClassName: a()(c.cQ, {
      [c.Ij]: u
    }),
    className: a()(c.Bd, {
      [c.ar]: p,
      [c.ND]: _
    }),
    "data-mana-component": "select-input-field",
    disabled: n,
    readOnly: i,
    fullWidth: u,
    validation: m ? {
      hasError: true
    } : true,
    "aria-busy": o,
    children: [(0, r.jsx)("div", {
      className: c.gt,
      children: E
    }), (0, r.jsx)(d, {
      show: true === l && !_ && true === h,
      iconSize: g ? "xs" : "sm",
      onClick: y
    }), (0, r.jsx)(f, {
      show: g,
      isOpen: p,
      onClick: b
    })]
  })
}

function d(e) {
  let {
    show: t,
    iconSize: n,
    onClick: i
  } = e;
  return t ? (0, r.jsx)(s.vN3, {
    children: (0, r.jsx)("button", {
      className: c.mt,
      "aria-label": l.intl.string(o.default.JA5C7L),
      onClick: i,
      children: (0, r.jsx)(s.aXh, {
        size: n,
        color: "currentColor"
      })
    })
  }) : (0, r.jsx)("span", {})
}

function f(e) {
  let {
    show: t,
    isOpen: n,
    onClick: i
  } = e;
  return t ? (0, r.jsx)("button", {
    "aria-hidden": true,
    tabIndex: false,
    className: c.E1,
    onClick: i,
    children: (0, r.jsx)("span", {
      className: a()(c.t4, {
        [c.nT]: n
      }),
      children: (0, r.jsx)(s.g8p, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  }) : null
}