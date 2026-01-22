/** Chunk was on 64992 **/
/** chunk id: 972192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk393432 = require("./393432.js"),
  Chunk910323 = require("./910323.js"),
  Chunk996124 = require("./996124.js"),
  Chunk24873 = require("./24873.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk549146 = require("./549146.js"),
  Chunk626149 = require("./626149.js");

function O(e) {
  let {
    guildId: t
  } = e, n = (0, a.bG)([g.Ay], () => g.Ay.getGuildFlags(t)), s = (0, a.bG)([g.Ay], () => {
    let e = g.Ay.getGuildUnreadSetting(t),
      n = g.Ay.getMessageNotifications(t);
    return e === N.e.UNSET ? n === b.orn.ALL_MESSAGES ? N.e.ALL_MESSAGES : N.e.ONLY_MENTIONS : e
  }), r = (0, a.bG)([g.Ay], () => g.Ay.getMessageNotifications(t)), [S, O] = (0, l.useState)(false), y = S ? p.N9.CUSTOM : (0, p.jU)(s, r);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: f.Gk,
      children: (0, i.jsx)(c.IzF, {
        value: y,
        options: [{
          value: p.N9.ALL_MESSAGES,
          name: v.intl.string(v.t.hZrr6k)
        }, {
          value: p.N9.MENTIONS,
          name: v.intl.string(v.t.y59NJm)
        }, {
          value: p.N9.NOTHING,
          name: v.intl.string(v.t["pGn/bJ"])
        }, {
          value: p.N9.CUSTOM,
          name: v.intl.string(v.t["32yow9"])
        }],
        onChange: e => {
          let {
            value: n
          } = e;
          n === p.N9.CUSTOM ? O(true) : (O(false), (0, x.i)(t, n))
        },
        className: f.q0,
        look: "pill"
      })
    }), (0, i.jsx)("div", {
      className: f.zV
    }), (0, i.jsxs)("div", {
      className: f.xE,
      children: [(0, i.jsxs)("div", {
        className: f.Vg,
        children: [(0, i.jsx)(_, {
          unreadSetting: s
        }), (0, i.jsx)(E, {
          notificationSetting: r
        })]
      }), (0, i.jsxs)("div", {
        className: f.Vg,
        children: [(0, i.jsxs)("div", {
          children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: v.intl.string(v.t.Tqd1Af)
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: v.intl.string(v.t.RpQgm5)
          })]
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: v.intl.string(v.t["1m22ZB"])
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: v.intl.string(v.t["4bP2ZZ"])
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: f.Vg,
        children: [(0, i.jsx)(d.Te, {
          value: s,
          className: f.hF,
          onChange: e => {
            O(false), u.A.updateGuildNotificationSettings(t, {
              flags: (0, m.md)(n, e === N.e.ALL_MESSAGES ? A.n3.UNREADS_ALL_MESSAGES : A.n3.UNREADS_ONLY_MENTIONS)
            }, h.G_.unreads(e))
          },
          options: (0, j.Q)({
            notificationSetting: r
          }),
          renderOptionLabel: e => {
            let t = e.disabled && e.value === N.e.ONLY_MENTIONS && s !== N.e.ONLY_MENTIONS;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(c.Text, {
                  variant: "text-md/normal",
                  color: e.disabled ? "text-muted" : true,
                  children: e.label
                })
              }), t && (0, i.jsx)(o.m, {
                text: v.intl.string(v.t.eP8yWU),
                children: (0, i.jsx)(c.KTN, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: f.SU
                })
              })]
            })
          },
          "data-migration-pending": true
        }), (0, i.jsx)(d.Te, {
          className: f.hF,
          value: r,
          onChange: e => {
            O(false);
            let n = {
              message_notifications: e
            };
            e === b.orn.ALL_MESSAGES && s !== N.e.ALL_MESSAGES && (n.flags = (0, m.md)(g.Ay.getGuildFlags(t), A.n3.UNREADS_ALL_MESSAGES)), u.A.updateGuildNotificationSettings(t, n, h.G_.notifications(e))
          },
          options: (0, j._)({
            notificationSetting: r
          }),
          renderOptionLabel: e => {
            let t = e.value === b.orn.ALL_MESSAGES && s !== N.e.ALL_MESSAGES && r !== b.orn.ALL_MESSAGES;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                children: e.label
              }), t && (0, i.jsx)(o.m, {
                text: v.intl.string(v.t.idXSbI),
                children: (0, i.jsx)(c.mir, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: f.SU
                })
              })]
            })
          },
          "data-migration-pending": true
        })]
      })]
    })]
  })
}

function _(e) {
  let {
    unreadSetting: t
  } = e, n = [{
    badged: true,
    unread: true,
    muted: false,
    name: v.intl.string(v.t.EjLobP)
  }, {
    badged: false,
    unread: true,
    muted: true,
    name: v.intl.string(v.t.Wgpwpp)
  }, {
    badged: false,
    unread: false,
    muted: true,
    name: v.intl.string(v.t.g9VImh)
  }];
  return t === N.e.ALL_MESSAGES && (n[1].muted = false), (0, i.jsx)("div", {
    className: f.Qn,
    children: n.map(e => (0, i.jsxs)("div", {
      className: f.h5,
      children: [(0, i.jsxs)("div", {
        className: f.A3,
        children: [(0, i.jsx)("div", {
          className: r()(f.gy, {
            [f.R]: !e.unread,
            [f.BM]: e.muted
          })
        }), (0, i.jsx)(c.N$i, {
          size: "xxs",
          color: "currentColor",
          className: r()(f.Uk, {
            [f.SU]: e.muted
          })
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: e.muted ? "text-muted" : true,
          children: e.name
        })]
      }), (0, i.jsx)("div", {
        className: r()(f.qS, {
          [f.R]: !e.badged
        }),
        children: (0, i.jsx)(c.hVq, {
          count: 1
        })
      })]
    }, e.name))
  })
}

function E(e) {
  return (0, i.jsxs)("div", {
    className: f.G5,
    children: [e.notificationSetting === b.orn.NO_MESSAGES && (0, i.jsx)("div", {
      className: f._N
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        className: f.p3,
        src: S,
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: v.intl.string(v.t.qSq0tD)
      }), e.notificationSetting === b.orn.ALL_MESSAGES && (0, i.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: v.intl.string(v.t.WYyzI5)
      }), e.notificationSetting !== b.orn.ALL_MESSAGES && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(c.Text, {
          variant: "text-xs/normal",
          color: "text-link",
          tag: "span",
          children: ["@Roka", " "]
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          tag: "span",
          children: v.intl.string(v.t.WYyzI5)
        })]
      })]
    })]
  })
}