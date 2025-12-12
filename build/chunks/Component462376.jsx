/** Chunk was on 7654 **/
/** chunk id: 462376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => x,
  k: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630810 = require("./630810.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk430824 = require("./430824.js"),
  Chunk751771 = require("./751771.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk444942 = require("./444942.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 44;
class x extends Chunk473749.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n, {
      user: i,
      channel: r
    } = this.props;
    if (null != Chunk473749) t = Chunk473749.getAvatarURL(null == Chunk630810 ? true : Chunk630810.guild_id, 32), n = Chunk51144.ZP.getName(Chunk473749);
    else if (null != Chunk630810 && (t = (0, Chunk43267.x)(Chunk630810), n = (0, Chunk933557.F6)(Chunk630810, Chunk594174.default, Chunk699516.Z), null == exports && null != Chunk630810.guild_id)) {
      let n = Chunk430824.Z.getGuild(Chunk630810.guild_id);
      null != require && (null != require.icon ? t = Chunk768581.ZP.getGuildIconURL({
        id: Chunk630810.guild_id,
        icon: require.icon,
        size: 32
      }) : e = (0, Chunk624138.Zg)(require.name))
    }
    if (null == exports || null == require)
      if (null != module) return (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk444942.acronym,
        "aria-hidden": true,
        children: module
      });
      else return null;
    return (0, Chunk54381.jsx)(Chunk481060.qEK, {
      src: exports,
      "aria-label": require,
      size: Chunk481060.EFr.SIZE_32,
      className: Chunk444942.inviteRowAvatar
    })
  }
  render() {
    let {
      user: e,
      channel: t
    } = this.props, {
      sending: n,
      invited: i
    } = this.state, r = (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "secondary",
      text: Chunk473749 ? Chunk388032.intl.string(Chunk388032.t.dVT149) : Chunk388032.intl.string(Chunk388032.t.jYnGPG),
      size: "sm",
      loading: require,
      onClick: this.handleClickInvite,
      disabled: Chunk473749
    });
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk444942.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk444942.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, Chunk54381.jsxs)("div", {
          className: Chunk444942.inviteRowName,
          children: [Chunk51144.ZP.getName(module), null != exports ? (0, Chunk933557.F6)(exports, Chunk594174.default, Chunk699516.Z, true) : null]
        })]
      }), Chunk630810]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      sending: false,
      invited: false,
      hovered: false
    }), S(this, "handleMouseEnter", () => {
      this.setState({
        hovered: true
      })
    }), S(this, "handleMouseLeave", () => {
      this.setState({
        hovered: false
      })
    }), S(this, "getInviteAnalyticsMetadata", () => {
      let {
        row: e,
        source: t
      } = this.props;
      if (null != e) return {
        suggestionData: d.Z.getSelectedInviteMetadata(e),
        source: t
      }
    }), S(this, "handleClickInvite", () => {
      let {
        user: e,
        channel: t,
        inviteKey: n,
        location: l
      } = this.props;
      null != n && (null != t ? (this.setState({
        sending: true
      }), r.Z.enqueue({
        type: r.m.GROUP_DM,
        channel: t,
        inviteKey: n,
        location: l,
        inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata()
      }, e => {
        this.setState({
          sending: false,
          invited: e
        })
      })) : null != e && (this.setState({
        sending: true
      }), r.Z.enqueue({
        type: r.m.USER,
        user: e,
        inviteKey: n,
        location: l,
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