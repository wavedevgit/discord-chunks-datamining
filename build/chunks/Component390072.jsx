/** Chunk was on 47135 **/
/** chunk id: 390072, original params: e,t,n (module,exports,require) **/
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
  } = e, _ = t.entity_type === a.WX.EXTERNAL, f = r.useCallback(e => (0, c.Qt)(t, d)(e), [t, d]), h = (0, o.u)(t, n);
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
      className: u.channelIcon
    }), (0, l.jsx)(i.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: u.locationText,
      children: (0, s.m)(x, true)
    })]
  });
  return (0, l.jsx)("div", {
    className: u.row,
    children: null != f ? (0, l.jsx)(i.P3F, {
      className: _ ? u.externalLocation : u.channelLocation,
      onClick: f,
      children: g
    }) : g
  })
}