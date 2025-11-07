/** Chunk was on 86642 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => U,
  ZP: () => V,
  ul: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk456077 = require("./456077.jsx"),
  Chunk597998 = require("./597998.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk927923 = require("./927923.js"),
  Chunk70722 = require("./70722.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk92024 = require("./92024.js");

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

function F(e) {
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
let V = (0, Chunk888651.$)(function(e) {
  var t;
  let {
    collapsed: l,
    user: f,
    channel: U,
    mute: F,
    localMute: V,
    localVideoDisabled: B,
    deaf: H,
    video: G,
    embeddedApplication: W,
    serverMute: z,
    serverDeaf: q,
    nick: Y,
    ringing: K,
    speaking: X,
    latched: J,
    disconnected: Q,
    connectUserDragSource: $,
    canDrag: ee,
    isStreaming: et,
    isWatching: en,
    isGuest: ei,
    priority: er,
    showPreview: el,
    hidePreview: ea,
    shouldShowHoverPopout: eo,
    previewIsOpen: es,
    otherClientSessionType: ec,
    voicePlatform: eu,
    isSelfOnOtherClient: ed = false,
    tabIndex: ep,
    location: ef,
    isSelf: eh,
    application: em,
    hangStatusActivity: eg,
    requestToStreamActivity: eb,
    showHangStatus: ey
  } = e, eC = r.useRef(null), [e_, ev] = r.useState(false), ex = r.useRef(null), [eO, eE] = r.useState(false), [ej, eS] = r.useState(false), [eP, eI] = r.useState(false), [eZ, eT] = r.useState(false), eN = ej || eZ || eP, eA = eO || eN, ew = (null == eb ? true : eb.session_id) != null, eM = () => {
    ev(!e_)
  }, eR = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eP && eI(false), ej && eS(false)), eD()
  }, eD = () => {
    (et || ey || ew) && (null == ea || ea(f.id))
  }, eL = e => {
    e ? ex.current = setTimeout(() => {
      eE(true)
    }, 150 * !!es) : clearTimeout(ex.current)
  };
  r.useEffect(() => () => clearTimeout(ex.current), []);
  let ek = e => {
      e && eE(false)
    },
    eU = () => {
      if (!(et && (0, _.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
      let e = {
        streamType: M.lo.GUILD,
        ownerId: f.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id), en ? ((0, v.Z)(e), c.Z.selectParticipant(e.channelId, (0, C.V9)(e))) : (0, p.iV)(e), null == ea || ea(f.id)
    },
    eF = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("96306")]).then(n.bind(n, 757387));
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
    eV = e => eh ? (0, i.jsx)(O.$, k(L({}, e), {
      channel: U,
      setIsHangStatusInputFocused: eS,
      setIsEmojiPickerOpen: eT
    })) : null != eg ? (0, i.jsx)(E.I, k(L({}, e), {
      hangStatusActivity: eg,
      channel: U,
      userId: f.id
    })) : null,
    eB = () => (0, i.jsx)(j.Z, {
      userId: f.id,
      channel: U
    }),
    eH = () => (0, h.dl)() && (0, h.zd)(U.id) ? null : (0, i.jsx)(x.Z, {
      user: f,
      channel: U,
      onWatch: eU,
      previewIsOpen: es,
      location: ef
    }),
    eG = (0, i.jsx)("div", {
      className: D.draggable,
      "data-dnd-name": U.name,
      onMouseEnter: ed ? true : () => {
        (et || ey || ew) && !e_ && (null == el || el(f.id))
      },
      onMouseLeave: ed ? true : eD,
      children: (0, i.jsx)(S.Z, {
        clickTrap: (null == f ? true : f.id) === (null == (t = N.default.getCurrentUser()) ? true : t.id) && e_,
        targetElementRef: eC,
        user: f,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [m.Z.VOICE_USER],
        shouldShow: e_,
        onRequestClose: () => ev(false),
        children: e => (e => {
          let t = w.al.has(null != ec ? ec : ""),
            n = {
              user: f,
              speaking: X,
              latched: J,
              disconnected: Q,
              mute: F,
              localMute: V,
              localVideoDisabled: B,
              isStreaming: et,
              isGuest: ei,
              video: G,
              priority: er,
              ringing: K,
              deaf: H,
              nick: Y,
              collapsed: l,
              overlap: l,
              serverMute: z,
              serverDeaf: q,
              tabIndex: ep,
              otherClientSessionType: ec,
              voicePlatform: eu,
              embeddedApplication: W,
              avatarContainerClass: a()({
                [D.userAvatar]: true
              }),
              disabled: ed && !t,
              selected: e_,
              onClick: t ? true : eM,
              onDoubleClick: eU,
              onContextMenu: eF,
              guildId: U.guild_id,
              isSelf: eh,
              application: em,
              channelId: U.id,
              hangStatusActivity: eg,
              showHangStatus: ey
            };
          if (ed) {
            var r;
            return (0, i.jsx)(o.u, {
              text: null != (r = (0, y.Z)(ec)) ? r : R.intl.string(R.t.IyYqqY),
              children: (0, i.jsx)(P.ZP, L({
                ref: eC
              }, n))
            })
          }
          let c = () => null;
          return ey && eA ? c = eV : et ? c = eH : ew && f.id !== I.default.getId() ? c = eB : ey && (c = eV), (0, i.jsx)(s.yRy, {
            targetElementRef: eC,
            position: "right",
            renderPopout: c,
            shouldShow: (eo || ey && eN) && !e_,
            onRequestClose: eR,
            align: ey && eA && !eh ? "center" : true,
            spacing: ey && eA ? 8 : 0,
            children: () => (0, i.jsx)(P.ZP, k(L({}, n), {
              ref: eC,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eL,
              handleHoverIcons: ek,
              onAddHangStatusClicked: () => eI(true)
            }))
          })
        })(e)
      })
    });
  return ee ? $(eG) : eG
})