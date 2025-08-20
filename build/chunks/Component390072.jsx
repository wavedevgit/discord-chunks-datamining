/** Chunk was on 27978 **/
/** chunk id: 390072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, h = t.entity_type === c.WX.EXTERNAL, f = i.useCallback(e => (0, s.Qt)(t, d)(e), [t, d]), p = (0, a.u)(t, n);
  if (null == p) return null;
  let {
    IconComponent: g,
    locationName: m
  } = p, _ = (0, r.jsxs)(r.Fragment, {
    children: [null != g && (0, r.jsx)(g, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.channelIcon
    }), (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: u.locationText,
      children: (0, o.m)(m, true)
    })]
  });
  return (0, r.jsx)("div", {
    className: u.row,
    children: null != f ? (0, r.jsx)(l.P3F, {
      className: h ? u.externalLocation : u.channelLocation,
      onClick: f,
      children: _
    }) : _
  })
}