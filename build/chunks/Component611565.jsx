/** Chunk was on 6043 **/
/** chunk id: 611565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk787879 = require("./787879.js"),
  Chunk370774 = require("./370774.js"),
  Chunk616182 = require("./616182.js"),
  Chunk663618 = require("./663618.js");
let f = [{
    key: "channelName",
    cellClassName: i()(Chunk616182.cell, Chunk616182.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "channelId",
    cellClassName: i()(Chunk616182.cell, Chunk616182.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }],
  x = [{
    key: "channelName",
    cellClassName: i()(Chunk616182.cell, Chunk616182.channelName),
    render(e) {
      let {
        channelName: t
      } = e;
      return (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "loadState",
    cellClassName: i()(Chunk616182.cell, Chunk616182.loadState),
    render(e) {
      let {
        loadState: t
      } = e;
      return (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }, {
    key: "channelId",
    cellClassName: i()(Chunk616182.cell, Chunk616182.channelId),
    render(e) {
      let {
        channelId: t
      } = e;
      return (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    }
  }];

function b() {
  let {
    unreadRecentMentionsCount: e,
    unreadChannelIds: t
  } = (0, Chunk370774.O4)(), {
    isLoading: n,
    hasLoadedEver: r,
    hasPreloaded: i,
    hasMoreToLoad: b,
    isLoadingComplete: g
  } = (0, Chunk399606.cj)([Chunk787879.Z], () => ({
    isLoading: Chunk787879.Z.isLoading,
    hasLoadedEver: Chunk787879.Z.hasLoadedEver,
    hasPreloaded: Chunk787879.Z.hasPreloaded,
    hasMoreToLoad: Chunk787879.Z.hasMoreToLoad,
    isLoadingComplete: Chunk787879.Z.isLoadingComplete
  })), v = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.currentRequestAnalyticsPayload), j = (0, Chunk399606.cj)([Chunk787879.Z], () => Chunk787879.Z.getChannelInfoMap()), y = (0, Chunk399606.cj)([Chunk592125.Z], () => {
    let e = {};
    return Object.entries(j).forEach(t => {
      let [n] = t, a = d.Z.getChannel(n);
      e[n] = null != a ? a : null
    }), module
  }), C = (0, Chunk399606.cj)([Chunk592125.Z], () => exports.reduce((e, t) => {
    let n = d.Z.getChannel(t);
    return e[t] = null != n ? n : null, e
  }, {})), _ = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getInboxMessages()), S = (0, Chunk399606.e7)([Chunk787879.Z], () => Chunk787879.Z.getDevOverrides().navOnClick);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk663618.panel,
    children: (0, Chunk54381.jsxs)(Chunk481060.zJl, {
      className: Chunk616182.content,
      children: [(0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Inbox"
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Inbox Message Count: ", _.length]
        })]
      }), (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Dev Overrides"
        }), (0, Chunk54381.jsx)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            marginTop: 8
          },
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: "Nav On Click",
            checked: !!S,
            onChange: e => {
              o.Z.dispatch({
                type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                navOnClick: e
              })
            }
          })
        })]
      }), (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Unreads and Badging"
        }), (0, Chunk54381.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Unread Recent Mentions Count: ", module]
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Unread Channel Count: ", exports.length]
        }), (0, Chunk54381.jsx)(Chunk681619.Z, {
          columns: f,
          data: Object.entries(C).map(e => {
            var t;
            let [n, a] = e;
            return {
              key: n,
              channelId: n,
              channelName: null != (t = null == a ? true : a.name) ? t : ""
            }
          })
        })]
      }), (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Store State"
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Is Loading: ", require ? "✅" : "❌"]
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Has Preloaded: ", i ? "✅" : "❌"]
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Has Loaded Ever: ", Chunk120356 ? "✅" : "❌"]
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Has More To Load: ", b ? "✅" : "❌"]
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Is Loading Complete: ", g ? "✅" : "❌"]
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Last Loading Trigger: ", null == v ? true : v.loadingTrigger]
        })]
      }), (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: "Channel Info Map"
        }), (0, Chunk54381.jsxs)("div", {
          children: ["Total Channels: ", Object.keys(j).length]
        }), (0, Chunk54381.jsx)(Chunk681619.Z, {
          columns: x,
          data: Object.entries(j).map(e => {
            var t, n;
            let [a, r] = e;
            return {
              key: a,
              channelId: a,
              channelName: null != (n = null == (t = y[a]) ? true : t.name) ? n : "",
              loadState: r.loadState
            }
          })
        })]
      })]
    })
  })
}