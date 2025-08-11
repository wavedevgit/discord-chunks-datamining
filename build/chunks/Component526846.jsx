/** Chunk was on web.js **/
/** chunk id: 526846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => V
}), require("./997841.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk535655 = require("./535655.js"),
  Chunk973693 = require("./973693.js"),
  Chunk912370 = require("./912370.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk783097 = require("./783097.js"),
  Chunk226026 = require("./226026.js"),
  Chunk397698 = require("./397698.jsx"),
  Chunk895924 = require("./895924.js"),
  Chunk471518 = require("./471518.js"),
  Chunk425986 = require("./425986.js"),
  Chunk216780 = require("./216780.js"),
  Chunk390322 = require("./390322.js"),
  Chunk857192 = require("./857192.js"),
  Chunk626135 = require("./626135.js"),
  Chunk456100 = require("./456100.js"),
  Chunk566620 = require("./566620.js"),
  Chunk127255 = require("./127255.js"),
  Chunk5200 = require("./5200.jsx"),
  Chunk558317 = require("./558317.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk210408 = require("./210408.js");
let M = 5,
  k = 12,
  j = 1e3,
  U = Chunk973693.Y.APP_LAUNCHER_IN_VOICE_BANNER,
  G = 584,
  B = "vc-activities-".concat((0, Chunk772848.Z)());

function Z() {
  let e = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.onlyShowPreviewAppCollections) ? Chunk535655.E.PREVIEW : Chunk535655.E.ACTIVE;
  return Chunk73800.useEffect(() => {
    (0, Chunk471518.XK)({
      surface: U,
      activeState: module
    })
  }, [module]), {
    fetchState: (0, Chunk442837.e7)([Chunk425986.Z], () => Chunk425986.Z.getFetchState({
      surface: U,
      activeState: module
    })),
    voiceBannerCollection: (0, Chunk442837.e7)([Chunk425986.Z], () => Chunk425986.Z.getCollections({
      surface: U,
      activeState: module
    }))[0]
  }
}

function F(e) {
  var t;
  let n, {
      channel: o,
      openInPopout: a,
      onClick: s
    } = e,
    {
      fetchState: l,
      voiceBannerCollection: c
    } = Z(),
    d = l === v.M.FETCHING,
    _ = i.useMemo(() => {
      let e = null == c ? true : c.application_directory_collection_items[0];
      return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null
    }, [null == c ? true : c.application_directory_collection_items]),
    {
      trackItemImpressionRef: p
    } = (0, E.Z)({
      applicationId: null != (t = null == _ ? true : _.application.id) ? t : "",
      applicationFlags: null == _ ? true : _.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == _ ? true : _.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != _ ? (0, g.dF)(_.application) : true
    });
  return null == _ || null == c || d ? null : (null != _.id && null != _.image_hash && (n = (0, I.$_)({
    itemId: _.id,
    hash: _.image_hash,
    containerWidth: G
  })), (0, r.jsxs)(f.P3F, {
    className: x.clickableBanner,
    innerRef: p,
    onClick: () => {
      s(), (0, b.Z)({
        context: {
          type: "channel",
          channel: o
        },
        openInPopout: a,
        analyticsLocation: h.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: _.application.id
        }
      })
    },
    children: [(0, r.jsx)("img", {
      alt: _.description,
      src: n,
      className: x.poster
    }), (0, r.jsx)("div", {
      className: x.posterDivider
    })]
  }))
}
let V = Chunk73800.forwardRef(function(e, t) {
  let {
    channel: n,
    isHovered: o,
    closePopout: s,
    onMouseEnter: l,
    onMouseLeave: c,
    onClick: u,
    className: g
  } = e, E = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), {
    id: O,
    guild_id: v
  } = n;
  i.useEffect(() => {
    A.default.track(D.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: O,
      guild_id: v
    })
  }, [O, v]), i.useEffect(() => {
    o || s()
  }, [s, o]);
  let I = (0, _.bp)(),
    {
      analyticsLocations: S,
      newestAnalyticsLocation: R
    } = (0, m.ZP)(h.Z.ACTIVITIES_MINI_SHELF),
    M = I === D.IlC.POPOUT,
    U = H(n.getGuildId());
  i.useEffect(() => {
    let e = setTimeout(() => C.ux(), j);
    return () => clearTimeout(e)
  }, []);
  let {
    enabled: G
  } = N.c.useExperiment({
    location: "ActivitiesMiniShelf"
  }, {
    autoTrackExposure: true
  }), Z = i.useCallback(() => {
    (0, b.Z)({
      context: null != n ? {
        type: "channel",
        channel: n
      } : {
        type: "contextless"
      },
      openInPopout: M,
      analyticsLocation: R
    }), c(), u()
  }, [n, R, u, c, M]), V = i.useCallback(e => {
    l(), A.default.track(D.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
      channel_id: n.id,
      guild_id: n.getGuildId()
    })
  }, [l, n]), Y = G ? f.iWm : f.nG3;
  return (0, r.jsx)(m.Gt, {
    value: S,
    children: (0, r.jsx)(T.Z, {
      children: (0, r.jsxs)(f.VqE, {
        ref: t,
        "aria-labelledby": B,
        className: g,
        children: [(0, r.jsx)(f.y5t, {
          forceLevel: 2,
          children: (0, r.jsx)(f.nn4, {
            children: (0, r.jsx)(f.H, {
              id: B,
              children: L.intl.string(L.t["2lnYtL"])
            })
          })
        }), (0, r.jsxs)("div", {
          className: x.container,
          onMouseEnter: V,
          onMouseLeave: c,
          children: [(0, r.jsxs)("div", {
            className: x.titleContainer,
            children: [(0, r.jsxs)("div", {
              className: x.titleLeft,
              children: [(0, r.jsx)(Y, {
                size: "md",
                className: x.titleLeftIcon,
                color: "var(--interactive-active)"
              }), (0, r.jsx)(f.Text, {
                variant: "eyebrow",
                children: L.intl.string(L.t.f3Cz29)
              })]
            }), (0, r.jsxs)(f.P3F, {
              className: x.titleRight,
              onClick: Z,
              children: [(0, r.jsx)(f.Text, {
                variant: "eyebrow",
                children: L.intl.string(L.t["K8+z4e"])
              }), (0, r.jsx)(f.Fbu, {
                size: "custom",
                width: k,
                height: k,
                color: "var(--interactive-active)",
                className: x.titleRightIcon
              })]
            })]
          }), (0, r.jsx)(F, {
            openInPopout: M,
            channel: n,
            onClick: () => {
              u(), s()
            }
          }), (0, r.jsxs)("div", {
            className: x.activityContainer,
            children: [U.map(e => (0, r.jsx)(P.Y, {
              context: {
                channel: n,
                type: "channel"
              },
              activityItem: e,
              onClick: () => {
                s(), u()
              },
              aspectRatio: P.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
              animatedDivClass: x.activitySuggestion,
              commandOrigin: y.bB.MINI_SHELF
            }, e.application.id)), (0, r.jsx)("div", {
              className: a()(x.wumpusRocketOuterContainer, {
                [x.wumpusReducedMotion]: E
              }),
              children: (0, r.jsx)("div", {
                className: x.wumpusRocketInnerContainer,
                children: (0, r.jsx)(w.Z, {
                  className: x.wumpusRocket
                })
              })
            })]
          })]
        })]
      })
    })
  })
});

function H(e) {
  return (0, R.Z)({
    guildId: e
  }).slice(0, M)
}