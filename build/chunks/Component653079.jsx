/** Chunk was on 13387 **/
/** chunk id: 653079, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk763740 = require("./763740.js");
let f = e => {
  let {
    user: t,
    guildId: r,
    selectedNameplate: i,
    purchased: f
  } = e, b = (0, l.e7)([s.Z], () => s.Z.getProduct(null == i ? true : i.skuId)), m = (0, l.e7)([d.Z], () => d.Z.getPendingGlobalName());
  return (0, n.jsxs)("div", {
    className: a()(v.previewBorder, {
      [v.upsell]: !f && null != i
    }),
    children: [(0, n.jsx)("div", {
      className: v.previewBox,
      children: (0, n.jsxs)("div", {
        className: v.previewContents,
        children: [(0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(u.Z, {
          user: t,
          guildId: r,
          nameplate: i,
          pendingGlobalName: m,
          isHighlighted: true
        }), (0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != i ? (0, n.jsxs)("div", {
      className: v.previewDescription,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: null == b ? true : b.name
      }), f ? null : (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: p.intl.string(p.t.fEGjVV)
      })]
    }) : null]
  })
}