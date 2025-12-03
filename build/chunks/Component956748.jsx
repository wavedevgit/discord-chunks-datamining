/** Chunk was on 54400 **/
/** chunk id: 956748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk492938 = require("./492938.js");
let u = e => {
  let {
    showStatus: t,
    width: n,
    opacity: l,
    size: u = "default"
  } = e, c = "small" === u ? i.EFr.SIZE_24 : i.EFr.SIZE_32;
  return (0, r.jsxs)("div", {
    className: a()(s.nameplatePlaceholderUserRow, {
      [s.smallRow]: "small" === u
    }),
    style: {
      opacity: l
    },
    children: [(0, r.jsx)(i.qEK, {
      src: null,
      size: c,
      status: t ? o.Skl.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: s.nameplatePlaceholderAvatar
    }), (0, r.jsx)("div", {
      className: a()(s.nameplatePlaceholderBar, {
        [s.smallBar]: "small" === u
      }),
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}