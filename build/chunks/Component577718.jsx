/** Chunk was on 1272 **/
/** chunk id: 577718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
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
  Chunk741160 = require("./741160.js"),
  Chunk829972 = require("./829972.js"),
  Chunk31932 = require("./31932.js");

function Z(e) {
  null != e && f.Z.open(e.id, I.pNK.BOOST_PERKS, {
    section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR
  })
}

function w(e, t) {
  null != t && ((0, y.f2)(t, I.Eu4.TIER_1) ? f.Z.open(t.id, I.pNK.BOOST_PERKS, {
    section: I.jXE.PREMIUM_GUILD_INVITE_SPLASH
  }) : (0, u.Z)({
    analyticsLocations: e,
    analyticsSourceLocation: I.jXE.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, S.o9)()
  }))
}

function L(e) {
  let {
    renderPopout: t,
    renderGuildHeaderDropdownButton: n
  } = e, l = i.useRef(null);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: l,
    renderPopout: () => (0, r.jsx)("div", {
      onClick: e => e.stopPropagation(),
      children: "function" == typeof t ? t(l) : t
    }),
    position: "bottom",
    align: "center",
    animation: o.yRy.Animation.TRANSLATE,
    shouldShow: true,
    children: () => (0, r.jsx)("div", {
      ref: l,
      children: n()
    })
  })
}
let R = Chunk647438.memo(function(e) {
  let {
    contentTypes: t,
    theme: n,
    guild: i,
    renderGuildHeaderDropdownButton: o
  } = e, {
    analyticsLocations: u
  } = (0, s.ZP)(), f = () => {
    E.default.track(I.rMx.TOOLTIP_VIEWED, {
      type: N.cd.PREMIUM_PROGRESS_BAR,
      location: {
        page: I.ZY5.GUILD_CHANNEL
      }
    })
  }, S = () => {
    E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.INVITE_SPLASH_UPSELL,
      location: {
        page: I.ZY5.GUILD_CHANNEL
      },
      location_stack: u
    })
  }, R = (0, a.wj)(n) ? x : A, [D, k] = (0, c.US)(t, C.R.GUILD_HEADER_TOOLTIPS);
  return (0, r.jsx)(r.Fragment, {
    children: (() => {
      switch (D) {
        case l.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(m.Z, {
              guild: i,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.GUILD_POWERUP_PERKS_COACHMARK:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(b.$h, {
              guildId: i.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
          return (0, r.jsx)(L, {
            renderPopout: e => (0, r.jsx)(_.Z, {
              guildId: i.id,
              markAsDismissed: k,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(O.ZP, {
              onComponentMount: f,
              header: T.intl.string(T.t.nxtaFx),
              asset: (0, r.jsx)("img", {
                alt: "",
                src: R,
                className: P.fullWidthImage
              }),
              content: T.intl.format(T.t.ujItEh, {}),
              buttonCTA: T.intl.string(T.t.UzVPra),
              secondaryButtonCTA: T.intl.string(T.t["KkK/aG"]),
              onSecondaryClick: () => Z(),
              onClick: () => Z(i),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(O.ZP, {
              onComponentMount: f,
              header: T.intl.string(T.t.KAsfPT),
              asset: (0, r.jsx)("img", {
                alt: "",
                src: R,
                className: P.fullWidthImage
              }),
              content: T.intl.format(T.t.zK1hpq, {}),
              buttonCTA: T.intl.string(T.t.UzVPra),
              secondaryButtonCTA: T.intl.string(T.t["KkK/aG"]),
              onSecondaryClick: () => Z(),
              onClick: () => Z(i),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(d.Z, {
              guildId: i.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(v.Z, {
              guild: i,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, y.f2)(i, I.Eu4.TIER_1) ? T.intl.format(T.t.DDzEVl, {}) : T.intl.formatToPlainString(T.t.pMftkJ, {
              boostCount: (0, y.KK)(i, I.Eu4.TIER_1)
            }),
            t = (0, y.f2)(i, I.Eu4.TIER_1) ? T.intl.string(T.t.rOFcBg) : T.intl.string(T.t.hvVgAQ);
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(O.ZP, {
              onComponentMount: S,
              header: T.intl.string(T.t["36wK8/"]),
              asset: (0, r.jsx)("img", {
                alt: "",
                src: j,
                className: P.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: T.intl.string(T.t.hBIHLS),
              onSecondaryClick: () => w(u),
              onClick: () => w(u, i),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(h.Z, {
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        case l.z.MEDIA_CHANNEL_UPSELL:
          return (0, r.jsx)(g.Z, {
            guildId: i.id,
            markAsDismissed: k,
            renderTargetElement: o
          });
        case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, r.jsx)(L, {
            renderPopout: (0, r.jsx)(p.Z, {
              guildId: i.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: o
          });
        default:
          return o()
      }
    })()
  })
})