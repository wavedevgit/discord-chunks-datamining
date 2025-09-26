/** Chunk was on 49236 **/
/** chunk id: 428760, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk730671 = require("./730671.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554867 = require("./554867.js");

function u(e) {
  let {
    onChangeText: t,
    maxWordCount: n,
    className: l,
    textAreaClassName: u,
    subtitleText: m,
    initialValue: g
  } = e, p = i.useMemo(() => null != g ? g : [], [g]), {
    value: f,
    onChange: h,
    errorMessage: b
  } = (0, o.Z)(t, g, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(d.keywordsContainer, l),
      children: [(0, r.jsx)(a.lcI, {
        className: s()(d.keywordsTextArea, u),
        value: f,
        onChange: h,
        placeholder: c.intl.string(c.t.UyaxJy)
      }), (0, r.jsx)(a.Text, {
        className: d.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(p.length, " / ").concat(n)
      })]
    }), null != b ? (0, r.jsx)(a.Text, {
      className: s()(d.paddingTop, d.errorText),
      variant: "text-xs/medium",
      color: "text-danger",
      children: b
    }) : (0, r.jsx)(a.Text, {
      className: d.paddingTop,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: null != m ? m : c.intl.string(c.t["Gm6G5+"])
    })]
  })
}