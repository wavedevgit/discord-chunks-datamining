/** Chunk was on 96811 **/
/** chunk id: 517753, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk404374 = require("./404374.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk511484 = require("./511484.js"),
  Chunk927578 = require("./927578.js"),
  Chunk213279 = require("./213279.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk191850 = require("./191850.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk827025 = require("./827025.js");

function b(e) {
  var t, r, b;
  let {
    onClose: v
  } = e, {
    analyticsLocations: y
  } = (0, a.Ay)(i.A.GO_LIVE_MODAL_V2), S = (0, d.V)(), A = (0, o.O)(), _ = (null == S || null == (t = S.subscription_trial) ? true : t.sku_id) === x.pe.TIER_2 || (0, u.U9)(A, x.pe.TIER_2), O = m.intl.string(j.default["+f+cqk"]);
  return _ && (null != S ? O = (0, h.FY)({
    intervalType: null == S || null == (r = S.subscription_trial) ? true : r.interval,
    intervalCount: null == S || null == (b = S.subscription_trial) ? true : b.interval_count
  }) : null != A && (O = m.intl.formatToPlainString(m.t.bkQ4bH, {
    percent: A.discount.amount
  }))), (0, n.jsxs)("div", {
    className: g.zr,
    children: [(0, n.jsxs)(s.Text, {
      className: g.aV,
      variant: "text-xs/normal",
      color: "always-white",
      children: [(0, n.jsx)(s.XAi, {
        size: "xxs",
        color: "currentColor"
      }), m.intl.format(m.t.sLJ3EV, {
        onNitroClick: function() {
          (0, p.p)({
            analyticsLocation: y[0],
            onClose: v
          })
        }
      })]
    }), (0, n.jsx)(f.A, {
      className: g.lI,
      iconClassName: g.PC,
      size: l.$n.Sizes.TINY,
      color: l.$n.Colors.BRAND_INVERTED,
      subscriptionTier: x.pe.TIER_2,
      buttonShineClassName: g.vb,
      iconColor: c.k0.PREMIUM_TIER_2,
      onClick: () => {
        v()
      },
      textOptions: {
        subscribeText: O,
        textClassName: g.U_
      }
    })]
  })
}