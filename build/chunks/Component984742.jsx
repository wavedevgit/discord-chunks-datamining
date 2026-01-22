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
      onSubscriptionConfirmation: O
    } = e,
    {
      updatedSubscription: S,
      readySlideId: A,
      selectedSku: E,
      selectedStoreListing: T,
      application: N
    } = (0, d.P5)(),
    C = (0, l.A)(x.Y),
    {
      createMultipleConfettiAt: w
    } = i.useContext(s.x),
    k = null != (t = null == E ? true : E.name) ? t : "",
    _ = () => {
      P(), null == O || O()
    },
    D = A === p.pn.CONFIRM,
    I = (0, o.bg)(null != (n = null == E ? true : E.flags) ? n : 0),
    R = null != T && T.benefits.length > 0 ? j.intl.formatToPlainString(j.t["+IQQVM"], {
      benefitCount: T.benefits.length
    }) : null;
  return y ? C ? h = (0, r.jsx)(u.E, {
    title: j.intl.format(j.t.ea6tZr, {
      tierName: k
    }),
    subtitle: null != T && T.benefits.length > 0 ? j.intl.formatToPlainString(j.t.HNepft, {
      benefits: R
    }) : null,
    onConfirm: _,
    confirmCta: j.intl.string(j.t.nlkywz)
  }) : (h = null != T && null != N ? (0, r.jsx)(c.Uf, {
    icon: T.thumbnail,
    storeListingBenefits: T.benefits,
    application: N,
    title: j.intl.format(j.t["Q+qktS"], {
      tier: k
    }),
    subtitle: j.intl.string(j.t.ECKxXU),
    description: I ? j.intl.format(j.t["MAtQk/"], {
      applicationName: null == N ? true : N.name
    }) : j.intl.format(j.t.vHkMF4, {
      tier: k
    })
  }) : (0, r.jsx)(f.A, {}), v = (0, r.jsx)(m.A, {
    onPrimary: _,
    primaryCTA: m.t.CONTINUE,
    primaryText: j.intl.string(j.t["JtWl+a"])
  })) : h = C ? (0, r.jsx)(u.v, {
    tierName: k,
    onConfirm: _,
    subscription: S
  }) : (0, r.jsx)(c.XG, {
    tierName: k,
    onConfirm: _,
    subscription: S
  }), i.useEffect(() => {
    a.A.useReducedMotion && D && w(window.innerWidth / 2, window.innerHeight / 2)
  }, [w, D]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(b.dZ, {
      children: [(0, r.jsx)(g.A, {}), h]
    }), null != v && (0, r.jsx)(b.UX, {
      children: v
    })]
  })
}