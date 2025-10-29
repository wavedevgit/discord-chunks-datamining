/** Chunk was on 28855 **/
/** chunk id: 611565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk787879 = require("./787879.js"),
  Chunk370774 = require("./370774.js"),
  Chunk326588 = require("./326588.js"),
  Chunk451429 = require("./451429.js");
let x = [{
    key: "channelName",
    cellClassName: l()(Chunk326588.cell, Chunk326588.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "channelId",
    cellClassName: l()(Chunk326588.cell, Chunk326588.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }],
  f = [{
    key: "channelName",
    cellClassName: l()(Chunk326588.cell, Chunk326588.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "loadState",
    cellClassName: l()(Chunk326588.cell, Chunk326588.loadState),
    render(e) {
      let {
        loadState: t
      } = e;
      return (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "channelId",
    cellClassName: l()(Chunk326588.cell, Chunk326588.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }];

function g() {
  let {
    unreadRecentMentionsCount: e,
    unreadChannelIds: t
  } = (0, Chunk370774.O4)(), {
    isLoading: n,
    hasLoadedEver: r,
    hasPreloaded: l,
    hasMoreToLoad: g,
    isLoadingComplete: b
  } = (0, Chunk399606.cj)([Chunk787879.Z], () => ({
    isLoading: Chunk787879.Z.isLoading,
    hasLoadedEver: Chunk787879.Z.hasLoadedEver,
    hasPreloaded: Chunk787879.Z.hasPreloaded,
    hasMoreToLoad: Chunk787879.Z.hasMoreToLoad,
    isLoadingComplete: Chunk787879.Z.isLoadingComplete
  })), v = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.currentRequestAnalyticsPayload), j = (0, Chunk399606.cj)([Chunk787879.Z], () => Chunk787879.Z.getChannelInfoMap()), _ = (0, Chunk399606.cj)([Chunk592125.Z], () => {
    let e = {};
    return Object.entries(j).forEach(t => {
      let [n] = t, a = d.Z.getChannel(n);
      e[n] = null != a ? a : null
    }), module
  }), y = (0, Chunk399606.cj)([Chunk592125.Z], () => exports.reduce((e, t) => {
    let n = d.Z.getChannel(t);
    return e[t] = null != n ? n : null, e
  }, {})), C = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getInboxMessages()), S = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getDevOverrides().navOnClick);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk451429.panel,
    children: (0, Chunk951288.jsxs)(Chunk481060.zJl, {
      className: Chunk326588.content,
      children: [(0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Inbox"
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Inbox Message Count: ", C.length]
        })]
      }), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Dev Overrides"
        }), (0, Chunk951288.jsx)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            marginTop: 8
          },
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: "Nav On Click",
            checked: !!S,
            onChange: e => {
              s.Z.dispatch({
                type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                navOnClick: e
              })
            }
          })
        })]
      }), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Unreads and Badging"
        }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Unread Recent Mentions Count: ", module]
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Unread Channel Count: ", exports.length]
        }), (0, Chunk951288.jsx)(Chunk681619.Z, {
          columns: x,
          data: Object.entries(y).map(e => {
            var t;
            let [n, a] = e;
            return {
              key: n,
              channelId: n,
              channelName: null != (t = null == a ? true : a.name) ? t : ""
            }
          })
        })]
      }), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Store State"
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Is Loading: ", require ? "✅" : "❌"]
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Has Preloaded: ", l ? "✅" : "❌"]
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Has Loaded Ever: ", Chunk120356 ? "✅" : "❌"]
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Has More To Load: ", g ? "✅" : "❌"]
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Is Loading Complete: ", b ? "✅" : "❌"]
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Last Loading Trigger: ", null == v ? true : v.loadingTrigger]
        })]
      }), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Channel Info Map"
        }), (0, Chunk951288.jsxs)("div", {
          children: ["Total Channels: ", Object.keys(j).length]
        }), (0, Chunk951288.jsx)(Chunk681619.Z, {
          columns: f,
          data: Object.entries(j).map(e => {
            var t, n;
            let [a, r] = e;
            return {
              key: a,
              channelId: a,
              channelName: null != (n = null == (t = _[a]) ? true : t.name) ? n : "",
              loadState: r.loadState
            }
          })
        })]
      })]
    })
  })
}