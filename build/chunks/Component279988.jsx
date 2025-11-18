/** Chunk was on 32923 **/
/** chunk id: 279988, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk196345 = require("./196345.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk866234 = require("./866234.js");
let m = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: p,
    onDrop: f,
    onEdit: h,
    onRemove: b,
    canRemove: x,
    title: j,
    actionsLocation: _,
    fieldStyle: v
  } = e, O = n.values, C = O.slice(0, 1), y = O.length - C.length;
  return (0, r.jsxs)(d.Z, {
    field: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: p,
    onDrop: f,
    onEdit: h,
    onRemove: b,
    title: j,
    canRemove: x,
    actionsLocation: _,
    fieldStyle: v,
    children: [(0, r.jsx)(c.EK, {
      terms: C,
      channelId: t
    }), 0 !== y && (0, r.jsxs)(s.P3F, {
      className: l()(g.fieldFooterContainer, g.clickable),
      onClick: h,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: g.clickable,
        children: u.intl.format(u.t.jnhD0S, {
          count: y
        })
      }), (0, r.jsx)(o.Z, {
        className: g.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: a.Z.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, r.jsx)(c.G0, {
      disabled: true,
      checked: false
    })]
  })
}