/** Chunk was on 47841 **/
/** chunk id: 391958, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk727904 = require("./727904.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk973184 = require("./973184.js");

function u(e) {
  let {
    onChangeText: t,
    maxWordCount: n,
    className: l,
    textAreaClassName: u,
    subtitleText: g,
    initialValue: m
  } = e, p = i.useMemo(() => null != m ? m : [], [m]), {
    value: f,
    onChange: b,
    errorMessage: h
  } = (0, o.A)(t, m, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(d.Qn, l),
      children: [(0, r.jsx)(a.d4u, {
        className: s()(d.To, u),
        value: f,
        onChange: b,
        placeholder: c.intl.string(c.t.UyaxJy)
      }), (0, r.jsx)(a.Text, {
        className: d.fE,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(p.length, " / ").concat(n)
      })]
    }), null != h ? (0, r.jsx)(a.Text, {
      className: s()(d.dG, d.kc),
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: h
    }) : (0, r.jsx)(a.Text, {
      className: d.dG,
      variant: "text-xs/normal",
      color: "text-default",
      children: null != g ? g : c.intl.string(c.t.Gm6G5x)
    })]
  })
}