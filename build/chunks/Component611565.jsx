/** Chunk was on 93886 **/
/** chunk id: 611565, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk787879 = require("./787879.js"),
  Chunk370774 = require("./370774.js"),
  Chunk94091 = require("./94091.js"),
  Chunk616257 = require("./616257.js");
let p = [{
    key: "channelName",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "channelId",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }],
  b = [{
    key: "channelName",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "loadState",
    cellClassName: l()(Chunk94091.cell, Chunk94091.loadState),
    render(e) {
      let {
        loadState: t
      } = e;
      return (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "channelId",
    cellClassName: l()(Chunk94091.cell, Chunk94091.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }];

function f() {
  let {
    unreadRecentMentionsCount: e,
    unreadChannelIds: t
  } = (0, Chunk370774.O4)(), {
    isLoading: a,
    hasLoadedEver: r,
    hasPreloaded: l,
    hasMoreToLoad: f,
    isLoadingComplete: v
  } = (0, Chunk399606.cj)([Chunk787879.Z], () => ({
    isLoading: Chunk787879.Z.isLoading,
    hasLoadedEver: Chunk787879.Z.hasLoadedEver,
    hasPreloaded: Chunk787879.Z.hasPreloaded,
    hasMoreToLoad: Chunk787879.Z.hasMoreToLoad,
    isLoadingComplete: Chunk787879.Z.isLoadingComplete
  })), j = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.currentRequestAnalyticsPayload), g = (0, Chunk399606.cj)([Chunk787879.Z], () => Chunk787879.Z.getChannelInfoMap()), _ = (0, Chunk399606.cj)([Chunk592125.Z], () => {
    let e = {};
    return Object.entries(g).forEach(t => {
      let [a] = t, n = d.Z.getChannel(a);
      e[a] = null != n ? n : null
    }), module
  }), y = (0, Chunk399606.cj)([Chunk592125.Z], () => exports.reduce((e, t) => {
    let a = d.Z.getChannel(t);
    return e[t] = null != a ? a : null, e
  }, {})), C = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getInboxMessages()), N = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getDevOverrides().navOnClick);
  return (0, Chunk255367.jsx)("div", {
    className: Chunk616257.panel,
    children: (0, Chunk255367.jsxs)(Chunk481060.zJl, {
      className: Chunk94091.content,
      children: [(0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: "Inbox"
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Inbox Message Count: ", C.length]
        })]
      }), (0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: "Dev Overrides"
        }), (0, Chunk255367.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 8
          },
          children: [(0, Chunk255367.jsx)("div", {
            children: "Nav On Click"
          }), (0, Chunk255367.jsx)(Chunk481060.XZJ, {
            value: N,
            onChange: e => {
              o.Z.dispatch({
                type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                navOnClick: e.target.checked
              })
            }
          })]
        })]
      }), (0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: "Unreads and Badging"
        }), (0, Chunk255367.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Unread Recent Mentions Count: ", module]
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Unread Channel Count: ", exports.length]
        }), (0, Chunk255367.jsx)(Chunk681619.Z, {
          columns: p,
          data: Object.entries(y).map(e => {
            var t;
            let [a, n] = e;
            return {
              key: a,
              channelId: a,
              channelName: null != (t = null == n ? true : n.name) ? t : ""
            }
          })
        })]
      }), (0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: "Store State"
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Is Loading: ", require ? "✅" : "❌"]
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Has Preloaded: ", l ? "✅" : "❌"]
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Has Loaded Ever: ", Chunk120356 ? "✅" : "❌"]
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Has More To Load: ", f ? "✅" : "❌"]
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Is Loading Complete: ", v ? "✅" : "❌"]
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Last Loading Trigger: ", null == j ? true : j.loadingTrigger]
        })]
      }), (0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: "Channel Info Map"
        }), (0, Chunk255367.jsxs)("div", {
          children: ["Total Channels: ", Object.keys(g).length]
        }), (0, Chunk255367.jsx)(Chunk681619.Z, {
          columns: b,
          data: Object.entries(g).map(e => {
            var t, a;
            let [n, r] = e;
            return {
              key: n,
              channelId: n,
              channelName: null != (a = null == (t = _[n]) ? true : t.name) ? a : "",
              loadState: r.loadState
            }
          })
        })]
      })]
    })
  })
}