/** Chunk was on 65936 **/
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  s = n(835473),
  a = n(297781),
  c = n(443487),
  u = n(314897),
  d = n(594174),
  _ = n(626135),
  E = n(5192),
  p = n(873128),
  m = n(246627),
  h = n(709737),
  f = n(69589),
  g = n(531501),
  N = n(981631),
  O = n(701488),
  I = n(388032),
  b = n(498322);

function T(e) {
  let {
    application: t
  } = e, n = t.getIconURL(O.Si.LARGE), i = null == n ? null : (0, r.jsx)("img", {
    className: b.gameIcon,
    src: n,
    "aria-hidden": !0,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: b.gameTitleContainer,
    children: [i, (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: b.gameTitle,
      children: t.name
    })]
  })
}

function C(e) {
  var t, n, g, O, b;
  let C, {
      selected: y,
      channel: P,
      entry: R
    } = e,
    A = P.guild_id,
    v = (0, p.Z)({
      guildId: A,
      leaderboardId: R.extra.leaderboard_id,
      intervalOffset: 0
    }),
    {
      rankChanges: x
    } = (0, m.Z)({
      guildId: A,
      leaderboardId: R.extra.leaderboard_id,
      intervalStart: null !== (O = null == v ? void 0 : v.interval_start) && void 0 !== O ? O : ""
    }),
    D = (0, l.e7)([u.default], () => u.default.getId()),
    [L, k] = i.useMemo(() => {
      let e = x.find(e => e.userId === D),
        t = x[0],
        n = null != e ? e : t,
        r = null == v ? void 0 : v.users.find(e => e.user_id === (null == n ? void 0 : n.userId));
      return [n, r]
    }, [v, x, D]),
    j = (0, l.e7)([d.default], () => d.default.getUser(null == L ? void 0 : L.userId)),
    M = E.ZP.getName(A, void 0, j);
  ! function(e) {
    let {
      leaderboard: t,
      guildId: n
    } = e, r = null == t ? void 0 : t.leaderboard_id;
    i.useEffect(() => {
      null != r && _.default.track(N.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
        leaderboard_id: r,
        guild_id: n
      })
    }, [r, n])
  }({
    leaderboard: v,
    guildId: A
  });
  let Z = (0, s.q)(null == v ? void 0 : null === (t = v.settings) || void 0 === t ? void 0 : t.application_id);
  if (null == v || null == Z) return null;
  if (0 === v.users.length || null == L || null == j) return (0, r.jsx)(S, {
    application: Z,
    selected: y
  });
  let {
    sort_by_statistic_id: U
  } = v.guild_settings, w = null !== (b = null == k ? void 0 : null === (g = k.statistics) || void 0 === g ? void 0 : null === (n = g[U]) || void 0 === n ? void 0 : n.value) && void 0 !== b ? b : 0, {
    currentRank: V
  } = L;
  return C = L.userId === D ? I.NW.formatToPlainString(I.t["eU+JxM"], {
    rank: V
  }) : I.NW.formatToPlainString(I.t["8BLSQ0"], {
    rank: V,
    username: M
  }), (0, r.jsxs)(c.Zb, {
    selected: y,
    children: [(0, r.jsxs)(c.e$, {
      children: [(0, r.jsx)(T, {
        application: Z
      }), (0, r.jsx)(o.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: C
      }), (0, r.jsx)(a.Gk, {
        location: a.Gt.CARD,
        children: (0, r.jsx)(h.DC, {
          value: w,
          statisticId: U
        })
      })]
    }), (0, r.jsx)(f.Z, {
      user: j,
      rank: V
    })]
  })
}

function S(e) {
  let {
    selected: t,
    application: n
  } = e;
  return (0, r.jsxs)(c.Zb, {
    selected: t,
    children: [(0, r.jsxs)(c.e$, {
      children: [(0, r.jsx)(T, {
        application: n
      }), (0, r.jsx)(o.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: I.NW.string(I.t["t+b0DA"])
      }), (0, r.jsx)(a.Gk, {
        location: a.Gt.CARD,
        children: (0, r.jsx)(h.ZR, {
          text: I.NW.string(I.t.zX8HUl)
        })
      })]
    }), (0, r.jsx)(g.Z, {
      color: "#5B5A56",
      children: (0, r.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
        alt: "",
        className: b.emptyStateImage
      })
    })]
  })
}