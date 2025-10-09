/** Chunk was on 75685 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: i,
    useSubtitle: a,
    useOptions: s,
    renderOptionLabel: c
  } = t, u = i(), d = null == a ? true : a(), f = n(), b = s();
  return (0, r.jsx)(l.q4e, {
    label: u,
    description: d,
    value: f,
    onChange: e => o(e),
    options: b,
    renderOptionLabel: null != c ? c : true,
    renderOptionValue: null != c ? e => {
      let [t] = e;
      return c(t)
    } : true
  })
}