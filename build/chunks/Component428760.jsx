/** Chunk was on 22988 **/
/** chunk id: 428760, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk730671 = require("./730671.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886678 = require("./886678.js");

function u(e) {
  let {
    onChangeText: t,
    maxWordCount: n,
    className: l,
    textAreaClassName: u,
    subtitleText: m,
    initialValue: g
  } = e, p = i.useMemo(() => null != g ? g : [], [g]), {
    value: h,
    onChange: f,
    errorMessage: b
  } = (0, o.Z)(t, g, n);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(d.keywordsContainer, l),
      children: [(0, r.jsx)(s.lcI, {
        className: a()(d.keywordsTextArea, u),
        value: h,
        onChange: f,
        placeholder: c.intl.string(c.t.UyaxJy)
      }), (0, r.jsx)(s.Text, {
        className: d.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(p.length, " / ").concat(n)
      })]
    }), null != b ? (0, r.jsx)(s.Text, {
      className: a()(d.paddingTop, d.errorText),
      variant: "text-xs/medium",
      color: "text-danger",
      children: b
    }) : (0, r.jsx)(s.Text, {
      className: d.paddingTop,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: null != m ? m : c.intl.string(c.t["Gm6G5+"])
    })]
  })
}