/** Chunk was on 36878 **/
/** chunk id: 558731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk855256 = require("./855256.js");

function s(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: s,
    useSubtitle: c,
    useVariant: u,
    useDisabled: d,
    onClick: f
  } = t, m = s(), x = null == c ? true : c(), g = n(), v = null == u ? true : u(), b = null == d ? true : d();
  return (0, i.jsx)(o.x, {
    title: m,
    className: a.settingButtonContainer,
    children: (0, i.jsxs)("div", {
      className: a.settingButtonContent,
      children: [null != x && (0, i.jsx)(l.R, {
        type: l.g.DESCRIPTION,
        children: x
      }), (0, i.jsx)(r.zxk, {
        onClick: f,
        text: g,
        variant: v,
        disabled: b
      })]
    })
  })
}