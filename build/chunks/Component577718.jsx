/** Chunk was on 1272 **/
/** chunk id: 577718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk433280 = require("./433280.jsx"),
  Chunk34131 = require("./34131.jsx"),
  Chunk567458 = require("./567458.jsx"),
  Chunk230421 = require("./230421.jsx"),
  Chunk782959 = require("./782959.jsx"),
  Chunk538445 = require("./538445.jsx"),
  Chunk933104 = require("./933104.jsx"),
  Chunk355251 = require("./355251.jsx"),
  Chunk337721 = require("./337721.jsx"),
  Chunk921944 = require("./921944.js");

function O(e) {
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
let E = Chunk647438.memo(function(e) {
  let {
    contentTypes: t,
    guild: n,
    renderGuildHeaderDropdownButton: i
  } = e, {
    analyticsLocations: a
  } = (0, o.ZP)(), [E, y] = (0, s.US)(t, _.R.GUILD_HEADER_TOOLTIPS);
  return (0, r.jsx)(r.Fragment, {
    children: (() => {
      switch (E) {
        case l.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK:
          return (0, r.jsx)(O, {
            renderPopout: (0, r.jsx)(h.Z, {
              guild: n,
              markAsDismissed: y
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_POWERUP_PERKS_COACHMARK:
          return (0, r.jsx)(O, {
            renderPopout: (0, r.jsx)(g.$h, {
              guildId: n.id,
              markAsDismissed: y
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
          return (0, r.jsx)(O, {
            renderPopout: e => (0, r.jsx)(m.Z, {
              guildId: n.id,
              markAsDismissed: y,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, r.jsx)(O, {
            renderPopout: (0, r.jsx)(c.Z, {
              guildId: n.id,
              markAsDismissed: y
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, r.jsx)(O, {
            renderPopout: (0, r.jsx)(b.Z, {
              guild: n,
              markAsDismissed: y
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_HEADER_INVITE_SPLASH:
          return (0, r.jsx)(O, {
            renderPopout: e => (0, r.jsx)(p.Z, {
              elementRef: e,
              guild: n,
              markAsDismissed: y,
              analyticsLocations: a
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, r.jsx)(O, {
            renderPopout: (0, r.jsx)(d.Z, {
              markAsDismissed: y
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.MEDIA_CHANNEL_UPSELL:
          return (0, r.jsx)(f.Z, {
            guildId: n.id,
            markAsDismissed: y,
            renderTargetElement: i
          });
        case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, r.jsx)(O, {
            renderPopout: (0, r.jsx)(u.Z, {
              guildId: n.id,
              markAsDismissed: y
            }),
            renderGuildHeaderDropdownButton: i
          });
        default:
          return i()
      }
    })()
  })
})