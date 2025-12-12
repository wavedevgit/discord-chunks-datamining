/** Chunk was on web.js **/
/** chunk id: 901963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk543241 = require("./543241.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk503922 = require("./503922.js");
let O = "premiumRetentionEmojiPickerNotice",
  v = Chunk433517.K.get(O),
  S = e => {
    let {
      closePopout: t,
      channel: n
    } = e, [o, S] = i.useState(false), {
      subscription: I,
      hasFetchedSubscriptions: T
    } = (0, s.cj)([_.Z], () => ({
      subscription: _.Z.getPremiumSubscription(),
      hasFetchedSubscriptions: _.Z.hasFetchedSubscriptions()
    }));
    if (i.useEffect(() => {
        T || (0, u.jg)()
      }, [T]), null == I || !(0, m.zV)(I.status) || o) return null;
    let C = I.status === g.O0b.PAST_DUE ? (0, m.lY)(I).expiresDate : a()(I.currentPeriodStart).add(E.gh),
      A = "".concat(I.id, ":").concat(C.toISOString());
    if (v === A) return null;
    let N = m.ZP.getPremiumType(I.planId) === E.PremiumTypes.TIER_0 ? d.JX.PREMIUM_TIER_0 : m.ZP.getPremiumType(I.planId) === E.PremiumTypes.TIER_1 ? d.JX.PREMIUM_TIER_1 : d.JX.PREMIUM_TIER_2;
    return (0, r.jsxs)("div", {
      className: y.premiumRetentionNotice,
      children: [(0, r.jsx)(c.SrA, {
        size: "md",
        className: y.premiumRetentionNoticeIcon,
        color: N
      }), (0, r.jsxs)("div", {
        className: y.premiumRetentionNoticeContent,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: b.intl.format(b.t.bTMjiO, {
            planName: m.ZP.getTierDisplayNameByPlanId(I.planId),
            endsAt: C.toDate()
          })
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Anchor, {
            onClick: () => {
              (0, h.A3)(n), t(), (0, p.openUserSettings)(f.n.NITRO_PANEL, {
                section: g.oAB.PREMIUM
              })
            },
            children: b.intl.string(b.t.W3aavh)
          })
        })]
      }), (0, r.jsx)(c.P3F, {
        onClick: () => {
          l.K.set(O, A), v = A, S(true)
        },
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: y.premiumRetentionNoticeClose
        })
      })]
    })
  }