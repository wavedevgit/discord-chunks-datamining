/** Chunk was on 82897 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
"use strict";
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
    product: v,
    purchase: x
  } = (0, c.Z)(null == i ? true : i.skuId), f = (0, p.kd)(v), C = m.ZP.canUseCollectibles(t), I = (0, o.qS)(x), y = (0, o.G1)(v), P = !C && I, j = null == x || P;
  return (0, r.jsxs)("div", {
    className: a()(b.previewBorder, {
      [b.upsell]: null != i && j
    }),
    children: [(0, r.jsx)("div", {
      className: b.previewBox,
      role: "img",
      "aria-label": h.intl.string(h.t.SZeUdR),
      children: (0, r.jsxs)("div", {
        className: b.previewContents,
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
      className: b.previewDescription,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: f
      }), j && (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: P ? h.intl.string(h.t.nD78oa) : y && C ? h.intl.string(h.t.hmyYK8) : y ? h.intl.string(h.t.JY1i0u) : h.intl.string(h.t.fEGjVQ)
      })]
    })]
  })
}