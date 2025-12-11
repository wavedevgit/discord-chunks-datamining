/** Chunk was on 9536 **/
/** chunk id: 405545, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    fieldStyle: f
  } = e, {
    label: m
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: s,
    onDrop: o,
    onEdit: c,
    onRemove: d,
    title: m,
    canRemove: u,
    actionsLocation: g,
    fieldStyle: f,
    children: (0, r.jsx)(i.BO, {
      field: t,
      value: true,
      disabled: false
    })
  })
}