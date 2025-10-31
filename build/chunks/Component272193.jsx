/** Chunk was on 71874 **/
/** chunk id: 272193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk441623 = require("./441623.js"),
  Chunk246992 = require("./246992.js"),
  Chunk636503 = require("./636503.js"),
  Chunk451429 = require("./451429.js");

function m() {
  let e = (0, Chunk442837.e7)([Chunk441623.Z], () => Chunk441623.Z.getDevToolTotalFriendAnniversaries()),
    t = e => {
      o.Z.dispatch({
        type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
        total: e
      })
    };
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk636503.panelInner,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk636503.panelHeader,
        variant: "text-lg/bold",
        children: "Friend Anniversary"
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk636503.panelRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Reset gift message cooldown"
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset",
          onClick: () => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET"
            })
          }
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk636503.panelRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Reset badge cooldown"
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset",
          onClick: () => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET"
            })
          }
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk636503.panelRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Clear last seen friend anniversaries in All Friends"
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Clear",
          onClick: () => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET"
            })
          }
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk636503.panelRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Select number of friend anniversaries to generate"
        }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
          className: Chunk636503.anniversaryCountSelect,
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
            t(e)
          },
          popoutLayerContext: Chunk246992.O$
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          look: Chunk755721.zx.Looks.LINK,
          className: Chunk636503.anniversaryCountResetButton,
          onClick: () => {
            exports(null)
          },
          children: "Reset to None"
        })]
      })]
    })
  })
}