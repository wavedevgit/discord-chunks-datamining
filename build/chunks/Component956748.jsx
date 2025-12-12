/** Chunk was on 23736 **/
/** chunk id: 956748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk854184 = require("./854184.js");
let c = e => {
  let {
    showStatus: t,
    width: n,
    opacity: r,
    size: c = "default"
  } = e, d = "small" === c ? l.EFr.SIZE_24 : l.EFr.SIZE_32;
  return (0, a.jsxs)("div", {
    className: i()(o.nameplatePlaceholderUserRow, {
      [o.smallRow]: "small" === c
    }),
    style: {
      opacity: r
    },
    children: [(0, a.jsx)(l.qEK, {
      src: null,
      size: d,
      status: t ? s.Skl.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: o.nameplatePlaceholderAvatar
    }), (0, a.jsx)("div", {
      className: i()(o.nameplatePlaceholderBar, {
        [o.smallBar]: "small" === c
      }),
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}