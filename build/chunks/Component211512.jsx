/** Chunk was on 76210 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk188639 = require("./188639.js");

function u(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: u,
    useSubtitle: a,
    useVariant: c,
    useDisabled: d,
    onClick: f
  } = t, g = u(), v = null == a ? true : a(), m = n(), j = null == c ? true : c(), b = null == d ? true : d();
  return (0, l.jsx)(i.x, {
    title: g,
    className: o.settingButtonContainer,
    children: (0, l.jsxs)("div", {
      className: o.settingButtonContent,
      children: [null != v && (0, l.jsx)(r.R, {
        type: r.g.DESCRIPTION,
        children: v
      }), (0, l.jsx)(s.zxk, {
        onClick: f,
        text: m,
        variant: j,
        disabled: b
      })]
    })
  })
}