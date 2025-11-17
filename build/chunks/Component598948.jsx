/** Chunk was on 6850 **/
/** chunk id: 598948, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk399606 = require("./399606.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk136015 = require("./136015.js"),
  Chunk506071 = require("./506071.js"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk827657 = require("./827657.jsx"),
  Chunk472596 = require("./472596.js"),
  Chunk201756 = require("./201756.jsx"),
  Chunk66747 = require("./66747.jsx"),
  Chunk852479 = require("./852479.jsx"),
  Chunk295907 = require("./295907.js"),
  Chunk655804 = require("./655804.js");
let w = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  S = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  Z = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  D = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  N = e => e.shiftKey || e.key === H.vn.SHIFT,
  R = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
  L = Chunk473749.memo(function(e) {
    let {
      members: t,
      guild: n,
      className: i,
      searchState: a,
      compact: s,
      onSelectRow: m,
      onResetForNewMembers: b
    } = e, f = (0, c.e7)([C.Z], () => C.Z.useReducedMotion), H = (0, u.f9)(), L = (0, p.n)(), [P, I] = l.useState(false), [V, M] = l.useState(false), E = !H && P && V;
    l.useEffect(() => {
      L || (I(false), M(false))
    }, [L]), l.useLayoutEffect(() => {
      let e = e => {
          N(e) && I(true), R(e) && M(true)
        },
        t = e => {
          N(e) && I(false), R(e) && M(false)
        };
      return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
        window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
      }
    }, []), l.useEffect(() => {
      (0, g.nb)(n.id, t)
    }, [n.id, t]);
    let T = t.length > 30,
      k = (0, d.Yzy)(t, {
        key: e => e,
        trail: T ? 5 : 15,
        from(e) {
          let t = h.Z.getEnhancedMember(n.id, e),
            r = h.Z.getLastRefreshTimestamp(n.id),
            l = null == t || 0 === r,
            i = null != t && t.refreshTimestamp === r;
          return l || !i ? Z : T ? S : w
        },
        enter: Z,
        config: D
      }),
      A = !f && a === x.po.LOADING;
    return (0, r.jsxs)("table", {
      className: o()(_.table, i),
      children: [(0, r.jsx)(v.Z, {
        guildId: n.id,
        currentPagedMembers: t
      }), (0, r.jsx)("tbody", {
        children: a === x.po.SUCCESS_FULL || a === x.po.LOADING ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(O.Z, {
            guild: n,
            onSubmit: b
          }), k((e, t) => (0, r.jsx)(y.Z, {
            userId: t,
            guildId: n.id,
            style: e,
            onSelect: m,
            isHoldingAdvancedInfoKey: E,
            compact: s,
            isLoading: A
          }, t))]
        }) : (0, r.jsx)("td", {
          colSpan: 7,
          children: (0, r.jsx)(j.Z, {
            searchState: a
          })
        })
      })]
    })
  }, function(e, t) {
    let n = s()(e.members, t.members),
      r = e.guild.id === t.guild.id,
      l = e.searchState === t.searchState,
      i = e.compact === t.compact;
    return n && r && l && i
  }),
  P = function(e) {
    var t, n;
    let {
      guild: i,
      className: o,
      searchState: a,
      compact: s,
      onSelectRow: u,
      onResetForNewMembers: d
    } = e, C = (0, c.cj)([h.Z], () => h.Z.getPaginationStateByGuildId(i.id), [i.id]), [p] = (0, c.e7)([h.Z], () => h.Z.getPagedMembersByGuildId(i.id), [i.id], b.Q);
    l.useEffect(() => {
      (0, g.zO)(i.id)
    }, [i.id]);
    let j = l.useDeferredValue(null != (t = p[C.currentPage]) ? t : []),
      {
        analyticsLocations: x
      } = (0, m.ZP)(),
      v = null != (n = null == x ? true : x[0]) ? n : null;
    return l.useEffect(() => {
      (0, f.h1)(i.id, v)
    }, [i.id, v]), (0, r.jsx)(L, {
      members: j,
      guild: i,
      className: o,
      searchState: a,
      compact: s,
      onSelectRow: u,
      onResetForNewMembers: d
    })
  }