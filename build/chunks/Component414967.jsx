/** Chunk was on 21738 **/
/** chunk id: 414967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk607399 = require("./607399.js"),
  Chunk877624 = require("./877624.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk826673 = require("./826673.js"),
  Chunk579364 = require("./579364.js"),
  Chunk835095 = require("./835095.js"),
  Chunk287809 = require("./287809.js"),
  Chunk816733 = require("./816733.js"),
  Chunk927578 = require("./927578.js"),
  Chunk536194 = require("./536194.js"),
  Chunk661191 = require("./661191.js"),
  Chunk40185 = require("./40185.js"),
  Chunk89366 = require("./89366.js"),
  Chunk637073 = require("./637073.js"),
  Chunk91435 = require("./91435.js"),
  Chunk89465 = require("./89465.js"),
  Chunk50283 = require("./50283.js"),
  Chunk412260 = require("./412260.js"),
  Chunk852218 = require("./852218.js"),
  Chunk231265 = require("./231265.js"),
  Chunk93751 = require("./93751.jsx"),
  Chunk979080 = require("./979080.jsx"),
  Chunk788868 = require("./788868.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = "PremiumServerDriveAnnouncementModal";
class w extends Chunk272355.A {
  _initialize() {
    o.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), o.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), o.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess), o.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess)
  }
  _terminate() {
    o.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), o.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), o.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess), o.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess)
  }
  constructor(...e) {
    super(...e), x(this, "maybeShowAnnouncementModalFromPromotions", e => {
      for (let t of e)
        if (null != t.marketingComponents) {
          if (null != t.trialId) {
            let e = g.A.getUserTrialOffer(t.trialId);
            if (null == e || null != e.expires_at && Date.parse(e.expires_at) < Date.now()) continue
          }
          for (let e of t.marketingComponents)
            if (e.component_type === l.C.ANNOUNCEMENT_MODAL) return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, false)
        }
    }), x(this, "handleActivePromotionsFetchSuccess", e => {
      let {
        promotions: t
      } = e;
      this.maybeShowAnnouncementModalFromPromotions(t.map(e => p.A.createFromServer(e)))
    }), x(this, "handleUserOfferFetchSuccess", e => {
      let {
        userTrialOffer: t
      } = e;
      null != t && this.maybeShowAnnouncementModalFromPromotions(Object.values(v.A.promotionsByType[S.pt.MARKETING_MOMENT]))
    }), x(this, "maybeOpenServerDriveAnnouncementModal", async (e, t, i, l) => {
      if ((0, s.kBI)(P)) returnfalse;
      let a = (0, T.H)({
        promotionId: t,
        content: i,
        isPreview: l
      });
      if (null != a) return (false !== l || (null == a ? true : a.contentIdentifier) !== "summer_bogo_content" || !!await (0, C.C)()) && ((0, s.mMO)(async () => {
        let {
          default: i
        } = await Promise.resolve().then(n.bind(n, 979080));
        return n => (0, r.jsx)(i, {
          renderModalProps: n,
          componentId: e,
          promotionId: t,
          properties: a
        })
      }, {
        modalKey: P
      }), true);
      returnfalse
    }), x(this, "handlePreview", e => {
      let {
        data: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, true)
    }), x(this, "getOfferFromStore", () => {
      let e = h.default.getCurrentUser();
      if ((0, f.TW)(e)) return {};
      let t = [j.TU, j.KG, j.lj, j.HF].map(e => g.A.getUserDiscountOffer(e)).filter(e => null != e && !(0, d.w)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = (0, b.qD)();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), x(this, "mayShowAnnouncementModal", async () => {
      if (await (0, _.hb)(), m.P.isDisallowPopupsSet()) return;
      let e = this.getOfferFromStore(),
        t = y.A.getCurrentConfig({
          location: "announcementManager"
        }, {
          autoTrackExposure: false
        }).enabled,
        n = (0, O.r)({
          location: "mayShowAnnouncementModal"
        }),
        r = (0, u.k8)(a.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
        l = h.default.getCurrentUser();
      if (!t || r || (0, s.ueM)() || (0, f.TW)(l) || await (0, E.m)(e.userTrialOffer) && (0, N.A)({
          upsellType: j.e.REVERSE_TRIAL_FOLLOWUP_UPSELL
        }), (null == l || l.verified) && !(0, s.ueM)() && !i.Fr && !n) {
        for (let t of (await (0, I._C)(e)))
          if (await this.maybeOpenServerDriveAnnouncementModal("", A.default.fromTimestamp(Date.now()), t, false)) break
      }
    })
  }
}
let L = new w