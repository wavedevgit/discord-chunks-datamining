/** Chunk was on 96964 **/
/** chunk id: 807007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
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
  Chunk481073 = require("./481073.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class w extends Chunk473749.PureComponent {
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
        return "general" === (0, u.F6)(t, _.default, j.Z)
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
    return (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
      direction: "horizontal-reverse",
      children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t["3aOv+h"]),
        loading: require,
        onClick: this.handleFollow,
        disabled: null == module || null == exports
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "secondary",
        text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
        onClick: Chunk473749
      })]
    })
  }
  renderForm() {
    let {
      guilds: e
    } = this.props, {
      channels: t,
      selectedGuildId: n,
      selectedChannelId: r,
      errorMessage: a
    } = this.state, i = Chunk709054.default.keys(module).map(t => {
      let {
        guild: n
      } = e[t];
      return {
        value: t,
        label: n.name,
        guild: n
      }
    }), s = exports.map(e => {
      let {
        channel: t,
        category: n
      } = e;
      return {
        value: t.id,
        label: (0, u.F6)(t, _.default, j.Z),
        channel: t,
        category: n
      }
    }), d = 0 === i.length, h = Chunk570140 ? Chunk388032.intl.string(Chunk388032.t["6b6QoF"]) : Chunk388032.intl.string(Chunk388032.t.Z0quyN);
    return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      children: [(0, Chunk54381.jsx)(Chunk668339.d, {
        label: Chunk388032.intl.string(Chunk388032.t.xFn72s),
        value: require,
        options: i,
        isDisabled: Chunk570140,
        onChange: this.handleGuildSelect,
        renderOptionPrefix: e => (function(e) {
          if (null == e) return null;
          let {
            guild: t
          } = e;
          return (0, l.jsx)(p.Z, {
            guild: t,
            size: p.Z.Sizes.MINI
          })
        })(e)
      }), (0, Chunk54381.jsx)(Chunk668339.d, {
        label: Chunk388032.intl.string(Chunk388032.t.PDn2fR),
        value: Chunk473749,
        options: Chunk442837,
        isDisabled: 0 === Chunk442837.length,
        onChange: this.handleChannelSelect,
        renderOptionPrefix: e => (function(e) {
          if (null == e) return null;
          let {
            channel: t
          } = e, n = (0, g.KS)(t);
          return null != n && (0, l.jsx)(n, {
            size: "xs",
            color: "currentColor",
            className: S.icon
          })
        })(e)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: Chunk570140 || null != Chunk120356 ? "text-feedback-critical" : "text-muted",
        className: Chunk481073.bottomMargin,
        children: null != Chunk120356 ? Chunk120356 : Chunk528963
      })]
    })
  }
  renderBody() {
    let {
      channel: {
        nsfw: e
      }
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk481073.body,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        id: this.state.headerId,
        children: Chunk388032.intl.string(Chunk388032.t.mvPFbA)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        color: "text-muted",
        className: i()(Chunk481073.topMargin, {
          [Chunk481073.formMargin]: !module
        }),
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t.kbpkxJ)
      }), module ? (0, Chunk54381.jsx)(Chunk481060.Text, {
        className: i()(Chunk481073.formMargin, Chunk481073.topMargin),
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t["DrNm/5"])
      }) : null]
    })
  }
  renderHeader() {
    var e;
    let {
      guildToFollow: t,
      channelNameToFollow: n,
      channel: r
    } = this.props, a = null != (e = (0, Chunk471445.KS)(Chunk473749)) ? module : Chunk481060.MqZ;
    return (0, Chunk54381.jsxs)(Chunk481060.xBx, {
      className: Chunk481073.header,
      children: [(0, Chunk54381.jsx)(Chunk565138.Z, {
        guild: exports,
        size: Chunk565138.Z.Sizes.LARGE
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk481073.channelContainer,
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk481073.channel,
          children: [(0, Chunk54381.jsx)(Chunk120356, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: Chunk481073.channelIcon
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-md/medium",
            className: Chunk481073.channelName,
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
    return (0, Chunk54381.jsxs)(Chunk481060.Y0X, {
      transitionState: module,
      "aria-labelledby": this.state.headerId,
      parentComponent: "FollowModal",
      children: [this.renderHeader(), (0, Chunk54381.jsxs)(Chunk481060.hzk, {
        className: Chunk481073.content,
        children: [this.renderBody(), this.renderForm()]
      }), (0, Chunk54381.jsx)(Chunk481060.mzw, {
        children: this.renderFooter()
      })]
    })
  }
  constructor(e) {
    super(e), O(this, "handleGuildSelect", e => {
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
    }), O(this, "handleChannelSelect", e => {
      this.setState({
        selectedChannelId: e
      })
    }), O(this, "handleFollow", () => {
      let {
        channel: e,
        onClose: t
      } = this.props, {
        selectedChannelId: r,
        selectedGuildId: a
      } = this.state;
      null != r && (this.setState({
        submitting: true
      }), h.Z.createChannelFollower(r, e.id).then(() => {
        d.Z.dispatch({
          type: "CHANNEL_FOLLOWER_CREATED",
          channelId: r,
          guildId: a
        }), t(), (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("21859").then(n.bind(n, 910338));
          return t => (0, l.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                O(e, t, n[t])
              })
            }
            return e
          }({}, t))
        })
      }).catch(e => {
        e.body.code === v.evJ.TOO_MANY_WEBHOOKS ? this.setState({
          errorMessage: M.intl.string(M.t["1eZ4aB"]),
          submitting: false
        }) : this.setState({
          errorMessage: M.intl.string(M.t.LgwhuN),
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
      headerId: (0, m.hQ)("modal")
    }
  }
}
let F = Chunk442837.ZP.connectStores([Chunk430824.Z, Chunk592125.Z, Chunk984933.ZP, Chunk496675.Z, Chunk944486.Z], e => {
  let {
    channel: t
  } = e, n = b.Z.getGuild(t.guild_id), l = b.Z.getGuildsArray().reduce((e, t) => {
    let n = x.ZP.getChannels(t.id).SELECTABLE.map(e => e.channel).filter(e => e.type === v.d4z.GUILD_TEXT && C.Z.can(v.Plq.MANAGE_WEBHOOKS, e)).map(e => {
      let t = f.Z.getChannel(e.parent_id);
      return {
        channel: e,
        category: null != t ? t.name : null
      }
    });
    return n.length > 0 && (e[t.id] = {
      guild: t,
      channels: n
    }), e
  }, {}), r = y.Z.getLastChannelFollowingDestination();
  return {
    guildToFollow: n,
    channelNameToFollow: t.name,
    guilds: l,
    lastChannelFollowingDestination: null != r ? r : {}
  }
}, {
  forwardRef: true
})(w)