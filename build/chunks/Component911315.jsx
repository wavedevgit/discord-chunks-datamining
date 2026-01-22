/** Chunk was on 36308 **/
/** chunk id: 911315, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk164617 = require("./164617.js"),
  Chunk386467 = require("./386467.js"),
  Chunk923917 = require("./923917.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk566388 = require("./566388.jsx");

function o(e) {
  let {
    windowKey: n,
    channelId: t
  } = e, l = (0, r.bG)([c.A], () => c.A.getChannel(t));
  return a()(null != l, "channel cannot be null for popout"), (0, i.jsx)(p.A, {
    withTitleBar: true,
    windowKey: n,
    title: l.name,
    children: (0, i.jsx)(d.A.Provider, {
      value: l.guild_id,
      children: (0, i.jsx)(h.A, {
        channel: l,
        popoutType: u.N.VOICE_UI
      })
    })
  })
}