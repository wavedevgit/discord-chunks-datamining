/** Chunk was on 48799 **/
n.d(t, {
  Z: () => p
}), n(301563);
var i = n(200651),
  r = n(192379),
  o = n(512969),
  s = n(749210),
  l = n(287734),
  a = n(765717),
  c = n(893607),
  d = n(703656),
  u = n(981631);
class h extends r.Component {
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
    (0, c.Ss)(t) && (0, c.cq)(n) ? (s.Z.selectGuild(t), l.default.selectChannel({
      guildId: t,
      channelId: n,
      messageId: i
    })) : (0, d.dL)(u.Z5c.ME)
  }
  render() {
    return null
  }
}
let p = () => (0, i.jsxs)(o.rs, {
  children: [(0, i.jsx)(a.Z, {
    path: u.Z5c.CHANNEL(c.Hw.guildId(), c.Hw.channelId({
      optional: !0
    }), ":messageId?"),
    component: h
  }), (0, i.jsx)(a.Z, {
    component: h
  })]
})