/** Chunk was on 71568 **/
/** chunk id: 593589, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372900 = require("./372900.js"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk207035 = require("./207035.js"),
  Chunk823748 = require("./823748.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk660377 = require("./660377.js");

function u(e) {
  let {
    windowKey: n,
    channel: t
  } = e;
  return (0, i.jsx)(c.Z, {
    withTitleBar: true,
    windowKey: n,
    title: t.name,
    channelId: t.id,
    contentClassName: f.popoutContent,
    children: (0, i.jsx)(a.Z.Provider, {
      value: t.guild_id,
      children: (0, i.jsx)(l.Z, {
        providedChannel: t
      })
    })
  })
}

function m(e, n) {
  let t = (0, _.P)(n),
    a = o.useCallback(() => {
      d.bA("".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(e.id), n => (0, i.jsx)(u, {
        windowKey: n,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return t ? (0, i.jsx)(r.sNh, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => a()
  }) : null
}