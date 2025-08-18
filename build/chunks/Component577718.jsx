/** Chunk was on 1272 **/
/** chunk id: 577718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk433280 = require("./433280.jsx"),
  Chunk34131 = require("./34131.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk567458 = require("./567458.jsx"),
  Chunk782959 = require("./782959.jsx"),
  Chunk538445 = require("./538445.jsx"),
  Chunk933104 = require("./933104.jsx"),
  Chunk355251 = require("./355251.jsx"),
  Chunk970731 = require("./970731.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk337721 = require("./337721.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk30513 = require("./30513.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk706371 = require("./706371.js"),
  Chunk741160 = require("./741160.js");

function j(e, t) {
  null != t && ((0, E.f2)(t, v.Eu4.TIER_1) ? p.Z.open(t.id, v.pNK.BOOST_PERKS, {
    section: v.jXE.PREMIUM_GUILD_INVITE_SPLASH
  }) : (0, c.Z)({
    analyticsLocations: e,
    analyticsSourceLocation: v.jXE.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, C.o9)()
  }))
}

function A(e) {
  let {
    renderPopout: t,
    renderGuildHeaderDropdownButton: n
  } = e, l = i.useRef(null);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: l,
    renderPopout: () => (0, r.jsx)("div", {
      onClick: e => e.stopPropagation(),
      children: "function" == typeof t ? t(l) : t
    }),
    position: "bottom",
    align: "center",
    animation: a.yRy.Animation.TRANSLATE,
    shouldShow: true,
    children: () => (0, r.jsx)("div", {
      ref: l,
      children: n()
    })
  })
}
let x = Chunk647438.memo(function(e) {
  let {
    contentTypes: t,
    guild: n,
    renderGuildHeaderDropdownButton: i
  } = e, {
    analyticsLocations: a
  } = (0, o.ZP)(), c = () => {
    O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
      type: S.cd.INVITE_SPLASH_UPSELL,
      location: {
        page: v.ZY5.GUILD_CHANNEL
      },
      location_stack: a
    })
  }, [p, C] = (0, s.US)(t, I.R.GUILD_HEADER_TOOLTIPS);
  return (0, r.jsx)(r.Fragment, {
    children: (() => {
      switch (p) {
        case l.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK:
          return (0, r.jsx)(A, {
            renderPopout: (0, r.jsx)(g.Z, {
              guild: n,
              markAsDismissed: C
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_POWERUP_PERKS_COACHMARK:
          return (0, r.jsx)(A, {
            renderPopout: (0, r.jsx)(m.$h, {
              guildId: n.id,
              markAsDismissed: C
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
          return (0, r.jsx)(A, {
            renderPopout: e => (0, r.jsx)(b.Z, {
              guildId: n.id,
              markAsDismissed: C,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, r.jsx)(A, {
            renderPopout: (0, r.jsx)(u.Z, {
              guildId: n.id,
              markAsDismissed: C
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, r.jsx)(A, {
            renderPopout: (0, r.jsx)(y.Z, {
              guild: n,
              markAsDismissed: C
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, E.f2)(n, v.Eu4.TIER_1) ? N.intl.format(N.t.DDzEVl, {}) : N.intl.formatToPlainString(N.t.pMftkJ, {
              boostCount: (0, E.KK)(n, v.Eu4.TIER_1)
            }),
            t = (0, E.f2)(n, v.Eu4.TIER_1) ? N.intl.string(N.t.rOFcBg) : N.intl.string(N.t.hvVgAQ);
          return (0, r.jsx)(A, {
            renderPopout: (0, r.jsx)(_.ZP, {
              onComponentMount: c,
              header: N.intl.string(N.t["36wK8/"]),
              asset: (0, r.jsx)("img", {
                alt: "",
                src: P,
                className: T.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: N.intl.string(N.t.hBIHLS),
              onSecondaryClick: () => j(a),
              onClick: () => j(a, n),
              markAsDismissed: C
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, r.jsx)(A, {
            renderPopout: (0, r.jsx)(f.Z, {
              markAsDismissed: C
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.MEDIA_CHANNEL_UPSELL:
          return (0, r.jsx)(h.Z, {
            guildId: n.id,
            markAsDismissed: C,
            renderTargetElement: i
          });
        case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, r.jsx)(A, {
            renderPopout: (0, r.jsx)(d.Z, {
              guildId: n.id,
              markAsDismissed: C
            }),
            renderGuildHeaderDropdownButton: i
          });
        default:
          return i()
      }
    })()
  })
})