/** Chunk was on 15076 **/
/** chunk id: 444899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk99079 = require("./99079.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class b extends Chunk473749.PureComponent {
  highlight() {
    this.setState({
      highlight: true
    }, () => {
      null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1e3)
    })
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      var e;
      null == (e = this.contentDomRef.current) || e.scrollIntoView({
        behavior: "smooth"
      }), this.highlight()
    }
  }
  componentWillUnmount() {
    null != this._timeout && clearTimeout(this._timeout)
  }
  setMessageNotification(e, t, n) {
    let {
      channel: i
    } = this.props, s = i.getGuildId();
    null != s && r.Z.updateChannelOverrideSettings(s, i.id, {
      message_notifications: e,
      muted: null != t && t
    }, n)
  }
  handleRadioChange(e) {
    this.setMessageNotification(e, true, x.UE.notifications(e))
  }
  renderMessageNotificationsRadioOption(e) {
    let {
      messageNotifications: t,
      guildMuted: n,
      guildMessageNotifications: s
    } = this.props, r = t === e;
    return (null == t || t === p.bL.NULL) && e === s && (r = true), (0, i.jsx)(l.Checkbox, {
      checked: !n && r,
      label: "",
      disabled: n,
      onChange: this.handleRadioChange.bind(this, e)
    })
  }
  renderName() {
    let e, t, {
      channel: n
    } = this.props;
    null != n.parent_id && (e = u.Z.getChannel(n.parent_id));
    let s = (0, d.KS)(n);
    if (n.type === p.d4z.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
      let e = h.Z.getCategories(n.guild_id);
      t = j.intl.formatToPlainString(j.t["2KzH89"], {
        num: null != e[n.id] ? e[n.id].length : 0
      })
    } else t = null != e ? j.intl.formatToPlainString(j.t.L1zJgb, {
      categoryName: (0, o.F6)(e, m.default, g.Z)
    }) : j.intl.string(j.t.uIzfCE);
    return (0, i.jsxs)(c.Z, {
      grow: 1,
      className: f.nameContainer,
      children: [null != s ? (0, i.jsx)(s, {
        className: f.icon
      }) : null, (0, i.jsxs)("div", {
        className: f.channelNameContainer,
        children: [(0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          className: f.channelName,
          children: (0, o.F6)(n, m.default, g.Z)
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: f.channelNameByline,
          children: t
        })]
      })]
    })
  }
  renderOptions() {
    let {
      muted: e,
      guildMuted: t
    } = this.props;
    return (0, i.jsxs)(c.Z, {
      grow: 0,
      shrink: 0,
      className: f.checkboxGroup,
      justify: c.Z.Justify.AROUND,
      align: c.Z.Align.CENTER,
      children: [(0, i.jsx)(c.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: t ? f.checkboxContainerMuted : f.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(p.bL.ALL_MESSAGES)
      }), (0, i.jsx)(c.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: t ? f.checkboxContainerMuted : f.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(p.bL.ONLY_MENTIONS)
      }), (0, i.jsx)(c.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: t ? f.checkboxContainerMuted : f.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(p.bL.NO_MESSAGES)
      }), (0, i.jsx)(c.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: f.checkboxMute,
        children: (0, i.jsx)(l.Checkbox, {
          checked: e,
          label: "",
          onChange: this.handleMute
        })
      })]
    })
  }
  render() {
    let {
      highlight: e
    } = this.state;
    return (0, i.jsxs)(l.Zbd, {
      ref: this.contentDomRef,
      outline: true,
      editable: true,
      className: e ? f.overrideHighlight : f.override,
      children: [this.renderName(), this.renderOptions(), (0, i.jsx)(a.Z, {
        className: f.removeOverride,
        onClick: this.handleDelete
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "_timeout", true), v(this, "contentDomRef", s.createRef()), v(this, "state", {
      highlight: false
    }), v(this, "unhighlight", () => {
      this.setState({
        highlight: false
      })
    }), v(this, "handleMute", e => {
      let {
        messageNotifications: t
      } = this.props;
      this.setMessageNotification(null != t ? t : p.bL.NULL, e, x.UE.muted(e))
    }), v(this, "handleDelete", () => {
      let {
        onDelete: e,
        channel: t
      } = this.props;
      this.setMessageNotification(p.bL.NULL, false, x.ZB.OverrideDeleted), null != e && e(t.id)
    })
  }
}