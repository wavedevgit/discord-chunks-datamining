/** Chunk was on 84018 **/
/** chunk id: 61714, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => eo
}), require("./896048.js"), require("./638769.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk401843 = require("./401843.js"),
  Chunk717558 = require("./717558.js"),
  Chunk429913 = require("./429913.js"),
  Chunk47167 = require("./47167.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk15285 = require("./15285.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk652896 = require("./652896.js"),
  Chunk277680 = require("./277680.js"),
  Chunk118277 = require("./118277.jsx"),
  Chunk905552 = require("./905552.js"),
  Chunk22705 = require("./22705.js"),
  Chunk994314 = require("./994314.jsx"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk520006 = require("./520006.jsx"),
  Chunk352018 = require("./352018.jsx"),
  Chunk481947 = require("./481947.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk485296 = require("./485296.js"),
  Chunk157257 = require("./157257.js"),
  Chunk607567 = require("./607567.js"),
  Chunk256415 = require("./256415.js"),
  Chunk996439 = require("./996439.js"),
  Chunk427262 = require("./427262.js"),
  Chunk9302 = require("./9302.js"),
  Chunk31284 = require("./31284.jsx"),
  Chunk74441 = require("./74441.jsx"),
  Chunk799808 = require("./799808.js"),
  Chunk855790 = require("./855790.jsx"),
  Chunk994322 = require("./994322.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk279952 = require("./279952.js");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function es(e) {
  let {
    flipped: t = false,
    locked: n = false,
    user: i,
    nick: l,
    displayNameMode: c,
    displayUserMode: d,
    size: u = q.OSZ.LARGE,
    onClick: h,
    onContextMenu: p,
    context: f,
    guildId: g,
    voiceState: y
  } = e, m = (0, Q.A)({
    location: "overlay_voice_widget"
  }), b = (0, a.bG)([H.default], () => H.default.showKeybindIndicators), O = (0, a.bG)([k.default], () => k.default.getId()), _ = (0, a.bG)([G.A], () => G.A.isLocalMute(i.id)), v = (0, a.bG)([R.A], () => R.A.getCurrentUserActiveStream()), E = (0, a.yK)([R.A], () => null != v ? R.A.getViewerIds(v) : []), x = (0, A.A)({
    userId: i.id,
    context: f
  }), S = (0, a.bG)([V.A], () => V.A.isPrioritySpeaker(i.id, f)), j = (0, a.bG)([R.A], () => null != R.A.getStreamForUser(i.id, g)), I = s.useMemo(() => null != v && v.ownerId !== i.id && E.includes(i.id), [v, i.id, E]);
  if (d === q.f5z.ONLY_WHILE_SPEAKING && n && !x) return null;
  let C = i.id === O,
    {
      mute: w,
      selfMute: N,
      suppress: T,
      deaf: P,
      selfDeaf: L
    } = y,
    M = m && b,
    U = N && (!C || !M);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(D.Ay, {
      guildId: g,
      onClick: n ? true : e => null == h ? true : h(e, i),
      onContextMenu: n ? true : e => null == p ? true : p(e, i),
      className: o()(et.TX, {
        [et.zj]: !x,
        [et.bG]: !n
      }),
      user: i,
      nick: l,
      speaking: false,
      flipped: t,
      isStreaming: j,
      iconClassName: o()(et.Ow, {
        [et.xt]: n
      }),
      isWatching: I,
      isOverlay: true,
      size: u,
      priority: S,
      mute: w || U || _,
      localMute: _,
      serverMute: w || T,
      deaf: P || L,
      serverDeaf: P,
      userNameClassName: o()(et.Xh, {
        [et.xt]: n,
        [et.R]: n && (c === q.pwA.NEVER || !x && c === q.pwA.ONLY_WHILE_SPEAKING)
      })
    }), C && M && (0, r.jsx)(Z.A, {
      value: N,
      action: q.hCu.TOGGLE_MUTE,
      shouldShow: !w && !T
    })]
  })
}
class el extends(i = Chunk64700.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: s,
      isPreviewingInGame: l,
      channel: a,
      anchor: c,
      avatarSizeMode: d
    } = this.props, h = null != c.right, p = t.map(t => {
      var o;
      let {
        user: c,
        voiceState: u,
        member: p
      } = t;
      if (null == c || null == a || null == e) return null;
      let f = s || l;
      return (0, r.jsx)(es, {
        guildId: null == a ? true : a.guild_id,
        user: c,
        nick: null != (o = null == p ? true : p.nick) ? o : B.Ay.getName(c),
        flipped: h,
        voiceState: u,
        displayNameMode: n,
        displayUserMode: i,
        size: d,
        locked: f,
        onContextMenu: this.handleUserContextMenu,
        onClick: this.handleUserContextMenu,
        context: e
      }, c.id)
    });
    return (0, r.jsx)(X.Ay.Body, {
      className: o()({
        [u.A.VOICE_WIDGET_TOP_MARGIN]: s,
        [et.mn]: s
      }),
      children: (0, r.jsx)(D.Wr, {
        className: et.tA,
        children: p
      })
    })
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return (0, r.jsxs)(X.Ay.Bar, {
      className: o()(et.bl, {
        [et.VH]: n
      }),
      children: [(0, r.jsxs)(X.Ay.Content, {
        dynamicSize: true,
        className: o()(et.Qs, {
          [et.R]: n
        }),
        children: [(0, r.jsx)(h.WP0, {
          size: "custom",
          color: c.A.unsafe_rawColors.WHITE.css,
          width: 20,
          height: 20,
          className: o()(et.Kk, et.zj, et.co)
        }), (0, r.jsx)(h.HKD, {
          size: "custom",
          color: c.A.unsafe_rawColors.WHITE.css,
          width: 20,
          height: 20,
          className: o()(et.Kk, et.zj, et.Xk)
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          style: {
            color: c.A.unsafe_rawColors.PRIMARY_200.css
          },
          className: et.DD,
          children: t
        })]
      }), n ? null : (0, r.jsx)(X.Ay.Icon, {
        icon: h.Zes,
        label: ee.intl.string(ee.t.NiTd0e),
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), n ? null : (0, r.jsx)(X.Ay.Icon, {
        icon: e ? h.hl9 : h.qgw,
        label: e ? ee.intl.string(ee.t.cSu80j) : ee.intl.string(ee.t.cM8Vnm),
        onClick: this.handlePin,
        tooltipPosition: "left",
        size: 18,
        isActive: e
      })]
    })
  }
  renderStreamerSettings() {
    var e;
    let {
      locked: t,
      pinned: n,
      isPreviewingInGame: i,
      channel: s,
      application: l,
      streamMetadata: a,
      streamApplication: c,
      stream: u
    } = this.props;
    if (t || null == u || null == s) return null;
    let {
      sanitizedTitle: p,
      title: f
    } = (0, x.A)(a);
    return (0, r.jsx)(X.Ay.Bar, {
      className: o()(et.Wm, {
        [et.R]: i,
        [et.CW]: !n
      }),
      children: (0, r.jsxs)(X.Ay.Content, {
        className: et.Vb,
        dynamicSize: true,
        children: [(0, r.jsxs)("div", {
          className: et.gk,
          children: [(null == c ? true : c.id) != null && c.id === (null == l ? true : l.id) ? (0, r.jsx)(v.A, {
            className: et.Gt,
            game: l
          }) : (0, r.jsx)(S.A, {
            title: p
          }), (0, r.jsxs)(O.A, {
            direction: O.A.Direction.VERTICAL,
            justify: O.A.Justify.BETWEEN,
            className: et.gA,
            children: [(0, r.jsx)(h.Text, {
              className: et.$A,
              variant: "text-sm/normal",
              children: ee.intl.string(ee.t.XKYej5)
            }), (0, r.jsx)(C.A, {
              children: null != (e = null == c ? true : c.name) ? e : f
            })]
          })]
        }), (0, r.jsxs)(O.A, {
          grow: 0,
          children: [(0, r.jsx)("div", {
            className: et.yf,
            children: (0, r.jsx)(T.A, {
              stream: u,
              iconClassName: et.Nd,
              appContext: q.BRT.OVERLAY
            })
          }), (0, r.jsx)("div", {
            className: et.yf,
            children: (0, r.jsx)(P.A, {
              stream: u,
              appContext: q.BRT.OVERLAY
            })
          }), (0, r.jsx)("div", {
            className: et.yf,
            children: (0, r.jsx)(d.m, {
              asContainer: true,
              text: ee.intl.string(ee.t.S5anIc),
              children: (0, r.jsx)(h.DUT, {
                onClick: this.handleStopStream,
                "aria-label": ee.intl.string(ee.t.S5anIc),
                children: (0, r.jsx)(h.GT3, {
                  size: "md",
                  color: "currentColor",
                  className: et.Nd
                })
              })
            })
          })]
        })]
      })
    })
  }
  componentDidMount() {
    (0, J.j_)(this.props, this.shouldDisplay())
  }
  componentDidUpdate(e) {
    (0, J.Mw)(e, this.props, this.shouldDisplay)
  }
  shouldDisplay() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props,
      {
        context: t,
        locked: n,
        pinned: i,
        sortedVoiceStates: r,
        channel: s
      } = e;
    return 0 !== r.length && null != t && null != s && (!n || !!i)
  }
  render() {
    let {
      context: e,
      lobbyId: t,
      locked: n,
      pinned: i,
      isPreviewingInGame: s,
      channel: l
    } = this.props;
    if (null == l || null == e || !this.shouldDisplay()) return null;
    let a = q.UVF.UNPINNED;
    return i && (a = q.UVF.PINNED), s && (a = q.UVF.IN_GAME_PREVIEW), n && (a = q.UVF.IN_GAME), (0, r.jsxs)(X.Ay, {
      type: a,
      width: 380,
      children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, r.jsx)(F.A, {
        className: o()({
          [et.VH]: s
        }),
        contentClassName: o()({
          [et.R]: s
        }),
        channel: l,
        lobbyId: t,
        context: e,
        pinned: i
      })]
    })
  }
  constructor(...e) {
    super(...e), en(this, "handleUserContextMenu", (e, t) => {
      let {
        context: i
      } = this.props;
      (0, p.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(n.bind(n, 668569));
        return n => (0, r.jsx)(e, er(ei({}, n), {
          user: t,
          showMediaItems: true,
          mediaEngineContext: i
        }))
      })
    }), en(this, "handleOpenVoiceSettings", () => {
      let {
        context: e,
        channel: t,
        title: i
      } = this.props;
      (0, h.mMO)(async () => {
        let {
          default: s
        } = await n.e("96531").then(n.bind(n, 880510));
        return n => (0, r.jsx)(s, er(ei({}, n), {
          mediaEngineContext: e,
          subtitle: null != t ? true : i
        }))
      })
    }), en(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      g.A.track(q.HAw.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null == (e = this.props.channel) ? true : e.guild_id,
        channel_id: null == (t = this.props.channel) ? true : t.id,
        channel_type: null == (n = this.props.channel) ? true : n.type,
        widget_type: q.uss.VOICE
      });
      let {
        id: r
      } = this.props;
      (0, f.v0)(r)
    }), en(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      null != e && y.vN((0, E._z)(e))
    })
  }
}

function eo(e) {
  var t;
  let n = (0, a.bG)([U.A, L.A], () => L.A.getChannel(U.A.getVoiceChannelId())),
    i = (0, b.Ay)(n),
    l = function() {
      let [e] = (0, a.bG)([K.Ay, w.A, U.A, L.A], () => {
        let e = L.A.getChannel(U.A.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [w.A.getMutableParticipants(e.id, N.ip.SPEAKER), w.A.getParticipantsVersion(e.id)] : [K.Ay.getVoiceStatesForChannel(e), K.Ay.getVoiceStateVersion(e.getGuildId())]
      }, [], W.D), t = (0, a.bG)([k.default], () => k.default.getId()), n = (0, Q.A)({
        location: "voice_widget"
      });
      return s.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? false : +(n.user.id === t)) : e, [e, t, n])
    }(),
    o = (0, a.bG)([R.A], () => R.A.getStreamerActiveStreamMetadata()),
    c = (0, a.bG)([_.Ay, z.A, M.A], () => {
      var e;
      let t = (0, j.A)(_.Ay, z.A);
      return null != t ? null == (e = M.A.getGameByGameData(t)) ? true : e.id : null
    }),
    d = (0, m.h)(c),
    u = (0, a.cf)([_.Ay, z.A, R.A, H.default], () => {
      let e = (0, j.A)(_.Ay, z.A),
        t = R.A.getCurrentUserActiveStream();
      return {
        displayUserMode: H.default.getDisplayUserMode(),
        displayNameMode: H.default.getDisplayNameMode(),
        avatarSizeMode: H.default.getAvatarSizeMode(),
        streamApplication: (null == o ? true : o.pid) === (0, Y.getPID)() ? (0, I.A)(e) : null,
        stream: t
      }
    });
  return (0, r.jsx)(el, er(ei(er(ei({}, u), {
    application: d
  }), e), {
    sortedVoiceStates: l,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: o,
    streamApplication: null != (t = u.streamApplication) ? t : {
      id: null,
      name: null == o ? true : o.sourceName
    }
  }))
}
en(el, "defaultProps", {
  context: Chunk731854.x.DEFAULT
})