/** Chunk was on 88569 **/
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
    minValue: s,
    maxValue: c,
    useTitle: u,
    useSubtitle: d,
    useDisabled: f,
    onValueRender: p,
    asValueChanges: b,
    markers: y,
    onMarkerRender: g
  } = t, [v] = l.useState(() => a()), h = u(), m = null == d ? true : d(), x = null == f ? true : f();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(i.iRW, {
      label: h,
      description: m,
      disabled: x,
      initialValue: v,
      minValue: s,
      maxValue: c,
      onValueRender: p,
      asValueChanges: b,
      onValueChange: n,
      orientation: "horizontal",
      markers: y,
      onMarkerRender: g
    })
  })
}