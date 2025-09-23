/** Chunk was on 80037 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => D,
  ZP: () => B,
  ul: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function D(e) {
  let {
    numUsers: t
  } = e;
  return (0, r.jsx)("div", {
    className: R.moreContainer,
    children: (0, r.jsxs)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function U(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, i = n ? t : M.intl.formatToPlainString(M.t["+v2pNz"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: a()(R.audienceContainer, {
      [R.audienceContainerCollapsed]: n
    }),
    children: [(0, r.jsx)("div", {
      className: R.audienceIconContainer,
      children: (0, r.jsx)(o.VWR, {
        size: "md",
        color: "currentColor",
        className: R.audienceIcon
      })
    }), (0, r.jsx)(o.Text, {
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
    user: p,
    channel: D,
    mute: U,
    localMute: B,
    localVideoDisabled: V,
    deaf: F,
    video: H,
    embeddedApplication: G,
    serverMute: z,
    serverDeaf: W,
    nick: q,
    ringing: Y,
    speaking: K,
    disconnected: X,
    connectUserDragSource: J,
    canDrag: Q,
    isStreaming: $,
    isWatching: ee,
    isGuest: et,
    priority: en,
    showPreview: er,
    hidePreview: ei,
    shouldShowHoverPopout: el,
    previewIsOpen: ea,
    otherClientSessionType: eo,
    voicePlatform: es,
    isSelfOnOtherClient: ec = false,
    tabIndex: eu,
    location: ed,
    isSelf: ep,
    application: eh,
    hangStatusActivity: ef,
    requestToStreamActivity: em,
    showHangStatus: eg
  } = e, eb = i.useRef(null), [ey, eC] = i.useState(false), [e_, ev] = i.useState(false), [ex, eO] = i.useState(false), [ej, eE] = i.useState(false), eS = ex || ej, eP = e_ || eS, eI = (null == em ? true : em.session_id) != null, eZ = () => {
    eC(!ey)
  }, eT = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    ej && null != t && n.has(t) && eE(false), eN()
  }, eN = () => {
    ($ || eg || eI) && (null == ei || ei(p.id))
  }, eA = e => {
    e && ea && ev(true)
  }, ew = e => {
    e && ev(false)
  }, eM = () => {
    if (!($ && (0, C.p9)(D, N.Z, I.Z, Z.Z, g.Z)[0])) return;
    let e = {
      streamType: w.lo.GUILD,
      ownerId: p.id,
      channelId: D.id,
      guildId: D.guild_id
    };
    P.default.getId() !== p.id && u.default.selectVoiceChannel(D.id), ee ? ((0, _.Z)(e), s.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, d.iV)(e), null == ei || ei(p.id)
  }, eR = e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("87157")]).then(n.bind(n, 757387));
      return t => (0, r.jsx)(e, L(k({}, t), {
        user: p,
        guildId: D.guild_id,
        channel: D,
        showMediaItems: true,
        showStageChannelItems: D.isGuildStageVoice(),
        onInteraction: (0, m.u)("GuildChannelUserContextMenu", f.Z.VOICE_USER, {
          targetUserId: p.id
        })
      }))
    })
  }, ek = e => ep ? (0, r.jsx)(x.$, L(k({}, e), {
    channel: D,
    setIsHangStatusInputFocused: eO
  })) : null != ef ? (0, r.jsx)(O.I, L(k({}, e), {
    hangStatusActivity: ef,
    channel: D,
    userId: p.id
  })) : null, eL = () => (0, r.jsx)(j.Z, {
    userId: p.id,
    channel: D
  }), eD = () => (0, h.dl)() && (0, h.zd)(D.id) ? null : (0, r.jsx)(v.Z, {
    user: p,
    channel: D,
    onWatch: eM,
    previewIsOpen: ea,
    location: ed
  }), eU = (0, r.jsx)("div", {
    className: R.draggable,
    "data-dnd-name": D.name,
    onMouseEnter: ec ? true : () => {
      ($ || eg || eI) && !ey && (null == er || er(p.id))
    },
    onMouseLeave: ec ? true : eN,
    children: (0, r.jsx)(E.Z, {
      clickTrap: (null == p ? true : p.id) === (null == (t = T.default.getCurrentUser()) ? true : t.id) && ey,
      targetElementRef: eb,
      user: p,
      guildId: D.guild_id,
      channelId: D.id,
      newAnalyticsLocations: [f.Z.VOICE_USER],
      shouldShow: ey,
      onRequestClose: () => eC(false),
      children: e => (e => {
        let t = A.al.has(null != eo ? eo : ""),
          n = {
            user: p,
            speaking: K,
            disconnected: X,
            mute: U,
            localMute: B,
            localVideoDisabled: V,
            isStreaming: $,
            isGuest: et,
            video: H,
            priority: en,
            ringing: Y,
            deaf: F,
            nick: q,
            collapsed: l,
            overlap: l,
            serverMute: z,
            serverDeaf: W,
            tabIndex: eu,
            otherClientSessionType: eo,
            voicePlatform: es,
            embeddedApplication: G,
            avatarContainerClass: a()({
              [R.userAvatar]: true
            }),
            disabled: ec && !t,
            selected: ey,
            onClick: t ? true : eZ,
            onDoubleClick: eM,
            onContextMenu: eR,
            guildId: D.guild_id,
            isSelf: ep,
            application: eh,
            channelId: D.id,
            hangStatusActivity: ef,
            showHangStatus: eg
          };
        if (ec) {
          var i;
          return (0, r.jsx)(o.ua7, {
            text: null != (i = (0, b.Z)(eo)) ? i : M.intl.string(M.t.IyYqqa),
            children: e => {
              var {
                onClick: t,
                onContextMenu: i
              } = e, l = function(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                  if (null == e) return {};
                  var n, r, i = {},
                    l = Object.keys(e);
                  for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                  return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
              }(e, ["onClick", "onContextMenu"]);
              return (0, r.jsx)(S.ZP, k({
                ref: eb
              }, n, l))
            }
          })
        }
        let s = () => null;
        return eg && eP ? s = ek : $ ? s = eD : eI && p.id !== P.default.getId() && (s = eL), (0, r.jsx)(o.yRy, {
          targetElementRef: eb,
          position: "right",
          renderPopout: s,
          shouldShow: (el || eg && eS) && !ey,
          onRequestClose: eT,
          align: eg && eP && !ep ? "center" : true,
          spacing: eg && eP ? 8 : 0,
          children: () => (0, r.jsx)(S.ZP, L(k({}, n), {
            ref: eb,
            onMouseDown: e.onMouseDown,
            onKeyDown: e.onKeyDown,
            handleHoverHangStatus: eA,
            handleHoverIcons: ew,
            onAddHangStatusClicked: () => eE(true)
          }))
        })
      })(e)
    })
  });
  return Q ? J(eU) : eU
})