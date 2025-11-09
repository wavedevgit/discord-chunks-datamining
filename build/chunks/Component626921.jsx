/** Chunk was on web.js **/
/** chunk id: 626921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk893026 = require("./893026.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484050 = require("./484050.js");

function u(e) {
  let {
    ref: t,
    disabled: n,
    readOnly: i,
    loading: s,
    clearable: l,
    fullWidth: u,
    isOpen: _,
    isInert: p,
    hasValue: h,
    hasError: m,
    showChevronButton: g = true,
    width: E,
    children: b,
    handleToggle: y,
    handleClear: O
  } = e;
  return (0, r.jsxs)(o.UPk, {
    ref: t,
    containerClassName: a()(c.selectFieldContainer, {
      [c.fullWidth]: u
    }),
    className: a()(c.selectField, {
      [c.isFocused]: _,
      [c.isInert]: p
    }),
    style: u ? true : {
      width: "min(".concat(E, ", 100%)")
    },
    "data-mana-component": "select-input-field",
    disabled: n,
    readOnly: i,
    fullWidth: u,
    validation: m ? {
      hasError: true
    } : true,
    "aria-busy": s,
    children: [(0, r.jsx)("div", {
      className: c.selectFieldContent,
      children: b
    }), (0, r.jsx)(d, {
      show: true === l && !p && true === h,
      iconSize: g ? "xs" : "sm",
      onClick: O
    }), (0, r.jsx)(f, {
      show: g,
      isOpen: _,
      onClick: y
    })]
  })
}

function d(e) {
  let {
    show: t,
    iconSize: n,
    onClick: i
  } = e;
  return t ? (0, r.jsx)(o.tEY, {
    children: (0, r.jsx)("button", {
      className: c.clearButton,
      "aria-label": l.intl.string(s.default.JA5C7L),
      onClick: i,
      children: (0, r.jsx)(o.k$p, {
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
    className: c.chevronButton,
    onClick: i,
    children: (0, r.jsx)("span", {
      className: a()(c.chevronIcon, {
        [c.isOpen]: n
      }),
      children: (0, r.jsx)(o.hic, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  }) : null
}