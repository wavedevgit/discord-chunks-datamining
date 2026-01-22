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
    subtitleText: f,
    initialValue: g
  } = e, b = i.useMemo(() => null != g ? g : [], [g]), {
    value: m,
    onChange: p,
    errorMessage: x
  } = (0, c.A)(t, g, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(d.Qn, l),
      children: [(0, r.jsx)(a.d4u, {
        className: s()(d.To, u),
        value: m,
        onChange: p,
        placeholder: o.intl.string(o.t.UyaxJy)
      }), (0, r.jsx)(a.Text, {
        className: d.fE,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(b.length, " / ").concat(n)
      })]
    }), null != x ? (0, r.jsx)(a.Text, {
      className: s()(d.dG, d.kc),
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: x
    }) : (0, r.jsx)(a.Text, {
      className: d.dG,
      variant: "text-xs/normal",
      color: "text-default",
      children: null != f ? f : o.intl.string(o.t.Gm6G5x)
    })]
  })
}