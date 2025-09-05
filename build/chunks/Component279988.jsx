/** Chunk was on 88479 **/
/** chunk id: 279988, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk196345 = require("./196345.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31829 = require("./31829.js");
let g = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: g,
    isDropHovered: p,
    onDrop: f,
    onEdit: h,
    onRemove: b,
    canRemove: x,
    title: j,
    actionsLocation: v,
    fieldStyle: _
  } = e, O = n.values, y = O.slice(0, 1), C = O.length - y.length;
  return (0, r.jsxs)(d.Z, {
    field: n,
    index: i,
    isDragEnabled: g,
    isDropHovered: p,
    onDrop: f,
    onEdit: h,
    onRemove: b,
    title: j,
    canRemove: x,
    actionsLocation: v,
    fieldStyle: _,
    children: [(0, r.jsx)(c.EK, {
      terms: y,
      channelId: t
    }), 0 !== C && (0, r.jsxs)(s.P3F, {
      className: l()(m.fieldFooterContainer, m.clickable),
      onClick: h,
      children: [(0, r.jsx)(s.R94, {
        className: m.clickable,
        children: u.intl.format(u.t.jnhD0d, {
          count: C
        })
      }), (0, r.jsx)(o.Z, {
        className: m.termsFieldCaretIcon,
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