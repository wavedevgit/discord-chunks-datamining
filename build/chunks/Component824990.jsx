/** Chunk was on 64982 **/
/** chunk id: 824990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk8426 = require("./8426.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197530 = require("./197530.js");
let d = function(e) {
  var t;
  let {
    channel: n,
    end: d
  } = e, u = i.useCallback(() => {
    (0, s.r2)({
      channelId: n.id,
      title: n.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [n]), g = null != (t = (0, a.KS)(n)) ? t : l.VL1;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: c.suggestedChannel,
      children: [(0, r.jsx)(g, {
        className: c.suggestedChannelIcon
      }), (0, r.jsx)(l.Text, {
        className: c.suggestedChannelText,
        variant: "text-sm/normal",
        children: n.name
      }), (0, r.jsx)(l.Button, {
        size: "sm",
        variant: "primary",
        onClick: u,
        text: o.intl.string(o.t.OYkgVk)
      })]
    }), d && (0, r.jsx)("div", {
      className: c.suggestedSeparator
    })]
  })
}