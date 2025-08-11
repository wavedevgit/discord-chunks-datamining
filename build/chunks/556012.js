/** Chunk was on web.js **/
/** chunk id: 556012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => g
});
var Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk273504 = require("./273504.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => e !== l.jj.QUARANTINE_USER,
  f = e => {
    switch (e) {
      case l.jj.BLOCK_MESSAGE:
      case l.jj.FLAG_TO_CHANNEL:
      case l.jj.USER_COMMUNICATION_DISABLED:
      case l.jj.QUARANTINE_USER:
        returntrue;
      default:
        returnfalse
    }
  },
  _ = e => {
    switch (e) {
      case l.jj.BLOCK_MESSAGE:
        return u.intl.string(u.t.d1ab8v);
      case l.jj.FLAG_TO_CHANNEL:
        return u.intl.string(u.t["Y+Vmvb"]);
      case l.jj.USER_COMMUNICATION_DISABLED:
        return u.intl.string(u.t.Xz2njI);
      case l.jj.QUARANTINE_USER:
        return u.intl.string(u.t.NPO8eX)
    }
  },
  p = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.fX.KEYWORD;
    switch (e) {
      case l.jj.BLOCK_MESSAGE:
        switch (t) {
          case l.fX.MENTION_SPAM:
            return u.intl.string(u.t["8hdId3"]);
          case l.fX.ML_SPAM:
            return u.intl.string(u.t.tLQYs7);
          default:
            return u.intl.string(u.t.xAAocn)
        }
      case l.jj.FLAG_TO_CHANNEL:
        return u.intl.string(u.t.BHAXfX);
      case l.jj.USER_COMMUNICATION_DISABLED:
        return u.intl.string(u.t["bNK+gI"]);
      case l.jj.QUARANTINE_USER:
        return u.intl.string(u.t["/7nL5e"])
    }
  },
  h = (e, t) => {
    var n, r, d;
    switch (e) {
      case l.jj.QUARANTINE_USER:
      case l.jj.BLOCK_MESSAGE:
        return null;
      case l.jj.FLAG_TO_CHANNEL: {
        let e = null == t || null == (n = t.metadata) ? true : n.channelId;
        if (null == e) return null;
        let r = o.Z.getChannel(e);
        if (null == r) return null;
        let l = (0, i.F6)(r, s.default, a.Z);
        return u.intl.format(u.t.xQXnkJ, {
          channelName: l
        })
      }
      case l.jj.USER_COMMUNICATION_DISABLED: {
        let e = null != (d = null == t || null == (r = t.metadata) ? true : r.durationSeconds) ? d : 0,
          n = (0, c.L9)(e);
        if (null == n) return null;
        return u.intl.format(u.t.AFmbfX, {
          duration: n
        })
      }
    }
  },
  m = e => {
    switch (e) {
      case l.jj.BLOCK_MESSAGE:
        return r.k$p;
      case l.jj.FLAG_TO_CHANNEL:
        return r.VL1;
      case l.jj.USER_COMMUNICATION_DISABLED:
        return r.YlB;
      case l.jj.QUARANTINE_USER:
        return r.ics
    }
  };

function g(e, t, n) {
  var i, o, a, s;
  return f(e) ? {
    headerText: null != (i = _(e)) ? i : "",
    descriptionText: null != (o = p(e, n)) ? o : "",
    helperText: null != (a = h(e, t)) ? a : null,
    icon: null != (s = m(e)) ? s : r.k$p,
    isEditable: d(e)
  } : null
}