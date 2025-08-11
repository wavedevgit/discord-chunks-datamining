/** Chunk was on 34779 **/
/** chunk id: 146773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk617735 = require("./617735.js"),
  Chunk230826 = require("./230826.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk170509 = require("./170509.js"),
  Chunk740504 = require("./740504.js"),
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

function j(e) {
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
  if (e !== v.I_8) return f.Z.getChannel(t);
  let i = m.ZP.getChannels(e),
    l = null != (r = null != (n = i[m.sH].find(e => e.channel.id === t)) ? n : i[m.Zb].find(e => e.channel.id === t)) ? r : i[v.d4z.GUILD_CATEGORY].find(e => e.channel.id === t);
  return null == l ? true : l.channel
}

function x(e) {
  return (0, i.G)(E, {
    drop(e, t) {
      let n, i = _.Z.getGuildId(),
        l = t.getItem(),
        c = (0, y.if)(S(i, l.id), l.position, e.channel, e.position, l.channelList);
      if (null == c) return;
      let d = S(i, l.id);
      if (null == d) return;
      let h = g.Z.getCategories(i),
        p = b.Z.getGuild(i);
      if (null == p) return;
      let m = (0, y.Dn)(d, S(i, c.referenceId), c.parentId, h);
      if (0 !== m.length) {
        if (i === v.I_8) return void(0, u.s3)(m);
        if (m = m.filter(e => {
            let {
              id: t
            } = e, n = f.Z.getChannel(t);
            if (null == n) returnfalse;
            let r = f.Z.getChannel(n.parent_id);
            return n.type === v.d4z.GUILD_CATEGORY || null == r ? O.Z.can(v.Plq.MANAGE_CHANNELS, p) : O.Z.can(v.Plq.MANAGE_CHANNELS, r)
          }), d.parent_id !== c.parentId && m.find(e => {
            if (e.id !== d.id) returnfalse;
            let t = f.Z.getChannel(e.parent_id);
            if (!(null != t && O.Z.can(v.Plq.MANAGE_ROLES, d) && O.Z.can(v.Plq.MANAGE_ROLES, t))) returntrue;
            let r = C.o4(d, t),
              i = C.o4(d, f.Z.getChannel(d.parent_id));
            return (null != d.parent_id || r) && (!i || r) || (n = e), true
          }), null != n) {
          let e = f.Z.getChannel(n.parent_id);
          null != e && (0, o.h7j)(t => {
            var l, o;
            return <a.default{...l = j({}, t), o = o = {
              channel: d,
              category: e,
              onConfirm: () => {
                null != n && (n.lock_permissions = true, s.Z.batchChannelUpdate(i, m))
              },
              onCancel: () => {
                null != n && s.Z.batchChannelUpdate(i, m)
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(o)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
            }), l} />
          })
        } else s.Z.batchChannelUpdate(i, m)
      }
    },
    canDrop(e, t) {
      let n = t.getItem(),
        r = f.Z.getChannel(n.id);
      if (null == r) returnfalse;
      let i = (0, y.if)(f.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
      if (null == i) returnfalse;
      if (_.Z.getGuildId() === v.I_8) returntrue;
      let l = b.Z.getGuild(n.guildId);
      if (null == l) returnfalse;
      let o = f.Z.getChannel(i.parentId),
        s = f.Z.getChannel(r.parent_id),
        a = O.Z.can(v.Plq.MANAGE_CHANNELS, l),
        c = null != s ? O.Z.can(v.Plq.MANAGE_CHANNELS, s) : a,
        u = null != o ? O.Z.can(v.Plq.MANAGE_CHANNELS, o) : a;
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
      if (_.Z.getGuildId() === v.I_8) returntrue;
      let i = b.Z.getGuild(t.getGuildId());
      if (null == i) returnfalse;
      if ((0, h.r1)(i.id) && O.Z.can(v.Plq.MANAGE_CHANNELS, i)) return (0, d.N)() && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("82560").then(n.bind(n, 391312));
        return t => <e{...j({}, t)} />
      }), false;
      if (t.type === v.d4z.GUILD_CATEGORY) return O.Z.can(v.Plq.MANAGE_CHANNELS, i) && !(0, h.r1)(i.id);
      let l = f.Z.getChannel(t.parent_id);
      return null != l && O.Z.can(v.Plq.MANAGE_CHANNELS, l) || null == l && O.Z.can(v.Plq.MANAGE_CHANNELS, i)
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
      } = e, o = _.Z.getGuildId(), s = g.Z.getCategories(o);
      return {
        isChannelDrag: true,
        id: t,
        position: l,
        parentId: n,
        type: i,
        channelList: (0, c.Z)(s._categories, s, e => {
          let {
            channel: t
          } = e;
          return t.type === v.d4z.GUILD_CATEGORY && null != s[t.id] && 0 === s[t.id].length ? o === v.I_8 || O.Z.can(v.Plq.MANAGE_CHANNELS, t) && O.Z.can(v.Plq.VIEW_CHANNEL, t) : !p.Z.isCollapsed(t.parent_id)
        }),
        guildId: r
      }
    }
  }, e => ({
    connectChannelDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview()
  }))(e))
}