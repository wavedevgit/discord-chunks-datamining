/** Chunk was on 5863 **/
/** chunk id: 444899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk529651 = require("./529651.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class N extends Chunk73800.PureComponent {
  highlight() {
    this.setState({
      highlight: true
    }, () => {
      null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1e3)
    })
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
      muted: s,
      guildMessageNotifications: r,
      checkboxColor: a
    } = this.props, o = t === e;
    (null == t || t === p.bL.NULL) && e === r && (o = true);
    let d = l.XZJ.Types.INVERTED;
    return (s || t === p.bL.NULL || null == t) && (d = l.XZJ.Types.GHOST), (0, i.jsx)(l.XZJ, {
      value: !n && o,
      disabled: n,
      shape: l.XZJ.Shapes.ROUND,
      color: a,
      type: d,
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
      t = Chunk388032.intl.formatToPlainString(Chunk388032.t["2KzH8/"], {
        num: null != module[require.id] ? module[require.id].length : 0
      })
    } else t = null != module ? Chunk388032.intl.formatToPlainString(Chunk388032.t.L1zJgY, {
      categoryName: (0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z)
    }) : Chunk388032.intl.string(Chunk388032.t.uIzfCA);
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      grow: 1,
      className: Chunk529651.nameContainer,
      children: [null != Chunk73800 ? (0, Chunk255367.jsx)(Chunk73800, {
        className: Chunk529651.icon
      }) : null, (0, Chunk255367.jsxs)("div", {
        className: Chunk529651.channelNameContainer,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          className: Chunk529651.channelName,
          children: (0, Chunk933557.F6)(require, Chunk594174.default, Chunk699516.Z)
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-xs/normal",
          className: Chunk529651.channelNameByline,
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
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      grow: 0,
      shrink: 0,
      className: Chunk529651.checkboxGroup,
      justify: Chunk600164.Z.Justify.AROUND,
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: exports ? Chunk529651.checkboxContainerMuted : Chunk529651.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(Chunk981631.bL.ALL_MESSAGES)
      }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: exports ? Chunk529651.checkboxContainerMuted : Chunk529651.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(Chunk981631.bL.ONLY_MENTIONS)
      }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: exports ? Chunk529651.checkboxContainerMuted : Chunk529651.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(Chunk981631.bL.NO_MESSAGES)
      }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: Chunk529651.checkboxMute,
        children: (0, Chunk255367.jsx)(Chunk481060.XZJ, {
          value: module,
          shape: Chunk481060.XZJ.Shapes.BOX,
          type: Chunk481060.XZJ.Types.INVERTED,
          onChange: this.handleMute
        })
      })]
    })
  }
  render() {
    let {
      highlight: e
    } = this.state;
    return (0, Chunk255367.jsxs)(Chunk481060.Zbd, {
      ref: this.contentDomRef,
      outline: true,
      editable: true,
      className: module ? Chunk529651.overrideHighlight : Chunk529651.override,
      children: [this.renderName(), this.renderOptions(), (0, Chunk255367.jsx)(Chunk225433.Z, {
        className: Chunk529651.removeOverride,
        onClick: this.handleDelete
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "_timeout", true), S(this, "contentDomRef", s.createRef()), S(this, "state", {
      highlight: false
    }), S(this, "unhighlight", () => {
      this.setState({
        highlight: false
      })
    }), S(this, "handleMute", (e, t) => {
      let {
        messageNotifications: n
      } = this.props;
      this.setMessageNotification(null != n ? n : p.bL.NULL, t, x.UE.muted(t))
    }), S(this, "handleDelete", () => {
      let {
        onDelete: e,
        channel: t
      } = this.props;
      this.setMessageNotification(p.bL.NULL, false, x.ZB.OverrideDeleted), null != e && e(t.id)
    })
  }
}