/** Chunk was on 77870 **/
/** chunk id: 807067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => R
}), require("./938796.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk724002 = require("./724002.js"),
  Chunk287174 = require("./287174.js"),
  Chunk487899 = require("./487899.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk735991 = require("./735991.js"),
  Chunk786115 = require("./786115.js"),
  Chunk975412 = require("./975412.jsx"),
  Chunk392054 = require("./392054.js"),
  Chunk354138 = require("./354138.js"),
  Chunk111042 = require("./111042.js"),
  Chunk767599 = require("./767599.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk246356 = require("./246356.js"),
  Chunk111162 = require("./111162.js"),
  Chunk954571 = require("./954571.js"),
  Chunk795816 = require("./795816.js"),
  Chunk887700 = require("./887700.js"),
  Chunk855446 = require("./855446.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk176187 = require("./176187.js");
let T = Chunk287174.K.APP_LAUNCHER_IN_VOICE_BANNER,
  P = "vc-activities-".concat((0, Chunk835245.A)());

function w(e) {
  var t;
  let n, i, {
      channel: a,
      openInPopout: p,
      onClick: m
    } = e,
    {
      fetchState: _,
      voiceBannerCollection: O
    } = (n = (0, c.bG)([j.default], () => j.default.onlyShowPreviewAppCollections) ? s.W.PREVIEW : s.W.ACTIVE, l.useEffect(() => {
      (0, b.An)({
        surface: T,
        activeState: n
      })
    }, [n]), {
      fetchState: (0, c.bG)([A.A], () => A.A.getFetchState({
        surface: T,
        activeState: n
      })),
      voiceBannerCollection: (0, c.bG)([A.A], () => A.A.getCollections({
        surface: T,
        activeState: n
      }))[0]
    }),
    v = _ === A.e.FETCHING,
    x = l.useMemo(() => {
      let e = null == O ? true : O.application_directory_collection_items[0];
      return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null
    }, [null == O ? true : O.application_directory_collection_items]),
    {
      trackItemImpressionRef: E
    } = (0, f.A)({
      applicationId: null != (t = null == x ? true : x.application.id) ? t : "",
      applicationFlags: null == x ? true : x.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == x ? true : x.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != x ? (0, h.Ii)(x.application) : true
    });
  return null == x || null == O || v ? null : (null != x.id && null != x.image_hash && (i = (0, y.DH)({
    itemId: x.id,
    hash: x.image_hash,
    containerWidth: 584
  })), (0, r.jsxs)(u.DUT, {
    className: N.V8,
    innerRef: E,
    onClick: () => {
      m(), (0, g.A)({
        context: {
          type: "channel",
          channel: a
        },
        openInPopout: p,
        analyticsLocation: d.A.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: x.application.id
        }
      })
    },
    children: [(0, r.jsx)("img", {
      alt: x.description,
      src: i,
      className: N.W_
    }), (0, r.jsx)("div", {
      className: N.LV
    })]
  }))
}
let R = Chunk64700.forwardRef(function(e, t) {
  var n;
  let {
    channel: i,
    isHovered: s,
    closePopout: a,
    onMouseEnter: o,
    onMouseLeave: c,
    onClick: h,
    className: f
  } = e, {
    id: b,
    guild_id: A
  } = i;
  l.useEffect(() => {
    v.default.track(S.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: b,
      guild_id: A
    })
  }, [b, A]), l.useEffect(() => {
    s || a()
  }, [a, s]);
  let y = (0, _.Us)(),
    {
      analyticsLocations: j,
      newestAnalyticsLocation: T
    } = (0, p.Ay)(d.A.ACTIVITIES_MINI_SHELF),
    R = y === S.BRT.POPOUT,
    D = (n = i.getGuildId(), (0, E.A)({
      guildId: n
    }).slice(0, 5));
  l.useEffect(() => {
    let e = setTimeout(() => x.LK(), 1e3);
    return () => clearTimeout(e)
  }, []);
  let M = l.useCallback(() => {
      (0, g.A)({
        context: null != i ? {
          type: "channel",
          channel: i
        } : {
          type: "contextless"
        },
        openInPopout: R,
        analyticsLocation: T
      }), c(), h()
    }, [i, T, h, c, R]),
    L = l.useCallback(e => {
      o(), v.default.track(S.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
        channel_id: i.id,
        guild_id: i.getGuildId()
      })
    }, [o, i]);
  return (0, r.jsx)(p.f5, {
    value: j,
    children: (0, r.jsx)(O.A, {
      children: (0, r.jsxs)(u.lGe, {
        ref: t,
        "aria-labelledby": P,
        className: f,
        children: [(0, r.jsx)(u.Fmo, {
          forceLevel: 2,
          children: (0, r.jsx)(u.AC4, {
            children: (0, r.jsx)(u.H, {
              id: P,
              children: I.intl.string(I.t["2lnYtB"])
            })
          })
        }), (0, r.jsxs)("div", {
          className: N.kL,
          onMouseEnter: L,
          onMouseLeave: c,
          children: [(0, r.jsxs)("div", {
            className: N.gn,
            children: [(0, r.jsxs)("div", {
              className: N.gH,
              children: [(0, r.jsx)(u.k9F, {
                size: "md",
                className: N.ch,
                color: "var(--interactive-text-active)"
              }), (0, r.jsx)(u.Text, {
                variant: "eyebrow",
                children: I.intl.string(I.t.f3Cz25)
              })]
            }), (0, r.jsxs)(u.DUT, {
              className: N.hc,
              onClick: M,
              children: [(0, r.jsx)(u.Text, {
                variant: "eyebrow",
                children: I.intl.string(I.t["K8+z4S"])
              }), (0, r.jsx)(u._BQ, {
                size: "custom",
                width: 12,
                height: 12,
                color: "var(--interactive-text-active)",
                className: N.O6
              })]
            })]
          }), (0, r.jsx)(w, {
            openInPopout: R,
            channel: i,
            onClick: () => {
              h(), a()
            }
          }), (0, r.jsx)("div", {
            className: N.ht,
            children: D.map(e => (0, r.jsx)(C.C, {
              context: {
                channel: i,
                type: "channel"
              },
              activityItem: e,
              onClick: () => {
                a(), h()
              },
              aspectRatio: C.C.AspectRatio.THIRTEEN_BY_ELEVEN,
              animatedDivClass: N.KU,
              commandOrigin: m.iw.MINI_SHELF
            }, e.application.id))
          })]
        })]
      })
    })
  })
})