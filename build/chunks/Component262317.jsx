/** Chunk was on 40184 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => U,
  ZP: () => F,
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

function V(e) {
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
let F = (0, Chunk888651.$)(function(e) {
  var t;
  let {
    collapsed: l,
    user: f,
    channel: U,
    mute: V,
    localMute: F,
    localVideoDisabled: B,
    deaf: H,
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
    location: ef,
    isSelf: eh,
    application: em,
    hangStatusActivity: eg,
    requestToStreamActivity: eb,
    showHangStatus: eC
  } = e, ey = r.useRef(null), [ev, eO] = r.useState(false), ex = r.useRef(null), [eE, ej] = r.useState(false), [eS, e_] = r.useState(false), [eP, eI] = r.useState(false), [eZ, eT] = r.useState(false), eN = eS || eZ || eP, eA = eE || eN, ew = (null == eb ? true : eb.session_id) != null, eM = () => {
    eO(!ev)
  }, eR = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eP && eI(false), eS && e_(false)), eL()
  }, eL = () => {
    (et || eC || ew) && (null == ea || ea(f.id))
  }, eD = e => {
    e ? ex.current = setTimeout(() => {
      ej(true)
    }, 150 * !!es) : clearTimeout(ex.current)
  };
  r.useEffect(() => () => clearTimeout(ex.current), []);
  let ek = e => {
      e && ej(false)
    },
    eU = () => {
      if (!(et && (0, v.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
      let e = {
        streamType: M.lo.GUILD,
        ownerId: f.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id), en ? ((0, O.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e), null == ea || ea(f.id)
    },
    eV = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("96253")]).then(n.bind(n, 757387));
        return t => (0, i.jsx)(e, k(D({}, t), {
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
    eF = e => eh ? (0, i.jsx)(E.$, k(D({}, e), {
      channel: U,
      setIsHangStatusInputFocused: e_,
      setIsEmojiPickerOpen: eT
    })) : null != eg ? (0, i.jsx)(j.I, k(D({}, e), {
      hangStatusActivity: eg,
      channel: U,
      userId: f.id
    })) : null,
    eB = () => (0, i.jsx)(S.Z, {
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
      className: L.draggable,
      "data-dnd-name": U.name,
      onMouseEnter: ed ? true : () => {
        (et || eC || ew) && !ev && (null == el || el(f.id))
      },
      onMouseLeave: ed ? true : eL,
      children: (0, i.jsx)(_.Z, {
        clickTrap: (null == f ? true : f.id) === (null == (t = N.default.getCurrentUser()) ? true : t.id) && ev,
        targetElementRef: ey,
        user: f,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [m.Z.VOICE_USER],
        shouldShow: ev,
        onRequestClose: () => eO(false),
        children: e => (e => {
          let t = w.al.has(null != ec ? ec : ""),
            n = {
              user: f,
              speaking: X,
              latched: J,
              disconnected: Q,
              mute: V,
              localMute: F,
              localVideoDisabled: B,
              isStreaming: et,
              isGuest: ei,
              video: G,
              priority: er,
              ringing: Y,
              deaf: H,
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
              onContextMenu: eV,
              guildId: U.guild_id,
              isSelf: eh,
              application: em,
              channelId: U.id,
              hangStatusActivity: eg,
              showHangStatus: eC
            };
          if (ed) {
            var r;
            return (0, i.jsx)(o.u, {
              text: null != (r = (0, C.Z)(ec)) ? r : R.intl.string(R.t.IyYqqY),
              children: (0, i.jsx)(P.ZP, D({
                ref: ey
              }, n))
            })
          }
          let c = () => null;
          return eC && eA ? c = eF : et ? c = eH : ew && f.id !== I.default.getId() ? c = eB : eC && (c = eF), (0, i.jsx)(s.yRy, {
            targetElementRef: ey,
            position: "right",
            renderPopout: c,
            shouldShow: (eo || eC && eN) && !ev,
            onRequestClose: eR,
            align: eC && eA && !eh ? "center" : true,
            spacing: eC && eA ? 8 : 0,
            children: () => (0, i.jsx)(P.ZP, k(D({}, n), {
              ref: ey,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eD,
              handleHoverIcons: ek,
              onAddHangStatusClicked: () => eI(true)
            }))
          })
        })(e)
      })
    });
  return ee ? $(eG) : eG
})