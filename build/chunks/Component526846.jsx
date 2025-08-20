/** Chunk was on 5665 **/
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
  Chunk706527 = require("./706527.js"),
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
  Chunk201512 = require("./201512.js");
let M = Chunk973693.Y.APP_LAUNCHER_IN_VOICE_BANNER,
  k = "vc-activities-".concat((0, Chunk772848.Z)());

function D(e) {
  var t;
  let n, {
      channel: l,
      openInPopout: a,
      onClick: o
    } = e,
    {
      fetchState: c,
      voiceBannerCollection: h
    } = function() {
      let e = (0, d.e7)([E.default], () => E.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE;
      return i.useEffect(() => {
        (0, x.XK)({
          surface: M,
          activeState: e
        })
      }, [e]), {
        fetchState: (0, d.e7)([v.Z], () => v.Z.getFetchState({
          surface: M,
          activeState: e
        })),
        voiceBannerCollection: (0, d.e7)([v.Z], () => v.Z.getCollections({
          surface: M,
          activeState: e
        }))[0]
      }
    }(),
    f = c === v.M.FETCHING,
    g = i.useMemo(() => {
      let e = null == h ? true : h.application_directory_collection_items[0];
      return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null
    }, [null == h ? true : h.application_directory_collection_items]),
    {
      trackItemImpressionRef: C
    } = (0, y.Z)({
      applicationId: null != (t = null == g ? true : g.application.id) ? t : "",
      applicationFlags: null == g ? true : g.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == g ? true : g.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != g ? (0, b.dF)(g.application) : true
    });
  return null == g || null == h || f ? null : (null != g.id && null != g.image_hash && (n = (0, O.$_)({
    itemId: g.id,
    hash: g.image_hash,
    containerWidth: 584
  })), (0, r.jsxs)(p.P3F, {
    className: R.clickableBanner,
    innerRef: C,
    onClick: () => {
      o(), (0, _.Z)({
        context: {
          type: "channel",
          channel: l
        },
        openInPopout: a,
        analyticsLocation: m.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: g.application.id
        }
      })
    },
    children: [(0, r.jsx)("img", {
      alt: g.description,
      src: n,
      className: R.poster
    }), (0, r.jsx)("div", {
      className: R.posterDivider
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
    onClick: b,
    className: y
  } = e, x = (0, d.e7)([f.Z], () => f.Z.useReducedMotion), {
    id: v,
    guild_id: O
  } = l;
  i.useEffect(() => {
    S.default.track(A.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: v,
      guild_id: O
    })
  }, [v, O]), i.useEffect(() => {
    o || s()
  }, [s, o]);
  let E = (0, h.bp)(),
    {
      analyticsLocations: M,
      newestAnalyticsLocation: L
    } = (0, g.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
    U = E === A.IlC.POPOUT,
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
  }), H = i.useCallback(() => {
    (0, _.Z)({
      context: null != l ? {
        type: "channel",
        channel: l
      } : {
        type: "contextless"
      },
      openInPopout: U,
      analyticsLocation: L
    }), u(), b()
  }, [l, L, b, u, U]), G = i.useCallback(e => {
    c(), S.default.track(A.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
      channel_id: l.id,
      guild_id: l.getGuildId()
    })
  }, [c, l]), V = F ? p.iWm : p.nG3;
  return (0, r.jsx)(g.Gt, {
    value: M,
    children: (0, r.jsx)(j.Z, {
      children: (0, r.jsxs)(p.VqE, {
        ref: t,
        "aria-labelledby": k,
        className: y,
        children: [(0, r.jsx)(p.y5t, {
          forceLevel: 2,
          children: (0, r.jsx)(p.nn4, {
            children: (0, r.jsx)(p.H, {
              id: k,
              children: w.intl.string(w.t["2lnYtL"])
            })
          })
        }), (0, r.jsxs)("div", {
          className: R.container,
          onMouseEnter: G,
          onMouseLeave: u,
          children: [(0, r.jsxs)("div", {
            className: R.titleContainer,
            children: [(0, r.jsxs)("div", {
              className: R.titleLeft,
              children: [(0, r.jsx)(V, {
                size: "md",
                className: R.titleLeftIcon,
                color: "var(--interactive-active)"
              }), (0, r.jsx)(p.Text, {
                variant: "eyebrow",
                children: w.intl.string(w.t.f3Cz29)
              })]
            }), (0, r.jsxs)(p.P3F, {
              className: R.titleRight,
              onClick: H,
              children: [(0, r.jsx)(p.Text, {
                variant: "eyebrow",
                children: w.intl.string(w.t["K8+z4e"])
              }), (0, r.jsx)(p.Fbu, {
                size: "custom",
                width: 12,
                height: 12,
                color: "var(--interactive-active)",
                className: R.titleRightIcon
              })]
            })]
          }), (0, r.jsx)(D, {
            openInPopout: U,
            channel: l,
            onClick: () => {
              b(), s()
            }
          }), (0, r.jsxs)("div", {
            className: R.activityContainer,
            children: [B.map(e => (0, r.jsx)(T.Y, {
              context: {
                channel: l,
                type: "channel"
              },
              activityItem: e,
              onClick: () => {
                s(), b()
              },
              aspectRatio: T.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
              animatedDivClass: R.activitySuggestion,
              commandOrigin: C.bB.MINI_SHELF
            }, e.application.id)), (0, r.jsx)("div", {
              className: a()(R.wumpusRocketOuterContainer, {
                [R.wumpusReducedMotion]: x
              }),
              children: (0, r.jsx)("div", {
                className: R.wumpusRocketInnerContainer,
                children: (0, r.jsx)(N.Z, {
                  className: R.wumpusRocket
                })
              })
            })]
          })]
        })]
      })
    })
  })
})