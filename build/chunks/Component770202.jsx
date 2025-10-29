/** Chunk was on 30437 **/
/** chunk id: 770202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk55940 = require("./55940.js");

function v(e, t, n) {
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
      v(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  let n = t.getGuildId();
  if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
  s.Z.preload(n, t.id)
}
class C extends Chunk98597.ZP {
  render() {
    let {
      channel: e,
      selected: t,
      connectChannelDropTarget: n,
      connectChannelDragSource: i,
      connectDragPreview: l,
      canReorderChannel: a
    } = this.props, s = (0, Chunk951288.jsx)("li", {
      className: o()(this.getClassName(), {
        [Chunk55940.disabled]: this.isDisabled()
      }),
      "data-dnd-name": module.name,
      children: (0, Chunk951288.jsxs)(Chunk473403.ZP, {
        className: Chunk55940.iconVisibility,
        channel: module,
        selected: exports,
        onClick: this.handleClick,
        onMouseDown: x,
        onContextMenu: this.handleContextMenu,
        connectDragPreview: Chunk442837 ? Chunk120356 : null,
        "aria-label": (0, Chunk201895.ZP)({
          channel: module
        }),
        resolvedUnreadSetting: Chunk490897.i.ONLY_MENTIONS,
        children: [this.renderInviteButton(), this.renderEditButton()]
      })
    });
    return Chunk442837 ? require(Chunk647438(Chunk493683)) : Chunk493683
  }
  constructor(...e) {
    super(...e), v(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, i = h.Z.getGuild(t.getGuildId());
      null != i && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await n.e("99905").then(n.bind(n, 649400));
        return n => (0, r.jsx)(e, function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        }(j({}, n), {
          channel: t,
          guild: i
        }))
      })
    }), v(this, "handleClick", e => {
      ! function(e) {
        let t = e.getGuildId();
        if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
        (0, p.uL)(_.Z5c.CHANNEL(t, e.id), {
          state: {
            analyticsSource: {
              page: _.ZY5.GUILD_CHANNEL,
              section: _.jXE.CHANNEL_LIST,
              object: _.qAy.CHANNEL
            }
          }
        })
      }(e)
    })
  }
}
let E = (0, Chunk146773.B)(C),
  S = Chunk647438.memo(function(e) {
    let {
      channel: t,
      guild: n,
      disableSorting: i
    } = e, l = (0, a.cj)([f.Z, g.Z], () => {
      let e = f.Z.getChannel(t.parent_id);
      return {
        canManageChannel: g.Z.can(_.Plq.MANAGE_CHANNELS, t),
        canReorderChannel: true !== i && null != e ? g.Z.can(_.Plq.MANAGE_CHANNELS, e) : g.Z.can(_.Plq.MANAGE_CHANNELS, n)
      }
    });
    return (0, r.jsx)(E, j({}, l, e))
  })