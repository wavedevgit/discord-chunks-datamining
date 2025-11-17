/** Chunk was on 12891 **/
/** chunk id: 519620, original params: e,n,d (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk479313 = require("./479313.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    summary: n,
    onSelect: d
  } = e;
  return (0, i.jsx)(t.v2r, {
    onSelect: d,
    navId: "channel-summaries-context-menu",
    "aria-label": u.intl.string(u.t.ogxXGq),
    onClose: a.Zy,
    children: (0, i.jsx)(t.kSQ, {
      children: (0, i.jsx)(t.sNh, {
        id: "delete-summary",
        color: "danger",
        label: u.intl.string(u.t["5AwUIg"]),
        action: () => {
          (0, r.$l)(n);
          let e = l.Z.getChannel(n.channelId);
          s.default.track(c.rMx.SUMMARY_DELETED, {
            guild_id: null == e ? true : e.guild_id,
            channel_id: null == e ? true : e.id,
            summary_id: n.id,
            start_message_id: n.startId,
            end_message_id: n.endId
          })
        }
      })
    })
  })
}