/** Chunk was on 16985 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: a,
    useSubtitle: c,
    useOptions: s,
    renderOptionLabel: u
  } = t, d = a(), f = null == c ? true : c(), b = n(), y = s();
  return (0, r.jsx)(i.X, {
    children: (0, r.jsx)(l.q4e, {
      label: d,
      description: f,
      value: b,
      onChange: e => o(e),
      options: y,
      renderOptionLabel: null != u ? u : true,
      renderOptionValue: null != u ? e => {
        let [t] = e;
        return u(t)
      } : true
    })
  })
}