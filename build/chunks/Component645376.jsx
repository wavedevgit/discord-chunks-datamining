/** Chunk was on 7803 **/
/** chunk id: 645376, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk900722 = require("./900722.js"),
  Chunk476324 = require("./476324.js");

function r(t) {
  let {
    user: e,
    size: s
  } = t, r = (0, n.KjH)(s), c = null != e ? e.getAvatarURL(null, r.size) : l;
  return (0, i.jsx)("div", {
    className: a.oJ,
    children: (0, i.jsx)("div", {
      className: a.my,
      style: {
        width: r.size,
        height: r.size
      },
      children: (0, i.jsx)(n.euF, {
        src: c,
        "aria-hidden": true,
        size: s
      })
    })
  })
}