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
  } = t, d = a(), _ = null == o ? true : o(), E = n(), N = u();
  return (0, i.jsx)(l.xJW, {
    title: d,
    className: r.selectContainer,
    children: (0, i.jsxs)("div", {
      className: r.selectContent,
      children: [null != _ && (0, i.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: _
      }), (0, i.jsx)(l.q4e, {
        value: E,
        onChange: e => s(e),
        options: N,
        renderOptionLabel: null != c ? c : true,
        renderOptionValue: null != c ? e => {
          let [t] = e;
          return c(t)
        } : true
      })]
    })
  })
}