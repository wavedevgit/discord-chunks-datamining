/** Chunk was on 93210 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
let I = e => {
  let {
    user: t,
    guildId: n,
    selectedNameplate: r
  } = e, I = (0, a.e7)([_.Z], () => _.Z.getPendingGlobalName()), {
    product: b,
    purchase: f
  } = (0, c.Z)(null == r ? true : r.skuId), v = (0, p.kd)(b), S = h.ZP.canUseCollectibles(t), x = (0, o.qS)(f), C = (0, o.G1)(b), E = !S && x, y = null == f || E;
  return (0, i.jsxs)("div", {
    className: l()(g.previewBorder, {
      [g.upsell]: null != r && y
    }),
    children: [(0, i.jsx)("div", {
      className: g.previewBox,
      role: "img",
      "aria-label": m.intl.string(m.t.SZeUdX),
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
          pendingGlobalName: I,
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
      children: [(0, i.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: v
      }), y && (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: E ? m.intl.string(m.t.nD78oa) : C && S ? m.intl.string(m.t.hmyYKy) : C ? m.intl.string(m.t.JY1i0t) : m.intl.string(m.t.fEGjVV)
      })]
    })]
  })
}