/** Chunk was on 47841 **/
/** chunk id: 910919, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk414626 = require("./414626.jsx"),
  Chunk243056 = require("./243056.jsx");
let s = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: a,
    onDrop: c,
    onEdit: o,
    onRemove: d,
    canRemove: u,
    actionsLocation: f,
    fieldStyle: g
  } = e, {
    label: b
  } = t;
  return (0, r.jsx)(l.A, {
    field: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: a,
    onDrop: c,
    onEdit: o,
    onRemove: d,
    title: b,
    canRemove: u,
    actionsLocation: f,
    fieldStyle: g,
    children: (0, r.jsx)(i.mR, {
      field: t,
      value: true,
      disabled: false
    })
  })
}