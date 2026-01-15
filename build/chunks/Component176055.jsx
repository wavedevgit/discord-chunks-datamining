/** Chunk was on 1272 **/
/** chunk id: 176055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk612510 = require("./612510.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class N extends Chunk473749.PureComponent {
  renderMemberInfo() {
    let {
      approximateMemberCount: e,
      approximatePresenceCount: t
    } = this.props.guild;
    return null == e || null == t ? null : (0, r.jsxs)(h.Z, {
      className: S.memberInfo,
      align: h.Z.Align.CENTER,
      children: [(0, r.jsx)("div", {
        className: S.dotOnline
      }), (0, r.jsx)("span", {
        className: S.memberText,
        children: C.intl.format(C.t["LC+S+m"], {
          membersOnline: t
        })
      }), (0, r.jsx)("div", {
        className: S.dotOffline
      }), (0, r.jsx)("span", {
        className: S.memberText,
        children: C.intl.format(C.t.zRl6XR, {
          count: e
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
    if (t && n) return null;
    let d = (0, v.B3)(e),
      p = C.intl.string(C.t.pxwdrA),
      f = this.handleJoinOrView,
      b = c.zx.Looks.FILLED,
      E = c.zx.Colors.PRIMARY;
    return l ? n ? (b = c.zx.Looks.OUTLINED, E = S.buttonColorInGuild, p = (0, r.jsxs)(h.Z, {
      align: h.Z.Align.CENTER,
      children: [(0, r.jsx)("div", {
        children: C.intl.string(C.t.cEnaWx)
      }), (0, r.jsx)(u.dz2, {
        size: "md",
        color: "currentColor",
        className: S.joinedCheckmark
      })]
    })) : i && t && (p = C.intl.string(C.t.XpeFYr)) : (p = C.intl.string(C.t.dKhVQN), f = this.handleLogin), (0, r.jsxs)("div", {
      className: a()(o, s === I.b.SMALL ? S.inviteSmall : S.inviteLarge),
      children: [(0, r.jsx)(g.Z, {
        children: C.intl.string(C.t.s1KcLo)
      }), (0, r.jsxs)("div", {
        className: S.content,
        children: [(0, r.jsxs)("div", {
          className: S.info,
          children: [(0, r.jsx)(m.Z, {
            guild: d,
            active: true,
            size: m.Z.Sizes.LARGE,
            className: S.guildIcon
          }), (0, r.jsxs)("div", {
            className: S.infoText,
            children: [(0, r.jsx)("div", {
              className: S.name,
              children: e.name
            }), this.renderMemberInfo()]
          })]
        }), (0, r.jsx)(c.zx, {
          size: c.zx.Sizes.SMALL,
          className: S.actionButton,
          fullWidth: true,
          color: E,
          look: b,
          onClick: f,
          children: p
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
      } = this.props, i = () => (0, _.X)(e.id);
      if (r)(0, p.Oj)(t).then(i);
      else if (n) i();
      else try {
        await d.Z.joinGuild(e.id, {
          lurker: true,
          source: y.vtS.APPLICATION_STORE
        }), i()
      } catch (e) {}
    }), T(this, "handleLogin", () => {
      let e = {
        redirect_to: y.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId)
      };
      (0, E.uL)(y.Z5c.LOGIN, {
        search: (0, o.stringify)(e),
        source: "verified_guild_invite"
      })
    })
  }
}
let j = (0, Chunk666743.Z)(Chunk442837.ZP.connectStores([Chunk430824.Z, Chunk41776.Z], e => {
  let {
    guild: t
  } = e, n = b.Z.isLurking(t.id);
  return {
    isInGuild: null != O.Z.getGuild(t.id) && !n,
    isLurking: n
  }
})(N))