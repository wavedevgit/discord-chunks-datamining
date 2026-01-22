/** Chunk was on 22477 **/
/** chunk id: 940540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk839214 = require("./839214.js"),
  Chunk98919 = require("./98919.js"),
  Chunk137365 = require("./137365.js"),
  Chunk278274 = require("./278274.jsx"),
  Chunk652215 = require("./652215.js");
let m = (0, Chunk839214.D)(() => ({
  includeFrecency: true,
  includeFriends: true,
  includeGDMs: true,
  includeDMs: true,
  includeQuickSwitcherState: true,
  includeUserSearchWorkerState: true,
  isUploading: false,
  isSuccess: false,
  errorMessage: null
}));

function p() {
  let e = m.useField("includeFrecency"),
    t = m.useField("includeFriends"),
    n = m.useField("includeDMs"),
    s = m.useField("includeGDMs"),
    p = m.useField("includeQuickSwitcherState"),
    h = m.useField("includeUserSearchWorkerState"),
    f = m.useField("isUploading"),
    x = m.useField("isSuccess"),
    b = m.useField("errorMessage"),
    g = l.useCallback(async () => {
      let {
        includeFrecency: e,
        includeFriends: t,
        includeGDMs: n,
        includeDMs: a,
        includeQuickSwitcherState: l,
        includeUserSearchWorkerState: i,
        isUploading: s
      } = m.getState();
      if (!s) try {
        m.setState({
          isUploading: true,
          errorMessage: null,
          isSuccess: false
        }), t && (0, c.it)(), n && (0, c.Md)(), a && (0, c.pD)(), e && (0, c.a1)(), l && (0, c._S)(), i && (0, c.D7)(), await (0, o.a)(u.Umv.WEB_APP), m.setState({
          isSuccess: true,
          errorMessage: null
        })
      } catch (t) {
        let e = new r.LG(t);
        m.setState({
          errorMessage: e.getAnyErrorMessage()
        })
      } finally {
        m.setState({
          isUploading: false
        })
      }
    }, []);
  return (0, a.jsxs)(i.nVY, {
    label: "Debug Logs Snapshot",
    description: "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
    children: [(0, a.jsx)(i.dOG, {
      label: "Frecency",
      description: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
      checked: e,
      onChange: () => m.setState({
        includeFrecency: !e
      })
    }), (0, a.jsx)(i.dOG, {
      label: "Friends",
      description: "Includes all Discord Friend usernames, global names, and nicknames.",
      checked: t,
      onChange: () => m.setState({
        includeFriends: !t
      })
    }), (0, a.jsx)(i.dOG, {
      label: "DMs",
      description: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
      checked: n,
      onChange: () => m.setState({
        includeDMs: !n
      })
    }), (0, a.jsx)(i.dOG, {
      label: "Group DMs",
      description: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
      checked: s,
      onChange: () => m.setState({
        includeGDMs: !s
      })
    }), (0, a.jsx)(i.dOG, {
      label: "Quick Switcher Results",
      description: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
      checked: p,
      onChange: () => m.setState({
        includeQuickSwitcherState: !p
      })
    }), (0, a.jsx)(i.dOG, {
      label: "User Search Worker",
      description: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
      checked: h,
      onChange: () => m.setState({
        includeUserSearchWorkerState: !h
      })
    }), (0, a.jsx)(d.q, {
      isUploading: f,
      isSuccess: x,
      errorMessage: b,
      onClick: g,
      title: "Upload Snapshot Logs"
    })]
  })
}