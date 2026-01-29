/** Chunk was on 84018 **/
/** chunk id: 223251, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk58149 = require("./58149.js"),
  Chunk332456 = require("./332456.js"),
  Chunk237774 = require("./237774.js"),
  Chunk815706 = require("./815706.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk256415 = require("./256415.js"),
  Chunk9302 = require("./9302.js"),
  Chunk652215 = require("./652215.js");

function O(e) {
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
class v extends Chunk64700.Component {
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
      (0, c.z)(A.HAw.GUILD_VIEWED, (u = O({}, i ? {
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
      }), u)), (0, a.k)(A.HAw.GUILD_VIEWED_CLICKSTREAM, {
        guildId: t
      })
    }
    if (null != n && n !== e.selectedChannel) {
      let e = (0, o.C)(d.A.getChannel(n), true);
      (0, c.z)(A.HAw.CHANNEL_OPENED, O({}, e, (0, l.qL)(n))), (0, a.k)(A.HAw.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: n
      })
    }
  }
  render() {
    return null
  }
}
let E = Chunk311907.Ay.connectStores([Chunk967198.A, Chunk309010.A, Chunk71393.A, Chunk287809.default, Chunk256415.default, Chunk808728.Ay, Chunk576705.A, Chunk696451.Ay], () => {
  var e, t, n;
  let i = y.A.getGuildId(),
    s = g.A.getChannelId(i),
    l = h.A.getGuild(i),
    o = m.default.getCurrentUser(),
    a = null != (e = u.Ay.getChannels(null == l ? true : l.id)[u.I6]) ? e : [],
    c = a.length > 0 ? a.filter(e => {
      let {
        channel: t
      } = e;
      return f.A.can(r.kg(A.xBc.SEND_MESSAGES, A.xBc.VIEW_CHANNEL), t)
    }).length : 0,
    d = null != o && null != i && null != (t = null == (n = p.Ay.getMember(i, o.id)) ? true : n.isPending) && t;
  return {
    selectedGuild: i,
    selectedChannel: s,
    locked: _.default.isLocked((0, b.getPID)()),
    hasPreviewEnabled: null == l ? true : l.features.has(A.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: d,
    postableChannelCount: c
  }
})(v)