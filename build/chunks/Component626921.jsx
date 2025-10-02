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
  Chunk614177 = require("./614177.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484050 = require("./484050.js");

function d(e) {
  let {
    ref: t,
    disabled: n,
    readOnly: i,
    loading: o,
    clearable: l,
    fullWidth: c,
    isOpen: d,
    isInert: h,
    hasValue: m,
    showChevronButton: g = true,
    width: E,
    leadingAccessory: b,
    children: y,
    handleToggle: O,
    handleClear: v
  } = e;
  return (0, r.jsxs)(s.U, {
    ref: t,
    containerClassName: a()(u.selectFieldContainer, {
      [u.fullWidth]: c
    }),
    className: a()(u.selectField, {
      [u.isFocused]: d,
      [u.isInert]: h
    }),
    style: c ? true : {
      width: "min(".concat(E, ", 100%)")
    },
    disabled: n,
    readOnly: i,
    fullWidth: c,
    children: [b, y, (0, r.jsx)(f, {
      show: true === l && !h && true === m,
      iconSize: g ? "xs" : "sm",
      onClick: v
    }), (0, r.jsx)(_, {
      show: true === g && !o,
      isOpen: d,
      onClick: O
    }), (0, r.jsx)(p, {
      show: true === o
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

function p(e) {
  let {
    show: t
  } = e;
  return t ? (0, r.jsx)("div", {
    className: u.loadingSpinner,
    children: (0, r.jsx)(o.$jN, {
      type: o.RAz.PULSING_ELLIPSIS
    })
  }) : null
}