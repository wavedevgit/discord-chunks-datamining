/** Chunk was on 8895 **/
/** chunk id: 653079, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk763740 = require("./763740.js");
let m = e => {
  let {
    user: l,
    guildId: n,
    selectedNameplate: i,
    purchased: m
  } = e, v = (0, a.e7)([o.Z], () => o.Z.getProduct(null == i ? true : i.skuId)), h = (0, a.e7)([u.Z], () => u.Z.getPendingGlobalName());
  return (0, t.jsxs)("div", {
    className: s()(p.previewBorder, {
      [p.upsell]: !m && null != i
    }),
    children: [(0, t.jsx)("div", {
      className: p.previewBox,
      children: (0, t.jsxs)("div", {
        className: p.previewContents,
        children: [(0, t.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, t.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, t.jsx)(c.Z, {
          user: l,
          guildId: n,
          nameplate: i,
          pendingGlobalName: h,
          isHighlighted: true
        }), (0, t.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, t.jsx)(d.d, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != i ? (0, t.jsxs)("div", {
      className: p.previewDescription,
      children: [(0, t.jsx)(r.Text, {
        variant: "text-sm/semibold",
        children: null == v ? true : v.name
      }), m ? null : (0, t.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: x.intl.string(x.t.fEGjVV)
      })]
    }) : null]
  })
}