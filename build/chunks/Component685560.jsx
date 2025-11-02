/** Chunk was on 28532 **/
/** chunk id: 685560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179360 = require("./179360.js"),
  Chunk87454 = require("./87454.jsx"),
  Chunk667815 = require("./667815.js"),
  Chunk645041 = require("./645041.js"),
  Chunk905551 = require("./905551.js"),
  Chunk713081 = require("./713081.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk899667 = require("./899667.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk617659 = require("./617659.js");
let C = [Chunk704215.z.GUILD_POWERUP_PERKS_COACHMARK, Chunk704215.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, Chunk704215.z.GUILD_POWERUP_NOTIFICATION, Chunk704215.z.GUILD_TAG_AVAILABLE_COACHMARK, Chunk704215.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK],
  S = [Chunk704215.C.GUILD_POWERUP_LEVEL_1_COACHMARK, Chunk704215.C.GUILD_POWERUP_LEVEL_2_COACHMARK, Chunk704215.C.GUILD_POWERUP_LEVEL_3_COACHMARK, Chunk704215.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, Chunk704215.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK],
  E = [Chunk704215.C.ADOPT_CLAN_IDENTITY_NOTICE],
  T = [Chunk704215.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, Chunk704215.z.VANITY_URL_POWERUP_ROLLBACK_MODAL, Chunk704215.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER];

function N(e) {
  switch (e) {
    case o.C.GUILD_POWERUP_LEVEL_1_COACHMARK:
      return "GUILD_POWERUP_LEVEL_1_COACHMARK";
    case o.C.GUILD_POWERUP_LEVEL_2_COACHMARK:
      return "GUILD_POWERUP_LEVEL_2_COACHMARK";
    case o.C.GUILD_POWERUP_LEVEL_3_COACHMARK:
      return "GUILD_POWERUP_LEVEL_3_COACHMARK";
    case o.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
      return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
    case o.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
      return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
    case o.C.ADOPT_CLAN_IDENTITY_NOTICE:
      return "ADOPT_CLAN_IDENTITY_NOTICE"
  }
}
async function O(e, t, n) {
  await Promise.all(t.map(e => s.tn.patch({
    url: _.ANM.APPLIED_BOOST_MODIFY_END_DATE(e.id),
    body: n ? {} : {
      ends_at: i()().add(1, "day")
    },
    rejectWithError: true
  }))), (0, d.C0)(e), (0, x.BN)(e, true)
}
async function P(e) {
  await s.tn.post({
    url: _.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
    rejectWithError: true
  })
}

function I() {
  let e = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    t = (0, Chunk442837.e7)([Chunk430824.Z], () => {
      var t;
      return null == (t = Chunk430824.Z.getGuild(module)) ? true : exports.name
    }),
    n = (0, Chunk442837.Wu)([Chunk581883.Z], () => [...S, ...E].filter(t => null != e && (0, p.OY)(t, e))),
    r = (0, Chunk442837.Wu)([Chunk899667.Z], () => {
      var t;
      return null != module && null != (t = Chunk899667.Z.getAppliedGuildBoostsForGuild(module)) ? exports : []
    });
  if (null != module) return (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk617659.container,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk617659.section,
      children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(exports)
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset Notification Indicators"
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: "Reset",
        onClick: () => {
          (0, Chunk713081.Qh)()
        }
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset Progress Bar State"
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: "Reset",
        onClick: Chunk667815.q
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Set Warning State"
      }), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Set Half Boosts expiring in 1 day",
          onClick: () => {
            O(module, Chunk913527.slice(Math.floor(Chunk913527.length / 2)), false)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Reset End Date",
          onClick: () => {
            O(module, Chunk913527, true)
          }
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset User Level DCs"
      }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
        gap: 16,
        children: C.map(e => (0, a.jsx)(u.Z, {
          className: y.formSwitch,
          content: o.z[e]
        }, o.z[e]))
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk617659.section,
      children: (0, Chunk951288.jsx)(Chunk481060.C3N, {
        label: "Reset Guild Level DCs",
        children: S.map(t => (0, a.jsx)(c.rsf, {
          label: N(t),
          checked: n.includes(t),
          onChange: n => {
            n ? (0, p.Qd)(t, e, false) : ((0, g.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e))
          }
        }, t))
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk617659.section,
      children: (0, Chunk951288.jsx)(Chunk481060.C3N, {
        label: "Reset Server Tag Guild Level DCs",
        children: E.map(t => (0, a.jsx)(c.rsf, {
          label: N(t),
          checked: n.includes(t),
          onChange: n => {
            n ? (0, p.Qd)(t, e, false) : ((0, g.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e))
          }
        }, t))
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset Powerup Rollback DCs"
      }), T.map(e => (0, a.jsx)(u.Z, {
        className: y.formSwitch,
        content: o.z[e]
      }, o.z[e]))]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Send Powerups System Message"
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: "Send System Message",
        onClick: () => {
          P(module)
        }
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.Button, {
      variant: "primary",
      text: "Reset GameServer ToS",
      onClick: () => {
        (0, Chunk905551.WY)(false)
      }
    })]
  })
}