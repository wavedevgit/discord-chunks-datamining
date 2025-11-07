/** Chunk was on 18729 **/
/** chunk id: 555361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = t, [y] = l.useState(() => a()), j = u(), m = null == d ? true : d(), v = null == f ? true : f();
  return (0, r.jsx)(i.X, {
    children: (0, r.jsx)(o.iRW, {
      label: j,
      description: m,
      disabled: v,
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