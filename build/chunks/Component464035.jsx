/** Chunk was on 66464 **/
/** chunk id: 464035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk64700.PureComponent {
  componentDidMount() {
    y.default.track(v.HAw.OPEN_MODAL, {
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
        return "general" === (0, u.m1)(t, C.default, A.A)
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
      onClose: s
    } = this.props;
    return (0, l.jsxs)(d.ButtonGroup, {
      direction: "horizontal-reverse",
      children: [(0, l.jsx)(d.Button, {
        variant: "primary",
        text: w.intl.string(w.t["3aOv+h"]),
        loading: n,
        onClick: this.handleFollow,
        disabled: null == e || null == t
      }), (0, l.jsx)(d.Button, {
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oC"]),
        onClick: s
      })]
    })
  }
  renderForm() {
    let {
      guilds: e
    } = this.props, {
      channels: t,
      selectedGuildId: n,
      selectedChannelId: s,
      errorMessage: r
    } = this.state, a = O.default.keys(e).map(t => {
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
        label: (0, u.m1)(t, C.default, A.A),
        leading: function(e) {
          if (null == e) return null;
          let t = (0, h.gU)(e);
          return null != t && (0, l.jsx)(t, {
            size: "xs",
            color: "currentColor",
            className: N.Kk
          })
        }(t)
      }
    }), o = 0 === a.length, c = o ? w.intl.string(w.t["6b6QoF"]) : w.intl.string(w.t.Z0quyN);
    return (0, l.jsxs)(d.BJc, {
      gap: 16,
      children: [(0, l.jsx)(d.ZiE, {
        selectionMode: "single",
        label: w.intl.string(w.t.xFn72s),
        value: n,
        options: a,
        disabled: o,
        onSelectionChange: e => this.handleGuildSelect(e)
      }), (0, l.jsx)(d.ZiE, {
        selectionMode: "single",
        label: w.intl.string(w.t.PDn2fR),
        value: s,
        options: i,
        disabled: 0 === i.length,
        onSelectionChange: e => this.handleChannelSelect(e)
      }), (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: o || null != r ? "text-feedback-critical" : "text-muted",
        className: N.ML,
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
      className: N.rf,
      children: [(0, l.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        id: this.state.headerId,
        children: w.intl.string(w.t.mvPFbA)
      }), (0, l.jsx)(d.Text, {
        color: "text-muted",
        className: a()(N.O1, {
          [N.lK]: !e
        }),
        variant: "text-sm/normal",
        children: w.intl.string(w.t.kbpkxJ)
      }), e ? (0, l.jsx)(d.Text, {
        className: a()(N.lK, N.O1),
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: w.intl.string(w.t["DrNm/5"])
      }) : null]
    })
  }
  renderHeader() {
    var e;
    let {
      guildToFollow: t,
      channelNameToFollow: n,
      channel: s
    } = this.props, r = null != (e = (0, h.gU)(s)) ? e : d.koX;
    return (0, l.jsxs)(d.rQ0, {
      className: N.wx,
      children: [(0, l.jsx)(m.A, {
        guild: t,
        size: m.A.Sizes.LARGE
      }), (0, l.jsx)("div", {
        className: N.nU,
        children: (0, l.jsxs)("div", {
          className: N.Ix,
          children: [(0, l.jsx)(r, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: N.p
          }), (0, l.jsx)(d.Text, {
            variant: "text-md/medium",
            className: N.HA,
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
    return (0, l.jsxs)(d.EOs, {
      transitionState: e,
      "aria-labelledby": this.state.headerId,
      parentComponent: "FollowModal",
      children: [this.renderHeader(), (0, l.jsxs)(d.$mQ, {
        className: N.Qs,
        children: [this.renderBody(), this.renderForm()]
      }), (0, l.jsx)(d.jlY, {
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
      } = this.state, l = t[e].channels, s = this.getDefaultChannelId(l);
      n !== e && this.setState({
        selectedGuildId: e,
        selectedChannelId: s,
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
        selectedChannelId: s,
        selectedGuildId: r
      } = this.state;
      null != s && (this.setState({
        submitting: true
      }), c.A.createChannelFollower(s, e.id).then(() => {
        o.h.dispatch({
          type: "CHANNEL_FOLLOWER_CREATED",
          channelId: s,
          guildId: r
        }), t(), (0, d.mMO)(async () => {
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
                S(e, t, n[t])
              })
            }
            return e
          }({}, t))
        })
      }).catch(e => {
        e.body.code === v.t02.TOO_MANY_WEBHOOKS ? this.setState({
          errorMessage: w.intl.string(w.t["1eZ4aB"]),
          submitting: false
        }) : this.setState({
          errorMessage: w.intl.string(w.t.LgwhuN),
          submitting: false
        })
      }))
    });
    const {
      guilds: t,
      lastChannelFollowingDestination: s
    } = e, {
      guildId: r,
      channelId: a
    } = s;
    this.state = {
      selectedGuildId: r,
      selectedChannelId: a,
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
  } = e, n = x.A.getGuild(t.guild_id), l = x.A.getGuildsArray().reduce((e, t) => {
    let n = f.Ay.getChannels(t.id).SELECTABLE.map(e => e.channel).filter(e => e.type === v.rbe.GUILD_TEXT && b.A.can(v.xBc.MANAGE_WEBHOOKS, e)).map(e => {
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
  }, {}), s = j.A.getLastChannelFollowingDestination();
  return {
    guildToFollow: n,
    channelNameToFollow: t.name,
    guilds: l,
    lastChannelFollowingDestination: null != s ? s : {}
  }
}, {
  forwardRef: true
})(_)