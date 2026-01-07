/** Chunk was on 63141 **/
/** chunk id: 839434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js"), require("./642613.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function ea(e) {
  let {
    flipped: t = false,
    locked: n = false,
    user: i,
    nick: s,
    displayNameMode: c,
    displayUserMode: d,
    size: u = Q.ipw.LARGE,
    onClick: f,
    onContextMenu: h,
    context: p,
    guildId: g,
    voiceState: b
  } = e, y = (0, q.Z)({
    location: "overlay_voice_widget"
  }), v = (0, l.e7)([G.default], () => G.default.showKeybindIndicators), O = (0, l.e7)([R.default], () => R.default.getId()), E = (0, l.e7)([M.Z], () => M.Z.isLocalMute(i.id)), x = (0, l.e7)([k.Z], () => k.Z.getCurrentUserActiveStream()), S = (0, l.Wu)([k.Z], () => null != x ? k.Z.getViewerIds(x) : []), _ = (0, m.Z)({
    userId: i.id,
    context: p
  }), Z = (0, l.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, p)), j = (0, l.e7)([k.Z], () => null != k.Z.getStreamForUser(i.id, g)), C = a.useMemo(() => null != x && x.ownerId !== i.id && S.includes(i.id), [x, i.id, S]);
  if (d === Q.OYC.ONLY_WHILE_SPEAKING && n && !_) return null;
  let I = i.id === O,
    {
      mute: P,
      selfMute: w,
      suppress: T,
      deaf: N,
      selfDeaf: A
    } = b,
    L = y && v,
    z = w && (!I || !L);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(D.ZP, {
      guildId: g,
      onClick: n ? true : e => null == f ? true : f(e, i),
      onContextMenu: n ? true : e => null == h ? true : h(e, i),
      className: o()(et.voiceUserWrapper, {
        [et.faded]: !_,
        [et.interactive]: !n
      }),
      user: i,
      nick: s,
      speaking: false,
      flipped: t,
      isStreaming: j,
      iconClassName: o()(et.voiceIcon, {
        [et.locked]: n
      }),
      isWatching: C,
      isOverlay: true,
      size: u,
      priority: Z,
      mute: P || z || E,
      localMute: E,
      serverMute: P || T,
      deaf: N || A,
      serverDeaf: N,
      userNameClassName: o()(et.username, {
        [et.locked]: n,
        [et.hidden]: n && (c === Q.wC$.NEVER || !_ && c === Q.wC$.ONLY_WHILE_SPEAKING)
      })
    }), I && L && (0, r.jsx)(K.Z, {
      value: w,
      action: Q.kg4.TOGGLE_MUTE,
      shouldShow: !P && !T
    })]
  })
}
class es extends(i = Chunk473749.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: a,
      isPreviewingInGame: s,
      channel: l,
      anchor: c,
      avatarSizeMode: d
    } = this.props, f = null != c.right, h = t.map(t => {
      var o;
      let {
        user: c,
        voiceState: u,
        member: h
      } = t;
      if (null == c || null == l || null == e) return null;
      let p = a || s;
      return (0, r.jsx)(ea, {
        guildId: null == l ? true : l.guild_id,
        user: c,
        nick: null != (o = null == h ? true : h.nick) ? o : F.ZP.getName(c),
        flipped: f,
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
      className: o()({
        [u.Z.VOICE_WIDGET_TOP_MARGIN]: a,
        [et.lockedContainer]: a
      }),
      children: (0, r.jsx)(D.eJ, {
        className: et.voiceList,
        children: h
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
      className: o()(et.draggableStartArea, {
        [et.preview]: n
      }),
      children: [(0, r.jsxs)(J.ZP.Content, {
        dynamicSize: true,
        className: o()(et.content, {
          [et.hidden]: n
        }),
        children: [(0, r.jsx)(f.Vni, {
          size: "custom",
          color: c.Z.unsafe_rawColors.WHITE.css,
          width: 20,
          height: 20,
          className: o()(et.icon, et.faded, et.dragIcon)
        }), (0, r.jsx)(f.gj8, {
          size: "custom",
          color: c.Z.unsafe_rawColors.WHITE.css,
          width: 20,
          height: 20,
          className: o()(et.icon, et.faded, et.speakerIcon)
        }), (0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          style: {
            color: c.Z.unsafe_rawColors.PRIMARY_200.css
          },
          className: et.title,
          children: t
        })]
      }), n ? null : (0, r.jsx)(J.ZP.Icon, {
        icon: f.ewm,
        label: ee.intl.string(ee.t.NiTd0e),
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), n ? null : (0, r.jsx)(J.ZP.Icon, {
        icon: e ? f.QVc : f.k5M,
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
      channel: a,
      application: s,
      streamMetadata: l,
      streamApplication: c,
      stream: u
    } = this.props;
    if (t || null == u || null == a) return null;
    let {
      sanitizedTitle: h,
      title: p
    } = (0, _.Z)(l);
    return (0, r.jsx)(J.ZP.Bar, {
      className: o()(et.streamerControls, {
        [et.hidden]: i,
        [et.unpinned]: !n
      }),
      children: (0, r.jsxs)(J.ZP.Content, {
        className: et.streamerContent,
        dynamicSize: true,
        children: [(0, r.jsxs)("div", {
          className: et.streamerInner,
          children: [(null == c ? true : c.id) != null && c.id === (null == s ? true : s.id) ? (0, r.jsx)(x.Z, {
            className: et.gameIcon,
            game: s
          }) : (0, r.jsx)(Z.Z, {
            title: h
          }), (0, r.jsxs)(O.Z, {
            direction: O.Z.Direction.VERTICAL,
            justify: O.Z.Justify.BETWEEN,
            className: et.streamerInfo,
            children: [(0, r.jsx)(f.Text, {
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
            children: (0, r.jsx)(T.Z, {
              stream: u,
              iconClassName: et.streamerIcon,
              appContext: Q.IlC.OVERLAY
            })
          }), (0, r.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, r.jsx)(N.Z, {
              stream: u,
              appContext: Q.IlC.OVERLAY
            })
          }), (0, r.jsx)("div", {
            className: et.streamerIconWrapper,
            children: (0, r.jsx)(d.u, {
              asContainer: true,
              text: ee.intl.string(ee.t.S5anIc),
              children: (0, r.jsx)(f.P3F, {
                onClick: this.handleStopStream,
                "aria-label": ee.intl.string(ee.t.S5anIc),
                children: (0, r.jsx)(f.g5r, {
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
        channel: a
      } = e;
    return 0 !== r.length && null != t && null != a && (!n || !!i)
  }
  render() {
    let {
      context: e,
      lobbyId: t,
      locked: n,
      pinned: i,
      isPreviewingInGame: a,
      channel: s
    } = this.props;
    if (null == s || null == e || !this.shouldDisplay()) return null;
    let l = Q.t_t.UNPINNED;
    return i && (l = Q.t_t.PINNED), a && (l = Q.t_t.IN_GAME_PREVIEW), n && (l = Q.t_t.IN_GAME), (0, r.jsxs)(J.ZP, {
      type: l,
      width: 380,
      children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, r.jsx)(Y.Z, {
        className: o()({
          [et.preview]: a
        }),
        contentClassName: o()({
          [et.hidden]: a
        }),
        channel: s,
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
      (0, h.jW)(e, async () => {
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
      (0, f.ZDy)(async () => {
        let {
          default: a
        } = await n.e("51749").then(n.bind(n, 800740));
        return n => (0, r.jsx)(a, er(ei({}, n), {
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
      null != e && b.g((0, S.V9)(e))
    })
  }
}

function eo(e) {
  var t;
  let n = (0, l.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
    i = (0, v.ZP)(n),
    s = function() {
      let [e] = (0, l.e7)([U.ZP, P.Z, z.Z, A.Z], () => {
        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [P.Z.getMutableParticipants(e.id, w.pV.SPEAKER), P.Z.getParticipantsVersion(e.id)] : [U.ZP.getVoiceStatesForChannel(e), U.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], B.Q), t = (0, l.e7)([R.default], () => R.default.getId()), n = (0, q.Z)({
        location: "voice_widget"
      });
      return a.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? false : +(n.user.id === t)) : e, [e, t, n])
    }(),
    o = (0, l.e7)([k.Z], () => k.Z.getStreamerActiveStreamMetadata()),
    c = (0, l.e7)([E.ZP, W.Z, L.Z], () => {
      var e;
      let t = (0, j.Z)(E.ZP, W.Z);
      return null != t ? null == (e = L.Z.getGameByGameData(t)) ? true : e.id : null
    }),
    d = (0, y.q)(c),
    u = (0, l.cj)([E.ZP, W.Z, k.Z, G.default], () => {
      let e = (0, j.Z)(E.ZP, W.Z),
        t = k.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: G.default.getDisplayUserMode(),
        displayNameMode: G.default.getDisplayNameMode(),
        avatarSizeMode: G.default.getAvatarSizeMode(),
        streamApplication: (null == o ? true : o.pid) === (0, H.getPID)() ? (0, C.Z)(e) : null,
        stream: t
      }
    });
  return (0, r.jsx)(es, er(ei(er(ei({}, u), {
    application: d
  }), e), {
    sortedVoiceStates: s,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: o,
    streamApplication: null != (t = u.streamApplication) ? t : {
      id: null,
      name: null == o ? true : o.sourceName
    }
  }))
}
en(es, "defaultProps", {
  context: Chunk65154.Yn.DEFAULT
})