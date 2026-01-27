/** Chunk was on 41727 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => H,
  LR: () => V,
  aI: () => F
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

function B(e, t) {
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

function V(e) {
  let {
    numUsers: t
  } = e;
  return (0, r.jsx)("div", {
    className: G.BN,
    children: (0, r.jsxs)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function F(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, l = n ? t : k.intl.formatToPlainString(k.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: s()(G.yJ, {
      [G.Nr]: n
    }),
    children: [(0, r.jsx)("div", {
      className: G.$L,
      children: (0, r.jsx)(o.LoC, {
        size: "md",
        color: "currentColor",
        className: G.wG
      })
    }), (0, r.jsx)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: l
    })]
  })
}
let H = (0, Chunk296216.J)(function(e) {
  var t;
  let {
    collapsed: i,
    user: h,
    channel: V,
    mute: F,
    localMute: H,
    localVideoDisabled: K,
    deaf: W,
    video: z,
    embeddedApplication: Y,
    serverMute: q,
    serverDeaf: X,
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
    tabIndex: ef,
    location: eg,
    isSelf: em,
    application: eb,
    hangStatusActivity: eA,
    requestToStreamActivity: ey,
    showHangStatus: e_
  } = e, {
    enableUserHoverActivities: eO
  } = (0, R.fC)({
    guildId: V.guild_id,
    location: "VoiceUser"
  }), ej = l.useRef(null), [ev, ex] = l.useState(false), eE = l.useRef(null), [eC, eS] = l.useState(false), [eI, eN] = l.useState(false), [eT, eP] = l.useState(false), [ew, eR] = l.useState(false), eD = eI || ew || eT, eM = eC || eD, eL = (null == ey ? true : ey.session_id) != null, ek = () => {
    ex(!ev)
  }, eG = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eT && eP(false), eI && eN(false)), eU()
  }, eU = () => {
    null == eo || eo(h.id)
  }, eB = e => {
    (!eO || em) && (e ? eE.current = setTimeout(() => {
      eS(true)
    }, 150 * !!eu) : clearTimeout(eE.current))
  };
  l.useEffect(() => () => clearTimeout(eE.current), []);
  let eV = e => {
      e && eS(false)
    },
    eF = () => {
      if (!(er && (0, _.eo)(V, w.A, N.A, T.A, b.default)[0])) return;
      let e = {
        streamType: L.U4.GUILD,
        ownerId: h.id,
        channelId: V.id,
        guildId: V.guild_id
      };
      I.default.getId() !== h.id && d.default.selectVoiceChannel(V.id), el ? ((0, O.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, p.Nl)(e), null == eo || eo(h.id)
    },
    eH = e => {
      (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("52458")]).then(n.bind(n, 107632));
        return t => (0, r.jsx)(e, B(U({}, t), {
          user: h,
          guildId: V.guild_id,
          channel: V,
          showMediaItems: true,
          showStageChannelItems: V.isGuildStageVoice(),
          onInteraction: (0, m.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, {
            targetUserId: h.id
          })
        }))
      })
    },
    eK = e => em ? (0, r.jsx)(v.h, B(U({}, e), {
      channel: V,
      setIsHangStatusInputFocused: eN,
      setIsEmojiPickerOpen: eR
    })) : null != eA ? (0, r.jsx)(x.E, B(U({}, e), {
      hangStatusActivity: eA,
      channel: V,
      userId: h.id
    })) : null,
    eW = () => (0, r.jsx)(E.A, {
      userId: h.id,
      channel: V
    }),
    ez = () => (0, f.r9)() && (0, f.UK)(V.id) ? null : (0, r.jsx)(j.A, {
      user: h,
      channel: V,
      onWatch: eF,
      previewIsOpen: eu,
      location: eg
    }),
    eY = (0, r.jsx)("div", {
      className: G.kZ,
      "data-dnd-name": V.name,
      onMouseEnter: eh ? true : () => {
        eO ? (em && e_ && !ev && !eM && eS(true), ev || null == ea || ea(h.id)) : (er || e_ || eL) && !ev && (null == ea || ea(h.id))
      },
      onMouseLeave: eh ? true : eU,
      children: (0, r.jsx)(C.A, {
        clickTrap: (null == h ? true : h.id) === (null == (t = P.default.getCurrentUser()) ? true : t.id) && ev,
        targetElementRef: ej,
        user: h,
        guildId: V.guild_id,
        channelId: V.id,
        newAnalyticsLocations: [g.A.VOICE_USER],
        shouldShow: ev,
        onRequestClose: () => ex(false),
        children: e => (e => {
          let t = M.hv.has(null != ed ? ed : ""),
            n = {
              user: h,
              speaking: Z,
              latched: $,
              disconnected: ee,
              mute: F,
              localMute: H,
              localVideoDisabled: K,
              isStreaming: er,
              isGuest: ei,
              video: z,
              priority: es,
              ringing: Q,
              deaf: W,
              nick: J,
              collapsed: i,
              overlap: i,
              serverMute: q,
              serverDeaf: X,
              tabIndex: ef,
              otherClientSessionType: ed,
              voicePlatform: ep,
              embeddedApplication: Y,
              avatarContainerClass: s()({
                [G.dj]: true
              }),
              disabled: eh && !t,
              selected: ev,
              onClick: t ? true : ek,
              onDoubleClick: eF,
              onContextMenu: eH,
              guildId: V.guild_id,
              isSelf: em,
              application: eb,
              channelId: V.id,
              hangStatusActivity: eA,
              showHangStatus: e_
            };
          if (eh) {
            var l;
            return (0, r.jsx)(a.m, {
              text: null != (l = (0, A.A)(ed)) ? l : k.intl.string(k.t.IyYqqY),
              children: (0, r.jsx)(S.Ay, U({
                ref: ej
              }, n))
            })
          }
          let c = () => null;
          return e_ && eM && (!eO || em) ? c = eK : eO ? c = em && e_ ? eK : () => (0, r.jsx)(D.A, {
            channel: V,
            user: h,
            onAction: eU,
            onWatchStream: er ? eF : true,
            previewIsOpen: eu,
            hangStatusActivity: eA
          }) : er ? c = ez : eL && h.id !== I.default.getId() ? c = eW : e_ && (c = eK), (0, r.jsx)(o.YNO, {
            targetElementRef: ej,
            position: "right",
            renderPopout: c,
            shouldShow: (ec || e_ && eD && (!eO || em)) && !ev,
            onRequestClose: eG,
            align: e_ && eM && !em && !eO ? "center" : true,
            spacing: e_ && eM && (!eO || em) ? 8 : 0,
            children: () => (0, r.jsx)(S.Ay, B(U({}, n), {
              ref: ej,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eB,
              handleHoverIcons: eV,
              onAddHangStatusClicked: () => eP(true)
            }))
          })
        })(e)
      })
    });
  return en ? et(eY) : eY
})