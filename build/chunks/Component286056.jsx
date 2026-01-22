/** Chunk was on 47841 **/
/** chunk id: 286056, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk601047 = require("./601047.jsx"),
  Chunk243056 = require("./243056.jsx"),
  Chunk985018 = require("./985018.jsx");
let a = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: c,
    onDrop: o,
    onEdit: d,
    onRemove: u,
    canRemove: f,
    actionsLocation: g,
    fieldStyle: b
  } = e, {
    label: m,
    placeholder: p
  } = t;
  return (0, r.jsx)(l.A, {
    field: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: c,
    onDrop: o,
    onEdit: d,
    onRemove: u,
    title: m,
    canRemove: f,
    actionsLocation: g,
    fieldStyle: b,
    children: (0, r.jsx)(i.PC, {
      placeholder: null != p ? p : s.intl.string(s.t["Sqn+Wh"]),
      disabled: true
    })
  })
}