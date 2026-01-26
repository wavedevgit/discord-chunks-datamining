/** Chunk was on 11810 **/
/** chunk id: 645745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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
let j = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: j,
    isDropHovered: p,
    onDrop: b,
    onEdit: y,
    onRemove: m,
    canRemove: O,
    title: v,
    actionsLocation: x,
    fieldStyle: h
  } = e, g = n.values, P = g.slice(0, 1), w = g.length - P.length;
  return (0, r.jsxs)(d.A, {
    field: n,
    index: i,
    isDragEnabled: j,
    isDropHovered: p,
    onDrop: b,
    onEdit: y,
    onRemove: m,
    title: v,
    canRemove: O,
    actionsLocation: x,
    fieldStyle: h,
    children: [(0, r.jsx)(a.IJ, {
      terms: P,
      channelId: t
    }), 0 !== w && (0, r.jsxs)(c.DUT, {
      className: l()(f.vs, f.vk),
      onClick: y,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        className: f.vk,
        children: u.intl.format(u.t.jnhD0S, {
          count: w
        })
      }), (0, r.jsx)(s.A, {
        className: f.IC,
        height: 14,
        width: 14,
        color: o.A.unsafe_rawColors.WHITE.css
      })]
    }), (0, r.jsx)(a.xs, {
      disabled: true,
      checked: false
    })]
  })
}