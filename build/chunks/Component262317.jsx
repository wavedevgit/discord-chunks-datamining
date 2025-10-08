/** Chunk was on 50118 **/
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

function L(e, t) {
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

function D(e) {
  let {
    numUsers: t
  } = e;
  return (0, i.jsx)("div", {
    className: R.moreContainer,
    children: (0, i.jsxs)(o.Text, {
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
  } = e, r = n ? t : M.intl.formatToPlainString(M.t["+v2pNz"], {
    count: t
  });
  return (0, i.jsxs)("div", {
    className: a()(R.audienceContainer, {
      [R.audienceContainerCollapsed]: n
    }),
    children: [(0, i.jsx)("div", {
      className: R.audienceIconContainer,
      children: (0, i.jsx)(o.VWR, {
        size: "md",
        color: "currentColor",
        className: R.audienceIcon
      })
    }), (0, i.jsx)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: r
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
    localVideoDisabled: H,
    deaf: V,
    video: F,
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
    showPreview: ei,
    hidePreview: er,
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
  } = e, eb = r.useRef(null), [eC, ey] = r.useState(false), e_ = r.useRef(null), [ev, ex] = r.useState(false), [eO, ej] = r.useState(false), [eE, eS] = r.useState(false), eP = eO || eE, eI = ev || eP, eZ = (null == em ? true : em.session_id) != null, eT = () => {
    ey(!eC)
  }, eN = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eE && eS(false), eO && ej(false)), eA()
  }, eA = () => {
    ($ || eg || eZ) && (null == er || er(p.id))
  }, ew = e => {
    e ? e_.current = setTimeout(() => {
      ex(true)
    }, 150 * !!ea) : clearTimeout(e_.current)
  };
  r.useEffect(() => () => clearTimeout(e_.current), []);
  let eM = e => {
      e && ex(false)
    },
    eR = () => {
      if (!($ && (0, y.p9)(D, N.Z, I.Z, Z.Z, g.Z)[0])) return;
      let e = {
        streamType: w.lo.GUILD,
        ownerId: p.id,
        channelId: D.id,
        guildId: D.guild_id
      };
      P.default.getId() !== p.id && u.default.selectVoiceChannel(D.id), ee ? ((0, _.Z)(e), s.Z.selectParticipant(e.channelId, (0, C.V9)(e))) : (0, d.iV)(e), null == er || er(p.id)
    },
    ek = e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("96306")]).then(n.bind(n, 757387));
        return t => (0, i.jsx)(e, L(k({}, t), {
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
    },
    eL = e => ep ? (0, i.jsx)(x.$, L(k({}, e), {
      channel: D,
      setIsHangStatusInputFocused: ej
    })) : null != ef ? (0, i.jsx)(O.I, L(k({}, e), {
      hangStatusActivity: ef,
      channel: D,
      userId: p.id
    })) : null,
    eD = () => (0, i.jsx)(j.Z, {
      userId: p.id,
      channel: D
    }),
    eU = () => (0, h.dl)() && (0, h.zd)(D.id) ? null : (0, i.jsx)(v.Z, {
      user: p,
      channel: D,
      onWatch: eR,
      previewIsOpen: ea,
      location: ed
    }),
    eB = (0, i.jsx)("div", {
      className: R.draggable,
      "data-dnd-name": D.name,
      onMouseEnter: ec ? true : () => {
        ($ || eg || eZ) && !eC && (null == ei || ei(p.id))
      },
      onMouseLeave: ec ? true : eA,
      children: (0, i.jsx)(E.Z, {
        clickTrap: (null == p ? true : p.id) === (null == (t = T.default.getCurrentUser()) ? true : t.id) && eC,
        targetElementRef: eb,
        user: p,
        guildId: D.guild_id,
        channelId: D.id,
        newAnalyticsLocations: [f.Z.VOICE_USER],
        shouldShow: eC,
        onRequestClose: () => ey(false),
        children: e => (e => {
          let t = A.al.has(null != eo ? eo : ""),
            n = {
              user: p,
              speaking: K,
              disconnected: X,
              mute: U,
              localMute: B,
              localVideoDisabled: H,
              isStreaming: $,
              isGuest: et,
              video: F,
              priority: en,
              ringing: Y,
              deaf: V,
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
              selected: eC,
              onClick: t ? true : eT,
              onDoubleClick: eR,
              onContextMenu: ek,
              guildId: D.guild_id,
              isSelf: ep,
              application: eh,
              channelId: D.id,
              hangStatusActivity: ef,
              showHangStatus: eg
            };
          if (ec) {
            var r;
            return (0, i.jsx)(o.ua7, {
              text: null != (r = (0, b.Z)(eo)) ? r : M.intl.string(M.t.IyYqqa),
              children: e => {
                var {
                  onClick: t,
                  onContextMenu: r
                } = e, l = function(e, t) {
                  if (null == e) return {};
                  var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                      l = Object.keys(e);
                    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                  }
                  return r
                }(e, ["onClick", "onContextMenu"]);
                return (0, i.jsx)(S.ZP, k({
                  ref: eb
                }, n, l))
              }
            })
          }
          let s = () => null;
          return eg && eI ? s = eL : $ ? s = eU : eZ && p.id !== P.default.getId() && (s = eD), (0, i.jsx)(o.yRy, {
            targetElementRef: eb,
            position: "right",
            renderPopout: s,
            shouldShow: (el || eg && eP) && !eC,
            onRequestClose: eN,
            align: eg && eI && !ep ? "center" : true,
            spacing: eg && eI ? 8 : 0,
            children: () => (0, i.jsx)(S.ZP, L(k({}, n), {
              ref: eb,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: ew,
              handleHoverIcons: eM,
              onAddHangStatusClicked: () => eS(true)
            }))
          })
        })(e)
      })
    });
  return Q ? J(eB) : eB
})