/** Chunk was on 82124 **/
/** chunk id: 146773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk827810 = require("./827810.js"),
  Chunk398563 = require("./398563.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk740504 = require("./740504.js"),
  Chunk901492 = require("./901492.jsx"),
  Chunk117984 = require("./117984.js"),
  Chunk437152 = require("./437152.js"),
  Chunk398758 = require("./398758.js"),
  Chunk680089 = require("./680089.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk281029 = require("./281029.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let E = "DRAGGABLE_GUILD_CHANNEL";

function S(e, t) {
  var n, r;
  if (null == e || null == t) return null;
  if (e !== x.I_8) return h.Z.getChannel(t);
  let i = m.ZP.getChannels(e),
    l = null != (r = null != (n = i[m.sH].find(e => e.channel.id === t)) ? n : i[m.Zb].find(e => e.channel.id === t)) ? r : i[x.d4z.GUILD_CATEGORY].find(e => e.channel.id === t);
  return null == l ? true : l.channel
}

function _(e) {
  return (0, i.G)(E, {
    drop(e, t) {
      let n, i = v.Z.getGuildId(),
        l = t.getItem(),
        s = (0, O.if)(S(i, l.id), l.position, e.channel, e.position, l.channelList);
      if (null == s) return;
      let d = S(i, l.id);
      if (null == d) return;
      let p = g.Z.getCategories(i),
        f = b.Z.getGuild(i);
      if (null == f) return;
      let m = (0, O.Dn)(d, S(i, s.referenceId), s.parentId, p);
      if (0 !== m.length) {
        if (i === x.I_8) return void(0, u.s3)(m);
        if (m = m.filter(e => {
            let {
              id: t
            } = e, n = h.Z.getChannel(t);
            if (null == n) returnfalse;
            let r = h.Z.getChannel(n.parent_id);
            return n.type === x.d4z.GUILD_CATEGORY || null == r ? y.Z.can(x.Plq.MANAGE_CHANNELS, f) : y.Z.can(x.Plq.MANAGE_CHANNELS, r)
          }), d.parent_id !== s.parentId && m.find(e => {
            if (e.id !== d.id) returnfalse;
            let t = h.Z.getChannel(e.parent_id);
            if (!(null != t && y.Z.can(x.Plq.MANAGE_ROLES, d) && y.Z.can(x.Plq.MANAGE_ROLES, t))) returntrue;
            let r = j.o4(d, t),
              i = j.o4(d, h.Z.getChannel(d.parent_id));
            return (null != d.parent_id || r) && (!i || r) || (n = e), true
          }), null != n) {
          let e = h.Z.getChannel(n.parent_id);
          null != e && (0, a.h7j)(t => {
            var l, a;
            return (0, r.jsx)(c.default, (l = C({}, t), a = a = {
              channel: d,
              category: e,
              onConfirm: () => {
                null != n && (n.lock_permissions = true, o.Z.batchChannelUpdate(i, m))
              },
              onCancel: () => {
                null != n && o.Z.batchChannelUpdate(i, m)
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
            }), l))
          })
        } else o.Z.batchChannelUpdate(i, m)
      }
    },
    canDrop(e, t) {
      let n = t.getItem(),
        r = h.Z.getChannel(n.id);
      if (null == r) returnfalse;
      let i = (0, O.if)(h.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
      if (null == i) returnfalse;
      if (v.Z.getGuildId() === x.I_8) returntrue;
      let l = b.Z.getGuild(n.guildId);
      if (null == l) returnfalse;
      let a = h.Z.getChannel(i.parentId),
        o = h.Z.getChannel(r.parent_id),
        s = y.Z.can(x.Plq.MANAGE_CHANNELS, l),
        c = null != o ? y.Z.can(x.Plq.MANAGE_CHANNELS, o) : s,
        u = null != a ? y.Z.can(x.Plq.MANAGE_CHANNELS, a) : s;
      return c && u
    }
  }, (e, t) => {
    let n = t.getItem();
    return null == n || null == n.isChannelDrag ? {
      connectChannelDropTarget: e.dropTarget(),
      sorting: false,
      sortingType: null,
      sortingPosition: null,
      sortingParent: null
    } : {
      connectChannelDropTarget: e.dropTarget(),
      sorting: true,
      sortingType: n.type,
      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
    }
  })((0, l.E)(E, {
    canDrag(e) {
      let {
        channel: t
      } = e;
      if (v.Z.getGuildId() === x.I_8) returntrue;
      let i = b.Z.getGuild(t.getGuildId());
      if (null == i) returnfalse;
      if ((0, p.r1)(i.id) && y.Z.can(x.Plq.MANAGE_CHANNELS, i)) return (0, d.N)() && (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("22016").then(n.bind(n, 391312));
        return t => (0, r.jsx)(e, C({}, t))
      }), false;
      if (t.type === x.d4z.GUILD_CATEGORY) return y.Z.can(x.Plq.MANAGE_CHANNELS, i) && !(0, p.r1)(i.id);
      let l = h.Z.getChannel(t.parent_id);
      return null != l && y.Z.can(x.Plq.MANAGE_CHANNELS, l) || null == l && y.Z.can(x.Plq.MANAGE_CHANNELS, i)
    },
    beginDrag(e) {
      let {
        channel: {
          id: t,
          parent_id: n,
          guild_id: r,
          type: i
        },
        position: l
      } = e, a = v.Z.getGuildId(), o = g.Z.getCategories(a);
      return {
        isChannelDrag: true,
        id: t,
        position: l,
        parentId: n,
        type: i,
        channelList: (0, s.Z)(o._categories, o, e => {
          let {
            channel: t
          } = e;
          return t.type === x.d4z.GUILD_CATEGORY && null != o[t.id] && 0 === o[t.id].length ? a === x.I_8 || y.Z.can(x.Plq.MANAGE_CHANNELS, t) && y.Z.can(x.Plq.VIEW_CHANNEL, t) : !f.Z.isCollapsed(t.parent_id)
        }),
        guildId: r
      }
    }
  }, e => ({
    connectChannelDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview()
  }))(e))
}