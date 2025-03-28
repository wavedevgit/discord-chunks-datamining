/** Chunk was on 45260 **/
n.d(l, {
  Z: () => V
}), n(47120);
var t = n(200651),
  i = n(192379),
  d = n(442837),
  r = n(481060),
  a = n(835473),
  s = n(297781),
  c = n(443487),
  o = n(314897),
  u = n(594174),
  L = n(626135),
  C = n(5192),
  h = n(873128),
  m = n(246627),
  x = n(709737),
  v = n(69589),
  j = n(531501),
  f = n(981631),
  Z = n(701488),
  g = n(388032),
  H = n(466722);

function _(e) {
  let {
    application: l
  } = e, n = l.getIconURL(Z.Si.LARGE), i = null == n ? null : (0, t.jsx)("img", {
    className: H.gameIcon,
    src: n,
    "aria-hidden": !0,
    alt: ""
  });
  return (0, t.jsxs)("div", {
    className: H.gameTitleContainer,
    children: [i, (0, t.jsx)(r.Text, {
      variant: "text-sm/medium",
      className: H.gameTitle,
      children: l.name
    })]
  })
}

function V(e) {
  var l, n, j, Z, H;
  let V, {
      selected: p,
      channel: I,
      entry: N
    } = e,
    b = I.guild_id,
    E = (0, h.Z)({
      guildId: b,
      leaderboardId: N.extra.leaderboard_id,
      intervalOffset: 0
    }),
    {
      rankChanges: A
    } = (0, m.Z)({
      guildId: b,
      leaderboardId: N.extra.leaderboard_id,
      intervalStart: null !== (Z = null == E ? void 0 : E.interval_start) && void 0 !== Z ? Z : ""
    }),
    R = (0, d.e7)([o.default], () => o.default.getId()),
    [k, y] = i.useMemo(() => {
      let e = A.find(e => e.userId === R),
        l = A[0],
        n = null != e ? e : l,
        t = null == E ? void 0 : E.users.find(e => e.user_id === (null == n ? void 0 : n.userId));
      return [n, t]
    }, [E, A, R]),
    P = (0, d.e7)([u.default], () => u.default.getUser(null == k ? void 0 : k.userId)),
    G = C.ZP.getName(b, void 0, P);
  ! function(e) {
    let {
      leaderboard: l,
      guildId: n
    } = e, t = null == l ? void 0 : l.leaderboard_id;
    i.useEffect(() => {
      null != t && L.default.track(f.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
        leaderboard_id: t,
        guild_id: n
      })
    }, [t, n])
  }({
    leaderboard: E,
    guildId: b
  });
  let T = (0, a.q)(null == E ? void 0 : null === (l = E.settings) || void 0 === l ? void 0 : l.application_id);
  if (null == E || null == T) return null;
  if (0 === E.users.length || null == k || null == P) return (0, t.jsx)(M, {
    application: T,
    selected: p
  });
  let {
    sort_by_statistic_id: D
  } = E.guild_settings, S = null !== (H = null == y ? void 0 : null === (j = y.statistics) || void 0 === j ? void 0 : null === (n = j[D]) || void 0 === n ? void 0 : n.value) && void 0 !== H ? H : 0, {
    currentRank: w
  } = k;
  return V = k.userId === R ? g.NW.formatToPlainString(g.t["eU+JxM"], {
    rank: w
  }) : g.NW.formatToPlainString(g.t["8BLSQ0"], {
    rank: w,
    username: G
  }), (0, t.jsxs)(c.Zb, {
    selected: p,
    children: [(0, t.jsxs)(c.e$, {
      children: [(0, t.jsx)(_, {
        application: T
      }), (0, t.jsx)(r.LZC, {
        size: 2
      }), (0, t.jsx)(c.ll, {
        children: V
      }), (0, t.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: (0, t.jsx)(x.DC, {
          value: S,
          statisticId: D
        })
      })]
    }), (0, t.jsx)(v.Z, {
      user: P,
      rank: w
    })]
  })
}

function M(e) {
  let {
    selected: l,
    application: n
  } = e;
  return (0, t.jsxs)(c.Zb, {
    selected: l,
    children: [(0, t.jsxs)(c.e$, {
      children: [(0, t.jsx)(_, {
        application: n
      }), (0, t.jsx)(r.LZC, {
        size: 2
      }), (0, t.jsx)(c.ll, {
        children: g.NW.string(g.t["t+b0DA"])
      }), (0, t.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: (0, t.jsx)(x.ZR, {
          text: g.NW.string(g.t.zX8HUl)
        })
      })]
    }), (0, t.jsx)(j.Z, {
      color: "#5B5A56",
      children: (0, t.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
        alt: "",
        className: H.emptyStateImage
      })
    })]
  })
}