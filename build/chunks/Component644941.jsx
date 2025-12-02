/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => et
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
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
  Chunk226788 = require("./226788.js");
let V = () => (0, Chunk54381.jsxs)("div", {
  className: Chunk226788.gameBadge,
  children: [(0, Chunk54381.jsx)(Chunk481060.YqE, {
    size: "xxs"
  }), (0, Chunk54381.jsx)(Chunk481060.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: Chunk388032.intl.string(Chunk388032.t.kAlUsy)
  })]
});

function q(e) {
  var t;
  let {
    detectedGame: n,
    application: r,
    entries: s
  } = e, c = i.useMemo(() => null == n ? true : n.genres.map(S.P3).join(", "), [n]), u = i.useMemo(() => {
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
  }, [n]), m = (0, k.Ew)(n.iconHash) ? null == r ? true : r.getIconURL(160, P.$k ? "webp" : "png") : P.ZP.getGameAssetURL({
    id: n.applicationId,
    hash: n.iconHash,
    size: 160,
    format: P.$k ? "webp" : "png"
  }), f = C.default.extractTimestamp(r.id), p = o()().diff(o()(f), "days") <= K.G, x = s.some(e => (0, y.ig)(e) === d.o.GLOBAL), h = null != (t = n.name) ? t : null == r ? true : r.name;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: J.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(u, '")')
      }
    }), (0, a.jsxs)("div", {
      className: l()(J.content, J.column, J.gapLg, J.headerInfo),
      children: [(0, a.jsxs)("div", {
        className: J.coverArtRow,
        children: [(0, a.jsx)("div", {
          className: J.logoWrapper,
          children: (0, a.jsx)(L.C, {
            game: n,
            application: r,
            className: J.logo,
            size: L.Z.LARGE
          })
        }), (0, a.jsx)(R.Z, {
          applicationId: r.id,
          className: J.overflowMenu
        })]
      }), (0, a.jsx)("div", {
        className: l()(J.row, J.gapSm, J.gameDetails),
        children: (0, a.jsxs)("div", {
          children: [(0, a.jsx)(g.Heading, {
            variant: "heading-xl/bold",
            children: h
          }), (0, a.jsxs)("div", {
            className: l()(J.row, J.gapSm),
            children: [null != m && (0, a.jsx)("img", {
              className: J.gameIcon,
              src: m,
              height: 16,
              alt: X.intl.formatToPlainString(X.t["nh+jWk"], {
                game: h
              })
            }), (0, a.jsx)(g.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: c
            }), p && (0, a.jsx)(g.Text, {
              variant: "eyebrow",
              className: J.newBadge,
              children: X.intl.string(X.t.y2b7CA)
            }), x && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(g.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, a.jsx)(V, {})]
            })]
          })]
        })
      })]
    })]
  })
}

function $(e) {
  var t;
  let {
    detectedGame: n,
    application: i,
    entries: r,
    officialGuildInvite: l,
    similarGames: s,
    similarGamesError: o,
    onClose: c,
    viewId: d,
    trackAction: u
  } = e;
  return (0, a.jsxs)("div", {
    className: J.sections,
    children: [(0, a.jsx)(H.Z, {
      entries: r,
      viewId: d,
      officialGuildId: null == l || null == (t = l.guild) ? true : t.id,
      onClose: c
    }), (0, a.jsx)(F.Z, {
      detectedGame: n,
      trackAction: u
    }), (0, a.jsx)(B.Z, {
      applicationId: i.id,
      onClose: c,
      trackAction: u,
      similarGames: s,
      similarGamesError: o
    })]
  })
}

function Q(e) {
  let {
    onClose: t,
    onCloudPlayClick: n,
    analyticsLocations: i
  } = e;
  return (0, j.Z)({
    name: c.ImpressionNames.CLOUD_PLAY_CTA,
    type: c.ImpressionTypes.VIEW,
    properties: {
      location_stack: i
    }
  }), (0, a.jsx)(m.u, {
    text: X.intl.string(X.t.JVwWva),
    position: "top",
    children: (0, a.jsx)(g.Button, {
      icon: g.v3n,
      text: X.intl.string(X.t["jaYS/h"]),
      variant: "overlay-secondary",
      onClick: () => {
        t(), n()
      },
      fullWidth: true
    })
  })
}

