/** Chunk was on 47129 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk465919 = require("./465919.js");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: a,
    useSubtitle: s,
    useOptions: u
  } = t, c = a(), d = null == s ? true : s(), _ = n(), E = u();
  return (0, i.jsx)(r.xJW, {
    title: c,
    className: l.radioContainer,
    children: (0, i.jsxs)("div", {
      className: l.radioContent,
      children: [null != d && (0, i.jsx)(r.R94, {
        type: r.geA.DESCRIPTION,
        children: d
      }), (0, i.jsx)(r.FXm, {
        options: E,
        value: _,
        onChange: e => o(e.value)
      })]
    })
  })
}