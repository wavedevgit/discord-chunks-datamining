/** Chunk was on 23242 **/
/** chunk id: 956748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk854184 = require("./854184.js");
let u = e => {
  let {
    showStatus: t,
    width: n,
    opacity: l,
    size: u = "default"
  } = e, c = "small" === u ? a.EFr.SIZE_24 : a.EFr.SIZE_32;
  return (0, r.jsxs)("div", {
    className: i()(o.nameplatePlaceholderUserRow, {
      [o.smallRow]: "small" === u
    }),
    style: {
      opacity: l
    },
    children: [(0, r.jsx)(a.qEK, {
      src: null,
      size: c,
      status: t ? s.Skl.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: o.nameplatePlaceholderAvatar
    }), (0, r.jsx)("div", {
      className: i()(o.nameplatePlaceholderBar, {
        [o.smallBar]: "small" === u
      }),
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}