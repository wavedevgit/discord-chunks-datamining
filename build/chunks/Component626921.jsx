/** Chunk was on web.js **/
/** chunk id: 626921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk74655 = require("./74655.jsx"),
  Chunk490340 = require("./490340.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680765 = require("./680765.js");

function d(e) {
  let {
    ref: t,
    disabled: n,
    readOnly: i,
    loading: o,
    clearable: l,
    fullWidth: c,
    isOpen: d,
    isInert: p,
    hasValue: h,
    showChevronButton: m = true,
    width: g,
    children: E,
    handleToggle: b,
    handleClear: y
  } = e;
  return (0, r.jsxs)(s.U, {
    ref: t,
    containerClassName: a()(u.selectFieldContainer, {
      [u.fullWidth]: c
    }),
    className: a()(u.selectField, {
      [u.isFocused]: d,
      [u.isInert]: p
    }),
    style: c ? true : {
      width: "min(".concat(g, ", 100%)")
    },
    "data-mana-component": "select-input-field",
    disabled: n,
    readOnly: i,
    fullWidth: c,
    "aria-busy": o,
    children: [(0, r.jsx)("div", {
      className: u.selectFieldContent,
      children: E
    }), (0, r.jsx)(f, {
      show: true === l && !p && true === h,
      iconSize: m ? "xs" : "sm",
      onClick: y
    }), (0, r.jsx)(_, {
      show: m,
      isOpen: d,
      onClick: b
    })]
  })
}

function f(e) {
  let {
    show: t,
    iconSize: n,
    onClick: i
  } = e;
  return t ? (0, r.jsx)(o.tEY, {
    children: (0, r.jsx)("button", {
      className: u.clearButton,
      "aria-label": c.intl.string(l.default.JA5C7O),
      onClick: i,
      children: (0, r.jsx)(o.k$p, {
        size: n,
        color: "currentColor"
      })
    })
  }) : (0, r.jsx)("span", {})
}

function _(e) {
  let {
    show: t,
    isOpen: n,
    onClick: i
  } = e;
  return t ? (0, r.jsx)("button", {
    "aria-hidden": true,
    tabIndex: false,
    className: u.chevronButton,
    onClick: i,
    children: (0, r.jsx)("span", {
      className: a()(u.chevronIcon, {
        [u.isOpen]: n
      }),
      children: (0, r.jsx)(o.hic, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  }) : null
}