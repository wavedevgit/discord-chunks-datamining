/** Chunk was on 97492 **/
/** chunk id: 296216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => f,
  J: () => p
});
var Chunk205369 = require("./205369.js"),
  Chunk22174 = require("./22174.js"),
  Chunk686956 = require("./686956.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk652215 = require("./652215.js");
let d = "DRAGGABLE_USER";

function f(e) {
  return (0, r.T)(d, {
    canDrop(e) {
      var t, n;
      let {
        channel: r
      } = e, l = r.getGuildId(), i = null != (t = null == (n = a.A.getGuild(l)) ? true : n.maxVideoChannelUsers) ? t : false, d = c.Ay.countVoiceStatesForChannel(r.id), f = null != l && o.A.hasVideo(r.id) && i > 0 && d >= i + 1;
      return s.A.can(u.xBc.MOVE_MEMBERS, r) && s.A.can(u.xBc.CONNECT, r) && !f
    },
    drop(e, t) {
      let {
        channel: n
      } = e, r = o.A.getVoiceStateForUser(t.getItem().user.id);
      (null == r ? true : r.channelId) !== n.id && i.A.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
    }
  }, (e, t) => ({
    connectUserDropTarget: e.dropTarget(),
    isUserOver: t.isOver() && t.canDrop()
  }))(e)
}

function p(e) {
  return (0, l.I)(d, {
    canDrag(e) {
      let {
        user: t,
        canDrag: n
      } = e;
      return null != n && n
    },
    beginDrag(e) {
      let {
        user: t
      } = e;
      return {
        user: t
      }
    }
  }, e => ({
    connectUserDragSource: e.dragSource()
  }))(e)
}