/** Chunk was on 6850 **/
/** chunk id: 598948, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk420212 = require("./420212.js"),
  Chunk172796 = require("./172796.js");
let w = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  N = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  S = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  Z = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  D = e => e.shiftKey || e.key === H.vn.SHIFT,
  L = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
  R = Chunk73800.memo(function(e) {
    let {
      members: t,
      guild: n,
      className: o,
      searchState: a,
      compact: s,
      onSelectRow: m,
      onResetForNewMembers: b
    } = e, f = (0, c.e7)([C.Z], () => C.Z.useReducedMotion), H = (0, u.f9)(), R = (0, p.n)(), [I, P] = l.useState(false), [M, V] = l.useState(false), E = !H && I && M;
    l.useEffect(() => {
      R || (P(false), V(false))
    }, [R]), l.useLayoutEffect(() => {
      let e = e => {
          D(e) && P(true), L(e) && V(true)
        },
        t = e => {
          D(e) && P(false), L(e) && V(false)
        };
      return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
        window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
      }
    }, []), l.useEffect(() => {
      (0, j.nb)(n.id, t)
    }, [n.id, t]);
    let T = t.length > 30,
      k = (0, d.Yzy)(t, {
        key: e => e,
        trail: T ? 5 : 15,
        from(e) {
          let t = h.Z.getEnhancedMember(n.id, e),
            r = h.Z.getLastRefreshTimestamp(n.id),
            l = null == t || 0 === r,
            o = null != t && t.refreshTimestamp === r;
          return l || !o ? S : T ? N : w
        },
        enter: S,
        config: Z
      }),
      A = !f && a === x.po.LOADING;
    return (0, r.jsxs)("table", {
      className: i()(_.table, o),
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
          children: (0, r.jsx)(g.Z, {
            searchState: a
          })
        })
      })]
    })
  }, function(e, t) {
    let n = s()(e.members, t.members),
      r = e.guild.id === t.guild.id,
      l = e.searchState === t.searchState,
      o = e.compact === t.compact;
    return n && r && l && o
  }),
  I = function(e) {
    var t, n;
    let {
      guild: o,
      className: i,
      searchState: a,
      compact: s,
      onSelectRow: u,
      onResetForNewMembers: d
    } = e, C = (0, c.cj)([h.Z], () => h.Z.getPaginationStateByGuildId(o.id), [o.id]), [p] = (0, c.e7)([h.Z], () => h.Z.getPagedMembersByGuildId(o.id), [o.id], b.Q);
    l.useEffect(() => {
      (0, j.zO)(o.id)
    }, [o.id]);
    let g = l.useDeferredValue(null != (t = p[C.currentPage]) ? t : []),
      {
        analyticsLocations: x
      } = (0, m.ZP)(),
      v = null != (n = null == x ? true : x[0]) ? n : null;
    return l.useEffect(() => {
      (0, f.h1)(o.id, v)
    }, [o.id, v]), (0, r.jsx)(R, {
      members: g,
      guild: o,
      className: i,
      searchState: a,
      compact: s,
      onSelectRow: u,
      onResetForNewMembers: d
    })
  }