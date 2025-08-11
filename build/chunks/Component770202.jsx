/** Chunk was on 34779 **/
/** chunk id: 770202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./415506.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk201895 = require("./201895.js"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk98597 = require("./98597.jsx"),
  Chunk473403 = require("./473403.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk915887 = require("./915887.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  let n = t.getGuildId();
  if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
  a.Z.preload(n, t.id)
}
class E extends Chunk98597.ZP {
  render() {
    let {
      channel: e,
      selected: t,
      connectChannelDropTarget: n,
      connectChannelDragSource: i,
      connectDragPreview: l,
      canReorderChannel: s
    } = this.props, a = (0, Chunk255367.jsx)("li", {
      className: o()(this.getClassName(), {
        [Chunk915887.disabled]: this.isDisabled()
      }),
      "data-dnd-name": module.name,
      children: (0, Chunk255367.jsxs)(Chunk473403.ZP, {
        className: Chunk915887.iconVisibility,
        channel: module,
        selected: exports,
        onClick: this.handleClick,
        onMouseDown: j,
        onContextMenu: this.handleContextMenu,
        connectDragPreview: Chunk442837 ? Chunk120356 : null,
        "aria-label": (0, Chunk201895.ZP)({
          channel: module
        }),
        resolvedUnreadSetting: Chunk490897.i.ONLY_MENTIONS,
        children: [this.renderInviteButton(), this.renderEditButton()]
      })
    });
    return Chunk442837 ? require(Chunk73800(Chunk493683)) : Chunk493683
  }
  constructor(...e) {
    super(...e), C(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = f.Z.getGuild(t.getGuildId());
      null != i && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await n.e("99905").then(n.bind(n, 649400));
        return n => {
          var l, o;
          return (0, r.jsx)(e, (l = v({}, n), o = o = {
            channel: t,
            guild: i
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
          }), l))
        }
      })
    }), C(this, "handleClick", e => {
      let t = e.getGuildId();
      if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
      (0, h.uL)(O.Z5c.CHANNEL(t, e.id), {
        state: {
          analyticsSource: {
            page: O.ZY5.GUILD_CHANNEL,
            section: O.jXE.CHANNEL_LIST,
            object: O.qAy.CHANNEL
          }
        }
      })
    })
  }
}
let S = (0, Chunk146773.B)(E),
  x = Chunk73800.memo(function(e) {
    let {
      channel: t,
      guild: n,
      disableSorting: i
    } = e, l = (0, s.cj)([p.Z, g.Z], () => {
      let e = p.Z.getChannel(t.parent_id);
      return {
        canManageChannel: g.Z.can(O.Plq.MANAGE_CHANNELS, t),
        canReorderChannel: true !== i && null != e ? g.Z.can(O.Plq.MANAGE_CHANNELS, e) : g.Z.can(O.Plq.MANAGE_CHANNELS, n)
      }
    });
    return (0, r.jsx)(S, v({}, l, e))
  })