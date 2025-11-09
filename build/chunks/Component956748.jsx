/** Chunk was on 22740 **/
/** chunk id: 956748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk678006 = require("./678006.js");
let s = e => {
  let {
    showStatus: t,
    width: n,
    opacity: s
  } = e;
  return (0, a.jsxs)("div", {
    className: l.nameplatePlaceholderUserRow,
    style: {
      opacity: s
    },
    children: [(0, a.jsx)(r.qEK, {
      src: null,
      size: r.EFr.SIZE_32,
      status: t ? i.Skl.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: l.nameplatePlaceholderAvatar
    }), (0, a.jsx)("div", {
      className: l.nameplatePlaceholderBar,
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}