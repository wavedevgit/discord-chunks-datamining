/** Chunk was on 1272 **/
/** chunk id: 67320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk234065 = require("./234065.js");

function s(e) {
  var t, n;
  let {
    item: s
  } = e;
  if ("contentInventory" !== s.data.kind) return null;
  let {
    extra: o
  } = s.data.content;
  if ("custom_status_extra" !== o.type) return null;
  let c = {
      id: (null == (t = o.emoji_id) ? true : t.toString()) === "0" ? null : o.emoji_id,
      name: null != (n = o.emoji_name) ? n : "",
      animated: o.emoji_animated
    },
    u = null != c.id || c.name.length > 0,
    d = null != o.status && o.status.length > 0;
  return (0, r.jsx)("div", {
    className: a.container,
    children: (0, r.jsx)("div", {
      className: a.card,
      children: (0, r.jsxs)("div", {
        className: a.content,
        children: [u && (0, r.jsx)("div", {
          className: a.emojiContainer,
          children: (0, r.jsx)(l.Z, {
            emoji: c,
            animate: true,
            hideTooltip: false
          })
        }), d && (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "text-primary",
          className: a.statusText,
          children: o.status
        })]
      })
    })
  })
}