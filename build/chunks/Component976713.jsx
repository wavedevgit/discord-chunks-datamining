/** Chunk was on 36878 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk750741 = require("./750741.js");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: a,
    useSubtitle: r,
    useOptions: u
  } = t, c = a(), d = null == r ? true : r(), f = n(), g = u();
  return (0, i.jsx)(l.xJW, {
    title: c,
    className: s.radioContainer,
    children: (0, i.jsxs)("div", {
      className: s.radioContent,
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