/** Chunk was on 90228 **/
/** chunk id: 498336, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk989349 = require("./989349.js"),
  r = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk923408 = require("./923408.js"),
  Chunk387265 = require("./387265.jsx"),
  Chunk230135 = require("./230135.js"),
  Chunk45780 = require("./45780.js"),
  Chunk665171 = require("./665171.js"),
  Chunk942975 = require("./942975.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk859241 = require("./859241.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk642020 = require("./642020.js"),
  Chunk652215 = require("./652215.js"),
  Chunk45298 = require("./45298.js");
async function C(e, t, n) {
  await s.Bo.patch({
    url: y.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
    body: {
      applied_boost_ids: t.map(e => e.id),
      ends_at: n ? null : r()().add(1, "day")
    },
    rejectWithError: true
  }), (0, d.VU)(e), (0, x.Xd)(e, true)
}
async function S(e) {
  await s.Bo.post({
    url: y.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e),
    rejectWithError: true
  })
}

function O() {
  let e = (0, i.bG)([j.A], () => j.A.getGuildId()),
    t = (0, i.bG)([v.A], () => {
      var t;
      return null == (t = v.A.getGuild(e)) ? true : t.name
    }),
    n = (0, i.yK)([f.A], () => [..._.DX, ..._.gh].filter(t => null != e && (0, p.zs)(t, e))),
    l = (0, i.yK)([b.A], () => {
      var t;
      return null != e && null != (t = b.A.getAppliedGuildBoostsForGuild(e)) ? t : []
    });
  if (null != e) return (0, a.jsxs)(c.IpV, {
    className: A.kL,
    children: [(0, a.jsx)("div", {
      className: A.uW,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(t)
      })
    }), (0, a.jsxs)("div", {
      className: A.uW,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: A.wx,
        children: "Reset Notification Indicators"
      }), (0, a.jsx)(c.Button, {
        variant: "primary",
        text: "Reset",
        onClick: () => {
          (0, x.qM)()
        }
      })]
    }), (0, a.jsxs)("div", {
      className: A.uW,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: A.wx,
        children: "Reset Progress Bar State"
      }), (0, a.jsx)(c.Button, {
        variant: "primary",
        text: "Reset",
        onClick: m.O
      })]
    }), (0, a.jsxs)("div", {
      className: A.uW,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        children: "Set Warning State"
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Set Half Boosts expiring in 1 day",
          onClick: () => {
            C(e, l.slice(Math.floor(l.length / 2)), false)
          }
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Reset End Date",
          onClick: () => {
            C(e, l, true)
          }
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: A.uW,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: A.wx,
        children: "Reset User Level DCs"
      }), (0, a.jsx)(c.BJc, {
        gap: 16,
        children: _.tB.map(e => (0, a.jsx)(u.A, {
          className: A.z6,
          content: o.M[e]
        }, o.M[e]))
      })]
    }), (0, a.jsx)("div", {
      className: A.uW,
      children: (0, a.jsx)(c.nVY, {
        label: "Reset Guild Level DCs",
        children: _.DX.map(t => (0, a.jsx)(c.dOG, {
          label: (0, _.Qi)(t),
          checked: n.includes(t),
          onChange: n => {
            n ? (0, p._$)(t, e, false) : ((0, g._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, p.hk)(t, e))
          }
        }, t))
      })
    }), (0, a.jsx)("div", {
      className: A.uW,
      children: (0, a.jsx)(c.nVY, {
        label: "Reset Server Tag Guild Level DCs",
        children: _.gh.map(t => (0, a.jsx)(c.dOG, {
          label: (0, _.Qi)(t),
          checked: n.includes(t),
          onChange: n => {
            n ? (0, p._$)(t, e, false) : ((0, g._N)(o.M.GUILD_POWERUP_NOTIFICATION), (0, p.hk)(t, e))
          }
        }, t))
      })
    }), (0, a.jsxs)("div", {
      className: A.uW,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: A.wx,
        children: "Reset Powerup Rollback DCs"
      }), _.cC.map(e => (0, a.jsx)(u.A, {
        className: A.z6,
        content: o.M[e]
      }, o.M[e]))]
    }), (0, a.jsxs)("div", {
      className: A.uW,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        className: A.wx,
        children: "Send Powerups System Message"
      }), (0, a.jsx)(c.Button, {
        variant: "primary",
        text: "Send System Message",
        onClick: () => {
          S(e)
        }
      })]
    }), (0, a.jsx)(c.Button, {
      variant: "primary",
      text: "Reset GameServer ToS",
      onClick: () => {
        (0, h.Wp)(false)
      }
    })]
  })
}