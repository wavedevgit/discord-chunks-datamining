/** Chunk was on web.js **/
/** chunk id: 873387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => u
});
var Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk665906 = require("./665906.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let t = e.getGuildId(),
    n = (0, i.e7)([o.ZP, l.default], () => {
      var e, n;
      let r = l.default.getCurrentUser();
      return null != (n = null != t && null != r ? null == (e = o.ZP.getMember(t, r.id)) ? true : e.isPending : null) && n
    }),
    {
      messagesDisabled: u
    } = (0, i.cj)([s.Z], () => {
      let t = e.isPrivate(),
        i = s.Z.computePermissions(e),
        o = r.e$(i, c.Plq.SEND_MESSAGES),
        l = (0, a.xl)(e);
      return {
        messagesDisabled: n || !t && !o || l
      }
    }, [e, n]);
  return !u
}