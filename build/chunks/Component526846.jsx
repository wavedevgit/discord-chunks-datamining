/** Chunk was on 88647 **/
/** chunk id: 526846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => L
}), require("./997841.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk535655 = require("./535655.js"),
  Chunk973693 = require("./973693.js"),
  Chunk912370 = require("./912370.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk728285 = require("./728285.jsx"),
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
  Chunk201512 = require("./201512.js");
let R = Chunk973693.Y.APP_LAUNCHER_IN_VOICE_BANNER,
  D = "vc-activities-".concat((0, Chunk772848.Z)());

function k(e) {
  var t;
  let n, {
      channel: l,
      openInPopout: a,
      onClick: o
    } = e,
    {
      fetchState: c,
      voiceBannerCollection: f
    } = function() {
      let e = (0, d.e7)([j.default], () => j.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
      return i.useEffect(() => {
        (0, C.XK)({
          surface: R,
          activeState: e
        })
      }, [e]), {
        fetchState: (0, d.e7)([v.Z], () => v.Z.getFetchState({
          surface: R,
          activeState: e
        })),
        voiceBannerCollection: (0, d.e7)([v.Z], () => v.Z.getCollections({
          surface: R,
          activeState: e
        }))[0]
      }
    }(),
    m = c === v.M.FETCHING,
    y = i.useMemo(() => {
      let e = null == f ? true : f.application_directory_collection_items[0];
      return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null
    }, [null == f ? true : f.application_directory_collection_items]),
    {
      trackItemImpressionRef: O
    } = (0, b.Z)({
      applicationId: null != (t = null == y ? true : y.application.id) ? t : "",
      applicationFlags: null == y ? true : y.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == y ? true : y.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != y ? (0, g.dF)(y.application) : true
    });
  return null == y || null == f || m ? null : (null != y.id && null != y.image_hash && (n = (0, x.$_)({
    itemId: y.id,
    hash: y.image_hash,
    containerWidth: 584
  })), (0, r.jsxs)(p.P3F, {
    className: M.clickableBanner,
    innerRef: O,
    onClick: () => {
      o(), (0, _.Z)({
        context: {
          type: "channel",
          channel: l
        },
        openInPopout: a,
        analyticsLocation: h.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: y.application.id
        }
      })
    },
    children: [(0, r.jsx)("img", {
      alt: y.description,
      src: n,
      className: M.poster
    }), (0, r.jsx)("div", {
      className: M.posterDivider
    })]
  }))
}
let L = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    channel: l,
    isHovered: o,
    closePopout: s,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: g,
    className: b
  } = e, C = (0, d.e7)([f.Z], () => f.Z.useReducedMotion), {
    id: v,
    guild_id: x
  } = l;
  i.useEffect(() => {
    S.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: v,
      guild_id: x
    })
  }, [v, x]), i.useEffect(() => {
    o || s()
  }, [s, o]);
  let j = (0, O.bp)(),
    {
      analyticsLocations: R,
      newestAnalyticsLocation: L
    } = (0, m.ZP)(h.Z.ACTIVITIES_MINI_SHELF),
    U = j === A.IlC.POPOUT,
    B = (n = l.getGuildId(), (0, Z.Z)({
      guildId: n
    }).slice(0, 5));
  i.useEffect(() => {
    let e = setTimeout(() => I.ux(), 1e3);
    return () => clearTimeout(e)
  }, []);
  let {
    enabled: F
  } = P.c.useExperiment({
    location: "ActivitiesMiniShelf"
  }, {
    autoTrackExposure: true
  }), V = i.useCallback(() => {
    (0, _.Z)({
      context: null != l ? {
        type: "channel",
        channel: l
      } : {
        type: "contextless"
      },
      openInPopout: U,
      analyticsLocation: L
    }), u(), g()
  }, [l, L, g, u, U]), H = i.useCallback(e => {
    c(), S.default.track(A.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
      channel_id: l.id,
      guild_id: l.getGuildId()
    })
  }, [c, l]), G = F ? p.iWm : p.nG3;
  return (0, r.jsx)(m.Gt, {
    value: R,
    children: (0, r.jsx)(E.Z, {
      children: (0, r.jsxs)(p.VqE, {
        ref: t,
        "aria-labelledby": D,
        className: b,
        children: [(0, r.jsx)(p.y5t, {
          forceLevel: 2,
          children: (0, r.jsx)(p.nn4, {
            children: (0, r.jsx)(p.H, {
              id: D,
              children: w.intl.string(w.t["2lnYtB"])
            })
          })
        }), (0, r.jsxs)("div", {
          className: M.container,
          onMouseEnter: H,
          onMouseLeave: u,
          children: [(0, r.jsxs)("div", {
            className: M.titleContainer,
            children: [(0, r.jsxs)("div", {
              className: M.titleLeft,
              children: [(0, r.jsx)(G, {
                size: "md",
                className: M.titleLeftIcon,
                color: "var(--interactive-active)"
              }), (0, r.jsx)(p.Text, {
                variant: "eyebrow",
                children: w.intl.string(w.t.f3Cz25)
              })]
            }), (0, r.jsxs)(p.P3F, {
              className: M.titleRight,
              onClick: V,
              children: [(0, r.jsx)(p.Text, {
                variant: "eyebrow",
                children: w.intl.string(w.t["K8+z4S"])
              }), (0, r.jsx)(p.Fbu, {
                size: "custom",
                width: 12,
                height: 12,
                color: "var(--interactive-active)",
                className: M.titleRightIcon
              })]
            })]
          }), (0, r.jsx)(k, {
            openInPopout: U,
            channel: l,
            onClick: () => {
              g(), s()
            }
          }), (0, r.jsxs)("div", {
            className: M.activityContainer,
            children: [B.map(e => (0, r.jsx)(T.Y, {
              context: {
                channel: l,
                type: "channel"
              },
              activityItem: e,
              onClick: () => {
                s(), g()
              },
              aspectRatio: T.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
              animatedDivClass: M.activitySuggestion,
              commandOrigin: y.bB.MINI_SHELF
            }, e.application.id)), (0, r.jsx)("div", {
              className: a()(M.wumpusRocketOuterContainer, {
                [M.wumpusReducedMotion]: C
              }),
              children: (0, r.jsx)("div", {
                className: M.wumpusRocketInnerContainer,
                children: (0, r.jsx)(N.Z, {
                  className: M.wumpusRocket
                })
              })
            })]
          })]
        })]
      })
    })
  })
})