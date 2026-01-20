/** Chunk was on 1272 **/
/** chunk id: 837689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk873546 = require("./873546.js"),
  Chunk79766 = require("./79766.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk266454 = require("./266454.js"),
  Chunk86376 = require("./86376.js"),
  Chunk605338 = require("./605338.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk374023 = require("./374023.js"),
  Chunk709054 = require("./709054.js"),
  Chunk367074 = require("./367074.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk312973 = require("./312973.js"),
  Chunk434878 = require("./434878.js"),
  Chunk29920 = require("./29920.js"),
  Chunk1844 = require("./1844.js"),
  Chunk397047 = require("./397047.js"),
  Chunk346497 = require("./346497.js"),
  Chunk727310 = require("./727310.jsx"),
  Chunk318199 = require("./318199.jsx"),
  Chunk474936 = require("./474936.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = "PremiumServerDriveAnnouncementModal";
class Z extends Chunk317770.Z {
  _initialize() {
    s.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), s.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), s.Z.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess), s.Z.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess)
  }
  _terminate() {
    s.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), s.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), s.Z.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess), s.Z.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess)
  }
  constructor(...e) {
    super(...e), P(this, "maybeShowAnnouncementModalFromPromotions", e => {
      for (let t of e)
        if (null != t.marketingComponents) {
          if (null != t.trialId) {
            let e = g.Z.getUserTrialOffer(t.trialId);
            if (null == e || null != e.expires_at && Date.parse(e.expires_at) < Date.now()) continue
          }
          for (let e of t.marketingComponents)
            if (e.component_type === l.I.ANNOUNCEMENT_MODAL) return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, false)
        }
    }), P(this, "handleActivePromotionsFetchSuccess", e => {
      let {
        promotions: t
      } = e;
      this.maybeShowAnnouncementModalFromPromotions(t.map(e => p.Z.createFromServer(e)))
    }), P(this, "handleUserOfferFetchSuccess", e => {
      let {
        userTrialOffer: t
      } = e;
      null != t && this.maybeShowAnnouncementModalFromPromotions(Object.values(C.Z.promotionsByType[S.$k.MARKETING_MOMENT]))
    }), P(this, "maybeOpenServerDriveAnnouncementModal", async (e, t, i, l) => {
      if ((0, o.nfh)(A)) returnfalse;
      let a = (0, j.r)({
        promotionId: t,
        content: i,
        isPreview: l
      });
      if (null != a) return (false !== l || (null == a ? true : a.contentIdentifier) !== "summer_bogo_content" || !!await (0, T.k)()) && ((0, o.ZDy)(async () => {
        let {
          default: i
        } = await Promise.resolve().then(n.bind(n, 318199));
        return n => (0, r.jsx)(i, {
          renderModalProps: n,
          componentId: e,
          promotionId: t,
          properties: a
        })
      }, {
        modalKey: A
      }), true);
      returnfalse
    }), P(this, "handlePreview", e => {
      let {
        data: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, true)
    }), P(this, "getOfferFromStore", () => {
      let e = f.default.getCurrentUser();
      if ((0, h.I5)(e)) return {};
      let t = [x.hs, x.RU, x.rB, x.ih].map(e => g.Z.getUserDiscountOffer(e)).filter(e => null != e && !(0, d.k)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = (0, _.J0)();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), P(this, "mayShowAnnouncementModal", async () => {
      if (await (0, E.l2)(), m.s.isDisallowPopupsSet()) return;
      let e = this.getOfferFromStore(),
        t = I.Z.getCurrentConfig({
          location: "announcementManager"
        }, {
          autoTrackExposure: false
        }).enabled,
        n = (0, v.$)({
          location: "mayShowAnnouncementModal"
        }),
        r = (0, u.zu)(a.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
        l = f.default.getCurrentUser();
      if (!t || r || (0, o.$sL)() || (0, h.I5)(l) || await (0, O.G)(e.userTrialOffer) && (0, N.Z)({
          upsellType: x.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL
        }), (null == l || l.verified) && !(0, o.$sL)() && !i.tq && !n) {
        for (let t of (await (0, y.He)(e)))
          if (await this.maybeOpenServerDriveAnnouncementModal("", b.default.fromTimestamp(Date.now()), t, false)) break
      }
    })
  }
}
let w = new Z