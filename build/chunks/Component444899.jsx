/** Chunk was on 15076 **/
/** chunk id: 444899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => N
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

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class N extends Chunk473749.PureComponent {
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
      null == (e = this.contentDomRef.current) || module.scrollIntoView({
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
    null != require.parent_id && (e = Chunk592125.Z.getChannel(require.parent_id));
    let s = (0, Chunk471445.KS)(require);
    if (require.type === Chunk981631.d4z.GUILD_CATEGORY && null != require.guild_id && "" !== require.guild_id) {
      let e = Chunk324067.Z.getCategories(require.guild_id);
      t = Chunk388032.intl.formatToPlainString(Chunk388032.t["2KzH89"], {
        num: null != module[require.id] ? module[require.id].length : 0
      })
    } else t = null != module ? Chunk388032.intl.formatToPlainString(Chunk388032.t.L1zJgb, {
      categoryName: (0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z)
    }) : Chunk388032.intl.string(Chunk388032.t.uIzfCE);
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      grow: 1,
      className: Chunk99079.nameContainer,
      children: [null != Chunk473749 ? (0, Chunk54381.jsx)(Chunk473749, {
        className: Chunk99079.icon
      }) : null, (0, Chunk54381.jsxs)("div", {
        className: Chunk99079.channelNameContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          className: Chunk99079.channelName,
          children: (0, Chunk933557.F6)(require, Chunk594174.default, Chunk699516.Z)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          className: Chunk99079.channelNameByline,
          children: exports
        })]
      })]
    })
  }
  renderOptions() {
    let {
      muted: e,
      guildMuted: t
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      grow: 0,
      shrink: 0,
      className: Chunk99079.checkboxGroup,
      justify: Chunk600164.Z.Justify.AROUND,
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk54381.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: exports ? Chunk99079.checkboxContainerMuted : Chunk99079.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(Chunk981631.bL.ALL_MESSAGES)
      }), (0, Chunk54381.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: exports ? Chunk99079.checkboxContainerMuted : Chunk99079.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(Chunk981631.bL.ONLY_MENTIONS)
      }), (0, Chunk54381.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: exports ? Chunk99079.checkboxContainerMuted : Chunk99079.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(Chunk981631.bL.NO_MESSAGES)
      }), (0, Chunk54381.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: Chunk99079.checkboxMute,
        children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: module,
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
    return (0, Chunk54381.jsxs)(Chunk481060.Zbd, {
      ref: this.contentDomRef,
      outline: true,
      editable: true,
      className: module ? Chunk99079.overrideHighlight : Chunk99079.override,
      children: [this.renderName(), this.renderOptions(), (0, Chunk54381.jsx)(Chunk225433.Z, {
        className: Chunk99079.removeOverride,
        onClick: this.handleDelete
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "_timeout", true), f(this, "contentDomRef", s.createRef()), f(this, "state", {
      highlight: false
    }), f(this, "unhighlight", () => {
      this.setState({
        highlight: false
      })
    }), f(this, "handleMute", e => {
      let {
        messageNotifications: t
      } = this.props;
      this.setMessageNotification(null != t ? t : p.bL.NULL, e, x.UE.muted(e))
    }), f(this, "handleDelete", () => {
      let {
        onDelete: e,
        channel: t
      } = this.props;
      this.setMessageNotification(p.bL.NULL, false, x.ZB.OverrideDeleted), null != e && e(t.id)
    })
  }
}