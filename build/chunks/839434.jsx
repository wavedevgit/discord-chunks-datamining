/** Chunk was on 63141 **/
/** chunk id: 839434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => es
}), require("./388685.js"), require("./642613.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk925329 = require("./925329.js"),
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
  Chunk876205 = require("./876205.js"),
  Chunk906037 = require("./906037.js"),
  Chunk518084 = require("./518084.jsx"),
  Chunk809357 = require("./809357.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk690200 = require("./690200.js");

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

function eo(e) {
  let {
    flipped: t = false,
    locked: n = false,
    user: i,
    nick: l,
    displayNameMode: c,
    displayUserMode: d,
    size: u = q.ipw.LARGE,
    onClick: h,
    onContextMenu: p,
    context: f,
    guildId: g,
    voiceState: m
  } = e, O = (0, Q.Z)({
    location: "overlay_voice_widget"
  }), v = (0, a.e7)([B.default], () => B.default.showKeybindIndicators), _ = (0, a.e7)([R.default], () => R.default.getId()), b = (0, a.e7)([M.Z], () => M.Z.isLocalMute(i.id)), E = (0, a.e7)([k.Z], () => k.Z.getCurrentUserActiveStream()), S = (0, a.Wu)([k.Z], () => null != E ? k.Z.getViewerIds(E) : []), x = (0, y.Z)({
    userId: i.id,
    context: f
  }), C = (0, a.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, f)), j = (0, a.e7)([k.Z], () => null != k.Z.getStreamForUser(i.id, g)), Z = o.useMemo(() => null != E && E.ownerId !== i.id && S.includes(i.id), [E, i.id, S]);
  if (d === q.OYC.ONLY_WHILE_SPEAKING && n && !x) return null;
  let I = i.id === _,
    {
      mute: P,
      selfMute: w,
      suppress: N,
      deaf: T,
      selfDeaf: A
    } = m,
    L = O && v,
    z = w && (!I || !L);
  return <r.Fragment>{<D.ZP guildId={g} onClick={n ? true : e => null == h ? true : h(e, i)} onContextMenu={n ? true : e => null == p ? true : p(e, i)} className={s()(et.voiceUserWrapper, {
        [et.faded]: !x,
        [et.interactive]: !n
      })} user={i} nick={l} speaking={false} flipped={t} isStreaming={j} iconClassName={s()(et.voiceIcon, {
        [et.locked]: n
      })} isWatching={Z} isOverlay={true} size={u} priority={C} mute={P || z || b} localMute={b} serverMute={P || N} deaf={T || A} serverDeaf={T} userNameClassName={s()(et.username, {
        [et.locked]: n,
        [et.hidden]: n && (c === q.wC$.NEVER || !x && c === q.wC$.ONLY_WHILE_SPEAKING)
      })} />}{I && L && <K.Z value={w} action={q.kg4.TOGGLE_MUTE} shouldShow={!P && !N} />}</r.Fragment>
}
class el extends(i = Chunk73800.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: o,
      isPreviewingInGame: l,
      channel: a,
      anchor: c,
      avatarSizeMode: u
    } = this.props, h = null != Chunk692547.right, p = exports.map(t => {
      var s;
      let {
        user: c,
        voiceState: d,
        member: p
      } = t;
      if (null == c || null == a || null == e) return null;
      let f = o || l;
      return <eo guildId={null == a ? true : a.guild_id} user={c} nick={null != (s = null == p ? true : p.nick) ? s : F.ZP.getName(c)} flipped={h} voiceState={d} displayNameMode={n} displayUserMode={i} size={u} locked={f} onContextMenu={this.handleUserContextMenu} onClick={this.handleUserContextMenu} context={e} />
    });
    return <Chunk518084.ZP.Body className={s()({
        [Chunk477690.Z.VOICE_WIDGET_TOP_MARGIN]: Chunk73800,
        [Chunk690200.lockedContainer]: Chunk73800
      })}><Chunk597998.eJ className={Chunk690200.voiceList}>{Chunk239091}</Chunk597998.eJ></Chunk518084.ZP.Body>
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return <Chunk518084.ZP.Bar className={s()(Chunk690200.draggableStartArea, {
        [Chunk690200.preview]: require
      })}>{<Chunk518084.ZP.Content dynamicSize={true} className={s()(Chunk690200.content, {
          [Chunk690200.hidden]: require
        })}>{<Chunk481060.Vni size={"custom"} color={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} width={20} height={20} className={s()(Chunk690200.icon, Chunk690200.faded, Chunk690200.dragIcon)} />}{<Chunk481060.gj8 size={"custom"} color={Chunk692547.Z.unsafe_rawColors.WHITE_500.css} width={20} height={20} className={s()(Chunk690200.icon, Chunk690200.faded, Chunk690200.speakerIcon)} />}{<Chunk481060.Text variant={"text-md/normal"} style={{
            color: Chunk692547.Z.unsafe_rawColors.PRIMARY_200.css
          }} className={Chunk690200.title}>{exports}</Chunk481060.Text>}</Chunk518084.ZP.Content>}{require ? null : <Chunk518084.ZP.Icon icon={Chunk481060.ewm} label={Chunk388032.intl.string(Chunk388032.t.NiTd0d)} onClick={this.handleOpenVoiceSettings} tooltipPosition={"left"} size={18} />}{require ? null : <Chunk518084.ZP.Icon icon={module ? Chunk481060.QVc : Chunk481060.k5M} label={module ? Chunk388032.intl.string(Chunk388032.t.cSu80t) : Chunk388032.intl.string(Chunk388032.t.cM8Vnp)} onClick={this.handlePin} tooltipPosition={"left"} size={18} isActive={module} />}</Chunk518084.ZP.Bar>
  }
  renderStreamerSettings() {
    var e;
    let {
      locked: t,
      pinned: n,
      isPreviewingInGame: i,
      channel: o,
      application: l,
      streamMetadata: a,
      streamApplication: c,
      stream: d
    } = this.props;
    if (exports || null == Chunk477690 || null == Chunk73800) return null;
    let {
      sanitizedTitle: p,
      title: f
    } = (0, Chunk914923.Z)(Chunk442837);
    return <Chunk518084.ZP.Bar className={s()(Chunk690200.streamerControls, {
        [Chunk690200.hidden]: i,
        [Chunk690200.unpinned]: !require
      })}><Chunk518084.ZP.Content className={Chunk690200.streamerContent} dynamicSize={true}>{<div className={Chunk690200.streamerInner}>{(null == Chunk692547 ? true : Chunk692547.id) != null && Chunk692547.id === (null == Chunk120356 ? true : Chunk120356.id) ? <Chunk925329.Z className={Chunk690200.gameIcon} game={Chunk120356} /> : <Chunk165393.Z title={Chunk239091} />}{<Chunk600164.Z direction={Chunk600164.Z.Direction.VERTICAL} justify={Chunk600164.Z.Justify.BETWEEN} className={Chunk690200.streamerInfo}>{<Chunk481060.Text className={Chunk690200.streaming} variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t.XKYej4)}</Chunk481060.Text>}{<Chunk345243.Z>{null != (e = null == Chunk692547 ? true : Chunk692547.name) ? module : Chunk765250}</Chunk345243.Z>}</Chunk600164.Z>}</div>}{<Chunk600164.Z grow={0}>{<div className={Chunk690200.streamerIconWrapper}><Chunk786915.Z stream={Chunk477690} iconClassName={Chunk690200.streamerIcon} appContext={Chunk981631.IlC.OVERLAY} /></div>}{<div className={Chunk690200.streamerIconWrapper}><Chunk7188.Z stream={Chunk477690} appContext={Chunk981631.IlC.OVERLAY} /></div>}{<div className={Chunk690200.streamerIconWrapper}><Chunk481060.DY3 text={Chunk388032.intl.string(Chunk388032.t.S5anIS)}><Chunk755721.zx onClick={this.handleStopStream} look={Chunk755721.zx.Looks.BLANK} size={Chunk755721.zx.Sizes.NONE}><Chunk481060.g5r size={"md"} color={"currentColor"} className={Chunk690200.streamerIcon} /></Chunk755721.zx></Chunk481060.DY3></div>}</Chunk600164.Z>}</Chunk518084.ZP.Content></Chunk518084.ZP.Bar>
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
        channel: o
      } = module;
    return 0 !== Chunk255367.length && null != exports && null != Chunk73800 && (!require || !!i)
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
    let a = Chunk981631.t_t.UNPINNED;
    return i && (a = Chunk981631.t_t.PINNED), Chunk73800 && (a = Chunk981631.t_t.IN_GAME_PREVIEW), require && (a = Chunk981631.t_t.IN_GAME), <Chunk518084.ZP type={Chunk442837} width={380}>{require ? null : this.renderHeader()}{this.renderVoiceUsers()}{this.renderStreamerSettings()}{require ? null : <Chunk244073.Z className={s()({
          [Chunk690200.preview]: Chunk73800
        })} contentClassName={s()({
          [Chunk690200.hidden]: Chunk73800
        })} channel={Chunk120356} lobbyId={exports} context={module} pinned={i} />}</Chunk518084.ZP>
  }
  constructor(...e) {
    super(...e), en(this, "handleUserContextMenu", (e, t) => {
      let {
        context: i
      } = this.props;
      (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
        return n => <e{...er(ei({}, n), {
          user: t,
          showMediaItems: true,
          mediaEngineContext: i
        })} />
      })
    }), en(this, "handleOpenVoiceSettings", () => {
      let {
        context: e,
        channel: t,
        title: i
      } = this.props;
      (0, h.ZDy)(async () => {
        let {
          default: o
        } = await n.e("66063").then(n.bind(n, 344516));
        return n => <o{...er(ei({}, n), {
          mediaEngineContext: e,
          title: null != t ? null : i
        })} />
      })
    }), en(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      g.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null == (e = this.props.channel) ? true : e.guild_id,
        channel_id: null == (t = this.props.channel) ? true : t.id,
        channel_type: null == (n = this.props.channel) ? true : n.type,
        widget_type: q.Odu.VOICE
      });
      let {
        id: r
      } = this.props;
      (0, f.xh)(r)
    }), en(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      null != e && m.g((0, S.V9)(e))
    })
  }
}

function es(e) {
  var t;
  let n = (0, a.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
    i = (0, v.ZP)(n),
    l = function() {
      let [e] = (0, a.e7)([U.ZP, P.Z, z.Z, A.Z], () => {
        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [P.Z.getMutableParticipants(e.id, w.pV.SPEAKER), P.Z.getParticipantsVersion(e.id)] : [U.ZP.getVoiceStatesForChannel(e), U.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], G.Q), t = (0, a.e7)([R.default], () => R.default.getId()), n = (0, Q.Z)({
        location: "voice_widget"
      });
      return o.useMemo(() => n ? [...e].sort((e, n) => e.user.id === t ? false : +(n.user.id === t)) : e, [e, t, n])
    }(),
    s = (0, a.e7)([k.Z], () => k.Z.getStreamerActiveStreamMetadata()),
    c = (0, a.e7)([b.ZP, W.Z, L.Z], () => {
      var e;
      let t = (0, j.Z)(b.ZP, W.Z);
      return null != t ? null == (e = L.Z.getGameByGameData(t)) ? true : e.id : null
    }),
    d = (0, O.q)(c),
    u = (0, a.cj)([b.ZP, W.Z, k.Z, B.default], () => {
      let e = (0, j.Z)(b.ZP, W.Z),
        t = k.Z.getCurrentUserActiveStream();
      return {
        displayUserMode: B.default.getDisplayUserMode(),
        displayNameMode: B.default.getDisplayNameMode(),
        avatarSizeMode: B.default.getAvatarSizeMode(),
        streamApplication: (null == s ? true : s.pid) === (0, H.getPID)() ? (0, Z.Z)(e) : null,
        stream: t
      }
    });
  return <el{...er(ei(er(ei({}, u), {
    application: d
  }), e), {
    sortedVoiceStates: l,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: s,
    streamApplication: null != (t = u.streamApplication) ? t : {
      id: null,
      name: null == s ? true : s.sourceName
    }
  })} />
}
en(el, "defaultProps", {
  context: Chunk65154.Yn.DEFAULT
})