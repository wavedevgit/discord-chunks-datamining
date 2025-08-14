/** Chunk was on 36878 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk825185 = require("./825185.js");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: a,
    useSubtitle: r,
    useOptions: u,
    renderOptionLabel: c
  } = t, d = a(), f = null == r ? true : r(), g = n(), m = u();
  return (0, i.jsx)(l.xJW, {
    title: d,
    className: s.selectContainer,
    children: (0, i.jsxs)("div", {
      className: s.selectContent,
      children: [null != f && (0, i.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: f
      }), (0, i.jsx)(l.q4e, {
        value: g,
        onChange: e => o(e),
        options: m,
        renderOptionLabel: null != c ? c : true,
        renderOptionValue: null != c ? e => {
          let [t] = e;
          return c(t)
        } : true
      })]
    })
  })
}