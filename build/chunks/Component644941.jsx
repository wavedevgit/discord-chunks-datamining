/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => X
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
  Chunk100527 = require("./100527.js"),
  Chunk835473 = require("./835473.js"),
  Chunk168551 = require("./168551.js"),
  Chunk485267 = require("./485267.js"),
  Chunk561308 = require("./561308.js"),
  Chunk669764 = require("./669764.js"),
  Chunk480086 = require("./480086.js"),
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
let U = () => (0, Chunk951288.jsxs)("div", {
  className: Chunk226788.gameBadge,
  children: [(0, Chunk951288.jsx)(Chunk481060.YqE, {
    size: "xxs"
  }), (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: Chunk388032.intl.string(Chunk388032.t.kAlUs7)
  })]
});

function H(e) {
  var t;
  let {
    detectedGame: n,
    application: l,
    entries: s,
    viewId: u
  } = e, m = i.useMemo(() => null == n ? true : n.genres.map(I.P3).join(", "), [n]), p = i.useMemo(() => {
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
  }, [n]), f = null == l ? true : l.getIconURL(160, y.$k ? "webp" : "png"), g = P.default.extractTimestamp(l.id), x = o()().diff(o()(g), "days") <= _.G, j = s.some(e => (0, h.ig)(e) === c.o.GLOBAL), v = null != (t = n.name) ? t : null == l ? true : l.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: F.gameArtHero,
      style: {
        backgroundImage: 'url("'.concat(p, '")')
      }
    }), (0, r.jsxs)("div", {
      className: a()(F.content, F.column, F.gapLg, F.headerInfo),
      children: [(0, r.jsxs)("div", {
        className: F.coverArtRow,
        children: [(0, r.jsx)("div", {
          className: F.logoWrapper,
          children: (0, r.jsx)(k.C, {
            game: n,
            application: l,
            className: F.logo,
            size: k.Z.LARGE
          })
        }), (0, r.jsx)(T.Z, {
          applicationId: l.id,
          viewId: u,
          className: F.overflowMenu
        })]
      }), (0, r.jsx)("div", {
        className: a()(F.row, F.gapSm, F.gameDetails),
        children: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(d.X6q, {
            variant: "heading-xl/bold",
            children: v
          }), (0, r.jsxs)("div", {
            className: a()(F.row, F.gapSm),
            children: [null != f && (0, r.jsx)("img", {
              className: F.gameIcon,
              src: f,
              height: 16,
              alt: z.intl.formatToPlainString(z.t["nh+jWl"], {
                game: v
              })
            }), (0, r.jsx)(d.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: m
            }), x && (0, r.jsx)(d.Text, {
              variant: "eyebrow",
              className: F.newBadge,
              children: z.intl.string(z.t.y2b7CA)
            }), j && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, r.jsx)(U, {})]
            })]
          })]
        })
      })]
    })]
  })
}

function W(e) {
  var t;
  let {
    detectedGame: n,
    application: i,
    entries: l,
    officialGuildInvite: a,
    similarGames: s,
    similarGamesError: o,
    onClose: c,
    viewId: u,
    trackAction: d
  } = e;
  return (0, r.jsxs)("div", {
    className: F.sections,
    children: [(0, r.jsx)(D.Z, {
      entries: l,
      viewId: u,
      officialGuildId: null == a || null == (t = a.guild) ? true : t.id,
      onClose: c
    }), (0, r.jsx)(G.Z, {
      detectedGame: n,
      trackAction: d
    }), (0, r.jsx)(M.Z, {
      applicationId: i.id,
      onClose: c,
      trackAction: d,
      similarGames: s,
      similarGamesError: o
    })]
  })
}

