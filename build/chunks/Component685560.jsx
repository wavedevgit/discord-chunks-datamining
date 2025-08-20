/** Chunk was on 93886 **/
/** chunk id: 685560, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk951288 = require("./951288.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179360 = require("./179360.js"),
  Chunk621628 = require("./621628.jsx"),
  Chunk667815 = require("./667815.js"),
  Chunk645041 = require("./645041.js"),
  Chunk713081 = require("./713081.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk899667 = require("./899667.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk617659 = require("./617659.js");
let y = [Chunk704215.z.GUILD_POWERUP_PERKS_COACHMARK, Chunk704215.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK, Chunk704215.z.GUILD_POWERUP_NOTIFICATION, Chunk704215.z.GUILD_TAG_AVAILABLE_COACHMARK, Chunk704215.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK],
  C = [Chunk704215.C.GUILD_POWERUP_LEVEL_1_COACHMARK, Chunk704215.C.GUILD_POWERUP_LEVEL_2_COACHMARK, Chunk704215.C.GUILD_POWERUP_LEVEL_3_COACHMARK, Chunk704215.C.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, Chunk704215.C.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK],
  N = [Chunk704215.C.ADOPT_CLAN_IDENTITY_NOTICE],
  O = [Chunk704215.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, Chunk704215.z.VANITY_URL_POWERUP_ROLLBACK_MODAL, Chunk704215.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER];

function E(e) {
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
async function T(e, t, a) {
  await Promise.all(t.map(e => s.tn.patch({
    url: g.ANM.APPLIED_BOOST_MODIFY_END_DATE(e.id),
    body: a ? {} : {
      ends_at: l()().add(1, "day")
    },
    rejectWithError: true
  }))), (0, d.C0)(e), (0, h.Fm)(e, true)
}
async function S(e) {
  await s.tn.post({
    url: g.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
    rejectWithError: true
  })
}

function P() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    a = (0, Chunk442837.e7)([Chunk430824.Z], () => {
      var e;
      return null == (e = Chunk430824.Z.getGuild(exports)) ? true : module.name
    }),
    r = (0, Chunk442837.Wu)([Chunk581883.Z], () => [...C, ...N].filter(e => null != t && (0, x.OY)(e, t))),
    l = null != (e = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e;
      return null == (e = Chunk581883.Z.settings.userContent) ? true : module.dismissedContents
    })) ? module : new Uint8Array,
    s = (0, Chunk442837.Wu)([Chunk899667.Z], () => {
      var e;
      return null != exports && null != (e = Chunk899667.Z.getAppliedGuildBoostsForGuild(exports)) ? module : []
    });
  if (null != exports) return (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk617659.container,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk617659.section,
      children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(require)
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset Notification Indicators"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Set Half Boosts expiring in 1 day",
          onClick: () => {
            T(exports, Chunk544891.slice(Math.floor(Chunk544891.length / 2)), false)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset End Date",
          onClick: () => {
            T(exports, Chunk544891, true)
          }
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset User Level DCs"
      }), y.map(e => (0, n.jsx)(u.u, {
        className: _.formSwitch,
        contents: l,
        content: o.z[e],
        onChange: () => {}
      }, o.z[e]))]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset Guild Level DCs"
      }), C.map(e => (0, n.jsx)(c.j7V, {
        className: _.formSwitch,
        onChange: a => {
          a ? (0, x.Qd)(e, t, false) : ((0, p.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, x.c7)(e, t))
        },
        value: r.includes(e),
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: E(e)
        })
      }, e))]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Reset Server Tag Guild Level DCs"
      }), N.map(e => (0, n.jsx)(c.j7V, {
        className: _.formSwitch,
        onChange: a => {
          a ? (0, x.Qd)(e, t, false) : ((0, p.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, x.c7)(e, t))
        },
        value: r.includes(e),
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: E(e)
        })
      }, e))]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Reset Powerup Rollback DCs"
      }), O.map(e => (0, n.jsx)(u.u, {
        className: _.formSwitch,
        contents: l,
        content: o.z[e],
        onChange: () => {}
      }, o.z[e]))]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk617659.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        className: Chunk617659.header,
        children: "Send Powerups System Message"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Send System Message",
        onClick: () => {
          S(exports)
        }
      })]
    })]
  })
}