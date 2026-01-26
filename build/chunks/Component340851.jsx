/** Chunk was on 67564 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => V,
  LR: () => U,
  aI: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk442433 = require("./442433.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk296216 = require("./296216.js"),
  Chunk323073 = require("./323073.js"),
  Chunk793574 = require("./793574.js"),
  Chunk480890 = require("./480890.js"),
  Chunk643501 = require("./643501.js"),
  Chunk916641 = require("./916641.js"),
  Chunk652896 = require("./652896.js"),
  Chunk279250 = require("./279250.js"),
  Chunk346846 = require("./346846.js"),
  Chunk142524 = require("./142524.jsx"),
  Chunk958140 = require("./958140.jsx"),
  Chunk721931 = require("./721931.jsx"),
  Chunk766319 = require("./766319.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk481947 = require("./481947.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk544105 = require("./544105.js"),
  Chunk502075 = require("./502075.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk861379 = require("./861379.js");

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

function G(e, t) {
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
    className: L.BN,
    children: (0, r.jsxs)(o.Text, {
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
  } = e, l = n ? t : M.intl.formatToPlainString(M.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: s()(L.yJ, {
      [L.Nr]: n
    }),
    children: [(0, r.jsx)("div", {
      className: L.$L,
      children: (0, r.jsx)(o.LoC, {
        size: "md",
        color: "currentColor",
        className: L.wG
      })
    }), (0, r.jsx)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: l
    })]
  })
}
let V = (0, Chunk296216.J)(function(e) {
  var t;
  let {
    collapsed: i,
    user: h,
    channel: U,
    mute: B,
    localMute: V,
    localVideoDisabled: F,
    deaf: H,
    video: K,
    embeddedApplication: W,
    serverMute: z,
    serverDeaf: Y,
    nick: q,
    ringing: X,
    speaking: J,
    latched: Q,
    disconnected: Z,
    connectUserDragSource: $,
    canDrag: ee,
    isStreaming: et,
    isWatching: en,
    isGuest: er,
    priority: el,
    showPreview: ei,
    hidePreview: es,
    shouldShowHoverPopout: ea,
    previewIsOpen: eo,
    otherClientSessionType: ec,
    voicePlatform: eu,
    isSelfOnOtherClient: ed = false,
    tabIndex: ep,
    location: eh,
    isSelf: ef,
    application: eg,
    hangStatusActivity: em,
    requestToStreamActivity: eb,
    showHangStatus: eA
  } = e, ey = l.useRef(null), [e_, eO] = l.useState(false), ej = l.useRef(null), [ev, ex] = l.useState(false), [eE, eC] = l.useState(false), [eS, eI] = l.useState(false), [eN, eT] = l.useState(false), eP = eE || eN || eS, ew = ev || eP, eR = (null == eb ? true : eb.session_id) != null, eD = () => {
    eO(!e_)
  }, eM = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eS && eI(false), eE && eC(false)), eL()
  }, eL = () => {
    (et || eA || eR) && (null == es || es(h.id))
  }, ek = e => {
    e ? ej.current = setTimeout(() => {
      ex(true)
    }, 150 * !!eo) : clearTimeout(ej.current)
  };
  l.useEffect(() => () => clearTimeout(ej.current), []);
  let eG = e => {
      e && ex(false)
    },
    eU = () => {
      if (!(et && (0, _.eo)(U, w.A, N.A, T.A, b.default)[0])) return;
      let e = {
        streamType: D.U4.GUILD,
        ownerId: h.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== h.id && d.default.selectVoiceChannel(U.id), en ? ((0, O.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, p.Nl)(e), null == es || es(h.id)
    },
    eB = e => {
      (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("52458")]).then(n.bind(n, 107632));
        return t => (0, r.jsx)(e, G(k({}, t), {
          user: h,
          guildId: U.guild_id,
          channel: U,
          showMediaItems: true,
          showStageChannelItems: U.isGuildStageVoice(),
          onInteraction: (0, m.s)("GuildChannelUserContextMenu", g.A.VOICE_USER, {
            targetUserId: h.id
          })
        }))
      })
    },
    eV = e => ef ? (0, r.jsx)(v.h, G(k({}, e), {
      channel: U,
      setIsHangStatusInputFocused: eC,
      setIsEmojiPickerOpen: eT
    })) : null != em ? (0, r.jsx)(x.E, G(k({}, e), {
      hangStatusActivity: em,
      channel: U,
      userId: h.id
    })) : null,
    eF = () => (0, r.jsx)(E.A, {
      userId: h.id,
      channel: U
    }),
    eH = () => (0, f.r9)() && (0, f.UK)(U.id) ? null : (0, r.jsx)(j.A, {
      user: h,
      channel: U,
      onWatch: eU,
      previewIsOpen: eo,
      location: eh
    }),
    eK = (0, r.jsx)("div", {
      className: L.kZ,
      "data-dnd-name": U.name,
      onMouseEnter: ed ? true : () => {
        (et || eA || eR) && !e_ && (null == ei || ei(h.id))
      },
      onMouseLeave: ed ? true : eL,
      children: (0, r.jsx)(C.A, {
        clickTrap: (null == h ? true : h.id) === (null == (t = P.default.getCurrentUser()) ? true : t.id) && e_,
        targetElementRef: ey,
        user: h,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [g.A.VOICE_USER],
        shouldShow: e_,
        onRequestClose: () => eO(false),
        children: e => (e => {
          let t = R.hv.has(null != ec ? ec : ""),
            n = {
              user: h,
              speaking: J,
              latched: Q,
              disconnected: Z,
              mute: B,
              localMute: V,
              localVideoDisabled: F,
              isStreaming: et,
              isGuest: er,
              video: K,
              priority: el,
              ringing: X,
              deaf: H,
              nick: q,
              collapsed: i,
              overlap: i,
              serverMute: z,
              serverDeaf: Y,
              tabIndex: ep,
              otherClientSessionType: ec,
              voicePlatform: eu,
              embeddedApplication: W,
              avatarContainerClass: s()({
                [L.dj]: true
              }),
              disabled: ed && !t,
              selected: e_,
              onClick: t ? true : eD,
              onDoubleClick: eU,
              onContextMenu: eB,
              guildId: U.guild_id,
              isSelf: ef,
              application: eg,
              channelId: U.id,
              hangStatusActivity: em,
              showHangStatus: eA
            };
          if (ed) {
            var l;
            return (0, r.jsx)(a.m, {
              text: null != (l = (0, A.A)(ec)) ? l : M.intl.string(M.t.IyYqqY),
              children: (0, r.jsx)(S.Ay, k({
                ref: ey
              }, n))
            })
          }
          let c = () => null;
          return eA && ew ? c = eV : et ? c = eH : eR && h.id !== I.default.getId() ? c = eF : eA && (c = eV), (0, r.jsx)(o.YNO, {
            targetElementRef: ey,
            position: "right",
            renderPopout: c,
            shouldShow: (ea || eA && eP) && !e_,
            onRequestClose: eM,
            align: eA && ew && !ef ? "center" : true,
            spacing: eA && ew ? 8 : 0,
            children: () => (0, r.jsx)(S.Ay, G(k({}, n), {
              ref: ey,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: ek,
              handleHoverIcons: eG,
              onAddHangStatusClicked: () => eI(true)
            }))
          })
        })(e)
      })
    });
  return ee ? $(eK) : eK
})