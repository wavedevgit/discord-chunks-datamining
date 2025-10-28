/** Chunk was on 1272 **/
/** chunk id: 837689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk873546 = require("./873546.js"),
  Chunk79766 = require("./79766.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk266454 = require("./266454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk374023 = require("./374023.js"),
  Chunk367074 = require("./367074.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk312973 = require("./312973.js"),
  Chunk434878 = require("./434878.js"),
  Chunk104494 = require("./104494.js"),
  Chunk29920 = require("./29920.js"),
  Chunk346497 = require("./346497.js"),
  Chunk727310 = require("./727310.jsx"),
  Chunk318199 = require("./318199.jsx"),
  Chunk474936 = require("./474936.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let N = "PremiumServerDriveAnnouncementModal";
class j extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), Chunk570140.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), Chunk570140.Z.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), Chunk570140.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), Chunk570140.Z.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess)
  }
  constructor(...e) {
    super(...e), T(this, "handleActivePromotionsFetchSuccess", e => {
      let {
        promotions: t
      } = e;
      for (let e of t)
        if (null != e.marketing_components) {
          for (let t of e.marketing_components)
            if (t.component_type === l.I.ANNOUNCEMENT_MODAL) return void this.maybeOpenServerDriveAnnouncementModal(t.properties, false)
        }
    }), T(this, "maybeOpenServerDriveAnnouncementModal", async (e, t) => {
      let i = (0, C.r)({
        content: e,
        isPreview: t
      });
      if (null != i) return (false !== t || (null == i ? true : i.contentIdentifier) !== "summer_bogo_content" || !!await (0, v.k)()) && ((0, s.Mr3)(N), (0, s.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 318199));
        return t => (0, r.jsx)(e, {
          renderModalProps: t,
          properties: i
        })
      }, {
        modalKey: N
      }), true);
      returnfalse
    }), T(this, "handlePreview", e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, true)
    }), T(this, "getOfferFromStore", () => {
      let e = d.default.getCurrentUser();
      if ((0, f.I5)(e)) return {};
      let t = [S.hs, S.RU, S.rB, S.ih].map(e => p.Z.getUserDiscountOffer(e)).filter(e => null != e && !(0, O.kA)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = (0, g.J0)();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), T(this, "mayShowAnnouncementModal", async () => {
      if (await (0, m.l2)(), h.s.isDisallowPopupsSet()) return;
      let e = this.getOfferFromStore(),
        t = E.Z.getCurrentConfig({
          location: "announcementManager"
        }, {
          autoTrackExposure: false
        }).enabled,
        n = (0, b.$)({
          location: "mayShowAnnouncementModal"
        }),
        r = (0, u.zu)(a.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
        l = d.default.getCurrentUser();
      if (!t || r || (0, s.$sL)() || (0, f.I5)(l) || await (0, _.G)(e.userTrialOffer) && (0, y.Z)({
          upsellType: S.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL
        }), (null == l || l.verified) && !(0, s.$sL)() && !i.tq && !n) {
        for (let t of (await (0, I.He)(e)))
          if (await this.maybeOpenServerDriveAnnouncementModal(t, false)) break
      }
    })
  }
}
let P = new j