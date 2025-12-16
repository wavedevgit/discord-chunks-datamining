/** Chunk was on 1272 **/
/** chunk id: 837689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk346497 = require("./346497.js"),
  Chunk727310 = require("./727310.jsx"),
  Chunk318199 = require("./318199.jsx"),
  Chunk474936 = require("./474936.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let j = "PremiumServerDriveAnnouncementModal";
class P extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), Chunk570140.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), Chunk570140.Z.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), Chunk570140.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), Chunk570140.Z.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess)
  }
  constructor(...e) {
    super(...e), N(this, "handleActivePromotionsFetchSuccess", e => {
      let {
        promotions: t
      } = e;
      for (let e of t)
        if (null != e.marketing_components) {
          for (let t of e.marketing_components)
            if (t.component_type === l.I.ANNOUNCEMENT_MODAL) return void this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, false)
        }
    }), N(this, "maybeOpenServerDriveAnnouncementModal", async (e, t, i, l) => {
      let a = (0, S.r)({
        promotionId: t,
        content: i,
        isPreview: l
      });
      if (null != a) return (false !== l || (null == a ? true : a.contentIdentifier) !== "summer_bogo_content" || !!await (0, I.k)()) && ((0, o.Mr3)(j), (0, o.ZDy)(async () => {
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
        modalKey: j
      }), true);
      returnfalse
    }), N(this, "handlePreview", e => {
      let {
        data: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, true)
    }), N(this, "getOfferFromStore", () => {
      let e = p.default.getCurrentUser();
      if ((0, g.I5)(e)) return {};
      let t = [T.hs, T.RU, T.rB, T.ih].map(e => f.Z.getUserDiscountOffer(e)).filter(e => null != e && !(0, d.k)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = (0, _.J0)();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), N(this, "mayShowAnnouncementModal", async () => {
      if (await (0, b.l2)(), h.s.isDisallowPopupsSet()) return;
      let e = this.getOfferFromStore(),
        t = v.Z.getCurrentConfig({
          location: "announcementManager"
        }, {
          autoTrackExposure: false
        }).enabled,
        n = (0, O.$)({
          location: "mayShowAnnouncementModal"
        }),
        r = (0, u.zu)(a.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
        l = p.default.getCurrentUser();
      if (!t || r || (0, o.$sL)() || (0, g.I5)(l) || await (0, E.G)(e.userTrialOffer) && (0, C.Z)({
          upsellType: T.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL
        }), (null == l || l.verified) && !(0, o.$sL)() && !i.tq && !n) {
        for (let t of (await (0, y.He)(e)))
          if (await this.maybeOpenServerDriveAnnouncementModal("", m.default.fromTimestamp(Date.now()), t, false)) break
      }
    })
  }
}
let x = new P