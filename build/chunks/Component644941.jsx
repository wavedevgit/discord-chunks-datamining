/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => et
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk168551 = require("./168551.js"),
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
let V = () => (0, Chunk951288.jsxs)("div", {
  className: Chunk226788.gameBadge,
  children: [(0, Chunk951288.jsx)(Chunk481060.YqE, {
    size: "xxs"
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
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
  } = e, c = l.useMemo(() => null == n ? true : n.genres.map(C.P3).join(", "), [n]), u = l.useMemo(() => {
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
  }, [n]), m = (0, A.Ew)(n.iconHash) ? null == r ? true : r.getIconURL(160, S.$k ? "webp" : "png") : S.ZP.getGameAssetURL({
    id: n.applicationId,
    hash: n.iconHash,
    size: 160,
    format: S.$k ? "webp" : "png"
  }), g = T.default.extractTimestamp(r.id), p = o()().diff(o()(g), "days") <= K.G, x = s.some(e => (0, b.ig)(e) === d.o.GLOBAL), h = null != (t = n.name) ? t : null == r ? true : r.name;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: J.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(u, '")')
      }
    }), (0, i.jsxs)("div", {
      className: a()(J.content, J.column, J.gapLg, J.headerInfo),
      children: [(0, i.jsxs)("div", {
        className: J.coverArtRow,
        children: [(0, i.jsx)("div", {
          className: J.logoWrapper,
          children: (0, i.jsx)(R.C, {
            game: n,
            application: r,
            className: J.logo,
            size: R.Z.LARGE
          })
        }), (0, i.jsx)(M.Z, {
          applicationId: r.id,
          className: J.overflowMenu
        })]
      }), (0, i.jsx)("div", {
        className: a()(J.row, J.gapSm, J.gameDetails),
        children: (0, i.jsxs)("div", {
          children: [(0, i.jsx)(f.Heading, {
            variant: "heading-xl/bold",
            children: h
          }), (0, i.jsxs)("div", {
            className: a()(J.row, J.gapSm),
            children: [null != m && (0, i.jsx)("img", {
              className: J.gameIcon,
              src: m,
              height: 16,
              alt: X.intl.formatToPlainString(X.t["nh+jWk"], {
                game: h
              })
            }), (0, i.jsx)(f.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: c
            }), p && (0, i.jsx)(f.Text, {
              variant: "eyebrow",
              className: J.newBadge,
              children: X.intl.string(X.t.y2b7CA)
            }), x && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(f.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, i.jsx)(V, {})]
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
    application: l,
    entries: r,
    officialGuildInvite: a,
    similarGames: s,
    similarGamesError: o,
    onClose: c,
    viewId: d,
    trackAction: u
  } = e;
  return (0, i.jsxs)("div", {
    className: J.sections,
    children: [(0, i.jsx)(H.Z, {
      entries: r,
      viewId: d,
      officialGuildId: null == a || null == (t = a.guild) ? true : t.id,
      onClose: c
    }), (0, i.jsx)(F.Z, {
      detectedGame: n,
      trackAction: u
    }), (0, i.jsx)(Y.Z, {
      applicationId: l.id,
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
    analyticsLocations: l
  } = e;
  return (0, j.Z)({
    name: c.ImpressionNames.CLOUD_PLAY_CTA,
    type: c.ImpressionTypes.VIEW,
    properties: {
      location_stack: l
    }
  }), (0, i.jsx)(m.u, {
    text: X.intl.string(X.t.JVwWva),
    position: "top",
    children: (0, i.jsx)(f.Button, {
      icon: f.v3n,
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
  } = e, d = l.useCallback(() => {
    o(), (0, w.closeUserProfileModal)()
  }, [o]), {
    analyticsLocations: u
  } = (0, v.ZP)(h.Z.GAME_PROFILE), {
    isCloudPlayButtonShown: m,
    onCloudPlayClick: g
  } = function(e) {
    let {
      applicationId: t,
      analyticsLocations: n
    } = e, i = (0, O.q)(t), l = (0, x.Z)({
      application: i,
      analyticsLocations: n
    });
    return {
      onCloudPlayClick: l,
      isCloudPlayButtonShown: !(0, N.F)(t) && null != l
    }
  }({
    applicationId: c,
    analyticsLocations: u
  });
  return (0, i.jsxs)("div", {
    className: a()(J.sidebar, J.column, J.gapLg),
    children: [(0, i.jsxs)("div", {
      className: J.buttonsContainer,
      children: [(0, i.jsx)(D.Z, {
        invite: r,
        trackClick: s,
        closeModal: d
      }), m && null != g && (0, i.jsx)(Q, {
        onClose: d,
        onCloudPlayClick: g,
        analyticsLocations: u
      })]
    }), (0, i.jsx)(f.Heading, {
      variant: "heading-md/bold",
      children: X.intl.string(X.t.CI0vSJ)
    }), (0, i.jsxs)("div", {
      className: J.sections,
      children: [(0, i.jsx)(B.Z, {
        detectedGame: t,
        trackAction: s
      }), (0, i.jsx)(U.Z, {
        detectedGame: t,
        trackClick: s,
        onInviteResolved: n,
        closeModal: d
      }), (0, i.jsx)(z.Z, {
        detectedGame: t,
        trackClick: s
      }), (0, i.jsx)(W.Z, {
        detectedGame: t
      }), (0, i.jsx)(f.Text, {
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
  } = (0, y.ZP)(), h = (0, u.e7)([P.default], () => P.default.locale), v = l.useMemo(() => (0, k.fP)(), []), j = (0, u.Wu)([Z.Z], () => {
    var e;
    return (null != (e = Z.Z.getSimilarGames(n)) ? e : []).slice(0, 25)
  }), [N, w] = l.useState(null), S = (0, L.N)(n), [C, T] = l.useState(null), A = (0, O.q)(n), R = (0, u.e7)([E.Z], () => E.Z.getGame(n)), M = null != (t = null == R ? true : R.name) ? t : null == A ? true : A.name, D = (e, t) => {
    var i;
    (0, k.UE)({
      gameName: null != M ? M : "",
      applicationId: n,
      action: e,
      similarGameId: t,
      viewId: v,
      officialGuildId: null == C || null == (i = C.guild) ? true : i.id
    })
  };
  return ((0, p.ZP)(() => {
    (0, k.IS)({
      source: r,
      viewId: v,
      applicationId: n,
      gameName: null != M ? M : "",
      authorId: s,
      profileType: k.j7.FullProfile
    }), (0, I.Jn)()
  }), (0, O.Z)(j), l.useEffect(() => {
    h.startsWith("en") || (null == R ? true : R.summaryLocalized) != null || g.Z.getDetectableGamesSupplemental([n], {
      forceFetch: true
    })
  }, [n, null == R ? true : R.summaryLocalized, h]), l.useEffect(() => {
    (async () => {
      if (0 === j.length) {
        w(null);
        try {
          await (0, G.i)(n)
        } catch (e) {
          w(e)
        }
      }
    })()
  }, [n, j]), (0, p.ZP)(() => () => {
    var e;
    let t = Date.now(),
      i = S.map(e => {
        let n = (0, b.kr)(e) ? (0, b.T_)(e, t) : (0, b.GL)(e, h);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: n
        })
      });
    (0, k.wz)({
      viewId: v,
      applicationId: n,
      gameName: null != M ? M : "",
      playedFriendIds: S.map(e => e.author_id),
      playedFriendsData: i,
      similarGames: j.filter(_.z6).slice(0, 5),
      officialGuildId: null == C || null == (e = C.guild) ? true : e.id
    })
  }), null == R || null == A) ? null : (0, i.jsx)(f.Y0X, {
    transitionState: o,
    size: f.CgR.DYNAMIC,
    className: a()(x, J.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: (0, i.jsxs)(f.Ttm, {
      orientation: "auto",
      children: [(0, i.jsx)(q, {
        detectedGame: R,
        application: A,
        entries: S,
        trackAction: D
      }), (0, i.jsx)(f.y5t, {
        children: (0, i.jsxs)("div", {
          className: a()(J.content, J.mainContent),
          children: [(0, i.jsx)($, {
            detectedGame: R,
            application: A,
            entries: S,
            officialGuildInvite: C,
            similarGames: j,
            similarGamesError: N,
            onClose: c,
            viewId: v,
            trackAction: D
          }), (0, i.jsx)(ee, {
            detectedGame: R,
            onSetOfficialGuildInvite: T,
            officialGuildInvite: C,
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