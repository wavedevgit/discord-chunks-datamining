/** Chunk was on 1636 **/
/** chunk id: 51512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk180662 = require("./180662.js"),
  Chunk52684 = require("./52684.js"),
  Chunk985018 = require("./985018.jsx");
let c = {
  [Chunk52684.G.END_EARLY]: e => (0, r.jsx)(l.Drp, {
    id: "end-poll-early",
    label: a.intl.string(a.t.grdwwt),
    icon: l.O7L,
    action: () => {
      i.A.endPollEarly({
        channelId: e.channel_id,
        messageId: e.id
      })
    },
    iconProps: {
      color: "currentColor"
    }
  })
};

function s(e) {
  let t = (0, o.A)(e);
  return 0 === t.length ? null : (0, r.jsx)(r.Fragment, {
    children: t.map(t => c[t](e))
  })
}