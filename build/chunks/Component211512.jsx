/** Chunk was on 36878 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => a
});
var Chunk951288 = require("./951288.js"),
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
  } = t, g = a(), v = null == u ? true : u(), m = n(), b = null == c ? true : c(), x = null == d ? true : d();
  return (0, i.jsx)(l.x, {
    title: g,
    className: s.settingButtonContainer,
    children: (0, i.jsxs)("div", {
      className: s.settingButtonContent,
      children: [null != v && (0, i.jsx)(r.R, {
        type: r.g.DESCRIPTION,
        children: v
      }), (0, i.jsx)(o.zxk, {
        onClick: f,
        text: m,
        variant: b,
        disabled: x
      })]
    })
  })
}