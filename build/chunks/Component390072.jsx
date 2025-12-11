/** Chunk was on 66452 **/
/** chunk id: 390072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725436 = require("./725436.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk217804 = require("./217804.js"),
  Chunk765305 = require("./765305.js"),
  Chunk984946 = require("./984946.js");

function u(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: u
  } = e, f = t.entity_type === o.WX.EXTERNAL, b = r.useCallback(e => (0, s.Qt)(t, u)(e), [t, u]), h = (0, c.u)(t, n);
  if (null == h) return null;
  let {
    IconComponent: m,
    locationName: x
  } = h, g = (0, l.jsxs)(l.Fragment, {
    children: [null != m && (0, l.jsx)(m, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: d.channelIcon
    }), (0, l.jsx)(i.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: d.locationText,
      children: (0, a.m)(x, true)
    })]
  });
  return (0, l.jsx)("div", {
    className: d.row,
    children: null != b ? (0, l.jsx)(i.P3F, {
      className: f ? d.externalLocation : d.channelLocation,
      onClick: b,
      children: g
    }) : g
  })
}