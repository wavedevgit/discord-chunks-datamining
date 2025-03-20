/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => w
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n(399606),
  A = n(215569),
  c = n(481060),
  d = n(852860),
  u = n(999382),
  g = n(644542),
  f = n(923726),
  m = n(584825),
  p = n(295141),
  h = n(723047),
  C = n(290348),
  b = n(450215),
  v = n(981631),
  x = n(388032),
  N = n(728012);

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let I = "guild-role-subscription-tier-template-selector",
  O = e => {
    let [t, n] = i.useState(!0), [r, s] = i.useState();
    return i.useEffect(() => {
      n(!0), (0, p.X)(e).then(e => {
        s(e), n(!1)
      })
    }, [e]), {
      loading: t,
      priceTiers: r
    }
  };

function y(e) {
  let {
    guildId: t,
    priceTiers: s,
    groupListingId: p
  } = e, O = (0, m._k)(p), {
    editStateIds: y,
    addNewEditStateId: w,
    addNewEditStateFromTemplate: P,
    removeEditStateId: B
  } = C.B7(p, t, {
    includeSoftDeleted: !0
  }), [D, T] = i.useState({}), S = i.useMemo(() => {
    let e = y.map(e => {
      var t;
      return null !== (t = D[e]) && void 0 !== t ? t : e
    });
    return (0, l.uniq)(e)
  }, [y, D]), L = (e, t) => {
    T(n => E(j({}, n), {
      [e]: t
    }))
  }, R = (0, f.ss)(t), Q = (0, f.Gp)(), W = i.useCallback(() => {
    Q && g.jJ.trackExposure({
      guildId: t,
      location: "b2d9de_1"
    }), Q && R ? (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("9558").then(n.bind(n, 34460));
      return n => (0, r.jsx)(e, E(j({}, n), {
        guildId: t,
        addNewEditStateFromTemplate: P,
        addNewEditStateFromScratch: w,
        priceTiers: s
      }))
    }, {
      modalKey: I
    }) : w()
  }, [t, P, w, s, Q, R]), Z = C.Lo(S), k = i.useCallback(() => S.forEach(C.GM), [S]), M = (0, h.mY)(), _ = (0, o.e7)([u.Z], () => u.Z.getProps().subsection);
  return i.useEffect(() => (_ === v.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && W(), () => {
    (0, c.Mr3)(I)
  }), [_, W]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: N.groupListings,
      children: [S.map(e => (0, r.jsx)(b.Z, {
        guildId: t,
        initialEditStateId: e,
        allSubscriptionListings: O,
        priceTiers: s,
        groupListingId: p,
        onDeleteEditState: () => B(e),
        onBeforeDispatchNewListing: t => L(t.id, e),
        onAfterDispatchNewListing: () => B(e)
      }, e)), (0, r.jsxs)(c.P3F, {
        onClick: M ? void 0 : W,
        className: a()(N.createTierButton, {
          [N.disabled]: M
        }),
        "aria-disabled": M,
        children: [(0, r.jsx)(c.oFk, {
          size: "xs",
          color: "currentColor",
          className: N.createTierIcon
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "interactive-active",
          children: x.NW.string(x.t.PiFnn5)
        })]
      })]
    }), (0, r.jsx)(A.W, {
      component: "div",
      className: N.contentRegion,
      children: Z && (0, r.jsx)(c.oXn, {
        children: (0, r.jsx)(d.Z, {
          onReset: k
        })
      })
    })]
  })
}

function w(e) {
  let {
    guildId: t
  } = e, {
    priceTiers: n
  } = O(t), i = (0, m.GG)(t), {
    maxTiers: s
  } = (0, f.s1)(t), a = i.map(e => e.id);
  return (0, r.jsxs)(c.hjN, {
    title: x.NW.string(x.t["72+Soq"]),
    className: N.container,
    children: [(0, r.jsx)(c.R94, {
      type: c.R94.Types.DESCRIPTION,
      children: x.NW.format(x.t.nHRSvL, {
        maxTiers: s
      })
    }), (0, r.jsx)(c.LZC, {
      size: 16
    }), (0, r.jsx)(y, {
      priceTiers: n,
      guildId: t,
      groupListingId: a[0]
    })]
  })
}