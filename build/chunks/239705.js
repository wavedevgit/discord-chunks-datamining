/** Chunk was on 65341 **/
/** chunk id: 239705, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  x: () => o
});
var Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk411335 = require("./411335.js"),
  Chunk200700 = require("./200700.js"),
  Chunk985018 = require("./985018.jsx");
let d = function(t) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.uh.KEYWORD;
  switch (t) {
    case s.AH.BLOCK_MESSAGE:
      switch (n) {
        case s.uh.MENTION_SPAM:
          return c.intl.string(c.t["8hdId3"]);
        case s.uh.ML_SPAM:
          return c.intl.string(c.t.tLQYs5);
        default:
          return c.intl.string(c.t.xAAoci)
      }
    case s.AH.FLAG_TO_CHANNEL:
      return c.intl.string(c.t.BHAXfa);
    case s.AH.USER_COMMUNICATION_DISABLED:
      return c.intl.string(c.t["bNK+gI"]);
    case s.AH.QUARANTINE_USER:
      return c.intl.string(c.t["/7nL5R"])
  }
};

function o(t, n, e) {
  var o, E, N, h;
  return (t => {
    switch (t) {
      case s.AH.BLOCK_MESSAGE:
      case s.AH.FLAG_TO_CHANNEL:
      case s.AH.USER_COMMUNICATION_DISABLED:
      case s.AH.QUARANTINE_USER:
        returntrue;
      default:
        returnfalse
    }
  })(t) ? {
    headerText: null != (o = (t => {
      switch (t) {
        case s.AH.BLOCK_MESSAGE:
          return c.intl.string(c.t.d1ab8n);
        case s.AH.FLAG_TO_CHANNEL:
          return c.intl.string(c.t["Y+VmvU"]);
        case s.AH.USER_COMMUNICATION_DISABLED:
          return c.intl.string(c.t.Xz2njA);
        case s.AH.QUARANTINE_USER:
          return c.intl.string(c.t.NPO8ee)
      }
    })(t)) ? o : "",
    descriptionText: null != (E = d(t, e)) ? E : "",
    helperText: null != (N = ((t, n) => {
      var e, l, d;
      switch (t) {
        case s.AH.QUARANTINE_USER:
        case s.AH.BLOCK_MESSAGE:
          return null;
        case s.AH.FLAG_TO_CHANNEL: {
          let t = null == n || null == (e = n.metadata) ? true : e.channelId;
          if (null == t) return null;
          let l = r.A.getChannel(t);
          if (null == l) return null;
          let s = (0, i.m1)(l, u.default, a.A);
          return c.intl.format(c.t.xQXnkK, {
            channelName: s
          })
        }
        case s.AH.USER_COMMUNICATION_DISABLED: {
          let t = null != (l = null == n || null == (d = n.metadata) ? true : d.durationSeconds) ? l : 0,
            e = (0, A.getFriendlyDurationString)(t);
          if (null == e) return null;
          return c.intl.format(c.t.AFmbfS, {
            duration: e
          })
        }
      }
    })(t, n)) ? N : null,
    icon: null != (h = (t => {
      switch (t) {
        case s.AH.BLOCK_MESSAGE:
          return l.aXh;
        case s.AH.FLAG_TO_CHANNEL:
          return l.N$i;
        case s.AH.USER_COMMUNICATION_DISABLED:
          return l.gQi;
        case s.AH.QUARANTINE_USER:
          return l._mZ
      }
    })(t)) ? h : l.aXh,
    isEditable: t !== s.AH.QUARANTINE_USER
  } : null
}