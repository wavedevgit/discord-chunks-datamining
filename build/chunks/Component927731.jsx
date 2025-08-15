/** Chunk was on 6049 **/
/** chunk id: 927731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk644542 = require("./644542.js"),
  Chunk923726 = require("./923726.js"),
  Chunk584825 = require("./584825.js"),
  Chunk295141 = require("./295141.js"),
  Chunk723047 = require("./723047.js"),
  Chunk290348 = require("./290348.js"),
  Chunk450215 = require("./450215.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk255311 = require("./255311.js");

function y(e) {
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

function C(e, t) {
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

function I(e) {
  let {
    guildId: t,
    priceTiers: l,
    groupListingId: f
  } = e, I = (0, h._k)(f), {
    editStateIds: E,
    addNewEditStateId: S,
    addNewEditStateFromTemplate: T,
    removeEditStateId: P
  } = x.B7(f, t, {
    includeSoftDeleted: true
  }), [w, R] = i.useState({}), Z = i.useMemo(() => {
    let e = E.map(e => {
      var t;
      return null != (t = w[e]) ? t : e
    });
    return (0, s.uniq)(e)
  }, [E, w]), D = (0, p.ss)(t), A = (0, p.Gp)(), k = i.useCallback(() => {
    A && g.jJ.trackExposure({
      guildId: t,
      location: "b2d9de_1"
    }), A && D ? (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("9558").then(n.bind(n, 34460));
      return n => (0, r.jsx)(e, C(y({}, n), {
        guildId: t,
        addNewEditStateFromTemplate: T,
        addNewEditStateFromScratch: S,
        priceTiers: l
      }))
    }, {
      modalKey: N
    }) : S()
  }, [t, T, S, l, A, D]), L = x.Lo(Z), M = i.useCallback(() => Z.forEach(x.GM), [Z]), G = (0, b.mY)(), U = (0, o.e7)([m.Z], () => m.Z.getProps().subsection);
  return i.useEffect(() => (U === v.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && k(), () => {
    (0, d.Mr3)(N)
  }), [U, k]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: O.groupListings,
      children: [Z.map(e => (0, r.jsx)(j.Z, {
        guildId: t,
        initialEditStateId: e,
        allSubscriptionListings: I,
        priceTiers: l,
        groupListingId: f,
        onDeleteEditState: () => P(e),
        onBeforeDispatchNewListing: t => {
          var n;
          return n = t.id, void R(t => C(y({}, t), {
            [n]: e
          }))
        },
        onAfterDispatchNewListing: () => P(e)
      }, e)), (0, r.jsxs)(d.P3F, {
        onClick: G ? true : k,
        className: a()(O.createTierButton, {
          [O.disabled]: G
        }),
        "aria-disabled": G,
        children: [(0, r.jsx)(d.oFk, {
          size: "xs",
          color: "currentColor",
          className: O.createTierIcon
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "interactive-active",
          children: _.intl.string(_.t.PiFnn5)
        })]
      })]
    }), (0, r.jsx)(c.W, {
      component: "div",
      className: O.contentRegion,
      children: L && (0, r.jsx)(d.oXn, {
        children: (0, r.jsx)(u.Z, {
          onReset: M
        })
      })
    })]
  })
}

function E(e) {
  let {
    guildId: t
  } = e, {
    priceTiers: n
  } = (e => {
    let [t, n] = i.useState(true), [r, l] = i.useState();
    return i.useEffect(() => {
      n(true), (0, f.X)(e).then(e => {
        l(e), n(false)
      })
    }, [e]), {
      loading: t,
      priceTiers: r
    }
  })(t), l = (0, h.GG)(t), {
    maxTiers: a
  } = (0, p.s1)(t), s = l.map(e => e.id);
  return (0, r.jsxs)(d.hjN, {
    title: _.intl.string(_.t["72+Soq"]),
    className: O.container,
    children: [(0, r.jsx)(d.R94, {
      type: d.R94.Types.DESCRIPTION,
      children: _.intl.format(_.t.nHRSvL, {
        maxTiers: a
      })
    }), (0, r.jsx)(d.LZC, {
      size: 16
    }), (0, r.jsx)(I, {
      priceTiers: n,
      guildId: t,
      groupListingId: s[0]
    })]
  })
}