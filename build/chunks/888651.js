/** Chunk was on web.js **/
/** chunk id: 888651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => _,
  Q: () => f
});
var Chunk617735 = require("./617735.js"),
  Chunk230826 = require("./230826.js"),
  Chunk749210 = require("./749210.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js");
let d = "DRAGGABLE_USER";

function f(e) {
  return (0, r.G)(d, {
    canDrop(e) {
      var t, n;
      let {
        channel: r
      } = e, i = r.getGuildId(), o = null != (n = null == (t = a.Z.getGuild(i)) ? true : t.maxVideoChannelUsers) ? n : false, d = c.ZP.countVoiceStatesForChannel(r.id), f = null != i && l.Z.hasVideo(r.id) && o > 0 && d >= o + 1;
      return s.Z.can(u.Plq.MOVE_MEMBERS, r) && s.Z.can(u.Plq.CONNECT, r) && !f
    },
    drop(e, t) {
      let {
        channel: n
      } = e, r = l.Z.getVoiceStateForUser(t.getItem().user.id);
      (null == r ? true : r.channelId) !== n.id && o.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
    }
  }, (e, t) => ({
    connectUserDropTarget: e.dropTarget(),
    isUserOver: t.isOver() && t.canDrop()
  }))(e)
}

function _(e) {
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