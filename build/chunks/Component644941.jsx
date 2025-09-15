/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => V
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
    children: Chunk388032.intl.string(Chunk388032.t.kAlUs7)
  })]
});

function B(e) {
  var t;
  let {
    detectedGame: r,
    application: l,
    entries: s,
    viewId: c
  } = e, d = i.useMemo(() => null == r ? true : r.genres.map(N.P3).join(", "), [r]), p = i.useMemo(() => {
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
  }, [r]), f = null == l ? true : l.getIconURL(160, E.$k ? "webp" : "png"), g = S.default.extractTimestamp(l.id), j = o()().diff(o()(g), "days") <= H.G, x = s.some(e => (0, y.ig)(e) === u.o.GLOBAL), O = null != (t = r.name) ? t : null == l ? true : l.name;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: Y.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(p, '")')
      }
    }), (0, n.jsxs)("div", {
      className: a()(Y.content, Y.column, Y.gapLg, Y.headerInfo),
      children: [(0, n.jsxs)("div", {
        className: Y.coverArtRow,
        children: [(0, n.jsx)("div", {
          className: Y.logoWrapper,
          children: (0, n.jsx)(G.C, {
            game: r,
            application: l,
            className: Y.logo,
            size: G.Z.LARGE
          })
        }), (0, n.jsx)(Z.Z, {
          applicationId: l.id,
          viewId: c,
          className: Y.overflowMenu
        })]
      }), (0, n.jsx)("div", {
        className: a()(Y.row, Y.gapSm, Y.gameDetails),
        children: (0, n.jsxs)("div", {
          children: [(0, n.jsx)(m.X6q, {
            variant: "heading-xl/bold",
            children: O
          }), (0, n.jsxs)("div", {
            className: a()(Y.row, Y.gapSm),
            children: [null != f && (0, n.jsx)("img", {
              className: Y.gameIcon,
              src: f,
              height: 16,
              alt: W.intl.formatToPlainString(W.t["nh+jWl"], {
                game: O
              })
            }), (0, n.jsx)(m.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: d
            }), j && (0, n.jsx)(m.Text, {
              variant: "eyebrow",
              className: Y.newBadge,
              children: W.intl.string(W.t.y2b7CA)
            }), x && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, n.jsx)(X, {})]
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
    application: i,
    entries: l,
    officialGuildInvite: a,
    similarGames: s,
    similarGamesError: o,
    onClose: c,
    viewId: u,
    trackAction: d
  } = e;
  return (0, n.jsxs)("div", {
    className: Y.sections,
    children: [(0, n.jsx)(_.Z, {
      entries: l,
      viewId: u,
      officialGuildId: null == a || null == (t = a.guild) ? true : t.id,
      onClose: c
    }), (0, n.jsx)(M.Z, {
      detectedGame: r,
      trackAction: d
    }), (0, n.jsx)(F.Z, {
      applicationId: i.id,
      onClose: c,
      trackAction: d,
      similarGames: s,
      similarGamesError: o
    })]
  })
}

function q(e) {
  let {
    onClose: t,
    onCloudPlayClick: r,
    analyticsLocations: i
  } = e;
  return (0, O.Z)({
    name: c.ImpressionNames.CLOUD_PLAY_CTA,
    type: c.ImpressionTypes.VIEW,
    properties: {
      location_stack: i
    }
  }), (0, n.jsx)(m.ua7, {
    text: W.intl.string(W.t.JVwWvb),
    position: "top",
    children: e => {
      var i, l;
      return (0, n.jsx)(m.zxk, (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), l = l = {
        icon: m.v3n,
        text: W.intl.string(W.t["jaYS/v"]),
        variant: "overlay-secondary",
        onClick: () => {
          t(), (0, w.closeUserProfileModal)(), r()
        },
        fullWidth: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  })
}

function J(e) {
  let {
    detectedGame: t,
    setOfficialGuildInvite: r,
    trackAction: l,
    onClose: s,
    applicationId: o
  } = e, c = i.useCallback(e => {
    r(e)
  }, [r]), u = (0, h.q)(o), {
    analyticsLocations: d
  } = (0, x.ZP)(j.Z.GAME_PROFILE), p = (0, g.Z)({
    application: u,
    analyticsLocations: d
  }), f = null != p;
  return (0, n.jsxs)("div", {
    className: a()(Y.sidebar, Y.column, Y.gapLg),
    children: [f && (0, n.jsx)("div", {
      className: Y.buttonsContainer,
      children: f && (0, n.jsx)(q, {
        onClose: s,
        onCloudPlayClick: p,
        analyticsLocations: d
      })
    }), (0, n.jsx)(m.X6q, {
      variant: "heading-md/bold",
      children: W.intl.string(W.t.CI0vSE)
    }), (0, n.jsxs)("div", {
      className: Y.sections,
      children: [(0, n.jsx)(U.Z, {
        detectedGame: t,
        trackAction: l
      }), (0, n.jsx)(R.Z, {
        detectedGame: t,
        trackClick: l,
        onInviteResolved: c,
        closeModal: s
      }), (0, n.jsx)(L.Z, {
        detectedGame: t,
        trackClick: l
      }), (0, n.jsx)(z.Z, {
        detectedGame: t
      }), (0, n.jsx)(m.Text, {
        variant: "text-xxs/normal",
        children: W.intl.format(W.t.pch2Jy, {
          igdbLink: H.$f
        })
      })]
    })]
  })
}
let V = e => {
  var t;
  let {
    applicationId: r,
    source: l,
    sourceUserId: s,
    transitionState: o,
    onClose: c,
    appContext: u,
    trackExternalAction: g
  } = e, {
    clientThemesClassName: j
  } = (0, v.ZP)(), x = (0, d.e7)([I.default], () => I.default.locale), O = i.useMemo(() => (0, C.fP)(), []), w = (0, d.Wu)([k.Z], () => {
    var e;
    return (null != (e = k.Z.getSimilarGames(r)) ? e : []).slice(0, 25)
  }), [E, N] = i.useState(null), S = (0, A.N)(r), [G, Z] = i.useState(null), L = (0, h.q)(r), M = (0, d.e7)([P.Z], () => P.Z.getGame(r)), _ = null != (t = null == M ? true : M.name) ? t : null == L ? true : L.name, R = (e, t) => {
    var n;
    (0, C.UE)({
      gameName: null != _ ? _ : "",
      applicationId: r,
      action: e,
      similarGameId: t,
      viewId: O,
      officialGuildId: null == G || null == (n = G.guild) ? true : n.id
    })
  };
  return ((0, f.ZP)(() => {
    (0, C.IS)({
      source: l,
      viewId: O,
      applicationId: r,
      gameName: null != _ ? _ : "",
      authorId: s,
      profileType: C.j7.FullProfile
    }), (0, b.Jn)()
  }), (0, h.Z)(w), i.useEffect(() => {
    x.startsWith("en") || (null == M ? true : M.summaryLocalized) != null || p.Z.getDetectableGamesSupplemental([r], {
      forceFetch: true
    })
  }, [r, null == M ? true : M.summaryLocalized, x]), i.useEffect(() => {
    (async () => {
      if (0 === w.length) {
        N(null);
        try {
          await (0, T.i)(r)
        } catch (e) {
          N(e)
        }
      }
    })()
  }, [r, w]), (0, f.ZP)(() => () => {
    var e;
    let t = Date.now(),
      n = S.map(e => {
        let r = (0, y.kr)(e) ? (0, y.T_)(e, t) : (0, y.GL)(e, x);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: r
        })
      });
    (0, C.wz)({
      viewId: O,
      applicationId: r,
      gameName: null != _ ? _ : "",
      playedFriendIds: S.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: w.filter(D.z6).slice(0, 5),
      officialGuildId: null == G || null == (e = G.guild) ? true : e.id
    })
  }), null == M || null == L) ? null : (0, n.jsx)(m.Y0X, {
    transitionState: o,
    size: m.CgR.DYNAMIC,
    className: a()(j, Y.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: (0, n.jsxs)(m.Ttm, {
      orientation: "auto",
      children: [(0, n.jsx)(B, {
        detectedGame: M,
        application: L,
        entries: S,
        viewId: O,
        trackAction: R
      }), (0, n.jsx)(m.y5t, {
        children: (0, n.jsxs)("div", {
          className: a()(Y.content, Y.mainContent),
          children: [(0, n.jsx)(K, {
            detectedGame: M,
            application: L,
            entries: S,
            officialGuildInvite: G,
            similarGames: w,
            similarGamesError: E,
            onClose: c,
            viewId: O,
            trackAction: R
          }), (0, n.jsx)(J, {
            detectedGame: M,
            setOfficialGuildInvite: Z,
            trackAction: R,
            onClose: c,
            appContext: u,
            applicationId: r,
            source: l,
            trackExternalAction: g
          })]
        })
      })]
    })
  })
}