/** Chunk was on 66464 **/
/** chunk id: 464035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk857182 = require("./857182.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk915089 = require("./915089.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183759 = require("./183759.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends Chunk64700.PureComponent {
  componentDidMount() {
    C.default.track(O.HAw.OPEN_MODAL, {
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
        return "general" === (0, h.m1)(t, j.default, A.A)
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
      onClose: a
    } = this.props;
    return (0, l.jsxs)(o.ButtonGroup, {
      direction: "horizontal-reverse",
      children: [(0, l.jsx)(o.Button, {
        variant: "primary",
        text: v.intl.string(v.t["3aOv+h"]),
        loading: n,
        onClick: this.handleFollow,
        disabled: null == e || null == t
      }), (0, l.jsx)(o.Button, {
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: a
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
      errorMessage: r
    } = this.state, s = y.default.keys(e).map(t => {
      let {
        guild: n
      } = e[t];
      return {
        id: t,
        value: t,
        label: n.name,
        leading: null == n ? null : (0, l.jsx)(m.A, {
          guild: n,
          size: m.A.Sizes.MINI
        })
      }
    }), i = t.map(e => {
      let {
        channel: t
      } = e;
      return {
        id: t.id,
        value: t.id,
        label: (0, h.m1)(t, j.default, A.A),
        leading: function(e) {
          if (null == e) return null;
          let t = (0, u.gU)(e);
          return null != t && (0, l.jsx)(t, {
            size: "xs",
            color: "currentColor",
            className: w.Kk
          })
        }(t)
      }
    }), d = 0 === s.length, c = d ? v.intl.string(v.t["6b6QoF"]) : v.intl.string(v.t.Z0quyN);
    return (0, l.jsxs)(o.BJc, {
      gap: 16,
      children: [(0, l.jsx)(o.ZiE, {
        selectionMode: "single",
        label: v.intl.string(v.t.xFn72s),
        value: n,
        options: s,
        disabled: d,
        onSelectionChange: e => this.handleGuildSelect(e)
      }), (0, l.jsx)(o.ZiE, {
        selectionMode: "single",
        label: v.intl.string(v.t.PDn2fR),
        value: a,
        options: i,
        disabled: 0 === i.length,
        onSelectionChange: e => this.handleChannelSelect(e)
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: d || null != r ? "text-feedback-critical" : "text-muted",
        className: w.ML,
        children: null != r ? r : c
      })]
    })
  }
  renderBody() {
    let {
      channel: {
        nsfw: e
      }
    } = this.props;
    return (0, l.jsxs)("div", {
      className: w.rf,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        id: this.state.headerId,
        children: v.intl.string(v.t.mvPFbA)
      }), (0, l.jsx)(o.Text, {
        color: "text-muted",
        className: s()(w.O1, {
          [w.lK]: !e
        }),
        variant: "text-sm/normal",
        children: v.intl.string(v.t.kbpkxJ)
      }), e ? (0, l.jsx)(o.Text, {
        className: s()(w.lK, w.O1),
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: v.intl.string(v.t["DrNm/5"])
      }) : null]
    })
  }
  renderHeader() {
    var e;
    let {
      guildToFollow: t,
      channelNameToFollow: n,
      channel: a
    } = this.props, r = null != (e = (0, u.gU)(a)) ? e : o.koX;
    return (0, l.jsxs)(o.rQ0, {
      className: w.wx,
      children: [(0, l.jsx)(m.A, {
        guild: t,
        size: m.A.Sizes.LARGE
      }), (0, l.jsx)("div", {
        className: w.nU,
        children: (0, l.jsxs)("div", {
          className: w.Ix,
          children: [(0, l.jsx)(r, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: w.p
          }), (0, l.jsx)(o.Text, {
            variant: "text-md/medium",
            className: w.HA,
            children: n
          })]
        })
      })]
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, l.jsxs)(o.EOs, {
      transitionState: e,
      "aria-labelledby": this.state.headerId,
      parentComponent: "FollowModal",
      children: [this.renderHeader(), (0, l.jsxs)(o.$mQ, {
        className: w.Qs,
        children: [this.renderBody(), this.renderForm()]
      }), (0, l.jsx)(o.jlY, {
        children: this.renderFooter()
      })]
    })
  }
  constructor(e) {
    super(e), N(this, "handleGuildSelect", e => {
      let {
        guilds: t
      } = this.props, {
        selectedGuildId: n
      } = this.state, l = t[e].channels, a = this.getDefaultChannelId(l);
      n !== e && this.setState({
        selectedGuildId: e,
        selectedChannelId: a,
        channels: l
      })
    }), N(this, "handleChannelSelect", e => {
      this.setState({
        selectedChannelId: e
      })
    }), N(this, "handleFollow", () => {
      let {
        channel: e,
        onClose: t
      } = this.props, {
        selectedChannelId: a,
        selectedGuildId: r
      } = this.state;
      null != a && (this.setState({
        submitting: true
      }), c.A.createChannelFollower(a, e.id).then(() => {
        d.h.dispatch({
          type: "CHANNEL_FOLLOWER_CREATED",
          channelId: a,
          guildId: r
        }), t(), (0, o.mMO)(async () => {
          let {
            default: e
          } = await n.e("9795").then(n.bind(n, 993390));
          return t => (0, l.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                N(e, t, n[t])
              })
            }
            return e
          }({}, t))
        })
      }).catch(e => {
        e.body.code === O.t02.TOO_MANY_WEBHOOKS ? this.setState({
          errorMessage: v.intl.string(v.t["1eZ4aB"]),
          submitting: false
        }) : this.setState({
          errorMessage: v.intl.string(v.t.LgwhuN),
          submitting: false
        })
      }))
    });
    const {
      guilds: t,
      lastChannelFollowingDestination: a
    } = e, {
      guildId: r,
      channelId: s
    } = a;
    this.state = {
      selectedGuildId: r,
      selectedChannelId: s,
      channels: null != r && null != t[r] ? t[r].channels : [],
      errorMessage: null,
      submitting: false,
      headerId: (0, g.Ld)("modal")
    }
  }
}
let E = Chunk311907.Ay.connectStores([Chunk71393.A, Chunk734057.A, Chunk808728.Ay, Chunk576705.A, Chunk309010.A], e => {
  let {
    channel: t
  } = e, n = _.A.getGuild(t.guild_id), l = _.A.getGuildsArray().reduce((e, t) => {
    let n = x.Ay.getChannels(t.id).SELECTABLE.map(e => e.channel).filter(e => e.type === O.rbe.GUILD_TEXT && b.A.can(O.xBc.MANAGE_WEBHOOKS, e)).map(e => {
      let t = p.A.getChannel(e.parent_id);
      return {
        channel: e,
        category: null != t ? t.name : null
      }
    });
    return n.length > 0 && (e[t.id] = {
      guild: t,
      channels: n
    }), e
  }, {}), a = f.A.getLastChannelFollowingDestination();
  return {
    guildToFollow: n,
    channelNameToFollow: t.name,
    guilds: l,
    lastChannelFollowingDestination: null != a ? a : {}
  }
}, {
  forwardRef: true
})(S)