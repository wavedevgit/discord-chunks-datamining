/** Chunk was on 42402 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => F,
  LR: () => B,
  aI: () => H
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function U(e) {
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

function V(e, t) {
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

function B(e) {
  let {
    numUsers: t
  } = e;
  return (0, r.jsx)("div", {
    className: k.BN,
    children: (0, r.jsxs)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function H(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, l = n ? t : G.intl.formatToPlainString(G.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: s()(k.yJ, {
      [k.Nr]: n
    }),
    children: [(0, r.jsx)("div", {
      className: k.$L,
      children: (0, r.jsx)(o.LoC, {
        size: "md",
        color: "currentColor",
        className: k.wG
      })
    }), (0, r.jsx)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: l
    })]
  })
}
let F = (0, Chunk296216.J)(function(e) {
  var t;
  let {
    collapsed: i,
    user: h,
    channel: B,
    mute: H,
    localMute: F,
    localVideoDisabled: Y,
    deaf: K,
    video: W,
    embeddedApplication: z,
    serverMute: X,
    serverDeaf: q,
    nick: J,
    ringing: Q,
    speaking: Z,
    latched: $,
    disconnected: ee,
    connectUserDragSource: et,
    canDrag: en,
    isStreaming: er,
    isWatching: el,
    isGuest: ei,
    priority: es,
    showPreview: ea,
    hidePreview: eo,
    shouldShowHoverPopout: ec,
    previewIsOpen: eu,
    otherClientSessionType: ed,
    voicePlatform: ep,
    isSelfOnOtherClient: eh = false,
    tabIndex: eg,
    location: ef,
    isSelf: em,
    application: eb,
    hangStatusActivity: eA,
    requestToStreamActivity: ey,
    showHangStatus: eO
  } = e, {
    enableUserHoverActivities: ej
  } = (0, R.fC)({
    guildId: B.guild_id,
    location: "VoiceUser"
  }), ex = l.useRef(null), [e_, ev] = l.useState(false), eE = l.useRef(null), [eC, eS] = l.useState(false), [eI, eN] = l.useState(false), [eT, eP] = l.useState(false), [ew, eR] = l.useState(false), eD = eI || ew || eT, eL = eC || eD, eM = (null == ey ? true : ey.session_id) != null, eG = () => {
    ev(!e_)
  }, ek = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eT && eP(false), eI && eN(false)), eU()
  }, eU = () => {
    null == eo || eo(h.id)
  }, eV = e => {
    (!ej || em) && (e ? eE.current = setTimeout(() => {
      eS(true)
    }, 150 * !!eu) : clearTimeout(eE.current))
  };
  l.useEffect(() => () => clearTimeout(eE.current), []);
  let eB = e => {
      e && eS(false)
    },
    eH = () => {
      if (!(er && (0, O.eo)(B, w.A, N.A, T.A, b.default)[0])) return;
      let e = {
        streamType: M.U4.GUILD,
        ownerId: h.id,
        channelId: B.id,
        guildId: B.guild_id
      };
      I.default.getId() !== h.id && d.default.selectVoiceChannel(B.id), el ? ((0, j.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, p.Nl)(e), null == eo || eo(h.id)
    },
    eF = e => {
      (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("52458")]).then(n.bind(n, 107632));
        return t => (0, r.jsx)(e, V(U({}, t), {
          user: h,
          guildId: B.guild_id,
          channel: B,
          showMediaItems: true,
          showStageChannelItems: B.isGuildStageVoice(),
          onInteraction: (0, m.s)("GuildChannelUserContextMenu", f.A.VOICE_USER, {
            targetUserId: h.id
          })
        }))
      })
    },
    eY = e => em ? (0, r.jsx)(_.h, V(U({}, e), {
      channel: B,
      setIsHangStatusInputFocused: eN,
      setIsEmojiPickerOpen: eR
    })) : null != eA ? (0, r.jsx)(v.E, V(U({}, e), {
      hangStatusActivity: eA,
      channel: B,
      userId: h.id
    })) : null,
    eK = () => (0, r.jsx)(E.A, {
      userId: h.id,
      channel: B
    }),
    eW = () => (0, g.r9)() && (0, g.UK)(B.id) ? null : (0, r.jsx)(x.A, {
      user: h,
      channel: B,
      onWatch: eH,
      previewIsOpen: eu,
      location: ef
    }),
    ez = (0, r.jsx)("div", {
      className: k.kZ,
      "data-dnd-name": B.name,
      onMouseEnter: eh ? true : () => {
        ej ? (em && eO && !e_ && !eL && eS(true), e_ || null == ea || ea(h.id)) : (er || eO || eM) && !e_ && (null == ea || ea(h.id))
      },
      onMouseLeave: eh ? true : eU,
      children: (0, r.jsx)(C.A, {
        clickTrap: (null == h ? true : h.id) === (null == (t = P.default.getCurrentUser()) ? true : t.id) && e_,
        targetElementRef: ex,
        user: h,
        guildId: B.guild_id,
        channelId: B.id,
        newAnalyticsLocations: [f.A.VOICE_USER],
        shouldShow: e_,
        onRequestClose: () => ev(false),
        children: e => (e => {
          let t = L.hv.has(null != ed ? ed : ""),
            n = {
              user: h,
              speaking: Z,
              latched: $,
              disconnected: ee,
              mute: H,
              localMute: F,
              localVideoDisabled: Y,
              isStreaming: er,
              isGuest: ei,
              video: W,
              priority: es,
              ringing: Q,
              deaf: K,
              nick: J,
              collapsed: i,
              overlap: i,
              serverMute: X,
              serverDeaf: q,
              tabIndex: eg,
              otherClientSessionType: ed,
              voicePlatform: ep,
              embeddedApplication: z,
              avatarContainerClass: s()({
                [k.dj]: true
              }),
              disabled: eh && !t,
              selected: e_,
              onClick: t ? true : eG,
              onDoubleClick: eH,
              onContextMenu: eF,
              guildId: B.guild_id,
              isSelf: em,
              application: eb,
              channelId: B.id,
              hangStatusActivity: eA,
              showHangStatus: eO
            };
          if (eh) {
            var l;
            return (0, r.jsx)(a.m, {
              text: null != (l = (0, A.A)(ed)) ? l : G.intl.string(G.t.IyYqqY),
              children: (0, r.jsx)(S.Ay, U({
                ref: ex
              }, n))
            })
          }
          let c = () => null;
          return eO && eL && (!ej || em) ? c = eY : ej ? c = em && eO ? eY : () => (0, r.jsx)(D.A, {
            channel: B,
            user: h,
            onAction: eU,
            onWatchStream: er ? eH : true,
            previewIsOpen: eu,
            hangStatusActivity: eA
          }) : er ? c = eW : eM && h.id !== I.default.getId() ? c = eK : eO && (c = eY), (0, r.jsx)(o.YNO, {
            targetElementRef: ex,
            position: "right",
            renderPopout: c,
            shouldShow: (ec || eO && eD && (!ej || em)) && !e_,
            onRequestClose: ek,
            align: eO && eL && !em && !ej ? "center" : true,
            spacing: eO && eL && (!ej || em) ? 8 : 0,
            children: () => (0, r.jsx)(S.Ay, V(U({}, n), {
              ref: ex,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eV,
              handleHoverIcons: eB,
              onAddHangStatusClicked: () => eP(true)
            }))
          })
        })(e)
      })
    });
  return en ? et(ez) : ez
})