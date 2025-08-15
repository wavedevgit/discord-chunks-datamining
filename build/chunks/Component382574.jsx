/** Chunk was on 6049 **/
/** chunk id: 382574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk73880 = require("./73880.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31829 = require("./31829.js");
let o = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    canRemove: g,
    actionsLocation: p,
    fieldStyle: h
  } = e, {
    label: f,
    placeholder: b
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    title: f,
    canRemove: g,
    actionsLocation: p,
    fieldStyle: h,
    children: (0, r.jsx)(i.Q8, {
      className: s.fieldBackground,
      placeholder: null != b ? b : a.intl.string(a.t["Sqn+Wl"]),
      disabled: true
    })
  })
}