/** Chunk was on 21738 **/
/** chunk id: 718996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk345485 = require("./345485.jsx"),
  Chunk554154 = require("./554154.jsx"),
  Chunk527901 = require("./527901.jsx"),
  Chunk361908 = require("./361908.jsx"),
  Chunk249584 = require("./249584.jsx"),
  Chunk791295 = require("./791295.jsx"),
  Chunk49999 = require("./49999.js");

function f(e) {
  let {
    renderPopout: t,
    renderGuildHeaderDropdownButton: n
  } = e, l = i.useRef(null);
  return (0, r.jsx)(a.YNO, {
    targetElementRef: l,
    renderPopout: () => (0, r.jsx)("div", {
      onClick: e => e.stopPropagation(),
      children: "function" == typeof t ? t(l) : t
    }),
    position: "bottom",
    align: "center",
    animation: a.YNO.Animation.TRANSLATE,
    shouldShow: true,
    children: () => (0, r.jsx)("div", {
      ref: l,
      children: n()
    })
  })
}
let m = Chunk64700.memo(function(e) {
  let {
    contentTypes: t,
    guild: n,
    renderGuildHeaderDropdownButton: i
  } = e, [a, m] = (0, s.kn)(t, g.m.GUILD_HEADER_TOOLTIPS);
  return (0, r.jsx)(r.Fragment, {
    children: (() => {
      switch (a) {
        case l.M.GUILD_POWERUP_PERKS_COACHMARK:
          return (0, r.jsx)(f, {
            renderPopout: e => (0, r.jsx)(p.UB, {
              guildId: n.id,
              markAsDismissed: m,
              channelRowRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
          return (0, r.jsx)(f, {
            renderPopout: e => (0, r.jsx)(p.K8, {
              guildId: n.id,
              markAsDismissed: m,
              channelRowRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V1_COACHMARK:
          return (0, r.jsx)(f, {
            renderPopout: e => (0, r.jsx)(p.YX, {
              guildId: n.id,
              markAsDismissed: m,
              channelRowRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, r.jsx)(f, {
            renderPopout: e => (0, r.jsx)(o.A, {
              guildId: n.id,
              markAsDismissed: m,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, r.jsx)(f, {
            renderPopout: e => (0, r.jsx)(h.A, {
              guild: n,
              markAsDismissed: m,
              targetElementRef: e
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, r.jsx)(f, {
            renderPopout: (0, r.jsx)(u.A, {
              markAsDismissed: m
            }),
            renderGuildHeaderDropdownButton: i
          });
        case l.M.MEDIA_CHANNEL_UPSELL:
          return (0, r.jsx)(d.A, {
            guildId: n.id,
            markAsDismissed: m,
            renderTargetElement: i
          });
        case l.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, r.jsx)(f, {
            renderPopout: e => (0, r.jsx)(c.A, {
              guildId: n.id,
              markAsDismissed: m,
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