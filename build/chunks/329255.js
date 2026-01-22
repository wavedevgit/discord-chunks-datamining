/** Chunk was on 72165 **/
/** chunk id: 329255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk914430 = require("./914430.js"),
  Chunk924985 = require("./924985.js"),
  Chunk543465 = require("./543465.js"),
  Chunk816662 = require("./816662.js"),
  Chunk234053 = require("./234053.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  i.h.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function b(e) {
  let t = (0, r.bG)([c.Ay], () => c.Ay.getPendingChannelUpdates(e));
  return l.useEffect(() => (f(e), () => f(e)), [e]), l.useEffect(() => {
    null != t && (0, d.hp)(e, t)
  }, [e, t]), {
    onChannelClick: l.useCallback((e, t, n) => {
      let l = c.Ay.isChannelOptedIn(e, t),
        r = t === n;
      !l && s.A.isCollapsed(n) && null != n && (0, a.fh)(n), (0, o.cE)(e) ? r ? (0, o.le)(e, {
        include: new Set([t])
      }) : (0, o.le)(e, {
        exclude: new Set([t])
      }) : (0, d.zk)(e, t, !l, {
        section: u.JJy.CHANNEL_BROWSER
      })
    }, [])
  }
}