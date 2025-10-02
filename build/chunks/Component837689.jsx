/** Chunk was on 1272 **/
/** chunk id: 837689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk873546 = require("./873546.js"),
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
  Chunk434878 = require("./434878.js"),
  Chunk104494 = require("./104494.js"),
  Chunk29920 = require("./29920.js"),
  Chunk346497 = require("./346497.js"),
  Chunk727310 = require("./727310.jsx"),
  Chunk318199 = require("./318199.jsx"),
  Chunk474936 = require("./474936.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = "PremiumServerDriveAnnouncementModal";
class T extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), Chunk570140.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), Chunk570140.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview)
  }
  constructor(...e) {
    super(...e), S(this, "maybeOpenServerDriveAnnouncementModal", async (e, t) => {
      let i = (0, v.r)({
        content: e,
        isPreview: t
      });
      if (null != i) return (false !== t || (null == i ? true : i.contentIdentifier) !== "summer_bogo_content" || !!await (0, E.k)()) && ((0, a.Mr3)(C), (0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 318199));
        return t => (0, r.jsx)(e, {
          renderModalProps: t,
          properties: i
        })
      }, {
        modalKey: C
      }), true);
      returnfalse
    }), S(this, "handlePreview", e => {
      let {
        properties: t
      } = e;
      this.maybeOpenServerDriveAnnouncementModal(t, true)
    }), S(this, "getOfferFromStore", () => {
      let e = u.default.getCurrentUser();
      if ((0, p.I5)(e)) return {};
      let t = [I.hs, I.RU, I.rB, I.ih].map(e => d.Z.getUserDiscountOffer(e)).filter(e => null != e && !(0, _.kA)(e)).shift();
      if (null != t) return {
        userDiscountOffer: t
      };
      let n = (0, g.J0)();
      return null != n ? {
        userTrialOffer: n
      } : {}
    }), S(this, "mayShowAnnouncementModal", async () => {
      if (await (0, h.l2)(), f.s.isDisallowPopupsSet()) return;
      let e = this.getOfferFromStore(),
        t = b.Z.getCurrentConfig({
          location: "announcementManager"
        }, {
          autoTrackExposure: false
        }).enabled,
        n = (0, c.zu)(l.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
        r = u.default.getCurrentUser();
      if (!t || n || (0, a.$sL)() || (0, p.I5)(r) || await (0, m.G)(e.userTrialOffer) && (0, y.Z)({
          upsellType: I.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL
        }), (null == r || r.verified) && !(0, a.$sL)() && !i.tq) {
        for (let t of (await (0, O.He)(e)))
          if (await this.maybeOpenServerDriveAnnouncementModal(t, false)) break
      }
    })
  }
}
let N = new T