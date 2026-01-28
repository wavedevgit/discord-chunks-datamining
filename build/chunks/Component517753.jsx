/** Chunk was on 96811 **/
/** chunk id: 517753, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  var t, r, _;
  let {
    onClose: v
  } = e, {
    analyticsLocations: b
  } = (0, a.Ay)(s.A.GO_LIVE_MODAL_V2), y = (0, d.V)(), S = (0, c.O)(), A = (null == y || null == (t = y.subscription_trial) ? true : t.sku_id) === x.pe.TIER_2 || (0, f.U9)(S, x.pe.TIER_2), O = j.intl.string(m.default["+f+cqk"]);
  return A && (null != y ? O = (0, h.FY)({
    intervalType: null == y || null == (r = y.subscription_trial) ? true : r.interval,
    intervalCount: null == y || null == (_ = y.subscription_trial) ? true : _.interval_count
  }) : null != S && (O = j.intl.formatToPlainString(j.t.bkQ4bH, {
    percent: S.discount.amount
  }))), (0, n.jsxs)("div", {
    className: g.zr,
    children: [(0, n.jsxs)(l.Text, {
      className: g.aV,
      variant: "text-xs/normal",
      color: "always-white",
      children: [(0, n.jsx)(l.XAi, {
        size: "xxs",
        color: "currentColor"
      }), j.intl.format(j.t.sLJ3EV, {
        onNitroClick: function() {
          (0, p.p)({
            analyticsLocation: b[0],
            onClose: v
          })
        }
      })]
    }), (0, n.jsx)(u.A, {
      className: g.lI,
      iconClassName: g.PC,
      size: i.$n.Sizes.TINY,
      color: i.$n.Colors.BRAND_INVERTED,
      subscriptionTier: x.pe.TIER_2,
      buttonShineClassName: g.vb,
      iconColor: o.k0.PREMIUM_TIER_2,
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