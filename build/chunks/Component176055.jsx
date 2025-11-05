/** Chunk was on 1272 **/
/** chunk id: 176055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk558381 = require("./558381.js"),
  Chunk666743 = require("./666743.jsx"),
  Chunk770146 = require("./770146.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk41776 = require("./41776.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411198 = require("./411198.js"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk295265 = require("./295265.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class N extends Chunk647438.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == module || null == exports ? null : (0, Chunk951288.jsxs)(Chunk600164.Z, {
      className: Chunk295265.memberInfo,
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk295265.dotOnline
      }), (0, Chunk951288.jsx)("span", {
        className: Chunk295265.memberText,
        children: Chunk388032.intl.format(Chunk388032.t["LC+S+m"], {
          membersOnline: exports
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk295265.dotOffline
      }), (0, Chunk951288.jsx)("span", {
        className: Chunk295265.memberText,
        children: Chunk388032.intl.format(Chunk388032.t.zRl6XR, {
          count: module
        })
      })]
    })
  }
  render() {
    let {
      guild: e,
      inChannel: t,
      isInGuild: n,
      isLurking: i,
      isAuthenticated: l,
      className: s,
      pageSize: o
    } = this.props;
    if (exports && require) return null;
    let d = (0, Chunk411198.B3)(module),
      p = Chunk388032.intl.string(Chunk388032.t.pxwdrA),
      f = this.handleJoinOrView,
      _ = Chunk755721.zx.Looks.FILLED,
      b = Chunk755721.zx.Colors.PRIMARY;
    return Chunk120356 ? require ? (_ = Chunk755721.zx.Looks.OUTLINED, b = Chunk295265.buttonColorInGuild, p = (0, Chunk951288.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.cEnaWx)
      }), (0, Chunk951288.jsx)(Chunk481060.dz2, {
        size: "md",
        color: "currentColor",
        className: Chunk295265.joinedCheckmark
      })]
    })) : Chunk647438 && exports && (p = Chunk388032.intl.string(Chunk388032.t.XpeFYr)) : (p = Chunk388032.intl.string(Chunk388032.t.dKhVQN), f = this.handleLogin), (0, Chunk951288.jsxs)("div", {
      className: a()(Chunk593473, Chunk442837 === Chunk843445.b.SMALL ? Chunk295265.inviteSmall : Chunk295265.inviteLarge),
      children: [(0, Chunk951288.jsx)(Chunk770146.Z, {
        children: Chunk388032.intl.string(Chunk388032.t.s1KcLo)
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk295265.content,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk295265.info,
          children: [(0, Chunk951288.jsx)(Chunk565138.Z, {
            guild: Chunk749210,
            active: true,
            size: Chunk565138.Z.Sizes.LARGE,
            className: Chunk295265.guildIcon
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk295265.infoText,
            children: [(0, Chunk951288.jsx)("div", {
              className: Chunk295265.name,
              children: module.name
            }), this.renderMemberInfo()]
          })]
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.SMALL,
          className: Chunk295265.actionButton,
          fullWidth: true,
          color: Chunk703656,
          look: Chunk41776,
          onClick: Chunk666743,
          children: Chunk558381
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), T(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: n,
        isLurking: r
      } = this.props, i = () => (0, E.X)(e.id);
      if (r)(0, p.Oj)(t).then(i);
      else if (n) i();
      else try {
        await d.Z.joinGuild(e.id, {
          lurker: true,
          source: I.vtS.APPLICATION_STORE
        }), i()
      } catch (e) {}
    }), T(this, "handleLogin", () => {
      let e = {
        redirect_to: I.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, b.uL)(I.Z5c.LOGIN, {
        search: (0, s.stringify)(e),
        source: "verified_guild_invite"
      })
    })
  }
}
let j = (0, Chunk666743.Z)(Chunk442837.ZP.connectStores([Chunk430824.Z, Chunk41776.Z], e => {
  let {
    guild: t
  } = e, n = _.Z.isLurking(t.id);
  return {
    isInGuild: null != O.Z.getGuild(t.id) && !n,
    isLurking: n
  }
})(N))