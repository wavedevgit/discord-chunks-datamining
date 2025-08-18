/** Chunk was on 36878 **/
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
  } = t, c = s(), d = null == a ? true : a(), f = n(), g = u();
  return (0, i.jsx)(l.xJW, {
    title: c,
    className: r.radioContainer,
    children: (0, i.jsxs)("div", {
      className: r.radioContent,
      children: [null != d && (0, i.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: d
      }), (0, i.jsx)(l.FXm, {
        options: g,
        value: f,
        onChange: e => o(e.value)
      })]
    })
  })
}