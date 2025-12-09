/** Chunk was on 73755 **/
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
  Chunk201512 = require("./201512.js");
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
      voiceBannerCollection: _
    } = function() {
      let e = (0, c.e7)([O.default], () => O.default.onlyShowPreviewAppCollections) ? a.E.PREVIEW : a.E.ACTIVE;
      return r.useEffect(() => {
        (0, b.XK)({
          surface: T,
          activeState: e
        })
      }, [e]), {
        fetchState: (0, c.e7)([C.Z], () => C.Z.getFetchState({
          surface: T,
          activeState: e
        })),
        voiceBannerCollection: (0, c.e7)([C.Z], () => C.Z.getCollections({
          surface: T,
          activeState: e
        }))[0]
      }
    }(),
    v = g === C.M.FETCHING,
    x = r.useMemo(() => {
      let e = null == _ ? true : _.application_directory_collection_items[0];
      return null == e ? null : e.type === s.C.APPLICATION_BANNER ? e : null
    }, [null == _ ? true : _.application_directory_collection_items]),
    {
      trackItemImpressionRef: E
    } = (0, f.Z)({
      applicationId: null != (t = null == x ? true : x.application.id) ? t : "",
      applicationFlags: null == x ? true : x.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == x ? true : x.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != x ? (0, h.dF)(x.application) : true
    });
  return null == x || null == _ || v ? null : (null != x.id && null != x.image_hash && (n = (0, y.$_)({
    itemId: x.id,
    hash: x.image_hash,
    containerWidth: 584
  })), (0, i.jsxs)(u.P3F, {
    className: Z.clickableBanner,
    innerRef: E,
    onClick: () => {
      p(), (0, m.Z)({
        context: {
          type: "channel",
          channel: l
        },
        openInPopout: o,
        analyticsLocation: d.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: x.application.id
        }
      })
    },
    children: [(0, i.jsx)("img", {
      alt: x.description,
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
    onClick: h,
    className: f
  } = e, {
    id: b,
    guild_id: C
  } = l;
  r.useEffect(() => {
    x.default.track(P.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: b,
      guild_id: C
    })
  }, [b, C]), r.useEffect(() => {
    a || o()
  }, [o, a]);
  let y = (0, _.bp)(),
    {
      analyticsLocations: O,
      newestAnalyticsLocation: T
    } = (0, p.ZP)(d.Z.ACTIVITIES_MINI_SHELF),
    w = y === P.IlC.POPOUT,
    M = (n = l.getGuildId(), (0, j.Z)({
      guildId: n
    }).slice(0, 5));
  r.useEffect(() => {
    let e = setTimeout(() => E.ux(), 1e3);
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
      }), c(), h()
    }, [l, T, h, c, w]),
    L = r.useCallback(e => {
      s(), x.default.track(P.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
        channel_id: l.id,
        guild_id: l.getGuildId()
      })
    }, [s, l]);
  return (0, i.jsx)(p.Gt, {
    value: O,
    children: (0, i.jsx)(v.Z, {
      children: (0, i.jsxs)(u.VqE, {
        ref: t,
        "aria-labelledby": N,
        className: f,
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
          onMouseEnter: L,
          onMouseLeave: c,
          children: [(0, i.jsxs)("div", {
            className: Z.titleContainer,
            children: [(0, i.jsxs)("div", {
              className: Z.titleLeft,
              children: [(0, i.jsx)(u.nG3, {
                size: "md",
                className: Z.titleLeftIcon,
                color: "var(--interactive-active)"
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
                color: "var(--interactive-active)",
                className: Z.titleRightIcon
              })]
            })]
          }), (0, i.jsx)(A, {
            openInPopout: w,
            channel: l,
            onClick: () => {
              h(), o()
            }
          }), (0, i.jsx)("div", {
            className: Z.activityContainer,
            children: M.map(e => (0, i.jsx)(S.Y, {
              context: {
                channel: l,
                type: "channel"
              },
              activityItem: e,
              onClick: () => {
                o(), h()
              },
              aspectRatio: S.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
              animatedDivClass: Z.activitySuggestion,
              commandOrigin: g.bB.MINI_SHELF
            }, e.application.id))
          })]
        })]
      })
    })
  })
})