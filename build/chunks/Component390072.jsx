/** Chunk was on 43157 **/
/** chunk id: 390072, original params: e,n,t (module,exports,require) **/
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
  Chunk910497 = require("./910497.js");

function u(e) {
  let {
    guildScheduledEvent: n,
    channel: t,
    onClose: u
  } = e, _ = n.entity_type === a.WX.EXTERNAL, h = r.useCallback(e => (0, c.Qt)(n, u)(e), [n, u]), m = (0, o.u)(n, t);
  if (null == m) return null;
  let {
    IconComponent: f,
    locationName: x
  } = m, g = (0, l.jsxs)(l.Fragment, {
    children: [null != f && (0, l.jsx)(f, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: d.channelIcon
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: d.locationText,
      children: (0, s.m)(x, true)
    })]
  });
  return (0, l.jsx)("div", {
    className: d.row,
    children: null != h ? (0, l.jsx)(i.P3F, {
      className: _ ? d.externalLocation : d.channelLocation,
      onClick: h,
      children: g
    }) : g
  })
}