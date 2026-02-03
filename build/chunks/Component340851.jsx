/** Chunk was on 44669 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => W,
  LR: () => Y,
  aI: () => K
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk442433 = require("./442433.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk296216 = require("./296216.js"),
  Chunk323073 = require("./323073.js"),
  Chunk793574 = require("./793574.js"),
  Chunk480890 = require("./480890.js"),
  Chunk643501 = require("./643501.js"),
  Chunk916641 = require("./916641.js"),
  Chunk652896 = require("./652896.js"),
  Chunk279250 = require("./279250.js"),
  Chunk346846 = require("./346846.js"),
  Chunk142524 = require("./142524.jsx"),
  Chunk958140 = require("./958140.jsx"),
  Chunk721931 = require("./721931.jsx"),
  Chunk766319 = require("./766319.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk481947 = require("./481947.jsx"),
  Chunk430363 = require("./430363.js"),
  Chunk823854 = require("./823854.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk338234 = require("./338234.js"),
  Chunk376696 = require("./376696.jsx"),
  Chunk544105 = require("./544105.js"),
  Chunk502075 = require("./502075.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk861379 = require("./861379.js");

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Y(e) {
  let {
    numUsers: t
  } = e;
  return (0, r.jsx)("div", {
    className: B.BN,
    children: (0, r.jsxs)(c.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function K(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, l = n ? t : V.intl.formatToPlainString(V.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: s()(B.yJ, {
      [B.Nr]: n
    }),
    children: [(0, r.jsx)("div", {
      className: B.$L,
      children: (0, r.jsx)(c.LoC, {
        size: "md",
        color: "currentColor",
        className: B.wG
      })
    }), (0, r.jsx)(c.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: l
    })]
  })
}
let W = (0, Chunk296216.J)(function(e) {
  var t;
  let {
    collapsed: i,
    user: g,
    channel: Y,
    mute: K,
    localMute: W,
    localVideoDisabled: z,
    deaf: X,
    video: q,
    embeddedApplication: J,
    serverMute: Q,
    serverDeaf: Z,
    nick: $,
    ringing: ee,
    speaking: et,
    latched: en,
    disconnected: er,
    connectUserDragSource: el,
    canDrag: ei,
    isStreaming: es,
    isWatching: ea,
    isGuest: eo,
    priority: ec,
    showPreview: eu,
    hidePreview: ed,
    shouldShowHoverPopout: ep,
    previewIsOpen: eh,
    otherClientSessionType: eg,
    voicePlatform: ef,
    isSelfOnOtherClient: em = false,
    tabIndex: eb,
    location: eA,
    isSelf: ey,
    application: eO,
    hangStatusActivity: ej,
    requestToStreamActivity: ex,
    showHangStatus: e_
  } = e, {
    enableUserHoverActivities: ev
  } = (0, M.fC)({
    guildId: Y.guild_id,
    location: "VoiceUser"
  }), eE = l.useRef(null), [eC, eS] = l.useState(false), eI = l.useRef(null), [eN, eT] = l.useState(false), [eP, ew] = l.useState(false), [eR, eD] = l.useState(false), [eL, eM] = l.useState(false), eG = eP || eL || eR, ek = eN || eG, eU = (null == ex ? true : ex.session_id) != null, eV = (0, a.bG)([T.A], () => T.A.hasVoiceDareForUserId(g.id), [g.id]), eB = (0, N.Uk)("VoiceUser") && eV, eH = () => {
    eS(!eC)
  }, eF = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eR && eD(false), eP && ew(false)), eY()
  }, eY = () => {
    null == ed || ed(g.id)
  }, eK = e => {
    (!ev || ey) && (e ? eI.current = setTimeout(() => {
      eT(true)
    }, 150 * !!eh) : clearTimeout(eI.current))
  };
  l.useEffect(() => () => clearTimeout(eI.current), []);
  let eW = e => {
      e && eT(false)
    },
    ez = () => {
      if (!(es && (0, j.eo)(Y, L.A, w.A, R.A, A.default)[0])) return;
      let e = {
        streamType: U.U4.GUILD,
        ownerId: g.id,
        channelId: Y.id,
        guildId: Y.guild_id
      };
      P.default.getId() !== g.id && p.default.selectVoiceChannel(Y.id), ea ? ((0, x.A)(e), u.A.selectParticipant(e.channelId, (0, O._z)(e))) : (0, h.Nl)(e), null == ed || ed(g.id)
    },
    eX = e => {
      (0, d.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("52458")]).then(n.bind(n, 107632));
        return t => (0, r.jsx)(e, F(H({}, t), {
          user: g,
          guildId: Y.guild_id,
          channel: Y,
          showMediaItems: true,
          showStageChannelItems: Y.isGuildStageVoice(),
          onInteraction: (0, b.s)("GuildChannelUserContextMenu", m.A.VOICE_USER, {
            targetUserId: g.id
          })
        }))
      })
    },
    eq = e => ey ? (0, r.jsx)(v.h, F(H({}, e), {
      channel: Y,
      setIsHangStatusInputFocused: ew,
      setIsEmojiPickerOpen: eM
    })) : null != ej ? (0, r.jsx)(E.E, F(H({}, e), {
      hangStatusActivity: ej,
      channel: Y,
      userId: g.id
    })) : null,
    eJ = () => (0, r.jsx)(C.A, {
      userId: g.id,
      channel: Y
    }),
    eQ = () => (0, f.r9)() && (0, f.UK)(Y.id) ? null : (0, r.jsx)(_.A, {
      user: g,
      channel: Y,
      onWatch: ez,
      previewIsOpen: eh,
      location: eA
    }),
    eZ = (0, r.jsx)("div", {
      className: B.kZ,
      "data-dnd-name": Y.name,
      onMouseEnter: em ? true : () => {
        ev ? (ey && e_ && !eC && !ek && eT(true), eC || null == eu || eu(g.id)) : (es || e_ || eU || eB) && !eC && (null == eu || eu(g.id))
      },
      onMouseLeave: em ? true : eY,
      children: (0, r.jsx)(S.A, {
        clickTrap: (null == g ? true : g.id) === (null == (t = D.default.getCurrentUser()) ? true : t.id) && eC,
        targetElementRef: eE,
        user: g,
        guildId: Y.guild_id,
        channelId: Y.id,
        newAnalyticsLocations: [m.A.VOICE_USER],
        shouldShow: eC,
        onRequestClose: () => eS(false),
        children: e => (e => {
          let t = k.hv.has(null != eg ? eg : ""),
            n = {
              user: g,
              speaking: et,
              latched: en,
              disconnected: er,
              mute: K,
              localMute: W,
              localVideoDisabled: z,
              isStreaming: es,
              isGuest: eo,
              video: q,
              priority: ec,
              ringing: ee,
              deaf: X,
              nick: $,
              collapsed: i,
              overlap: i,
              serverMute: Q,
              serverDeaf: Z,
              tabIndex: eb,
              otherClientSessionType: eg,
              voicePlatform: ef,
              embeddedApplication: J,
              avatarContainerClass: s()({
                [B.dj]: true
              }),
              disabled: em && !t,
              selected: eC,
              onClick: t ? true : eH,
              onDoubleClick: ez,
              onContextMenu: eX,
              guildId: Y.guild_id,
              isSelf: ey,
              application: eO,
              channelId: Y.id,
              hangStatusActivity: ej,
              showHangStatus: e_
            };
          if (em) {
            var l;
            return (0, r.jsx)(o.m, {
              text: null != (l = (0, y.A)(eg)) ? l : V.intl.string(V.t.IyYqqY),
              children: (0, r.jsx)(I.Ay, H({
                ref: eE
              }, n))
            })
          }
          let a = () => null;
          return e_ && ek && (!ev || ey) ? a = eq : ev ? a = ey && e_ ? eq : () => (0, r.jsx)(G.A, {
            channel: Y,
            user: g,
            onAction: eY,
            onWatchStream: es ? ez : true,
            previewIsOpen: eh,
            hangStatusActivity: ej
          }) : es ? a = eQ : eU && g.id !== P.default.getId() ? a = eJ : e_ && (a = eq), (0, r.jsx)(c.YNO, {
            targetElementRef: eE,
            position: "right",
            renderPopout: a,
            shouldShow: (ep || e_ && eG && (!ev || ey)) && !eC,
            onRequestClose: eF,
            align: e_ && ek && !ey && !ev ? "center" : true,
            spacing: e_ && ek && (!ev || ey) ? 8 : 0,
            children: () => (0, r.jsx)(I.Ay, F(H({}, n), {
              ref: eE,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eK,
              handleHoverIcons: eW,
              onAddHangStatusClicked: () => eD(true)
            }))
          })
        })(e)
      })
    });
  return ei ? el(eZ) : eZ
})