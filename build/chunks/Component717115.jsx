/** Chunk was on 64992 **/
/** chunk id: 717115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk414079 = require("./414079.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk769765 = require("./769765.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk477427 = require("./477427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk453235 = require("./453235.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class A extends Chunk64700.PureComponent {
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
    } = this.props, l = i.getGuildId();
    null != l && r.A.updateChannelOverrideSettings(l, i.id, {
      message_notifications: e,
      muted: null != t && t
    }, n)
  }
  handleRadioChange(e) {
    this.setMessageNotification(e, true, x.G_.notifications(e))
  }
  renderMessageNotificationsRadioOption(e) {
    let {
      messageNotifications: t,
      guildMuted: n,
      guildMessageNotifications: l
    } = this.props, r = t === e;
    return (null == t || t === j.orn.NULL) && e === l && (r = true), (0, i.jsx)(s.Checkbox, {
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
    null != n.parent_id && (e = u.A.getChannel(n.parent_id));
    let l = (0, o.gU)(n);
    if (n.type === j.rbe.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
      let e = g.A.getCategories(n.guild_id);
      t = p.intl.formatToPlainString(p.t["2KzH89"], {
        num: null != e[n.id] ? e[n.id].length : 0
      })
    } else t = null != e ? p.intl.formatToPlainString(p.t.L1zJgb, {
      categoryName: (0, d.m1)(e, m.default, h.A)
    }) : p.intl.string(p.t.uIzfCE);
    return (0, i.jsxs)(c.A, {
      grow: 1,
      className: b.VW,
      children: [null != l ? (0, i.jsx)(l, {
        className: b.Kk
      }) : null, (0, i.jsxs)("div", {
        className: b.aT,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/semibold",
          className: b.HA,
          children: (0, d.m1)(n, m.default, h.A)
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          className: b.uM,
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
    return (0, i.jsxs)(c.A, {
      grow: 0,
      shrink: 0,
      className: b.Pm,
      justify: c.A.Justify.AROUND,
      align: c.A.Align.CENTER,
      children: [(0, i.jsx)(c.A.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: t ? b.mH : b.HI,
        children: this.renderMessageNotificationsRadioOption(j.orn.ALL_MESSAGES)
      }), (0, i.jsx)(c.A.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: t ? b.mH : b.HI,
        children: this.renderMessageNotificationsRadioOption(j.orn.ONLY_MENTIONS)
      }), (0, i.jsx)(c.A.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: t ? b.mH : b.HI,
        children: this.renderMessageNotificationsRadioOption(j.orn.NO_MESSAGES)
      }), (0, i.jsx)(c.A.Child, {
        wrap: true,
        grow: 0,
        shrink: 0,
        className: b.dy,
        children: (0, i.jsx)(s.Checkbox, {
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
    return (0, i.jsxs)(s.ZpM, {
      ref: this.contentDomRef,
      outline: true,
      editable: true,
      className: e ? b.J$ : b.$Z,
      children: [this.renderName(), this.renderOptions(), (0, i.jsx)(a.A, {
        className: b.ZY,
        onClick: this.handleDelete
      })]
    })
  }
  constructor(...e) {
    super(...e), N(this, "_timeout", true), N(this, "contentDomRef", l.createRef()), N(this, "state", {
      highlight: false
    }), N(this, "unhighlight", () => {
      this.setState({
        highlight: false
      })
    }), N(this, "handleMute", e => {
      let {
        messageNotifications: t
      } = this.props;
      this.setMessageNotification(null != t ? t : j.orn.NULL, e, x.G_.muted(e))
    }), N(this, "handleDelete", () => {
      let {
        onDelete: e,
        channel: t
      } = this.props;
      this.setMessageNotification(j.orn.NULL, false, x.fd.OverrideDeleted), null != e && e(t.id)
    })
  }
}