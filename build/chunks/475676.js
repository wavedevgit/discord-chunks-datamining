/** Chunk was on 98697 **/
n.d(t, {
  Z: () => C
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
  _ = n(626135),
  p = n(5192),
  E = n(873128),
  f = n(246627),
  h = n(709737),
  m = n(69589),
  b = n(531501),
  O = n(981631),
  g = n(701488),
  N = n(388032),
  I = n(466722);

function T(e) {
  let {
    application: t
  } = e, n = t.getIconURL(g.Si.LARGE), i = null == n ? null : (0, r.jsx)("img", {
    className: I.gameIcon,
    src: n,
    "aria-hidden": !0,
    alt: ""
  });
  return (0, r.jsxs)("div", {
    className: I.gameTitleContainer,
    children: [i, (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: I.gameTitle,
      children: t.name
    })]
  })
}

function C(e) {
  var t, n, b, g, I;
  let C, {
      selected: y,
      channel: v,
      entry: P
    } = e,
    R = v.guild_id,
    A = (0, E.Z)({
      guildId: R,
      leaderboardId: P.extra.leaderboard_id,
      intervalOffset: 0
    }),
    {
      rankChanges: x
    } = (0, f.Z)({
      guildId: R,
      leaderboardId: P.extra.leaderboard_id,
      intervalStart: null !== (g = null == A ? void 0 : A.interval_start) && void 0 !== g ? g : ""
    }),
    D = (0, o.e7)([u.default], () => u.default.getId()),
    [j, L] = i.useMemo(() => {
      let e = x.find(e => e.userId === D),
        t = x[0],
        n = null != e ? e : t,
        r = null == A ? void 0 : A.users.find(e => e.user_id === (null == n ? void 0 : n.userId));
      return [n, r]
    }, [A, x, D]),
    k = (0, o.e7)([d.default], () => d.default.getUser(null == j ? void 0 : j.userId)),
    M = p.ZP.getName(R, void 0, k);
  ! function(e) {
    let {
      leaderboard: t,
      guildId: n
    } = e, r = null == t ? void 0 : t.leaderboard_id;
    i.useEffect(() => {
      null != r && _.default.track(O.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
        leaderboard_id: r,
        guild_id: n
      })
    }, [r, n])
  }({
    leaderboard: A,
    guildId: R
  });
  let Z = (0, a.q)(null == A ? void 0 : null === (t = A.settings) || void 0 === t ? void 0 : t.application_id);
  if (null == A || null == Z) return null;
  if (0 === A.users.length || null == j || null == k) return (0, r.jsx)(S, {
    application: Z,
    selected: y
  });
  let {
    sort_by_statistic_id: U
  } = A.guild_settings, w = null !== (I = null == L ? void 0 : null === (b = L.statistics) || void 0 === b ? void 0 : null === (n = b[U]) || void 0 === n ? void 0 : n.value) && void 0 !== I ? I : 0, {
    currentRank: V
  } = j;
  return C = j.userId === D ? N.NW.formatToPlainString(N.t["eU+JxM"], {
    rank: V
  }) : N.NW.formatToPlainString(N.t["8BLSQ0"], {
    rank: V,
    username: M
  }), (0, r.jsxs)(c.Zb, {
    selected: y,
    children: [(0, r.jsxs)(c.e$, {
      children: [(0, r.jsx)(T, {
        application: Z
      }), (0, r.jsx)(l.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: C
      }), (0, r.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: (0, r.jsx)(h.DC, {
          value: w,
          statisticId: U
        })
      })]
    }), (0, r.jsx)(m.Z, {
      user: k,
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
      }), (0, r.jsx)(l.LZC, {
        size: 2
      }), (0, r.jsx)(c.ll, {
        children: N.NW.string(N.t["t+b0DA"])
      }), (0, r.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: (0, r.jsx)(h.ZR, {
          text: N.NW.string(N.t.zX8HUl)
        })
      })]
    }), (0, r.jsx)(b.Z, {
      color: "#5B5A56",
      children: (0, r.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
        alt: "",
        className: I.emptyStateImage
      })
    })]
  })
}