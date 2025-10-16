/** Chunk was on 63141 **/
/** chunk id: 681603, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk647438 = require("./647438.js"),
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

function v(e) {
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
class E extends Chunk647438.Component {
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
      var u, p;
      (0, c.Q)(b.rMx.GUILD_VIEWED, (u = v({}, i ? {
        is_pending: i,
        preview_enabled: r
      } : {}), p = p = {
        postable_channels: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(p)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(p, e))
      }), u)), (0, a.a)(b.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })
    }
    if (null != n && n !== e.selectedChannel) {
      let e = (0, l.K)(d.Z.getChannel(n), true);
      (0, c.Q)(b.rMx.CHANNEL_OPENED, v({}, e, (0, o.$H)(n))), (0, a.a)(b.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
let x = Chunk442837.ZP.connectStores([Chunk914010.Z, Chunk944486.Z, Chunk430824.Z, Chunk594174.default, Chunk237997.default, Chunk984933.ZP, Chunk496675.Z, Chunk271383.ZP], () => {
  var e, t, n;
  let i = Chunk914010.Z.getGuildId(),
    s = Chunk944486.Z.getChannelId(Chunk647438),
    o = Chunk430824.Z.getGuild(Chunk647438),
    l = Chunk594174.default.getCurrentUser(),
    a = null != (t = Chunk984933.ZP.getChannels(null == Chunk367907 ? true : Chunk367907.id)[Chunk984933.sH]) ? exports : [],
    c = Chunk188471.length > 0 ? Chunk188471.filter(e => {
      let {
        channel: t
      } = e;
      return f.Z.can(r.$e(b.Plq.SEND_MESSAGES, b.Plq.VIEW_CHANNEL), t)
    }).length : 0,
    d = null != Chunk731429 && null != Chunk647438 && null != (n = null == (e = Chunk271383.ZP.getMember(Chunk647438, Chunk731429.id)) ? true : module.isPending) && require;
  return {
    selectedGuild: Chunk647438,
    selectedChannel: Chunk442837,
    locked: Chunk237997.default.isLocked((0, Chunk145597.getPID)()),
    hasPreviewEnabled: null == Chunk367907 ? true : Chunk367907.features.has(Chunk981631.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: Chunk592125,
    postableChannelCount: Chunk318885
  }
})(E)