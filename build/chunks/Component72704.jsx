/** Chunk was on 47129 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk825185 = require("./825185.js");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: s,
    useSubtitle: a,
    useOptions: u,
    renderOptionLabel: c
  } = t, d = s(), f = null == a ? true : a(), g = n(), y = u();
  return (0, r.jsx)(i.xJW, {
    title: d,
    className: l.selectContainer,
    children: (0, r.jsxs)("div", {
      className: l.selectContent,
      children: [null != f && (0, r.jsx)(i.R94, {
        type: i.geA.DESCRIPTION,
        children: f
      }), (0, r.jsx)(i.q4e, {
        value: g,
        onChange: e => o(e),
        options: y,
        renderOptionLabel: null != c ? c : true,
        renderOptionValue: null != c ? e => {
          let [t] = e;
          return c(t)
        } : true
      })]
    })
  })
}