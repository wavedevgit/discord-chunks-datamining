/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Q
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
  Chunk810568 = require("./810568.js"),
  Chunk998058 = require("./998058.js"),
  Chunk839392 = require("./839392.js"),
  Chunk567409 = require("./567409.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk715318 = require("./715318.jsx"),
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
let X = () => (0, Chunk951288.jsxs)("div", {
  className: Chunk226788.gameBadge,
  children: [(0, Chunk951288.jsx)(Chunk481060.YqE, {
    size: "xxs"
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: Chunk388032.intl.string(Chunk388032.t.kAlUsy)
  })]
});

function J(e) {
  var t;
  let {
    detectedGame: n,
    application: l,
    entries: s
  } = e, c = i.useMemo(() => null == n ? true : n.genres.map(C.P3).join(", "), [n]), u = i.useMemo(() => {
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
  }, [n]), m = null == l ? true : l.getIconURL(160, S.$k ? "webp" : "png"), p = T.default.extractTimestamp(l.id), g = o()().diff(o()(p), "days") <= Y.G, x = s.some(e => (0, b.ig)(e) === d.o.GLOBAL), h = null != (t = n.name) ? t : null == l ? true : l.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: K.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(u, '")')
      }
    }), (0, r.jsxs)("div", {
      className: a()(K.content, K.column, K.gapLg, K.headerInfo),
      children: [(0, r.jsxs)("div", {
        className: K.coverArtRow,
        children: [(0, r.jsx)("div", {
          className: K.logoWrapper,
          children: (0, r.jsx)(L.C, {
            game: n,
            application: l,
            className: K.logo,
            size: L.Z.LARGE
          })
        }), (0, r.jsx)(M.Z, {
          applicationId: l.id,
          className: K.overflowMenu
        })]
      }), (0, r.jsx)("div", {
        className: a()(K.row, K.gapSm, K.gameDetails),
        children: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(f.Heading, {
            variant: "heading-xl/bold",
            children: h
          }), (0, r.jsxs)("div", {
            className: a()(K.row, K.gapSm),
            children: [null != m && (0, r.jsx)("img", {
              className: K.gameIcon,
              src: m,
              height: 16,
              alt: B.intl.formatToPlainString(B.t["nh+jWk"], {
                game: h
              })
            }), (0, r.jsx)(f.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: c
            }), g && (0, r.jsx)(f.Text, {
              variant: "eyebrow",
              className: K.newBadge,
              children: B.intl.string(B.t.y2b7CA)
            }), x && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(f.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, r.jsx)(X, {})]
            })]
          })]
        })
      })]
    })]
  })
}

function V(e) {
  var t;
  let {
    detectedGame: n,
    application: i,
    entries: l,
    officialGuildInvite: a,
    similarGames: s,
    similarGamesError: o,
    onClose: c,
    viewId: d,
    trackAction: u
  } = e;
  return (0, r.jsxs)("div", {
    className: K.sections,
    children: [(0, r.jsx)(z.Z, {
      entries: l,
      viewId: d,
      officialGuildId: null == a || null == (t = a.guild) ? true : t.id,
      onClose: c
    }), (0, r.jsx)(R.Z, {
      detectedGame: n,
      trackAction: u
    }), (0, r.jsx)(U.Z, {
      applicationId: i.id,
      onClose: c,
      trackAction: u,
      similarGames: s,
      similarGamesError: o
    })]
  })
}

function q(e) {
  let {
    onClose: t,
    onCloudPlayClick: n,
    analyticsLocations: i
  } = e;
  return (0, v.Z)({
    name: c.ImpressionNames.CLOUD_PLAY_CTA,
    type: c.ImpressionTypes.VIEW,
    properties: {
      location_stack: i
    }
  }), (0, r.jsx)(m.u, {
    text: B.intl.string(B.t.JVwWva),
    position: "top",
    children: (0, r.jsx)(f.Button, {
      icon: f.v3n,
      text: B.intl.string(B.t["jaYS/h"]),
      variant: "overlay-secondary",
      onClick: () => {
        t(), (0, P.closeUserProfileModal)(), n()
      },
      fullWidth: true
    })
  })
}

