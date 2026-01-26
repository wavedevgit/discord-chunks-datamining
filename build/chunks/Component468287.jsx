/** Chunk was on 11810 **/
/** chunk id: 468287, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk453016 = require("./453016.jsx"),
  Chunk243056 = require("./243056.jsx"),
  Chunk985018 = require("./985018.jsx");
let c = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: c,
    isDropHovered: s,
    onDrop: a,
    onEdit: d,
    onRemove: u,
    canRemove: f,
    actionsLocation: j,
    fieldStyle: p
  } = e, {
    label: b,
    placeholder: y
  } = t;
  return (0, r.jsx)(l.A, {
    field: t,
    index: n,
    isDragEnabled: c,
    isDropHovered: s,
    onDrop: a,
    onEdit: d,
    onRemove: u,
    title: b,
    canRemove: f,
    actionsLocation: j,
    fieldStyle: p,
    children: (0, r.jsx)(i._V, {
      placeholder: null != y ? y : o.intl.string(o.t["Sqn+Wh"]),
      disabled: true
    })
  })
}