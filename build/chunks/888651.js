/** Chunk was on 81985 **/
/** chunk id: 888651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => f,
  Q: () => p
});
var Chunk827810 = require("./827810.js"),
  Chunk398563 = require("./398563.js"),
  Chunk749210 = require("./749210.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js");
let d = "DRAGGABLE_USER";

function p(e) {
  return (0, r.G)(d, {
    canDrop(e) {
      var t, n;
      let {
        channel: r
      } = e, i = r.getGuildId(), l = null != (n = null == (t = a.Z.getGuild(i)) ? true : t.maxVideoChannelUsers) ? n : false, d = c.ZP.countVoiceStatesForChannel(r.id), p = null != i && s.Z.hasVideo(r.id) && l > 0 && d >= l + 1;
      return o.Z.can(u.Plq.MOVE_MEMBERS, r) && o.Z.can(u.Plq.CONNECT, r) && !p
    },
    drop(e, t) {
      let {
        channel: n
      } = e, r = s.Z.getVoiceStateForUser(t.getItem().user.id);
      (null == r ? true : r.channelId) !== n.id && l.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
    }
  }, (e, t) => ({
    connectUserDropTarget: e.dropTarget(),
    isUserOver: t.isOver() && t.canDrop()
  }))(e)
}

function f(e) {
  return (0, i.E)(d, {
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