/** Chunk was on web.js **/
/** chunk id: 100604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => h
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

function m(e, t) {
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
class h {
  getForwardInfo() {
    var e, t, n, u;
    let p = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk592125.Z,
      _ = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Chunk594174.default,
      h = arguments.length > 2 && true !== arguments[2] ? arguments[2] : Chunk699516.Z,
      g = arguments.length > 3 && true !== arguments[3] ? arguments[3] : Chunk496675.Z,
      E = arguments.length > 4 && true !== arguments[4] ? arguments[4] : Chunk430824.Z,
      b = arguments.length > 5 && true !== arguments[5] ? arguments[5] : Chunk356264.Z,
      {
        snapshotIndex: y,
        parentMessage: O,
        messageSnapshot: v
      } = this,
      S = (0, Chunk55935.Xf)(v.message.timestamp),
      I = p.getChannel(this.parentMessage.channel_id);
    if (null != I && I.guild_id === (null == (e = O.messageReference) ? true : module.guild_id)) {
      let e = p.getChannel(null == (n = O.messageReference) ? true : require.channel_id);
      if (null == module) {
        let e = E.getGuild(I.guild_id);
        return null == module ? {
          snapshotIndex: y
        } : {
          snapshotIndex: y,
          footerInfo: m(module, S)
        }
      }
      if (!g.can(module.accessPermissions, module)) return {
        snapshotIndex: y
      };
      let t = (0, Chunk933557.F6)(module, _, h, true);
      return {
        snapshotIndex: y,
        footerInfo: {
          originLabel: exports,
          timestampLabel: S,
          accessibilityLabel: Chunk388032.intl.formatToPlainString(Chunk388032.t["+l04BN"], {
            origin: exports,
            timestamp: S
          })
        }
      }
    }
    let T = null == (t = O.messageReference) ? true : exports.guild_id;
    if (null == T) return {
      snapshotIndex: y
    };
    let A = null != (u = E.getGuild(T)) ? Chunk768581 : b.getGuild(T);
    return null == A ? {
      snapshotIndex: y
    } : {
      snapshotIndex: y,
      footerInfo: m(A, S)
    }
  }
  constructor(e, t, n) {
    p(this, "parentMessage", true), p(this, "messageSnapshot", true), p(this, "snapshotIndex", true), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}