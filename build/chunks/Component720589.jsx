/** Chunk was on 54642 **/
/** chunk id: 720589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk528963 = require("./528963.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk360242 = require("./360242.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class O extends Chunk73800.PureComponent {
  componentDidMount() {
    Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: "Follow Channel Modal",
      num_guild_permissions: Object.keys(this.props.guilds).length,
      location: "Chat Input Blocker - Follow Channel"
    })
  }
  getDefaultChannelId(e) {
    let t = e.find(e => {
        let {
          channel: t
        } = e;
        return "general" === (0, h.F6)(t, y.default, j.Z)
      }),
      n = null != t ? t : e[0];
    return null != n ? n.channel.id : null
  }
  renderFooter() {
    let {
      selectedGuildId: e,
      selectedChannelId: t,
      submitting: n
    } = this.state, {
      onClose: r
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.hE2, {
      direction: "horizontal-reverse",
      children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t["3aOv+v"]),
        loading: require,
        onClick: this.handleFollow,
        disabled: null == module || null == exports
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "secondary",
        text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
        onClick: Chunk73800
      })]
    })
  }
  renderForm() {
    let {
      guilds: e
    } = this.props, {
      channels: t,
      selectedGuildId: n,
      selectedChannelId: a,
      errorMessage: i
    } = this.state, s = Chunk709054.default.keys(module).map(t => {
      let {
        guild: n
      } = e[t];
      return {
        value: t,
        label: n.name,
        guild: n
      }
    }), d = exports.map(e => {
      let {
        channel: t,
        category: n
      } = e;
      return {
        value: t.id,
        label: (0, h.F6)(t, y.default, j.Z),
        channel: t,
        category: n
      }
    }), c = 0 === Chunk442837.length, g = Chunk528963 ? Chunk388032.intl.string(Chunk388032.t["6b6QoK"]) : Chunk388032.intl.string(Chunk388032.t.Z0quyM);
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
        className: Chunk360242.bottomMargin,
        title: Chunk388032.intl.string(Chunk388032.t.xFn72t),
        children: (0, Chunk255367.jsx)(Chunk481060.VcW, {
          value: require,
          options: Chunk442837,
          isDisabled: Chunk528963,
          onChange: this.handleGuildSelect,
          renderOptionPrefix: e => (function(e) {
            if (null == e) return null;
            let {
              guild: t
            } = e;
            return (0, l.jsx)(m.Z, {
              guild: t,
              size: m.Z.Sizes.MINI
            })
          })(e)
        })
      }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
        className: Chunk360242.bottomMargin,
        title: Chunk388032.intl.string(Chunk388032.t.PDn2fX),
        children: (0, Chunk255367.jsx)(Chunk481060.VcW, {
          value: Chunk120356,
          options: Chunk570140,
          isDisabled: 0 === Chunk570140.length,
          onChange: this.handleChannelSelect,
          renderOptionPrefix: e => (function(e) {
            if (null == e) return null;
            let {
              channel: t
            } = e, n = (0, u.KS)(t);
            return null != n && (0, l.jsx)(n, {
              size: "xs",
              color: "currentColor",
              className: Z.icon
            })
          })(e)
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: Chunk528963 || null != i ? "text-danger" : "text-muted",
        className: Chunk360242.bottomMargin,
        children: null != i ? i : Chunk313201
      })]
    })
  }
  renderBody() {
    let {
      channel: {
        nsfw: e
      }
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk360242.body,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        id: this.state.headerId,
        children: Chunk388032.intl.string(Chunk388032.t.mvPFbG)
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        color: "text-muted",
        className: i()(Chunk360242.topMargin, {
          [Chunk360242.formMargin]: !module
        }),
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t.kbpkxM)
      }), module ? (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: i()(Chunk360242.formMargin, Chunk360242.topMargin),
        color: "text-danger",
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t["DrNm//"])
      }) : null]
    })
  }
  renderHeader() {
    var e;
    let {
      guildToFollow: t,
      channelNameToFollow: n,
      channel: r
    } = this.props, a = null != (e = (0, Chunk471445.KS)(Chunk73800)) ? module : Chunk481060.MqZ;
    return (0, Chunk255367.jsxs)(Chunk481060.xBx, {
      className: Chunk360242.header,
      children: [(0, Chunk255367.jsx)(Chunk565138.Z, {
        guild: exports,
        size: Chunk565138.Z.Sizes.LARGE
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk360242.channelContainer,
        children: (0, Chunk255367.jsxs)("div", {
          className: Chunk360242.channel,
          children: [(0, Chunk255367.jsx)(Chunk120356, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: Chunk360242.channelIcon
          }), (0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-md/medium",
            className: Chunk360242.channelName,
            children: require
          })]
        })
      })]
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      transitionState: module,
      "aria-labelledby": this.state.headerId,
      parentComponent: "FollowModal",
      children: [this.renderHeader(), (0, Chunk255367.jsxs)(Chunk481060.hzk, {
        className: Chunk360242.content,
        children: [this.renderBody(), this.renderForm()]
      }), (0, Chunk255367.jsx)(Chunk481060.mzw, {
        children: this.renderFooter()
      })]
    })
  }
  constructor(e) {
    super(e), S(this, "handleGuildSelect", e => {
      let {
        guilds: t
      } = this.props, {
        selectedGuildId: n
      } = this.state, l = t[e].channels, r = this.getDefaultChannelId(l);
      n !== e && this.setState({
        selectedGuildId: e,
        selectedChannelId: r,
        channels: l
      })
    }), S(this, "handleChannelSelect", e => {
      this.setState({
        selectedChannelId: e
      })
    }), S(this, "handleFollow", () => {
      let {
        channel: e,
        onClose: t
      } = this.props, {
        selectedChannelId: r,
        selectedGuildId: a
      } = this.state;
      null != r && (this.setState({
        submitting: true
      }), c.Z.createChannelFollower(r, e.id).then(() => {
        d.Z.dispatch({
          type: "CHANNEL_FOLLOWER_CREATED",
          channelId: r,
          guildId: a
        }), t(), (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("14760").then(n.bind(n, 897140));
          return t => (0, l.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                S(e, t, n[t])
              })
            }
            return e
          }({}, t))
        })
      }).catch(e => {
        e.body.code === v.evJ.TOO_MANY_WEBHOOKS ? this.setState({
          errorMessage: N.intl.string(N.t["1eZ4aG"]),
          submitting: false
        }) : this.setState({
          errorMessage: N.intl.string(N.t.LgwhuL),
          submitting: false
        })
      }))
    });
    let {
      guilds: t,
      lastChannelFollowingDestination: r
    } = e, {
      guildId: a,
      channelId: i
    } = r;
    this.state = {
      selectedGuildId: a,
      selectedChannelId: i,
      channels: null != a && null != t[a] ? t[a].channels : [],
      errorMessage: null,
      submitting: false,
      headerId: (0, g.hQ)("modal")
    }
  }
}
let w = Chunk442837.ZP.connectStores([Chunk430824.Z, Chunk592125.Z, Chunk984933.ZP, Chunk496675.Z, Chunk944486.Z], e => {
  let {
    channel: t
  } = e, n = b.Z.getGuild(t.guild_id), l = b.Z.getGuildsArray().reduce((e, t) => {
    let n = x.ZP.getChannels(t.id).SELECTABLE.map(e => e.channel).filter(e => e.type === v.d4z.GUILD_TEXT && f.Z.can(v.Plq.MANAGE_WEBHOOKS, e)).map(e => {
      let t = p.Z.getChannel(e.parent_id);
      return {
        channel: e,
        category: null != t ? t.name : null
      }
    });
    return n.length > 0 && (e[t.id] = {
      guild: t,
      channels: n
    }), e
  }, {}), r = C.Z.getLastChannelFollowingDestination();
  return {
    guildToFollow: n,
    channelNameToFollow: t.name,
    guilds: l,
    lastChannelFollowingDestination: null != r ? r : {}
  }
}, {
  forwardRef: true
})(O)