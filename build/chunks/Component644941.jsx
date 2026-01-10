/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => es
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk88817 = require("./88817.js"),
  Chunk705512 = require("./705512.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk493773 = require("./493773.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk835473 = require("./835473.js"),
  Chunk999203 = require("./999203.js"),
  Chunk485267 = require("./485267.js"),
  Chunk561308 = require("./561308.js"),
  Chunk669764 = require("./669764.js"),
  Chunk171516 = require("./171516.js"),
  Chunk892001 = require("./892001.js"),
  Chunk706454 = require("./706454.js"),
  Chunk768581 = require("./768581.js"),
  Chunk814225 = require("./814225.js"),
  Chunk709054 = require("./709054.js"),
  Chunk624138 = require("./624138.js"),
  Chunk810568 = require("./810568.js"),
  Chunk998058 = require("./998058.js"),
  Chunk839392 = require("./839392.js"),
  Chunk389430 = require("./389430.js"),
  Chunk567409 = require("./567409.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk715318 = require("./715318.jsx"),
  Chunk108733 = require("./108733.jsx"),
  Chunk38516 = require("./38516.jsx"),
  Chunk891949 = require("./891949.jsx"),
  Chunk252547 = require("./252547.jsx"),
  Chunk484527 = require("./484527.jsx"),
  Chunk131033 = require("./131033.jsx"),
  Chunk296768 = require("./296768.jsx"),
  Chunk978313 = require("./978313.jsx"),
  Chunk206583 = require("./206583.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452379 = require("./452379.js");

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}
let Q = () => (0, a.jsxs)("div", {
    className: q.gameBadge,
    children: [(0, a.jsx)(g.YqE, {
      size: "xxs"
    }), (0, a.jsx)(g.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: V.intl.string(V.t.kAlUsy)
    })]
  }),
  ee = Chunk473749.createContext(true);

function et(e) {
  var t;
  let {
    detectedGame: n,
    application: r,
    entries: o
  } = e, c = i.useMemo(() => null == n ? true : n.genres.map(k.P3).join(", "), [n]), d = i.useMemo(() => {
    if (null == n) return "";
    let {
      artwork: e,
      screenshots: t
    } = n;
    if (e.length > 0) {
      let t = Math.floor(Math.random() * (e.length - 1));
      return e[t]
    }
    if (t.length > 0) {
      let e = Math.floor(Math.random() * (t.length - 1));
      return t[e]
    }
    return ""
  }, [n]), m = (0, A.Ew)(n.iconHash) ? null == r ? true : r.getIconURL(160, N.$k ? "webp" : "png") : N.ZP.getGameAssetURL({
    id: n.applicationId,
    hash: n.iconHash,
    size: 160,
    format: N.$k ? "webp" : "png"
  }), f = G.default.extractTimestamp(r.id), p = s()().diff(s()(f), "days") <= J.G, x = o.some(e => (0, w.ig)(e) === u.o.GLOBAL), v = null != (t = n.name) ? t : null == r ? true : r.name;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: q.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(d, '")')
      }
    }), (0, a.jsxs)("div", {
      className: l()(q.content, q.column, q.gapLg, q.headerInfo),
      children: [(0, a.jsxs)("div", {
        className: q.coverArtRow,
        children: [(0, a.jsx)("div", {
          className: q.logoWrapper,
          children: (0, a.jsx)(R.C, {
            game: n,
            application: r,
            className: q.logo,
            size: R.Z.LARGE
          })
        }), (0, a.jsx)(z.Z, {
          applicationId: r.id,
          className: q.overflowMenu
        })]
      }), (0, a.jsx)("div", {
        className: l()(q.row, q.gapSm, q.gameDetails),
        children: (0, a.jsxs)("div", {
          children: [(0, a.jsx)(g.Heading, {
            variant: "heading-xl/bold",
            children: v
          }), (0, a.jsxs)("div", {
            className: l()(q.row, q.gapSm),
            children: [null != m && (0, a.jsx)("img", {
              className: q.gameIcon,
              src: m,
              height: 16,
              alt: V.intl.formatToPlainString(V.t["nh+jWk"], {
                game: v
              })
            }), (0, a.jsx)(g.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: c
            }), p && (0, a.jsx)(g.Text, {
              variant: "eyebrow",
              className: q.newBadge,
              children: V.intl.string(V.t.y2b7CA)
            }), x && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(g.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, a.jsx)(Q, {})]
            })]
          })]
        })
      })]
    })]
  })
}

