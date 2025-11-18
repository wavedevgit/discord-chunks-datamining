/** Chunk was on 1272 **/
/** chunk id: 596957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./415506.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk529103 = require("./529103.js"),
  Chunk194359 = require("./194359.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk522558 = require("./522558.js"),
  Chunk795448 = require("./795448.js"),
  Chunk699516 = require("./699516.js"),
  Chunk974042 = require("./974042.js"),
  Chunk451478 = require("./451478.js"),
  Chunk701861 = require("./701861.jsx"),
  Chunk437314 = require("./437314.jsx"),
  Chunk696577 = require("./696577.jsx"),
  Chunk163417 = require("./163417.jsx"),
  Chunk830880 = require("./830880.jsx"),
  Chunk492347 = require("./492347.jsx"),
  Chunk42575 = require("./42575.jsx"),
  Chunk617015 = require("./617015.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk494720 = require("./494720.js");

function x(e) {
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

function A(e, t) {
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
let Z = [];

function w() {
  Chunk529103.Z.transitionToSection(Chunk981631.pJs.ADD_FRIEND, {
    explicit: true
  })
}

function L() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("36312").then(require.bind(require, 153932));
    return t => (0, r.jsx)(e, x({}, t))
  })
}

function R(e) {
  let {
    section: t,
    showSpamCta: n
  } = e, l = i.useMemo(() => n ? L : t !== T.pJs.PENDING ? w : true, [n, t]);
  return (0, r.jsx)("div", {
    className: P.emptyStateContainer,
    children: (0, r.jsx)(E.Z, {
      type: t,
      onClick: l
    }, t)
  })
}
let D = function(e) {
  let {
    titleId: t
  } = e, {
    analyticsLocations: n
  } = (0, d.ZP)(u.Z.FRIENDS_LIST), {
    rows: s,
    section: w
  } = (0, l.cj)([m.ZP], () => m.ZP.getState()), D = (0, l.e7)([_.Z], () => _.Z.isFocused()), {
    relationshipCount: M,
    hasBlockedOrIgnored: k
  } = (0, l.cj)([g.Z], () => ({
    relationshipCount: g.Z.getRelationshipCount(),
    hasBlockedOrIgnored: g.Z.getBlockedOrIgnoredIDs().length > 0
  })), [U, G] = i.useState(() => {
    let e = {};
    for (let t of Object.values(T.pJs)) e[t] = "";
    return e
  }), B = i.useCallback(e => {
    let {
      key: t
    } = e, n = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["key"]);
    switch (w) {
      case T.pJs.PENDING:
        return (0, r.jsx)(O.Z, A(x({}, n), {
          isFocused: D
        }), t);
      case T.pJs.SUGGESTIONS:
        return (0, r.jsx)(C.Z, A(x({}, n), {
          isFocused: D
        }), t);
      case T.pJs.ONLINE:
      case T.pJs.ALL:
      default:
        return (0, r.jsx)(b.Z, A(x({}, n), {
          isFocused: D
        }), t)
    }
  }, [D, w]), H = i.useCallback(e => {
    G(A(x({}, U), {
      [w]: e
    }))
  }, [U, w]), V = i.useCallback(() => {
    G(A(x({}, U), {
      [w]: ""
    }))
  }, [U, w]), F = i.useMemo(() => w === T.pJs.PENDING && (s.filter(T.pJs.SPAM).length > 0 || s.filter(T.pJs.PENDING_IGNORED).length > 0), [s, w]), z = i.useMemo(() => s.filter(w, U[w]), [s, U, w]), Y = w === T.pJs.PENDING, W = i.useMemo(() => {
    if (!Y) return Z;
    let e = [];
    return z.forEach(t => {
      let {
        applicationId: n
      } = t;
      null != n && e.push(n)
    }), e
  }, [Y, z]);
  (0, p.Z)(W, Y);
  let q = i.useMemo(() => {
      switch (w) {
        case T.pJs.PENDING:
          let e = [],
            t = [];
          return z.forEach(n => {
            n.type === T.OGo.PENDING_INCOMING ? e.push(n) : n.type === T.OGo.PENDING_OUTGOING && t.push(n)
          }), [e, t];
        case T.pJs.ONLINE:
          if (!((0, f.i)(u.Z.FRIENDS_LIST) && z.some(e => e.giftIntentType === N.hX.FRIEND_ANNIVERSARY))) return [z];
          {
            let e = [],
              t = [];
            return z.forEach(n => {
              n.giftIntentType === N.hX.FRIEND_ANNIVERSARY ? e.push(n) : t.push(n)
            }), [e, t]
          }
        default:
          return [z]
      }
    }, [z, w]),
    K = i.useMemo(() => z.filter(e => e.type === T.OGo.PENDING_INCOMING).length, [z]),
    Q = w === T.pJs.PENDING && K > 0 && K >= S.yf,
    J = i.useCallback(e => {
      e.stopPropagation(), o.Z.confirmClearPendingRelationships(K)
    }, [K]),
    X = i.useCallback(e => {
      let n = q[e],
        i = function(e, t, n, r) {
          switch (e) {
            case T.pJs.ONLINE:
              if ((0, f.i)(u.Z.FRIENDS_LIST) && r)
                if (0 === n) return j.intl.string(j.t.Thb5MO);
                else if (1 === n);
              else throw Error("Unexpected friends online section index: ".concat(n));
              return j.intl.formatToPlainString(j.t.BagU2U, {
                online: t.toString()
              });
            case T.pJs.PENDING:
              if (0 === n) return j.intl.formatToPlainString(j.t["g+3FIa"], {
                count: t.toString()
              });
              if (1 === n) return j.intl.formatToPlainString(j.t.npJsRl, {
                count: t.toString()
              });
              throw Error("Unexpected pending friend requests section index: ".concat(n));
            case T.pJs.SUGGESTIONS:
              return j.intl.formatToPlainString(j.t["DYMZ/p"], {
                count: t.toString()
              });
            default:
              return j.intl.formatToPlainString(j.t.rHRrhC, {
                count: t.toString()
              })
          }
        }(w, n.length, e, n.some(e => null !== e.giftIntentType));
      return w === T.pJs.PENDING && 0 === e ? (0, r.jsxs)("div", {
        className: P.sectionTitle,
        children: [(0, r.jsx)(I.Z, {
          id: t,
          title: i
        }), Q && (0, r.jsx)("div", {
          className: P.clearButton,
          children: (0, r.jsx)(a.Avr, {
            text: j.intl.string(j.t.O8k7O4),
            onClick: J,
            "aria-label": j.intl.string(j.t.O8k7O4),
            textVariant: "text-sm/medium"
          })
        })]
      }, i) : (0, r.jsx)("div", {
        className: P.sectionTitle,
        children: (0, r.jsx)(I.Z, {
          id: t,
          title: i
        })
      }, i)
    }, [q, w, t, Q, J]);
  if (i.useEffect(() => {
      w === T.pJs.ALL && (0, h.d$)()
    }, [w]), 0 === z.length && "" === U[w]) return (0, r.jsx)(R, {
    section: w,
    showSpamCta: F
  });
  let $ = "" !== U[w],
    ee = 0 === z.length && $;
  return (0, r.jsx)(d.Gt, {
    value: n,
    children: (0, r.jsxs)(c.Z, {
      section: T.jXE.FRIENDS_LIST,
      children: [k && (0, r.jsx)(v.R, {}), (0, r.jsx)("div", {
        className: P.searchBar,
        children: (0, r.jsx)(a.E1j, {
          query: U[w],
          onChange: H,
          onClear: V
        })
      }), (0, r.jsx)(y.Z, {
        rows: q,
        renderRow: B,
        renderSection: X,
        sectionFilter: w,
        isVirtualizedList: M >= S.nG,
        hasSearchQuery: $,
        footer: F && !ee ? (0, r.jsx)("div", {
          className: P.viewSpamButton,
          children: (0, r.jsx)(a.Avr, {
            text: j.intl.string(j.t.R40bU2),
            onClick: L,
            textVariant: "text-xs/medium",
            variant: "secondary"
          })
        }) : null
      }), ee && (0, r.jsx)("div", {
        className: P.emptyStateContainer,
        children: (0, r.jsx)(E.Z, {
          type: E.j.SECTION_NO_RESULTS
        }, w)
      })]
    })
  })
}