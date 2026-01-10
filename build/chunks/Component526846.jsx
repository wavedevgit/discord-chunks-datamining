/** Chunk was on 81985 **/
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
let N = Chunk973693.Y.APP_LAUNCHER_IN_VOICE_BANNER,
  T = "vc-activities-".concat((0, Chunk772848.Z)());

function A(e) {
  var t;
  let n, {
      channel: l,
      openInPopout: o,
      onClick: p
    } = e,
    {
      fetchState: m,
      voiceBannerCollection: O
    } = function() {
      let e = (0, c.e7)([x.default], () => x.default.onlyShowPreviewAppCollections) ? a.E.PREVIEW : a.E.ACTIVE;
      return i.useEffect(() => {
        (0, b.XK)({
          surface: N,
          activeState: e
        })
      }, [e]), {
        fetchState: (0, c.e7)([y.Z], () => y.Z.getFetchState({
          surface: N,
          activeState: e
        })),
        voiceBannerCollection: (0, c.e7)([y.Z], () => y.Z.getCollections({
          surface: N,
          activeState: e
        }))[0]
      }
    }(),
    j = m === y.M.FETCHING,
    C = i.useMemo(() => {
      let e = null == O ? true : O.application_directory_collection_items[0];
      return null == e ? null : e.type === s.C.APPLICATION_BANNER ? e : null
    }, [null == O ? true : O.application_directory_collection_items]),
    {
      trackItemImpressionRef: E
    } = (0, h.Z)({
      applicationId: null != (t = null == C ? true : C.application.id) ? t : "",
      applicationFlags: null == C ? true : C.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == C ? true : C.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != C ? (0, f.dF)(C.application) : true
    });
  return null == C || null == O || j ? null : (null != C.id && null != C.image_hash && (n = (0, v.$_)({
    itemId: C.id,
    hash: C.image_hash,
    containerWidth: 584
  })), (0, r.jsxs)(u.P3F, {
    className: Z.clickableBanner,
    innerRef: E,
    onClick: () => {
      p(), (0, g.Z)({
        context: {
          type: "channel",
          channel: l
        },
        openInPopout: o,
        analyticsLocation: d.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: C.application.id
        }
      })
    },
    children: [(0, r.jsx)("img", {
      alt: C.description,
      src: n,
      className: Z.poster
    }), (0, r.jsx)("div", {
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
  i.useEffect(() => {
    C.default.track(I.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: b,
      guild_id: y
    })
  }, [b, y]), i.useEffect(() => {
    a || o()
  }, [o, a]);
  let v = (0, O.bp)(),
    {
      analyticsLocations: x,
      newestAnalyticsLocation: N
    } = (0, p.ZP)(d.Z.ACTIVITIES_MINI_SHELF),
    w = v === I.IlC.POPOUT,
    R = (n = l.getGuildId(), (0, S.Z)({
      guildId: n
    }).slice(0, 5));
  i.useEffect(() => {
    let e = setTimeout(() => E.ux(), 1e3);
    return () => clearTimeout(e)
  }, []);
  let D = i.useCallback(() => {
      (0, g.Z)({
        context: null != l ? {
          type: "channel",
          channel: l
        } : {
          type: "contextless"
        },
        openInPopout: w,
        analyticsLocation: N
      }), c(), f()
    }, [l, N, f, c, w]),
    M = i.useCallback(e => {
      s(), C.default.track(I.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
        channel_id: l.id,
        guild_id: l.getGuildId()
      })
    }, [s, l]);
  return (0, r.jsx)(p.Gt, {
    value: x,
    children: (0, r.jsx)(j.Z, {
      children: (0, r.jsxs)(u.VqE, {
        ref: t,
        "aria-labelledby": T,
        className: h,
        children: [(0, r.jsx)(u.y5t, {
          forceLevel: 2,
          children: (0, r.jsx)(u.nn4, {
            children: (0, r.jsx)(u.H, {
              id: T,
              children: P.intl.string(P.t["2lnYtB"])
            })
          })
        }), (0, r.jsxs)("div", {
          className: Z.container,
          onMouseEnter: M,
          onMouseLeave: c,
          children: [(0, r.jsxs)("div", {
            className: Z.titleContainer,
            children: [(0, r.jsxs)("div", {
              className: Z.titleLeft,
              children: [(0, r.jsx)(u.nG3, {
                size: "md",
                className: Z.titleLeftIcon,
                color: "var(--interactive-text-active)"
              }), (0, r.jsx)(u.Text, {
                variant: "eyebrow",
                children: P.intl.string(P.t.f3Cz25)
              })]
            }), (0, r.jsxs)(u.P3F, {
              className: Z.titleRight,
              onClick: D,
              children: [(0, r.jsx)(u.Text, {
                variant: "eyebrow",
                children: P.intl.string(P.t["K8+z4S"])
              }), (0, r.jsx)(u.Fbu, {
                size: "custom",
                width: 12,
                height: 12,
                color: "var(--interactive-text-active)",
                className: Z.titleRightIcon
              })]
            })]
          }), (0, r.jsx)(A, {
            openInPopout: w,
            channel: l,
            onClick: () => {
              f(), o()
            }
          }), (0, r.jsx)("div", {
            className: Z.activityContainer,
            children: R.map(e => (0, r.jsx)(_.Y, {
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
              commandOrigin: m.bB.MINI_SHELF
            }, e.application.id))
          })]
        })]
      })
    })
  })
})