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
  Chunk614277 = require("./614277.jsx"),
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
      application: k
    } = (0, d.JL)(),
    E = (0, l.Z)(g.i),
    {
      createMultipleConfettiAt: _
    } = i.useContext(o.h),
    w = null != (t = null == N ? true : N.name) ? t : "",
    Z = () => {
      O(), null == C || C()
    },
    D = P === m.h8.CONFIRM,
    A = (0, s.KW)(null != (n = null == N ? true : N.flags) ? n : 0),
    I = null != T && T.benefits.length > 0 ? x.intl.formatToPlainString(x.t["+IQQVF"], {
      benefitCount: T.benefits.length
    }) : null;
  return y ? E ? v = (0, r.jsx)(u.h, {
    title: x.intl.format(x.t.ea6tZm, {
      tierName: w
    }),
    subtitle: null != T && T.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, {
      benefits: I
    }) : null,
    onConfirm: Z,
    confirmCta: x.intl.string(x.t.nlkyw8)
  }) : (v = null != T && null != k ? (0, r.jsx)(c.Oc, {
    icon: T.thumbnail,
    storeListingBenefits: T.benefits,
    application: k,
    title: x.intl.format(x.t["Q+qktb"], {
      tier: w
    }),
    subtitle: x.intl.string(x.t.ECKxXV),
    description: A ? x.intl.format(x.t.MAtQk5, {
      applicationName: null == k ? true : k.name
    }) : x.intl.format(x.t.vHkMFx, {
      tier: w
    })
  }) : (0, r.jsx)(f.Z, {}), j = (0, r.jsx)(p.Z, {
    onPrimary: Z,
    primaryCTA: p.g.CONTINUE,
    primaryText: x.intl.string(x.t["JtWl+f"])
  })) : v = E ? (0, r.jsx)(u.m, {
    tierName: w,
    onConfirm: Z,
    subscription: S
  }) : (0, r.jsx)(c.xe, {
    tierName: w,
    onConfirm: Z,
    subscription: S
  }), i.useEffect(() => {
    a.Z.useReducedMotion && D && _(window.innerWidth / 2, window.innerHeight / 2)
  }, [_, D]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(b.C3, {
      children: [(0, r.jsx)(h.Z, {}), v]
    }), null != j && (0, r.jsx)(b.O3, {
      children: j
    })]
  })
}