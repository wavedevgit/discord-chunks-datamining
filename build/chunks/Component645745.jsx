/** Chunk was on 47841 **/
/** chunk id: 645745, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk273926 = require("./273926.jsx"),
  Chunk243056 = require("./243056.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk592454 = require("./592454.js");
let m = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: p,
    onDrop: f,
    onEdit: b,
    onRemove: h,
    canRemove: x,
    title: j,
    actionsLocation: _,
    fieldStyle: O
  } = e, v = n.values, y = v.slice(0, 1), A = v.length - y.length;
  return (0, r.jsxs)(d.A, {
    field: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: p,
    onDrop: f,
    onEdit: b,
    onRemove: h,
    title: j,
    canRemove: x,
    actionsLocation: _,
    fieldStyle: O,
    children: [(0, r.jsx)(c.IJ, {
      terms: y,
      channelId: t
    }), 0 !== A && (0, r.jsxs)(a.DUT, {
      className: l()(g.vs, g.vk),
      onClick: b,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: g.vk,
        children: u.intl.format(u.t.jnhD0S, {
          count: A
        })
      }), (0, r.jsx)(o.A, {
        className: g.IC,
        height: 14,
        width: 14,
        color: s.A.unsafe_rawColors.WHITE.css
      })]
    }), (0, r.jsx)(c.xs, {
      disabled: true,
      checked: false
    })]
  })
}