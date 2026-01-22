/** Chunk was on web.js **/
/** chunk id: 862804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => g
});
var Chunk47167 = require("./47167.js"),
  Chunk958340 = require("./958340.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk405269 = require("./405269.js");
require("./427930.js");
var Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 16;

function h(e, t) {
  return {
    originLabel: e.name,
    originIconUrl: u.Ay.getGuildIconURL({
      id: e.id,
      size: _,
      icon: e.icon,
      canAnimate: false
    }),
    timestampLabel: t,
    accessibilityLabel: f.intl.formatToPlainString(f.t["+l04BN"], {
      origin: e.name,
      timestamp: t
    })
  }
}

function m(e, t) {
  return {
    originLabel: e,
    timestampLabel: t,
    accessibilityLabel: f.intl.formatToPlainString(f.t["+l04BN"], {
      origin: e,
      timestamp: t
    })
  }
}
class g {
  getForwardInfo() {
    var e, t, n, u;
    let f = arguments.length > 0 && true !== arguments[0] ? arguments[0] : a.A,
      p = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.default,
      _ = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.A,
      g = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.A,
      E = arguments.length > 4 && true !== arguments[4] ? arguments[4] : s.A,
      b = arguments.length > 5 && true !== arguments[5] ? arguments[5] : i.A,
      {
        snapshotIndex: y,
        parentMessage: O,
        messageSnapshot: A
      } = this,
      v = (0, d.Fe)(A.message.timestamp),
      S = f.getChannel(this.parentMessage.channel_id);
    if (null != S && S.guild_id === (null == (t = O.messageReference) ? true : t.guild_id)) {
      let e = f.getChannel(null == (u = O.messageReference) ? true : u.channel_id);
      if (null == e) {
        let e = E.getGuild(S.guild_id);
        return null == e ? {
          snapshotIndex: y
        } : {
          snapshotIndex: y,
          footerInfo: h(e, v)
        }
      }
      return g.can(e.accessPermissions, e) ? {
        snapshotIndex: y,
        footerInfo: m((0, r.m1)(e, p, _, true), v)
      } : {
        snapshotIndex: y
      }
    }
    let I = null == (n = O.messageReference) ? true : n.guild_id;
    if (null == I) return {
      snapshotIndex: y
    };
    let T = null != (e = E.getGuild(I)) ? e : b.getGuild(I);
    return null == T ? {
      snapshotIndex: y
    } : {
      snapshotIndex: y,
      footerInfo: h(T, v)
    }
  }
  constructor(e, t, n) {
    p(this, "parentMessage", true), p(this, "messageSnapshot", true), p(this, "snapshotIndex", true), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}