/** Chunk was on 21738 **/
/** chunk id: 442187, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let t = (0, i.bG)([l.Ay], () => {
    var t;
    return null != (t = l.Ay.getChannels(e)[l.I6]) ? t : []
  }, [e]);
  return 0 === t.length ? 0 : t.filter(e => {
    let {
      channel: t
    } = e;
    return a.A.can(r.kg(s.xBc.SEND_MESSAGES, s.xBc.VIEW_CHANNEL), t)
  }).length
}