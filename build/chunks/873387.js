/** Chunk was on 22878 **/
/** chunk id: 873387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => s
});
var Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk665906 = require("./665906.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = e.getGuildId(),
    n = (0, l.e7)([o.ZP, c.default], () => {
      var e, n;
      let r = c.default.getCurrentUser();
      return null != (n = null != t && null != r ? null == (e = o.ZP.getMember(t, r.id)) ? true : e.isPending : null) && n
    }),
    {
      messagesDisabled: s
    } = (0, l.cj)([a.Z], () => {
      let t = e.isPrivate(),
        l = a.Z.computePermissions(e),
        o = r.e$(l, u.Plq.SEND_MESSAGES),
        c = (0, i.xl)(e);
      return {
        messagesDisabled: n || !t && !o || c
      }
    }, [e, n]);
  return !s
}