/** Chunk was on 1113 **/
/** chunk id: 896455, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d,
  t: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk151282 = require("./151282.js"),
  Chunk388096 = require("./388096.jsx"),
  Chunk985018 = require("./985018.jsx");
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";

function d(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: d,
    defaultValue: h
  } = e, [p, g] = l.useState(h);
  return (0, r.jsx)(i.Modal, {
    transitionState: n,
    size: "md",
    title: c.intl.string(c.t["3+ii4F"]),
    onClose: d,
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: d
    }, {
      variant: "primary",
      text: c.intl.string(c.t.iQ1SwX),
      onClick: () => {
        (0, a.yF)({
          channelId: t.id,
          scheduledTimestamp: p.toISOString()
        }), (0, s.OoC)(u)
      }
    }],
    children: (0, r.jsx)(o.A, {
      defaultValue: h,
      onChange: g
    })
  })
}