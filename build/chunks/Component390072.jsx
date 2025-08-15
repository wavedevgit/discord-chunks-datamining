/** Chunk was on 98464 **/
/** chunk id: 390072, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725436 = require("./725436.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk217804 = require("./217804.js"),
  Chunk765305 = require("./765305.js"),
  Chunk831272 = require("./831272.js");

function u(e) {
  let {
    guildScheduledEvent: n,
    channel: t,
    onClose: u
  } = e, _ = n.entity_type === s.WX.EXTERNAL, g = l.useCallback(e => (0, a.Qt)(n, u)(e), [n, u]), p = (0, o.u)(n, t);
  if (null == p) return null;
  let {
    IconComponent: m,
    locationName: f
  } = p, I = (0, i.jsxs)(i.Fragment, {
    children: [null != m && (0, i.jsx)(m, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: c.channelIcon
    }), (0, i.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: c.locationText,
      children: (0, d.m)(f, true)
    })]
  });
  return (0, i.jsx)("div", {
    className: c.row,
    children: null != g ? (0, i.jsx)(r.P3F, {
      className: _ ? c.externalLocation : c.channelLocation,
      onClick: g,
      children: I
    }) : I
  })
}