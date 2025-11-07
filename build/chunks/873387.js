/** Chunk was on 13140 **/
/** chunk id: 873387, original params: e,t,n (module,exports,require) **/
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
    n = (0, i.e7)([a.ZP, s.default], () => {
      var e, n;
      let r = s.default.getCurrentUser();
      return null != (n = null != t && null != r ? null == (e = a.ZP.getMember(t, r.id)) ? true : e.isPending : null) && n
    }),
    {
      messagesDisabled: u
    } = (0, i.cj)([o.Z], () => {
      let t = e.isPrivate(),
        i = o.Z.computePermissions(e),
        a = r.e$(i, c.Plq.SEND_MESSAGES),
        s = (0, l.xl)(e);
      return {
        messagesDisabled: n || !t && !a || s
      }
    }, [e, n]);
  return !u
}