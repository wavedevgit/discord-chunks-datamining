/** Chunk was on 22477 **/
/** chunk id: 502128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk303054 = require("./303054.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk320697 = require("./320697.js"),
  Chunk394953 = require("./394953.js"),
  Chunk187698 = require("./187698.js"),
  Chunk661251 = require("./661251.js");
let x = [{
    key: "channelName",
    cellClassName: r()(Chunk187698.Hn, Chunk187698.HA),
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
    cellClassName: r()(Chunk187698.Hn, Chunk187698.Zm),
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
  g = [{
    key: "channelName",
    cellClassName: r()(Chunk187698.Hn, Chunk187698.HA),
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
    cellClassName: r()(Chunk187698.Hn, Chunk187698.C7),
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
    cellClassName: r()(Chunk187698.Hn, Chunk187698.Zm),
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

function f() {
  let {
    unreadRecentMentionsCount: e,
    unreadChannelIds: t
  } = (0, m.U4)(), {
    isLoading: n,
    hasLoadedEver: l,
    hasPreloaded: r,
    hasMoreToLoad: f,
    isLoadingComplete: b
  } = (0, i.cf)([u.A], () => ({
    isLoading: u.A.isLoading,
    hasLoadedEver: u.A.hasLoadedEver,
    hasPreloaded: u.A.hasPreloaded,
    hasMoreToLoad: u.A.hasMoreToLoad,
    isLoadingComplete: u.A.isLoadingComplete
  })), v = (0, i.bG)([u.A], () => u.A.currentRequestAnalyticsPayload), j = (0, i.cf)([u.A], () => u.A.getChannelInfoMap()), _ = (0, i.cf)([d.A], () => {
    let e = {};
    return Object.entries(j).forEach(t => {
      let [n] = t, a = d.A.getChannel(n);
      e[n] = null != a ? a : null
    }), e
  }), y = (0, i.cf)([d.A], () => t.reduce((e, t) => {
    let n = d.A.getChannel(t);
    return e[t] = null != n ? n : null, e
  }, {})), A = (0, i.bG)([u.A], () => u.A.getInboxMessages()), C = (0, i.bG)([u.A], () => u.A.getDevOverrides().navOnClick);
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
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          children: "Store State"
        }), (0, a.jsxs)("div", {
          children: ["Is Loading: ", n ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Has Preloaded: ", r ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Has Loaded Ever: ", l ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Has More To Load: ", f ? "✅" : "❌"]
        }), (0, a.jsxs)("div", {
          children: ["Is Loading Complete: ", b ? "✅" : "❌"]
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
          columns: g,
          data: Object.entries(j).map(e => {
            var t, n;
            let [a, l] = e;
            return {
              key: a,
              channelId: a,
              channelName: null != (t = null == (n = _[a]) ? true : n.name) ? t : "",
              loadState: l.loadState
            }
          })
        })]
      })]
    })
  })
}