function Y(e) {
  let {
    detectedGame: t,
    setOfficialGuildInvite: n,
    trackAction: l,
    onClose: s,
    applicationId: o
  } = e, c = (0, O.u)(o, f.Z.GAME_PROFILE), u = i.useCallback(e => {
    n(e)
  }, [n]);
  return (0, r.jsxs)("div", {
    className: a()(F.sidebar, F.column, F.gapLg),
    children: [null != c ? (0, r.jsx)("div", {
      className: F.gameStoreButton,
      children: (0, r.jsx)(d.zxk, {
        icon: c.icon,
        text: z.intl.string(c.labelKey),
        variant: "overlay-secondary",
        onClick: c.openLink,
        fullWidth: true
      })
    }) : null, (0, r.jsx)(d.X6q, {
      variant: "heading-md/bold",
      children: z.intl.string(z.t.CI0vSE)
    }), (0, r.jsxs)("div", {
      className: F.sections,
      children: [(0, r.jsx)(R.Z, {
        detectedGame: t,
        trackAction: l
      }), (0, r.jsx)(Z.Z, {
        detectedGame: t,
        trackClick: l,
        onInviteResolved: u,
        closeModal: s
      }), (0, r.jsx)(A.Z, {
        detectedGame: t,
        trackClick: l
      }), (0, r.jsx)(L.Z, {
        detectedGame: t
      }), (0, r.jsx)(d.Text, {
        variant: "text-xxs/normal",
        children: z.intl.format(z.t.pch2Jy, {
          igdbLink: _.$f
        })
      })]
    })]
  })
}
let X = e => {
  var t;
  let {
    applicationId: n,
    source: l,
    sourceUserId: s,
    transitionState: o,
    onClose: c,
    appContext: f
  } = e, {
    clientThemesClassName: O
  } = (0, x.ZP)(), y = (0, u.e7)([b.default], () => b.default.locale), I = i.useMemo(() => (0, w.fP)(), []), P = (0, u.Wu)([N.Z], () => {
    var e;
    return (null != (e = N.Z.getSimilarGames(n)) ? e : []).slice(0, 25)
  }), [k, T] = i.useState(null), A = (0, S.N)(n), [G, D] = i.useState(null), Z = (0, g.q)(n), L = (0, u.e7)([v.Z], () => v.Z.getGame(n)), M = null != (t = null == L ? true : L.name) ? t : null == Z ? true : Z.name, R = (e, t) => {
    var r;
    (0, w.UE)({
      gameName: null != M ? M : "",
      applicationId: n,
      action: e,
      similarGameId: t,
      viewId: I,
      officialGuildId: null == G || null == (r = G.guild) ? true : r.id
    })
  };
  return ((0, p.ZP)(() => {
    (0, w.IS)({
      source: l,
      viewId: I,
      applicationId: n,
      gameName: null != M ? M : "",
      authorId: s
    }), (0, j.Jn)()
  }), (0, g.Z)(P), i.useEffect(() => {
    y.startsWith("en") || (null == L ? true : L.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([n], {
      forceFetch: true
    })
  }, [n, null == L ? true : L.summaryLocalized, y]), i.useEffect(() => {
    (async () => {
      if (0 === P.length) {
        T(null);
        try {
          await (0, E.i)(n)
        } catch (e) {
          T(e)
        }
      }
    })()
  }, [n, P]), (0, p.ZP)(() => () => {
    var e;
    let t = Date.now(),
      r = A.map(e => {
        let n = (0, h.kr)(e) ? (0, h.T_)(e, t) : (0, h.GL)(e, y);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: n
        })
      });
    (0, w.wz)({
      viewId: I,
      applicationId: n,
      gameName: null != M ? M : "",
      playedFriendIds: A.map(e => e.author_id),
      playedFriendsData: r,
      similarGames: P.filter(C.z6).slice(0, 5),
      officialGuildId: null == G || null == (e = G.guild) ? true : e.id
    })
  }), null == L || null == Z) ? null : (0, r.jsx)(d.Y0X, {
    transitionState: o,
    size: d.CgR.DYNAMIC,
    className: a()(O, F.gameProfileModal),
    parentComponent: "GameProfileModal",
    children: (0, r.jsxs)(d.Ttm, {
      orientation: "auto",
      children: [(0, r.jsx)(H, {
        detectedGame: L,
        application: Z,
        entries: A,
        viewId: I,
        trackAction: R
      }), (0, r.jsx)(d.y5t, {
        children: (0, r.jsxs)("div", {
          className: a()(F.content, F.mainContent),
          children: [(0, r.jsx)(W, {
            detectedGame: L,
            application: Z,
            entries: A,
            officialGuildInvite: G,
            similarGames: P,
            similarGamesError: k,
            onClose: c,
            viewId: I,
            trackAction: R
          }), (0, r.jsx)(Y, {
            detectedGame: L,
            setOfficialGuildInvite: D,
            trackAction: R,
            onClose: c,
            appContext: f,
            applicationId: n
          })]
        })
      })]
    })
  })
}