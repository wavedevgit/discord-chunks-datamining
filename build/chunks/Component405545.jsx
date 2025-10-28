/** Chunk was on 64982 **/
/** chunk id: 405545, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk186078 = require("./186078.jsx"),
  Chunk137158 = require("./137158.jsx");
let a = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: s,
    onDrop: o,
    onEdit: c,
    onRemove: d,
    canRemove: u,
    actionsLocation: g,
    fieldStyle: m
  } = e, {
    label: p
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: s,
    onDrop: o,
    onEdit: c,
    onRemove: d,
    title: p,
    canRemove: u,
    actionsLocation: g,
    fieldStyle: m,
    children: (0, r.jsx)(i.BO, {
      field: t,
      value: true,
      disabled: false
    })
  })
}