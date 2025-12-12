/** Chunk was on 9536 **/
/** chunk id: 428760, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk730671 = require("./730671.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773655 = require("./773655.js");

function u(e) {
  let {
    onChangeText: t,
    maxWordCount: n,
    className: l,
    textAreaClassName: u,
    subtitleText: g,
    initialValue: f
  } = e, m = i.useMemo(() => null != f ? f : [], [f]), {
    value: b,
    onChange: p,
    errorMessage: h
  } = (0, o.Z)(t, f, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(d.keywordsContainer, l),
      children: [(0, r.jsx)(s.lcI, {
        className: a()(d.keywordsTextArea, u),
        value: b,
        onChange: p,
        placeholder: c.intl.string(c.t.UyaxJy)
      }), (0, r.jsx)(s.Text, {
        className: d.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(m.length, " / ").concat(n)
      })]
    }), null != h ? (0, r.jsx)(s.Text, {
      className: a()(d.paddingTop, d.errorText),
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: h
    }) : (0, r.jsx)(s.Text, {
      className: d.paddingTop,
      variant: "text-xs/normal",
      color: "text-default",
      children: null != g ? g : c.intl.string(c.t.Gm6G5x)
    })]
  })
}