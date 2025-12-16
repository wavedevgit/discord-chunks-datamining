/** Chunk was on 1272 **/
/** chunk id: 67320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk957331 = require("./957331.js");

function o(e) {
  var t, n;
  let {
    item: o
  } = e;
  if ("contentInventory" !== o.data.kind) return null;
  let {
    extra: s
  } = o.data.content;
  if ("custom_status_extra" !== s.type) return null;
  let c = {
      id: (null == (t = s.emoji_id) ? true : t.toString()) === "0" ? null : s.emoji_id,
      name: null != (n = s.emoji_name) ? n : "",
      animated: s.emoji_animated
    },
    u = null != c.id || c.name.length > 0,
    d = null != s.status && s.status.length > 0;
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
          color: "text-strong",
          className: a.statusText,
          children: s.status
        })]
      })
    })
  })
}