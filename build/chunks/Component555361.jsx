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
    useDefaultValue: u,
    useTitle: d,
    useSubtitle: f,
    useHintText: p,
    useDisabled: _,
    onValueRender: m,
    asValueChanges: h,
    markers: g,
    onMarkerRender: E,
    stickToMarkers: b,
    fieldLayout: y
  } = t, [O] = i.useState(() => s()), v = d(), S = null == f ? true : f(), I = null == p ? true : p(), T = null == _ ? true : _(), C = null == u ? true : u();
  return (0, r.jsxs)(o.X, {
    children: [(0, r.jsx)(a.iRW, {
      label: v,
      description: S,
      disabled: T,
      initialValue: O,
      minValue: l,
      maxValue: c,
      defaultValue: C,
      onValueRender: m,
      asValueChanges: h,
      onValueChange: n,
      orientation: "horizontal",
      markers: g,
      onMarkerRender: E,
      stickToMarkers: b,
      layout: y
    }), null != I && (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: I
    })]
  })
}