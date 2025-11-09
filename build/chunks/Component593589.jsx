/** Chunk was on 44011 **/
/** chunk id: 593589, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk207035 = require("./207035.js"),
  Chunk823748 = require("./823748.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk706071 = require("./706071.js");

function Z(n) {
  let {
    windowKey: e,
    channel: t
  } = n;
  return (0, l.jsx)(c.Z, {
    withTitleBar: true,
    windowKey: e,
    title: t.name,
    channelId: t.id,
    contentClassName: h.popoutContent,
    children: (0, l.jsx)(o.Z.Provider, {
      value: t.guild_id,
      children: (0, l.jsx)(d.Z, {
        providedChannel: t
      })
    })
  })
}

function x(n, e) {
  let t = (0, s.P)(e),
    o = i.useCallback(() => {
      a.bA("".concat(u.KJ3.CHANNEL_POPOUT, "-").concat(n.id), e => (0, l.jsx)(Z, {
        windowKey: e,
        channel: n
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [n]);
  return t ? (0, l.jsx)(r.sNh, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => o()
  }) : null
}