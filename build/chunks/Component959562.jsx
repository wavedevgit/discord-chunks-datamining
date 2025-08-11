/** Chunk was on 18824 **/
/** chunk id: 959562, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk632139 = require("./632139.js"),
  Chunk660097 = require("./660097.js");

function l(t) {
  let {
    user: e,
    size: n
  } = t, l = (0, i.UCu)(n), c = null != e ? e.getAvatarURL(null, l.size) : r;
  return (0, s.jsx)("div", {
    className: a.avatarBackground,
    children: (0, s.jsx)("div", {
      className: a.avatar,
      style: {
        width: l.size,
        height: l.size
      },
      children: (0, s.jsx)(i.qEK, {
        src: c,
        "aria-hidden": true,
        size: n
      })
    })
  })
}