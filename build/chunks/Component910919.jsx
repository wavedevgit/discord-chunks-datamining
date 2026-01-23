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
    onDrop: o,
    onEdit: c,
    onRemove: d,
    canRemove: u,
    actionsLocation: g,
    fieldStyle: m
  } = e, {
    label: p
  } = t;
  return (0, r.jsx)(l.A, {
    field: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: a,
    onDrop: o,
    onEdit: c,
    onRemove: d,
    title: p,
    canRemove: u,
    actionsLocation: g,
    fieldStyle: m,
    children: (0, r.jsx)(i.mR, {
      field: t,
      value: true,
      disabled: false
    })
  })
}