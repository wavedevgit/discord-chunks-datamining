/** Chunk was on 8895 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
let v = e => {
  let {
    user: t,
    guildId: n,
    selectedNameplate: i
  } = e, v = (0, s.e7)([m.Z], () => m.Z.getPendingGlobalName()), {
    product: _,
    purchase: C
  } = (0, c.Z)(null == i ? true : i.skuId), j = (0, p.kd)(_), y = x.ZP.canUseCollectibles(t), P = (0, o.qS)(C), E = (0, o.G1)(_), f = !y && P, N = null == C || f;
  return (0, l.jsxs)("div", {
    className: r()(g.previewBorder, {
      [g.upsell]: null != i && N
    }),
    children: [(0, l.jsx)("div", {
      className: g.previewBox,
      children: (0, l.jsxs)("div", {
        className: g.previewContents,
        children: [(0, l.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(u.Z, {
          user: t,
          guildId: n,
          nameplate: i,
          pendingGlobalName: v,
          isHighlighted: true
        }), (0, l.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(d.d, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != i && (0, l.jsxs)("div", {
      className: g.previewDescription,
      children: [(0, l.jsx)(a.Text, {
        variant: "text-sm/semibold",
        children: j
      }), N && (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: f ? h.intl.string(h.t.nD78oa) : E && y ? h.intl.string(h.t.hmyYKy) : E ? h.intl.string(h.t.JY1i0t) : h.intl.string(h.t.fEGjVV)
      })]
    })]
  })
}