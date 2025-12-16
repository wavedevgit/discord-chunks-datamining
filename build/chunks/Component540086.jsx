/** Chunk was on 1272 **/
/** chunk id: 540086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk876215 = require("./876215.js"),
  Chunk67320 = require("./67320.jsx"),
  Chunk742171 = require("./742171.jsx"),
  Chunk823873 = require("./823873.jsx"),
  Chunk707874 = require("./707874.jsx");

function c(e) {
  let {
    item: t
  } = e;
  switch (t.data.kind) {
    case "guildEvent":
      return (0, r.jsx)(o.Z, {
        eventId: t.data.eventId
      });
    case "message":
    case "generatedCandidate":
    case "forumThread":
      return (0, r.jsx)(s.Z, {
        item: t
      });
    case "contentInventory":
      switch (t.data.content.content_type) {
        case i.s.CUSTOM_STATUS:
          return (0, r.jsx)(l.Z, {
            item: t
          });
        case i.s.PLAYED_GAME:
        case i.s.TOP_GAME:
          return (0, r.jsx)(a.Z, {
            item: t
          });
        default:
          return (0, r.jsx)("div", {
            children: "Unsupported content inventory type"
          })
      }
    default:
      return (0, r.jsx)("div", {
        children: "Unknown item type"
      })
  }
}