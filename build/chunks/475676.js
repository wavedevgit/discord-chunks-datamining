/** Chunk was on 74976 **/
t.d(l, {
  Z: () => j
}), t(388685);
var n = t(200651),
  L = t(192379),
  i = t(442837),
  d = t(481060),
  s = t(835473),
  r = t(297781),
  a = t(443487),
  C = t(314897),
  c = t(594174),
  u = t(626135),
  o = t(5192),
  H = t(873128),
  Z = t(246627),
  V = t(709737),
  M = t(69589),
  x = t(531501),
  h = t(981631),
  _ = t(701488),
  f = t(388032),
  m = t(24158);

function v(e) {
  let {
    application: l
  } = e, t = l.getIconURL(_.Si.LARGE), L = null == t ? null : (0, n.jsx)("img", {
    className: m.gameIcon,
    src: t,
    "aria-hidden": !0,
    alt: ""
  });
  return (0, n.jsxs)("div", {
    className: m.gameTitleContainer,
    children: [L, (0, n.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: m.gameTitle,
      children: l.name
    })]
  })
}

function j(e) {
  var l, t, x, _, m;
  let j, {
      selected: p,
      channel: I,
      entry: b
    } = e,
    E = I.guild_id,
    N = (0, H.Z)({
      guildId: E,
      leaderboardId: b.extra.leaderboard_id,
      intervalOffset: 0
    }),
    {
      rankChanges: R
    } = (0, Z.Z)({
      guildId: E,
      leaderboardId: b.extra.leaderboard_id,
      intervalStart: null != (_ = null == N ? void 0 : N.interval_start) ? _ : ""
    }),
    k = (0, i.e7)([C.default], () => C.default.getId()),
    [A, D] = L.useMemo(() => {
      let e = R.find(e => e.userId === k),
        l = R[0],
        t = null != e ? e : l,
        n = null == N ? void 0 : N.users.find(e => e.user_id === (null == t ? void 0 : t.userId));
      return [t, n]
    }, [N, R, k]),
    y = (0, i.e7)([c.default], () => c.default.getUser(null == A ? void 0 : A.userId)),
    S = o.ZP.getName(E, void 0, y);
  ! function(e) {
    let {
      leaderboard: l,
      guildId: t
    } = e, n = null == l ? void 0 : l.leaderboard_id;
    L.useEffect(() => {
      null != n && u.default.track(h.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
        leaderboard_id: n,
        guild_id: t
      })
    }, [n, t])
  }({
    leaderboard: N,
    guildId: E
  });
  let T = (0, s.q)(null == N || null == (l = N.settings) ? void 0 : l.application_id);
  if (null == N || null == T) return null;
  if (0 === N.users.length || null == A || null == y) return (0, n.jsx)(g, {
    application: T,
    selected: p
  });
  let {
    sort_by_statistic_id: G
  } = N.guild_settings, w = null != (m = null == D || null == (x = D.statistics) || null == (t = x[G]) ? void 0 : t.value) ? m : 0, {
    currentRank: P
  } = A;
  return j = A.userId === k ? f.NW.formatToPlainString(f.t["eU+JxM"], {
    rank: P
  }) : f.NW.formatToPlainString(f.t["8BLSQ0"], {
    rank: P,
    username: S
  }), (0, n.jsxs)(a.Zb, {
    selected: p,
    children: [(0, n.jsxs)(a.e$, {
      children: [(0, n.jsx)(v, {
        application: T
      }), (0, n.jsx)(d.LZC, {
        size: 2
      }), (0, n.jsx)(a.ll, {
        children: j
      }), (0, n.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: (0, n.jsx)(V.DC, {
          value: w,
          statisticId: G
        })
      })]
    }), (0, n.jsx)(M.Z, {
      user: y,
      rank: P
    })]
  })
}

function g(e) {
  let {
    selected: l,
    application: t
  } = e;
  return (0, n.jsxs)(a.Zb, {
    selected: l,
    children: [(0, n.jsxs)(a.e$, {
      children: [(0, n.jsx)(v, {
        application: t
      }), (0, n.jsx)(d.LZC, {
        size: 2
      }), (0, n.jsx)(a.ll, {
        children: f.NW.string(f.t["t+b0DA"])
      }), (0, n.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: (0, n.jsx)(V.ZR, {
          text: f.NW.string(f.t.zX8HUl)
        })
      })]
    }), (0, n.jsx)(x.Z, {
      color: "#5B5A56",
      children: (0, n.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
        alt: "",
        className: m.emptyStateImage
      })
    })]
  })
}