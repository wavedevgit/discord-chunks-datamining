/** Chunk was on 97492 **/
/** chunk id: 676002, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk205369 = require("./205369.js"),
  Chunk22174 = require("./22174.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk999903 = require("./999903.js"),
  Chunk544169 = require("./544169.jsx"),
  Chunk422258 = require("./422258.js"),
  Chunk770376 = require("./770376.js"),
  Chunk395504 = require("./395504.js"),
  Chunk924985 = require("./924985.js"),
  Chunk734057 = require("./734057.js"),
  Chunk769765 = require("./769765.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk343360 = require("./343360.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

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

function _(e, t) {
  var n, r;
  if (null == e || null == t) return null;
  if (e !== v.YYv) return h.A.getChannel(t);
  let l = g.Ay.getChannels(e),
    i = null != (n = null != (r = l[g.I6].find(e => e.channel.id === t)) ? r : l[g.vM].find(e => e.channel.id === t)) ? n : l[v.rbe.GUILD_CATEGORY].find(e => e.channel.id === t);
  return null == i ? true : i.channel
}

function C(e) {
  return (0, l.T)(E, {
    drop(e, t) {
      let n, l = y.A.getGuildId(),
        i = t.getItem(),
        o = (0, O.QO)(_(l, i.id), i.position, e.channel, e.position, i.channelList);
      if (null == o) return;
      let d = _(l, i.id);
      if (null == d) return;
      let f = b.A.getCategories(l),
        p = m.A.getGuild(l);
      if (null == p) return;
      let g = (0, O.Zj)(d, _(l, o.referenceId), o.parentId, f);
      if (0 !== g.length) {
        if (l === v.YYv) return void(0, u.S_)(g);
        if (g = g.filter(e => {
            let {
              id: t
            } = e, n = h.A.getChannel(t);
            if (null == n) returnfalse;
            let r = h.A.getChannel(n.parent_id);
            return n.type === v.rbe.GUILD_CATEGORY || null == r ? A.A.can(v.xBc.MANAGE_CHANNELS, p) : A.A.can(v.xBc.MANAGE_CHANNELS, r)
          }), d.parent_id !== o.parentId && g.find(e => {
            if (e.id !== d.id) returnfalse;
            let t = h.A.getChannel(e.parent_id);
            if (!(null != t && A.A.can(v.xBc.MANAGE_ROLES, d) && A.A.can(v.xBc.MANAGE_ROLES, t))) returntrue;
            let r = j.r(d, t),
              l = j.r(d, h.A.getChannel(d.parent_id));
            return (null != d.parent_id || r) && (!l || r) || (n = e), true
          }), null != n) {
          let e = h.A.getChannel(n.parent_id);
          null != e && (0, a.qfG)(t => {
            var i, a;
            return (0, r.jsx)(c.default, (i = x({}, t), a = a = {
              channel: d,
              category: e,
              onConfirm: () => {
                null != n && (n.lock_permissions = true, s.A.batchChannelUpdate(l, g))
              },
              onCancel: () => {
                null != n && s.A.batchChannelUpdate(l, g)
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
            }), i))
          })
        } else s.A.batchChannelUpdate(l, g)
      }
    },
    canDrop(e, t) {
      let n = t.getItem(),
        r = h.A.getChannel(n.id);
      if (null == r) returnfalse;
      let l = (0, O.QO)(h.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
      if (null == l) returnfalse;
      if (y.A.getGuildId() === v.YYv) returntrue;
      let i = m.A.getGuild(n.guildId);
      if (null == i) returnfalse;
      let a = h.A.getChannel(l.parentId),
        s = h.A.getChannel(r.parent_id),
        o = A.A.can(v.xBc.MANAGE_CHANNELS, i),
        c = null != s ? A.A.can(v.xBc.MANAGE_CHANNELS, s) : o,
        u = null != a ? A.A.can(v.xBc.MANAGE_CHANNELS, a) : o;
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
  })((0, i.I)(E, {
    canDrag(e) {
      let {
        channel: t
      } = e;
      if (y.A.getGuildId() === v.YYv) returntrue;
      let l = m.A.getGuild(t.getGuildId());
      if (null == l) returnfalse;
      if ((0, f.WW)(l.id) && A.A.can(v.xBc.MANAGE_CHANNELS, l)) return (0, d.A)() && (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("2467").then(n.bind(n, 354643));
        return t => (0, r.jsx)(e, x({}, t))
      }), false;
      if (t.type === v.rbe.GUILD_CATEGORY) return A.A.can(v.xBc.MANAGE_CHANNELS, l) && !(0, f.WW)(l.id);
      let i = h.A.getChannel(t.parent_id);
      return null != i && A.A.can(v.xBc.MANAGE_CHANNELS, i) || null == i && A.A.can(v.xBc.MANAGE_CHANNELS, l)
    },
    beginDrag(e) {
      let {
        channel: {
          id: t,
          parent_id: n,
          guild_id: r,
          type: l
        },
        position: i
      } = e, a = y.A.getGuildId(), s = b.A.getCategories(a);
      return {
        isChannelDrag: true,
        id: t,
        position: i,
        parentId: n,
        type: l,
        channelList: (0, o.A)(s._categories, s, e => {
          let {
            channel: t
          } = e;
          return t.type === v.rbe.GUILD_CATEGORY && null != s[t.id] && 0 === s[t.id].length ? a === v.YYv || A.A.can(v.xBc.MANAGE_CHANNELS, t) && A.A.can(v.xBc.VIEW_CHANNEL, t) : !p.A.isCollapsed(t.parent_id)
        }),
        guildId: r
      }
    }
  }, e => ({
    connectChannelDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview()
  }))(e))
}