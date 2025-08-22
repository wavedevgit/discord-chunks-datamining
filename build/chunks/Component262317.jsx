/** Chunk was on 5665 **/
/** chunk id: 262317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XX: () => k,
  ZP: () => B,
  ul: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
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
  Chunk224184 = require("./224184.jsx"),
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

function k(e) {
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

function U(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, i = n ? t : R.intl.formatToPlainString(R.t["+v2pNz"], {
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
    user: h,
    channel: k,
    mute: U,
    localMute: B,
    localVideoDisabled: F,
    deaf: G,
    video: H,
    embeddedApplication: V,
    serverMute: z,
    serverDeaf: W,
    nick: q,
    ringing: Y,
    speaking: K,
    disconnected: X,
    connectUserDragSource: Q,
    canDrag: J,
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
  } = e, eb = i.useRef(null), [e_, ey] = i.useState(false), [eC, ex] = i.useState(false), ev = (null == em ? true : em.session_id) != null, eO = () => {
    ey(!e_)
  }, ej = () => {
    ($ || eg || ev) && (null == ei || ei(h.id))
  }, eE = i.useMemo(() => new o.sW(500, () => {
    ex(true)
  }), []), eS = e => {
    e && ea ? eE.delay() : !e && eE.isDelayed() && eE.cancel()
  }, eI = e => {
    e && (eE.cancel(), ex(false))
  }, eP = () => {
    if (!($ && (0, C.p9)(k, N.Z, P.Z, Z.Z, b.Z)[0])) return;
    let e = {
      streamType: w.lo.GUILD,
      ownerId: h.id,
      channelId: k.id,
      guildId: k.guild_id
    };
    I.default.getId() !== h.id && d.default.selectVoiceChannel(k.id), ee ? ((0, x.Z)(e), c.Z.selectParticipant(e.channelId, (0, y.V9)(e))) : (0, p.iV)(e), null == ei || ei(h.id)
  }, eZ = e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
      return t => (0, r.jsx)(e, L(D({}, t), {
        user: h,
        guildId: k.guild_id,
        channel: k,
        showMediaItems: true,
        showStageChannelItems: k.isGuildStageVoice(),
        onInteraction: (0, g.u)("GuildChannelUserContextMenu", m.Z.VOICE_USER, {
          targetUserId: h.id
        })
      }))
    })
  }, eT = () => (0, r.jsx)(O.Z, {
    previewIsOpen: ea,
    channel: k,
    hangStatusActivity: ef,
    userId: h.id,
    targetElementRef: eb
  }), eN = () => (0, r.jsx)(j.Z, {
    userId: h.id,
    channel: k
  }), eA = () => (0, f.dl)() && (0, f.zd)(k.id) ? null : (0, r.jsx)(v.Z, {
    user: h,
    channel: k,
    onWatch: eP,
    previewIsOpen: ea,
    location: ed
  }), ew = (0, r.jsx)("div", {
    className: M.draggable,
    "data-dnd-name": k.name,
    onMouseEnter: ec ? true : () => {
      ($ || eg || ev) && !e_ && (null == er || er(h.id))
    },
    onMouseLeave: ec ? true : ej,
    children: (0, r.jsx)(E.Z, {
      clickTrap: (null == h ? true : h.id) === (null == (t = T.default.getCurrentUser()) ? true : t.id) && e_,
      targetElementRef: eb,
      user: h,
      guildId: k.guild_id,
      channelId: k.id,
      newAnalyticsLocations: [m.Z.VOICE_USER],
      shouldShow: e_,
      onRequestClose: () => ey(false),
      children: e => (e => {
        let t = A.al.has(null != eo ? eo : ""),
          n = {
            user: h,
            speaking: K,
            disconnected: X,
            mute: U,
            localMute: B,
            localVideoDisabled: F,
            isStreaming: $,
            isGuest: et,
            video: H,
            priority: en,
            ringing: Y,
            deaf: G,
            nick: q,
            collapsed: l,
            overlap: l,
            serverMute: z,
            serverDeaf: W,
            tabIndex: eu,
            otherClientSessionType: eo,
            voicePlatform: es,
            embeddedApplication: V,
            avatarContainerClass: a()({
              [M.userAvatar]: true
            }),
            disabled: ec && !t,
            selected: e_,
            onClick: t ? true : eO,
            onDoubleClick: eP,
            onContextMenu: eZ,
            guildId: k.guild_id,
            isSelf: ep,
            application: eh,
            channelId: k.id,
            hangStatusActivity: ef,
            showHangStatus: eg
          };
        if (ec) {
          var i;
          return (0, r.jsx)(s.ua7, {
            text: null != (i = (0, _.Z)(eo)) ? i : R.intl.string(R.t.IyYqqa),
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
              return (0, r.jsx)(S.ZP, D({
                ref: eb
              }, n, l))
            }
          })
        }
        let o = () => null;
        return eg && eC ? o = eT : $ ? o = eA : ev && h.id !== I.default.getId() && (o = eN), (0, r.jsx)(s.yRy, {
          targetElementRef: eb,
          position: "right",
          renderPopout: o,
          shouldShow: el && !e_,
          onRequestClose: ej,
          spacing: 0,
          children: () => (0, r.jsx)(S.ZP, L(D({}, n), {
            ref: eb,
            onMouseDown: e.onMouseDown,
            onKeyDown: e.onKeyDown,
            handleHoverHangStatus: eS,
            handleHoverIcons: eI
          }))
        })
      })(e)
    })
  });
  return J ? Q(ew) : ew
})