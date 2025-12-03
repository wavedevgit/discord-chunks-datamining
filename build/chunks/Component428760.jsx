/** Chunk was on 384 **/
/** chunk id: 428760, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk730671 = require("./730671.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554867 = require("./554867.js");

function d(e) {
  let {
    onChangeText: t,
    maxWordCount: n,
    className: l,
    textAreaClassName: d,
    subtitleText: g,
    initialValue: m
  } = e, p = i.useMemo(() => null != m ? m : [], [m]), {
    value: f,
    onChange: h,
    errorMessage: b
  } = (0, o.Z)(t, m, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(u.keywordsContainer, l),
      children: [(0, r.jsx)(s.lcI, {
        className: a()(u.keywordsTextArea, d),
        value: f,
        onChange: h,
        placeholder: c.intl.string(c.t.UyaxJy)
      }), (0, r.jsx)(s.Text, {
        className: u.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(p.length, " / ").concat(n)
      })]
    }), null != b ? (0, r.jsx)(s.Text, {
      className: a()(u.paddingTop, u.errorText),
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: b
    }) : (0, r.jsx)(s.Text, {
      className: u.paddingTop,
      variant: "text-xs/normal",
      color: "text-default",
      children: null != g ? g : c.intl.string(c.t.Gm6G5x)
    })]
  })
}