/** Chunk was on web.js **/
/** chunk id: 555361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function s(e) {
  let {
    node: t
  } = e, {
    setValue: n,
    getInitialValue: s,
    minValue: l,
    maxValue: c,
    useTitle: u,
    useSubtitle: d,
    useDisabled: f,
    onValueRender: p,
    asValueChanges: _,
    markers: m,
    onMarkerRender: h
  } = t, [g] = i.useState(() => s()), E = u(), b = null == d ? true : d(), y = null == f ? true : f();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(a.iRW, {
      label: E,
      description: b,
      disabled: y,
      initialValue: g,
      minValue: l,
      maxValue: c,
      onValueRender: p,
      asValueChanges: _,
      onValueChange: n,
      orientation: "horizontal",
      markers: m,
      onMarkerRender: h
    })
  })
}