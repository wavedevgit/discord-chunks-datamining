/** Chunk was on 51064 **/
/** chunk id: 51182, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144144 = require("./144144.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(t, e, n) {
  let [p, b] = (0, i.Wu)([u.Z, a.Z, l.Z], () => {
    let t = u.Z.getChannelId(e),
      n = a.Z.getChannel(t);
    return [t, null != n && (n.isPrivate() || l.Z.can(f.Plq.SEND_MESSAGES, n))]
  }, [e]), v = n === f.IlC.POPOUT;
  return !b || v ? null : (0, r.jsx)(c.sNh, {
    id: "mention",
    label: d.intl.string(d.t.P8tvKC),
    action: function() {
      let {
        id: e
      } = t, n = "@".concat(t.name);
      s.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
        plainText: n,
        rawText: "<@$".concat(e, ">")
      }), null != p && o.Z.startTyping(p)
    }
  })
}