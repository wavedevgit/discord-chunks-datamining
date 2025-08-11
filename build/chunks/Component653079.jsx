/** Chunk was on 11912 **/
/** chunk id: 653079, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk52431 = require("./52431.js");
let h = e => {
  let {
    user: t,
    guildId: r,
    selectedNameplate: a,
    purchased: h
  } = e, f = (0, i.e7)([s.Z], () => s.Z.getProduct(null == a ? true : a.skuId)), v = (0, i.e7)([d.Z], () => d.Z.getPendingGlobalName());
  return (0, n.jsxs)("div", {
    className: l()(b.previewBorder, {
      [b.upsell]: !h && null != a
    }),
    children: [(0, n.jsx)("div", {
      className: b.previewBox,
      children: (0, n.jsxs)("div", {
        className: b.previewContents,
        children: [(0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(u.Z, {
          user: t,
          guildId: r,
          nameplate: a,
          pendingGlobalName: v,
          isHighlighted: true
        }), (0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(c.d, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != a ? (0, n.jsxs)("div", {
      className: b.previewDescription,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: null == f ? true : f.name
      }), h ? null : (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: p.intl.string(p.t.fEGjVV)
      })]
    }) : null]
  })
}