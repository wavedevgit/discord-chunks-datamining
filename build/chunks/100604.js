/** Chunk was on web.js **/
/** chunk id: 100604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => g
});
var Chunk933557 = require("./933557.js"),
  Chunk356264 = require("./356264.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk55935 = require("./55935.js");
require("./978003.js");
var Chunk388032 = require("./388032.jsx");

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
    originIconUrl: u.ZP.getGuildIconURL({
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
    let f = arguments.length > 0 && true !== arguments[0] ? arguments[0] : a.Z,
      p = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.default,
      _ = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.Z,
      g = arguments.length > 3 && true !== arguments[3] ? arguments[3] : s.Z,
      E = arguments.length > 4 && true !== arguments[4] ? arguments[4] : o.Z,
      b = arguments.length > 5 && true !== arguments[5] ? arguments[5] : i.Z,
      {
        snapshotIndex: y,
        parentMessage: O,
        messageSnapshot: v
      } = this,
      S = (0, d.Xf)(v.message.timestamp),
      I = f.getChannel(this.parentMessage.channel_id);
    if (null != I && I.guild_id === (null == (e = O.messageReference) ? true : e.guild_id)) {
      let e = f.getChannel(null == (n = O.messageReference) ? true : n.channel_id);
      if (null == e) {
        let e = E.getGuild(I.guild_id);
        return null == e ? {
          snapshotIndex: y
        } : {
          snapshotIndex: y,
          footerInfo: h(e, S)
        }
      }
      return g.can(e.accessPermissions, e) ? {
        snapshotIndex: y,
        footerInfo: m((0, r.F6)(e, p, _, true), S)
      } : {
        snapshotIndex: y
      }
    }
    let T = null == (t = O.messageReference) ? true : t.guild_id;
    if (null == T) return {
      snapshotIndex: y
    };
    let C = null != (u = E.getGuild(T)) ? u : b.getGuild(T);
    return null == C ? {
      snapshotIndex: y
    } : {
      snapshotIndex: y,
      footerInfo: h(C, S)
    }
  }
  constructor(e, t, n) {
    p(this, "parentMessage", true), p(this, "messageSnapshot", true), p(this, "snapshotIndex", true), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}