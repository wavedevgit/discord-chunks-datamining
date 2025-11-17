/** Chunk was on 20176 **/
/** chunk id: 432472, original params: n,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk598006 = require("./598006.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk504185 = require("./504185.jsx");

function h(n) {
  let {
    windowKey: e,
    channelId: t
  } = n, l = (0, r.e7)([o.Z], () => o.Z.getChannel(t));
  return a()(null != l, "channel cannot be null for popout"), (0, i.jsx)(d.Z, {
    withTitleBar: true,
    windowKey: e,
    title: l.name,
    children: (0, i.jsx)(c.Z.Provider, {
      value: l.guild_id,
      children: (0, i.jsx)(p.Z, {
        channel: l,
        popoutType: u.P.VOICE_UI
      })
    })
  })
}