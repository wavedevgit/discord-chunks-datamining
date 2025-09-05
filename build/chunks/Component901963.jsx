/** Chunk was on web.js **/
/** chunk id: 901963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk230711 = require("./230711.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk543241 = require("./543241.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk445102 = require("./445102.js");
let y = "premiumRetentionEmojiPickerNotice",
  O = Chunk433517.K.get(y),
  v = e => {
    let {
      closePopout: t,
      channel: n
    } = e, [a, v] = i.useState(false), {
      subscription: I,
      hasFetchedSubscriptions: T
    } = (0, s.cj)([_.Z], () => ({
      subscription: _.Z.getPremiumSubscription(),
      hasFetchedSubscriptions: _.Z.hasFetchedSubscriptions()
    }));
    if (i.useEffect(() => {
        T || (0, u.jg)()
      }, [T]), null == I || !(0, p.zV)(I.status) || a) return null;
    let S = I.status === m.O0b.PAST_DUE ? (0, p.lY)(I).expiresDate : o()(I.currentPeriodStart).add(g.gh),
      A = "".concat(I.id, ":").concat(S.toISOString());
    if (O === A) return null;
    let C = p.ZP.getPremiumType(I.planId) === g.p9.TIER_0 ? f.JX.PREMIUM_TIER_0 : p.ZP.getPremiumType(I.planId) === g.p9.TIER_1 ? f.JX.PREMIUM_TIER_1 : f.JX.PREMIUM_TIER_2;
    return (0, r.jsxs)("div", {
      className: b.premiumRetentionNotice,
      children: [(0, r.jsx)(c.SrA, {
        size: "md",
        className: b.premiumRetentionNoticeIcon,
        color: C
      }), (0, r.jsxs)("div", {
        className: b.premiumRetentionNoticeContent,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: E.intl.format(E.t.bTMjiI, {
            planName: p.ZP.getDisplayPremiumType(I.planId),
            endsAt: S.toDate()
          })
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.eee, {
            onClick: () => {
              (0, h.A3)(n), t(), d.Z.open(m.oAB.PREMIUM)
            },
            children: E.intl.string(E.t.W3aavr)
          })
        })]
      }), (0, r.jsx)(c.P3F, {
        onClick: () => {
          l.K.set(y, A), O = A, v(true)
        },
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: b.premiumRetentionNoticeClose
        })
      })]
    })
  }