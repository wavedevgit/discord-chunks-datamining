/** Chunk was on 48909 **/
n.d(t, {
  Z: () => x
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  l = n(481060),
  a = n(835473),
  s = n(297781),
  c = n(443487),
  u = n(314897),
  d = n(594174),
  p = n(626135),
  f = n(5192),
  h = n(873128),
  _ = n(246627),
  m = n(709737),
  b = n(69589),
  g = n(531501),
  E = n(981631),
  v = n(701488),
  O = n(388032),
  y = n(466722);

function C(e) {
  let {
    application: t
  } = e, n = t.getIconURL(v.Si.LARGE), i = null == n ? null : (0, r.jsx)("img", {
    className: y.gameIcon,
    src: n,
    "aria-hidden": !0,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: y.gameTitleContainer,
    children: [i, (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: y.gameTitle,
      children: t.name
    })]
  })
}

function x(e) {
  var t, n, g, v, y;
  let x, {
      selected: S,
      channel: I,
      entry: P
    } = e,
    j = I.guild_id,
    T = (0, h.Z)({
      guildId: j,
      leaderboardId: P.extra.leaderboard_id,
      intervalOffset: 0
    }),
    {
      rankChanges: L
    } = (0, _.Z)({
      guildId: j,
      leaderboardId: P.extra.leaderboard_id,
      intervalStart: null !== (v = null == T ? void 0 : T.interval_start) && void 0 !== v ? v : ""
    }),
    w = (0, o.e7)([u.default], () => u.default.getId()),
    [A, R] = i.useMemo(() => {
      let e = L.find(e => e.userId === w),
        t = L[0],
        n = null != e ? e : t,
        r = null == T ? void 0 : T.users.find(e => e.user_id === (null == n ? void 0 : n.userId));
      return [n, r]
    }, [T, L, w]),
    k = (0, o.e7)([d.default], () => d.default.getUser(null == A ? void 0 : A.userId)),
    M = f.ZP.getName(j, void 0, k);
  ! function(e) {
    let {
      leaderboard: t,
      guildId: n
    } = e, r = null == t ? void 0 : t.leaderboard_id;
    i.useEffect(() => {
      null != r && p.default.track(E.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
        leaderboard_id: r,
        guild_id: n
      })
    }, [r, n])
  }({
    leaderboard: T,
    guildId: j
  });
  let Z = (0, a.q)(null == T ? void 0 : null === (t = T.settings) || void 0 === t ? void 0 : t.application_id);
  if (null == T || null == Z) return null;
  if (0 === T.users.length || null == A || null == k) return (0, r.jsx)(N, {
    application: Z,
    selected: S
  });
  let {
    sort_by_statistic_id: D
  } = T.guild_settings, U = null !== (y = null == R ? void 0 : null === (g = R.statistics) || void 0 === g ? void 0 : null === (n = g[D]) || void 0 === n ? void 0 : n.value) && void 0 !== y ? y : 0, {
    currentRank: V
  } = A;
  return x = A.userId === w ? O.NW.formatToPlainString(O.t["eU+JxM"], {
    rank: V
  }) : O.NW.formatToPlainString(O.t["8BLSQ0"], {
    rank: V,
    username: M
  }), (0, r.jsxs)(c.Zb, {
    selected: S,
    children: [(0, r.jsxs)(c.e$, {
      children: [(0, r.jsx)(C, {
        application: Z
      }), (0, r.jsx)(l.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: x
      }), (0, r.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: (0, r.jsx)(m.DC, {
          value: U,
          statisticId: D
        })
      })]
    }), (0, r.jsx)(b.Z, {
      user: k,
      rank: V
    })]
  })
}

function N(e) {
  let {
    selected: t,
    application: n
  } = e;
  return (0, r.jsxs)(c.Zb, {
    selected: t,
    children: [(0, r.jsxs)(c.e$, {
      children: [(0, r.jsx)(C, {
        application: n
      }), (0, r.jsx)(l.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: O.NW.string(O.t["t+b0DA"])
      }), (0, r.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: (0, r.jsx)(m.ZR, {
          text: O.NW.string(O.t.zX8HUl)
        })
      })]
    }), (0, r.jsx)(g.Z, {
      color: "#5B5A56",
      children: (0, r.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
        alt: "",
        className: y.emptyStateImage
      })
    })]
  })
}