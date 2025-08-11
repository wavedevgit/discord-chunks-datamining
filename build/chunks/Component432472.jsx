/** Chunk was on 20176 **/
/** chunk id: 432472, original params: n,e,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk856393 = require("./856393.jsx");

function o(n) {
  let {
    windowKey: e,
    channelId: i
  } = n, l = (0, r.e7)([d.Z], () => d.Z.getChannel(i));
  return a()(null != l, "channel cannot be null for popout"), (0, t.jsx)(c.Z, {
    withTitleBar: true,
    windowKey: e,
    title: l.name,
    children: (0, t.jsx)(u.Z.Provider, {
      value: l.guild_id,
      children: (0, t.jsx)(h.Z, {
        channel: l
      })
    })
  })
}