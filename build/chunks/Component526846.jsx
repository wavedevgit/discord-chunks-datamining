/** Chunk was on 34740 **/
/** chunk id: 526846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => D
}), require("./997841.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk566620 = require("./566620.js"),
  Chunk127255 = require("./127255.js"),
  Chunk5200 = require("./5200.jsx"),
  Chunk558317 = require("./558317.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201512 = require("./201512.js");
let M = Chunk973693.Y.APP_LAUNCHER_IN_VOICE_BANNER,
  R = "vc-activities-".concat((0, Chunk772848.Z)());

function L(e) {
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
      return r.useEffect(() => {
        (0, v.XK)({
          surface: M,
          activeState: e
        })
      }, [e]), {
        fetchState: (0, d.e7)([_.Z], () => _.Z.getFetchState({
          surface: M,
          activeState: e
        })),
        voiceBannerCollection: (0, d.e7)([_.Z], () => _.Z.getCollections({
          surface: M,
          activeState: e
        }))[0]
      }
    }(),
    m = c === _.M.FETCHING,
    C = r.useMemo(() => {
      let e = null == h ? true : h.application_directory_collection_items[0];
      return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null
    }, [null == h ? true : h.application_directory_collection_items]),
    {
      trackItemImpressionRef: O
    } = (0, b.Z)({
      applicationId: null != (t = null == C ? true : C.application.id) ? t : "",
      applicationFlags: null == C ? true : C.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == C ? true : C.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != C ? (0, g.dF)(C.application) : true
    });
  return null == C || null == h || m ? null : (null != C.id && null != C.image_hash && (n = (0, x.$_)({
    itemId: C.id,
    hash: C.image_hash,
    containerWidth: 584
  })), (0, i.jsxs)(p.P3F, {
    className: w.clickableBanner,
    innerRef: O,
    onClick: () => {
      o(), (0, y.Z)({
        context: {
          type: "channel",
          channel: l
        },
        openInPopout: a,
        analyticsLocation: f.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: C.application.id
        }
      })
    },
    children: [(0, i.jsx)("img", {
      alt: C.description,
      src: n,
      className: w.poster
    }), (0, i.jsx)("div", {
      className: w.posterDivider
    })]
  }))
}
let D = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    channel: l,
    isHovered: o,
    closePopout: s,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: g,
    className: b
  } = e, v = (0, d.e7)([h.Z], () => h.Z.useReducedMotion), {
    id: _,
    guild_id: x
  } = l;
  r.useEffect(() => {
    S.default.track(N.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: _,
      guild_id: x
    })
  }, [_, x]), r.useEffect(() => {
    o || s()
  }, [s, o]);
  let E = (0, O.bp)(),
    {
      analyticsLocations: M,
      newestAnalyticsLocation: D
    } = (0, m.ZP)(f.Z.ACTIVITIES_MINI_SHELF),
    k = E === N.IlC.POPOUT,
    U = (n = l.getGuildId(), (0, I.Z)({
      guildId: n
    }).slice(0, 5));
  r.useEffect(() => {
    let e = setTimeout(() => P.ux(), 1e3);
    return () => clearTimeout(e)
  }, []);
  let B = r.useCallback(() => {
      (0, y.Z)({
        context: null != l ? {
          type: "channel",
          channel: l
        } : {
          type: "contextless"
        },
        openInPopout: k,
        analyticsLocation: D
      }), u(), g()
    }, [l, D, g, u, k]),
    F = r.useCallback(e => {
      c(), S.default.track(N.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
        channel_id: l.id,
        guild_id: l.getGuildId()
      })
    }, [c, l]);
  return (0, i.jsx)(m.Gt, {
    value: M,
    children: (0, i.jsx)(j.Z, {
      children: (0, i.jsxs)(p.VqE, {
        ref: t,
        "aria-labelledby": R,
        className: b,
        children: [(0, i.jsx)(p.y5t, {
          forceLevel: 2,
          children: (0, i.jsx)(p.nn4, {
            children: (0, i.jsx)(p.H, {
              id: R,
              children: A.intl.string(A.t["2lnYtB"])
            })
          })
        }), (0, i.jsxs)("div", {
          className: w.container,
          onMouseEnter: F,
          onMouseLeave: u,
          children: [(0, i.jsxs)("div", {
            className: w.titleContainer,
            children: [(0, i.jsxs)("div", {
              className: w.titleLeft,
              children: [(0, i.jsx)(p.nG3, {
                size: "md",
                className: w.titleLeftIcon,
                color: "var(--interactive-active)"
              }), (0, i.jsx)(p.Text, {
                variant: "eyebrow",
                children: A.intl.string(A.t.f3Cz25)
              })]
            }), (0, i.jsxs)(p.P3F, {
              className: w.titleRight,
              onClick: B,
              children: [(0, i.jsx)(p.Text, {
                variant: "eyebrow",
                children: A.intl.string(A.t["K8+z4S"])
              }), (0, i.jsx)(p.Fbu, {
                size: "custom",
                width: 12,
                height: 12,
                color: "var(--interactive-active)",
                className: w.titleRightIcon
              })]
            })]
          }), (0, i.jsx)(L, {
            openInPopout: k,
            channel: l,
            onClick: () => {
              g(), s()
            }
          }), (0, i.jsxs)("div", {
            className: w.activityContainer,
            children: [U.map(e => (0, i.jsx)(Z.Y, {
              context: {
                channel: l,
                type: "channel"
              },
              activityItem: e,
              onClick: () => {
                s(), g()
              },
              aspectRatio: Z.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
              animatedDivClass: w.activitySuggestion,
              commandOrigin: C.bB.MINI_SHELF
            }, e.application.id)), (0, i.jsx)("div", {
              className: a()(w.wumpusRocketOuterContainer, {
                [w.wumpusReducedMotion]: v
              }),
              children: (0, i.jsx)("div", {
                className: w.wumpusRocketInnerContainer,
                children: (0, i.jsx)(T.Z, {
                  className: w.wumpusRocket
                })
              })
            })]
          })]
        })]
      })
    })
  })
})