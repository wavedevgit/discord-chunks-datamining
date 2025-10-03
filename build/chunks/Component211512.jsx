/** Chunk was on 75685 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk188639 = require("./188639.js");

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
  } = t, m = s(), b = null == c ? true : c(), j = n(), x = null == u ? true : u(), p = null == d ? true : d();
  return (0, r.jsx)(l.x, {
    title: m,
    className: a.settingButtonContainer,
    children: (0, r.jsxs)("div", {
      className: a.settingButtonContent,
      children: [null != b && (0, r.jsx)(o.R, {
        type: o.g.DESCRIPTION,
        children: b
      }), (0, r.jsx)(i.zxk, {
        onClick: f,
        text: j,
        variant: x,
        disabled: p
      })]
    })
  })
}