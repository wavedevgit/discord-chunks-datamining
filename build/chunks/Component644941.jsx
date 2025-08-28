/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => $
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
  Chunk480086 = require("./480086.js"),
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
let B = () => (0, Chunk951288.jsxs)("div", {
  className: Chunk226788.gameBadge,
  children: [(0, Chunk951288.jsx)(Chunk481060.YqE, {
    size: "xxs"
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: Chunk388032.intl.string(Chunk388032.t.kAlUs7)
  })]
});

function K(e) {
  var t;
  let {
    detectedGame: r,
    application: l,
    entries: s,
    viewId: c
  } = e, d = i.useMemo(() => null == r ? true : r.genres.map(S.P3).join(", "), [r]), p = i.useMemo(() => {
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
  }, [r]), f = null == l ? true : l.getIconURL(160, N.$k ? "webp" : "png"), g = C.default.extractTimestamp(l.id), j = o()().diff(o()(g), "days") <= W.G, x = s.some(e => (0, y.ig)(e) === u.o.GLOBAL), v = null != (t = r.name) ? t : null == l ? true : l.name;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: X.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(p, '")')
      }
    }), (0, n.jsxs)("div", {
      className: a()(X.content, X.column, X.gapLg, X.headerInfo),
      children: [(0, n.jsxs)("div", {
        className: X.coverArtRow,
        children: [(0, n.jsx)("div", {
          className: X.logoWrapper,
          children: (0, n.jsx)(Z.C, {
            game: r,
            application: l,
            className: X.logo,
            size: Z.Z.LARGE
          })
        }), (0, n.jsx)(L.Z, {
          applicationId: l.id,
          viewId: c,
          className: X.overflowMenu
        })]
      }), (0, n.jsx)("div", {
        className: a()(X.row, X.gapSm, X.gameDetails),
        children: (0, n.jsxs)("div", {
          children: [(0, n.jsx)(m.X6q, {
            variant: "heading-xl/bold",
            children: v
          }), (0, n.jsxs)("div", {
            className: a()(X.row, X.gapSm),
            children: [null != f && (0, n.jsx)("img", {
              className: X.gameIcon,
              src: f,
              height: 16,
              alt: Y.intl.formatToPlainString(Y.t["nh+jWl"], {
                game: v
              })
            }), (0, n.jsx)(m.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: d
            }), j && (0, n.jsx)(m.Text, {
              variant: "eyebrow",
              className: X.newBadge,
              children: Y.intl.string(Y.t.y2b7CA)
            }), x && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(m.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, n.jsx)(B, {})]
            })]
          })]
        })
      })]
    })]
  })
}

function q(e) {
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
    className: X.sections,
    children: [(0, n.jsx)(_.Z, {
      entries: l,
      viewId: u,
      officialGuildId: null == a || null == (t = a.guild) ? true : t.id,
      onClose: c
    }), (0, n.jsx)(R.Z, {
      detectedGame: r,
      trackAction: d
    }), (0, n.jsx)(U.Z, {
      applicationId: i.id,
      onClose: c,
      trackAction: d,
      similarGames: s,
      similarGamesError: o
    })]
  })
}

