/** Chunk was on 21738 **/
/** chunk id: 665583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk681154 = require("./681154.js"),
  Chunk900062 = require("./900062.jsx"),
  Chunk470881 = require("./470881.jsx"),
  Chunk497302 = require("./497302.jsx"),
  Chunk670861 = require("./670861.jsx");

function c(e) {
  let {
    item: t
  } = e;
  switch (t.data.kind) {
    case "guildEvent":
      return (0, r.jsx)(s.A, {
        eventId: t.data.eventId
      });
    case "message":
    case "generatedCandidate":
    case "forumThread":
      return (0, r.jsx)(o.A, {
        item: t
      });
    case "contentInventory":
      switch (t.data.content.content_type) {
        case i.I.CUSTOM_STATUS:
          return (0, r.jsx)(l.A, {
            item: t
          });
        case i.I.PLAYED_GAME:
        case i.I.TOP_GAME:
          return (0, r.jsx)(a.A, {
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