/** Chunk was on 76210 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk465919 = require("./465919.js");

function s(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: s,
    useTitle: u,
    useSubtitle: o,
    useOptions: a
  } = t, c = u(), d = null == o ? true : o(), f = n(), g = a();
  return (0, l.jsx)(i.xJW, {
    title: c,
    className: r.radioContainer,
    children: (0, l.jsxs)("div", {
      className: r.radioContent,
      children: [null != d && (0, l.jsx)(i.R94, {
        type: i.geA.DESCRIPTION,
        children: d
      }), (0, l.jsx)(i.FXm, {
        options: g,
        value: f,
        onChange: e => s(e.value)
      })]
    })
  })
}