function J(e) {
  let {
    onClose: t,
    onCloudPlayClick: r,
    analyticsLocations: i
  } = e;
  return (0, v.Z)({
    name: c.ImpressionNames.CLOUD_PLAY_CTA,
    type: c.ImpressionTypes.VIEW,
    properties: {
      location_stack: i
    }
  }), (0, n.jsx)(m.ua7, {
    text: Y.intl.string(Y.t.JVwWvb),
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
        text: Y.intl.string(Y.t["jaYS/v"]),
        variant: "overlay-secondary",
        onClick: () => {
          t(), (0, I.closeUserProfileModal)(), r()
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

function V(e) {
  let {
    detectedGame: t,
    setOfficialGuildInvite: r,
    trackAction: l,
    onClose: s,
    applicationId: o
  } = e, c = (0, w.u)(o, j.Z.GAME_PROFILE), u = i.useCallback(e => {
    r(e)
  }, [r]), d = (0, O.q)(o), {
    analyticsLocations: p
  } = (0, x.ZP)(j.Z.GAME_PROFILE), f = (0, g.Z)({
    application: d,
    analyticsLocations: p
  }), v = null != c, h = null != f, b = v || h;
  return (0, n.jsxs)("div", {
    className: a()(X.sidebar, X.column, X.gapLg),
    children: [b && (0, n.jsxs)("div", {
      className: X.buttonsContainer,
      children: [v && (0, n.jsx)(m.zxk, {
        icon: c.icon,
        text: Y.intl.string(c.labelKey),
        variant: "overlay-secondary",
        onClick: c.openLink,
        fullWidth: true
      }), h && (0, n.jsx)(J, {
        onClose: s,
        onCloudPlayClick: f,
        analyticsLocations: p
      })]
    }), (0, n.jsx)(m.X6q, {
      variant: "heading-md/bold",
      children: Y.intl.string(Y.t.CI0vSE)
    }), (0, n.jsxs)("div", {
      className: X.sections,
      children: [(0, n.jsx)(H.Z, {
        detectedGame: t,
        trackAction: l
      }), (0, n.jsx)(z.Z, {
        detectedGame: t,
        trackClick: l,
        onInviteResolved: u,
        closeModal: s
      }), (0, n.jsx)(M.Z, {
        detectedGame: t,
        trackClick: l
      }), (0, n.jsx)(F.Z, {
        detectedGame: t
      }), (0, n.jsx)(m.Text, {
        variant: "text-xxs/normal",
        children: Y.intl.format(Y.t.pch2Jy, {
          igdbLink: W.$f
        })
      })]
    })]
  })
}
let $ = e => {
  var t;
  let {
    applicationId: r,
    source: l,
    sourceUserId: s,
    transitionState: o,
    onClose: c,
    appContext: u
  } = e, {
    clientThemesClassName: g
  } = (0, h.ZP)(), j = (0, d.e7)([E.default], () => E.default.locale), x = i.useMemo(() => (0, k.fP)(), []), v = (0, d.Wu)([A.Z], () => {
    var e;
    return (null != (e = A.Z.getSimilarGames(r)) ? e : []).slice(0, 25)
  }), [w, I] = i.useState(null), N = (0, D.N)(r), [S, C] = i.useState(null), Z = (0, O.q)(r), L = (0, d.e7)([P.Z], () => P.Z.getGame(r)), M = null != (t = null == L ? true : L.name) ? t : null == Z ? true : Z.name, R = (e, t) => {
    var n;
    (0, k.UE)({
      gameName: null != M ? M : "",
      applicationId: r,
      action: e,
      similarGameId: t,
      viewId: x,
      officialGuildId: null == S || null == (n = S.guild) ? true : n.id
    })
  };
  return ((0, f.ZP)(() => {
    (0, k.IS)({
      source: l,
      viewId: x,
      applicationId: r,
      gameName: null != M ? M : "",
      authorId: s,
      profileType: k.j7.FullProfile
    }), (0, b.Jn)()
  }), (0, O.Z)(v), i.useEffect(() => {
    j.startsWith("en") || (null == L ? true : L.summaryLocalized) != null || p.Z.getDetectableGamesSupplemental([r], {
      forceFetch: true
    })
  }, [r, null == L ? true : L.summaryLocalized, j]), i.useEffect(() => {
    (async () => {
      if (0 === v.length) {
        I(null);
        try {
          await (0, T.i)(r)
        } catch (e) {
          I(e)
        }
      }
    })()
  }, [r, v]), (0, f.ZP)(() => () => {
    var e;
    let t = Date.now(),
      n = N.map(e => {
        let r = (0, y.kr)(e) ? (0, y.T_)(e, t) : (0, y.GL)(e, j);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: r
        })
      });
    (0, k.wz)({
      viewId: x,
      applicationId: r,
      gameName: null != M ? M : "",
      playedFriendIds: N.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: v.filter(G.z6).slice(0, 5),
      officialGuildId: null == S || null == (e = S.guild) ? true : e.id
    })
  }), null == L || null == Z) ? null : (0, n.jsx)(m.Y0X, {
    transitionState: o,
    size: m.CgR.DYNAMIC,
    className: a()(g, X.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: (0, n.jsxs)(m.Ttm, {
      orientation: "auto",
      children: [(0, n.jsx)(K, {
        detectedGame: L,
        application: Z,
        entries: N,
        viewId: x,
        trackAction: R
      }), (0, n.jsx)(m.y5t, {
        children: (0, n.jsxs)("div", {
          className: a()(X.content, X.mainContent),
          children: [(0, n.jsx)(q, {
            detectedGame: L,
            application: Z,
            entries: N,
            officialGuildInvite: S,
            similarGames: v,
            similarGamesError: w,
            onClose: c,
            viewId: x,
            trackAction: R
          }), (0, n.jsx)(V, {
            detectedGame: L,
            setOfficialGuildInvite: C,
            trackAction: R,
            onClose: c,
            appContext: u,
            applicationId: r
          })]
        })
      })]
    })
  })
}