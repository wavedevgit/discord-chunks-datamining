/** Chunk was on 49438 **/
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

function C(e) {
  var t, n;
  let {
    log: a,
    member: s,
    guild: _
  } = e, {
    analyticsLocations: I
  } = (0, d.Ay)(), m = T.Zo(a), S = T.nG(a), C = null == (n = T.AO(p.gGk.REASON, a)) ? true : n.newValue, L = T.gT(a), x = (0, g.L4)(a.id), b = (0, u.bG)([N.Ay], () => null != a.userId ? N.Ay.getMember(s.guildId, a.userId) : null, [s.guildId, a.userId]), M = (0, h.gn)(null == b ? true : b.guildId, null == b ? true : b.userId, null != (t = null == b ? true : b.colorStrings) ? t : null), v = r.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, A.Ko)(e, I)
  }, [I]), U = r.useCallback(() => {
    var e;
    return null == a.user ? null : (0, l.jsx)(c.m, {
      asContainer: true,
      text: G.intl.string(G.t.mvsi9n),
      children: (0, l.jsx)(E.DUT, {
        onClick: v(b),
        tag: "span",
        className: R.Xh,
        children: (0, l.jsxs)(E.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, l.jsx)(E.gyj, {
            name: f.Ay.getName(s.guildId, null, a.user),
            colorString: null != (e = null == b ? true : b.colorString) ? e : null,
            colorStrings: M
          })]
        })
      })
    })
  }, [v, a.user, s.guildId, b, M])();
  return (0, l.jsxs)("div", {
    className: i()(D.ol, R.$9),
    children: [(0, l.jsxs)("div", {
      className: R._6,
      children: [(0, l.jsxs)("div", {
        className: R.lc,
        children: [null != m && (0, l.jsx)(E.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: m
        }), null != S && (0, l.jsxs)(E.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["(", "string" == typeof S ? S : o()(S).fromNow(), ")"]
        })]
      }), (0, l.jsx)("div", {
        className: R.FS,
        children: (0, l.jsx)(E.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: x
        })
      })]
    }), null != C && (0, l.jsx)("div", {
      className: R.Xy,
      children: (0, l.jsxs)("div", {
        className: R.eH,
        children: [U, (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: C
        })]
      })
    }), null == C && null != L && (0, l.jsx)("div", {
      className: R.Xy,
      children: (0, l.jsxs)("div", {
        className: R.E9,
        children: [U, (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: L
        })]
      })
    }), null == C && null == L && (0, l.jsx)("div", {
      className: R.Xy,
      children: (0, l.jsx)("div", {
        className: R.E9,
        children: (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, l.jsx)(O.ri, {
            log: a,
            guild: _,
            onContentClick: () => {},
            className: R.zm
          })
        })
      })
    })]
  })
}

function L(e) {
  let {
    member: t
  } = e, n = (0, u.bG)([m.A], () => m.A.getGuild(t.guildId), [t.guildId]), a = (0, u.bG)([I.A], () => {
    let e = I.A.logs;
    return null == e || null == n ? [] : T.yy(e, n)
  }, [n]);
  return (r.useEffect(() => {
    !async function(e, t) {
      await _.Qi(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === a.length) ? null : (0, l.jsx)(E.D0$, {
    label: G.intl.string(G.t.flCxLo),
    children: a.length > 0 ? (0, l.jsx)(S.SQ, {
      children: a.map(e => (0, l.jsx)(C, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}