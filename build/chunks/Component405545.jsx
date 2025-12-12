/** Chunk was on 384 **/
/** chunk id: 405545, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk186078 = require("./186078.jsx"),
  Chunk137158 = require("./137158.jsx");
let s = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: a,
    onDrop: o,
    onEdit: c,
    onRemove: u,
    canRemove: d,
    actionsLocation: g,
    fieldStyle: m
  } = e, {
    label: p
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: a,
    onDrop: o,
    onEdit: c,
    onRemove: u,
    title: p,
    canRemove: d,
    actionsLocation: g,
    fieldStyle: m,
    children: (0, r.jsx)(i.BO, {
      field: t,
      value: true,
      disabled: false
    })
  })
}