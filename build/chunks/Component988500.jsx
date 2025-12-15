/** Chunk was on 37220 **/
/** chunk id: 988500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk203143 = require("./203143.js"),
  Chunk615669 = require("./615669.js"),
  Chunk388032 = require("./388032.jsx");
let c = {
  [Chunk615669.z.END_EARLY]: e => (0, r.jsx)(i.sNh, {
    id: "end-poll-early",
    label: a.intl.string(a.t.grdwwt),
    icon: i.e0C,
    action: () => {
      l.Z.endPollEarly({
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
  let t = (0, o.Z)(e);
  return 0 === t.length ? null : (0, r.jsx)(r.Fragment, {
    children: t.map(t => c[t](e))
  })
}