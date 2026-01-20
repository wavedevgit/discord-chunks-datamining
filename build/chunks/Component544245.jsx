/** Chunk was on 22979 **/
/** chunk id: 544245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk729345 = require("./729345.js"),
  Chunk620481 = require("./620481.js"),
  Chunk608934 = require("./608934.jsx"),
  Chunk981631 = require("./981631.js");
let m = (0, Chunk972959.H)(() => ({
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
    b = m.useField("isSuccess"),
    x = m.useField("errorMessage"),
    g = r.useCallback(async () => {
      let {
        includeFrecency: e,
        includeFriends: t,
        includeGDMs: n,
        includeDMs: a,
        includeQuickSwitcherState: r,
        includeUserSearchWorkerState: i,
        isUploading: s
      } = m.getState();
      if (!s) try {
        m.setState({
          isUploading: true,
          errorMessage: null,
          isSuccess: false
        }), t && (0, c.lG)(), n && (0, c.mo)(), a && (0, c.FB)(), e && (0, c.Sr)(), r && (0, c.OC)(), i && (0, c.Jt)(), await (0, o.E)(u.GU0.WEB_APP), m.setState({
          isSuccess: true,
          errorMessage: null
        })
      } catch (t) {
        let e = new l.Hx(t);
        m.setState({
          errorMessage: e.getAnyErrorMessage()
        })
      } finally {
        m.setState({
          isUploading: false
        })
      }
    }, []);
  return (0, a.jsxs)(i.C3N, {
    label: "Debug Logs Snapshot",
    description: "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
    children: [(0, a.jsx)(i.rsf, {
      label: "Frecency",
      description: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
      checked: e,
      onChange: () => m.setState({
        includeFrecency: !e
      })
    }), (0, a.jsx)(i.rsf, {
      label: "Friends",
      description: "Includes all Discord Friend usernames, global names, and nicknames.",
      checked: t,
      onChange: () => m.setState({
        includeFriends: !t
      })
    }), (0, a.jsx)(i.rsf, {
      label: "DMs",
      description: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
      checked: n,
      onChange: () => m.setState({
        includeDMs: !n
      })
    }), (0, a.jsx)(i.rsf, {
      label: "Group DMs",
      description: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
      checked: s,
      onChange: () => m.setState({
        includeGDMs: !s
      })
    }), (0, a.jsx)(i.rsf, {
      label: "Quick Switcher Results",
      description: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
      checked: p,
      onChange: () => m.setState({
        includeQuickSwitcherState: !p
      })
    }), (0, a.jsx)(i.rsf, {
      label: "User Search Worker",
      description: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
      checked: h,
      onChange: () => m.setState({
        includeUserSearchWorkerState: !h
      })
    }), (0, a.jsx)(d.a, {
      isUploading: f,
      isSuccess: b,
      errorMessage: x,
      onClick: g,
      title: "Upload Snapshot Logs"
    })]
  })
}