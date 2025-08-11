/** Chunk was on web.js **/
/** chunk id: 597998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => z,
  eJ: () => Y,
  nm: () => W
}), require("./539854.js"), require("./997841.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk456100 = require("./456100.js"),
  Chunk657305 = require("./657305.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.js"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk925329 = require("./925329.js"),
  Chunk340044 = require("./340044.jsx"),
  Chunk833858 = require("./833858.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk880395 = require("./880395.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk574254 = require("./574254.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.js"),
  Chunk630388 = require("./630388.js"),
  Chunk51144 = require("./51144.js"),
  Chunk91088 = require("./91088.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk850999 = require("./850999.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = V(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let H = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: i
    } = e;
    return i && null == t ? <l.DY3 className={j.iconSpacing} text={k.intl.string(k.t.qstQub)}><l.svS className={a()(j.icon, n)} /></l.DY3> : <l.DY3 className={j.iconSpacing} text={(0, O.O8)(t)}><v.Z hangStatusActivity={t} className={a()(j.hangStatusIcon, n)} /></l.DY3>
  },
  Y = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return <div className={a()(i, j.list, n ? j.listCollapse : j.listDefault)} role={"group"}>{t}</div>
  };

function W(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: o,
    serverMute: s,
    deaf: c,
    serverDeaf: u,
    collapsed: _,
    video: p,
    isStreaming: h,
    disabled: m,
    isWatching: E,
    iconClassName: b,
    embeddedApplication: y,
    otherClientSessionType: O,
    voicePlatform: v,
    application: I,
    guildId: T,
    channelId: S,
    user: A,
    disconnected: N,
    hangStatusActivity: w,
    showHangStatus: D,
    isSelf: U,
    handleHoverHangStatus: G,
    handleHoverIcons: B
  } = e, {
    enabled: Z
  } = d.c.getCurrentConfig({
    location: "VoiceUserIcons"
  }, {
    autoTrackExposure: true
  });
  if (_ || m) return null;
  let F = [],
    V = <X iconClassName={b} mute={n} localMute={i} serverMute={s} deaf={c} serverDeaf={u} />;
  p && (o ? F.push(<l.DY3 className={j.iconSpacing} text={k.intl.string(k.t["PXMZ//"])}><l.Amn size={"md"} color={"currentColor"} className={a()(j.icon, b)} colorClass={j.strikethrough} /></l.DY3>) : F.push(<l.DY3 className={j.iconSpacing} text={k.intl.string(k.t.FlNoSU)}><l.Odl size={"md"} color={"currentColor"} className={a()(j.icon, b)} /></l.DY3>)), N && F.push(<l.DY3 className={j.iconSpacing} text={k.intl.string(k.t.HFwRpq)}><l.Mgn className={a()(j.icon, b)} color={l.TVs.colors.STATUS_WARNING_BACKGROUND} /></l.DY3>);
  let Y = Z ? l.iWm : l.nG3;
  null != y && F.push(<l.DY3 text={(0, f.Z)(y.name)} className={j.iconSpacing}><Y size={"md"} color={"currentColor"} className={a()(j.icon, b)} /></l.DY3>), O === M.YE.XBOX || v === x.wR.XBOX ? F.push(<div className={j.iconSpacing}><R.Z className={a()(j.icon, b)} /></div>) : (O === M.YE.PLAYSTATION || v === x.wR.PLAYSTATION) && F.push(<div className={j.iconSpacing}><C.Z className={a()(j.icon, b)} /></div>), E && F.push(<l.DY3 className={j.iconSpacing} text={k.intl.string(k.t.JH1SJy)}><l.tEF size={"xs"} color={"currentColor"} className={a()(j.icon, b)} /></l.DY3>), h && F.push(<div className={a()(j.iconSpacing, j.liveIconSpacing)}><g.ZP size={g.ZP.Sizes.SMALL} /></div>);
  let W = null != I && !(0, P.yE)(I.flags, L.udG.EMBEDDED),
    K = null == w && W;
  return 0 !== F.length || null != V || D || K ? <div className={a()(j.icons, t)}>{<div className={j.iconGroup} onMouseEnter={() => null == B ? true : B(true)} onMouseLeave={() => null == B ? true : B(false)}>{V}{F}</div>}{D || K ? <div className={j.iconGroup} onMouseEnter={() => null == G ? true : G(true)} onMouseLeave={() => null == G ? true : G(false)}>{K ? (0, r.jsx)(q, {
        application: I,
        iconClassName: b,
        guildId: T,
        channelId: S,
        userId: A.id
      }, "".concat(A.id, "-game")) : (0, r.jsx)(H, {
        hangStatusActivity: w,
        iconClassName: b,
        isSelf: U
      })}</div> : null}</div> : null
}

function K(e, t) {
  var n, {
      avatarContainerClass: o = j.avatarContainer,
      userNameClassName: c = j.usernameFont,
      size: d = L.ipw.SMALL,
      selected: f = false,
      disabled: _ = false,
      isOverlay: g = false
    } = e,
    b = F(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
  let {
    onClick: O,
    onKeyDown: v,
    onDoubleClick: C,
    onContextMenu: R,
    onMouseLeave: P,
    onMouseDown: M,
    priority: U,
    speaking: B,
    collapsed: V,
    mute: H,
    serverMute: Y,
    guildId: K,
    nick: z,
    isGuest: q,
    flipped: X,
    className: Q,
    overlap: J,
    "aria-label": $,
    ringing: ee,
    user: et,
    channelId: en
  } = b, {
    parentAnalyticsLocation: er
  } = (0, p.ZP)(), ei = (0, u.bp)(), eo = null != en ? S.Z.getChannel(en) : null, ea = (0, s.e7)([T.default, A.Z], () => A.Z.isInChannel(en, T.default.getId())), {
    enabled: es
  } = D.P.useExperiment({
    location: "VoiceUser"
  }), el = (0, E.j)({
    displayNameStyles: et.displayNameStyles
  }), [ec, eu] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== N.Z.isOpen() && ((e = N.Z.isOpen()) || eu(false))
      };
    return N.Z.addChangeListener(t), () => N.Z.removeChangeListener(t)
  }, []);
  let ed = e => {
      null == O || O(e, et)
    },
    ef = e => {
      null == C || C(e, et)
    },
    e_ = e => {
      null == R || R(e, et)
    },
    ep = e => {
      null == P || P(e, et)
    },
    eh = e => {
      null == M || M(e, et)
    };

  function em() {
    return U && !V ? <l.ua7 text={k.intl.string(k.t.BVK71t)}>{e => (0, r.jsx)("div", G({
        className: a()(j.iconPriortySpeaker, {
          [j.iconPriortySpeakerSpeaking]: !H && !Y && B
        })
      }, e))}</l.ua7> : null
  }

  function eg() {
    return <div className={a()(o, j.avatar, {
        [j.avatarLarge]: d === L.ipw.LARGE,
        [j.avatarSmall]: d === L.ipw.SMALL,
        [j.avatarSpeaking]: B
      })} style={{
        backgroundImage: "url(".concat(et.getAvatarURL(K, d === L.ipw.LARGE ? 38 : 24), ")")
      }} />
  }

  function eE() {
    let e = <div className={a()(c, j.username, el, {
          [j.usernameSpeaking]: !H && !Y && B
        })}>{null != z ? z : w.ZP.getName(et)}{q ? <span className={j.guestSuffix}>{"\xa0"}{k.intl.string(k.t["pFO/Pj"])}</span> : ""}</div>,
      t = {
        primaryGuild: et.primaryGuild,
        userId: et.id,
        contextGuildId: K,
        isOverlay: g,
        disableTooltip: true,
        className: a()(j.clanTag, g && j.isOverlay),
        profileViewedAnalytics: {
          source: g ? L.jXE.OVERLAY : L.Sbl.VOICE_PANEL
        }
      };
    return !V || g ? <y.Z{...Z(G({}, t), {
      children: e
    })} /> : null
  }

  function eb() {
    return <W{...G({
      disabled: _
    }, b)} />
  }

  function ey(e) {
    null != K && null != eo && ((0, h.v)(er, h.d.MORE), eu(true), (0, I.D)(e, et, eo, {
      context: ei
    }, (e, t) => {
      (0, m.o)({
        menuName: e,
        menuItemProps: t,
        entrypoint: x.A5.THREE_DOT,
        location: er,
        targetUserId: et.id
      })
    }))
  }

  function eO() {
    return V || !ea || es ? null : <l.DY3 text={k.intl.string(k.t["+1H47u"])} className={a()(j.optionsButtonContainer, {
        [j.optionsContainerActive]: ec
      })}><l.P3F className={a()(j.optionsButton, {
          [j.optionsActive]: ec
        })} onClick={ey}><l.xhG size={"md"} className={j.icon} /></l.P3F></l.DY3>
  }
  return <l.kL8 ref={t} className={a()(Q, {
      [j.voiceUser]: true,
      [j.overlap]: J,
      [j.selected]: f,
      [j.clickable]: null != O,
      [j.userSmall]: d === L.ipw.SMALL,
      [j.userLarge]: d === L.ipw.LARGE,
      [j.disabled]: !f && _,
      [j.ringing]: ee
    })} onClick={ed} onDoubleClick={ef} onContextMenu={e_} onMouseLeave={ep} onMouseDown={eh} onKeyDown={v} aria-label={null != (n = null != $ ? $ : z) ? n : et.username} focusProps={{
      offset: {
        right: 4
      }
    }}><div className={a()(j.content, {
        [j.flipped]: X
      })}>{em()}{eg()}{eE()}{eb()}{eO()}</div></l.kL8>
}
let z = Chunk73800.forwardRef(K);

function q(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: o,
    channelId: s,
    userId: u
  } = e, [d, f] = i.useState(false), p = (0, c.O)(e => f(e));
  i.useEffect(() => {
    d && _.ZP.trackWithMetadata(L.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: s,
      guild_id: o,
      user_id: u
    })
  }, [t.id, s, o, u, d]);
  let h = () => {
    _.ZP.trackWithMetadata(L.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
      channel_id: s,
      guild_id: o,
      game_name: t.name,
      user_id: u
    })
  };
  return <l.DY3 text={k.intl.formatToPlainString(k.t.Sq9xJy, {
      game: t.name
    })} aria-label={k.intl.formatToPlainString(k.t.Sq9xJy, {
      game: t.name
    })} className={j.iconSpacing}><div ref={p}><b.Z className={a()(j.icon, n)} game={t} size={b.Z.Sizes.XSMALL} onMouseEnter={h} /></div></l.DY3>
}

function X(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: i,
    serverMute: o,
    deaf: s,
    serverDeaf: c
  } = e, u = [];
  if (n) {
    let e, n = () => i ? k.intl.string(k.t.Q8Uzoa) : o ? k.intl.string(k.t.uLddbW) : k.intl.string(k.t.tjtv3N);
    e = o || i ? l.v0G : l.nRN;
    let s = <e className={a()(j.icon, t, {
        [j.iconServer]: o
      })} color={"currentColor"} />;
    u.push(<l.DY3 text={n()} className={j.iconSpacing}>{s}</l.DY3>)
  }
  if (c || s) {
    let e = c ? l.Vm4 : l.wE8,
      n = <e className={a()(j.icon, t, {
          [j.iconServer]: c
        })} color={"currentColor"} />;
    u.push(<l.DY3 className={j.iconSpacing} text={c ? k.intl.string(k.t.btxSdH) : k.intl.string(k.t.NjmiOD)}>{n}</l.DY3>)
  }
  return 0 === u.length ? null : u
}