/** Chunk was on 71874 **/
/** chunk id: 956748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk492938 = require("./492938.js");
let o = e => {
  let {
    showStatus: t,
    width: n,
    opacity: o
  } = e;
  return (0, a.jsxs)("div", {
    className: i.nameplatePlaceholderUserRow,
    style: {
      opacity: o
    },
    children: [(0, a.jsx)(r.qEK, {
      src: null,
      size: r.EFr.SIZE_32,
      status: t ? l.Skl.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: i.nameplatePlaceholderAvatar
    }), (0, a.jsx)("div", {
      className: i.nameplatePlaceholderBar,
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}