/** Chunk was on 1272 **/
/** chunk id: 577718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk433280 = require("./433280.jsx"),
  Chunk34131 = require("./34131.jsx"),
  Chunk567458 = require("./567458.jsx"),
  Chunk782959 = require("./782959.jsx"),
  Chunk511342 = require("./511342.jsx"),
  Chunk933104 = require("./933104.jsx"),
  Chunk337721 = require("./337721.jsx"),
  Chunk921944 = require("./921944.js");

function g(e) {
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
let _ = Chunk647438.memo(function(e) {
  let {
    contentTypes: t,
    guild: n,
    renderGuildHeaderDropdownButton: i
  } = e, [a, _] = (0, s.US)(t, h.R.GUILD_HEADER_TOOLTIPS);
  return (0, r.jsx)(r.Fragment, {
    children: (() => {
      switch (a) {
        case l.z.GUILD_POWERUP_PERKS_COACHMARK:
          return (0, r.jsx)(g, {
            renderPopout: e => (0, r.jsx)(f.$h, {
              guildId: n.id,
              markAsDismissed: _,
              channelRowRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL:
          return (0, r.jsx)(p.Z, {
            guild: n,
            markAsDismissed: _,
            renderTargetElement: i
          });
        case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, r.jsx)(g, {
            renderPopout: e => (0, r.jsx)(o.Z, {
              guildId: n.id,
              markAsDismissed: _,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, r.jsx)(g, {
            renderPopout: e => (0, r.jsx)(m.Z, {
              guild: n,
              markAsDismissed: _,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, r.jsx)(g, {
            renderPopout: (0, r.jsx)(u.Z, {
              markAsDismissed: _
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.z.MEDIA_CHANNEL_UPSELL:
          return (0, r.jsx)(d.Z, {
            guildId: n.id,
            markAsDismissed: _,
            renderTargetElement: i
          });
        case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, r.jsx)(g, {
            renderPopout: e => (0, r.jsx)(c.Z, {
              guildId: n.id,
              markAsDismissed: _,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        default:
          return i()
      }
    })()
  })
})