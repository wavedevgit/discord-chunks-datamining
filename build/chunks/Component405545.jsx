/** Chunk was on 6049 **/
/** chunk id: 405545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk186078 = require("./186078.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk31829 = require("./31829.js");
let c = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: i,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    canRemove: g,
    actionsLocation: p,
    fieldStyle: h
  } = e, {
    label: f
  } = t;
  return (0, r.jsx)(s.Z, {
    field: t,
    index: n,
    isDragEnabled: i,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    title: f,
    canRemove: g,
    actionsLocation: p,
    fieldStyle: h,
    children: (0, r.jsx)(a.BO, {
      field: t,
      value: true,
      radioItemClassName: l()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: false
    })
  })
}