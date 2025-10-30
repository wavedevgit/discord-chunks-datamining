/** Chunk was on 13873 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => U,
  ZP: () => F,
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
  Chunk2628 = require("./2628.js");

function L(e) {
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

function k(e, t) {
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
    className: D.moreContainer,
    children: (0, r.jsxs)(s.Text, {
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
  } = e, i = n ? t : R.intl.formatToPlainString(R.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: a()(D.audienceContainer, {
      [D.audienceContainerCollapsed]: n
    }),
    children: [(0, r.jsx)("div", {
      className: D.audienceIconContainer,
      children: (0, r.jsx)(s.VWR, {
        size: "md",
        color: "currentColor",
        className: D.audienceIcon
      })
    }), (0, r.jsx)(s.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: i
    })]
  })
}
let F = (0, Chunk888651.$)(function(e) {
  var t;
  let {
    collapsed: l,
    user: f,
    channel: U,
    mute: B,
    localMute: F,
    localVideoDisabled: V,
    deaf: H,
    video: G,
    embeddedApplication: W,
    serverMute: z,
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
    priority: er,
    showPreview: ei,
    hidePreview: el,
    shouldShowHoverPopout: ea,
    previewIsOpen: eo,
    otherClientSessionType: es,
    voicePlatform: ec,
    isSelfOnOtherClient: eu = false,
    tabIndex: ed,
    location: ep,
    isSelf: ef,
    application: eh,
    hangStatusActivity: em,
    requestToStreamActivity: eg,
    showHangStatus: eb
  } = e, e_ = i.useRef(null), [ey, eC] = i.useState(false), ev = i.useRef(null), [eO, ex] = i.useState(false), [eE, ej] = i.useState(false), [eS, eP] = i.useState(false), [eI, eZ] = i.useState(false), eT = eE || eI || eS, eN = eO || eT, eA = (null == eg ? true : eg.session_id) != null, ew = () => {
    eC(!ey)
  }, eM = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eS && eP(false), eE && ej(false)), eR()
  }, eR = () => {
    (ee || eb || eA) && (null == el || el(f.id))
  }, eD = e => {
    e ? ev.current = setTimeout(() => {
      ex(true)
    }, 150 * !!eo) : clearTimeout(ev.current)
  };
  i.useEffect(() => () => clearTimeout(ev.current), []);
  let eL = e => {
      e && ex(false)
    },
    ek = () => {
      if (!(ee && (0, C.p9)(U, A.Z, Z.Z, T.Z, b.default)[0])) return;
      let e = {
        streamType: M.lo.GUILD,
        ownerId: f.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== f.id && d.default.selectVoiceChannel(U.id), et ? ((0, v.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e), null == el || el(f.id)
    },
    eU = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("87157")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, k(L({}, t), {
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
    eB = e => ef ? (0, r.jsx)(x.$, k(L({}, e), {
      channel: U,
      setIsHangStatusInputFocused: ej,
      setIsEmojiPickerOpen: eZ
    })) : null != em ? (0, r.jsx)(E.I, k(L({}, e), {
      hangStatusActivity: em,
      channel: U,
      userId: f.id
    })) : null,
    eF = () => (0, r.jsx)(j.Z, {
      userId: f.id,
      channel: U
    }),
    eV = () => (0, h.dl)() && (0, h.zd)(U.id) ? null : (0, r.jsx)(O.Z, {
      user: f,
      channel: U,
      onWatch: ek,
      previewIsOpen: eo,
      location: ep
    }),
    eH = (0, r.jsx)("div", {
      className: D.draggable,
      "data-dnd-name": U.name,
      onMouseEnter: eu ? true : () => {
        (ee || eb || eA) && !ey && (null == ei || ei(f.id))
      },
      onMouseLeave: eu ? true : eR,
      children: (0, r.jsx)(S.Z, {
        clickTrap: (null == f ? true : f.id) === (null == (t = N.default.getCurrentUser()) ? true : t.id) && ey,
        targetElementRef: e_,
        user: f,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [m.Z.VOICE_USER],
        shouldShow: ey,
        onRequestClose: () => eC(false),
        children: e => (e => {
          let t = w.al.has(null != es ? es : ""),
            n = {
              user: f,
              speaking: X,
              disconnected: J,
              mute: B,
              localMute: F,
              localVideoDisabled: V,
              isStreaming: ee,
              isGuest: en,
              video: G,
              priority: er,
              ringing: K,
              deaf: H,
              nick: Y,
              collapsed: l,
              overlap: l,
              serverMute: z,
              serverDeaf: q,
              tabIndex: ed,
              otherClientSessionType: es,
              voicePlatform: ec,
              embeddedApplication: W,
              avatarContainerClass: a()({
                [D.userAvatar]: true
              }),
              disabled: eu && !t,
              selected: ey,
              onClick: t ? true : ew,
              onDoubleClick: ek,
              onContextMenu: eU,
              guildId: U.guild_id,
              isSelf: ef,
              application: eh,
              channelId: U.id,
              hangStatusActivity: em,
              showHangStatus: eb
            };
          if (eu) {
            var i;
            return (0, r.jsx)(o.u, {
              text: null != (i = (0, _.Z)(es)) ? i : R.intl.string(R.t.IyYqqY),
              children: (0, r.jsx)(P.ZP, L({
                ref: e_
              }, n))
            })
          }
          let c = () => null;
          return eb && eN ? c = eB : ee ? c = eV : eA && f.id !== I.default.getId() ? c = eF : eb && (c = eB), (0, r.jsx)(s.yRy, {
            targetElementRef: e_,
            position: "right",
            renderPopout: c,
            shouldShow: (ea || eb && eT) && !ey,
            onRequestClose: eM,
            align: eb && eN && !ef ? "center" : true,
            spacing: eb && eN ? 8 : 0,
            children: () => (0, r.jsx)(P.ZP, k(L({}, n), {
              ref: e_,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eD,
              handleHoverIcons: eL,
              onAddHangStatusClicked: () => eP(true)
            }))
          })
        })(e)
      })
    });
  return $ ? Q(eH) : eH
})