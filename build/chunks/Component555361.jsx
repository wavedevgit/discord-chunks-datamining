/** Chunk was on 16985 **/
/** chunk id: 555361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function a(e) {
  let {
    node: t
  } = e, {
    setValue: n,
    getInitialValue: a,
    minValue: c,
    maxValue: s,
    useTitle: u,
    useSubtitle: d,
    useDisabled: f,
    onValueRender: b,
    asValueChanges: p
  } = t, [y] = l.useState(() => a()), j = u(), v = null == d ? true : d(), m = null == f ? true : f();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(i.iRW, {
      label: j,
      description: v,
      disabled: m,
      initialValue: y,
      minValue: c,
      maxValue: s,
      onValueRender: b,
      asValueChanges: p,
      onValueChange: n,
      orientation: "horizontal"
    })
  })
}