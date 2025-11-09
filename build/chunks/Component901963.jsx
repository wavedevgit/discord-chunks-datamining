/** Chunk was on web.js **/
/** chunk id: 901963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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
  Chunk445102 = require("./445102.js");
let O = "premiumRetentionEmojiPickerNotice",
  v = Chunk433517.K.get(O),
  I = e => {
    let {
      closePopout: t,
      channel: n
    } = e, [a, I] = i.useState(false), {
      subscription: S,
      hasFetchedSubscriptions: T
    } = (0, s.cj)([p.Z], () => ({
      subscription: p.Z.getPremiumSubscription(),
      hasFetchedSubscriptions: p.Z.hasFetchedSubscriptions()
    }));
    if (i.useEffect(() => {
        T || (0, u.jg)()
      }, [T]), null == S || !(0, h.zV)(S.status) || a) return null;
    let A = S.status === g.O0b.PAST_DUE ? (0, h.lY)(S).expiresDate : o()(S.currentPeriodStart).add(E.gh),
      C = "".concat(S.id, ":").concat(A.toISOString());
    if (v === C) return null;
    let N = h.ZP.getPremiumType(S.planId) === E.PremiumTypes.TIER_0 ? d.JX.PREMIUM_TIER_0 : h.ZP.getPremiumType(S.planId) === E.PremiumTypes.TIER_1 ? d.JX.PREMIUM_TIER_1 : d.JX.PREMIUM_TIER_2;
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
            planName: h.ZP.getDisplayPremiumType(S.planId),
            endsAt: A.toDate()
          })
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.Anchor, {
            onClick: () => {
              (0, m.A3)(n), t(), (0, _.openUserSettings)(f.n.NITRO_PANEL, {
                section: g.oAB.PREMIUM
              })
            },
            children: b.intl.string(b.t.W3aavh)
          })
        })]
      }), (0, r.jsx)(c.P3F, {
        onClick: () => {
          l.K.set(O, C), v = C, I(true)
        },
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: y.premiumRetentionNoticeClose
        })
      })]
    })
  }