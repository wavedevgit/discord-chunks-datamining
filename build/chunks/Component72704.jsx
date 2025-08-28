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
  } = t, d = s(), _ = null == a ? true : a(), E = n(), f = u();
  return (0, i.jsx)(r.xJW, {
    title: d,
    className: l.selectContainer,
    children: (0, i.jsxs)("div", {
      className: l.selectContent,
      children: [null != _ && (0, i.jsx)(r.R94, {
        type: r.geA.DESCRIPTION,
        children: _
      }), (0, i.jsx)(r.q4e, {
        value: E,
        onChange: e => o(e),
        options: f,
        renderOptionLabel: null != c ? c : true,
        renderOptionValue: null != c ? e => {
          let [t] = e;
          return c(t)
        } : true
      })]
    })
  })
}