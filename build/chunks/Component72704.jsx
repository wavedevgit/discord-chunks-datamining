/** Chunk was on 76210 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk825185 = require("./825185.js");

function s(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: s,
    useTitle: a,
    useSubtitle: o,
    useOptions: u,
    renderOptionLabel: c
  } = t, d = a(), T = null == o ? true : o(), O = n(), f = u();
  return (0, l.jsx)(i.xJW, {
    title: d,
    className: r.selectContainer,
    children: (0, l.jsxs)("div", {
      className: r.selectContent,
      children: [null != T && (0, l.jsx)(i.R94, {
        type: i.geA.DESCRIPTION,
        children: T
      }), (0, l.jsx)(i.q4e, {
        value: O,
        onChange: e => s(e),
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