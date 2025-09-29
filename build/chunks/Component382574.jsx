/** Chunk was on 27087 **/
/** chunk id: 382574, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk73880 = require("./73880.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk388032 = require("./388032.jsx");
let a = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    canRemove: m,
    actionsLocation: g,
    fieldStyle: p
  } = e, {
    label: f,
    placeholder: h
  } = t;
  return (0, r.jsx)(l.Z, {
    field: t,
    index: n,
    isDragEnabled: a,
    isDropHovered: o,
    onDrop: c,
    onEdit: d,
    onRemove: u,
    title: f,
    canRemove: m,
    actionsLocation: g,
    fieldStyle: p,
    children: (0, r.jsx)(i.Q8, {
      placeholder: null != h ? h : s.intl.string(s.t["Sqn+Wl"]),
      disabled: true
    })
  })
}