function en(e) {
  var t;
  let {
    detectedGame: n,
    application: i,
    entries: r,
    officialGuildInvite: l,
    similarGames: o,
    similarGamesError: s,
    onClose: c,
    viewId: d,
    trackAction: u
  } = e;
  return (0, a.jsxs)("div", {
    className: q.sections,
    children: [(0, a.jsx)(U.Z, {
      entries: r,
      viewId: d,
      officialGuildId: null == l || null == (t = l.guild) ? true : t.id,
      onClose: c
    }), (0, a.jsx)(W.Z, {
      detectedGame: n,
      trackAction: u
    }), (0, a.jsx)(K.Z, {
      applicationId: i.id,
      onClose: c,
      trackAction: u,
      similarGames: o,
      similarGamesError: s
    })]
  })
}

function ea(e) {
  let {
    onClose: t,
    onCloudPlayClick: n,
    analyticsLocations: i
  } = e;
  return (0, b.Z)({
    name: c.ImpressionNames.CLOUD_PLAY_CTA,
    type: c.ImpressionTypes.VIEW,
    properties: {
      location_stack: i
    }
  }), (0, a.jsx)(f.u, {
    text: V.intl.string(V.t.JVwWva),
    position: "top",
    children: (0, a.jsx)(g.Button, {
      icon: g.v3n,
      text: V.intl.string(V.t["jaYS/h"]),
      variant: "overlay-secondary",
      onClick: () => {
        t(), n()
      },
      fullWidth: true
    })
  })
}

function ei(e) {
  let {
    detectedGame: t,
    onSetOfficialGuildInvite: n,
    officialGuildInvite: r,
    trackAction: o,
    onClose: s,
    applicationId: c
  } = e, d = i.useCallback(() => {
    s(), (0, C.closeUserProfileModal)()
  }, [s]), {
    analyticsLocations: u
  } = (0, j.ZP)(h.Z.GAME_PROFILE), {
    isCloudPlayButtonShown: m,
    onCloudPlayClick: f
  } = function(e) {
    let {
      applicationId: t,
      analyticsLocations: n
    } = e, a = (0, y.q)(t), i = (0, v.Z)({
      application: a,
      analyticsLocations: n
    });
    return {
      onCloudPlayClick: i,
      isCloudPlayButtonShown: !(0, S.F)(t) && null != i
    }
  }({
    applicationId: c,
    analyticsLocations: u
  });
  return (0, a.jsxs)("div", {
    className: l()(q.sidebar, q.column, q.gapLg),
    children: [(0, a.jsxs)("div", {
      className: q.buttonsContainer,
      children: [(0, a.jsx)(F.Z, {
        invite: r,
        trackClick: o,
        closeModal: d
      }), m && null != f && (0, a.jsx)(ea, {
        onClose: d,
        onCloudPlayClick: f,
        analyticsLocations: u
      })]
    }), (0, a.jsx)(g.Heading, {
      variant: "heading-md/bold",
      children: V.intl.string(V.t.CI0vSJ)
    }), (0, a.jsxs)("div", {
      className: q.sections,
      children: [(0, a.jsx)(X.Z, {
        detectedGame: t,
        trackAction: o
      }), (0, a.jsx)(B.Z, {
        detectedGame: t,
        trackClick: o,
        onInviteResolved: n,
        closeModal: d
      }), (0, a.jsx)(H.Z, {
        detectedGame: t,
        trackClick: o
      }), (0, a.jsx)(Y.Z, {
        detectedGame: t
      }), (0, a.jsx)(g.Text, {
        variant: "text-xxs/normal",
        children: V.intl.format(V.t.pch2Jw, {
          igdbLink: J.$f
        })
      })]
    })]
  })
}

