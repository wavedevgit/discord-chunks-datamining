/** Chunk was on 1272 **/
/** chunk id: 596957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./415506.js"), require("./388685.js"), require("./539854.js"), require("./642613.js");
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
  Chunk441623 = require("./441623.js"),
  Chunk752048 = require("./752048.js"),
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
  Chunk535881 = require("./535881.js");

function Z(e) {
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

function w(e, t) {
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
let L = [];

function R() {
  Chunk529103.Z.transitionToSection(Chunk981631.pJs.ADD_FRIEND, {
    explicit: true
  })
}

function D() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("36312").then(require.bind(require, 153932));
    return t => (0, r.jsx)(e, Z({}, t))
  })
}

function M(e) {
  let {
    section: t,
    showSpamCta: n
  } = e, l = i.useMemo(() => n ? D : t !== j.pJs.PENDING ? R : true, [n, t]);
  return (0, r.jsx)("div", {
    className: A.emptyStateContainer,
    children: (0, r.jsx)(v.Z, {
      type: t,
      onClick: l
    }, t)
  })
}
let k = function(e) {
  let {
    titleId: t
  } = e, {
    analyticsLocations: n
  } = (0, d.ZP)(u.Z.FRIENDS_LIST), {
    rows: s,
    section: R
  } = (0, l.cj)([_.ZP], () => _.ZP.getState()), k = (0, l.e7)([E.Z], () => E.Z.isFocused()), {
    relationshipCount: U,
    hasBlockedOrIgnored: G
  } = (0, l.cj)([b.Z], () => ({
    relationshipCount: b.Z.getRelationshipCount(),
    hasBlockedOrIgnored: b.Z.getBlockedOrIgnoredIDs().length > 0
  })), [H, B] = i.useState(() => {
    let e = {};
    for (let t of Object.values(j.pJs)) e[t] = "";
    return e
  }), V = (0, f.i)(u.Z.FRIENDS_LIST), [F, z] = i.useState(false), Y = i.useCallback((e, t) => {
    let {
      key: n
    } = e, i = function(e, t) {
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
    switch (R) {
      case j.pJs.PENDING:
        return (0, r.jsx)(y.Z, w(Z({}, i), {
          isFocused: k
        }), n);
      case j.pJs.SUGGESTIONS:
        return (0, r.jsx)(T.Z, w(Z({}, i), {
          isFocused: k
        }), n);
      case j.pJs.ALL:
        return (0, r.jsx)(O.Z, w(Z({}, i), {
          isFocused: k,
          sectionIndex: t,
          hasFriendAnniversarySection: V
        }), "".concat(t, "-").concat(n));
      case j.pJs.ONLINE:
      default:
        return (0, r.jsx)(O.Z, w(Z({}, i), {
          isFocused: k
        }), n)
    }
  }, [k, R, V]), W = i.useCallback(e => {
    B(w(Z({}, H), {
      [R]: e
    }))
  }, [H, R]), q = i.useCallback(() => {
    B(w(Z({}, H), {
      [R]: ""
    }))
  }, [H, R]), K = i.useMemo(() => R === j.pJs.PENDING && (s.filter(j.pJs.SPAM).length > 0 || s.filter(j.pJs.PENDING_IGNORED).length > 0), [s, R]), Q = i.useMemo(() => s.filter(R, H[R]), [s, H, R]), J = R === j.pJs.PENDING, X = i.useMemo(() => {
    if (!J) return L;
    let e = [];
    return Q.forEach(t => {
      let {
        applicationId: n
      } = t;
      null != n && e.push(n)
    }), e
  }, [J, Q]);
  (0, p.Z)(X, J);
  let $ = i.useMemo(() => R === j.pJs.ALL && V && Q.some(e => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY) ? Q.filter(e => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY).length : 0, [Q, R, V]),
    ee = i.useMemo(() => {
      switch (R) {
        case j.pJs.PENDING:
          let e = [],
            t = [];
          return Q.forEach(n => {
            n.type === j.OGo.PENDING_INCOMING ? e.push(n) : n.type === j.OGo.PENDING_OUTGOING && t.push(n)
          }), [e, t];
        case j.pJs.ALL:
          if (!(V && Q.some(e => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY))) return [Q];
          {
            let e = [];
            return Q.forEach(t => {
              t.giftIntentType === P.hX.FRIEND_ANNIVERSARY && e.push(t)
            }), e.sort((e, t) => m.Z.compareByDmProbability(e.userId, t.userId)), [F ? e : e.slice(0, h.nN), Q]
          }
        default:
          return [Q]
      }
    }, [Q, R, F, V]),
    et = i.useMemo(() => Q.filter(e => e.type === j.OGo.PENDING_INCOMING).length, [Q]),
    en = R === j.pJs.PENDING && et > 0 && et >= N.yf,
    er = i.useCallback(e => {
      e.stopPropagation(), o.Z.confirmClearPendingRelationships(et)
    }, [et]),
    ei = i.useCallback(() => {
      z(e => !e)
    }, []),
    el = i.useCallback(e => {
      let n = ee[e],
        i = function(e, t, n, r) {
          switch (e) {
            case j.pJs.ONLINE:
              return x.intl.formatToPlainString(x.t.BagU2U, {
                online: t.toString()
              });
            case j.pJs.PENDING:
              if (0 === n) return x.intl.formatToPlainString(x.t["g+3FIa"], {
                count: t.toString()
              });
              if (1 === n) return x.intl.formatToPlainString(x.t.npJsRl, {
                count: t.toString()
              });
              throw Error("Unexpected pending friend requests section index: ".concat(n));
            case j.pJs.SUGGESTIONS:
              return x.intl.formatToPlainString(x.t["DYMZ/p"], {
                count: t.toString()
              });
            default:
              if ((0, f.i)(u.Z.FRIENDS_LIST) && r)
                if (0 === n) return x.intl.string(x.t.Thb5MO);
                else if (1 === n);
              else throw Error("Unexpected friends all section index: ".concat(n));
              return x.intl.formatToPlainString(x.t.rHRrhC, {
                count: t.toString()
              })
          }
        }(R, n.length, e, n.some(e => e.giftIntentType === P.hX.FRIEND_ANNIVERSARY));
      return R === j.pJs.PENDING && 0 === e ? (0, r.jsxs)("div", {
        className: A.sectionTitle,
        children: [(0, r.jsx)(S.Z, {
          id: t,
          title: i
        }), en && (0, r.jsx)("div", {
          className: A.clearButton,
          children: (0, r.jsx)(a.Avr, {
            text: x.intl.string(x.t.O8k7O4),
            onClick: er,
            "aria-label": x.intl.string(x.t.O8k7O4),
            textVariant: "text-sm/medium"
          })
        })]
      }, i) : (0, r.jsx)("div", {
        className: A.sectionTitle,
        children: (0, r.jsx)(S.Z, {
          id: t,
          title: i
        })
      }, i)
    }, [ee, R, t, en, er]),
    ea = i.useCallback(e => R === j.pJs.ALL && 0 === e && V && $ > h.nN ? (0, r.jsx)("div", {
      className: A.sectionFooter,
      children: (0, r.jsx)(a.Button, {
        icon: F ? a.u04 : a.CJ0,
        variant: "secondary",
        size: "sm",
        text: x.intl.string(F ? x.t["6MwJo/"] : x.t["37C26f"]),
        onClick: ei,
        "aria-label": x.intl.string(F ? x.t["6MwJo/"] : x.t["37C26f"])
      })
    }) : null, [R, $, F, ei, V]);
  if (i.useEffect(() => {
      R === j.pJs.ALL && (0, g.d$)()
    }, [R]), i.useEffect(() => {
      z(false)
    }, [R, $]), 0 === Q.length && "" === H[R]) return (0, r.jsx)(M, {
    section: R,
    showSpamCta: K
  });
  let es = "" !== H[R],
    eo = 0 === Q.length && es;
  return (0, r.jsx)(d.Gt, {
    value: n,
    children: (0, r.jsxs)(c.Z, {
      section: j.jXE.FRIENDS_LIST,
      children: [G && (0, r.jsx)(C.R, {}), (0, r.jsx)("div", {
        className: A.searchBar,
        children: (0, r.jsx)(a.E1j, {
          query: H[R],
          onChange: W,
          onClear: q
        })
      }), (0, r.jsx)(I.Z, {
        rows: ee,
        renderRow: Y,
        renderSection: el,
        sectionFilter: R,
        isVirtualizedList: U >= N.nG,
        hasSearchQuery: es,
        renderSectionFooter: ea,
        footer: K && !eo ? (0, r.jsx)("div", {
          className: A.viewSpamButton,
          children: (0, r.jsx)(a.Avr, {
            text: x.intl.string(x.t.R40bU2),
            onClick: D,
            textVariant: "text-xs/medium",
            variant: "secondary"
          })
        }) : null
      }), eo && (0, r.jsx)("div", {
        className: A.emptyStateContainer,
        children: (0, r.jsx)(v.Z, {
          type: v.j.SECTION_NO_RESULTS
        }, R)
      })]
    })
  })
}