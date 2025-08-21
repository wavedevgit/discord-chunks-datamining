/** Chunk was on 93886 **/
/** chunk id: 233807, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk729345 = require("./729345.js"),
  Chunk620481 = require("./620481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk727081 = require("./727081.js");

function u() {
  let [e, t] = Chunk647438.useState(true), [a, u] = Chunk647438.useState(true), [m, x] = Chunk647438.useState(true), [h, p] = Chunk647438.useState(true), [v, b] = Chunk647438.useState(false), [f, j] = Chunk647438.useState(false), [g, _] = Chunk647438.useState(null), y = Chunk647438.useCallback(async () => {
    try {
      _(null), j(false), b(true), require && (0, Chunk620481.lG)(), m && (0, Chunk620481.du)(), module && (0, Chunk620481.Sr)(), h && (0, Chunk620481.OC)(), await (0, Chunk729345.E)(Chunk981631.GU0.WEB_APP), j(true), _(null)
    } catch (e) {
      _(new Chunk881052.Hx(module).getAnyErrorMessage())
    } finally {
      b(false)
    }
  }, [require, m, module, h]);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk727081.panel,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Create Debug Logs",
      tag: Chunk481060.RB0.H3,
      className: Chunk727081.panelGroup,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk727081.subtitle,
        children: "Uploading logs can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue."
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk727081.subtitle,
        children: "Please click Upload Logs while the Quick Switcher is open."
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: exports,
        note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
        children: "Frecency"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: u,
        note: "Includes all Discord Friend usernames, global names, and nicknames.",
        children: "Friends"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: m,
        onChange: x,
        note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all DMs and Group DMs. Does NOT include any message data.",
        children: "Private Channels"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: h,
        onChange: p,
        note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Logs.",
        hideBorder: true,
        children: "Quick Switcher State"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        onClick: y,
        loading: v,
        disabled: v,
        text: v ? "Uploading…" : "Upload Logs"
      }), null != g && (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.ERROR,
        className: Chunk727081.statusText,
        children: g
      }), f && (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.SUCCESS,
        className: Chunk727081.statusText,
        children: "Logs uploaded successfully"
      })]
    })
  })
}