function er(e) {
  var t;
  let {
    applicationId: n,
    source: r,
    sourceUserId: o,
    transitionState: s,
    onClose: c,
    appContext: d,
    trackExternalAction: u
  } = e, {
    clientThemesClassName: f
  } = (0, I.ZP)(), v = (0, m.e7)([E.default], () => E.default.locale), h = i.useMemo(() => (0, T.fP)(), []), j = (0, m.Wu)([M.Z], () => {
    var e;
    return (null != (e = M.Z.getSimilarGames(n)) ? e : []).slice(0, 25)
  }), [b, S] = i.useState(null), C = (0, L.N)(n), [N, k] = i.useState(null), G = (0, y.q)(n), A = (0, m.e7)([P.Z], () => P.Z.getGame(n)), Z = null != (t = null == A ? true : A.name) ? t : null == G ? true : G.name, R = (e, t) => {
    var a;
    (0, T.UE)({
      gameName: null != Z ? Z : "",
      applicationId: n,
      action: e,
      similarGameId: t,
      viewId: h,
      officialGuildId: null == N || null == (a = N.guild) ? true : a.id
    })
  };
  return ((0, x.ZP)(() => {
    (0, T.IS)({
      source: r,
      viewId: h,
      applicationId: n,
      gameName: null != Z ? Z : "",
      authorId: o,
      profileType: T.j7.FullProfile
    }), (0, O.Jn)()
  }), (0, y.Z)(j), i.useEffect(() => {
    v.startsWith("en") || (null == A ? true : A.summaryLocalized) != null || p.Z.getDetectableGamesSupplemental([n], {
      forceFetch: true
    })
  }, [n, null == A ? true : A.summaryLocalized, v]), i.useEffect(() => {
    (async () => {
      if (0 === j.length) {
        S(null);
        try {
          await (0, _.i)(n)
        } catch (e) {
          S(e)
        }
      }
    })()
  }, [n, j]), (0, x.ZP)(() => () => {
    var e;
    let t = Date.now(),
      a = C.map(e => {
        let n = (0, w.kr)(e) ? (0, w.T_)(e, t) : (0, w.GL)(e, v);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: n
        })
      });
    (0, T.wz)({
      viewId: h,
      applicationId: n,
      gameName: null != Z ? Z : "",
      playedFriendIds: C.map(e => e.author_id),
      playedFriendsData: a,
      similarGames: j.filter(D.z6).slice(0, 5),
      officialGuildId: null == N || null == (e = N.guild) ? true : e.id
    })
  }), null == A || null == G) ? null : (0, a.jsxs)(g.Y0X, {
    "data-migration-pending": true,
    transitionState: s,
    size: g.CgR.DYNAMIC,
    className: l()(f, q.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: [(0, a.jsxs)(g.Ttm, {
      orientation: "auto",
      children: [(0, a.jsx)(et, {
        detectedGame: A,
        application: G,
        entries: C,
        trackAction: R
      }), (0, a.jsx)(g.y5t, {
        children: (0, a.jsxs)("div", {
          className: l()(q.content, q.mainContent),
          children: [(0, a.jsx)(en, {
            detectedGame: A,
            application: G,
            entries: C,
            officialGuildInvite: N,
            similarGames: j,
            similarGamesError: b,
            onClose: c,
            viewId: h,
            trackAction: R
          }), (0, a.jsx)(ei, {
            detectedGame: A,
            onSetOfficialGuildInvite: k,
            officialGuildInvite: N,
            trackAction: R,
            onClose: c,
            appContext: d,
            applicationId: n,
            source: r,
            trackExternalAction: u
          })]
        })
      })]
    }), (0, a.jsx)(eo, {})]
  })
}

function el(e) {
  let {
    applicationId: t,
    transitionState: n
  } = e, {
    clientThemesClassName: i
  } = (0, I.ZP)(), r = (0, y.q)(t), l = (0, m.e7)([P.Z], () => P.Z.getGame(t));
  return null == r || null == l ? null : (0, a.jsxs)(g.Y0X, {
    "data-migration-pending": true,
    transitionState: n,
    size: g.CgR.DYNAMIC,
    className: i,
    parentComponent: "GameProfileModal",
    children: [(0, a.jsx)(d.g, {
      gameId: l.applicationId
    }), (0, a.jsx)(eo, {})]
  })
}

function eo() {
  let {
    enabled: e,
    canToggle: t
  } = Z.K.useConfig({
    location: "GameProfileModal"
  }), n = i.useContext(ee);
  return null != n && e && t ? (0, a.jsx)("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transform: "scale(0.5) translate(-50%, -50%)"
    },
    children: (0, a.jsx)(g.Button, {
      variant: "primary",
      onClick: () => n.setIsShowingGameProfileV2(e => !e),
      text: "Toggle Game Profile V1 and V2"
    })
  }) : null
}
let es = function(e) {
  let {
    enabled: t
  } = Z.K.useConfig({
    location: "GameProfileModal"
  }), [n, r] = i.useState(t);
  return (0, a.jsx)(ee.Provider, {
    value: {
      setIsShowingGameProfileV2: r
    },
    children: n ? (0, a.jsx)(el, $({}, e)) : (0, a.jsx)(er, $({}, e))
  })
}