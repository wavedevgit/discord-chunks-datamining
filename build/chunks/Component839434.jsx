/** Chunk was on 63141 **/
/** chunk id: 839434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./388685.js"), require("./642613.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk662304 = require("./662304.jsx"),
  Chunk989941 = require("./989941.js"),
  Chunk552282 = require("./552282.js"),
  Chunk582642 = require("./582642.jsx"),
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
  Chunk226833 = require("./226833.js");

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

function es(e) {
  let {
    flipped: t = false,
    locked: n = false,
    user: i,
    nick: s,
    displayNameMode: c,
    displayUserMode: d,
    size: u = $.ipw.LARGE,
    onClick: p,
    onContextMenu: h,
    context: f,
    guildId: g,
    voiceState: m
  } = e, _ = (0, Q.Z)({
    location: "overlay_voice_widget"
  }), b = (0, a.e7)([G.default], () => G.default.showKeybindIndicators), v = (0, a.e7)([A.default], () => A.default.getId()), O = (0, a.e7)([z.Z], () => z.Z.isLocalMute(i.id)), x = (0, a.e7)([R.Z], () => R.Z.getCurrentUserActiveStream()), E = (0, a.Wu)([R.Z], () => null != x ? R.Z.getViewerIds(x) : []), S = (0, y.Z)({
    userId: i.id,
    context: f
  }), C = (0, a.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, f)), Z = (0, a.e7)([R.Z], () => null != R.Z.getStreamForUser(i.id, g)), j = o.useMemo(() => null != x && x.ownerId !== i.id && E.includes(i.id), [x, i.id, E]);
  if (d === $.OYC.ONLY_WHILE_SPEAKING && n && !S) return null;
  let I = i.id === v,
    {
      mute: P,
      selfMute: w,
      suppress: T,
      deaf: N,
      selfDeaf: D
    } = m,
    L = _ && b,
    M = w && (!I || !L);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(k.ZP, {
      guildId: g,
      onClick: n ? true : e => null == p ? true : p(e, i),
      onContextMenu: n ? true : e => null == h ? true : h(e, i),
      className: l()(en.voiceUserWrapper, {
        [en.faded]: !S,
        [en.interactive]: !n
      }),
      user: i,
      nick: s,
      speaking: false,
      flipped: t,
      isStreaming: Z,
      iconClassName: l()(en.voiceIcon, {
        [en.locked]: n
      }),
      isWatching: j,
      isOverlay: true,
      size: u,
      priority: C,
      mute: P || M || O,
      localMute: O,
      serverMute: P || T,
      deaf: N || D,
      serverDeaf: N,
      userNameClassName: l()(en.username, {
        [en.locked]: n,
        [en.hidden]: n && (c === $.wC$.NEVER || !S && c === $.wC$.ONLY_WHILE_SPEAKING)
      })
    }), I && L && (0, r.jsx)(X.Z, {
      value: w,
      action: $.kg4.TOGGLE_MUTE,
      shouldShow: !P && !T
    })]
  })
}
class el extends(i = Chunk647438.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: o,
      isPreviewingInGame: s,
      channel: a,
      anchor: c,
      avatarSizeMode: d
    } = this.props, p = null != Chunk692547.right, h = exports.map(t => {
      var l;
      let {
        user: c,
        voiceState: u,
        member: h
      } = t;
      if (null == c || null == a || null == e) return null;
      let f = o || s;
      return (0, r.jsx)(es, {
        guildId: null == a ? true : a.guild_id,
        user: c,
        nick: null != (l = null == h ? true : h.nick) ? l : H.ZP.getName(c),
        flipped: p,
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
      className: l()({
        [Chunk477690.Z.VOICE_WIDGET_TOP_MARGIN]: Chunk647438,
        [Chunk226833.lockedContainer]: Chunk647438
      }),
      children: (0, Chunk951288.jsx)(Chunk597998.eJ, {
        className: Chunk226833.voiceList,
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
      className: l()(Chunk226833.draggableStartArea, {
        [Chunk226833.preview]: require
      }),
      children: [(0, Chunk951288.jsxs)(Chunk518084.ZP.Content, {
        dynamicSize: true,
        className: l()(Chunk226833.content, {
          [Chunk226833.hidden]: require
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060.Vni, {
          size: "custom",
          color: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: l()(Chunk226833.icon, Chunk226833.faded, Chunk226833.dragIcon)
        }), (0, Chunk951288.jsx)(Chunk481060.gj8, {
          size: "custom",
          color: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: l()(Chunk226833.icon, Chunk226833.faded, Chunk226833.speakerIcon)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          style: {
            color: Chunk692547.Z.unsafe_rawColors.PRIMARY_200.css
          },
          className: Chunk226833.title,
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
      application: s,
      streamMetadata: a,
      streamApplication: c,
      stream: u
    } = this.props;
    if (exports || null == Chunk477690 || null == Chunk647438) return null;
    let {
      sanitizedTitle: f,
      title: g
    } = (0, Chunk914923.Z)(Chunk442837);
    return (0, Chunk951288.jsx)(Chunk518084.ZP.Bar, {
      className: l()(Chunk226833.streamerControls, {
        [Chunk226833.hidden]: i,
        [Chunk226833.unpinned]: !require
      }),
      children: (0, Chunk951288.jsxs)(Chunk518084.ZP.Content, {
        className: Chunk226833.streamerContent,
        dynamicSize: true,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk226833.streamerInner,
          children: [(null == Chunk692547 ? true : Chunk692547.id) != null && Chunk692547.id === (null == Chunk120356 ? true : Chunk120356.id) ? (0, Chunk951288.jsx)(Chunk925329.Z, {
            className: Chunk226833.gameIcon,
            game: Chunk120356
          }) : (0, Chunk951288.jsx)(Chunk662304.Z, {
            title: Chunk239091
          }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
            direction: Chunk600164.Z.Direction.VERTICAL,
            justify: Chunk600164.Z.Justify.BETWEEN,
            className: Chunk226833.streamerInfo,
            children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
              className: Chunk226833.streaming,
              variant: "text-sm/normal",
              children: Chunk388032.intl.string(Chunk388032.t.XKYej5)
            }), (0, Chunk951288.jsx)(Chunk582642.Z, {
              children: null != (e = null == Chunk692547 ? true : Chunk692547.name) ? module : Chunk765250
            })]
          })]
        }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          grow: 0,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk226833.streamerIconWrapper,
            children: (0, Chunk951288.jsx)(Chunk786915.Z, {
              stream: Chunk477690,
              iconClassName: Chunk226833.streamerIcon,
              appContext: Chunk981631.IlC.OVERLAY
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk226833.streamerIconWrapper,
            children: (0, Chunk951288.jsx)(Chunk7188.Z, {
              stream: Chunk477690,
              appContext: Chunk981631.IlC.OVERLAY
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk226833.streamerIconWrapper,
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
                  className: Chunk226833.streamerIcon
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
      channel: s
    } = this.props;
    if (null == Chunk120356 || null == module || !this.shouldDisplay()) return null;
    let a = Chunk981631.t_t.UNPINNED;
    return i && (a = Chunk981631.t_t.PINNED), Chunk647438 && (a = Chunk981631.t_t.IN_GAME_PREVIEW), require && (a = Chunk981631.t_t.IN_GAME), (0, Chunk951288.jsxs)(Chunk518084.ZP, {
      type: Chunk442837,
      width: 380,
      children: [require ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), require ? null : (0, Chunk951288.jsx)(Chunk244073.Z, {
        className: l()({
          [Chunk226833.preview]: Chunk647438
        }),
        contentClassName: l()({
          [Chunk226833.hidden]: Chunk647438
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
      (0, h.ZDy)(async () => {
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
      null != e && _.g((0, S.V9)(e))
    })
  }
}

function ea(e) {
  var t;
  let n = (0, a.e7)([W.Z, L.Z], () => L.Z.getChannel(W.Z.getVoiceChannelId())),
    i = (0, v.ZP)(n),
    s = function() {
      let [e] = (0, a.e7)([B.ZP, w.Z, W.Z, L.Z], () => {
        let e = L.Z.getChannel(W.Z.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [w.Z.getMutableParticipants(e.id, T.pV.SPEAKER), w.Z.getParticipantsVersion(e.id)] : [B.ZP.getVoiceStatesForChannel(e), B.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], F.Q), t = (0, a.e7)([A.default], () => A.default.getId()), n = (0, Q.Z)({
        location: "voice_widget"
      });
      return o.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? false : +(n.user.id === t)) : e, [e, t, n])
    }(),
    l = (0, a.e7)([R.Z], () => R.Z.getStreamerActiveStreamMetadata()),
    c = (0, a.e7)([x.ZP, U.Z, M.Z], () => {
      var e;
      let t = (0, j.Z)(x.ZP, U.Z);
      return null != t ? null == (e = M.Z.getGameByGameData(t)) ? true : e.id : null
    }),
    d = (0, b.q)(c),
    u = (0, a.cj)([x.ZP, U.Z, R.Z, G.default], () => {
      let e = (0, j.Z)(x.ZP, U.Z),
        t = R.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: G.default.getDisplayUserMode(),
        displayNameMode: G.default.getDisplayNameMode(),
        avatarSizeMode: G.default.getAvatarSizeMode(),
        streamApplication: (null == l ? true : l.pid) === (0, Y.getPID)() ? (0, I.Z)(e) : null,
        stream: t
      }
    });
  return (0, r.jsx)(el, eo(er(eo(er({}, u), {
    application: d
  }), e), {
    sortedVoiceStates: s,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: l,
    streamApplication: null != (t = u.streamApplication) ? t : {
      id: null,
      name: null == l ? true : l.sourceName
    }
  }))
}
ei(el, "defaultProps", {
  context: Chunk65154.Yn.DEFAULT
})