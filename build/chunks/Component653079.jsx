/** Chunk was on 18034 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk29121 = require("./29121.js"),
  Chunk25990 = require("./25990.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk118494 = require("./118494.js");
let g = e => {
  let {
    user: t,
    guildId: n,
    selectedNameplate: i
  } = e, g = (0, l.e7)([_.Z], () => _.Z.getPendingGlobalName()), {
    product: b,
    purchase: x
  } = (0, c.Z)(null == i ? true : i.skuId), C = (0, p.kd)(b), f = m.ZP.canUseCollectibles(t), w = (0, s.qS)(x), I = (0, s.G1)(b), P = !f && w, y = null == x || P;
  return (0, r.jsxs)("div", {
    className: a()(v.previewBorder, {
      [v.upsell]: null != i && y
    }),
    children: [(0, r.jsx)("div", {
      className: v.previewBox,
      role: "img",
      "aria-label": h.intl.string(h.t.SZeUdX),
      children: (0, r.jsxs)("div", {
        className: v.previewContents,
        "aria-hidden": true,
        children: [(0, r.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, r.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, r.jsx)(u.Z, {
          user: t,
          guildId: n,
          nameplate: i,
          pendingGlobalName: g,
          isHighlighted: true
        }), (0, r.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, r.jsx)(d.d, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != i && (0, r.jsxs)("div", {
      className: v.previewDescription,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: C
      }), y && (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: P ? h.intl.string(h.t.nD78oa) : I && f ? h.intl.string(h.t.hmyYKy) : I ? h.intl.string(h.t.JY1i0t) : h.intl.string(h.t.fEGjVV)
      })]
    })]
  })
}