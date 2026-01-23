/** Chunk was on web.js **/
/** chunk id: 915953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk244242 = require("./244242.jsx");

function o(e) {
  let {
    node: t
  } = e, {
    setValue: n,
    getInitialValue: o,
    minValue: l,
    maxValue: c,
    useDefaultValue: u,
    useTitle: d,
    useSubtitle: f,
    useHintText: p,
    useDisabled: _,
    onValueRender: h,
    asValueChanges: m,
    markers: g,
    onMarkerRender: E,
    stickToMarkers: y,
    fieldLayout: b
  } = t, [O] = i.useState(() => o()), v = d(), A = null == f ? true : f(), I = null == p ? true : p(), S = null == _ ? true : _(), T = null == u ? true : u();
  return (0, r.jsxs)(s.L, {
    children: [(0, r.jsx)(a.Apm, {
      label: v,
      description: A,
      disabled: S,
      initialValue: O,
      minValue: l,
      maxValue: c,
      defaultValue: T,
      onValueRender: h,
      asValueChanges: m,
      onValueChange: n,
      orientation: "horizontal",
      markers: g,
      onMarkerRender: E,
      stickToMarkers: y,
      layout: b
    }), null != I && (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: I
    })]
  })
}