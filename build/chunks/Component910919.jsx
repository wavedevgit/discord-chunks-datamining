/** Chunk was on 11810 **/
/** chunk id: 910919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk414626 = require("./414626.jsx"),
  Chunk243056 = require("./243056.jsx");
let o = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: s,
    onEdit: a,
    onRemove: d,
    canRemove: u,
    actionsLocation: f,
    fieldStyle: j
  } = e, {
    label: p
  } = t;
  return (0, r.jsx)(l.A, {
    field: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: s,
    onEdit: a,
    onRemove: d,
    title: p,
    canRemove: u,
    actionsLocation: f,
    fieldStyle: j,
    children: (0, r.jsx)(i.mR, {
      field: t,
      value: true,
      disabled: false
    })
  })
}