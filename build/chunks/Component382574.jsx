/** Chunk was on 9536 **/
/** chunk id: 382574, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk73880 = require("./73880.jsx"),
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
    actionsLocation: f,
    fieldStyle: m
  } = e, {
    label: b,
    placeholder: p
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: s,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    title: b,
    canRemove: g,
    actionsLocation: f,
    fieldStyle: m,
    children: (0, r.jsx)(i.Q8, {
      placeholder: null != p ? p : a.intl.string(a.t["Sqn+Wh"]),
      disabled: true
    })
  })
}