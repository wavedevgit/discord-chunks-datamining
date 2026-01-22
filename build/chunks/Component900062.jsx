/** Chunk was on 21738 **/
/** chunk id: 900062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk51183 = require("./51183.jsx"),
  Chunk444435 = require("./444435.js");

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
      id: (null == (n = o.emoji_id) ? true : n.toString()) === "0" ? null : o.emoji_id,
      name: null != (t = o.emoji_name) ? t : "",
      animated: o.emoji_animated
    },
    u = null != c.id || c.name.length > 0,
    d = null != o.status && o.status.length > 0;
  return (0, r.jsx)("div", {
    className: a.kL,
    children: (0, r.jsx)("div", {
      className: a.Nr,
      children: (0, r.jsxs)("div", {
        className: a.Qs,
        children: [u && (0, r.jsx)("div", {
          className: a.qq,
          children: (0, r.jsx)(l.A, {
            emoji: c,
            animate: true,
            hideTooltip: false
          })
        }), d && (0, r.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: a.qS,
          children: o.status
        })]
      })
    })
  })
}