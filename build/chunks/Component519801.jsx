/** Chunk was on 86513 **/
/** chunk id: 519801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function j(e) {
  var t, n;
  let j, v, {
      showBenefits: y,
      handleClose: O,
      onSubscriptionConfirmation: C
    } = e,
    {
      updatedSubscription: S,
      readySlideId: P,
      selectedSku: N,
      selectedStoreListing: E,
      application: T
    } = (0, d.JL)(),
    k = (0, l.Z)(g.i),
    {
      createMultipleConfettiAt: _
    } = r.useContext(o.h),
    w = null != (t = null == N ? true : N.name) ? t : "",
    Z = () => {
      O(), null == C || C()
    },
    A = P === m.h8.CONFIRM,
    D = (0, s.KW)(null != (n = null == N ? true : N.flags) ? n : 0),
    I = null != E && E.benefits.length > 0 ? x.intl.formatToPlainString(x.t["+IQQVM"], {
      benefitCount: E.benefits.length
    }) : null;
  return y ? k ? j = (0, i.jsx)(u.h, {
    title: x.intl.format(x.t.ea6tZr, {
      tierName: w
    }),
    subtitle: null != E && E.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepft, {
      benefits: I
    }) : null,
    onConfirm: Z,
    confirmCta: x.intl.string(x.t.nlkywz)
  }) : (j = null != E && null != T ? (0, i.jsx)(c.Oc, {
    icon: E.thumbnail,
    storeListingBenefits: E.benefits,
    application: T,
    title: x.intl.format(x.t["Q+qktS"], {
      tier: w
    }),
    subtitle: x.intl.string(x.t.ECKxXU),
    description: D ? x.intl.format(x.t["MAtQk/"], {
      applicationName: null == T ? true : T.name
    }) : x.intl.format(x.t.vHkMF4, {
      tier: w
    })
  }) : (0, i.jsx)(f.Z, {}), v = (0, i.jsx)(p.Z, {
    onPrimary: Z,
    primaryCTA: p.g.CONTINUE,
    primaryText: x.intl.string(x.t["JtWl+a"])
  })) : j = k ? (0, i.jsx)(u.m, {
    tierName: w,
    onConfirm: Z,
    subscription: S
  }) : (0, i.jsx)(c.xe, {
    tierName: w,
    onConfirm: Z,
    subscription: S
  }), r.useEffect(() => {
    a.Z.useReducedMotion && A && _(window.innerWidth / 2, window.innerHeight / 2)
  }, [_, A]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(b.C3, {
      children: [(0, i.jsx)(h.Z, {}), j]
    }), null != v && (0, i.jsx)(b.O3, {
      children: v
    })]
  })
}