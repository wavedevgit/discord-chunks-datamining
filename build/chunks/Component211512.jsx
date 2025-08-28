/** Chunk was on 47129 **/
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
    useSubtitle: u,
    useVariant: c,
    useDisabled: d,
    onClick: _
  } = t, E = s(), N = null == u ? true : u(), g = n(), O = null == c ? true : c(), I = null == d ? true : d();
  return (0, i.jsx)(r.x, {
    title: E,
    className: a.settingButtonContainer,
    children: (0, i.jsxs)("div", {
      className: a.settingButtonContent,
      children: [null != N && (0, i.jsx)(l.R, {
        type: l.g.DESCRIPTION,
        children: N
      }), (0, i.jsx)(o.zxk, {
        onClick: _,
        text: g,
        variant: O,
        disabled: I
      })]
    })
  })
}