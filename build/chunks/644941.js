/** Chunk was on 4493 **/
r.d(t, {
  default: () => Q
}), r(47120), r(26686);
var n = r(200651),
  a = r(192379),
  i = r(120356),
  o = r.n(i),
  l = r(913527),
  s = r.n(l),
  c = r(705512),
  u = r(442837),
  d = r(481060),
  p = r(224706),
  m = r(493773),
  f = r(835473),
  g = r(168551),
  _ = r(485267),
  b = r(561308),
  h = r(669764),
  O = r(706454),
  y = r(768581),
  v = r(814225),
  j = r(709054),
  x = r(810568),
  P = r(998058),
  N = r(839392),
  I = r(567409),
  E = r(774073),
  w = r(426482),
  C = r(715318),
  S = r(38516),
  T = r(891949),
  A = r(252547),
  k = r(484527),
  W = r(131033),
  M = r(296768),
  L = r(978313),
  D = r(206583),
  R = r(388032),
  Z = r(384370);
let G = () => (0, n.jsxs)("div", {
  className: Z.gameBadge,
  children: [(0, n.jsx)(d.YqE, {
    size: "xxs"
  }), (0, n.jsx)(d.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: R.NW.string(R.t.kAlUs7)
  })]
});

function B(e) {
  var t;
  let {
    detectedGame: r,
    application: i,
    entries: l,
    viewId: u
  } = e, p = a.useMemo(() => null == r ? void 0 : r.genres.map(v.P3).join(", "), [r]), m = a.useMemo(() => {
    if (null == r) return "";
    let {
      artwork: e,
      screenshots: t
    } = r;
    if (e.length > 0) {
      let t = Math.floor(Math.random() * (e.length - 1));
      return e[t]
    }
    if (t.length > 0) {
      let e = Math.floor(Math.random() * (t.length - 1));
      return t[e]
    }
    return ""
  }, [r]), f = null == i ? void 0 : i.getIconURL(160, y.$k ? "webp" : "png"), g = j.default.extractTimestamp(i.id), _ = s()().diff(s()(g), "days") <= D.G, h = l.some(e => (0, b.ig)(e) === c.o.GLOBAL), O = null !== (t = r.name) && void 0 !== t ? t : null == i ? void 0 : i.name;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: o()(Z.gameArtHero),
      style: {
        backgroundImage: 'url("'.concat(m, '")')
      }
    }), (0, n.jsxs)("div", {
      className: o()(Z.content, Z.column, Z.gapLg, Z.headerInfo),
      children: [(0, n.jsxs)("div", {
        className: Z.coverArtRow,
        children: [(0, n.jsx)("div", {
          className: Z.logoWrapper,
          children: (0, n.jsx)(w.C, {
            game: r,
            application: i,
            className: Z.logo,
            size: w.Z.LARGE
          })
        }), (0, n.jsx)(C.Z, {
          applicationId: i.id,
          viewId: u,
          className: Z.overflowMenu
        })]
      }), (0, n.jsx)("div", {
        className: o()(Z.row, Z.gapSm, Z.gameDetails),
        children: (0, n.jsxs)("div", {
          children: [(0, n.jsx)(d.X6q, {
            variant: "heading-xl/bold",
            children: O
          }), (0, n.jsxs)("div", {
            className: o()(Z.row, Z.gapSm),
            children: [null != f && (0, n.jsx)("img", {
              className: Z.gameIcon,
              src: f,
              height: 16,
              alt: R.NW.formatToPlainString(R.t["nh+jWl"], {
                game: O
              })
            }), (0, n.jsx)(d.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: p
            }), _ && (0, n.jsx)(d.Text, {
              variant: "eyebrow",
              className: Z.newBadge,
              children: R.NW.string(R.t.y2b7CA)
            }), h && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, n.jsx)(G, {})]
            })]
          })]
        })
      })]
    })]
  })
}

function K(e) {
  var t;
  let {
    detectedGame: r,
    application: a,
    entries: i,
    officialGuildInvite: o,
    similarGames: l,
    similarGamesError: s,
    onClose: c,
    viewId: u,
    trackAction: d
  } = e;
  return (0, n.jsxs)("div", {
    className: Z.sections,
    children: [(0, n.jsx)(A.Z, {
      entries: i,
      viewId: u,
      officialGuildId: null == o ? void 0 : null === (t = o.guild) || void 0 === t ? void 0 : t.id,
      onClose: c
    }), (0, n.jsx)(T.Z, {
      detectedGame: r,
      trackAction: d
    }), (0, n.jsx)(M.Z, {
      applicationId: a.id,
      onClose: c,
      trackAction: d,
      similarGames: l,
      similarGamesError: s
    })]
  })
}

