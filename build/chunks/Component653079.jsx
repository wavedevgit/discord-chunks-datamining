/** Chunk was on 27612 **/
/** chunk id: 653079, original params: e,t,r (module,exports,require) **/
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
    guildId: r,
    selectedNameplate: i
  } = e, g = (0, l.e7)([_.Z], () => _.Z.getPendingGlobalName()), {
    product: b,
    purchase: f
  } = (0, c.Z)(null == i ? true : i.skuId), x = (0, p.kd)(b), C = m.ZP.canUseCollectibles(t), w = (0, s.qS)(f), P = (0, s.G1)(b), I = !C && w, y = null == f || I;
  return (0, n.jsxs)("div", {
    className: a()(v.previewBorder, {
      [v.upsell]: null != i && y
    }),
    children: [(0, n.jsx)("div", {
      className: v.previewBox,
      children: (0, n.jsxs)("div", {
        className: v.previewContents,
        children: [(0, n.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(u.Z, {
          user: t,
          guildId: r,
          nameplate: i,
          pendingGlobalName: g,
          isHighlighted: true
        }), (0, n.jsx)(d.d, {
          width: 124,
          opacity: .9
        }), (0, n.jsx)(d.d, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != i && (0, n.jsxs)("div", {
      className: v.previewDescription,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: x
      }), y && (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: I ? h.intl.string(h.t.nD78oa) : P && C ? h.intl.string(h.t.hmyYKy) : P ? h.intl.string(h.t.JY1i0t) : h.intl.string(h.t.fEGjVV)
      })]
    })]
  })
}