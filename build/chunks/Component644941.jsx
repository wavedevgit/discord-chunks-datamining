/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => K
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk705512 = require("./705512.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk493773 = require("./493773.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
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
let W = () => (0, Chunk951288.jsxs)("div", {
  className: Chunk226788.gameBadge,
  children: [(0, Chunk951288.jsx)(Chunk481060.YqE, {
    size: "xxs"
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: Chunk388032.intl.string(Chunk388032.t.kAlUs7)
  })]
});

function Y(e) {
  var t;
  let {
    detectedGame: r,
    application: l,
    entries: s,
    viewId: u
  } = e, m = i.useMemo(() => null == r ? true : r.genres.map(I.P3).join(", "), [r]), p = i.useMemo(() => {
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
  }, [r]), f = null == l ? true : l.getIconURL(160, w.$k ? "webp" : "png"), g = E.default.extractTimestamp(l.id), j = o()().diff(o()(g), "days") <= F.G, x = s.some(e => (0, h.ig)(e) === c.o.GLOBAL), v = null != (t = r.name) ? t : null == l ? true : l.name;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: H.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(p, '")')
      }
    }), (0, n.jsxs)("div", {
      className: a()(H.content, H.column, H.gapLg, H.headerInfo),
      children: [(0, n.jsxs)("div", {
        className: H.coverArtRow,
        children: [(0, n.jsx)("div", {
          className: H.logoWrapper,
          children: (0, n.jsx)(A.C, {
            game: r,
            application: l,
            className: H.logo,
            size: A.Z.LARGE
          })
        }), (0, n.jsx)(G.Z, {
          applicationId: l.id,
          viewId: u,
          className: H.overflowMenu
        })]
      }), (0, n.jsx)("div", {
        className: a()(H.row, H.gapSm, H.gameDetails),
        children: (0, n.jsxs)("div", {
          children: [(0, n.jsx)(d.X6q, {
            variant: "heading-xl/bold",
            children: v
          }), (0, n.jsxs)("div", {
            className: a()(H.row, H.gapSm),
            children: [null != f && (0, n.jsx)("img", {
              className: H.gameIcon,
              src: f,
              height: 16,
              alt: U.intl.formatToPlainString(U.t["nh+jWl"], {
                game: v
              })
            }), (0, n.jsx)(d.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: m
            }), j && (0, n.jsx)(d.Text, {
              variant: "eyebrow",
              className: H.newBadge,
              children: U.intl.string(U.t.y2b7CA)
            }), x && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, n.jsx)(W, {})]
            })]
          })]
        })
      })]
    })]
  })
}

function X(e) {
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
    className: H.sections,
    children: [(0, n.jsx)(L.Z, {
      entries: l,
      viewId: u,
      officialGuildId: null == a || null == (t = a.guild) ? true : t.id,
      onClose: c
    }), (0, n.jsx)(Z.Z, {
      detectedGame: r,
      trackAction: d
    }), (0, n.jsx)(_.Z, {
      applicationId: i.id,
      onClose: c,
      trackAction: d,
      similarGames: s,
      similarGamesError: o
    })]
  })
}

