/** Chunk was on 22988 **/
/** chunk id: 279988, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk196345 = require("./196345.jsx"),
  Chunk137158 = require("./137158.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk664305 = require("./664305.js");
let g = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: g,
    isDropHovered: p,
    onDrop: h,
    onEdit: f,
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
    onDrop: h,
    onEdit: f,
    onRemove: b,
    title: j,
    canRemove: x,
    actionsLocation: v,
    fieldStyle: _,
    children: [(0, r.jsx)(c.EK, {
      className: l()(m.fieldBackground, {
        [m.withFooter]: 0 !== C
      }),
      terms: y,
      channelId: t
    }), 0 !== C && (0, r.jsxs)(s.P3F, {
      className: l()(m.fieldFooterContainer, m.clickable),
      onClick: f,
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