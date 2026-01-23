/** Chunk was on web.js **/
/** chunk id: 178898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk822123 = require("./822123.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk617536 = require("./617536.js");
let O = "premiumRetentionEmojiPickerNotice",
  v = Chunk506774.w.get(O),
  A = e => {
    let {
      closePopout: t,
      channel: n
    } = e, [a, A] = i.useState(false), {
      subscription: I,
      hasFetchedSubscriptions: S
    } = (0, o.cf)([_.A], () => ({
      subscription: _.A.getPremiumSubscription(),
      hasFetchedSubscriptions: _.A.hasFetchedSubscriptions()
    }));
    if (i.useEffect(() => {
        S || (0, u.hP)()
      }, [S]), null == I || !(0, h.PK)(I.status) || a) return null;
    let T = I.status === g.Dmq.PAST_DUE ? (0, h.ji)(I).expiresDate : s()(I.currentPeriodStart).add(E.ph),
      C = "".concat(I.id, ":").concat(T.toISOString());
    if (v === C) return null;
    let N = h.Ay.getPremiumType(I.planId) === E.PremiumTypes.TIER_0 ? d.k0.PREMIUM_TIER_0 : h.Ay.getPremiumType(I.planId) === E.PremiumTypes.TIER_1 ? d.k0.PREMIUM_TIER_1 : d.k0.PREMIUM_TIER_2;
    return (0, r.jsxs)("div", {
      className: b.g$,
      children: [(0, r.jsx)(c.tvc, {
        size: "md",
        className: b.lu,
        color: N
      }), (0, r.jsxs)("div", {
        className: b.Xn,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: y.intl.format(y.t.bTMjiO, {
            planName: h.Ay.getTierDisplayNameByPlanId(I.planId),
            endsAt: T.toDate()
          })
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(c.MzZ, {
            onClick: () => {
              (0, m.xf)(n), t(), (0, p.openUserSettings)(f.X.NITRO_PANEL, {
                section: g.nc_.PREMIUM
              })
            },
            children: y.intl.string(y.t.W3aavh)
          })
        })]
      }), (0, r.jsx)(c.DUT, {
        onClick: () => {
          l.w.set(O, C), v = C, A(true)
        },
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: b.YF
        })
      })]
    })
  }