function B(e) {
  let {
    detectedGame: t,
    setOfficialGuildInvite: r,
    trackAction: l,
    onClose: s,
    applicationId: o
  } = e, c = (0, b.u)(o, g.Z.GAME_PROFILE), u = i.useCallback(e => {
    r(e)
  }, [r]), m = (0, j.q)(o), p = (0, f.Z)({
    application: m,
    location: "GameProfileModal"
  }), x = null != c, v = null != p, h = x || v;
  return (0, n.jsxs)("div", {
    className: a()(H.sidebar, H.column, H.gapLg),
    children: [h && (0, n.jsxs)("div", {
      className: H.buttonsContainer,
      children: [x && (0, n.jsx)(d.zxk, {
        icon: c.icon,
        text: U.intl.string(c.labelKey),
        variant: "overlay-secondary",
        onClick: c.openLink,
        fullWidth: true
      }), v && (0, n.jsx)(d.ua7, {
        text: U.intl.string(U.t.JVwWvb),
        position: "top",
        children: e => {
          var t, r;
          return (0, n.jsx)(d.zxk, (t = function(e) {
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
          }({}, e), r = r = {
            icon: d.v3n,
            text: U.intl.string(U.t["jaYS/v"]),
            variant: "overlay-secondary",
            onClick: () => {
              s(), (0, y.closeUserProfileModal)(), p()
            },
            fullWidth: true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }), t))
        }
      })]
    }), (0, n.jsx)(d.X6q, {
      variant: "heading-md/bold",
      children: U.intl.string(U.t.CI0vSE)
    }), (0, n.jsxs)("div", {
      className: H.sections,
      children: [(0, n.jsx)(z.Z, {
        detectedGame: t,
        trackAction: l
      }), (0, n.jsx)(M.Z, {
        detectedGame: t,
        trackClick: l,
        onInviteResolved: u,
        closeModal: s
      }), (0, n.jsx)(D.Z, {
        detectedGame: t,
        trackClick: l
      }), (0, n.jsx)(R.Z, {
        detectedGame: t
      }), (0, n.jsx)(d.Text, {
        variant: "text-xxs/normal",
        children: U.intl.format(U.t.pch2Jy, {
          igdbLink: F.$f
        })
      })]
    })]
  })
}
let K = e => {
  var t;
  let {
    applicationId: r,
    source: l,
    sourceUserId: s,
    transitionState: o,
    onClose: c,
    appContext: f
  } = e, {
    clientThemesClassName: g
  } = (0, x.ZP)(), b = (0, u.e7)([P.default], () => P.default.locale), y = i.useMemo(() => (0, N.fP)(), []), w = (0, u.Wu)([C.Z], () => {
    var e;
    return (null != (e = C.Z.getSimilarGames(r)) ? e : []).slice(0, 25)
  }), [I, E] = i.useState(null), A = (0, k.N)(r), [G, D] = i.useState(null), Z = (0, j.q)(r), L = (0, u.e7)([O.Z], () => O.Z.getGame(r)), M = null != (t = null == L ? true : L.name) ? t : null == Z ? true : Z.name, R = (e, t) => {
    var n;
    (0, N.UE)({
      gameName: null != M ? M : "",
      applicationId: r,
      action: e,
      similarGameId: t,
      viewId: y,
      officialGuildId: null == G || null == (n = G.guild) ? true : n.id
    })
  };
  return ((0, p.ZP)(() => {
    (0, N.IS)({
      source: l,
      viewId: y,
      applicationId: r,
      gameName: null != M ? M : "",
      authorId: s
    }), (0, v.Jn)()
  }), (0, j.Z)(w), i.useEffect(() => {
    b.startsWith("en") || (null == L ? true : L.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([r], {
      forceFetch: true
    })
  }, [r, null == L ? true : L.summaryLocalized, b]), i.useEffect(() => {
    (async () => {
      if (0 === w.length) {
        E(null);
        try {
          await (0, S.i)(r)
        } catch (e) {
          E(e)
        }
      }
    })()
  }, [r, w]), (0, p.ZP)(() => () => {
    var e;
    let t = Date.now(),
      n = A.map(e => {
        let r = (0, h.kr)(e) ? (0, h.T_)(e, t) : (0, h.GL)(e, b);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: r
        })
      });
    (0, N.wz)({
      viewId: y,
      applicationId: r,
      gameName: null != M ? M : "",
      playedFriendIds: A.map(e => e.author_id),
      playedFriendsData: n,
      similarGames: w.filter(T.z6).slice(0, 5),
      officialGuildId: null == G || null == (e = G.guild) ? true : e.id
    })
  }), null == L || null == Z) ? null : (0, n.jsx)(d.Y0X, {
    transitionState: o,
    size: d.CgR.DYNAMIC,
    className: a()(g, H.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: (0, n.jsxs)(d.Ttm, {
      orientation: "auto",
      children: [(0, n.jsx)(Y, {
        detectedGame: L,
        application: Z,
        entries: A,
        viewId: y,
        trackAction: R
      }), (0, n.jsx)(d.y5t, {
        children: (0, n.jsxs)("div", {
          className: a()(H.content, H.mainContent),
          children: [(0, n.jsx)(X, {
            detectedGame: L,
            application: Z,
            entries: A,
            officialGuildInvite: G,
            similarGames: w,
            similarGamesError: I,
            onClose: c,
            viewId: y,
            trackAction: R
          }), (0, n.jsx)(B, {
            detectedGame: L,
            setOfficialGuildInvite: D,
            trackAction: R,
            onClose: c,
            appContext: f,
            applicationId: r
          })]
        })
      })]
    })
  })
}