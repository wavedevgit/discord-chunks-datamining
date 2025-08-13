/** Chunk was on web.js **/
/** chunk id: 262317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XX: () => F,
  ZP: () => Y,
  ul: () => V
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk953787 = require("./953787.jsx"),
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
  Chunk921665 = require("./921665.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = Z(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function F(e) {
  let {
    numUsers: t
  } = e;
  return (0, r.jsx)("div", {
    className: M.moreContainer,
    children: (0, r.jsxs)(l.Text, {
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
  } = e, i = n ? t : x.intl.formatToPlainString(x.t["+v2pNz"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: a()(M.audienceContainer, {
      [M.audienceContainerCollapsed]: n
    }),
    children: [(0, r.jsx)("div", {
      className: M.audienceIconContainer,
      children: (0, r.jsx)(l.VWR, {
        size: "md",
        color: "currentColor",
        className: M.audienceIcon
      })
    }), (0, r.jsx)(l.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: i
    })]
  })
}

function H(e) {
  var t;
  let {
    collapsed: o,
    user: _,
    channel: j,
    mute: U,
    localMute: Z,
    localVideoDisabled: F,
    deaf: V,
    video: H,
    embeddedApplication: Y,
    serverMute: W,
    serverDeaf: K,
    nick: z,
    ringing: q,
    speaking: X,
    disconnected: Q,
    connectUserDragSource: J,
    canDrag: $,
    isStreaming: ee,
    isWatching: et,
    isGuest: en,
    priority: er,
    showPreview: ei,
    hidePreview: eo,
    shouldShowHoverPopout: ea,
    previewIsOpen: es,
    otherClientSessionType: el,
    voicePlatform: ec,
    isSelfOnOtherClient: eu = false,
    tabIndex: ed,
    location: ef,
    isSelf: e_,
    application: ep,
    hangStatusActivity: eh,
    requestToStreamActivity: em,
    showHangStatus: eg
  } = e, eE = i.useRef(null), [eb, ey] = i.useState(false), [eO, ev] = i.useState(false), eI = (null == em ? true : em.session_id) != null, eT = () => {
    ey(!eb)
  }, eS = () => {
    (ee || eg || eI) && (null == eo || eo(_.id))
  }, eA = () => {
    (ee || eg || eI) && !eb && (null == ei || ei(_.id))
  }, eN = i.useMemo(() => new s.sW(500, () => {
    ev(true)
  }), []), eC = e => {
    e && es ? eN.delay() : !e && eN.isDelayed() && eN.cancel()
  }, eR = e => {
    e && (eN.cancel(), ev(false))
  }, eP = () => ee && (0, y.p9)(j, w.Z, C.Z, R.Z, g.Z)[0], ew = () => {
    if (!eP()) return;
    let e = {
      streamType: L.lo.GUILD,
      ownerId: _.id,
      channelId: j.id,
      guildId: j.guild_id
    };
    N.default.getId() !== _.id && d.default.selectVoiceChannel(j.id), et ? ((0, O.Z)(e), c.Z.selectParticipant(e.channelId, (0, b.V9)(e))) : (0, f.iV)(e), null == eo || eo(_.id)
  }, eD = e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("73387")]).then(n.bind(n, 757387));
      return t => (0, r.jsx)(e, G(k({}, t), {
        user: _,
        guildId: j.guild_id,
        channel: j,
        showMediaItems: true,
        showStageChannelItems: j.isGuildStageVoice(),
        onInteraction: (0, m.u)("GuildChannelUserContextMenu", h.Z.VOICE_USER, {
          targetUserId: _.id
        })
      }))
    })
  }, eL = () => (0, r.jsx)(I.Z, {
    previewIsOpen: es,
    channel: j,
    hangStatusActivity: eh,
    userId: _.id,
    targetElementRef: eE
  }), ex = () => (0, r.jsx)(T.Z, {
    userId: _.id,
    channel: j
  }), eM = () => (0, p.dl)() && (0, p.zd)(j.id) ? null : (0, r.jsx)(v.Z, {
    user: _,
    channel: j,
    onWatch: ew,
    previewIsOpen: es,
    location: ef
  }), ej = e => {
    let t = D.al.has(null != el ? el : ""),
      n = {
        user: _,
        speaking: X,
        disconnected: Q,
        mute: U,
        localMute: Z,
        localVideoDisabled: F,
        isStreaming: ee,
        isGuest: en,
        video: H,
        priority: er,
        ringing: q,
        deaf: V,
        nick: z,
        collapsed: o,
        overlap: o,
        serverMute: W,
        serverDeaf: K,
        tabIndex: ed,
        otherClientSessionType: el,
        voicePlatform: ec,
        embeddedApplication: Y,
        avatarContainerClass: a()({
          [M.userAvatar]: true
        }),
        disabled: eu && !t,
        selected: eb,
        onClick: t ? true : eT,
        onDoubleClick: ew,
        onContextMenu: eD,
        guildId: j.guild_id,
        isSelf: e_,
        application: ep,
        channelId: j.id,
        hangStatusActivity: eh,
        showHangStatus: eg
      };
    if (eu) {
      var i;
      return (0, r.jsx)(l.ua7, {
        text: null != (i = (0, E.Z)(el)) ? i : x.intl.string(x.t.IyYqqa),
        children: e => {
          var {
            onClick: t,
            onContextMenu: i
          } = e, o = B(e, ["onClick", "onContextMenu"]);
          return (0, r.jsx)(A.ZP, k({
            ref: eE
          }, n, o))
        }
      })
    }
    let s = () => null;
    return eg && eO ? s = eL : ee ? s = eM : eI && _.id !== N.default.getId() && (s = ex), (0, r.jsx)(l.yRy, {
      targetElementRef: eE,
      position: "right",
      renderPopout: s,
      shouldShow: ea && !eb,
      onRequestClose: eS,
      spacing: 0,
      children: () => (0, r.jsx)(A.ZP, G(k({}, n), {
        ref: eE,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        handleHoverHangStatus: eC,
        handleHoverIcons: eR
      }))
    })
  }, ek = (0, r.jsx)("div", {
    className: M.draggable,
    "data-dnd-name": j.name,
    onMouseEnter: eu ? true : eA,
    onMouseLeave: eu ? true : eS,
    children: (0, r.jsx)(S.Z, {
      clickTrap: (null == _ ? true : _.id) === (null == (t = P.default.getCurrentUser()) ? true : t.id) && eb,
      targetElementRef: eE,
      user: _,
      guildId: j.guild_id,
      channelId: j.id,
      newAnalyticsLocations: [h.Z.VOICE_USER],
      shouldShow: eb,
      onRequestClose: () => ey(false),
      children: e => ej(e)
    })
  });
  return $ ? J(ek) : ek
}
let Y = (0, Chunk888651.$)(H)