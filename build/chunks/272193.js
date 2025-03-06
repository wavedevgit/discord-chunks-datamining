/** Chunk was on 93886 **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var a = n(442837),
  i = n(481060),
  l = n(570140),
  o = n(441623),
  s = n(246992),
  c = n(800373),
  d = n(710662);

function u() {
  let e = (0, a.e7)([o.Z], () => o.Z.getDevToolTotalFriendAnniversaries()),
    t = e => {
      l.Z.dispatch({
        type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
        total: e
      })
    };
  return (0, r.jsx)(i.zJl, {
    className: d.panel,
    children: (0, r.jsxs)("div", {
      className: c.panelInner,
      children: [(0, r.jsx)(i.Text, {
        className: c.panelHeader,
        variant: "text-lg/bold",
        children: "Friend Anniversary"
      }), (0, r.jsxs)("div", {
        className: c.panelRow,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Reset gift message cooldown"
        }), (0, r.jsx)(i.zxk, {
          size: i.zxk.Sizes.SMALL,
          onClick: () => {
            l.Z.dispatch({
              type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET"
            })
          },
          children: "Reset"
        })]
      }), (0, r.jsxs)("div", {
        className: c.panelRow,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Reset badge cooldown"
        }), (0, r.jsx)(i.zxk, {
          size: i.zxk.Sizes.SMALL,
          onClick: () => {
            l.Z.dispatch({
              type: "DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET"
            })
          },
          children: "Reset"
        })]
      }), (0, r.jsxs)("div", {
        className: c.panelRow,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Clear last seen friend anniversaries in All Friends"
        }), (0, r.jsx)(i.zxk, {
          size: i.zxk.Sizes.SMALL,
          onClick: () => {
            l.Z.dispatch({
              type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET"
            })
          },
          children: "Clear"
        })]
      }), (0, r.jsxs)("div", {
        className: c.panelRow,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Select number of friend anniversaries to generate"
        }), (0, r.jsx)(i.q4e, {
          className: c.anniversaryCountSelect,
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
          value: e,
          onChange: e => {
            t(e)
          },
          popoutLayerContext: s.O$
        }), (0, r.jsx)(i.zxk, {
          look: i.zxk.Looks.LINK,
          className: c.anniversaryCountResetButton,
          onClick: () => {
            t(null)
          },
          children: "Reset to None"
        })]
      })]
    })
  })
}