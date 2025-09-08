/** Chunk was on 86513 **/
/** chunk id: 519801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk131388 = require("./131388.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk171246 = require("./171246.js"),
  Chunk689011 = require("./689011.jsx"),
  Chunk931905 = require("./931905.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk586585 = require("./586585.jsx"),
  Chunk456251 = require("./456251.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk750143 = require("./750143.js"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  var t, n;
  let v, j, {
      showBenefits: y,
      handleClose: O,
      onSubscriptionConfirmation: C
    } = e,
    {
      updatedSubscription: S,
      readySlideId: P,
      selectedSku: N,
      selectedStoreListing: T,
      application: E
    } = (0, d.JL)(),
    _ = (0, l.Z)(g.i),
    {
      createMultipleConfettiAt: w
    } = i.useContext(o.h),
    k = null != (t = null == N ? true : N.name) ? t : "",
    Z = () => {
      O(), null == C || C()
    },
    D = P === m.h8.CONFIRM,
    A = (0, s.KW)(null != (n = null == N ? true : N.flags) ? n : 0),
    I = null != T && T.benefits.length > 0 ? x.intl.formatToPlainString(x.t["+IQQVF"], {
      benefitCount: T.benefits.length
    }) : null;
  return y ? _ ? v = (0, r.jsx)(u.h, {
    title: x.intl.format(x.t.ea6tZm, {
      tierName: k
    }),
    subtitle: null != T && T.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, {
      benefits: I
    }) : null,
    onConfirm: Z,
    confirmCta: x.intl.string(x.t.nlkyw8)
  }) : (v = null != T && null != E ? (0, r.jsx)(c.Oc, {
    icon: T.thumbnail,
    storeListingBenefits: T.benefits,
    application: E,
    title: x.intl.format(x.t["Q+qktb"], {
      tier: k
    }),
    subtitle: x.intl.string(x.t.ECKxXV),
    description: A ? x.intl.format(x.t.MAtQk5, {
      applicationName: null == E ? true : E.name
    }) : x.intl.format(x.t.vHkMFx, {
      tier: k
    })
  }) : (0, r.jsx)(f.Z, {}), j = (0, r.jsx)(p.Z, {
    onPrimary: Z,
    primaryCTA: p.g.CONTINUE,
    primaryText: x.intl.string(x.t["JtWl+f"])
  })) : v = _ ? (0, r.jsx)(u.m, {
    tierName: k,
    onConfirm: Z,
    subscription: S
  }) : (0, r.jsx)(c.xe, {
    tierName: k,
    onConfirm: Z,
    subscription: S
  }), i.useEffect(() => {
    a.Z.useReducedMotion && D && w(window.innerWidth / 2, window.innerHeight / 2)
  }, [w, D]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(b.C3, {
      children: [(0, r.jsx)(h.Z, {}), v]
    }), null != j && (0, r.jsx)(b.O3, {
      children: j
    })]
  })
}