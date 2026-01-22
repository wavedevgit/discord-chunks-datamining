/** Chunk was on 22477 **/
/** chunk id: 502128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk303054 = require("./303054.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk320697 = require("./320697.js"),
  Chunk394953 = require("./394953.js"),
  Chunk187698 = require("./187698.js"),
  Chunk661251 = require("./661251.js");
let f = [{
    key: "channelName",
    cellClassName: i()(Chunk187698.Hn, Chunk187698.HA),
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
    cellClassName: i()(Chunk187698.Hn, Chunk187698.Zm),
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
    cellClassName: i()(Chunk187698.Hn, Chunk187698.HA),
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
    cellClassName: i()(Chunk187698.Hn, Chunk187698.C7),
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
    cellClassName: i()(Chunk187698.Hn, Chunk187698.Zm),
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
  } = (0, m.U4)(), {
    isLoading: n,
    hasLoadedEver: l,
    hasPreloaded: i,
    hasMoreToLoad: b,
    isLoadingComplete: g
  } = (0, r.cf)([u.A], () => ({
    isLoading: u.A.isLoading,
    hasLoadedEver: u.A.hasLoadedEver,
    hasPreloaded: u.A.hasPreloaded,
    hasMoreToLoad: u.A.hasMoreToLoad,
    isLoadingComplete: u.A.isLoadingComplete
  })), v = (0, r.bG)([u.A], () => u.A.currentRequestAnalyticsPayload), j = (0, r.cf)([u.A], () => u.A.getChannelInfoMap()), y = (0, r.cf)([d.A], () => {
    let e = {};
    return Object.entries(j).forEach(t => {
      let [n] = t, a = d.A.getChannel(n);
      e[n] = null != a ? a : null
    }), e
  }), _ = (0, r.cf)([d.A], () => t.reduce((e, t) => {
    let n = d.A.getChannel(t);
    return e[t] = null != n ? n : null, e
  }, {})), A = (0, r.bG)([u.A], () => u.A.getInboxMessages()), C = (0, r.bG)([u.A], () => u.A.getDevOverrides().navOnClick);
  return (0, a.jsx)("div", {
    className: h.nd,
    children: (0, a.jsxs)(s.IpV, {
      className: p.Qs,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          children: "Inbox"
        }), (0, a.jsxs)("div", {
          children: ["Inbox Message Count: ", A.length]
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          children: "Dev Overrides"
        }), (0, a.jsx)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            marginTop: 8
          },
          children: (0, a.jsx)(s.dOG, {
            label: "Nav On Click",
            checked: !!C,
            onChange: e => {
              o.h.dispatch({
                type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                navOnClick: e
              })
            }
          })
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          children: "Unreads and Badging"
        }), (0, a.jsx)(s.hKd, {
          size: 8
        }), (0, a.jsxs)("div", {
          children: ["Unread Recent Mentions Count: ", e]
        }), (0, a.jsxs)("div", {
          children: ["Unread Channel Count: ", t.length]
        }), (0, a.jsx)(c.A, {
          columns: f,
          data: Object.entries(_).map(e => {
            var t;
            let [n, a] = e;
            return {
              key: n,
              channelId: n,
              channelName: null != (t = null == a ? true : a.name) ? t : ""
            }
          })
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          children: "Store State"
        }), (0, a.jsxs)("div", {
          children: ["Is Loading: ", n ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Has Preloaded: ", i ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Has Loaded Ever: ", l ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Has More To Load: ", b ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Is Loading Complete: ", g ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Last Loading Trigger: ", null == v ? true : v.loadingTrigger]
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          children: "Channel Info Map"
        }), (0, a.jsxs)("div", {
          children: ["Total Channels: ", Object.keys(j).length]
        }), (0, a.jsx)(c.A, {
          columns: x,
          data: Object.entries(j).map(e => {
            var t, n;
            let [a, l] = e;
            return {
              key: a,
              channelId: a,
              channelName: null != (t = null == (n = y[a]) ? true : n.name) ? t : "",
              loadState: l.loadState
            }
          })
        })]
      })]
    })
  })
}