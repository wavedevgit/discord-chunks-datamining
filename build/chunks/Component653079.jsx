/** Chunk was on 57902 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk763740 = require("./763740.js");
let b = e => {
  let {
    user: t,
    guildId: n,
    selectedNameplate: r
  } = e, b = (0, l.e7)([_.Z], () => _.Z.getPendingGlobalName()), {
    product: v,
    purchase: x
  } = (0, c.Z)(null == r ? true : r.skuId), C = (0, p.kd)(v), f = m.ZP.canUseCollectibles(t), I = (0, s.qS)(x), P = (0, s.G1)(v), y = !f && I, w = null == x || y;
  return (0, i.jsxs)("div", {
    className: a()(g.previewBorder, {
      [g.upsell]: null != r && w
    }),
    children: [(0, i.jsx)("div", {
      className: g.previewBox,
      role: "img",
      "aria-label": h.intl.string(h.t.SZeUdX),
      children: (0, i.jsxs)("div", {
        className: g.previewContents,
        "aria-hidden": true,
        children: [(0, i.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, i.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, i.jsx)(u.Z, {
          user: t,
          guildId: n,
          nameplate: r,
          pendingGlobalName: b,
          isHighlighted: true
        }), (0, i.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, i.jsx)(d.d, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != r && (0, i.jsxs)("div", {
      className: g.previewDescription,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: C
      }), w && (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: y ? h.intl.string(h.t.nD78oa) : P && f ? h.intl.string(h.t.hmyYKy) : P ? h.intl.string(h.t.JY1i0t) : h.intl.string(h.t.fEGjVV)
      })]
    })]
  })
}