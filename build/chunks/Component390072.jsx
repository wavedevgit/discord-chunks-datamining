/** Chunk was on 96492 **/
/** chunk id: 390072, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725436 = require("./725436.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk217804 = require("./217804.js"),
  Chunk765305 = require("./765305.js"),
  Chunk296354 = require("./296354.js");

function d(e) {
  let {
    guildScheduledEvent: n,
    channel: t,
    onClose: d
  } = e, f = n.entity_type === a.WX.EXTERNAL, g = i.useCallback(e => (0, c.Qt)(n, d)(e), [n, d]), h = (0, s.u)(n, t);
  if (null == h) return null;
  let {
    IconComponent: _,
    locationName: v
  } = h, m = (0, l.jsxs)(l.Fragment, {
    children: [null != _ && (0, l.jsx)(_, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.channelIcon
    }), (0, l.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: u.locationText,
      children: (0, o.m)(v, true)
    })]
  });
  return (0, l.jsx)("div", {
    className: u.row,
    children: null != g ? (0, l.jsx)(r.P3F, {
      className: f ? u.externalLocation : u.channelLocation,
      onClick: g,
      children: m
    }) : m
  })
}