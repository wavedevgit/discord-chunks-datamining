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
    useTitle: s,
    useSubtitle: a,
    useOptions: u
  } = t, c = s(), d = null == a ? true : a(), g = n(), f = u();
  return (0, r.jsx)(i.xJW, {
    title: c,
    className: l.radioContainer,
    children: (0, r.jsxs)("div", {
      className: l.radioContent,
      children: [null != d && (0, r.jsx)(i.R94, {
        type: i.geA.DESCRIPTION,
        children: d
      }), (0, r.jsx)(i.FXm, {
        options: f,
        value: g,
        onChange: e => o(e.value)
      })]
    })
  })
}