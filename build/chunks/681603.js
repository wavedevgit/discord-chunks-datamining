/** Chunk was on 63141 **/
/** chunk id: 681603, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk367907 = require("./367907.js"),
  Chunk731429 = require("./731429.js"),
  Chunk188471 = require("./188471.js"),
  Chunk318885 = require("./318885.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
class x extends Chunk473749.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isMemberPending: i,
      hasPreviewEnabled: r,
      postableChannelCount: s
    } = this.props;
    if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending)) {
      var u, h;
      (0, c.Q)(O.rMx.GUILD_VIEWED, (u = E({}, i ? {
        is_pending: i,
        preview_enabled: r
      } : {}), h = h = {
        postable_channels: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(h)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(h, e))
      }), u)), (0, a.a)(O.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })
    }
    if (null != n && n !== e.selectedChannel) {
      let e = (0, l.K)(d.Z.getChannel(n), true);
      (0, c.Q)(O.rMx.CHANNEL_OPENED, E({}, e, (0, o.$H)(n))), (0, a.a)(O.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
let S = Chunk442837.ZP.connectStores([Chunk914010.Z, Chunk944486.Z, Chunk430824.Z, Chunk594174.default, Chunk237997.default, Chunk984933.ZP, Chunk496675.Z, Chunk271383.ZP], () => {
  var e, t, n;
  let i = m.Z.getGuildId(),
    s = g.Z.getChannelId(i),
    o = f.Z.getGuild(i),
    l = b.default.getCurrentUser(),
    a = null != (t = u.ZP.getChannels(null == o ? true : o.id)[u.sH]) ? t : [],
    c = a.length > 0 ? a.filter(e => {
      let {
        channel: t
      } = e;
      return p.Z.can(r.$e(O.Plq.SEND_MESSAGES, O.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    d = null != l && null != i && null != (n = null == (e = h.ZP.getMember(i, l.id)) ? true : e.isPending) && n;
  return {
    selectedGuild: i,
    selectedChannel: s,
    locked: y.default.isLocked((0, v.getPID)()),
    hasPreviewEnabled: null == o ? true : o.features.has(O.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: d,
    postableChannelCount: c
  }
})(x)