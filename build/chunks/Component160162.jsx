/** Chunk was on 84018 **/
/** chunk id: 160162, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk686956 = require("./686956.js"),
  Chunk956793 = require("./956793.js"),
  Chunk549711 = require("./549711.jsx"),
  Chunk463347 = require("./463347.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");
class h extends Chunk64700.Component {
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
    (0, c.nn)(t) && (0, c.ts)(n) ? (l.A.selectGuild(t), o.default.selectChannel({
      guildId: t,
      channelId: n,
      messageId: i
    })) : (0, d.bG)(u.BVt.ME)
  }
  render() {
    return null
  }
}
let p = () => (0, i.jsxs)(s.dO, {
  children: [(0, i.jsx)(a.A, {
    path: u.BVt.CHANNEL(c.pv.guildId(), c.pv.channelId({
      optional: true
    }), ":messageId?"),
    component: h
  }), (0, i.jsx)(a.A, {
    component: h
  })]
})