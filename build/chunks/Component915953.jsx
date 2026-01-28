/** Chunk was on 5606 **/
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
    useSubtitle: p,
    useHintText: _,
    useDisabled: m,
    onValueRender: g,
    asValueChanges: f,
    markers: b,
    onMarkerRender: h,
    stickToMarkers: A,
    fieldLayout: E
  } = t, [x] = i.useState(() => a()), O = u(), C = null == p ? true : p(), y = null == _ ? true : _(), j = null == m ? true : m(), T = null == d ? true : d();
  return (0, r.jsxs)(s.L, {
    children: [(0, r.jsx)(l.Apm, {
      label: O,
      description: C,
      disabled: j,
      initialValue: x,
      minValue: o,
      maxValue: c,
      defaultValue: T,
      onValueRender: g,
      asValueChanges: f,
      onValueChange: n,
      orientation: "horizontal",
      markers: b,
      onMarkerRender: h,
      stickToMarkers: A,
      layout: E
    }), null != y && (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: y
    })]
  })
}