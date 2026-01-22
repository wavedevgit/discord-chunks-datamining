/** Chunk was on web.js **/
/** chunk id: 167074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => u
});
var Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk406704 = require("./406704.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let t = e.getGuildId(),
    n = (0, i.bG)([s.Ay, l.default], () => {
      var e, n;
      let r = l.default.getCurrentUser();
      return null != (e = null != t && null != r ? null == (n = s.Ay.getMember(t, r.id)) ? true : n.isPending : null) && e
    }),
    {
      messagesDisabled: u
    } = (0, i.cf)([o.A], () => {
      let t = e.isPrivate(),
        i = o.A.computePermissions(e),
        s = r.zy(i, c.xBc.SEND_MESSAGES),
        l = (0, a.UJ)(e);
      return {
        messagesDisabled: n || !t && !s || l
      }
    }, [e, n]);
  return !u
}