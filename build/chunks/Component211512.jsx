/** Chunk was on 36878 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk188639 = require("./188639.js");

function a(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: a,
    useSubtitle: u,
    useVariant: c,
    useDisabled: d,
    onClick: f
  } = t, g = a(), m = null == u ? true : u(), v = n(), b = null == c ? true : c(), x = null == d ? true : d();
  return (0, i.jsx)(l.x, {
    title: g,
    className: r.settingButtonContainer,
    children: (0, i.jsxs)("div", {
      className: r.settingButtonContent,
      children: [null != m && (0, i.jsx)(s.R, {
        type: s.g.DESCRIPTION,
        children: m
      }), (0, i.jsx)(o.zxk, {
        onClick: f,
        text: v,
        variant: b,
        disabled: x
      })]
    })
  })
}