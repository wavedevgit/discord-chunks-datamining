/** Chunk was on 9753 **/
/** chunk id: 862804, original params: e,t,n (module,exports,require) **/
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e, t) {
  return {
    originLabel: e.name,
    originIconUrl: u.Ay.getGuildIconURL({
      id: e.id,
      size: 16,
      icon: e.icon,
      canAnimate: false
    }),
    timestampLabel: t,
    accessibilityLabel: p.intl.formatToPlainString(p.t["+l04BN"], {
      origin: e.name,
      timestamp: t
    })
  }
}
class g {
  getForwardInfo() {
    var e, t, n, u, m;
    let g = arguments.length > 0 && true !== arguments[0] ? arguments[0] : l.A,
      _ = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.default,
      h = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.A,
      b = arguments.length > 3 && true !== arguments[3] ? arguments[3] : s.A,
      y = arguments.length > 4 && true !== arguments[4] ? arguments[4] : a.A,
      A = arguments.length > 5 && true !== arguments[5] ? arguments[5] : i.A,
      {
        snapshotIndex: v,
        parentMessage: O,
        messageSnapshot: x
      } = this,
      E = (0, d.Fe)(x.message.timestamp),
      j = g.getChannel(this.parentMessage.channel_id);
    if (null != j && j.guild_id === (null == (t = O.messageReference) ? true : t.guild_id)) {
      let e = g.getChannel(null == (u = O.messageReference) ? true : u.channel_id);
      if (null == e) {
        let e = y.getGuild(j.guild_id);
        return null == e ? {
          snapshotIndex: v
        } : {
          snapshotIndex: v,
          footerInfo: f(e, E)
        }
      }
      return b.can(e.accessPermissions, e) ? {
        snapshotIndex: v,
        footerInfo: {
          originLabel: m = (0, r.m1)(e, _, h, true),
          timestampLabel: E,
          accessibilityLabel: p.intl.formatToPlainString(p.t["+l04BN"], {
            origin: m,
            timestamp: E
          })
        }
      } : {
        snapshotIndex: v
      }
    }
    let C = null == (n = O.messageReference) ? true : n.guild_id;
    if (null == C) return {
      snapshotIndex: v
    };
    let I = null != (e = y.getGuild(C)) ? e : A.getGuild(C);
    return null == I ? {
      snapshotIndex: v
    } : {
      snapshotIndex: v,
      footerInfo: f(I, E)
    }
  }
  constructor(e, t, n) {
    m(this, "parentMessage", true), m(this, "messageSnapshot", true), m(this, "snapshotIndex", true), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
  }
}