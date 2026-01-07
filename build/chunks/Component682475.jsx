/** Chunk was on 6043 **/
/** chunk id: 682475, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => ed
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk680004 = require("./680004.jsx"),
  Chunk879434 = require("./879434.jsx"),
  Chunk213713 = require("./213713.jsx"),
  Chunk611565 = require("./611565.jsx"),
  Chunk36243 = require("./36243.js"),
  Chunk51415 = require("./51415.jsx"),
  Chunk906467 = require("./906467.js"),
  Chunk432877 = require("./432877.js");
require("./381996.js");
var Chunk392750 = require("./392750.jsx"),
  Chunk283162 = require("./283162.jsx"),
  Chunk926976 = require("./926976.jsx"),
  Chunk789654 = require("./789654.jsx"),
  Chunk866730 = require("./866730.jsx"),
  Chunk582344 = require("./582344.jsx"),
  Chunk691867 = require("./691867.jsx"),
  Chunk916790 = require("./916790.jsx"),
  Chunk645973 = require("./645973.jsx"),
  Chunk903502 = require("./903502.jsx"),
  Chunk604776 = require("./604776.jsx"),
  Chunk895182 = require("./895182.jsx"),
  Chunk912072 = require("./912072.jsx"),
  Chunk691175 = require("./691175.jsx"),
  Chunk272193 = require("./272193.jsx"),
  Chunk685560 = require("./685560.jsx"),
  Chunk698901 = require("./698901.jsx"),
  Chunk735959 = require("./735959.jsx"),
  Chunk572444 = require("./572444.jsx"),
  Chunk636500 = require("./636500.jsx"),
  Chunk484662 = require("./484662.jsx"),
  Chunk546895 = require("./546895.jsx"),
  Chunk496025 = require("./496025.jsx"),
  Chunk442954 = require("./442954.jsx"),
  Chunk925124 = require("./925124.jsx"),
  Chunk633001 = require("./633001.jsx"),
  Chunk778648 = require("./778648.jsx"),
  Chunk702904 = require("./702904.jsx"),
  Chunk178821 = require("./178821.jsx"),
  Chunk891401 = require("./891401.jsx"),
  Chunk958328 = require("./958328.jsx"),
  Chunk315384 = require("./315384.jsx"),
  Chunk107606 = require("./107606.jsx"),
  Chunk514866 = require("./514866.jsx"),
  Chunk763577 = require("./763577.jsx"),
  Chunk384207 = require("./384207.jsx"),
  Chunk264603 = require("./264603.jsx"),
  Chunk678639 = require("./678639.jsx"),
  Chunk596768 = require("./596768.jsx"),
  Chunk581302 = require("./581302.jsx"),
  Chunk56706 = require("./56706.jsx"),
  Chunk820400 = require("./820400.jsx"),
  Chunk200178 = require("./200178.jsx"),
  Chunk39989 = require("./39989.jsx"),
  Chunk260950 = require("./260950.jsx"),
  Chunk63954 = require("./63954.jsx"),
  Chunk569157 = require("./569157.jsx"),
  Chunk490007 = require("./490007.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk167488 = require("./167488.jsx"),
  Chunk324805 = require("./324805.js");

function ed() {
  return r.useMemo(() => {
    let e = [{
      id: "analytics",
      name: "Analytics",
      group: es.v0.EXPERIMENTS,
      tags: ["events", "impressions", "tracking"],
      render: () => (0, a.jsx)(h.Z, {})
    }, {
      id: "triggers",
      name: "Triggers",
      group: es.v0.EXPERIMENTS,
      tags: ["experiments", "exposure", "buckets"],
      render: () => (0, a.jsx)(X.Z, {})
    }, {
      id: "stores",
      name: "Stores",
      group: es.v0.EVENTS,
      tags: ["flux", "state"],
      render: () => (0, a.jsx)(Q.Z, {})
    }, {
      id: "dispatcher",
      name: "Dispatcher",
      group: es.v0.EVENTS,
      tags: ["flux", "actions"],
      render: () => (0, a.jsx)(j.Z, {})
    }];
    return u.Z.isDeveloper && (e.push({
      id: "shop",
      name: "Shop",
      group: es.v0.BILLING,
      render: () => (0, a.jsx)(K.C, {})
    }), e.push({
      id: "payment_flow_modals",
      name: "Payment Flow Modals",
      group: es.v0.BILLING,
      tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
      render: () => (0, a.jsx)(U.Z, {})
    }), e.push({
      id: "shop_collectibles",
      name: "Shop Collectibles",
      group: es.v0.BILLING,
      render: () => (0, a.jsx)(l.Z, {})
    }), e.push({
      id: "quick_actions",
      name: "Quick Actions",
      group: es.v0.DEVELOPMENT,
      tags: ["captcha", "safety", "checkpoint", "vibe", "vibing", "override", "premium type"],
      render: () => (0, a.jsx)(H.Z, {})
    }), e.push({
      id: "end_to_end_encryption",
      name: "E2EE",
      group: es.v0.DEVELOPMENT,
      tags: ["secure frames", "encryption"],
      render: () => (0, a.jsx)(C.Z, {})
    }), e.push({
      id: "performance",
      name: "Performance",
      group: es.v0.DEVELOPMENT,
      tags: ["fps", "frames", "gateway", "telemetry"],
      render: () => (0, a.jsx)(F.ZP, {})
    }), e.push({
      id: "age_verification",
      name: "Age Verification",
      group: es.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(f.Z, {})
    }), e.push({
      id: "feedback",
      name: "Feedback",
      group: es.v0.USERS,
      tags: ["surveys"],
      render: () => (0, a.jsx)(y.Z, {})
    }), e.push({
      id: "overlay",
      name: "Overlay v3",
      group: es.v0.GAMES,
      render: () => (0, a.jsx)(M.Z, {})
    }), e.push({
      id: "generated_test_user",
      name: "Generated Test Users",
      group: es.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(T.Z, {})
    }), e.push({
      id: "slayer_sdk",
      name: "Slayer SDK",
      group: es.v0.GAMES,
      render: () => (0, a.jsx)(Y.Z, {})
    }), e.push({
      id: "quick_switcher",
      name: "Quick Switcher",
      group: es.v0.USERS,
      render: () => (0, a.jsx)(ei.Z, {})
    }), e.push({
      id: "clips",
      name: "Clips",
      group: es.v0.AUDIO_VIDEO,
      render: () => (0, a.jsx)(i.Z, {})
    })), e.push({
      id: "rive",
      name: "Rive",
      group: es.v0.UI,
      tags: ["animation"],
      render: () => (0, a.jsx)(q.Z, {})
    }), e.push({
      id: "lottie",
      name: "Lottie",
      group: es.v0.UI,
      tags: ["animation"],
      render: () => (0, a.jsx)(A.Z, {})
    }), e.push({
      id: "intl",
      name: "Intl",
      group: es.v0.UI,
      tags: ["i18n", "localization", "messages"],
      render: () => (0, a.jsx)(w.Z, {})
    }), e.push({
      id: "colors",
      name: "Colors",
      group: es.v0.UI,
      tags: ["tokens", "themes", "palette"],
      render: () => (0, a.jsx)(x.Z, {})
    }), e.push({
      id: "design_toggles",
      name: "Design Toggles",
      group: es.v0.UI,
      render: () => (0, a.jsx)(v.Z, {})
    }), e.push({
      id: "appearance_randomizer",
      name: "Appearance Randomizer",
      group: es.v0.UI,
      render: () => (0, a.jsx)(W.Z, {})
    }), e.push({
      id: "overlays",
      name: "Dev Overlays",
      group: es.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(E.Z, {
        devSettingsCategory: m.zU.OVERLAYS
      })
    }), e.push({
      id: "messaging",
      name: "Messaging",
      group: es.v0.USERS,
      tags: ["dm", "nux", "system dm"],
      render: () => (0, a.jsx)(D.Z, {})
    }), e.push({
      id: "reporting",
      name: "Reporting",
      group: es.v0.EXPERIMENTS,
      render: () => (0, a.jsx)(E.Z, {
        devSettingsCategory: m.zU.REPORTING
      })
    }), e.push({
      id: "permissions",
      name: "Permissions",
      group: es.v0.USERS,
      render: () => (0, a.jsx)(V.Z, {})
    }), e.push({
      id: "modals",
      name: "Modals",
      group: es.v0.UI,
      tags: ["dialogs", "popups"],
      render: () => (0, a.jsx)(Z.Z, {})
    }), e.push({
      id: "layers",
      name: "Layers",
      group: es.v0.UI,
      tags: ["verification", "safety flow"],
      render: () => (0, a.jsx)(R.Z, {})
    }), e.push({
      id: "affinity",
      name: "Affinity",
      group: es.v0.USERS,
      tags: ["friends"],
      render: () => (0, a.jsx)(p.Z, {})
    }), e.push({
      id: "widgets",
      name: "Widgets",
      group: es.v0.USERS,
      tags: ["games", "profile"],
      render: () => (0, a.jsx)(ee.Z, {})
    }), u.Z.isDeveloper && (e.push({
      id: "content_inventory",
      name: "Content Inventory",
      group: es.v0.USERS,
      render: () => (0, a.jsx)(s.Z, {})
    }), e.push({
      id: "notifications_inbox",
      name: "Notifications Inbox",
      group: es.v0.USERS,
      render: () => (0, a.jsx)(o.Z, {})
    })), e.push({
      id: "dcf_overrides",
      name: "DCF Overrides",
      group: es.v0.DISMISSIBLE_CONTENT,
      render: () => (0, a.jsx)(g.Z, {})
    }), e.push({
      id: "dcf_events",
      name: "DCF Events",
      group: es.v0.DISMISSIBLE_CONTENT,
      render: () => (0, a.jsx)(b.Z, {})
    }), e.push({
      id: "hotspots",
      name: "Hotspots",
      group: es.v0.EXPERIMENTS,
      tags: ["coachmarks", "nux", "onboarding"],
      render: () => (0, a.jsx)(P.Z, {})
    }), e.push({
      id: "perks",
      name: "Perks",
      group: es.v0.PREMIUM,
      tags: ["nitro", "tenure", "badges", "level up"],
      render: () => (0, a.jsx)(G.Z, {})
    }), e.push({
      id: "potions",
      name: "Potions",
      group: es.v0.PREMIUM,
      tags: ["consumables", "entitlements", "confetti"],
      render: () => (0, a.jsx)(z.Z, {})
    }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
      id: "offers",
      name: "Offers",
      group: es.v0.PREMIUM,
      tags: ["discounts", "trials", "reverse trials", "churn"],
      render: () => (0, a.jsx)(L.Z, {})
    }), e.push({
      id: "payments",
      name: "Payments",
      group: es.v0.BILLING,
      tags: ["stripe", "cards", "test cards"],
      render: () => (0, a.jsx)(B.Z, {})
    }), e.push({
      id: "subscriptions",
      name: "Subscriptions",
      group: es.v0.PREMIUM,
      tags: ["nitro", "reverse trial"],
      render: () => (0, a.jsx)(ea.Z, {})
    }), e.push({
      id: "fractional_nitro",
      name: "Fractional Nitro",
      group: es.v0.PREMIUM,
      tags: ["entitlements", "quests"],
      render: () => (0, a.jsx)(_.Z, {})
    }), e.push({
      id: "nitro_storybook",
      name: "Nitro Storybook",
      group: es.v0.PREMIUM,
      render: () => (0, a.jsx)(en.C, {})
    })), e.push({
      id: "gifting_intent",
      name: "Gifting Intent",
      group: es.v0.PREMIUM,
      tags: ["friends", "anniversary"],
      render: () => (0, a.jsx)(O.Z, {})
    }), e.push({
      id: "voice_filters",
      name: "Voice Filters",
      group: es.v0.AUDIO_VIDEO,
      tags: ["soundboard", "effects"],
      render: () => (0, a.jsx)($.Z, {})
    }), e.push({
      id: "krisp_tester",
      name: "Krisp Tester",
      group: es.v0.AUDIO_VIDEO,
      tags: ["noise cancellation", "audio", "vad"],
      render: () => (0, a.jsx)(I.Z, {})
    }), e.push({
      id: "skill_trees",
      name: "Skill Trees",
      group: es.v0.BOOSTING,
      tags: ["boosting", "powerups", "server tag"],
      render: () => (0, a.jsx)(N.Z, {})
    }), e.push({
      id: "game_server",
      name: "Game Server",
      group: es.v0.BOOSTING,
      render: () => (0, a.jsx)(S.Z, {})
    }), e.push({
      id: "language",
      name: "Language",
      group: es.v0.UI,
      tags: ["locale"],
      render: () => (0, a.jsx)(k.Z, {})
    }), e.push({
      id: "word_frequency",
      name: "Word Frequency",
      group: es.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(et.Z, {})
    }), e.push({
      id: "user_settings",
      name: "User Settings",
      group: es.v0.DEVELOPMENT,
      render: () => (0, a.jsx)(eo.Z, {})
    }), e.push({
      id: "quest_minor_reward_capping_config",
      name: "Minor Reward Capping",
      group: es.v0.QUESTS,
      render: () => (0, a.jsx)(d.Z, {})
    }), e.push({
      id: "virtual_currency_config",
      name: "Virtual Currency Config",
      group: es.v0.QUESTS,
      render: () => (0, a.jsx)(J.Z, {})
    }), e.push({
      id: "Revenue Storybook",
      name: "Revenue Storybook",
      group: es.v0.BILLING,
      render: () => (0, a.jsx)(el.Z, {})
    }), (0, c.X)({
      location: ec.dr.QUEST_PREVIEW_TOOL
    }) && e.push({
      id: "quest_preview",
      name: "Quest Preview",
      group: es.v0.QUESTS,
      render: () => (0, a.jsx)(er.Z, {})
    }), e
  }, [])
}