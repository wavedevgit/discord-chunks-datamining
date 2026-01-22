/** Chunk was on 13530 **/
/** chunk id: 225732, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eo
}), require("./896048.js"), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk110259 = require("./110259.js"),
  Chunk951912 = require("./951912.js"),
  Chunk379834 = require("./379834.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk964486 = require("./964486.js"),
  Chunk359549 = require("./359549.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk429913 = require("./429913.js"),
  Chunk590703 = require("./590703.js"),
  Chunk708197 = require("./708197.js"),
  Chunk583846 = require("./583846.js"),
  Chunk524799 = require("./524799.js"),
  Chunk928550 = require("./928550.js"),
  Chunk657331 = require("./657331.js"),
  Chunk773669 = require("./773669.js"),
  Chunk486020 = require("./486020.js"),
  Chunk541830 = require("./541830.js"),
  Chunk661191 = require("./661191.js"),
  Chunk240248 = require("./240248.js"),
  Chunk409626 = require("./409626.js"),
  Chunk880405 = require("./880405.js"),
  Chunk422069 = require("./422069.js"),
  Chunk476464 = require("./476464.js"),
  Chunk205184 = require("./205184.js"),
  Chunk611656 = require("./611656.js"),
  Chunk459746 = require("./459746.jsx"),
  Chunk503364 = require("./503364.jsx"),
  Chunk976720 = require("./976720.jsx"),
  Chunk839671 = require("./839671.jsx"),
  Chunk94836 = require("./94836.jsx"),
  Chunk392332 = require("./392332.jsx"),
  Chunk639714 = require("./639714.jsx"),
  Chunk310721 = require("./310721.jsx"),
  Chunk582942 = require("./582942.jsx"),
  Chunk771004 = require("./771004.jsx"),
  Chunk424994 = require("./424994.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js");

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let q = () => (0, l.jsxs)("div", {
    className: $.uv,
    children: [(0, l.jsx)(x.Y3C, {
      size: "xxs"
    }), (0, l.jsx)(x.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: Z.intl.string(Z.t.kAlUsy)
    })]
  }),
  ee = Chunk64700.createContext(true);

function et(e) {
  var t;
  let {
    detectedGame: n,
    application: i,
    entries: s
  } = e, c = r.useMemo(() => null == n ? true : n.genres.map(C.du).join(", "), [n]), d = r.useMemo(() => {
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
  }, [n]), m = (0, T.uJ)(n.iconHash) ? null == i ? true : i.getIconURL(160, P.QB ? "webp" : "png") : P.Ay.getGameAssetURL({
    id: n.applicationId,
    hash: n.iconHash,
    size: 160,
    format: P.QB ? "webp" : "png"
  }), f = G.default.extractTimestamp(i.id), b = 7 >= o()().diff(o()(f), "days"), p = s.some(e => (0, I.CZ)(e) === u.m.GLOBAL), g = null != (t = n.name) ? t : null == i ? true : i.name;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: $.is,
      style: {
        backgroundImage: 'url("'.concat(d, '")')
      }
    }), (0, l.jsxs)("div", {
      className: a()($.Qs, $.fi, $.iH, $.Se),
      children: [(0, l.jsxs)("div", {
        className: $.xx,
        children: [(0, l.jsx)("div", {
          className: $.bb,
          children: (0, l.jsx)(Y.A, {
            game: n,
            application: i,
            className: $.wm,
            size: Y.w.LARGE
          })
        }), (0, l.jsx)(U.A, {
          applicationId: i.id,
          className: $.Gg
        })]
      }), (0, l.jsx)("div", {
        className: a()($.nM, $.Lc, $.Z3),
        children: (0, l.jsxs)("div", {
          children: [(0, l.jsx)(x.Heading, {
            variant: "heading-xl/bold",
            children: g
          }), (0, l.jsxs)("div", {
            className: a()($.nM, $.Lc),
            children: [null != m && (0, l.jsx)("img", {
              className: $.Gt,
              src: m,
              height: 16,
              alt: Z.intl.formatToPlainString(Z.t["nh+jWk"], {
                game: g
              })
            }), (0, l.jsx)(x.Text, {
              variant: "text-sm/semibold",
              color: "text-muted",
              children: c
            }), b && (0, l.jsx)(x.Text, {
              variant: "eyebrow",
              className: $.Ad,
              children: Z.intl.string(Z.t.y2b7CA)
            }), p && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(x.Text, {
                variant: "text-sm/medium",
                children: " \xb7 "
              }), (0, l.jsx)(q, {})]
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
    application: r,
    entries: i,
    officialGuildInvite: a,
    similarGames: s,
    similarGamesError: o,
    onClose: c,
    viewId: d,
    trackAction: u
  } = e;
  return (0, l.jsxs)("div", {
    className: $.V0,
    children: [(0, l.jsx)(B.A, {
      entries: i,
      viewId: d,
      officialGuildId: null == a || null == (t = a.guild) ? true : t.id,
      onClose: c
    }), (0, l.jsx)(F.A, {
      detectedGame: n,
      trackAction: u
    }), (0, l.jsx)(V.A, {
      applicationId: r.id,
      onClose: c,
      trackAction: u,
      similarGames: s,
      similarGamesError: o
    })]
  })
}

function el(e) {
  let {
    onClose: t,
    onCloudPlayClick: n,
    analyticsLocations: r
  } = e;
  return (0, v.A)({
    name: c.ImpressionNames.CLOUD_PLAY_CTA,
    type: c.ImpressionTypes.VIEW,
    properties: {
      location_stack: r
    }
  }), (0, l.jsx)(f.m, {
    text: Z.intl.string(Z.t.JVwWva),
    position: "top",
    children: (0, l.jsx)(x.Button, {
      icon: x.hpF,
      text: Z.intl.string(Z.t["jaYS/h"]),
      variant: "overlay-secondary",
      onClick: () => {
        t(), n()
      },
      fullWidth: true
    })
  })
}

function er(e) {
  let {
    detectedGame: t,
    onSetOfficialGuildInvite: n,
    officialGuildInvite: i,
    trackAction: s,
    onClose: o,
    applicationId: c
  } = e, d = r.useCallback(() => {
    o(), (0, S.closeUserProfileModal)()
  }, [o]), {
    analyticsLocations: u
  } = (0, h.Ay)(j.A.GAME_PROFILE), {
    isCloudPlayButtonShown: m,
    onCloudPlayClick: f
  } = function(e) {
    let {
      applicationId: t,
      analyticsLocations: n
    } = e, l = (0, y.h)(t), r = (0, g.A)({
      application: l,
      analyticsLocations: n
    });
    return {
      onCloudPlayClick: r,
      isCloudPlayButtonShown: !(0, w.L)(t) && null != r
    }
  }({
    applicationId: c,
    analyticsLocations: u
  });
  return (0, l.jsxs)("div", {
    className: a()($.pz, $.fi, $.iH),
    children: [(0, l.jsxs)("div", {
      className: $.NC,
      children: [(0, l.jsx)(W.A, {
        invite: i,
        trackClick: s,
        closeModal: d
      }), m && null != f && (0, l.jsx)(el, {
        onClose: d,
        onCloudPlayClick: f,
        analyticsLocations: u
      })]
    }), (0, l.jsx)(x.Heading, {
      variant: "heading-md/bold",
      children: Z.intl.string(Z.t.CI0vSJ)
    }), (0, l.jsxs)("div", {
      className: $.V0,
      children: [(0, l.jsx)(X.A, {
        detectedGame: t,
        trackAction: s
      }), (0, l.jsx)(H.A, {
        detectedGame: t,
        trackClick: s,
        onInviteResolved: n,
        closeModal: d
      }), (0, l.jsx)(z.A, {
        detectedGame: t,
        trackClick: s
      }), (0, l.jsx)(K.A, {
        detectedGame: t
      }), (0, l.jsx)(x.Text, {
        variant: "text-xxs/normal",
        children: Z.intl.format(Z.t.pch2Jw, {
          igdbLink: J.s8
        })
      })]
    })]
  })
}

function ei(e) {
  var t;
  let {
    applicationId: n,
    source: i,
    sourceUserId: s,
    transitionState: o,
    onClose: c,
    appContext: d,
    trackExternalAction: u
  } = e, {
    clientThemesClassName: f
  } = (0, O.Ay)(), g = (0, m.bG)([E.default], () => E.default.locale), j = r.useMemo(() => (0, _.u9)(), []), h = (0, m.yK)([D.A], () => {
    var e;
    return (null != (e = D.A.getSimilarGames(n)) ? e : []).slice(0, 25)
  }), [v, w] = r.useState(null), S = (0, M.s)(n), [P, C] = r.useState(null), G = (0, y.h)(n), T = (0, m.bG)([N.A], () => N.A.getGame(n)), L = null != (t = null == T ? true : T.name) ? t : null == G ? true : G.name, Y = (e, t) => {
    var l;
    (0, _.Tn)({
      gameName: null != L ? L : "",
      applicationId: n,
      action: e,
      similarGameId: t,
      viewId: j,
      officialGuildId: null == P || null == (l = P.guild) ? true : l.id
    })
  };
  return ((0, p.Ay)(() => {
    (0, _.rw)({
      source: i,
      viewId: j,
      applicationId: n,
      gameName: null != L ? L : "",
      authorId: s,
      profileType: _.HV.FullProfile
    }), (0, A.He)()
  }), (0, y.A)(h), r.useEffect(() => {
    g.startsWith("en") || (null == T ? true : T.summaryLocalized) != null || b.A.getDetectableGamesSupplemental([n], {
      forceFetch: true
    })
  }, [n, null == T ? true : T.summaryLocalized, g]), r.useEffect(() => {
    (async () => {
      if (0 === h.length) {
        w(null);
        try {
          await (0, k.N)(n)
        } catch (e) {
          w(e)
        }
      }
    })()
  }, [n, h]), (0, p.Ay)(() => () => {
    var e;
    let t = Date.now(),
      l = S.map(e => {
        let n = (0, I.JM)(e) ? (0, I.W6)(e, t) : (0, I.aJ)(e, g);
        return JSON.stringify({
          item_id: e.id,
          trait: e.traits,
          time_played: n
        })
      });
    (0, _.V_)({
      viewId: j,
      applicationId: n,
      gameName: null != L ? L : "",
      playedFriendIds: S.map(e => e.author_id),
      playedFriendsData: l,
      similarGames: h.filter(R.oS).slice(0, 5),
      officialGuildId: null == P || null == (e = P.guild) ? true : e.id
    })
  }), null == T || null == G) ? null : (0, l.jsx)(x.dWK, {
    transitionState: o,
    onClose: c,
    size: "xl",
    children: (0, l.jsxs)("div", {
      className: a()(f, $.fn),
      children: [(0, l.jsxs)(x.HOs, {
        orientation: "auto",
        children: [(0, l.jsx)(et, {
          detectedGame: T,
          application: G,
          entries: S,
          trackAction: Y
        }), (0, l.jsx)(x.Fmo, {
          children: (0, l.jsxs)("div", {
            className: a()($.Qs, $.rb),
            children: [(0, l.jsx)(en, {
              detectedGame: T,
              application: G,
              entries: S,
              officialGuildInvite: P,
              similarGames: h,
              similarGamesError: v,
              onClose: c,
              viewId: j,
              trackAction: Y
            }), (0, l.jsx)(er, {
              detectedGame: T,
              onSetOfficialGuildInvite: C,
              officialGuildInvite: P,
              trackAction: Y,
              onClose: c,
              appContext: d,
              applicationId: n,
              source: i,
              trackExternalAction: u
            })]
          })
        })]
      }), (0, l.jsx)(es, {})]
    })
  })
}

function ea(e) {
  let {
    applicationId: t,
    transitionState: n
  } = e, {
    clientThemesClassName: r
  } = (0, O.Ay)(), i = (0, y.h)(t), a = (0, m.bG)([N.A], () => N.A.getGame(t));
  return null == i || null == a ? null : (0, l.jsxs)(x.EOs, {
    "data-migration-pending": true,
    transitionState: n,
    size: x.rIJ.DYNAMIC,
    className: r,
    parentComponent: "GameProfileModal",
    children: [(0, l.jsx)(d.I, {
      gameId: a.applicationId
    }), (0, l.jsx)(es, {})]
  })
}

function es() {
  let {
    enabled: e,
    canToggle: t
  } = L.z.useConfig({
    location: "GameProfileModal"
  }), n = r.useContext(ee);
  return null != n && e && t ? (0, l.jsx)("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transform: "scale(0.5) translate(-50%, -50%)"
    },
    children: (0, l.jsx)(x.Button, {
      variant: "primary",
      onClick: () => n.setIsShowingGameProfileV2(e => !e),
      text: "Toggle Game Profile V1 and V2"
    })
  }) : null
}
let eo = function(e) {
  let {
    enabled: t
  } = L.z.useConfig({
    location: "GameProfileModal"
  }), [n, i] = r.useState(t);
  return (0, l.jsx)(ee.Provider, {
    value: {
      setIsShowingGameProfileV2: i
    },
    children: n ? (0, l.jsx)(ea, Q({}, e)) : (0, l.jsx)(ei, Q({}, e))
  })
}