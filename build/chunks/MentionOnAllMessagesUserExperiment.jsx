/** Chunk was on 75708 **/
/** chunk id: 593648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk292556 = require("./292556.js"),
  Chunk87051 = require("./87051.js"),
  Chunk419363 = require("./419363.js"),
  Chunk761781 = require("./761781.js"),
  Chunk818083 = require("./818083.js"),
  Chunk688465 = require("./688465.js"),
  Chunk890022 = require("./890022.js"),
  Chunk688907 = require("./688907.js"),
  Chunk487419 = require("./487419.js"),
  Chunk197344 = require("./197344.js"),
  Chunk476756 = require("./476756.jsx"),
  Chunk734934 = require("./734934.js"),
  Chunk223683 = require("./223683.js"),
  Chunk312400 = require("./312400.js"),
  Chunk115345 = require("./115345.js"),
  Chunk392888 = require("./392888.jsx"),
  Chunk106371 = require("./106371.js"),
  Chunk995774 = require("./995774.js"),
  Chunk921801 = require("./921801.js"),
  Chunk460181 = require("./460181.js"),
  Chunk462354 = require("./462354.js"),
  Chunk210176 = require("./210176.js"),
  Chunk292959 = require("./292959.js"),
  Chunk9156 = require("./9156.js"),
  Chunk912101 = require("./912101.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk33656 = require("./33656.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk589848 = require("./589848.js"),
  Chunk20493 = require("./20493.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
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

function Q(e) {
  let {
    label: t,
    enabled: n,
    disabled: r,
    onPreview: s,
    onChange: a,
    tooltip: l
  } = e;
  return <u.j7V className={Y.soundRow} value={n} onChange={a} disabled={r} tooltipNote={l}><div className={Y.notificationSound}>{<div className={Y.soundName}>{t}</div>}{<u.P3F className={Y.soundIcon} onClick={s} aria-label={W.intl.string(W.t.Kd4uxM)}><u.gj8 size={"xs"} color={"currentColor"} className={Y.icon} aria-hidden={true} /></u.P3F>}</div></u.j7V>
}

function $(e) {
  let {
    disabledSounds: t,
    disableAllSounds: n,
    notifyMessagesInSelectedChannel: s
  } = e, l = r.useRef(null), o = (0, v.p)(), c = r.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), null != l.current && l.current.stop(), l.current = (0, R.GN)(e)
  }, []), d = r.useCallback((e, n) => {
    let i = t.filter(t => t !== e);
    n || i.push(e), p.default.setDisabledSounds(i)
  }, [t]);
  r.useEffect(() => () => {
    var e;
    null == (e = l.current) || e.stop()
  });
  let m = [{
      label: W.intl.string(W.t.pz71xM),
      sound: "message1",
      focusModeDisabled: o
    }, {
      label: W.intl.string(W.t.hK51Ym),
      sound: "deafen"
    }, {
      label: W.intl.string(W.t.XiejaG),
      sound: "undeafen"
    }, {
      label: W.intl.string(W.t["w4m94+"]),
      sound: "mute"
    }, {
      label: W.intl.string(W.t.YqAjX1),
      sound: "unmute"
    }, {
      label: W.intl.string(W.t.JoTq8v),
      sound: "camera_on"
    }, {
      label: W.intl.string(W.t["8P6tQ0"]),
      sound: "camera_off"
    }, {
      label: W.intl.string(W.t["juL9/P"]),
      sound: "disconnect"
    }, {
      label: W.intl.string(W.t.x98vQk),
      sound: "ptt_start"
    }, {
      label: W.intl.string(W.t["1HjRqK"]),
      sound: "ptt_stop"
    }, {
      label: W.intl.string(W.t["9JB1Cg"]),
      sound: "user_join"
    }, {
      label: W.intl.string(W.t.KUBBNj),
      sound: "user_leave"
    }, {
      label: W.intl.string(W.t.EZjqUV),
      sound: "user_moved"
    }, {
      label: W.intl.string(W.t.LnNlQk),
      sound: "call_calling"
    }, {
      label: W.intl.string(W.t.XBrJT0),
      sound: "call_ringing"
    }, {
      label: W.intl.string(W.t["Nd8P5+"]),
      sound: "stream_started"
    }, {
      label: W.intl.string(W.t["9bYj+P"]),
      sound: "stream_ended"
    }, {
      label: W.intl.string(W.t.KccUIy),
      sound: "stream_user_joined"
    }, {
      label: W.intl.string(W.t.dsjkiI),
      sound: "stream_user_left"
    }, {
      label: W.intl.string(W.t.nFOcf3),
      sound: "activity_launch"
    }, {
      label: W.intl.string(W.t["a6lw/v"]),
      sound: "activity_end"
    }, {
      label: W.intl.string(W.t.KaFxra),
      sound: "activity_user_join"
    }, {
      label: W.intl.string(W.t.S14z9v),
      sound: "activity_user_left"
    }, {
      label: W.intl.string(W.t.CP3DCw),
      sound: "reconnect"
    }],
    g = null != C.Z.useHolidaySoundpack();
  return <P.F setting={F.s6.NOTIFICATIONS_SOUNDS}><u.hjN>{g ? <i.Fragment>{<u.vwX className={K.marginBottom20}>{W.intl.string(W.t.fgSHf3)}</u.vwX>}{<O.Z />}</i.Fragment> : null}{<u.vwX className={a()(K.marginBottom20, K.marginTop20)}>{W.intl.string(W.t.MKWyKS)}</u.vwX>}{<u.j7V note={W.intl.string(W.t["7oXUio"])} value={s} onChange={p.default.setNotifyMessagesInSelectedChannel}>{W.intl.string(W.t.lF5GGR)}</u.j7V>}{<u.j7V note={W.intl.string(W.t["+B0XLC"])} value={n} onChange={p.default.toggleDisableAllSounds}>{W.intl.string(W.t["2ZhCOT"])}</u.j7V>}{m.map(e => {
        let {
          label: r,
          sound: s,
          focusModeDisabled: a
        } = e;
        return <Q label={r} disabled={n || true === a} tooltip={a ? W.intl.string(W.t.cIRG0t) : true} onChange={e => d(s, e)} onPreview={e => c(s, e)} enabled={!n && !t.includes(s) && true !== a} />
      })}</u.hjN></P.F>
}

function ee() {
  let e = (0, Chunk442837.e7)([Chunk487419.Z], () => Chunk487419.Z.getGuildAlertSettings()),
    [t, n] = Chunk73800.useState(null),
    s = Chunk709054.default.keys(module).map(t => {
      let n = e[t];
      return {
        label: n.guildName,
        value: n.guildId
      }
    });
  return 0 === Object.keys(module).length ? null : <Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS}>{<Chunk481060.X6q variant={"heading-lg/semibold"} className={Chunk20493.marginBottom20}>{Chunk388032.intl.string(Chunk388032.t.D9yVAA)}</Chunk481060.X6q>}{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION} className={Chunk20493.marginBottom20}>{Chunk388032.intl.string(Chunk388032.t["0PhAOD"])}</Chunk481060.R94>}{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.Q0PsXV)}>{<Chunk481060.q4e className={null != exports ? Chunk20493.marginBottom20 : Chunk20493.marginBottom40} value={exports} onChange={e => {
          n(e)
        }} options={Chunk120356} />}{null != exports ? <div className={Chunk20493.marginTop20}>{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS}>{<Chunk481060.j7V className={Chunk20493.marginBottom20} note={Chunk388032.intl.string(Chunk388032.t["z8Td4+"])} value={!module[exports].disableRaidAlertNag} onChange={() => {
              (0, Chunk675478.PS)(exports, e => {
                e.disableRaidAlertNag = !e.disableRaidAlertNag
              }, Chunk675478.fy.INFREQUENT_USER_ACTION)
            }} hideBorder={true}>{Chunk388032.intl.string(Chunk388032.t.u6dc5O)}</Chunk481060.j7V>}{<Chunk481060.$i$ className={a()(Chunk20493.marginTop20, Chunk20493.marginBottom40)} />}</Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS}>{<Chunk481060.j7V className={Chunk20493.marginBottom20} note={Chunk388032.intl.string(Chunk388032.t.PyxXs7)} value={!module[exports].disableRaidAlertPush} onChange={() => {
              (0, Chunk675478.PS)(exports, e => {
                e.disableRaidAlertPush = !e.disableRaidAlertPush
              }, Chunk675478.fy.INFREQUENT_USER_ACTION)
            }} hideBorder={true}>{Chunk388032.intl.string(Chunk388032.t.P8MG6u)}</Chunk481060.j7V>}{<Chunk481060.$i$ className={a()(Chunk20493.marginTop20, Chunk20493.marginBottom40)} />}</Chunk921801.F>}</div> : null}{null != exports ? null : <Chunk481060.$i$ className={a()(Chunk20493.marginTop20, Chunk20493.marginBottom40)} />}</Chunk481060.xJW>}</Chunk921801.F>
}
class et extends Chunk73800.PureComponent {
  handleDesktopChange(e) {
    let t = e ? H.qrD.ALL : H.qrD.NEVER;
    if (t !== H.qrD.NEVER) L.Z.requestPermission(e => {
      let t = e ? H.$Ab.ENABLED : H.$Ab.BLOCKED;
      p.default.setPermissionsState(t, "UserSettingsModal")
    });
    else p.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e.value;
    p.default.setTTSType(t)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: t,
      disableUnreadBadge: n,
      taskbarFlash: r,
      disabledSounds: s,
      disableAllSounds: l,
      notifyMessagesInSelectedChannel: c,
      focusMode: d
    } = this.props, m = Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)(), p = o().range(1, 11).map(e => ({
      value: 60 * e,
      label: W.intl.formatToPlainString(W.t.iXLF9f, {
        minutes: e
      })
    }));
    return <Chunk481060.hjN tag={Chunk481060.RB0.H1} title={Chunk388032.intl.string(Chunk388032.t.HcoRu7)}>{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_ENABLE_DESKTOP}><Chunk481060.j7V className={Chunk20493.marginBottom20} value={module !== Chunk981631.qrD.NEVER && !Chunk524437} onChange={this.handleDesktopChange} note={Chunk388032.intl.string(Chunk388032.t.wF9ih4)} disabled={Chunk524437} tooltipNote={Chunk524437 ? Chunk388032.intl.string(Chunk388032.t.cIRG0t) : true}>{Chunk388032.intl.string(Chunk388032.t["/0WClp"])}</Chunk481060.j7V></Chunk921801.F>}{<ei />}{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE}><Chunk481060.j7V className={Chunk668781 ? Chunk20493.marginBottom20 : Chunk20493.marginBottom40} value={!require} note={Chunk388032.intl.string(Chunk388032.t["9K4qwc"])} onChange={this.handleToggleShowUnreadBadge}>{Chunk388032.intl.string(Chunk388032.t.VH8AIC)}</Chunk481060.j7V></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING}><Chunk481060.j7V className={Chunk20493.marginBottom40} value={Chunk73800} note={Chunk388032.intl.string(Chunk388032.t["bd4j4+"])} onChange={this.handleToggleShowFlash}>{Chunk388032.intl.string(Chunk388032.t.xSmFQE)}</Chunk481060.j7V></Chunk921801.F>}{<er />}{<ed />}{<ec />}{<eo />}{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT}><Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.TTvjd3)}>{<Chunk481060.q4e value={exports} onChange={Chunk695346.CM.updateSetting} options={Chunk292556} />}{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION} className={Chunk20493.marginTop8}>{Chunk388032.intl.string(Chunk388032.t.Xytv9P)}</Chunk481060.R94>}{<Chunk481060.$i$ className={a()(Chunk20493.marginTop40, Chunk20493.marginBottom40)} />}</Chunk481060.xJW></Chunk921801.F>}{this.renderTTS()}{<ee />}{<Chunk481060.xJW><$ disabledSounds={Chunk120356} disableAllSounds={Chunk392711} notifyMessagesInSelectedChannel={Chunk442837} /></Chunk481060.xJW>}{<Chunk33656.Z />}</Chunk481060.hjN>
  }
  constructor(...e) {
    super(...e), q(this, "handleToggleShowUnreadBadge", () => {
      p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), q(this, "handleToggleShowFlash", () => {
      p.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), q(this, "renderTTS", () => {
      if (!h.Zh) return null;
      let e = [{
        name: W.intl.string(W.t.B1AGeH),
        value: H.PrB.ALL_CHANNELS
      }, {
        name: W.intl.string(W.t.uM2rNj),
        value: H.PrB.SELECTED_CHANNEL
      }, {
        name: W.intl.string(W.t.DYO5Oj),
        value: H.PrB.NEVER
      }];
      return <P.F setting={F.s6.NOTIFICATIONS_TEXT_TO_SPEECH}>{<u.xJW title={W.intl.string(W.t.VIm5MD)}>{<u.R94 type={u.geA.DESCRIPTION} className={K.marginBottom8}>{W.intl.string(W.t["+4dnAw"])}</u.R94>}{<u.FXm options={e} onChange={this.handleTTSChange} value={this.props.ttsType} />}</u.xJW>}{<u.$i$ className={a()(K.marginTop40, K.marginBottom40)} />}</P.F>
    })
  }
}
let en = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-01_mention_on_all_messages",
  label: "Mention on all messages",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Increment mention count when receiving a message in a channel set to all messages",
    config: {
      enabled: true
    }
  }]
});

function ei() {
  let e = en.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: false
    }).enabled,
    t = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.mentionOnAllMessages);
  return module ? <Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES}><Chunk481060.j7V className={Chunk20493.marginBottom20} value={exports} onChange={e => {
        g.Z.setAccountFlag(z.c.MENTION_ON_ALL_MESSAGES, e)
      }} note={"Increments the mention count when receiving a message in a channel set to 'All Messages'"}>{"Mention on all messages?"}</Chunk481060.j7V></Chunk921801.F> : null
}

function er() {
  let e = Chunk312400.xT.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: false
    }).enabled,
    {
      manuallyOpen: t
    } = Chunk312400.fs.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: false
    }),
    n = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.useNewNotifications),
    [s, l] = Chunk73800.useState(false);
  return module && (require || exports) ? <Chunk255367.Fragment>{require ? <Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS}><Chunk481060.j7V className={Chunk20493.marginBottom40} value={require} disabled={Chunk120356 || !require} note={Chunk388032.intl.string(Chunk388032.t.frbLrK)} onChange={() => es(Chunk392711)}>{Chunk388032.intl.string(Chunk388032.t.z21l8P)}</Chunk481060.j7V></Chunk921801.F> : exports ? <Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS}><Chunk481060.j7V className={Chunk20493.marginBottom40} value={require} disabled={Chunk120356 || require} note={"Turns on the new notification system"} onChange={e => {
          g.Z.setAccountFlag(z.c.USE_NEW_NOTIFICATIONS, e)
        }}>{Chunk388032.intl.string(Chunk388032.t.z21l8P)}</Chunk481060.j7V></Chunk921801.F> : null}{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_NEW_SETTINGS}>{<Chunk481060.xJW title={"New Notification Settings (Advanced, Staff Only)"}><div style={{
            display: "flex",
            gap: 16
          }}>{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT}><Chunk481060.zxk variant={"primary"} text={"Restore most recent snapshot"} onClick={Chunk223683.KP} /></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_LAUNCH_MIGRATION}><Chunk481060.zxk variant={"primary"} text={"Launch Migration"} onClick={() => {
                (0, Chunk392888.R)(true)
              }} /></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM}><Chunk481060.j7V hideBorder={true} value={require} onChange={e => {
                g.Z.setAccountFlag(z.c.USE_NEW_NOTIFICATIONS, e)
              }}>{"Toggle new system on/off"}</Chunk481060.j7V></Chunk921801.F>}</div></Chunk481060.xJW>}{<Chunk481060.$i$ className={a()(Chunk20493.marginTop40, Chunk20493.marginBottom40)} />}</Chunk921801.F>}</Chunk255367.Fragment> : null
}
async function es(e) {
  e(true);
  let t = await (0, S.Tn)();
  0 === t.length ? await (0, I.oL)() : m.Z.show({
    title: W.intl.string(W.t["cY+Ooa"]),
    body: W.intl.format(W.t["7zTJJS"], {
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: W.intl.string(W.t["ETE/oK"]),
    confirmText: W.intl.string(W.t.Rm96T0),
    onConfirm: I.oL
  }), e(false)
}

function ea(e) {
  let t = (0, v.p)();
  return <et{...J(X({}, e), {
    focusMode: t
  })} />
}

function el() {
  let e = (0, Chunk442837.cj)([Chunk292959.Z], () => ({
    disableUnreadBadge: Chunk292959.Z.getDisableUnreadBadge(),
    taskbarFlash: Chunk292959.Z.taskbarFlash,
    disabledSounds: Chunk292959.Z.getDisabledSounds(),
    disableAllSounds: Chunk292959.Z.getDisableAllSounds(),
    desktopType: Chunk292959.Z.getDesktopType(),
    ttsType: Chunk292959.Z.getTTSType(),
    notifyMessagesInSelectedChannel: Chunk292959.Z.getNotifyMessagesInSelectedChannel()
  }));
  return <ea{...J(X({}, module), {
    afkTimeout: Chunk695346.CM.useSetting()
  })} />
}

function eo() {
  let e = (0, Chunk890022._x)("notification_settings"),
    t = (0, Chunk688907.BH)(),
    n = (0, Chunk688907.nC)(),
    r = (0, Chunk442837.e7)([Chunk761781.Z], () => Chunk761781.Z.currentUserApplicationIds.size > 0);
  if (!module) return null;
  let s = [{
    name: Chunk388032.intl.string(Chunk388032.t.PCRbS0),
    value: Chunk524437.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.UBa6pa),
    value: Chunk524437.Tv.ONLY_GAMES_PLAYED,
    disabled: !Chunk73800,
    desc: Chunk73800 ? null : Chunk388032.intl.string(Chunk388032.t.XIH6xM)
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.TCxJ8v),
    value: Chunk524437.Tv.ACTIVITY_NOTIFICATIONS_DISABLED
  }];
  return <Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_GAME_ACTIVITY}>{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.omtoJy)} className={Chunk20493.marginBottom20}>{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION} className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t.ncS4CA)}</Chunk481060.R94>}{<Chunk481060.FXm options={Chunk120356} onChange={e => {
          U.YT.updateSetting(e.value)
        }} value={exports} />}</Chunk481060.xJW>}{<Chunk481060.j7V onChange={() => {
        Chunk695346.Qq.updateSetting(!require)
      }} value={require}>{Chunk388032.intl.string(Chunk388032.t.SZue3N)}</Chunk481060.j7V>}</Chunk921801.F>
}

function ec() {
  let e = Chunk695346.fz.useSetting(),
    t = [{
      name: Chunk388032.intl.string(Chunk388032.t["9x/Rtb"]),
      value: Chunk524437.Ns.NOTIFICATIONS_ENABLED
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.fJAbQU),
      value: Chunk524437.Ns.ONLY_DMS
    }, {
      name: Chunk388032.intl.string(Chunk388032.t["xu+UDQ"]),
      value: Chunk524437.Ns.NOTIFICATIONS_DISABLED
    }];
  return Chunk106371.Z.getCurrentConfig({
    location: "webSettings"
  }).enableInAppNotifications ? <Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_REACTIONS}>{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.Rq0NFh)}>{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION} className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t.oWF6eX)}</Chunk481060.R94>}{<Chunk481060.FXm options={exports} onChange={t => {
          (0, A.MR)(t.value, e)
        }} value={module} />}</Chunk481060.xJW>}{<Chunk481060.$i$ className={a()(Chunk20493.marginTop40, Chunk20493.marginBottom40)} />}</Chunk921801.F> : null
}

function ed() {
  let e = Chunk695346.d8.useSetting();
  return (0, Chunk462354.Az)("webSettings").enabled ? <Chunk921801.F setting={Chunk726985.s6.NOTIFICATIONS_VOICE_ACTIVITY}><Chunk481060.j7V value={module} onChange={Chunk210176.I} note={Chunk388032.intl.string(Chunk388032.t.rngMNz)}><Chunk481060.vwX className={Chunk589848.titleWithBeta}>{Chunk388032.intl.string(Chunk388032.t.wtk08f)}{<Chunk688465.Z />}</Chunk481060.vwX></Chunk481060.j7V></Chunk921801.F> : null
}