/** Chunk was on 93375 **/
/** chunk id: 556012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => E
});
var Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk273504 = require("./273504.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx");
let f = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.fX.KEYWORD;
  switch (e) {
    case o.jj.BLOCK_MESSAGE:
      switch (t) {
        case o.fX.MENTION_SPAM:
          return c.intl.string(c.t["8hdId3"]);
        case o.fX.ML_SPAM:
          return c.intl.string(c.t.tLQYs5);
        default:
          return c.intl.string(c.t.xAAoci)
      }
    case o.jj.FLAG_TO_CHANNEL:
      return c.intl.string(c.t.BHAXfa);
    case o.jj.USER_COMMUNICATION_DISABLED:
      return c.intl.string(c.t["bNK+gI"]);
    case o.jj.QUARANTINE_USER:
      return c.intl.string(c.t["/7nL5R"])
  }
};

function E(e, t, n) {
  var E, g, S, O;
  return (e => {
    switch (e) {
      case o.jj.BLOCK_MESSAGE:
      case o.jj.FLAG_TO_CHANNEL:
      case o.jj.USER_COMMUNICATION_DISABLED:
      case o.jj.QUARANTINE_USER:
        returntrue;
      default:
        returnfalse
    }
  })(e) ? {
    headerText: null != (E = (e => {
      switch (e) {
        case o.jj.BLOCK_MESSAGE:
          return c.intl.string(c.t.d1ab8n);
        case o.jj.FLAG_TO_CHANNEL:
          return c.intl.string(c.t["Y+VmvU"]);
        case o.jj.USER_COMMUNICATION_DISABLED:
          return c.intl.string(c.t.Xz2njA);
        case o.jj.QUARANTINE_USER:
          return c.intl.string(c.t.NPO8ee)
      }
    })(e)) ? E : "",
    descriptionText: null != (g = f(e, n)) ? g : "",
    helperText: null != (S = ((e, t) => {
      var n, r, f;
      switch (e) {
        case o.jj.QUARANTINE_USER:
        case o.jj.BLOCK_MESSAGE:
          return null;
        case o.jj.FLAG_TO_CHANNEL: {
          let e = null == t || null == (n = t.metadata) ? true : n.channelId;
          if (null == e) return null;
          let r = i.Z.getChannel(e);
          if (null == r) return null;
          let o = (0, l.F6)(r, u.default, a.Z);
          return c.intl.format(c.t.xQXnkK, {
            channelName: o
          })
        }
        case o.jj.USER_COMMUNICATION_DISABLED: {
          let e = null != (f = null == t || null == (r = t.metadata) ? true : r.durationSeconds) ? f : 0,
            n = (0, s.getFriendlyDurationString)(e);
          if (null == n) return null;
          return c.intl.format(c.t.AFmbfS, {
            duration: n
          })
        }
      }
    })(e, t)) ? S : null,
    icon: null != (O = (e => {
      switch (e) {
        case o.jj.BLOCK_MESSAGE:
          return r.k$p;
        case o.jj.FLAG_TO_CHANNEL:
          return r.VL1;
        case o.jj.USER_COMMUNICATION_DISABLED:
          return r.YlB;
        case o.jj.QUARANTINE_USER:
          return r.ics
      }
    })(e)) ? O : r.k$p,
    isEditable: e !== o.jj.QUARANTINE_USER
  } : null
}