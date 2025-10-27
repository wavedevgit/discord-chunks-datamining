/** Chunk was on 7654 **/
/** chunk id: 462376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => C,
  k: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630810 = require("./630810.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk210887 = require("./210887.js"),
  Chunk430824 = require("./430824.js"),
  Chunk751771 = require("./751771.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451964 = require("./451964.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 44;
class C extends Chunk647438.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n, {
      user: l,
      channel: s
    } = this.props;
    if (null != Chunk647438) t = Chunk647438.getAvatarURL(null == Chunk780384 ? true : Chunk780384.guild_id, 32), n = Chunk51144.ZP.getName(Chunk647438);
    else if (null != Chunk780384 && (t = (0, Chunk43267.x)(Chunk780384), n = (0, Chunk933557.F6)(Chunk780384, Chunk594174.default, Chunk699516.Z), null == exports && null != Chunk780384.guild_id)) {
      let n = Chunk430824.Z.getGuild(Chunk780384.guild_id);
      null != require && (null != require.icon ? t = Chunk768581.ZP.getGuildIconURL({
        id: Chunk780384.guild_id,
        icon: require.icon,
        size: 32
      }) : e = (0, Chunk624138.Zg)(require.name))
    }
    if (null == exports || null == require)
      if (null != module) return (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk451964.acronym,
        "aria-hidden": true,
        children: module
      });
      else return null;
    return (0, Chunk951288.jsx)(Chunk481060.qEK, {
      src: exports,
      "aria-label": require,
      size: Chunk481060.EFr.SIZE_32,
      className: Chunk451964.inviteRowAvatar
    })
  }
  render() {
    let e, {
        user: t,
        channel: n
      } = this.props,
      {
        sending: l,
        invited: a,
        hovered: o
      } = this.state;
    return e = Chunk481060 ? (0, Chunk951288.jsx)(Chunk755721.zx, {
      look: Chunk755721.zx.Looks.LINK,
      size: Chunk755721.zx.Sizes.SMALL,
      disabled: true,
      color: (0, Chunk780384.wj)(Chunk210887.Z.theme) ? Chunk755721.zx.Colors.WHITE : Chunk755721.zx.Colors.BRAND,
      children: Chunk388032.intl.string(Chunk388032.t.dVT149)
    }) : (0, Chunk951288.jsx)(Chunk755721.zx, {
      color: Chunk755721.zx.Colors.GREEN,
      look: Chunk630810 ? Chunk755721.zx.Looks.FILLED : Chunk755721.zx.Looks.OUTLINED,
      className: Chunk451964.inviteRowButton,
      size: Chunk755721.zx.Sizes.SMALL,
      submitting: Chunk647438,
      onClick: this.handleClickInvite,
      children: Chunk388032.intl.string(Chunk388032.t.jYnGPG)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk451964.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk451964.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, Chunk951288.jsxs)("div", {
          className: Chunk451964.inviteRowName,
          children: [Chunk51144.ZP.getName(exports), null != require ? (0, Chunk933557.F6)(require, Chunk594174.default, Chunk699516.Z, true) : null]
        })]
      }), module]
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      sending: false,
      invited: false,
      hovered: false
    }), E(this, "handleMouseEnter", () => {
      this.setState({
        hovered: true
      })
    }), E(this, "handleMouseLeave", () => {
      this.setState({
        hovered: false
      })
    }), E(this, "getInviteAnalyticsMetadata", () => {
      let {
        row: e,
        source: t
      } = this.props;
      if (null != e) return {
        suggestionData: h.Z.getSelectedInviteMetadata(e),
        source: t
      }
    }), E(this, "handleClickInvite", () => {
      let {
        user: e,
        channel: t,
        inviteKey: n,
        location: i
      } = this.props;
      null != n && (null != t ? (this.setState({
        sending: true
      }), o.Z.enqueue({
        type: o.m.GROUP_DM,
        channel: t,
        inviteKey: n,
        location: i,
        inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata()
      }, e => {
        this.setState({
          sending: false,
          invited: e
        })
      })) : null != e && (this.setState({
        sending: true
      }), o.Z.enqueue({
        type: o.m.USER,
        user: e,
        inviteKey: n,
        location: i,
        inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata()
      }, e => {
        this.setState({
          sending: false,
          invited: e
        })
      })))
    })
  }
}