/** Chunk was on 40184 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => U,
  ZP: () => H,
  ul: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk888651 = require("./888651.js"),
  Chunk622822 = require("./622822.js"),
  Chunk100527 = require("./100527.js"),
  Chunk795318 = require("./795318.js"),
  Chunk258609 = require("./258609.js"),
  Chunk257115 = require("./257115.js"),
  Chunk569545 = require("./569545.js"),
  Chunk102172 = require("./102172.js"),
  Chunk525925 = require("./525925.js"),
  Chunk701362 = require("./701362.jsx"),
  Chunk655018 = require("./655018.jsx"),
  Chunk83896 = require("./83896.jsx"),
  Chunk821415 = require("./821415.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk597998 = require("./597998.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk927923 = require("./927923.js"),
  Chunk70722 = require("./70722.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932732 = require("./932732.js");

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function k(e, t) {
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

function U(e) {
  let {
    numUsers: t
  } = e;
  return (0, i.jsx)("div", {
    className: D.moreContainer,
    children: (0, i.jsxs)(s.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function V(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, r = n ? t : R.intl.formatToPlainString(R.t["+v2pN2"], {
    count: t
  });
  return (0, i.jsxs)("div", {
    className: a()(D.audienceContainer, {
      [D.audienceContainerCollapsed]: n
    }),
    children: [(0, i.jsx)("div", {
      className: D.audienceIconContainer,
      children: (0, i.jsx)(s.VWR, {
        size: "md",
        color: "currentColor",
        className: D.audienceIcon
      })
    }), (0, i.jsx)(s.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: r
    })]
  })
}
let H = (0, Chunk888651.$)(function(e) {
  var t;
  let {
    collapsed: l,
    user: f,
    channel: U,
    mute: V,
    localMute: H,
    localVideoDisabled: F,
    deaf: B,
    video: G,
    embeddedApplication: W,
    serverMute: z,
    serverDeaf: q,
    nick: K,
    ringing: Y,
    speaking: X,
    voiceDb: J,
    latched: Q,
    disconnected: $,
    connectUserDragSource: ee,
    canDrag: et,
    isStreaming: en,
    isWatching: ei,
    isGuest: er,
    priority: el,
    showPreview: ea,
    hidePreview: eo,
    shouldShowHoverPopout: es,
    previewIsOpen: ec,
    otherClientSessionType: eu,
    voicePlatform: ed,
    isSelfOnOtherClient: ep = false,
    tabIndex: ef,
    location: eh,
    isSelf: em,
    application: eg,
    hangStatusActivity: eb,
    requestToStreamActivity: ey,
    showHangStatus: eC
  } = e, ev = r.useRef(null), [ex, eO] = r.useState(false), eE = r.useRef(null), [ej, eS] = r.useState(false), [e_, eP] = r.useState(false), [eI, eZ] = r.useState(false), [eT, eN] = r.useState(false), eA = e_ || eT || eI, ew = ej || eA, eM = (null == ey ? true : ey.session_id) != null, eR = () => {
    eO(!ex)
  }, eD = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eI && eZ(false), e_ && eP(false)), eL()
  }, eL = () => {
    (en || eC || eM) && (null == eo || eo(f.id))
  }, ek = e => {
    e ? eE.current = setTimeout(() => {
      eS(true)
    }, 150 * !!ec) : clearTimeout(eE.current)
  };
  r.useEffect(() => () => clearTimeout(eE.current), []);
  let eU = e => {
      e && eS(false)
    },
    eV = () => {
      if (!(en && (0, v.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
      let e = {
        streamType: M.lo.GUILD,
        ownerId: f.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id), ei ? ((0, x.Z)(e), c.Z.selectParticipant(e.channelId, (0, C.V9)(e))) : (0, p.iV)(e), null == eo || eo(f.id)
    },
    eH = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("96253")]).then(n.bind(n, 757387));
        return t => (0, i.jsx)(e, k(L({}, t), {
          user: f,
          guildId: U.guild_id,
          channel: U,
          showMediaItems: true,
          showStageChannelItems: U.isGuildStageVoice(),
          onInteraction: (0, g.u)("GuildChannelUserContextMenu", m.Z.VOICE_USER, {
            targetUserId: f.id
          })
        }))
      })
    },
    eF = e => em ? (0, i.jsx)(E.$, k(L({}, e), {
      channel: U,
      setIsHangStatusInputFocused: eP,
      setIsEmojiPickerOpen: eN
    })) : null != eb ? (0, i.jsx)(j.I, k(L({}, e), {
      hangStatusActivity: eb,
      channel: U,
      userId: f.id
    })) : null,
    eB = () => (0, i.jsx)(S.Z, {
      userId: f.id,
      channel: U
    }),
    eG = () => (0, h.dl)() && (0, h.zd)(U.id) ? null : (0, i.jsx)(O.Z, {
      user: f,
      channel: U,
      onWatch: eV,
      previewIsOpen: ec,
      location: eh
    }),
    eW = (0, i.jsx)("div", {
      className: D.draggable,
      "data-dnd-name": U.name,
      onMouseEnter: ep ? true : () => {
        (en || eC || eM) && !ex && (null == ea || ea(f.id))
      },
      onMouseLeave: ep ? true : eL,
      children: (0, i.jsx)(_.Z, {
        clickTrap: (null == f ? true : f.id) === (null == (t = N.default.getCurrentUser()) ? true : t.id) && ex,
        targetElementRef: ev,
        user: f,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [m.Z.VOICE_USER],
        shouldShow: ex,
        onRequestClose: () => eO(false),
        children: e => (e => {
          let t = w.al.has(null != eu ? eu : ""),
            n = {
              user: f,
              speaking: X,
              voiceDb: J,
              latched: Q,
              disconnected: $,
              mute: V,
              localMute: H,
              localVideoDisabled: F,
              isStreaming: en,
              isGuest: er,
              video: G,
              priority: el,
              ringing: Y,
              deaf: B,
              nick: K,
              collapsed: l,
              overlap: l,
              serverMute: z,
              serverDeaf: q,
              tabIndex: ef,
              otherClientSessionType: eu,
              voicePlatform: ed,
              embeddedApplication: W,
              avatarContainerClass: a()({
                [D.userAvatar]: true
              }),
              disabled: ep && !t,
              selected: ex,
              onClick: t ? true : eR,
              onDoubleClick: eV,
              onContextMenu: eH,
              guildId: U.guild_id,
              isSelf: em,
              application: eg,
              channelId: U.id,
              hangStatusActivity: eb,
              showHangStatus: eC
            };
          if (ep) {
            var r;
            return (0, i.jsx)(o.u, {
              text: null != (r = (0, y.Z)(eu)) ? r : R.intl.string(R.t.IyYqqY),
              children: (0, i.jsx)(P.ZP, L({
                ref: ev
              }, n))
            })
          }
          let c = () => null;
          return eC && ew ? c = eF : en ? c = eG : eM && f.id !== I.default.getId() ? c = eB : eC && (c = eF), (0, i.jsx)(s.yRy, {
            targetElementRef: ev,
            position: "right",
            renderPopout: c,
            shouldShow: (es || eC && eA) && !ex,
            onRequestClose: eD,
            align: eC && ew && !em ? "center" : true,
            spacing: eC && ew ? 8 : 0,
            children: () => (0, i.jsx)(P.ZP, k(L({}, n), {
              ref: ev,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: ek,
              handleHoverIcons: eU,
              onAddHangStatusClicked: () => eZ(true)
            }))
          })
        })(e)
      })
    });
  return et ? ee(eW) : eW
})