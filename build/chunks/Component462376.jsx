/** Chunk was on 7654 **/
/** chunk id: 462376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => f,
  k: () => S
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = 48;
class f extends Chunk473749.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n, {
      user: i,
      channel: r
    } = this.props;
    if (null != i) t = i.getAvatarURL(null == r ? true : r.guild_id, 32), n = v.ZP.getName(i);
    else if (null != r && (t = (0, a.x)(r), n = (0, o.F6)(r, g.default, c.Z), null == t && null != r.guild_id)) {
      let n = u.Z.getGuild(r.guild_id);
      null != n && (null != n.icon ? t = h.ZP.getGuildIconURL({
        id: r.guild_id,
        icon: n.icon,
        size: 32
      }) : e = (0, p.Zg)(n.name))
    }
    if (null == t || null == n)
      if (null != e) return (0, l.jsx)(s.Text, {
        variant: "text-md/medium",
        className: m.acronym,
        "aria-hidden": true,
        children: e
      });
      else return null;
    return (0, l.jsx)(s.qEK, {
      src: t,
      "aria-label": n,
      size: s.EFr.SIZE_32,
      className: m.inviteRowAvatar
    })
  }
  render() {
    let e, t, {
        user: n,
        channel: i
      } = this.props,
      {
        sending: r,
        invited: a
      } = this.state;
    if (null != n) {
      let l = v.ZP.getName(n),
        i = c.Z.getNickname(n.id),
        s = v.ZP.getUserTag(n, {
          decoration: "never"
        });
      e = null != i ? i : l, t = s
    }
    let u = (0, l.jsx)(s.Button, {
      variant: "secondary",
      text: a ? I.intl.string(I.t.dVT149) : I.intl.string(I.t.jYnGPG),
      size: "sm",
      loading: r,
      onClick: this.handleClickInvite,
      disabled: a
    });
    return (0, l.jsxs)("div", {
      className: m.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsxs)("div", {
        className: m.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
          className: m.inviteRowLabels,
          children: [(0, l.jsxs)(s.Text, {
            tag: "strong",
            variant: "text-md/semibold",
            lineClamp: 1,
            children: [e, null != i ? (0, o.F6)(i, g.default, c.Z, true) : null]
          }), null != t && (0, l.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            lineClamp: 1,
            children: t
          })]
        })]
      }), u]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      sending: false,
      invited: false,
      hovered: false
    }), x(this, "handleMouseEnter", () => {
      this.setState({
        hovered: true
      })
    }), x(this, "handleMouseLeave", () => {
      this.setState({
        hovered: false
      })
    }), x(this, "getInviteAnalyticsMetadata", () => {
      let {
        row: e,
        source: t
      } = this.props;
      if (null != e) return {
        suggestionData: d.Z.getSelectedInviteMetadata(e),
        source: t
      }
    }), x(this, "handleClickInvite", () => {
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