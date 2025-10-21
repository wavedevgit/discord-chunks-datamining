/** Chunk was on 13608 **/
/** chunk id: 72704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function i(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: i,
    useTitle: a,
    useSubtitle: c,
    useOptions: s,
    renderOptionLabel: u
  } = t, d = a(), f = null == c ? true : c(), b = n(), p = s();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(l.q4e, {
      label: d,
      description: f,
      value: b,
      onChange: e => i(e),
      options: p,
      renderOptionLabel: null != u ? u : true,
      renderOptionValue: null != u ? e => {
        let [t] = e;
        return u(t)
      } : true
    })
  })
}