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

function v(e) {
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
let x = "DRAGGABLE_GUILD_CHANNEL";

function E(e, t) {
  var n, r;
  if (null == e || null == t) return null;
  if (e !== j.YYv) return f.A.getChannel(t);
  let l = m.Ay.getChannels(e),
    i = null != (n = null != (r = l[m.I6].find(e => e.channel.id === t)) ? r : l[m.vM].find(e => e.channel.id === t)) ? n : l[j.rbe.GUILD_CATEGORY].find(e => e.channel.id === t);
  return null == i ? true : i.channel
}

function C(e) {
  return (0, l.T)(x, {
    drop(e, t) {
      let n, l = y.A.getGuildId(),
        i = t.getItem(),
        o = (0, _.QO)(E(l, i.id), i.position, e.channel, e.position, i.channelList);
      if (null == o) return;
      let d = E(l, i.id);
      if (null == d) return;
      let p = g.A.getCategories(l),
        h = b.A.getGuild(l);
      if (null == h) return;
      let m = (0, _.Zj)(d, E(l, o.referenceId), o.parentId, p);
      if (0 !== m.length) {
        if (l === j.YYv) return void(0, u.S_)(m);
        if (m = m.filter(e => {
            let {
              id: t
            } = e, n = f.A.getChannel(t);
            if (null == n) returnfalse;
            let r = f.A.getChannel(n.parent_id);
            return n.type === j.rbe.GUILD_CATEGORY || null == r ? A.A.can(j.xBc.MANAGE_CHANNELS, h) : A.A.can(j.xBc.MANAGE_CHANNELS, r)
          }), d.parent_id !== o.parentId && m.find(e => {
            if (e.id !== d.id) returnfalse;
            let t = f.A.getChannel(e.parent_id);
            if (!(null != t && A.A.can(j.xBc.MANAGE_ROLES, d) && A.A.can(j.xBc.MANAGE_ROLES, t))) returntrue;
            let r = O.r(d, t),
              l = O.r(d, f.A.getChannel(d.parent_id));
            return (null != d.parent_id || r) && (!l || r) || (n = e), true
          }), null != n) {
          let e = f.A.getChannel(n.parent_id);
          null != e && (0, s.qfG)(t => {
            var i, s;
            return (0, r.jsx)(c.default, (i = v({}, t), s = s = {
              channel: d,
              category: e,
              onConfirm: () => {
                null != n && (n.lock_permissions = true, a.A.batchChannelUpdate(l, m))
              },
              onCancel: () => {
                null != n && a.A.batchChannelUpdate(l, m)
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(s)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
            }), i))
          })
        } else a.A.batchChannelUpdate(l, m)
      }
    },
    canDrop(e, t) {
      let n = t.getItem(),
        r = f.A.getChannel(n.id);
      if (null == r) returnfalse;
      let l = (0, _.QO)(f.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
      if (null == l) returnfalse;
      if (y.A.getGuildId() === j.YYv) returntrue;
      let i = b.A.getGuild(n.guildId);
      if (null == i) returnfalse;
      let s = f.A.getChannel(l.parentId),
        a = f.A.getChannel(r.parent_id),
        o = A.A.can(j.xBc.MANAGE_CHANNELS, i),
        c = null != a ? A.A.can(j.xBc.MANAGE_CHANNELS, a) : o,
        u = null != s ? A.A.can(j.xBc.MANAGE_CHANNELS, s) : o;
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
  })((0, i.I)(x, {
    canDrag(e) {
      let {
        channel: t
      } = e;
      if (y.A.getGuildId() === j.YYv) returntrue;
      let l = b.A.getGuild(t.getGuildId());
      if (null == l) returnfalse;
      if ((0, p.WW)(l.id) && A.A.can(j.xBc.MANAGE_CHANNELS, l)) return (0, d.A)() && (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("2467").then(n.bind(n, 354643));
        return t => (0, r.jsx)(e, v({}, t))
      }), false;
      if (t.type === j.rbe.GUILD_CATEGORY) return A.A.can(j.xBc.MANAGE_CHANNELS, l) && !(0, p.WW)(l.id);
      let i = f.A.getChannel(t.parent_id);
      return null != i && A.A.can(j.xBc.MANAGE_CHANNELS, i) || null == i && A.A.can(j.xBc.MANAGE_CHANNELS, l)
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
      } = e, s = y.A.getGuildId(), a = g.A.getCategories(s);
      return {
        isChannelDrag: true,
        id: t,
        position: i,
        parentId: n,
        type: l,
        channelList: (0, o.A)(a._categories, a, e => {
          let {
            channel: t
          } = e;
          return t.type === j.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length ? s === j.YYv || A.A.can(j.xBc.MANAGE_CHANNELS, t) && A.A.can(j.xBc.VIEW_CHANNEL, t) : !h.A.isCollapsed(t.parent_id)
        }),
        guildId: r
      }
    }
  }, e => ({
    connectChannelDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview()
  }))(e))
}