function $(e) {
  let {
    detectedGame: t,
    setOfficialGuildInvite: n,
    trackAction: l,
    onClose: s,
    applicationId: o
  } = e, c = i.useCallback(e => {
    n(e)
  }, [n]), {
    analyticsLocations: d
  } = (0, j.ZP)(h.Z.GAME_PROFILE), {
    isCloudPlayButtonShown: u,
    onCloudPlayClick: m
  } = function(e) {
    let {
      applicationId: t,
      analyticsLocations: n
    } = e, r = (0, O.q)(t), i = (0, x.Z)({
      application: r,
      analyticsLocations: n
    });
    return {
      onCloudPlayClick: i,
      isCloudPlayButtonShown: !(0, N.F)(t) && null != i
    }
  }({
    applicationId: o,
    analyticsLocations: d
  });
  return (0, r.jsxs)("div", {
    className: a()(K.sidebar, K.column, K.gapLg),
    children: [u && (0, r.jsx)("div", {
      className: K.buttonsContainer,
      children: u && null != m && (0, r.jsx)(q, {
        onClose: s,
        onCloudPlayClick: m,
        analyticsLocations: d
      })
    }), (0, r.jsx)(f.Heading, {
      variant: "heading-md/bold",
      children: B.intl.string(B.t.CI0vSJ)
    }), (0, r.jsxs)("div", {
      className: K.sections,
      children: [(0, r.jsx)(W.Z, {
        detectedGame: t,
        trackAction: l
      }), (0, r.jsx)(F.Z, {
        detectedGame: t,
        trackClick: l,
        onInviteResolved: c,
        closeModal: s
      }), (0, r.jsx)(D.Z, {
        detectedGame: t,
        trackClick: l
      }), (0, r.jsx)(H.Z, {
        detectedGame: t
      }), (0, r.jsx)(f.Text, {
        variant: "text-xxs/normal",
        children: B.intl.format(B.t.pch2Jw, {
          igdbLink: Y.$f
        })
      })]
    })]
  })
}
let Q = e => {
  var t;
  let {
    applicationId: n,
    source: l,
    sourceUserId: s,
    transitionState: o,
    onClose: c,
    appContext: d,
    trackExternalAction: m
  } = e, {
    clientThemesClassName: x
  } = (0, y.ZP)(), h = (0, u.e7)([w.default], () => w.default.locale), j = i.useMemo(() => (0, A.fP)(), []), v = (0, u.Wu)([G.Z], () => {
    var e;
    return (null != (e = G.Z.getSimilarGames(n)) ? e : []).slice(0, 25)
  }), [N, P] = i.useState(null), S = (0, Z.N)(n), [C, T] = i.useState(null), L = (0, O.q)(n), M = (0, u.e7)([E.Z], () => E.Z.getGame(n)), D = null != (t = null == M ? true : M.name) ? t : null == L ? true : L.name, R = (e, t) => {
    var r;
    (0, A.UE)({
      gameName: null != D ? D : "",
      applicationId: n,
      action: e,
      similarGameId: t,
      viewId: j,
      officialGuildId: null == C || null == (r = C.guild) ? true : r.id
    })
  };
  return ((0, g.ZP)(() => {
    (0, A.IS)({
      source: l,
      viewId: j,
      applicationId: n,
      gameName: null != D ? D : "",
      authorId: s,
      profileType: A.j7.FullProfile
    }), (0, I.Jn)()
  }), (0, O.Z)(v), i.useEffect(() => {
    h.startsWith("en") || (null == M ? true : M.summaryLocalized) != null || p.Z.getDetectableGamesSupplemental([n], {
      forceFetch: true
    })
  }, [n, null == M ? true : M.summaryLocalized, h]), i.useEffect(() => {
    (async () => {
      if (0 === v.length) {
        P(null);
        try {
          await (0, k.i)(n)
        } catch (e) {
          P(e)
        }
      }
    })()
  }, [n, v]), (0, g.ZP)(() => () => {
    var e;
    let t = Date.now(),
      r = S.map(e => {
        let n = (0, b.kr)(e) ? (0, b.T_)(e, t) : (0, b.GL)(e, h);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: n
        })
      });
    (0, A.wz)({
      viewId: j,
      applicationId: n,
      gameName: null != D ? D : "",
      playedFriendIds: S.map(e => e.author_id),
      playedFriendsData: r,
      similarGames: v.filter(_.z6).slice(0, 5),
      officialGuildId: null == C || null == (e = C.guild) ? true : e.id
    })
  }), null == M || null == L) ? null : (0, r.jsx)(f.Y0X, {
    transitionState: o,
    size: f.CgR.DYNAMIC,
    className: a()(x, K.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: (0, r.jsxs)(f.Ttm, {
      orientation: "auto",
      children: [(0, r.jsx)(J, {
        detectedGame: M,
        application: L,
        entries: S,
        trackAction: R
      }), (0, r.jsx)(f.y5t, {
        children: (0, r.jsxs)("div", {
          className: a()(K.content, K.mainContent),
          children: [(0, r.jsx)(V, {
            detectedGame: M,
            application: L,
            entries: S,
            officialGuildInvite: C,
            similarGames: v,
            similarGamesError: N,
            onClose: c,
            viewId: j,
            trackAction: R
          }), (0, r.jsx)($, {
            detectedGame: M,
            setOfficialGuildInvite: T,
            trackAction: R,
            onClose: c,
            appContext: d,
            applicationId: n,
            source: l,
            trackExternalAction: m
          })]
        })
      })]
    })
  })
}