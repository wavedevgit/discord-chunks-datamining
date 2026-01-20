/** Chunk was on 63141 **/
/** chunk id: 839434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./388685.js"), require("./642613.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk404577 = require("./404577.js"),
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
  Chunk732113 = require("./732113.js");

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
    onContextMenu: f,
    context: p,
    guildId: g,
    voiceState: m
  } = e, y = (0, q.Z)({
    location: "overlay_voice_widget"
  }), v = (0, l.e7)([G.default], () => G.default.showKeybindIndicators), O = (0, l.e7)([R.default], () => R.default.getId()), E = (0, l.e7)([M.Z], () => M.Z.isLocalMute(i.id)), x = (0, l.e7)([k.Z], () => k.Z.getCurrentUserActiveStream()), S = (0, l.Wu)([k.Z], () => null != x ? k.Z.getViewerIds(x) : []), Z = (0, b.Z)({
    userId: i.id,
    context: p
  }), j = (0, l.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, p)), _ = (0, l.e7)([k.Z], () => null != k.Z.getStreamForUser(i.id, g)), C = s.useMemo(() => null != x && x.ownerId !== i.id && S.includes(i.id), [x, i.id, S]);
  if (d === Q.OYC.ONLY_WHILE_SPEAKING && n && !Z) return null;
  let I = i.id === O,
    {
      mute: P,
      selfMute: w,
      suppress: N,
      deaf: T,
      selfDeaf: A
    } = m,
    L = y && v,
    z = w && (!I || !L);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(D.ZP, {
      guildId: g,
      onClick: n ? true : e => null == h ? true : h(e, i),
      onContextMenu: n ? true : e => null == f ? true : f(e, i),
      className: a()(et.voiceUserWrapper, {
        [et.faded]: !Z,
        [et.interactive]: !n
      }),
      user: i,
      nick: o,
      speaking: false,
      flipped: t,
      isStreaming: _,
      iconClassName: a()(et.voiceIcon, {
        [et.locked]: n
      }),
      isWatching: C,
      isOverlay: true,
      size: u,
      priority: j,
      mute: P || z || E,
      localMute: E,
      serverMute: P || N,
      deaf: T || A,
      serverDeaf: T,
      userNameClassName: a()(et.username, {
        [et.locked]: n,
        [et.hidden]: n && (c === Q.wC$.NEVER || !Z && c === Q.wC$.ONLY_WHILE_SPEAKING)
      })
    }), I && L && (0, r.jsx)(K.Z, {
      value: w,
      action: Q.kg4.TOGGLE_MUTE,
      shouldShow: !P && !N
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
      channel: l,
      anchor: c,
      avatarSizeMode: d
    } = this.props, h = null != c.right, f = t.map(t => {
      var a;
      let {
        user: c,
        voiceState: u,
        member: f
      } = t;
      if (null == c || null == l || null == e) return null;
      let p = s || o;
      return (0, r.jsx)(es, {
        guildId: null == l ? true : l.guild_id,
        user: c,
        nick: null != (a = null == f ? true : f.nick) ? a : H.ZP.getName(c),
        flipped: h,
        voiceState: u,
        displayNameMode: n,
        displayUserMode: i,
        size: d,
        locked: p,
        onContextMenu: this.handleUserContextMenu,
        onClick: this.handleUserContextMenu,
        context: e
      }, c.id)
    });
    return (0, r.jsx)(J.ZP.Body, {
      className: a()({
        [u.Z.VOICE_WIDGET_TOP_MARGIN]: s,
        [et.lockedContainer]: s
      }),
      children: (0, r.jsx)(D.eJ, {
        className: et.voiceList,
        children: f
      })
    })
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return (0, r.jsxs)(J.ZP.Bar, {
      className: a()(et.draggableStartArea, {
        [et.preview]: n
      }),
      children: [(0, r.jsxs)(J.ZP.Content, {
        dynamicSize: true,
        className: a()(et.content, {
          [et.hidden]: n
        }),
        children: [(0, r.jsx)(h.Vni, {
          size: "custom",
          color: c.Z.unsafe_rawColors.WHITE.css,
          width: 20,
          height: 20,
          className: a()(et.icon, et.faded, et.dragIcon)
        }), (0, r.jsx)(h.gj8, {
          size: "custom",
          color: c.Z.unsafe_rawColors.WHITE.css,
          width: 20,
          height: 20,
          className: a()(et.icon, et.faded, et.speakerIcon)
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          style: {
            color: c.Z.unsafe_rawColors.PRIMARY_200.css
          },
          className: et.title,
          children: t
        })]
      }), n ? null : (0, r.jsx)(J.ZP.Icon, {
        icon: h.ewm,
        label: ee.intl.string(ee.t.NiTd0e),
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), n ? null : (0, r.jsx)(J.ZP.Icon, {
        icon: e ? h.QVc : h.k5M,
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
      application: o,
      streamMetadata: l,
      streamApplication: c,
      stream: u
    } = this.props;
    if (t || null == u || null == s) return null;
    let {
      sanitizedTitle: f,
      title: p
    } = (0, Z.Z)(l);
    return (0, r.jsx)(J.ZP.Bar, {
      className: a()(et.streamerControls, {
        [et.hidden]: i,
        [et.unpinned]: !n
      }),
      children: (0, r.jsxs)(J.ZP.Content, {
        className: et.streamerContent,
        dynamicSize: true,
        children: [(0, r.jsxs)("div", {
          className: et.streamerInner,
          children: [(null == c ? true : c.id) != null && c.id === (null == o ? true : o.id) ? (0, r.jsx)(x.Z, {
            className: et.gameIcon,
            game: o
          }) : (0, r.jsx)(j.Z, {
            title: f
          }), (0, r.jsxs)(O.Z, {
            direction: O.Z.Direction.VERTICAL,
            justify: O.Z.Justify.BETWEEN,
            className: et.streamerInfo,
            children: [(0, r.jsx)(h.Text, {
              className: et.streaming,
              variant: "text-sm/normal",
              children: ee.intl.string(ee.t.XKYej5)
            }), (0, r.jsx)(I.Z, {
              children: null != (e = null == c ? true : c.name) ? e : p
            })]
          })]
        }), (0, r.jsxs)(O.Z, {
          grow: 0,
          children: [(0, r.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, r.jsx)(N.Z, {
              stream: u,
              iconClassName: et.streamerIcon,
              appContext: Q.IlC.OVERLAY
            })
          }), (0, r.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, r.jsx)(T.Z, {
              stream: u,
              appContext: Q.IlC.OVERLAY
            })
          }), (0, r.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, r.jsx)(d.u, {
              asContainer: true,
              text: ee.intl.string(ee.t.S5anIc),
              children: (0, r.jsx)(h.P3F, {
                onClick: this.handleStopStream,
                "aria-label": ee.intl.string(ee.t.S5anIc),
                children: (0, r.jsx)(h.g5r, {
                  size: "md",
                  color: "currentColor",
                  className: et.streamerIcon
                })
              })
            })
          })]
        })]
      })
    })
  }
  componentDidMount() {
    (0, X.m3)(this.props, this.shouldDisplay())
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
      channel: o
    } = this.props;
    if (null == o || null == e || !this.shouldDisplay()) return null;
    let l = Q.t_t.UNPINNED;
    return i && (l = Q.t_t.PINNED), s && (l = Q.t_t.IN_GAME_PREVIEW), n && (l = Q.t_t.IN_GAME), (0, r.jsxs)(J.ZP, {
      type: l,
      width: 380,
      children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, r.jsx)(Y.Z, {
        className: a()({
          [et.preview]: s
        }),
        contentClassName: a()({
          [et.hidden]: s
        }),
        channel: o,
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
      (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(n.bind(n, 881351));
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
      (0, p.xh)(r)
    }), en(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      null != e && m.g((0, S.V9)(e))
    })
  }
}

function ea(e) {
  var t;
  let n = (0, l.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
    i = (0, v.ZP)(n),
    o = function() {
      let [e] = (0, l.e7)([W.ZP, P.Z, z.Z, A.Z], () => {
        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [P.Z.getMutableParticipants(e.id, w.pV.SPEAKER), P.Z.getParticipantsVersion(e.id)] : [W.ZP.getVoiceStatesForChannel(e), W.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], B.Q), t = (0, l.e7)([R.default], () => R.default.getId()), n = (0, q.Z)({
        location: "voice_widget"
      });
      return s.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? false : +(n.user.id === t)) : e, [e, t, n])
    }(),
    a = (0, l.e7)([k.Z], () => k.Z.getStreamerActiveStreamMetadata()),
    c = (0, l.e7)([E.ZP, U.Z, L.Z], () => {
      var e;
      let t = (0, _.Z)(E.ZP, U.Z);
      return null != t ? null == (e = L.Z.getGameByGameData(t)) ? true : e.id : null
    }),
    d = (0, y.q)(c),
    u = (0, l.cj)([E.ZP, U.Z, k.Z, G.default], () => {
      let e = (0, _.Z)(E.ZP, U.Z),
        t = k.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: G.default.getDisplayUserMode(),
        displayNameMode: G.default.getDisplayNameMode(),
        avatarSizeMode: G.default.getAvatarSizeMode(),
        streamApplication: (null == a ? true : a.pid) === (0, F.getPID)() ? (0, C.Z)(e) : null,
        stream: t
      }
    });
  return (0, r.jsx)(eo, er(ei(er(ei({}, u), {
    application: d
  }), e), {
    sortedVoiceStates: o,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: a,
    streamApplication: null != (t = u.streamApplication) ? t : {
      id: null,
      name: null == a ? true : a.sourceName
    }
  }))
}
en(eo, "defaultProps", {
  context: Chunk65154.Yn.DEFAULT
})