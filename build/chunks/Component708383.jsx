/** Chunk was on 63141 **/
/** chunk id: 708383, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk749210 = require("./749210.js"),
  Chunk287734 = require("./287734.js"),
  Chunk765717 = require("./765717.jsx"),
  Chunk893607 = require("./893607.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");
class h extends Chunk473749.Component {
  componentDidUpdate(e) {
    let {
      location: t
    } = this.props;
    t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel()
  }
  checkGuildAndChannel() {
    let {
      match: e
    } = this.props;
    if (null == e) return;
    let {
      guildId: t,
      channelId: n,
      messageId: i
    } = function(e) {
      let {
        guildId: t,
        channelId: n,
        messageId: i
      } = e.params;
      return {
        guildId: null != t && "" !== t ? t : u.ME,
        channelId: n,
        messageId: i
      }
    }(e);
    (0, c.Ss)(t) && (0, c.cq)(n) ? (o.Z.selectGuild(t), l.default.selectChannel({
      guildId: t,
      channelId: n,
      messageId: i
    })) : (0, d.dL)(u.Z5c.ME)
  }
  render() {
    return null
  }
}
let f = () => (0, i.jsxs)(s.rs, {
  children: [(0, i.jsx)(a.Z, {
    path: u.Z5c.CHANNEL(c.Hw.guildId(), c.Hw.channelId({
      optional: true
    }), ":messageId?"),
    component: h
  }), (0, i.jsx)(a.Z, {
    component: h
  })]
})