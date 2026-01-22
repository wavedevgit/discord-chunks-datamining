/** Chunk was on 35894 **/
/** chunk id: 508160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk812729 = require("./812729.js"),
  s = require.n(Chunk812729),
  Chunk417597 = require("./417597.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk996439 = require("./996439.js"),
  Chunk218394 = require("./218394.js"),
  Chunk504049 = require("./504049.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk809617 = require("./809617.jsx"),
  Chunk189552 = require("./189552.js"),
  Chunk89092 = require("./89092.jsx"),
  Chunk402218 = require("./402218.jsx"),
  Chunk17864 = require("./17864.jsx"),
  Chunk650583 = require("./650583.js"),
  Chunk160654 = require("./160654.js");
let A = {
    transform: "translate3d(15%, 0, 0)",
    opacity: .3
  },
  D = {
    transform: "translate3d(5%, 0, 0)",
    opacity: .5
  },
  S = {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  },
  _ = {
    mass: 1.1,
    friction: 24,
    tension: 260
  },
  N = e => e.shiftKey || e.key === H.dh.SHIFT,
  P = e => e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key),
  V = Chunk64700.memo(function(e) {
    let {
      members: t,
      guild: n,
      className: i,
      searchState: a,
      compact: s,
      onSelectRow: f,
      onResetForNewMembers: b
    } = e, p = (0, c.bG)([C.A], () => C.A.useReducedMotion), H = (0, d.useHasAnyModalOpen)(), V = (0, m.j)(), [L, E] = l.useState(false), [M, R] = l.useState(false), I = !H && L && M;
    l.useEffect(() => {
      V || (E(false), R(false))
    }, [V]), l.useLayoutEffect(() => {
      let e = e => {
          N(e) && E(true), P(e) && R(true)
        },
        t = e => {
          N(e) && E(false), P(e) && R(false)
        };
      return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
        window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
      }
    }, []), l.useEffect(() => {
      (0, g.jo)(n.id, t)
    }, [n.id, t]);
    let T = t.length > 30,
      Z = (0, u.pnh)(t, {
        key: e => e,
        trail: T ? 5 : 15,
        from(e) {
          let t = j.A.getEnhancedMember(n.id, e),
            r = j.A.getLastRefreshTimestamp(n.id),
            l = null == t || 0 === r,
            i = null != t && t.refreshTimestamp === r;
          return l || !i ? S : T ? D : A
        },
        enter: S,
        config: _
      }),
      k = !p && a === x.IY.LOADING;
    return (0, r.jsxs)("table", {
      className: o()(w.tp, i),
      children: [(0, r.jsx)(y.A, {
        guildId: n.id,
        currentPagedMembers: t
      }), (0, r.jsx)("tbody", {
        children: a === x.IY.SUCCESS_FULL || a === x.IY.LOADING ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(v.A, {
            guild: n,
            onSubmit: b
          }), Z((e, t) => (0, r.jsx)(O.A, {
            userId: t,
            guildId: n.id,
            style: e,
            onSelect: f,
            isHoldingAdvancedInfoKey: I,
            compact: s,
            isLoading: k
          }, t))]
        }) : (0, r.jsx)("td", {
          colSpan: 7,
          children: (0, r.jsx)(h.A, {
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
  L = function(e) {
    var t, n;
    let {
      guild: i,
      className: o,
      searchState: a,
      compact: s,
      onSelectRow: d,
      onResetForNewMembers: u
    } = e, C = (0, c.cf)([j.A], () => j.A.getPaginationStateByGuildId(i.id), [i.id]), [m] = (0, c.bG)([j.A], () => j.A.getPagedMembersByGuildId(i.id), [i.id], b.D);
    l.useEffect(() => {
      (0, g.uO)(i.id)
    }, [i.id]);
    let h = l.useDeferredValue(null != (t = m[C.currentPage]) ? t : []),
      {
        analyticsLocations: x
      } = (0, f.Ay)(),
      y = null != (n = null == x ? true : x[0]) ? n : null;
    return l.useEffect(() => {
      (0, p.KW)(i.id, y)
    }, [i.id, y]), (0, r.jsx)(V, {
      members: h,
      guild: i,
      className: o,
      searchState: a,
      compact: s,
      onSelectRow: d,
      onResetForNewMembers: u
    })
  }