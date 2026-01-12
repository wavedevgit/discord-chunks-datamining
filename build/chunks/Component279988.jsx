/** Chunk was on 9536 **/
/** chunk id: 279988, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk938645 = require("./938645.js");
let m = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: f,
    onDrop: b,
    onEdit: p,
    onRemove: h,
    canRemove: x,
    title: j,
    actionsLocation: v,
    fieldStyle: O
  } = e, y = n.values, C = y.slice(0, 1), N = y.length - C.length;
  return (0, r.jsxs)(d.Z, {
    field: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: f,
    onDrop: b,
    onEdit: p,
    onRemove: h,
    title: j,
    canRemove: x,
    actionsLocation: v,
    fieldStyle: O,
    children: [(0, r.jsx)(c.EK, {
      terms: C,
      channelId: t
    }), 0 !== N && (0, r.jsxs)(s.P3F, {
      className: l()(g.fieldFooterContainer, g.clickable),
      onClick: p,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: g.clickable,
        children: u.intl.format(u.t.jnhD0S, {
          count: N
        })
      }), (0, r.jsx)(o.Z, {
        className: g.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: a.Z.unsafe_rawColors.WHITE.css
      })]
    }), (0, r.jsx)(c.G0, {
      disabled: true,
      checked: false
    })]
  })
}