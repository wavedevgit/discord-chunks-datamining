/** Chunk was on 60667 **/
/** chunk id: 915953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk244242 = require("./244242.jsx");

function a(e) {
  let {
    node: t
  } = e, {
    setValue: n,
    getInitialValue: a,
    minValue: o,
    maxValue: c,
    useDefaultValue: d,
    useTitle: u,
    useSubtitle: _,
    useHintText: p,
    useDisabled: m,
    onValueRender: g,
    asValueChanges: A,
    markers: f,
    onMarkerRender: h,
    stickToMarkers: b,
    fieldLayout: E
  } = t, [x] = i.useState(() => a()), O = u(), C = null == _ ? true : _(), I = null == p ? true : p(), T = null == m ? true : m(), S = null == d ? true : d();
  return (0, r.jsxs)(s.L, {
    children: [(0, r.jsx)(l.Apm, {
      label: O,
      description: C,
      disabled: T,
      initialValue: x,
      minValue: o,
      maxValue: c,
      defaultValue: S,
      onValueRender: g,
      asValueChanges: A,
      onValueChange: n,
      orientation: "horizontal",
      markers: f,
      onMarkerRender: h,
      stickToMarkers: b,
      layout: E
    }), null != I && (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: I
    })]
  })
}