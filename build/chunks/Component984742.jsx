/** Chunk was on 50243 **/
/** chunk id: 984742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk241524 = require("./241524.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk163437 = require("./163437.js"),
  Chunk490744 = require("./490744.jsx"),
  Chunk594508 = require("./594508.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk19311 = require("./19311.jsx"),
  Chunk534479 = require("./534479.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk376747 = require("./376747.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  var t, n;
  let h, v, {
      showBenefits: y,
      handleClose: P,
      onSubscriptionConfirmation: S
    } = e,
    {
      updatedSubscription: O,
      readySlideId: A,
      selectedSku: C,
      selectedStoreListing: E,
      application: T
    } = (0, d.P5)(),
    N = (0, l.A)(x.Y),
    {
      createMultipleConfettiAt: _
    } = i.useContext(s.x),
    w = null != (t = null == C ? true : C.name) ? t : "",
    k = () => {
      P(), null == S || S()
    },
    D = A === p.pn.CONFIRM,
    I = (0, o.bg)(null != (n = null == C ? true : C.flags) ? n : 0),
    R = null != E && E.benefits.length > 0 ? j.intl.formatToPlainString(j.t["+IQQVM"], {
      benefitCount: E.benefits.length
    }) : null;
  return y ? N ? h = (0, r.jsx)(u.E, {
    title: j.intl.format(j.t.ea6tZr, {
      tierName: w
    }),
    subtitle: null != E && E.benefits.length > 0 ? j.intl.formatToPlainString(j.t.HNepft, {
      benefits: R
    }) : null,
    onConfirm: k,
    confirmCta: j.intl.string(j.t.nlkywz)
  }) : (h = null != E && null != T ? (0, r.jsx)(c.Uf, {
    icon: E.thumbnail,
    storeListingBenefits: E.benefits,
    application: T,
    title: j.intl.format(j.t["Q+qktS"], {
      tier: w
    }),
    subtitle: j.intl.string(j.t.ECKxXU),
    description: I ? j.intl.format(j.t["MAtQk/"], {
      applicationName: null == T ? true : T.name
    }) : j.intl.format(j.t.vHkMF4, {
      tier: w
    })
  }) : (0, r.jsx)(f.A, {}), v = (0, r.jsx)(m.A, {
    onPrimary: k,
    primaryCTA: m.t.CONTINUE,
    primaryText: j.intl.string(j.t["JtWl+a"])
  })) : h = N ? (0, r.jsx)(u.v, {
    tierName: w,
    onConfirm: k,
    subscription: O
  }) : (0, r.jsx)(c.XG, {
    tierName: w,
    onConfirm: k,
    subscription: O
  }), i.useEffect(() => {
    a.A.useReducedMotion && D && _(window.innerWidth / 2, window.innerHeight / 2)
  }, [_, D]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(b.dZ, {
      children: [(0, r.jsx)(g.A, {}), h]
    }), null != v && (0, r.jsx)(b.UX, {
      children: v
    })]
  })
}