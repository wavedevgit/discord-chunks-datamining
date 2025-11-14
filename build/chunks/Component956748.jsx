/** Chunk was on 99904 **/
/** chunk id: 956748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk492938 = require("./492938.js");
let c = e => {
  let {
    showStatus: t,
    width: n,
    opacity: l,
    size: c = "default"
  } = e, d = "small" === c ? i.EFr.SIZE_24 : i.EFr.SIZE_32;
  return (0, a.jsxs)("div", {
    className: r()(o.nameplatePlaceholderUserRow, {
      [o.smallRow]: "small" === c
    }),
    style: {
      opacity: l
    },
    children: [(0, a.jsx)(i.qEK, {
      src: null,
      size: d,
      status: t ? s.Skl.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: o.nameplatePlaceholderAvatar
    }), (0, a.jsx)("div", {
      className: r()(o.nameplatePlaceholderBar, {
        [o.smallBar]: "small" === c
      }),
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}