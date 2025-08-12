/** Chunk was on 1272 **/
/** chunk id: 176055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk575602 = require("./575602.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class T extends Chunk73800.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == module || null == exports ? null : (0, Chunk255367.jsxs)(Chunk600164.Z, {
      className: Chunk575602.memberInfo,
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk575602.dotOnline
      }), (0, Chunk255367.jsx)("span", {
        className: Chunk575602.memberText,
        children: Chunk388032.intl.format(Chunk388032.t["LC+S+v"], {
          membersOnline: exports
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk575602.dotOffline
      }), (0, Chunk255367.jsx)("span", {
        className: Chunk575602.memberText,
        children: Chunk388032.intl.format(Chunk388032.t.zRl6XV, {
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
      className: o,
      pageSize: s
    } = this.props;
    if (exports && require) return null;
    let d = (0, Chunk411198.B3)(module),
      p = Chunk388032.intl.string(Chunk388032.t.pxwdrK),
      h = this.handleJoinOrView,
      b = Chunk755721.zx.Looks.FILLED,
      _ = Chunk755721.zx.Colors.PRIMARY;
    return Chunk120356 ? require ? (b = Chunk755721.zx.Looks.OUTLINED, _ = Chunk575602.buttonColorInGuild, p = (0, Chunk255367.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk255367.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.cEnaW1)
      }), (0, Chunk255367.jsx)(Chunk481060.dz2, {
        size: "md",
        color: "currentColor",
        className: Chunk575602.joinedCheckmark
      })]
    })) : Chunk73800 && exports && (p = Chunk388032.intl.string(Chunk388032.t.XpeFYm)) : (p = Chunk388032.intl.string(Chunk388032.t.dKhVQE), h = this.handleLogin), (0, Chunk255367.jsxs)("div", {
      className: a()(Chunk593473, Chunk442837 === Chunk843445.b.SMALL ? Chunk575602.inviteSmall : Chunk575602.inviteLarge),
      children: [(0, Chunk255367.jsx)(Chunk770146.Z, {
        children: Chunk388032.intl.string(Chunk388032.t.s1KcLi)
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk575602.content,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk575602.info,
          children: [(0, Chunk255367.jsx)(Chunk565138.Z, {
            guild: Chunk749210,
            active: true,
            size: Chunk565138.Z.Sizes.LARGE,
            className: Chunk575602.guildIcon
          }), (0, Chunk255367.jsxs)("div", {
            className: Chunk575602.infoText,
            children: [(0, Chunk255367.jsx)("div", {
              className: Chunk575602.name,
              children: module.name
            }), this.renderMemberInfo()]
          })]
        }), (0, Chunk255367.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.SMALL,
          className: Chunk575602.actionButton,
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
    super(...e), N(this, "handleJoinOrView", async () => {
      let {
        guild: e,
        skuId: t,
        isInGuild: n,
        isLurking: r
      } = this.props, i = () => (0, O.X)(e.id);
      if (r)(0, p.Oj)(t).then(i);
      else if (n) i();
      else try {
        await d.Z.joinGuild(e.id, {
          lurker: true,
          source: I.vtS.APPLICATION_STORE
        }), i()
      } catch (e) {}
    }), N(this, "handleLogin", () => {
      let e = {
        redirect_to: I.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, _.uL)(I.Z5c.LOGIN, {
        search: (0, o.stringify)(e),
        source: "verified_guild_invite"
      })
    })
  }
}
let P = (0, Chunk666743.Z)(Chunk442837.ZP.connectStores([Chunk430824.Z, Chunk41776.Z], e => {
  let {
    guild: t
  } = e, n = b.Z.isLurking(t.id);
  return {
    isInGuild: null != E.Z.getGuild(t.id) && !n,
    isLurking: n
  }
})(T))