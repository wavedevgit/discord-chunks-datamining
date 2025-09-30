/** Chunk was on 59739 **/
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
  } = t, b = s(), p = null == c ? true : c(), m = n(), j = null == u ? true : u(), y = null == d ? true : d();
  return (0, r.jsx)(o.x, {
    title: b,
    className: a.settingButtonContainer,
    children: (0, r.jsxs)("div", {
      className: a.settingButtonContent,
      children: [null != p && (0, r.jsx)(l.R, {
        type: l.g.DESCRIPTION,
        children: p
      }), (0, r.jsx)(i.zxk, {
        onClick: f,
        text: m,
        variant: j,
        disabled: y
      })]
    })
  })
}