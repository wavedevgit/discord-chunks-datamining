/** Chunk was on 27978 **/
/** chunk id: 390072, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725436 = require("./725436.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk217804 = require("./217804.js"),
  Chunk765305 = require("./765305.js"),
  Chunk831272 = require("./831272.js");

function d(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: d
  } = e, h = t.entity_type === c.WX.EXTERNAL, g = i.useCallback(e => (0, a.Qt)(t, d)(e), [t, d]), p = (0, o.u)(t, n);
  if (null == p) return null;
  let {
    IconComponent: m,
    locationName: f
  } = p, _ = (0, r.jsxs)(r.Fragment, {
    children: [null != m && (0, r.jsx)(m, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.channelIcon
    }), (0, r.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: u.locationText,
      children: (0, l.m)(f, true)
    })]
  });
  return (0, r.jsx)("div", {
    className: u.row,
    children: null != g ? (0, r.jsx)(s.P3F, {
      className: h ? u.externalLocation : u.channelLocation,
      onClick: g,
      children: _
    }) : _
  })
}