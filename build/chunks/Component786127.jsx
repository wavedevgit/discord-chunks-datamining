/** Chunk was on 9536 **/
/** chunk id: 786127, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk707592 = require("./707592.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk388032 = require("./388032.jsx");
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
    fieldStyle: f
  } = e, {
    label: p,
    placeholder: b
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    title: p,
    canRemove: g,
    actionsLocation: m,
    fieldStyle: f,
    children: (0, r.jsx)(i.Gi, {
      placeholder: null != b ? b : a.intl.string(a.t["Sqn+Wh"]),
      disabled: true
    })
  })
}