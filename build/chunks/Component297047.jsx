/** Chunk was on 78086 **/
/** chunk id: 297047, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  q: () => p
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
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, n) {
  let {
    id: t
  } = e, r = "@".concat(d.ZP.getUserTag(e, {
    decoration: "never"
  }));
  u.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
    plainText: r,
    rawText: "<@".concat(t, ">")
  }), null != n && o.Z.startTyping(n)
}

function g(e, n, t) {
  let [o, u] = (0, i.Wu)([s.Z, a.Z, c.Z], () => {
    let e = s.Z.getChannelId(n),
      t = a.Z.getChannel(e);
    return [e, null != t && (t.isMultiUserDM() || c.Z.can(f.Plq.SEND_MESSAGES, t))]
  }, [n]), d = t === f.IlC.POPOUT;
  return !u || d ? null : (0, r.jsx)(l.sNh, {
    id: "mention",
    label: h.intl.string(h.t.P8tvKC),
    action: function() {
      p(e, o)
    }
  })
}