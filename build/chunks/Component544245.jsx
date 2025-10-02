/** Chunk was on 51711 **/
/** chunk id: 544245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk530146 = require("./530146.js");
let p = (0, Chunk972959.H)(() => ({
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

function h() {
  let e = p.useField("includeFrecency"),
    t = p.useField("includeFriends"),
    n = p.useField("includeDMs"),
    s = p.useField("includeGDMs"),
    h = p.useField("includeQuickSwitcherState"),
    x = p.useField("includeUserSearchWorkerState"),
    f = p.useField("isUploading"),
    b = p.useField("isSuccess"),
    g = p.useField("errorMessage"),
    v = Chunk647438.useCallback(async () => {
      let {
        includeFrecency: e,
        includeFriends: t,
        includeGDMs: n,
        includeDMs: a,
        includeQuickSwitcherState: r,
        includeUserSearchWorkerState: i,
        isUploading: s
      } = p.getState();
      if (!Chunk972959) try {
        p.setState({
          isUploading: true,
          errorMessage: null,
          isSuccess: false
        }), exports && (0, Chunk620481.lG)(), require && (0, Chunk620481.mo)(), Chunk951288 && (0, Chunk620481.FB)(), module && (0, Chunk620481.Sr)(), Chunk647438 && (0, Chunk620481.OC)(), Chunk481060 && (0, Chunk620481.Jt)(), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), p.setState({
          isSuccess: true,
          errorMessage: null
        })
      } catch (t) {
        let e = new Chunk881052.Hx(exports);
        p.setState({
          errorMessage: module.getAnyErrorMessage()
        })
      } finally {
        p.setState({
          isUploading: false
        })
      }
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: "Debug Logs Snapshot",
    tag: Chunk481060.RB0.H3,
    className: Chunk530146.panelGroup,
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk530146.subtitle,
      children: "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue."
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "Frecency",
      description: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
      checked: module,
      onChange: () => p.setState({
        includeFrecency: !module
      })
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "Friends",
      description: "Includes all Discord Friend usernames, global names, and nicknames.",
      checked: exports,
      onChange: () => p.setState({
        includeFriends: !exports
      })
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "DMs",
      description: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
      checked: require,
      onChange: () => p.setState({
        includeDMs: !require
      })
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "Group DMs",
      description: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
      checked: Chunk972959,
      onChange: () => p.setState({
        includeGDMs: !Chunk972959
      })
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "Quick Switcher Results",
      description: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
      checked: h,
      onChange: () => p.setState({
        includeQuickSwitcherState: !h
      })
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "User Search Worker",
      description: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
      checked: x,
      onChange: () => p.setState({
        includeUserSearchWorkerState: !x
      })
    }), (0, Chunk951288.jsx)(Chunk608934.a, {
      isUploading: f,
      isSuccess: b,
      errorMessage: g,
      onClick: v,
      title: "Upload Snapshot Logs"
    })]
  })
}