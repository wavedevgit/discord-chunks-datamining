/** Chunk was on 29679 **/
/** chunk id: 405545, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk186078 = require("./186078.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk866234 = require("./866234.js");
let s = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    canRemove: g,
    actionsLocation: m,
    fieldStyle: p
  } = e, {
    label: f
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    title: f,
    canRemove: g,
    actionsLocation: m,
    fieldStyle: p,
    children: (0, r.jsx)(i.BO, {
      field: t,
      value: true,
      radioItemClassName: a.multipleChoiceFixedTextColor,
      disabled: false
    })
  })
}