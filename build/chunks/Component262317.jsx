/** Chunk was on 81985 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => U,
  ZP: () => B,
  ul: () => G
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

function k(e) {
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

function L(e, t) {
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

function U(e) {
  let {
    numUsers: t
  } = e;
  return (0, r.jsx)("div", {
    className: M.moreContainer,
    children: (0, r.jsxs)(s.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function G(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, i = n ? t : D.intl.formatToPlainString(D.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: a()(M.audienceContainer, {
      [M.audienceContainerCollapsed]: n
    }),
    children: [(0, r.jsx)("div", {
      className: M.audienceIconContainer,
      children: (0, r.jsx)(s.VWR, {
        size: "md",
        color: "currentColor",
        className: M.audienceIcon
      })
    }), (0, r.jsx)(s.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: i
    })]
  })
}
let B = (0, Chunk888651.$)(function(e) {
  var t;
  let {
    collapsed: l,
    user: f,
    channel: U,
    mute: G,
    localMute: B,
    localVideoDisabled: F,
    deaf: H,
    video: V,
    embeddedApplication: z,
    serverMute: W,
    serverDeaf: K,
    nick: Y,
    ringing: q,
    speaking: X,
    voiceDb: Q,
    latched: J,
    disconnected: $,
    connectUserDragSource: ee,
    canDrag: et,
    isStreaming: en,
    isWatching: er,
    isGuest: ei,
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
    isSelf: eg,
    application: em,
    hangStatusActivity: eb,
    requestToStreamActivity: ey,
    showHangStatus: ev
  } = e, eO = i.useRef(null), [ej, ex] = i.useState(false), eC = i.useRef(null), [eE, eS] = i.useState(false), [e_, eI] = i.useState(false), [eP, eZ] = i.useState(false), [eN, eT] = i.useState(false), eA = e_ || eN || eP, ew = eE || eA, eR = (null == ey ? true : ey.session_id) != null, eD = () => {
    ex(!ej)
  }, eM = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eP && eZ(false), e_ && eI(false)), ek()
  }, ek = () => {
    (en || ev || eR) && (null == eo || eo(f.id))
  }, eL = e => {
    e ? eC.current = setTimeout(() => {
      eS(true)
    }, 150 * !!ec) : clearTimeout(eC.current)
  };
  i.useEffect(() => () => clearTimeout(eC.current), []);
  let eU = e => {
      e && eS(false)
    },
    eG = () => {
      if (!(en && (0, O.p9)(U, A.Z, Z.Z, N.Z, b.default)[0])) return;
      let e = {
        streamType: R.lo.GUILD,
        ownerId: f.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      P.default.getId() !== f.id && d.default.selectVoiceChannel(U.id), er ? ((0, j.Z)(e), c.Z.selectParticipant(e.channelId, (0, v.V9)(e))) : (0, p.iV)(e), null == eo || eo(f.id)
    },
    eB = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("4040"), n.e("92524"), n.e("7717"), n.e("96253")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, L(k({}, t), {
          user: f,
          guildId: U.guild_id,
          channel: U,
          showMediaItems: true,
          showStageChannelItems: U.isGuildStageVoice(),
          onInteraction: (0, m.u)("GuildChannelUserContextMenu", g.Z.VOICE_USER, {
            targetUserId: f.id
          })
        }))
      })
    },
    eF = e => eg ? (0, r.jsx)(C.$, L(k({}, e), {
      channel: U,
      setIsHangStatusInputFocused: eI,
      setIsEmojiPickerOpen: eT
    })) : null != eb ? (0, r.jsx)(E.I, L(k({}, e), {
      hangStatusActivity: eb,
      channel: U,
      userId: f.id
    })) : null,
    eH = () => (0, r.jsx)(S.Z, {
      userId: f.id,
      channel: U
    }),
    eV = () => (0, h.dl)() && (0, h.zd)(U.id) ? null : (0, r.jsx)(x.Z, {
      user: f,
      channel: U,
      onWatch: eG,
      previewIsOpen: ec,
      location: eh
    }),
    ez = (0, r.jsx)("div", {
      className: M.draggable,
      "data-dnd-name": U.name,
      onMouseEnter: ep ? true : () => {
        (en || ev || eR) && !ej && (null == ea || ea(f.id))
      },
      onMouseLeave: ep ? true : ek,
      children: (0, r.jsx)(_.Z, {
        clickTrap: (null == f ? true : f.id) === (null == (t = T.default.getCurrentUser()) ? true : t.id) && ej,
        targetElementRef: eO,
        user: f,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [g.Z.VOICE_USER],
        shouldShow: ej,
        onRequestClose: () => ex(false),
        children: e => (e => {
          let t = w.al.has(null != eu ? eu : ""),
            n = {
              user: f,
              speaking: X,
              voiceDb: Q,
              latched: J,
              disconnected: $,
              mute: G,
              localMute: B,
              localVideoDisabled: F,
              isStreaming: en,
              isGuest: ei,
              video: V,
              priority: el,
              ringing: q,
              deaf: H,
              nick: Y,
              collapsed: l,
              overlap: l,
              serverMute: W,
              serverDeaf: K,
              tabIndex: ef,
              otherClientSessionType: eu,
              voicePlatform: ed,
              embeddedApplication: z,
              avatarContainerClass: a()({
                [M.userAvatar]: true
              }),
              disabled: ep && !t,
              selected: ej,
              onClick: t ? true : eD,
              onDoubleClick: eG,
              onContextMenu: eB,
              guildId: U.guild_id,
              isSelf: eg,
              application: em,
              channelId: U.id,
              hangStatusActivity: eb,
              showHangStatus: ev
            };
          if (ep) {
            var i;
            return (0, r.jsx)(o.u, {
              text: null != (i = (0, y.Z)(eu)) ? i : D.intl.string(D.t.IyYqqY),
              children: (0, r.jsx)(I.ZP, k({
                ref: eO
              }, n))
            })
          }
          let c = () => null;
          return ev && ew ? c = eF : en ? c = eV : eR && f.id !== P.default.getId() ? c = eH : ev && (c = eF), (0, r.jsx)(s.yRy, {
            targetElementRef: eO,
            position: "right",
            renderPopout: c,
            shouldShow: (es || ev && eA) && !ej,
            onRequestClose: eM,
            align: ev && ew && !eg ? "center" : true,
            spacing: ev && ew ? 8 : 0,
            children: () => (0, r.jsx)(I.ZP, L(k({}, n), {
              ref: eO,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eL,
              handleHoverIcons: eU,
              onAddHangStatusClicked: () => eZ(true)
            }))
          })
        })(e)
      })
    });
  return et ? ee(ez) : ez
})