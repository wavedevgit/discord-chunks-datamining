/** Chunk was on web.js **/
/** chunk id: 601973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk426333 = require("./426333.js"),
  Chunk934551 = require("./934551.js"),
  Chunk862301 = require("./862301.jsx"),
  Chunk460890 = require("./460890.jsx"),
  Chunk594597 = require("./594597.js");

function d(e) {
  let {
    ref: t,
    disabled: n,
    readOnly: i,
    loading: o,
    clearable: s,
    fullWidth: c,
    isOpen: d,
    isInert: _,
    hasValue: h,
    hasError: m,
    showChevronButton: g = true,
    children: E,
    handleToggle: y,
    handleClear: b
  } = e;
  return (0, r.jsxs)(l.F, {
    ref: t,
    containerClassName: a()(u.cQ, {
      [u.Ij]: c
    }),
    className: a()(u.Bd, {
      [u.ar]: d,
      [u.ND]: _
    }),
    "data-mana-component": "select-input-field",
    disabled: n,
    readOnly: i,
    fullWidth: c,
    validation: m ? {
      hasError: true
    } : true,
    "aria-busy": o,
    children: [(0, r.jsx)("div", {
      className: u.gt,
      children: E
    }), (0, r.jsx)(f, {
      show: true === s && !_ && true === h,
      iconSize: g ? "xs" : "sm",
      onClick: b
    }), (0, r.jsx)(p, {
      show: g,
      isOpen: d,
      onClick: y
    })]
  })
}

function f(e) {
  let {
    show: t,
    iconSize: n,
    onClick: i
  } = e, {
    i18n: a
  } = (0, c.G9)();
  return t ? (0, r.jsx)(o.vN, {
    children: (0, r.jsx)("button", {
      className: u.mt,
      "aria-label": a.CLEAR_SELECTION,
      onClick: i,
      children: (0, r.jsx)(s.CircleXIcon, {
        size: n,
        color: "currentColor"
      })
    })
  }) : (0, r.jsx)("span", {})
}

function p(e) {
  let {
    show: t,
    isOpen: n,
    onClick: i
  } = e;
  return t ? (0, r.jsx)("button", {
    "aria-hidden": true,
    tabIndex: false,
    className: u.E1,
    onClick: i,
    children: (0, r.jsx)("span", {
      className: a()(u.t4, {
        [u.nT]: n
      }),
      children: (0, r.jsx)(s.ChevronLargeDownIcon, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  }) : null
}