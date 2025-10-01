/** Chunk was on 59739 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk825185 = require("./825185.js");

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
  } = t, d = a(), f = null == s ? true : s(), b = n(), m = c();
  return (0, r.jsx)(o.xJW, {
    title: d,
    className: l.selectContainer,
    children: (0, r.jsxs)("div", {
      className: l.selectContent,
      children: [null != f && (0, r.jsx)(o.R94, {
        type: o.geA.DESCRIPTION,
        children: f
      }), (0, r.jsx)(o.q4e, {
        value: b,
        onChange: e => i(e),
        options: m,
        renderOptionLabel: null != u ? u : true,
        renderOptionValue: null != u ? e => {
          let [t] = e;
          return u(t)
        } : true
      })]
    })
  })
}