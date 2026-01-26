/** Chunk was on 43921 **/
/** chunk id: 304232, original params: e,d,a (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk863922 = require("./863922.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    summary: d,
    onSelect: a
  } = e;
  return (0, n.jsx)(t.W1t, {
    "data-menu-migrated-auto": true,
    onSelect: a,
    navId: "channel-summaries-context-menu",
    "aria-label": c.intl.string(c.t.ogxXGq),
    onClose: i.Z_,
    children: (0, n.jsx)(t.rXV, {
      children: (0, n.jsx)(t.Drp, {
        id: "delete-summary",
        color: "danger",
        label: c.intl.string(c.t["5AwUIg"]),
        action: () => {
          (0, s.O$)(d);
          let e = l.A.getChannel(d.channelId);
          r.default.track(u.HAw.SUMMARY_DELETED, {
            guild_id: null == e ? true : e.guild_id,
            channel_id: null == e ? true : e.id,
            summary_id: d.id,
            start_message_id: d.startId,
            end_message_id: d.endId
          })
        }
      })
    })
  })
}