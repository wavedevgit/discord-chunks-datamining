/** Chunk was on 15076 **/
/** chunk id: 406205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk748756 = require("./748756.js"),
  Chunk732760 = require("./732760.js"),
  Chunk686660 = require("./686660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407937 = require("./407937.js"),
  Chunk650455 = require("./650455.js");

function E(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([u.ZP], () => u.ZP.getGuildFlags(t)), l = (0, a.e7)([u.ZP], () => {
    let e = u.ZP.getGuildUnreadSetting(t),
      n = u.ZP.getMessageNotifications(t);
    return e === j.i.UNSET ? n === v.bL.ALL_MESSAGES ? j.i.ALL_MESSAGES : j.i.ONLY_MENTIONS : e
  }), r = (0, a.e7)([u.ZP], () => u.ZP.getMessageNotifications(t)), [S, E] = (0, s.useState)(false), C = S ? p.s8.CUSTOM : (0, p.gs)(l, r);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: b.segmentedControlsContainer,
      children: (0, i.jsx)(d.sY7, {
        value: C,
        options: [{
          value: p.s8.ALL_MESSAGES,
          name: N.intl.string(N.t.hZrr6k)
        }, {
          value: p.s8.MENTIONS,
          name: N.intl.string(N.t.y59NJm)
        }, {
          value: p.s8.NOTHING,
          name: N.intl.string(N.t["pGn/bJ"])
        }, {
          value: p.s8.CUSTOM,
          name: N.intl.string(N.t["32yow9"])
        }],
        onChange: e => {
          let {
            value: n
          } = e;
          return n === p.s8.CUSTOM ? void E(true) : (E(false), void(0, m.V)(t, n))
        },
        className: b.segmentedControl,
        look: "pill"
      })
    }), (0, i.jsx)("div", {
      className: b.presetSeparator
    }), (0, i.jsxs)("div", {
      className: b.customPresetsContainer,
      children: [(0, i.jsxs)("div", {
        className: b.grid,
        children: [(0, i.jsx)(O, {
          unreadSetting: l
        }), (0, i.jsx)(Z, {
          notificationSetting: r
        })]
      }), (0, i.jsxs)("div", {
        className: b.grid,
        children: [(0, i.jsxs)("div", {
          children: [(0, i.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: N.intl.string(N.t.Tqd1Af)
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: N.intl.string(N.t.RpQgm5)
          })]
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: N.intl.string(N.t["1m22ZB"])
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: N.intl.string(N.t["4bP2ZZ"])
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: b.grid,
        children: [(0, i.jsx)(d.q4e, {
          value: l,
          className: b.input,
          onChange: e => {
            E(false), c.Z.updateGuildNotificationSettings(t, {
              flags: (0, g.Q4)(n, e === j.i.ALL_MESSAGES ? f.vc.UNREADS_ALL_MESSAGES : f.vc.UNREADS_ONLY_MENTIONS)
            }, h.UE.unreads(e))
          },
          options: (0, x.y)({
            notificationSetting: r
          }),
          renderOptionLabel: e => {
            let t = e.disabled && e.value === j.i.ONLY_MENTIONS && l !== j.i.ONLY_MENTIONS;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(d.Text, {
                  variant: "text-md/normal",
                  color: e.disabled ? "text-muted" : true,
                  children: e.label
                })
              }), t && (0, i.jsx)(o.u, {
                text: N.intl.string(N.t.eP8yWU),
                children: (0, i.jsx)(d.t6m, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: b.muted
                })
              })]
            })
          }
        }), (0, i.jsx)(d.q4e, {
          className: b.input,
          value: r,
          onChange: e => {
            E(false);
            let n = {
              message_notifications: e
            };
            e === v.bL.ALL_MESSAGES && l !== j.i.ALL_MESSAGES && (n.flags = (0, g.Q4)(u.ZP.getGuildFlags(t), f.vc.UNREADS_ALL_MESSAGES)), c.Z.updateGuildNotificationSettings(t, n, h.UE.notifications(e))
          },
          options: (0, x.d)({
            notificationSetting: r
          }),
          renderOptionLabel: e => {
            let t = e.value === v.bL.ALL_MESSAGES && l !== j.i.ALL_MESSAGES && r !== v.bL.ALL_MESSAGES;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(d.Text, {
                variant: "text-md/normal",
                children: e.label
              }), t && (0, i.jsx)(o.u, {
                text: N.intl.string(N.t.idXSbI),
                children: (0, i.jsx)(d.d3s, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: b.muted
                })
              })]
            })
          }
        })]
      })]
    })]
  })
}

function O(e) {
  let {
    unreadSetting: t
  } = e, n = [{
    badged: true,
    unread: true,
    muted: false,
    name: N.intl.string(N.t.EjLobP)
  }, {
    badged: false,
    unread: true,
    muted: true,
    name: N.intl.string(N.t.Wgpwpp)
  }, {
    badged: false,
    unread: false,
    muted: true,
    name: N.intl.string(N.t.g9VImh)
  }];
  return t === j.i.ALL_MESSAGES && (n[1].muted = false), (0, i.jsx)("div", {
    className: b.channeList,
    children: n.map(e => (0, i.jsxs)("div", {
      className: b.channelListChannel,
      children: [(0, i.jsxs)("div", {
        className: b.channelListChannelName,
        children: [(0, i.jsx)("div", {
          className: r()(b.unread, {
            [b.hidden]: !e.unread,
            [b.unreadMuted]: e.muted
          })
        }), (0, i.jsx)(d.VL1, {
          size: "xxs",
          color: "currentColor",
          className: r()(b.channelListChannelIcon, {
            [b.muted]: e.muted
          })
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: e.muted ? "text-muted" : true,
          children: e.name
        })]
      }), (0, i.jsx)("div", {
        className: r()(b.badge, {
          [b.hidden]: !e.badged
        }),
        children: (0, i.jsx)(d.mAB, {
          count: 1
        })
      })]
    }, e.name))
  })
}

function Z(e) {
  return (0, i.jsxs)("div", {
    className: b.mockMessage,
    children: [e.notificationSetting === v.bL.NO_MESSAGES && (0, i.jsx)("div", {
      className: b.mockMessageDisabled
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        className: b.mockMessageAvatar,
        src: S,
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(d.Text, {
        variant: "text-xs/medium",
        children: N.intl.string(N.t.qSq0tD)
      }), e.notificationSetting === v.bL.ALL_MESSAGES && (0, i.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: N.intl.string(N.t.WYyzI5)
      }), e.notificationSetting !== v.bL.ALL_MESSAGES && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(d.Text, {
          variant: "text-xs/normal",
          color: "text-link",
          tag: "span",
          children: ["@Roka", " "]
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          tag: "span",
          children: N.intl.string(N.t.WYyzI5)
        })]
      })]
    })]
  })
}