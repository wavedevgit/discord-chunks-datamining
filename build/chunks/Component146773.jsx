/** Chunk was on 67000 **/
/** chunk id: 146773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692402 = require("./692402.js"),
  Chunk275833 = require("./275833.js"),
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

function x(e) {
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
  if (e !== C.I_8) return p.Z.getChannel(t);
  let i = b.ZP.getChannels(e),
    l = null != (r = null != (n = i[b.sH].find(e => e.channel.id === t)) ? n : i[b.Zb].find(e => e.channel.id === t)) ? r : i[C.d4z.GUILD_CATEGORY].find(e => e.channel.id === t);
  return null == l ? true : l.channel
}

function _(e) {
  return (0, i.G)(E, {
    drop(e, t) {
      let n, i = O.Z.getGuildId(),
        l = t.getItem(),
        s = (0, v.if)(S(i, l.id), l.position, e.channel, e.position, l.channelList);
      if (null == s) return;
      let d = S(i, l.id);
      if (null == d) return;
      let f = g.Z.getCategories(i),
        h = m.Z.getGuild(i);
      if (null == h) return;
      let b = (0, v.Dn)(d, S(i, s.referenceId), s.parentId, f);
      if (0 !== b.length) {
        if (i === C.I_8) return void(0, u.s3)(b);
        if (b = b.filter(e => {
            let {
              id: t
            } = e, n = p.Z.getChannel(t);
            if (null == n) returnfalse;
            let r = p.Z.getChannel(n.parent_id);
            return n.type === C.d4z.GUILD_CATEGORY || null == r ? y.Z.can(C.Plq.MANAGE_CHANNELS, h) : y.Z.can(C.Plq.MANAGE_CHANNELS, r)
          }), d.parent_id !== s.parentId && b.find(e => {
            if (e.id !== d.id) returnfalse;
            let t = p.Z.getChannel(e.parent_id);
            if (!(null != t && y.Z.can(C.Plq.MANAGE_ROLES, d) && y.Z.can(C.Plq.MANAGE_ROLES, t))) returntrue;
            let r = j.o4(d, t),
              i = j.o4(d, p.Z.getChannel(d.parent_id));
            return (null != d.parent_id || r) && (!i || r) || (n = e), true
          }), null != n) {
          let e = p.Z.getChannel(n.parent_id);
          null != e && (0, a.h7j)(t => {
            var l, a;
            return (0, r.jsx)(c.default, (l = x({}, t), a = a = {
              channel: d,
              category: e,
              onConfirm: () => {
                null != n && (n.lock_permissions = true, o.Z.batchChannelUpdate(i, b))
              },
              onCancel: () => {
                null != n && o.Z.batchChannelUpdate(i, b)
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
        } else o.Z.batchChannelUpdate(i, b)
      }
    },
    canDrop(e, t) {
      let n = t.getItem(),
        r = p.Z.getChannel(n.id);
      if (null == r) returnfalse;
      let i = (0, v.if)(p.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
      if (null == i) returnfalse;
      if (O.Z.getGuildId() === C.I_8) returntrue;
      let l = m.Z.getGuild(n.guildId);
      if (null == l) returnfalse;
      let a = p.Z.getChannel(i.parentId),
        o = p.Z.getChannel(r.parent_id),
        s = y.Z.can(C.Plq.MANAGE_CHANNELS, l),
        c = null != o ? y.Z.can(C.Plq.MANAGE_CHANNELS, o) : s,
        u = null != a ? y.Z.can(C.Plq.MANAGE_CHANNELS, a) : s;
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
      if (O.Z.getGuildId() === C.I_8) returntrue;
      let i = m.Z.getGuild(t.getGuildId());
      if (null == i) returnfalse;
      if ((0, f.r1)(i.id) && y.Z.can(C.Plq.MANAGE_CHANNELS, i)) return (0, d.N)() && (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("22016").then(n.bind(n, 391312));
        return t => (0, r.jsx)(e, x({}, t))
      }), false;
      if (t.type === C.d4z.GUILD_CATEGORY) return y.Z.can(C.Plq.MANAGE_CHANNELS, i) && !(0, f.r1)(i.id);
      let l = p.Z.getChannel(t.parent_id);
      return null != l && y.Z.can(C.Plq.MANAGE_CHANNELS, l) || null == l && y.Z.can(C.Plq.MANAGE_CHANNELS, i)
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
      } = e, a = O.Z.getGuildId(), o = g.Z.getCategories(a);
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
          return t.type === C.d4z.GUILD_CATEGORY && null != o[t.id] && 0 === o[t.id].length ? a === C.I_8 || y.Z.can(C.Plq.MANAGE_CHANNELS, t) && y.Z.can(C.Plq.VIEW_CHANNEL, t) : !h.Z.isCollapsed(t.parent_id)
        }),
        guildId: r
      }
    }
  }, e => ({
    connectChannelDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview()
  }))(e))
}