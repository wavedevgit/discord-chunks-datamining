/** Chunk was on 34740 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => U,
  ZP: () => H,
  ul: () => B
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

function k(e) {
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

function D(e, t) {
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
    className: L.moreContainer,
    children: (0, i.jsxs)(s.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function B(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, r = n ? t : R.intl.formatToPlainString(R.t["+v2pN2"], {
    count: t
  });
  return (0, i.jsxs)("div", {
    className: a()(L.audienceContainer, {
      [L.audienceContainerCollapsed]: n
    }),
    children: [(0, i.jsx)("div", {
      className: L.audienceIconContainer,
      children: (0, i.jsx)(s.VWR, {
        size: "md",
        color: "currentColor",
        className: L.audienceIcon
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
    user: h,
    channel: U,
    mute: B,
    localMute: H,
    localVideoDisabled: V,
    deaf: F,
    video: G,
    embeddedApplication: z,
    serverMute: W,
    serverDeaf: q,
    nick: K,
    ringing: Y,
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
    location: eh,
    isSelf: ef,
    application: em,
    hangStatusActivity: eg,
    requestToStreamActivity: eb,
    showHangStatus: ey
  } = e, eC = r.useRef(null), [ev, e_] = r.useState(false), ex = r.useRef(null), [ej, eO] = r.useState(false), [eE, eS] = r.useState(false), [eP, eI] = r.useState(false), [eZ, eT] = r.useState(false), eN = eE || eZ || eP, eA = ej || eN, ew = (null == eb ? true : eb.session_id) != null, eM = () => {
    e_(!ev)
  }, eR = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eP && eI(false), eE && eS(false)), eL()
  }, eL = () => {
    (et || ey || ew) && (null == ea || ea(h.id))
  }, ek = e => {
    e ? ex.current = setTimeout(() => {
      eO(true)
    }, 150 * !!es) : clearTimeout(ex.current)
  };
  r.useEffect(() => () => clearTimeout(ex.current), []);
  let eD = e => {
      e && eO(false)
    },
    eU = () => {
      if (!(et && (0, v.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
      let e = {
        streamType: M.lo.GUILD,
        ownerId: h.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== h.id && d.default.selectVoiceChannel(U.id), en ? ((0, _.Z)(e), c.Z.selectParticipant(e.channelId, (0, C.V9)(e))) : (0, p.iV)(e), null == ea || ea(h.id)
    },
    eB = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("96306")]).then(n.bind(n, 757387));
        return t => (0, i.jsx)(e, D(k({}, t), {
          user: h,
          guildId: U.guild_id,
          channel: U,
          showMediaItems: true,
          showStageChannelItems: U.isGuildStageVoice(),
          onInteraction: (0, g.u)("GuildChannelUserContextMenu", m.Z.VOICE_USER, {
            targetUserId: h.id
          })
        }))
      })
    },
    eH = e => ef ? (0, i.jsx)(j.$, D(k({}, e), {
      channel: U,
      setIsHangStatusInputFocused: eS,
      setIsEmojiPickerOpen: eT
    })) : null != eg ? (0, i.jsx)(O.I, D(k({}, e), {
      hangStatusActivity: eg,
      channel: U,
      userId: h.id
    })) : null,
    eV = () => (0, i.jsx)(E.Z, {
      userId: h.id,
      channel: U
    }),
    eF = () => (0, f.dl)() && (0, f.zd)(U.id) ? null : (0, i.jsx)(x.Z, {
      user: h,
      channel: U,
      onWatch: eU,
      previewIsOpen: es,
      location: eh
    }),
    eG = (0, i.jsx)("div", {
      className: L.draggable,
      "data-dnd-name": U.name,
      onMouseEnter: ed ? true : () => {
        (et || ey || ew) && !ev && (null == el || el(h.id))
      },
      onMouseLeave: ed ? true : eL,
      children: (0, i.jsx)(S.Z, {
        clickTrap: (null == h ? true : h.id) === (null == (t = N.default.getCurrentUser()) ? true : t.id) && ev,
        targetElementRef: eC,
        user: h,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [m.Z.VOICE_USER],
        shouldShow: ev,
        onRequestClose: () => e_(false),
        children: e => (e => {
          let t = w.al.has(null != ec ? ec : ""),
            n = {
              user: h,
              speaking: X,
              latched: J,
              disconnected: Q,
              mute: B,
              localMute: H,
              localVideoDisabled: V,
              isStreaming: et,
              isGuest: ei,
              video: G,
              priority: er,
              ringing: Y,
              deaf: F,
              nick: K,
              collapsed: l,
              overlap: l,
              serverMute: W,
              serverDeaf: q,
              tabIndex: ep,
              otherClientSessionType: ec,
              voicePlatform: eu,
              embeddedApplication: z,
              avatarContainerClass: a()({
                [L.userAvatar]: true
              }),
              disabled: ed && !t,
              selected: ev,
              onClick: t ? true : eM,
              onDoubleClick: eU,
              onContextMenu: eB,
              guildId: U.guild_id,
              isSelf: ef,
              application: em,
              channelId: U.id,
              hangStatusActivity: eg,
              showHangStatus: ey
            };
          if (ed) {
            var r;
            return (0, i.jsx)(o.u, {
              text: null != (r = (0, y.Z)(ec)) ? r : R.intl.string(R.t.IyYqqY),
              children: (0, i.jsx)(P.ZP, k({
                ref: eC
              }, n))
            })
          }
          let c = () => null;
          return ey && eA ? c = eH : et ? c = eF : ew && h.id !== I.default.getId() ? c = eV : ey && (c = eH), (0, i.jsx)(s.yRy, {
            targetElementRef: eC,
            position: "right",
            renderPopout: c,
            shouldShow: (eo || ey && eN) && !ev,
            onRequestClose: eR,
            align: ey && eA && !ef ? "center" : true,
            spacing: ey && eA ? 8 : 0,
            children: () => (0, i.jsx)(P.ZP, D(k({}, n), {
              ref: eC,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: ek,
              handleHoverIcons: eD,
              onAddHangStatusClicked: () => eI(true)
            }))
          })
        })(e)
      })
    });
  return ee ? $(eG) : eG
})