/** Chunk was on 6043 **/
/** chunk id: 272193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk666086 = require("./666086.js"),
  Chunk441623 = require("./441623.js"),
  Chunk594174 = require("./594174.js"),
  Chunk246992 = require("./246992.js"),
  Chunk555109 = require("./555109.js"),
  Chunk663618 = require("./663618.js");

function x() {
  let e = (0, Chunk442837.e7)([Chunk441623.ZP], () => Chunk441623.ZP.getDevToolTotalFriendAnniversaries()),
    t = (0, Chunk442837.e7)([Chunk441623.ZP], () => Chunk441623.ZP.getDevToolCurrentDate()),
    n = (0, Chunk442837.e7)([Chunk441623.ZP], () => Chunk441623.ZP.getGiftUnreadNotificationLastDismissedTimes()),
    r = (0, Chunk442837.e7)([Chunk441623.ZP], () => Chunk441623.ZP.getMessageGiftIntentLastShownMap()),
    x = (0, Chunk442837.e7)([Chunk441623.ZP], () => Chunk441623.ZP.getHighestAffinityFriendAnniversaries()),
    b = (0, Chunk442837.e7)([Chunk441623.ZP], () => Chunk441623.ZP.getHighAffinityFriendAnniversaries()),
    g = e => {
      c.Z.dispatch({
        type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
        total: e
      })
    };
  return (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk663618.panel,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk555109.panelInner,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk555109.panelHeader,
        variant: "text-lg/bold",
        children: "Friend Anniversary"
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk555109.panelRow,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          direction: "horizontal",
          style: {
            flex: 1
          },
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            children: "Number of anniversaries to generate"
          }), (0, Chunk54381.jsx)(Chunk199849.y6, {
            options: [{
              label: "None",
              value: null
            }, {
              label: "1",
              value: 1
            }, {
              label: "2",
              value: 2
            }, {
              label: "3",
              value: 3
            }, {
              label: "4",
              value: 4
            }, {
              label: "5",
              value: 5
            }, {
              label: "10",
              value: 10
            }, {
              label: "25",
              value: 25
            }],
            value: module,
            onChange: e => {
              g(e)
            },
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            size: "sm",
            variant: "secondary",
            text: "Clear",
            onClick: () => {
              g(null)
            }
          })]
        })
      }), null != module && (0, Chunk54381.jsx)("div", {
        className: Chunk555109.panelRow,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          children: [x.length > 0 && (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            gap: 4,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-xs/semibold",
              children: "Highest Affinity Friend Anniversaries (Eligible for Notification):"
            }), x.map(e => {
              var t;
              let n = m.default.getUser(e),
                r = null != (t = null == n ? true : n.username) ? t : "Unknown User (".concat(e, ")");
              return (0, a.jsx)(o.Text, {
                variant: "text-xs/normal",
                children: r
              }, e)
            })]
          }), b.length > 0 && (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            gap: 4,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-xs/semibold",
              children: "High Affinity Friend Anniversaries:"
            }), b.map(e => {
              var t;
              let n = m.default.getUser(e),
                r = null != (t = null == n ? true : n.username) ? t : "Unknown User (".concat(e, ")");
              return (0, a.jsx)(o.Text, {
                variant: "text-xs/normal",
                children: r
              }, e)
            })]
          })]
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk555109.panelRow,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          direction: "horizontal",
          children: [(0, Chunk54381.jsx)(Chunk481060.Wrb, {
            label: "Override current date used for cooldowns",
            value: null != exports ? i()(exports) : true,
            onSelect: e => {
              let t = i()(),
                n = e.clone().hours(t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds());
              c.Z.dispatch({
                type: "DEV_TOOLS_SET_CURRENT_DATE",
                date: n.valueOf()
              })
            }
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "secondary",
            size: "sm",
            text: "Clear",
            onClick: () => {
              Chunk570140.Z.dispatch({
                type: "DEV_TOOLS_RESET_CURRENT_DATE"
              })
            }
          })]
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk555109.panelRow,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            gap: 8,
            direction: "horizontal",
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-md/normal",
              children: "Reset gift message cooldown"
            }), (0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "primary",
              size: "sm",
              text: "Reset",
              onClick: () => {
                Chunk570140.Z.dispatch({
                  type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET"
                })
              }
            })]
          }), Object.keys(Chunk913527).length > 0 && (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            gap: 4,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-xs/semibold",
              children: "Gift Message Intent Last Shown:"
            }), Object.entries(Chunk913527).map(e => {
              var t;
              let [n, r] = e, l = m.default.getUser(n), s = null != (t = null == l ? true : l.username) ? t : "Unknown User (".concat(n, ")");
              return (0, a.jsxs)(o.Text, {
                variant: "text-xs/normal",
                children: [s, ": ", i()(r).format("MMM D, YYYY h:mm A")]
              }, n)
            })]
          })]
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk555109.panelRow,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            gap: 8,
            direction: "horizontal",
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-md/normal",
              children: "Reset gift notification cooldown"
            }), (0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "primary",
              size: "sm",
              text: "Reset",
              onClick: () => {
                Chunk570140.Z.dispatch({
                  type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET"
                })
              }
            })]
          }), require.length > 0 && (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
            gap: 4,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-xs/semibold",
              children: "Gift notification shown timestamps:"
            }), require.map((e, t) => (0, a.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: i()(e).format("MMM D, YYYY h:mm A")
            }, t))]
          })]
        })
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk555109.panelRow,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Send gift notification"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Send",
          onClick: () => {
            Chunk666086.Z.sendGiftingNotificationIfEligible()
          }
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk555109.panelRow,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Clear last seen friend anniversaries in All Friends"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Clear",
          onClick: () => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET"
            })
          }
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk555109.panelRow,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Reset profile popout gift intents dismiss"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset",
          onClick: () => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET"
            })
          }
        })]
      })]
    })
  })
}