function H(e) {
  let {
    detectedGame: t,
    setOfficialGuildInvite: r,
    trackAction: i,
    onClose: l
  } = e, s = a.useCallback(e => {
    r(e)
  }, [r]);
  return (0, n.jsxs)("div", {
    className: o()(Z.sidebar, Z.column, Z.gapLg),
    children: [(0, n.jsx)(d.X6q, {
      variant: "heading-md/bold",
      children: R.NW.string(R.t.CI0vSE)
    }), (0, n.jsxs)("div", {
      className: Z.sections,
      children: [(0, n.jsx)(L.Z, {
        detectedGame: t,
        trackAction: i
      }), (0, n.jsx)(k.Z, {
        detectedGame: t,
        trackClick: i,
        onInviteResolved: s,
        closeModal: l
      }), (0, n.jsx)(S.Z, {
        detectedGame: t,
        trackClick: i
      }), (0, n.jsx)(W.Z, {
        detectedGame: t
      })]
    })]
  })
}
let F = e => e.filter(E.z6).slice(0, 5),
  Q = e => {
    var t;
    let {
      applicationId: r,
      source: i,
      sourceUserId: l,
      transitionState: s,
      onClose: c,
      appContext: y
    } = e, {
      clientThemesClassName: v
    } = (0, g.ZP)(), j = (0, u.e7)([O.default], () => O.default.locale), E = a.useMemo(() => (0, x.fP)(), []), w = (0, u.Wu)([N.Z], () => {
      var e;
      return (null !== (e = N.Z.getSimilarGames(r)) && void 0 !== e ? e : []).slice(0, 25)
    }), [C, S] = a.useState(null), T = (0, I.Ns)(r), [A, k] = a.useState(null), W = (0, f.q)(r), M = (0, u.e7)([h.Z], () => h.Z.getGame(r)), L = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : null == W ? void 0 : W.name, D = (e, t) => {
      var n;
      (0, x.UE)({
        gameName: null != L ? L : "",
        applicationId: r,
        action: e,
        similarGameId: t,
        viewId: E,
        officialGuildId: null == A ? void 0 : null === (n = A.guild) || void 0 === n ? void 0 : n.id
      })
    };
    return ((0, m.ZP)(() => {
      (0, x.IS)({
        source: i,
        viewId: E,
        applicationId: r,
        gameName: null != L ? L : "",
        authorId: l
      }), (0, _.Jn)()
    }), (0, f.Z)(w), a.useEffect(() => {
      j.startsWith("en") || (null == M ? void 0 : M.summaryLocalized) != null || p.Z.getDetectableGamesSupplemental([r], {
        forceFetch: !0
      })
    }, [r, null == M ? void 0 : M.summaryLocalized, j]), a.useEffect(() => {
      (async () => {
        if (0 === w.length) {
          S(null);
          try {
            await (0, P.i)(r)
          } catch (e) {
            S(e)
          }
        }
      })()
    }, [r, w]), (0, m.ZP)(() => () => {
      var e;
      let t = Date.now(),
        n = T.map(e => {
          let r = (0, b.kr)(e) ? (0, b.T_)(e, t) : (0, b.GL)(e, j);
          return JSON.stringify({
            item_id: e.id,
            trait: e.traits,
            time_played: r
          })
        });
      (0, x.wz)({
        viewId: E,
        applicationId: r,
        gameName: null != L ? L : "",
        playedFriendIds: T.map(e => e.author_id),
        playedFriendsData: n,
        similarGames: F(w),
        officialGuildId: null == A ? void 0 : null === (e = A.guild) || void 0 === e ? void 0 : e.id
      })
    }), null == M || null == W) ? null : (0, n.jsx)(d.Y0X, {
      transitionState: s,
      size: d.CgR.DYNAMIC,
      className: o()(v, Z.gameProfileModal),
      children: (0, n.jsxs)(d.Ttm, {
        orientation: "auto",
        children: [(0, n.jsx)(B, {
          detectedGame: M,
          application: W,
          entries: T,
          viewId: E,
          trackAction: D
        }), (0, n.jsx)(d.y5t, {
          children: (0, n.jsxs)("div", {
            className: o()(Z.content, Z.mainContent),
            children: [(0, n.jsx)(K, {
              detectedGame: M,
              application: W,
              entries: T,
              officialGuildInvite: A,
              similarGames: w,
              similarGamesError: C,
              onClose: c,
              viewId: E,
              trackAction: D
            }), (0, n.jsx)(H, {
              detectedGame: M,
              setOfficialGuildInvite: k,
              trackAction: D,
              onClose: c,
              appContext: y
            })]
          })
        })]
      })
    })
  }