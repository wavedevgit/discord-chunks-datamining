/** Chunk was on web.js **/
/** chunk id: 629584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk802514 = require("./802514.js");

function u(e) {
  switch (e) {
    case "tab":
    default:
      return c.v_;
    case "pill":
      return c.V_
  }
}

function d(e) {
  switch (e) {
    case "tab":
    default:
      return c.V3;
    case "pill":
      return c.RW
  }
}

function f(e) {
  switch (e) {
    case "tab":
    default:
      return c.u7;
    case "pill":
      return c.EN
  }
}

function p(e) {
  return "pill" === e ? c.up : true
}

function _(e) {
  let {
    option: t,
    selected: n,
    onClick: a,
    look: u,
    className: _,
    disabled: h = false,
    tooltip: m,
    tooltipAriaLabel: g
  } = e, E = i.useCallback(e => a(t, e), [a, t]), b = () => (0, r.jsx)(l.DUT, {
    className: s()(d(u), _, {
      [f(u)]: n,
      [c.r9]: h
    }),
    "aria-disabled": h,
    "aria-label": null != m ? g : true,
    onClick: h ? true : E,
    children: (0, r.jsxs)(l.Text, {
      className: s()(c.JU, p(u)),
      variant: "text-sm/medium",
      color: "none",
      children: [null != t.icon ? (0, r.jsx)(t.icon, {
        className: c.Kk
      }) : null, t.name]
    })
  });
  return null == m ? b() : (0, r.jsx)(o.m, {
    shouldShow: !h,
    __unsupportedReactNodeAsText: m,
    children: b()
  })
}

function h(e) {
  let {
    options: t,
    value: n,
    onChange: a,
    look: o = "tab",
    className: l,
    optionClassName: d,
    disabled: f = false
  } = e, p = i.useCallback(e => {
    var t;
    let i = n === e.value;
    return (0, r.jsx)(_, {
      selected: i,
      option: e,
      look: o,
      onClick: a,
      disabled: f,
      className: s()(d, e.className),
      tooltip: e.tooltip,
      tooltipAriaLabel: e.tooltipAriaLabel
    }, null != (t = e.key) ? t : String(e.value))
  }, [n, o, a, d, f]);
  return (0, r.jsx)("div", {
    className: s()(u(o), l, {
      [c.ii]: f
    }),
    children: t.map(p)
  })
}