function ee(e) {
  let {
    detectedGame: t,
    onSetOfficialGuildInvite: n,
    officialGuildInvite: r,
    trackAction: s,
    onClose: o,
    applicationId: c
  } = e, d = i.useCallback(() => {
    o(), (0, w.closeUserProfileModal)()
  }, [o]), {
    analyticsLocations: u
  } = (0, v.ZP)(h.Z.GAME_PROFILE), {
    isCloudPlayButtonShown: m,
    onCloudPlayClick: f
  } = function(e) {
    let {
      applicationId: t,
      analyticsLocations: n
    } = e, a = (0, _.q)(t), i = (0, x.Z)({
      application: a,
      analyticsLocations: n
    });
    return {
      onCloudPlayClick: i,
      isCloudPlayButtonShown: !(0, E.F)(t) && null != i
    }
  }({
    applicationId: c,
    analyticsLocations: u
  });
  return (0, a.jsxs)("div", {
    className: l()(J.sidebar, J.column, J.gapLg),
    children: [(0, a.jsxs)("div", {
      className: J.buttonsContainer,
      children: [(0, a.jsx)(D.Z, {
        invite: r,
        trackClick: s,
        closeModal: d
      }), m && null != f && (0, a.jsx)(Q, {
        onClose: d,
        onCloudPlayClick: f,
        analyticsLocations: u
      })]
    }), (0, a.jsx)(g.Heading, {
      variant: "heading-md/bold",
      children: X.intl.string(X.t.CI0vSJ)
    }), (0, a.jsxs)("div", {
      className: J.sections,
      children: [(0, a.jsx)(Y.Z, {
        detectedGame: t,
        trackAction: s
      }), (0, a.jsx)(W.Z, {
        detectedGame: t,
        trackClick: s,
        onInviteResolved: n,
        closeModal: d
      }), (0, a.jsx)(z.Z, {
        detectedGame: t,
        trackClick: s
      }), (0, a.jsx)(U.Z, {
        detectedGame: t
      }), (0, a.jsx)(g.Text, {
        variant: "text-xxs/normal",
        children: X.intl.format(X.t.pch2Jw, {
          igdbLink: K.$f
        })
      })]
    })]
  })
}
let et = e => {
  var t;
  let {
    applicationId: n,
    source: r,
    sourceUserId: s,
    transitionState: o,
    onClose: c,
    appContext: d,
    trackExternalAction: m
  } = e, {
    clientThemesClassName: x
  } = (0, I.ZP)(), h = (0, u.e7)([N.default], () => N.default.locale), v = i.useMemo(() => (0, A.fP)(), []), j = (0, u.Wu)([G.Z], () => {
    var e;
    return (null != (e = G.Z.getSimilarGames(n)) ? e : []).slice(0, 25)
  }), [E, w] = i.useState(null), P = (0, M.N)(n), [S, C] = i.useState(null), k = (0, _.q)(n), L = (0, u.e7)([O.Z], () => O.Z.getGame(n)), R = null != (t = null == L ? true : L.name) ? t : null == k ? true : k.name, D = (e, t) => {
    var a;
    (0, A.UE)({
      gameName: null != R ? R : "",
      applicationId: n,
      action: e,
      similarGameId: t,
      viewId: v,
      officialGuildId: null == S || null == (a = S.guild) ? true : a.id
    })
  };
  return ((0, p.ZP)(() => {
    (0, A.IS)({
      source: r,
      viewId: v,
      applicationId: n,
      gameName: null != R ? R : "",
      authorId: s,
      profileType: A.j7.FullProfile
    }), (0, b.Jn)()
  }), (0, _.Z)(j), i.useEffect(() => {
    h.startsWith("en") || (null == L ? true : L.summaryLocalized) != null || f.Z.getDetectableGamesSupplemental([n], {
      forceFetch: true
    })
  }, [n, null == L ? true : L.summaryLocalized, h]), i.useEffect(() => {
    (async () => {
      if (0 === j.length) {
        w(null);
        try {
          await (0, T.i)(n)
        } catch (e) {
          w(e)
        }
      }
    })()
  }, [n, j]), (0, p.ZP)(() => () => {
    var e;
    let t = Date.now(),
      a = P.map(e => {
        let n = (0, y.kr)(e) ? (0, y.T_)(e, t) : (0, y.GL)(e, h);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: n
        })
      });
    (0, A.wz)({
      viewId: v,
      applicationId: n,
      gameName: null != R ? R : "",
      playedFriendIds: P.map(e => e.author_id),
      playedFriendsData: a,
      similarGames: j.filter(Z.z6).slice(0, 5),
      officialGuildId: null == S || null == (e = S.guild) ? true : e.id
    })
  }), null == L || null == k) ? null : (0, a.jsx)(g.Y0X, {
    transitionState: o,
    size: g.CgR.DYNAMIC,
    className: l()(x, J.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: (0, a.jsxs)(g.Ttm, {
      orientation: "auto",
      children: [(0, a.jsx)(q, {
        detectedGame: L,
        application: k,
        entries: P,
        trackAction: D
      }), (0, a.jsx)(g.y5t, {
        children: (0, a.jsxs)("div", {
          className: l()(J.content, J.mainContent),
          children: [(0, a.jsx)($, {
            detectedGame: L,
            application: k,
            entries: P,
            officialGuildInvite: S,
            similarGames: j,
            similarGamesError: E,
            onClose: c,
            viewId: v,
            trackAction: D
          }), (0, a.jsx)(ee, {
            detectedGame: L,
            onSetOfficialGuildInvite: C,
            officialGuildInvite: S,
            trackAction: D,
            onClose: c,
            appContext: d,
            applicationId: n,
            source: r,
            trackExternalAction: m
          })]
        })
      })]
    })
  })
}