/** Chunk was on 63141 **/
/** chunk id: 839434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => el
}), require("./388685.js"), require("./642613.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk477690 = require("./477690.js"),
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
  Chunk226833 = require("./226833.js");

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
    nick: o,
    displayNameMode: c,
    displayUserMode: d,
    size: u = Q.ipw.LARGE,
    onClick: h,
    onContextMenu: p,
    context: f,
    guildId: g,
    voiceState: m
  } = e, b = (0, J.Z)({
    location: "overlay_voice_widget"
  }), _ = (0, a.e7)([G.default], () => G.default.showKeybindIndicators), v = (0, a.e7)([R.default], () => R.default.getId()), O = (0, a.e7)([M.Z], () => M.Z.isLocalMute(i.id)), E = (0, a.e7)([k.Z], () => k.Z.getCurrentUserActiveStream()), x = (0, a.Wu)([k.Z], () => null != E ? k.Z.getViewerIds(E) : []), S = (0, y.Z)({
    userId: i.id,
    context: f
  }), Z = (0, a.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, f)), j = (0, a.e7)([k.Z], () => null != k.Z.getStreamForUser(i.id, g)), C = s.useMemo(() => null != E && E.ownerId !== i.id && x.includes(i.id), [E, i.id, x]);
  if (d === Q.OYC.ONLY_WHILE_SPEAKING && n && !S) return null;
  let I = i.id === v,
    {
      mute: P,
      selfMute: w,
      suppress: T,
      deaf: N,
      selfDeaf: A
    } = m,
    L = b && _,
    z = w && (!I || !L);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(D.ZP, {
      guildId: g,
      onClick: n ? true : e => null == h ? true : h(e, i),
      onContextMenu: n ? true : e => null == p ? true : p(e, i),
      className: l()(et.voiceUserWrapper, {
        [et.faded]: !S,
        [et.interactive]: !n
      }),
      user: i,
      nick: o,
      speaking: false,
      flipped: t,
      isStreaming: j,
      iconClassName: l()(et.voiceIcon, {
        [et.locked]: n
      }),
      isWatching: C,
      isOverlay: true,
      size: u,
      priority: Z,
      mute: P || z || O,
      localMute: O,
      serverMute: P || T,
      deaf: N || A,
      serverDeaf: N,
      userNameClassName: l()(et.username, {
        [et.locked]: n,
        [et.hidden]: n && (c === Q.wC$.NEVER || !S && c === Q.wC$.ONLY_WHILE_SPEAKING)
      })
    }), I && L && (0, r.jsx)(K.Z, {
      value: w,
      action: Q.kg4.TOGGLE_MUTE,
      shouldShow: !P && !T
    })]
  })
}
class eo extends(i = Chunk473749.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: s,
      isPreviewingInGame: o,
      channel: a,
      anchor: c,
      avatarSizeMode: d
    } = this.props, h = null != Chunk692547.right, p = exports.map(t => {
      var l;
      let {
        user: c,
        voiceState: u,
        member: p
      } = t;
      if (null == c || null == a || null == e) return null;
      let f = s || o;
      return (0, r.jsx)(es, {
        guildId: null == a ? true : a.guild_id,
        user: c,
        nick: null != (l = null == p ? true : p.nick) ? l : H.ZP.getName(c),
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
    return (0, Chunk54381.jsx)(Chunk518084.ZP.Body, {
      className: l()({
        [Chunk477690.Z.VOICE_WIDGET_TOP_MARGIN]: Chunk473749,
        [Chunk226833.lockedContainer]: Chunk473749
      }),
      children: (0, Chunk54381.jsx)(Chunk597998.eJ, {
        className: Chunk226833.voiceList,
        children: Chunk239091
      })
    })
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk518084.ZP.Bar, {
      className: l()(Chunk226833.draggableStartArea, {
        [Chunk226833.preview]: require
      }),
      children: [(0, Chunk54381.jsxs)(Chunk518084.ZP.Content, {
        dynamicSize: true,
        className: l()(Chunk226833.content, {
          [Chunk226833.hidden]: require
        }),
        children: [(0, Chunk54381.jsx)(Chunk481060.Vni, {
          size: "custom",
          color: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: l()(Chunk226833.icon, Chunk226833.faded, Chunk226833.dragIcon)
        }), (0, Chunk54381.jsx)(Chunk481060.gj8, {
          size: "custom",
          color: Chunk692547.Z.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: l()(Chunk226833.icon, Chunk226833.faded, Chunk226833.speakerIcon)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          style: {
            color: Chunk692547.Z.unsafe_rawColors.PRIMARY_200.css
          },
          className: Chunk226833.title,
          children: exports
        })]
      }), require ? null : (0, Chunk54381.jsx)(Chunk518084.ZP.Icon, {
        icon: Chunk481060.ewm,
        label: Chunk388032.intl.string(Chunk388032.t.NiTd0e),
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), require ? null : (0, Chunk54381.jsx)(Chunk518084.ZP.Icon, {
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
      channel: s,
      application: o,
      streamMetadata: a,
      streamApplication: c,
      stream: u
    } = this.props;
    if (exports || null == Chunk477690 || null == Chunk473749) return null;
    let {
      sanitizedTitle: p,
      title: f
    } = (0, Chunk914923.Z)(Chunk442837);
    return (0, Chunk54381.jsx)(Chunk518084.ZP.Bar, {
      className: l()(Chunk226833.streamerControls, {
        [Chunk226833.hidden]: i,
        [Chunk226833.unpinned]: !require
      }),
      children: (0, Chunk54381.jsxs)(Chunk518084.ZP.Content, {
        className: Chunk226833.streamerContent,
        dynamicSize: true,
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk226833.streamerInner,
          children: [(null == Chunk692547 ? true : Chunk692547.id) != null && Chunk692547.id === (null == Chunk120356 ? true : Chunk120356.id) ? (0, Chunk54381.jsx)(Chunk925329.Z, {
            className: Chunk226833.gameIcon,
            game: Chunk120356
          }) : (0, Chunk54381.jsx)(Chunk662304.Z, {
            title: Chunk239091
          }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
            direction: Chunk600164.Z.Direction.VERTICAL,
            justify: Chunk600164.Z.Justify.BETWEEN,
            className: Chunk226833.streamerInfo,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              className: Chunk226833.streaming,
              variant: "text-sm/normal",
              children: Chunk388032.intl.string(Chunk388032.t.XKYej5)
            }), (0, Chunk54381.jsx)(Chunk345243.Z, {
              children: null != (e = null == Chunk692547 ? true : Chunk692547.name) ? module : Chunk765250
            })]
          })]
        }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
          grow: 0,
          children: [(0, Chunk54381.jsx)("div", {
            className: Chunk226833.streamerIconWrapper,
            children: (0, Chunk54381.jsx)(Chunk786915.Z, {
              stream: Chunk477690,
              iconClassName: Chunk226833.streamerIcon,
              appContext: Chunk981631.IlC.OVERLAY
            })
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk226833.streamerIconWrapper,
            children: (0, Chunk54381.jsx)(Chunk7188.Z, {
              stream: Chunk477690,
              appContext: Chunk981631.IlC.OVERLAY
            })
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk226833.streamerIconWrapper,
            children: (0, Chunk54381.jsx)(Chunk28664.u, {
              asContainer: true,
              text: Chunk388032.intl.string(Chunk388032.t.S5anIc),
              children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
                onClick: this.handleStopStream,
                "aria-label": Chunk388032.intl.string(Chunk388032.t.S5anIc),
                children: (0, Chunk54381.jsx)(Chunk481060.g5r, {
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
    (0, X.CR)(e, this.props, this.shouldDisplay)
  }
  shouldDisplay() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props,
      {
        context: t,
        locked: n,
        pinned: i,
        sortedVoiceStates: r,
        channel: s
      } = module;
    return 0 !== Chunk54381.length && null != exports && null != Chunk473749 && (!require || !!i)
  }
  render() {
    let {
      context: e,
      lobbyId: t,
      locked: n,
      pinned: i,
      isPreviewingInGame: s,
      channel: o
    } = this.props;
    if (null == Chunk120356 || null == module || !this.shouldDisplay()) return null;
    let a = Chunk981631.t_t.UNPINNED;
    return i && (a = Chunk981631.t_t.PINNED), Chunk473749 && (a = Chunk981631.t_t.IN_GAME_PREVIEW), require && (a = Chunk981631.t_t.IN_GAME), (0, Chunk54381.jsxs)(Chunk518084.ZP, {
      type: Chunk442837,
      width: 380,
      children: [require ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), require ? null : (0, Chunk54381.jsx)(Chunk244073.Z, {
        className: l()({
          [Chunk226833.preview]: Chunk473749
        }),
        contentClassName: l()({
          [Chunk226833.hidden]: Chunk473749
        }),
        channel: Chunk120356,
        lobbyId: exports,
        context: module,
        pinned: i
      })]
    })
  }
  constructor(...e) {
    super(...e), en(this, "handleUserContextMenu", (e, t) => {
      let {
        context: i
      } = this.props;
      (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(n.bind(n, 881351));
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
      (0, h.ZDy)(async () => {
        let {
          default: s
        } = await n.e("51749").then(n.bind(n, 800740));
        return n => (0, r.jsx)(s, er(ei({}, n), {
          mediaEngineContext: e,
          subtitle: null != t ? true : i
        }))
      })
    }), en(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      g.Z.track(Q.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null == (e = this.props.channel) ? true : e.guild_id,
        channel_id: null == (t = this.props.channel) ? true : t.id,
        channel_type: null == (n = this.props.channel) ? true : n.type,
        widget_type: Q.Odu.VOICE
      });
      let {
        id: r
      } = this.props;
      (0, f.xh)(r)
    }), en(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      null != e && m.g((0, x.V9)(e))
    })
  }
}

function el(e) {
  var t;
  let n = (0, a.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
    i = (0, _.ZP)(n),
    o = function() {
      let [e] = (0, a.e7)([U.ZP, P.Z, z.Z, A.Z], () => {
        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [P.Z.getMutableParticipants(e.id, w.pV.SPEAKER), P.Z.getParticipantsVersion(e.id)] : [U.ZP.getVoiceStatesForChannel(e), U.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], B.Q), t = (0, a.e7)([R.default], () => R.default.getId()), n = (0, J.Z)({
        location: "voice_widget"
      });
      return s.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? false : +(n.user.id === t)) : e, [e, t, n])
    }(),
    l = (0, a.e7)([k.Z], () => k.Z.getStreamerActiveStreamMetadata()),
    c = (0, a.e7)([O.ZP, W.Z, L.Z], () => {
      var e;
      let t = (0, j.Z)(O.ZP, W.Z);
      return null != t ? null == (e = L.Z.getGameByGameData(t)) ? true : e.id : null
    }),
    d = (0, b.q)(c),
    u = (0, a.cj)([O.ZP, W.Z, k.Z, G.default], () => {
      let e = (0, j.Z)(O.ZP, W.Z),
        t = k.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: G.default.getDisplayUserMode(),
        displayNameMode: G.default.getDisplayNameMode(),
        avatarSizeMode: G.default.getAvatarSizeMode(),
        streamApplication: (null == l ? true : l.pid) === (0, F.getPID)() ? (0, C.Z)(e) : null,
        stream: t
      }
    });
  return (0, r.jsx)(eo, er(ei(er(ei({}, u), {
    application: d
  }), e), {
    sortedVoiceStates: o,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: l,
    streamApplication: null != (t = u.streamApplication) ? t : {
      id: null,
      name: null == l ? true : l.sourceName
    }
  }))
}
en(eo, "defaultProps", {
  context: Chunk65154.Yn.DEFAULT
})