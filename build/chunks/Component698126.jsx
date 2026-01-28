/** Chunk was on 78528 **/
/** chunk id: 698126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk676002 = require("./676002.jsx"),
  Chunk963027 = require("./963027.js"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk557534 = require("./557534.jsx"),
  Chunk166444 = require("./166444.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk728444 = require("./728444.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  let n = t.getGuildId();
  if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
  o.A.preload(n, t.id)
}
class x extends Chunk557534.Ay {
  render() {
    let {
      channel: e,
      selected: t,
      connectChannelDropTarget: n,
      connectChannelDragSource: l,
      connectDragPreview: i,
      canReorderChannel: a
    } = this.props, o = (0, r.jsx)("li", {
      className: s()(this.getClassName(), {
        [_.r9]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: (0, r.jsxs)(b.Ay, {
        className: _.Ki,
        channel: e,
        selected: t,
        onClick: this.handleClick,
        onMouseDown: v,
        onContextMenu: this.handleContextMenu,
        connectDragPreview: a ? i : null,
        "aria-label": (0, d.Ay)({
          channel: e
        }),
        resolvedUnreadSetting: y.e.ONLY_MENTIONS,
        children: [this.renderInviteButton(), this.renderEditButton()]
      })
    });
    return a ? n(l(o)) : o
  }
  constructor(...e) {
    super(...e), O(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = f.A.getGuild(t.getGuildId());
      null != l && (0, c.L3)(e, async () => {
        let {
          default: e
        } = await n.e("15669").then(n.bind(n, 313140));
        return n => {
          var i, s;
          return (0, r.jsx)(e, (i = j({}, n), s = s = {
            channel: t,
            guild: l
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
        }
      })
    }), O(this, "handleClick", e => {
      let t = e.getGuildId();
      if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
      (0, p.pX)(A.BVt.CHANNEL(t, e.id), {
        state: {
          analyticsSource: {
            page: A.liQ.GUILD_CHANNEL,
            section: A.JJy.CHANNEL_LIST,
            object: A.ZSU.CHANNEL
          }
        }
      })
    })
  }
}
let E = (0, Chunk676002.a)(x),
  C = Chunk64700.memo(function(e) {
    let {
      channel: t,
      guild: n,
      disableSorting: l
    } = e, i = (0, a.cf)([h.A, g.A], () => {
      let e = h.A.getChannel(t.parent_id);
      return {
        canManageChannel: g.A.can(A.xBc.MANAGE_CHANNELS, t),
        canReorderChannel: true !== l && null != e ? g.A.can(A.xBc.MANAGE_CHANNELS, e) : g.A.can(A.xBc.MANAGE_CHANNELS, n)
      }
    });
    return (0, r.jsx)(E, j({}, i, e))
  })