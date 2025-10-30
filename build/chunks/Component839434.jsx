/** Chunk was on 63141 **/
/** chunk id: 839434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => es
}), require("./388685.js"), require("./642613.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk872810 = require("./872810.js"),
  Chunk586902 = require("./586902.js"),
  Chunk835473 = require("./835473.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk569545 = require("./569545.js"),
  Chunk914923 = require("./914923.js"),
  Chunk165393 = require("./165393.jsx"),
  Chunk989941 = require("./989941.js"),
  Chunk552282 = require("./552282.js"),
  Chunk345243 = require("./345243.jsx"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk786915 = require("./786915.jsx"),
  Chunk7188 = require("./7188.jsx"),
  Chunk597998 = require("./597998.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk606304 = require("./606304.js"),
  Chunk449224 = require("./449224.js"),
  Chunk938475 = require("./938475.js"),
  Chunk237997 = require("./237997.js"),
  Chunk136015 = require("./136015.js"),
  Chunk51144 = require("./51144.js"),
  Chunk145597 = require("./145597.js"),
  Chunk244073 = require("./244073.jsx"),
  Chunk876205 = require("./876205.jsx"),
  Chunk906037 = require("./906037.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk809357 = require("./809357.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157979 = require("./157979.js");

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
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

function el(e) {
  let {
    flipped: t = false,
    locked: n = false,
    user: i,
    nick: l,
    displayNameMode: c,
    displayUserMode: d,
    size: u = $.ipw.LARGE,
    onClick: h,
    onContextMenu: p,
    context: f,
    guildId: g,
    voiceState: m
  } = e, _ = (0, Q.Z)({
    location: "overlay_voice_widget"
  }), O = (0, s.e7)([G.default], () => G.default.showKeybindIndicators), v = (0, s.e7)([A.default], () => A.default.getId()), b = (0, s.e7)([z.Z], () => z.Z.isLocalMute(i.id)), E = (0, s.e7)([R.Z], () => R.Z.getCurrentUserActiveStream()), S = (0, s.Wu)([R.Z], () => null != E ? R.Z.getViewerIds(E) : []), x = (0, y.Z)({
    userId: i.id,
    context: f
  }), Z = (0, s.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, f)), C = (0, s.e7)([R.Z], () => null != R.Z.getStreamForUser(i.id, g)), j = o.useMemo(() => null != E && E.ownerId !== i.id && S.includes(i.id), [E, i.id, S]);
  if (d === $.OYC.ONLY_WHILE_SPEAKING && n && !x) return null;
  let I = i.id === v,
    {
      mute: P,
      selfMute: w,
      suppress: N,
      deaf: T,
      selfDeaf: D
    } = m,
    L = _ && O,
    M = w && (!I || !L);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.ZP, {
      guildId: g,
      onClick: n ? true : e => null == h ? true : h(e, i),
      onContextMenu: n ? true : e => null == p ? true : p(e, i),
      className: a()(en.voiceUserWrapper, {
        [en.faded]: !x,
        [en.interactive]: !n
      }),
      user: i,
      nick: l,
      speaking: false,
      flipped: t,
      isStreaming: C,
      iconClassName: a()(en.voiceIcon, {
        [en.locked]: n
      }),
      isWatching: j,
      isOverlay: true,
      size: u,
      priority: Z,
      mute: P || M || b,
      localMute: b,
      serverMute: P || N,
      deaf: T || D,
      serverDeaf: T,
      userNameClassName: a()(en.username, {
        [en.locked]: n,
        [en.hidden]: n && (c === $.wC$.NEVER || !x && c === $.wC$.ONLY_WHILE_SPEAKING)
      })
    }), I && L && (0, r.jsx)(X.Z, {
      value: w,
      action: $.kg4.TOGGLE_MUTE,
      shouldShow: !P && !N
    })]
  })
}
class ea extends(i = Chunk647438.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: o,
      isPreviewingInGame: l,
      channel: s,
      anchor: c,
      avatarSizeMode: d
    } = this.props, h = null != Chunk692547.right, p = exports.map(t => {
      var a;
      let {
        user: c,
        voiceState: u,
        member: p
      } = t;
      if (null == c || null == s || null == e) return null;
      let f = o || l;
      return (0, r.jsx)(el, {
        guildId: null == s ? true : s.guild_id,
        user: c,
        nick: null != (a = null == p ? true : p.nick) ? a : H.ZP.getName(c),
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
    return (0, Chunk951288.jsx)(Chunk518084.ZP.Body, {
      className: a()({
        [Chunk477690.Z.VOICE_WIDGET_TOP_MARGIN]: Chunk647438,
        [Chunk157979.lockedContainer]: Chunk647438
      }),
      children: (0, Chunk951288.jsx)(Chunk597998.eJ, {
        className: Chunk157979.voiceList,
        children: Chunk481060
      })
    })
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk518084.ZP.Bar, {
      className: a()(Chunk157979.draggableStartArea, {
        [Chunk157979.preview]: require
      }),
      children: [(0, Chunk951288.jsxs)(Chunk518084.ZP.Content, {
        dynamicSize: true,
        className: a()(Chunk157979.content, {
          [Chunk157979.hidden]: require
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060.Vni, {
          size: "custom",
          color: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: a()(Chunk157979.icon, Chunk157979.faded, Chunk157979.dragIcon)
        }), (0, Chunk951288.jsx)(Chunk481060.gj8, {
          size: "custom",
          color: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: a()(Chunk157979.icon, Chunk157979.faded, Chunk157979.speakerIcon)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          style: {
            color: Chunk692547.Z.unsafe_rawColors.PRIMARY_200.css
          },
          className: Chunk157979.title,
          children: exports
        })]
      }), require ? null : (0, Chunk951288.jsx)(Chunk518084.ZP.Icon, {
        icon: Chunk481060.ewm,
        label: Chunk388032.intl.string(Chunk388032.t.NiTd0e),
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), require ? null : (0, Chunk951288.jsx)(Chunk518084.ZP.Icon, {
        icon: module ? Chunk481060.QVc : Chunk481060.k5M,
        label: module ? Chunk388032.intl.string(Chunk388032.t.cSu80j) : Chunk388032.intl.string(Chunk388032.t.cM8Vnm),
        onClick: this.handlePin,
        tooltipPosition: "left",
        size: 18,
        isActive: module
      })]
    })
  }
  renderStreamerSettings() {
    var e;
    let {
      locked: t,
      pinned: n,
      isPreviewingInGame: i,
      channel: o,
      application: l,
      streamMetadata: s,
      streamApplication: c,
      stream: u
    } = this.props;
    if (exports || null == Chunk477690 || null == Chunk647438) return null;
    let {
      sanitizedTitle: f,
      title: g
    } = (0, Chunk914923.Z)(Chunk442837);
    return (0, Chunk951288.jsx)(Chunk518084.ZP.Bar, {
      className: a()(Chunk157979.streamerControls, {
        [Chunk157979.hidden]: i,
        [Chunk157979.unpinned]: !require
      }),
      children: (0, Chunk951288.jsxs)(Chunk518084.ZP.Content, {
        className: Chunk157979.streamerContent,
        dynamicSize: true,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk157979.streamerInner,
          children: [(null == Chunk692547 ? true : Chunk692547.id) != null && Chunk692547.id === (null == Chunk120356 ? true : Chunk120356.id) ? (0, Chunk951288.jsx)(Chunk925329.Z, {
            className: Chunk157979.gameIcon,
            game: Chunk120356
          }) : (0, Chunk951288.jsx)(Chunk165393.Z, {
            title: Chunk239091
          }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
            direction: Chunk600164.Z.Direction.VERTICAL,
            justify: Chunk600164.Z.Justify.BETWEEN,
            className: Chunk157979.streamerInfo,
            children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
              className: Chunk157979.streaming,
              variant: "text-sm/normal",
              children: Chunk388032.intl.string(Chunk388032.t.XKYej5)
            }), (0, Chunk951288.jsx)(Chunk345243.Z, {
              children: null != (e = null == Chunk692547 ? true : Chunk692547.name) ? module : Chunk765250
            })]
          })]
        }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          grow: 0,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk157979.streamerIconWrapper,
            children: (0, Chunk951288.jsx)(Chunk786915.Z, {
              stream: Chunk477690,
              iconClassName: Chunk157979.streamerIcon,
              appContext: Chunk981631.IlC.OVERLAY
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk157979.streamerIconWrapper,
            children: (0, Chunk951288.jsx)(Chunk7188.Z, {
              stream: Chunk477690,
              appContext: Chunk981631.IlC.OVERLAY
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk157979.streamerIconWrapper,
            children: (0, Chunk951288.jsx)(Chunk28664.u, {
              asContainer: true,
              text: Chunk388032.intl.string(Chunk388032.t.S5anIc),
              children: (0, Chunk951288.jsx)(Chunk755721.zx, {
                onClick: this.handleStopStream,
                look: Chunk755721.zx.Looks.BLANK,
                size: Chunk755721.zx.Sizes.NONE,
                children: (0, Chunk951288.jsx)(Chunk481060.g5r, {
                  size: "md",
                  color: "currentColor",
                  className: Chunk157979.streamerIcon
                })
              })
            })
          })]
        })]
      })
    })
  }
  componentDidMount() {
    (0, Chunk906037.m3)(this.props, this.shouldDisplay())
  }
  componentDidUpdate(e) {
    (0, q.CR)(e, this.props, this.shouldDisplay)
  }
  shouldDisplay() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props,
      {
        context: t,
        locked: n,
        pinned: i,
        sortedVoiceStates: r,
        channel: o
      } = module;
    return 0 !== Chunk951288.length && null != exports && null != Chunk647438 && (!require || !!i)
  }
  render() {
    let {
      context: e,
      lobbyId: t,
      locked: n,
      pinned: i,
      isPreviewingInGame: o,
      channel: l
    } = this.props;
    if (null == Chunk120356 || null == module || !this.shouldDisplay()) return null;
    let s = Chunk981631.t_t.UNPINNED;
    return i && (s = Chunk981631.t_t.PINNED), Chunk647438 && (s = Chunk981631.t_t.IN_GAME_PREVIEW), require && (s = Chunk981631.t_t.IN_GAME), (0, Chunk951288.jsxs)(Chunk518084.ZP, {
      type: Chunk442837,
      width: 380,
      children: [require ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), require ? null : (0, Chunk951288.jsx)(Chunk244073.Z, {
        className: a()({
          [Chunk157979.preview]: Chunk647438
        }),
        contentClassName: a()({
          [Chunk157979.hidden]: Chunk647438
        }),
        channel: Chunk120356,
        lobbyId: exports,
        context: module,
        pinned: i
      })]
    })
  }
  constructor(...e) {
    super(...e), ei(this, "handleUserContextMenu", (e, t) => {
      let {
        context: i
      } = this.props;
      (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, r.jsx)(e, eo(er({}, n), {
          user: t,
          showMediaItems: true,
          mediaEngineContext: i
        }))
      })
    }), ei(this, "handleOpenVoiceSettings", () => {
      let {
        context: e,
        channel: t,
        title: i
      } = this.props;
      (0, p.ZDy)(async () => {
        let {
          default: o
        } = await n.e("51749").then(n.bind(n, 800740));
        return n => (0, r.jsx)(o, eo(er({}, n), {
          mediaEngineContext: e,
          title: null != t ? null : i
        }))
      })
    }), ei(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      m.Z.track($.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null == (e = this.props.channel) ? true : e.guild_id,
        channel_id: null == (t = this.props.channel) ? true : t.id,
        channel_type: null == (n = this.props.channel) ? true : n.type,
        widget_type: $.Odu.VOICE
      });
      let {
        id: r
      } = this.props;
      (0, g.xh)(r)
    }), ei(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      null != e && _.g((0, x.V9)(e))
    })
  }
}

function es(e) {
  var t;
  let n = (0, s.e7)([W.Z, L.Z], () => L.Z.getChannel(W.Z.getVoiceChannelId())),
    i = (0, v.ZP)(n),
    l = function() {
      let [e] = (0, s.e7)([B.ZP, w.Z, W.Z, L.Z], () => {
        let e = L.Z.getChannel(W.Z.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [w.Z.getMutableParticipants(e.id, N.pV.SPEAKER), w.Z.getParticipantsVersion(e.id)] : [B.ZP.getVoiceStatesForChannel(e), B.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], F.Q), t = (0, s.e7)([A.default], () => A.default.getId()), n = (0, Q.Z)({
        location: "voice_widget"
      });
      return o.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? false : +(n.user.id === t)) : e, [e, t, n])
    }(),
    a = (0, s.e7)([R.Z], () => R.Z.getStreamerActiveStreamMetadata()),
    c = (0, s.e7)([E.ZP, U.Z, M.Z], () => {
      var e;
      let t = (0, j.Z)(E.ZP, U.Z);
      return null != t ? null == (e = M.Z.getGameByGameData(t)) ? true : e.id : null
    }),
    d = (0, O.q)(c),
    u = (0, s.cj)([E.ZP, U.Z, R.Z, G.default], () => {
      let e = (0, j.Z)(E.ZP, U.Z),
        t = R.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: G.default.getDisplayUserMode(),
        displayNameMode: G.default.getDisplayNameMode(),
        avatarSizeMode: G.default.getAvatarSizeMode(),
        streamApplication: (null == a ? true : a.pid) === (0, Y.getPID)() ? (0, I.Z)(e) : null,
        stream: t
      }
    });
  return (0, r.jsx)(ea, eo(er(eo(er({}, u), {
    application: d
  }), e), {
    sortedVoiceStates: l,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: a,
    streamApplication: null != (t = u.streamApplication) ? t : {
      id: null,
      name: null == a ? true : a.sourceName
    }
  }))
}
ei(ea, "defaultProps", {
  context: Chunk65154.Yn.DEFAULT
})