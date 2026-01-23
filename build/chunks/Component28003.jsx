/** Chunk was on web.js **/
/** chunk id: 28003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk608805 = require("./608805.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk800471 = require("./800471.js"),
  Chunk109913 = require("./109913.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk179775 = require("./179775.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk763979 = require("./763979.js"),
  Chunk944496 = require("./944496.js"),
  Chunk51148 = require("./51148.js"),
  Chunk232266 = require("./232266.js"),
  Chunk243002 = require("./243002.js"),
  Chunk303930 = require("./303930.js"),
  Chunk241988 = require("./241988.js");

function I(e) {
  let {
    isOneStepCheckout: t,
    headerText: n,
    step: i,
    filteredBreadcrumbs: a
  } = e;
  if (t) return (0, r.jsx)("div", {
    className: g.r9,
    children: (0, r.jsx)(s.Heading, {
      variant: "heading-md/bold",
      children: n
    })
  });
  let o = a.length > 1;
  return (0, r.jsxs)("div", {
    className: g.go,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-lg/semibold",
      children: n
    }), o && (0, r.jsx)(d.A, {
      activeId: i,
      breadcrumbs: a
    })]
  })
}

function S(e) {
  let {
    isTier2: t
  } = e, n = t ? b : E, i = t ? O : y;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: g.mR
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: g.dz
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: g.lM
    })]
  })
}
let T = (e, t) => t ? (0, h.DP)() : e ? m.intl.string(m.t.lG6a5x) : m.intl.string(m.t["t9uG/o"]),
  C = function(e) {
    var t, n, i;
    let {
      hideCloseButton: d = false,
      hideCloseOnFullScreen: h,
      onClose: m,
      upgradeToPremiumType: E,
      isEligibleForTrial: y = false,
      showTrialBadge: b = false,
      showDiscountBadge: O = false,
      isPremiumGroupPurchase: C = false
    } = e, N = E === _.PremiumTypes.TIER_2, w = (0, u.lp)(y), R = (0, f.O)(), P = null == R || null == (n = R.discount) ? true : n.amount, {
      enabled: D
    } = (0, o.T0)({
      location: "PremiumBrandRefreshPaymentHeader"
    }), x = N ? A : v, {
      step: L,
      breadcrumbs: j,
      startedPaymentFlowWithPaymentSourcesRef: M,
      isDisplayingWowMomentConfirmation: k
    } = (0, l.P5)();
    if (null == j || 0 === j.length) return null;
    let U = j.flatMap(e => {
      let t = e.useBreadcrumbLabel(y),
        n = e.sectionHeaderText;
      return null != t ? {
        id: e.id,
        label: t,
        sectionHeaderText: n
      } : []
    });
    if (0 === U.length) return null;
    let G = (U = U.filter(e => {
        if (C && e.id === c.pn.PLAN_SELECT) returnfalse;
        let t = e.id !== c.pn.ADD_PAYMENT_STEPS,
          n = e.id === c.pn.ADD_PAYMENT_STEPS && !M.current;
        return !y || y && (t || n)
      })).find(e => e.id === L),
      V = null != (t = null == G || null == (i = G.sectionHeaderText) ? true : i.call(G)) ? t : null == G ? true : G.label,
      F = !D && null != V && null != L,
      B = w && F && L === c.pn.REVIEW,
      H = N ? "nitro-pink" : "nitro-green",
      Y = T(N, C);
    return k ? (0, r.jsx)("div", {
      className: g.kL,
      children: (0, r.jsx)(s.hLv, {
        color: H,
        className: g.N1
      })
    }) : (0, r.jsxs)("div", {
      className: g.kL,
      children: [(0, r.jsxs)(s.hLv, {
        color: H,
        className: a()(g.N1, {
          [g.s1]: !F
        }),
        children: [(0, r.jsx)(S, {
          isTier2: N
        }), !d && (0, r.jsx)(s.s_y, {
          "data-migration-pending": true,
          hideOnFullscreen: h,
          onClick: m,
          className: g.Ep
        }), (0, r.jsx)("img", {
          src: x,
          alt: "",
          className: B ? g.i_ : g.kX
        }), (0, r.jsxs)("div", {
          className: g.FS,
          children: [C && (0, r.jsx)("div", {
            className: g.$N,
            children: (0, r.jsx)(s.Exy, {
              type: "beta",
              variant: "expressive"
            })
          }), (0, r.jsx)(s.Text, {
            variant: "display-md",
            color: "text-strong",
            className: g.cf,
            children: Y
          })]
        })]
      }), (b || O) && (0, r.jsx)(p.A, {
        discountAmount: P
      }), F && (0, r.jsx)(I, {
        isOneStepCheckout: w,
        headerText: V,
        step: L,
        filteredBreadcrumbs: U
      }), B && (0, r.jsx)("div", {
        className: g.uo,
        children: (0, r.jsx)("div", {
          className: g.dQ
        })
      })]
    })
  }