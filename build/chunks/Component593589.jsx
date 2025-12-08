/** Chunk was on 81500 **/
/** chunk id: 593589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk207035 = require("./207035.js"),
  Chunk823748 = require("./823748.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk815523 = require("./815523.js");

function f(e) {
  let {
    windowKey: t,
    channel: n
  } = e;
  return (0, r.jsx)(l.Z, {
    withTitleBar: true,
    windowKey: t,
    title: n.name,
    channelId: n.id,
    contentClassName: p.popoutContent,
    children: (0, r.jsx)(o.Z.Provider, {
      value: n.guild_id,
      children: (0, r.jsx)(d.Z, {
        providedChannel: n
      })
    })
  })
}

function b(e, t) {
  let n = (0, c.P)(t),
    o = i.useCallback(() => {
      s.open("".concat(u.KJ3.CHANNEL_POPOUT, "-").concat(e.id), t => (0, r.jsx)(f, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, r.jsx)(a.sNh, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => o()
  }) : null
}