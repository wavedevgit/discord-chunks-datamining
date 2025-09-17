/** Chunk was on 93886 **/
/** chunk id: 544245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk729345 = require("./729345.js"),
  Chunk620481 = require("./620481.js"),
  Chunk608934 = require("./608934.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk575043 = require("./575043.js");
let h = (0, Chunk972959.H)(() => ({
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
  let e = h.useField("includeFrecency"),
    t = h.useField("includeFriends"),
    n = h.useField("includeDMs"),
    s = h.useField("includeGDMs"),
    p = h.useField("includeQuickSwitcherState"),
    x = h.useField("includeUserSearchWorkerState"),
    b = h.useField("isUploading"),
    f = h.useField("isSuccess"),
    g = h.useField("errorMessage"),
    v = Chunk647438.useCallback(async () => {
      let {
        includeFrecency: e,
        includeFriends: t,
        includeGDMs: n,
        includeDMs: a,
        includeQuickSwitcherState: r,
        includeUserSearchWorkerState: l,
        isUploading: s
      } = h.getState();
      if (!Chunk972959) try {
        h.setState({
          isUploading: true,
          errorMessage: null,
          isSuccess: false
        }), exports && (0, Chunk620481.lG)(), require && (0, Chunk620481.mo)(), Chunk951288 && (0, Chunk620481.FB)(), module && (0, Chunk620481.Sr)(), Chunk647438 && (0, Chunk620481.OC)(), Chunk481060 && (0, Chunk620481.Jt)(), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), h.setState({
          isSuccess: true,
          errorMessage: null
        })
      } catch (t) {
        let e = new Chunk881052.Hx(exports);
        h.setState({
          errorMessage: module.getAnyErrorMessage()
        })
      } finally {
        h.setState({
          isUploading: false
        })
      }
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: "Debug Logs Snapshot",
    tag: Chunk481060.RB0.H3,
    className: Chunk575043.panelGroup,
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk575043.subtitle,
      children: "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue."
    }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: () => h.setState({
        includeFrecency: !module
      }),
      note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
      children: "Frecency"
    }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: exports,
      onChange: () => h.setState({
        includeFriends: !exports
      }),
      note: "Includes all Discord Friend usernames, global names, and nicknames.",
      children: "Friends"
    }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: require,
      onChange: () => h.setState({
        includeDMs: !require
      }),
      note: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
      children: "DMs"
    }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: Chunk972959,
      onChange: () => h.setState({
        includeGDMs: !Chunk972959
      }),
      note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
      children: "Group DMs"
    }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: p,
      onChange: () => h.setState({
        includeQuickSwitcherState: !p
      }),
      note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
      children: "Quick Switcher Results"
    }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: x,
      onChange: () => h.setState({
        includeUserSearchWorkerState: !x
      }),
      note: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
      hideBorder: true,
      children: "User Search Worker"
    }), (0, Chunk951288.jsx)(Chunk608934.a, {
      isUploading: b,
      isSuccess: f,
      errorMessage: g,
      onClick: v,
      title: "Upload Snapshot Logs"
    })]
  })
}