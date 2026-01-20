/** Chunk was on 22979 **/
/** chunk id: 685560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
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
  Chunk65212 = require("./65212.js"),
  Chunk981631 = require("./981631.js"),
  Chunk379481 = require("./379481.js");
async function S(e, t, n) {
  await s.tn.patch({
    url: C.ANM.APPLIED_BOOST_MODIFY_END_DATE,
    body: {
      applied_boost_ids: t.map(e => e.id),
      ends_at: n ? null : i()().add(1, "day")
    },
    rejectWithError: true
  }), (0, d.C0)(e), (0, f.BN)(e, true)
}
async function E(e) {
  await s.tn.post({
    url: C.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(e),
    rejectWithError: true
  })
}

function T() {
  let e = (0, l.e7)([j.Z], () => j.Z.getGuildId()),
    t = (0, l.e7)([v.Z], () => {
      var t;
      return null == (t = v.Z.getGuild(e)) ? true : t.name
    }),
    n = (0, l.Wu)([x.Z], () => [...y.d9, ...y.QT].filter(t => null != e && (0, p.OY)(t, e))),
    r = (0, l.Wu)([g.Z], () => {
      var t;
      return null != e && null != (t = g.Z.getAppliedGuildBoostsForGuild(e)) ? t : []
    });
  if (null != e) return (0, a.jsxs)(c.zJl, {
    className: _.container,
    children: [(0, a.jsx)("div", {
      className: _.section,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(t)
      })
    }), (0, a.jsxs)("div", {
      className: _.section,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: _.header,
        children: "Reset Notification Indicators"
      }), (0, a.jsx)(c.Button, {
        variant: "primary",
        text: "Reset",
        onClick: () => {
          (0, f.Qh)()
        }
      })]
    }), (0, a.jsxs)("div", {
      className: _.section,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: _.header,
        children: "Reset Progress Bar State"
      }), (0, a.jsx)(c.Button, {
        variant: "primary",
        text: "Reset",
        onClick: m.q
      })]
    }), (0, a.jsxs)("div", {
      className: _.section,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        children: "Set Warning State"
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Set Half Boosts expiring in 1 day",
          onClick: () => {
            S(e, r.slice(Math.floor(r.length / 2)), false)
          }
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Reset End Date",
          onClick: () => {
            S(e, r, true)
          }
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: _.section,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: _.header,
        children: "Reset User Level DCs"
      }), (0, a.jsx)(c.Kqy, {
        gap: 16,
        children: y.Uz.map(e => (0, a.jsx)(u.Z, {
          className: _.formSwitch,
          content: o.z[e]
        }, o.z[e]))
      })]
    }), (0, a.jsx)("div", {
      className: _.section,
      children: (0, a.jsx)(c.C3N, {
        label: "Reset Guild Level DCs",
        children: y.d9.map(t => (0, a.jsx)(c.rsf, {
          label: (0, y.eq)(t),
          checked: n.includes(t),
          onChange: n => {
            n ? (0, p.Qd)(t, e, false) : ((0, b.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e))
          }
        }, t))
      })
    }), (0, a.jsx)("div", {
      className: _.section,
      children: (0, a.jsx)(c.C3N, {
        label: "Reset Server Tag Guild Level DCs",
        children: y.QT.map(t => (0, a.jsx)(c.rsf, {
          label: (0, y.eq)(t),
          checked: n.includes(t),
          onChange: n => {
            n ? (0, p.Qd)(t, e, false) : ((0, b.Z1)(o.z.GUILD_POWERUP_NOTIFICATION), (0, p.c7)(t, e))
          }
        }, t))
      })
    }), (0, a.jsxs)("div", {
      className: _.section,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: _.header,
        children: "Reset Powerup Rollback DCs"
      }), y.d3.map(e => (0, a.jsx)(u.Z, {
        className: _.formSwitch,
        content: o.z[e]
      }, o.z[e]))]
    }), (0, a.jsxs)("div", {
      className: _.section,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: _.header,
        children: "Send Powerups System Message"
      }), (0, a.jsx)(c.Button, {
        variant: "primary",
        text: "Send System Message",
        onClick: () => {
          E(e)
        }
      })]
    }), (0, a.jsx)(c.Button, {
      variant: "primary",
      text: "Reset GameServer ToS",
      onClick: () => {
        (0, h.WY)(false)
      }
    })]
  })
}