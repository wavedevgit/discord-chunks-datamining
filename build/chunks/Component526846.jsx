/** Chunk was on 40184 **/
/** chunk id: 526846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => w
}), require("./997841.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk535655 = require("./535655.js"),
  Chunk973693 = require("./973693.js"),
  Chunk912370 = require("./912370.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk631769 = require("./631769.js");
let T = Chunk973693.Y.APP_LAUNCHER_IN_VOICE_BANNER,
  N = "vc-activities-".concat((0, Chunk772848.Z)());

function A(e) {
  var t;
  let n, {
      channel: l,
      openInPopout: o,
      onClick: p
    } = e,
    {
      fetchState: g,
      voiceBannerCollection: v
    } = function() {
      let e = (0, c.e7)([O.default], () => O.default.onlyShowPreviewAppCollections) ? a.E.PREVIEW : a.E.ACTIVE;
      return r.useEffect(() => {
        (0, b.XK)({
          surface: T,
          activeState: e
        })
      }, [e]), {
        fetchState: (0, c.e7)([y.Z], () => y.Z.getFetchState({
          surface: T,
          activeState: e
        })),
        voiceBannerCollection: (0, c.e7)([y.Z], () => y.Z.getCollections({
          surface: T,
          activeState: e
        }))[0]
      }
    }(),
    x = g === y.M.FETCHING,
    E = r.useMemo(() => {
      let e = null == v ? true : v.application_directory_collection_items[0];
      return null == e ? null : e.type === s.C.APPLICATION_BANNER ? e : null
    }, [null == v ? true : v.application_directory_collection_items]),
    {
      trackItemImpressionRef: j
    } = (0, h.Z)({
      applicationId: null != (t = null == E ? true : E.application.id) ? t : "",
      applicationFlags: null == E ? true : E.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == E ? true : E.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != E ? (0, f.dF)(E.application) : true
    });
  return null == E || null == v || x ? null : (null != E.id && null != E.image_hash && (n = (0, C.$_)({
    itemId: E.id,
    hash: E.image_hash,
    containerWidth: 584
  })), (0, i.jsxs)(u.P3F, {
    className: Z.clickableBanner,
    innerRef: j,
    onClick: () => {
      p(), (0, m.Z)({
        context: {
          type: "channel",
          channel: l
        },
        openInPopout: o,
        analyticsLocation: d.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: E.application.id
        }
      })
    },
    children: [(0, i.jsx)("img", {
      alt: E.description,
      src: n,
      className: Z.poster
    }), (0, i.jsx)("div", {
      className: Z.posterDivider
    })]
  }))
}
let w = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    channel: l,
    isHovered: a,
    closePopout: o,
    onMouseEnter: s,
    onMouseLeave: c,
    onClick: f,
    className: h
  } = e, {
    id: b,
    guild_id: y
  } = l;
  r.useEffect(() => {
    E.default.track(P.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: b,
      guild_id: y
    })
  }, [b, y]), r.useEffect(() => {
    a || o()
  }, [o, a]);
  let C = (0, v.bp)(),
    {
      analyticsLocations: O,
      newestAnalyticsLocation: T
    } = (0, p.ZP)(d.Z.ACTIVITIES_MINI_SHELF),
    w = C === P.IlC.POPOUT,
    M = (n = l.getGuildId(), (0, S.Z)({
      guildId: n
    }).slice(0, 5));
  r.useEffect(() => {
    let e = setTimeout(() => j.ux(), 1e3);
    return () => clearTimeout(e)
  }, []);
  let R = r.useCallback(() => {
      (0, m.Z)({
        context: null != l ? {
          type: "channel",
          channel: l
        } : {
          type: "contextless"
        },
        openInPopout: w,
        analyticsLocation: T
      }), c(), f()
    }, [l, T, f, c, w]),
    D = r.useCallback(e => {
      s(), E.default.track(P.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
        channel_id: l.id,
        guild_id: l.getGuildId()
      })
    }, [s, l]);
  return (0, i.jsx)(p.Gt, {
    value: O,
    children: (0, i.jsx)(x.Z, {
      children: (0, i.jsxs)(u.VqE, {
        ref: t,
        "aria-labelledby": N,
        className: h,
        children: [(0, i.jsx)(u.y5t, {
          forceLevel: 2,
          children: (0, i.jsx)(u.nn4, {
            children: (0, i.jsx)(u.H, {
              id: N,
              children: I.intl.string(I.t["2lnYtB"])
            })
          })
        }), (0, i.jsxs)("div", {
          className: Z.container,
          onMouseEnter: D,
          onMouseLeave: c,
          children: [(0, i.jsxs)("div", {
            className: Z.titleContainer,
            children: [(0, i.jsxs)("div", {
              className: Z.titleLeft,
              children: [(0, i.jsx)(u.nG3, {
                size: "md",
                className: Z.titleLeftIcon,
                color: "var(--interactive-text-active)"
              }), (0, i.jsx)(u.Text, {
                variant: "eyebrow",
                children: I.intl.string(I.t.f3Cz25)
              })]
            }), (0, i.jsxs)(u.P3F, {
              className: Z.titleRight,
              onClick: R,
              children: [(0, i.jsx)(u.Text, {
                variant: "eyebrow",
                children: I.intl.string(I.t["K8+z4S"])
              }), (0, i.jsx)(u.Fbu, {
                size: "custom",
                width: 12,
                height: 12,
                color: "var(--interactive-text-active)",
                className: Z.titleRightIcon
              })]
            })]
          }), (0, i.jsx)(A, {
            openInPopout: w,
            channel: l,
            onClick: () => {
              f(), o()
            }
          }), (0, i.jsx)("div", {
            className: Z.activityContainer,
            children: M.map(e => (0, i.jsx)(_.Y, {
              context: {
                channel: l,
                type: "channel"
              },
              activityItem: e,
              onClick: () => {
                o(), f()
              },
              aspectRatio: _.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
              animatedDivClass: Z.activitySuggestion,
              commandOrigin: g.bB.MINI_SHELF
            }, e.application.id))
          })]
        })]
      })
    })
  })
})