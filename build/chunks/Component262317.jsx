/** Chunk was on 47840 **/
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
  Chunk92024 = require("./92024.js");

function D(e) {
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
    localVideoDisabled: F,
    deaf: V,
    video: G,
    embeddedApplication: z,
    serverMute: W,
    serverDeaf: q,
    nick: Y,
    ringing: K,
    speaking: X,
    disconnected: J,
    connectUserDragSource: Q,
    canDrag: $,
    isStreaming: ee,
    isWatching: et,
    isGuest: en,
    priority: ei,
    showPreview: er,
    hidePreview: el,
    shouldShowHoverPopout: ea,
    previewIsOpen: eo,
    otherClientSessionType: es,
    voicePlatform: ec,
    isSelfOnOtherClient: eu = false,
    tabIndex: ed,
    location: ep,
    isSelf: eh,
    application: ef,
    hangStatusActivity: em,
    requestToStreamActivity: eg,
    showHangStatus: eb
  } = e, eC = r.useRef(null), [ey, e_] = r.useState(false), ev = r.useRef(null), [ex, eO] = r.useState(false), [ej, eE] = r.useState(false), [eS, eP] = r.useState(false), [eI, eZ] = r.useState(false), eT = ej || eI || eS, eN = ex || eT, eA = (null == eg ? true : eg.session_id) != null, ew = () => {
    e_(!ey)
  }, eM = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eS && eP(false), ej && eE(false)), eR()
  }, eR = () => {
    (ee || eb || eA) && (null == el || el(h.id))
  }, eL = e => {
    e ? ev.current = setTimeout(() => {
      eO(true)
    }, 150 * !!eo) : clearTimeout(ev.current)
  };
  r.useEffect(() => () => clearTimeout(ev.current), []);
  let eD = e => {
      e && eO(false)
    },
    ek = () => {
      if (!(ee && (0, _.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
      let e = {
        streamType: M.lo.GUILD,
        ownerId: h.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== h.id && d.default.selectVoiceChannel(U.id), et ? ((0, v.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e), null == el || el(h.id)
    },
    eU = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("96306")]).then(n.bind(n, 757387));
        return t => (0, i.jsx)(e, k(D({}, t), {
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
    eB = e => eh ? (0, i.jsx)(O.$, k(D({}, e), {
      channel: U,
      setIsHangStatusInputFocused: eE,
      setIsEmojiPickerOpen: eZ
    })) : null != em ? (0, i.jsx)(j.I, k(D({}, e), {
      hangStatusActivity: em,
      channel: U,
      userId: h.id
    })) : null,
    eH = () => (0, i.jsx)(E.Z, {
      userId: h.id,
      channel: U
    }),
    eF = () => (0, f.dl)() && (0, f.zd)(U.id) ? null : (0, i.jsx)(x.Z, {
      user: h,
      channel: U,
      onWatch: ek,
      previewIsOpen: eo,
      location: ep
    }),
    eV = (0, i.jsx)("div", {
      className: L.draggable,
      "data-dnd-name": U.name,
      onMouseEnter: eu ? true : () => {
        (ee || eb || eA) && !ey && (null == er || er(h.id))
      },
      onMouseLeave: eu ? true : eR,
      children: (0, i.jsx)(S.Z, {
        clickTrap: (null == h ? true : h.id) === (null == (t = N.default.getCurrentUser()) ? true : t.id) && ey,
        targetElementRef: eC,
        user: h,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [m.Z.VOICE_USER],
        shouldShow: ey,
        onRequestClose: () => e_(false),
        children: e => (e => {
          let t = w.al.has(null != es ? es : ""),
            n = {
              user: h,
              speaking: X,
              disconnected: J,
              mute: B,
              localMute: H,
              localVideoDisabled: F,
              isStreaming: ee,
              isGuest: en,
              video: G,
              priority: ei,
              ringing: K,
              deaf: V,
              nick: Y,
              collapsed: l,
              overlap: l,
              serverMute: W,
              serverDeaf: q,
              tabIndex: ed,
              otherClientSessionType: es,
              voicePlatform: ec,
              embeddedApplication: z,
              avatarContainerClass: a()({
                [L.userAvatar]: true
              }),
              disabled: eu && !t,
              selected: ey,
              onClick: t ? true : ew,
              onDoubleClick: ek,
              onContextMenu: eU,
              guildId: U.guild_id,
              isSelf: eh,
              application: ef,
              channelId: U.id,
              hangStatusActivity: em,
              showHangStatus: eb
            };
          if (eu) {
            var r;
            return (0, i.jsx)(o.u, {
              text: null != (r = (0, C.Z)(es)) ? r : R.intl.string(R.t.IyYqqY),
              children: (0, i.jsx)(P.ZP, D({
                ref: eC
              }, n))
            })
          }
          let c = () => null;
          return eb && eN ? c = eB : ee ? c = eF : eA && h.id !== I.default.getId() ? c = eH : eb && (c = eB), (0, i.jsx)(s.yRy, {
            targetElementRef: eC,
            position: "right",
            renderPopout: c,
            shouldShow: (ea || eb && eT) && !ey,
            onRequestClose: eM,
            align: eb && eN && !eh ? "center" : true,
            spacing: eb && eN ? 8 : 0,
            children: () => (0, i.jsx)(P.ZP, k(D({}, n), {
              ref: eC,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eL,
              handleHoverIcons: eD,
              onAddHangStatusClicked: () => eP(true)
            }))
          })
        })(e)
      })
    });
  return $ ? Q(eV) : eV
})