/** Chunk was on 13608 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk874381 = require("./874381.js");

function i(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: i,
    useTitle: a,
    useSubtitle: s,
    useOptions: c,
    renderOptionLabel: u
  } = t, d = a(), f = null == s ? true : s(), m = n(), b = c();
  return (0, r.jsx)(l.xJW, {
    title: d,
    className: o.selectContainer,
    children: (0, r.jsxs)("div", {
      className: o.selectContent,
      children: [null != f && (0, r.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: f
      }), (0, r.jsx)(l.q4e, {
        value: m,
        onChange: e => i(e),
        options: b,
        renderOptionLabel: null != u ? u : true,
        renderOptionValue: null != u ? e => {
          let [t] = e;
          return u(t)
        } : true
      })]
    })
  })
}