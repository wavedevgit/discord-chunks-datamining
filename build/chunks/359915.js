/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(442837),
  i = n(570140),
  o = n(147913),
  a = n(883429),
  s = n(314897),
  l = n(592125);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends o.Z {
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    if (null != t.guild_id) {
      let e = l.Z.getAllThreadsForParent(t.id);
      e.length > 0 && r.ZP.Emitter.batched(() => {
        for (let t of e) i.Z.dispatch({
          type: "THREAD_DELETE",
          channel: t
        })
      })
    }
  }
  handleMessageCreate(e) {
    var t, n, r;
    let {
      channelId: i,
      message: o
    } = e, c = l.Z.getChannel(i);
    if ((null === (t = o.author) || void 0 === t ? void 0 : t.id) !== s.default.getId() || !(null == c ? void 0 : c.isActiveThread())) return;
    let u = new Date(null !== (r = null === (n = c.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== r ? r : 0).getTime();
    Date.now() - u < 5e3 && a.Z.resort(c.parent_id)
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate
    })
  }
}
let d = new u