/** Chunk was on 47841 **/
/** chunk id: 645745, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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
let g = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: g,
    isDropHovered: b,
    onDrop: m,
    onEdit: p,
    onRemove: x,
    canRemove: h,
    title: j,
    actionsLocation: O,
    fieldStyle: y
  } = e, v = n.values, A = v.slice(0, 1), E = v.length - A.length;
  return (0, r.jsxs)(d.A, {
    field: n,
    index: i,
    isDragEnabled: g,
    isDropHovered: b,
    onDrop: m,
    onEdit: p,
    onRemove: x,
    title: j,
    canRemove: h,
    actionsLocation: O,
    fieldStyle: y,
    children: [(0, r.jsx)(o.IJ, {
      terms: A,
      channelId: t
    }), 0 !== E && (0, r.jsxs)(a.DUT, {
      className: l()(f.vs, f.vk),
      onClick: p,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: f.vk,
        children: u.intl.format(u.t.jnhD0S, {
          count: E
        })
      }), (0, r.jsx)(c.A, {
        className: f.IC,
        height: 14,
        width: 14,
        color: s.A.unsafe_rawColors.WHITE.css
      })]
    }), (0, r.jsx)(o.xs, {
      disabled: true,
      checked: false
    })]
  })
}