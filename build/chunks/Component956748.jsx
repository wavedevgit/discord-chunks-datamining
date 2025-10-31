/** Chunk was on 8895 **/
/** chunk id: 956748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk492938 = require("./492938.js");
let a = e => {
  let {
    showStatus: t,
    width: n,
    opacity: a
  } = e;
  return (0, l.jsxs)("div", {
    className: s.nameplatePlaceholderUserRow,
    style: {
      opacity: a
    },
    children: [(0, l.jsx)(i.qEK, {
      src: null,
      size: i.EFr.SIZE_32,
      status: t ? r.Skl.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: s.nameplatePlaceholderAvatar
    }), (0, l.jsx)("div", {
      className: s.nameplatePlaceholderBar,
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}