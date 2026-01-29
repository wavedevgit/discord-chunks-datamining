/** Chunk was on 43600 **/
/** chunk id: 672814, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => x,
  r: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk774300 = require("./774300.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk71393 = require("./71393.js"),
  Chunk535820 = require("./535820.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk912579 = require("./912579.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = 48;
class x extends Chunk64700.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel || this.props.shouldRenameButtonCTA !== e.shouldRenameButtonCTA
  }
  renderUserOrChannel() {
    let e, t, n, {
      user: i,
      channel: a
    } = this.props;
    if (null != i) t = i.getAvatarURL(null == a ? true : a.guild_id, 32), n = v.Ay.getName(i);
    else if (null != a && (t = (0, r.Y)(a), n = (0, o.m1)(a, g.default, c.A), null == t && null != a.guild_id)) {
      let n = u.A.getGuild(a.guild_id);
      null != n && (null != n.icon ? t = h.Ay.getGuildIconURL({
        id: a.guild_id,
        icon: n.icon,
        size: 32
      }) : e = (0, p.oN)(n.name))
    }
    if (null == t || null == n)
      if (null != e) return (0, l.jsx)(s.Text, {
        variant: "text-md/medium",
        className: I.q9,
        "aria-hidden": true,
        children: e
      });
      else return null;
    return (0, l.jsx)(s.euF, {
      src: t,
      "aria-label": n,
      size: s._3J.SIZE_32,
      className: I.hO
    })
  }
  render() {
    let e, t, {
        user: n,
        channel: i,
        shouldRenameButtonCTA: a
      } = this.props,
      {
        sending: r,
        invited: u
      } = this.state;
    if (null != n) {
      let l = v.Ay.getName(n),
        i = c.A.getNickname(n.id),
        s = v.Ay.getUserTag(n, {
          decoration: "never"
        });
      e = null != i ? i : l, t = s
    }
    let d = (0, l.jsx)(s.Button, {
      variant: "secondary",
      text: u ? A.intl.string(A.t.dVT149) : a ? A.intl.string(A.t.AWLVgR) : A.intl.string(A.t.jYnGPG),
      size: "sm",
      loading: r,
      onClick: this.handleClickInvite,
      disabled: u
    });
    return (0, l.jsxs)("div", {
      className: I.Og,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsxs)("div", {
        className: I.mQ,
        children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
          className: I.BT,
          children: [(0, l.jsxs)(s.Text, {
            tag: "strong",
            variant: "text-md/semibold",
            lineClamp: 1,
            children: [e, null != i ? (0, o.m1)(i, g.default, c.A, true) : null]
          }), null != t && (0, l.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            lineClamp: 1,
            children: t
          })]
        })]
      }), d]
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      sending: false,
      invited: false,
      hovered: false
    }), m(this, "handleMouseEnter", () => {
      this.setState({
        hovered: true
      })
    }), m(this, "handleMouseLeave", () => {
      this.setState({
        hovered: false
      })
    }), m(this, "getInviteAnalyticsMetadata", () => {
      let {
        row: e,
        source: t
      } = this.props;
      if (null != e) return {
        suggestionData: d.A.getSelectedInviteMetadata(e),
        source: t
      }
    }), m(this, "handleClickInvite", () => {
      let {
        user: e,
        channel: t,
        inviteKey: n,
        location: l
      } = this.props;
      null != n && (null != t ? (this.setState({
        sending: true
      }), a.A.enqueue({
        type: a.F.GROUP_DM,
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
      }), a.A.enqueue({
        type: a.F.USER,
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