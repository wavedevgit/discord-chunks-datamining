/** Chunk was on 94503 **/
/** chunk id: 908627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk137130 = require("./137130.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk836731 = require("./836731.js"),
  Chunk189552 = require("./189552.js"),
  Chunk276373 = require("./276373.js"),
  Chunk523599 = require("./523599.js"),
  Chunk438407 = require("./438407.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk562153 = require("./562153.js"),
  Chunk829887 = require("./829887.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk585951 = require("./585951.js"),
  Chunk100411 = require("./100411.js");

function D(e) {
  var t, n;
  let {
    log: a,
    member: s,
    guild: d
  } = e, {
    analyticsLocations: f
  } = (0, _.Ay)(), N = T.Zo(a), S = T.nG(a), D = null == (n = T.AO(p.gGk.REASON, a)) ? true : n.newValue, L = T.gT(a), x = (0, g.L4)(a.id), C = (0, c.bG)([O.Ay], () => null != a.userId ? O.Ay.getMember(s.guildId, a.userId) : null, [s.guildId, a.userId]), M = (0, I.gn)(null == C ? true : C.guildId, null == C ? true : C.userId, null != (t = null == C ? true : C.colorStrings) ? t : null), v = r.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, A.Ko)(e, f)
  }, [f]), j = r.useCallback(() => {
    var e;
    return null == a.user ? null : (0, l.jsx)(u.m, {
      asContainer: true,
      text: b.intl.string(b.t.mvsi9n),
      children: (0, l.jsx)(E.DUT, {
        onClick: v(C),
        tag: "span",
        className: G.Xh,
        children: (0, l.jsxs)(E.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, l.jsx)(E.gyj, {
            name: m.Ay.getName(s.guildId, null, a.user),
            colorString: null != (e = null == C ? true : C.colorString) ? e : null,
            colorStrings: M
          })]
        })
      })
    })
  }, [v, a.user, s.guildId, C, M])();
  return (0, l.jsxs)("div", {
    className: i()(R.ol, G.$9),
    children: [(0, l.jsxs)("div", {
      className: G._6,
      children: [(0, l.jsxs)("div", {
        className: G.lc,
        children: [null != N && (0, l.jsx)(E.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: N
        }), null != S && (0, l.jsxs)(E.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["(", "string" == typeof S ? S : o()(S).fromNow(), ")"]
        })]
      }), (0, l.jsx)("div", {
        className: G.FS,
        children: (0, l.jsx)(E.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: x
        })
      })]
    }), null != D && (0, l.jsx)("div", {
      className: G.Xy,
      children: (0, l.jsxs)("div", {
        className: G.eH,
        children: [j, (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: D
        })]
      })
    }), null == D && null != L && (0, l.jsx)("div", {
      className: G.Xy,
      children: (0, l.jsxs)("div", {
        className: G.E9,
        children: [j, (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: L
        })]
      })
    }), null == D && null == L && (0, l.jsx)("div", {
      className: G.Xy,
      children: (0, l.jsx)("div", {
        className: G.E9,
        children: (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, l.jsx)(h.ri, {
            log: a,
            guild: d,
            onContentClick: () => {},
            className: G.zm
          })
        })
      })
    })]
  })
}

function L(e) {
  let {
    member: t
  } = e, n = (0, c.bG)([N.A], () => N.A.getGuild(t.guildId), [t.guildId]), a = (0, c.bG)([f.A], () => {
    let e = f.A.logs;
    return null == e || null == n ? [] : T.yy(e, n)
  }, [n]);
  return (r.useEffect(() => {
    !async function(e, t) {
      await d.Qi(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === a.length) ? null : (0, l.jsx)(E.D0$, {
    label: b.intl.string(b.t.flCxLo),
    children: a.length > 0 ? (0, l.jsx)(S.SQ, {
      children: a.map(e => (0, l.jsx)(D, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}