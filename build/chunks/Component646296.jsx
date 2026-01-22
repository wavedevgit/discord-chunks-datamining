/** Chunk was on 47841 **/
/** chunk id: 646296, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk417597 = require("./417597.js"),
  Chunk73939 = require("./73939.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk555337 = require("./555337.js"),
  Chunk175650 = require("./175650.js"),
  Chunk567305 = require("./567305.js"),
  Chunk599941 = require("./599941.js"),
  Chunk695825 = require("./695825.js"),
  Chunk11351 = require("./11351.js"),
  Chunk922975 = require("./922975.js"),
  Chunk822525 = require("./822525.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk862238 = require("./862238.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = "guild-role-subscription-tier-template-selector";

function _(e) {
  let {
    guildId: t,
    priceTiers: l,
    groupListingId: p
  } = e, _ = (0, m.cY)(p), {
    editStateIds: S,
    addNewEditStateId: T,
    addNewEditStateFromTemplate: I,
    removeEditStateId: C
  } = h.d0(p, t, {
    includeSoftDeleted: true
  }), [P, w] = i.useState({}), R = i.useMemo(() => {
    let e = S.map(e => {
      var t;
      return null != (t = P[e]) ? t : e
    });
    return (0, a.uniq)(e)
  }, [S, P]), D = (0, b._Y)(t), G = (0, b.a0)(), L = i.useCallback(() => {
    G && g.ok.trackExposure({
      guildId: t,
      location: "b2d9de_1"
    }), G && D ? (0, u.mMO)(async () => {
      let {
        default: e
      } = await n.e("263").then(n.bind(n, 486010));
      return n => (0, r.jsx)(e, E(A({}, n), {
        guildId: t,
        addNewEditStateFromTemplate: I,
        addNewEditStateFromScratch: T,
        priceTiers: l
      }))
    }, {
      modalKey: N
    }) : T()
  }, [t, I, T, l, G, D]), k = h.Zw(R), M = i.useCallback(() => R.forEach(h.Ts), [R]), U = (0, x.gN)(), F = (0, c.bG)([f.A], () => f.A.getProps().subsection);
  return i.useEffect(() => (F === O.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE && L(), () => {
    (0, u.OoC)(N)
  }), [F, L]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: v.B2,
      children: [R.map(e => (0, r.jsx)(j.A, {
        guildId: t,
        initialEditStateId: e,
        allSubscriptionListings: _,
        priceTiers: l,
        groupListingId: p,
        onDeleteEditState: () => C(e),
        onBeforeDispatchNewListing: t => {
          var n;
          return n = t.id, void w(t => E(A({}, t), {
            [n]: e
          }))
        },
        onAfterDispatchNewListing: () => C(e)
      }, e)), (0, r.jsxs)(u.DUT, {
        onClick: U ? true : L,
        className: s()(v.l2, {
          [v.r9]: U
        }),
        "aria-disabled": U,
        children: [(0, r.jsx)(u.U1e, {
          size: "xs",
          color: "currentColor",
          className: v.qE
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-text-active",
          children: y.intl.string(y.t.PiFnny)
        })]
      })]
    }), (0, r.jsx)(o.F, {
      component: "div",
      className: v.se,
      children: k && (0, r.jsx)(u.FQk, {
        children: (0, r.jsx)(d.A, {
          onReset: M
        })
      })
    })]
  })
}

function S(e) {
  let {
    guildId: t
  } = e, {
    priceTiers: n
  } = (e => {
    let [t, n] = i.useState(true), [r, l] = i.useState();
    return i.useEffect(() => {
      n(true), (0, p.XT)(e).then(e => {
        l(e), n(false)
      })
    }, [e]), {
      loading: t,
      priceTiers: r
    }
  })(t), l = (0, m.uk)(t), {
    maxTiers: s
  } = (0, b.DN)(t), a = l.map(e => e.id);
  return (0, r.jsx)(u.D0$, {
    label: y.intl.string(y.t["72+Sos"]),
    description: y.intl.format(y.t.nHRSvM, {
      maxTiers: s
    }),
    children: (0, r.jsx)(_, {
      priceTiers: n,
      guildId: t,
      groupListingId: a[0]
    })
  })
}