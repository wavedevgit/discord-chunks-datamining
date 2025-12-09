/** Chunk was on 73755 **/
/** chunk id: 888651, original params: e,t,n (module,exports,require) **/
if (require.d(exports, {
    $: () => h,
    Q: () => p
  }), 12633 == require.j) var Chunk692402 = require("./692402.js");
var Chunk275833 = require("./275833.js"),
  Chunk749210 = require("./749210.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js");
let d = "DRAGGABLE_USER";

function p(e) {
  return (0, i.G)(d, {
    canDrop(e) {
      var t, n;
      let {
        channel: i
      } = e, r = i.getGuildId(), l = null != (n = null == (t = a.Z.getGuild(r)) ? true : t.maxVideoChannelUsers) ? n : false, d = c.ZP.countVoiceStatesForChannel(i.id), p = null != r && s.Z.hasVideo(i.id) && l > 0 && d >= l + 1;
      return o.Z.can(u.Plq.MOVE_MEMBERS, i) && o.Z.can(u.Plq.CONNECT, i) && !p
    },
    drop(e, t) {
      let {
        channel: n
      } = e, i = s.Z.getVoiceStateForUser(t.getItem().user.id);
      (null == i ? true : i.channelId) !== n.id && l.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
    }
  }, (e, t) => ({
    connectUserDropTarget: e.dropTarget(),
    isUserOver: t.isOver() && t.canDrop()
  }))(e)
}

function h(e) {
  return (0, r.E)(d, {
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