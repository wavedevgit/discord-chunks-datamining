/** Chunk was on 47841 **/
/** chunk id: 468287, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk453016 = require("./453016.jsx"),
  Chunk243056 = require("./243056.jsx"),
  Chunk985018 = require("./985018.jsx");
let a = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    canRemove: g,
    actionsLocation: m,
    fieldStyle: p
  } = e, {
    label: f,
    placeholder: b
  } = t;
  return (0, r.jsx)(l.A, {
    field: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    title: f,
    canRemove: g,
    actionsLocation: m,
    fieldStyle: p,
    children: (0, r.jsx)(i._V, {
      placeholder: null != b ? b : s.intl.string(s.t["Sqn+Wh"]),
      disabled: true
    })
  })
}