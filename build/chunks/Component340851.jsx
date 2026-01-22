/** Chunk was on 97492 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => F,
  LR: () => U,
  aI: () => V
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function G(e) {
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
    className: L.BN,
    children: (0, r.jsxs)(o.Text, {
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
  } = e, l = n ? t : M.intl.formatToPlainString(M.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: a()(L.yJ, {
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
let F = (0, Chunk296216.J)(function(e) {
  var t;
  let {
    collapsed: i,
    user: p,
    channel: U,
    mute: V,
    localMute: F,
    localVideoDisabled: H,
    deaf: B,
    video: K,
    embeddedApplication: W,
    serverMute: z,
    serverDeaf: Y,
    nick: q,
    ringing: X,
    speaking: J,
    voiceDb: Q,
    latched: Z,
    disconnected: $,
    connectUserDragSource: ee,
    canDrag: et,
    isStreaming: en,
    isWatching: er,
    isGuest: el,
    priority: ei,
    showPreview: ea,
    hidePreview: es,
    shouldShowHoverPopout: eo,
    previewIsOpen: ec,
    otherClientSessionType: eu,
    voicePlatform: ed,
    isSelfOnOtherClient: ef = false,
    tabIndex: ep,
    location: eh,
    isSelf: eb,
    application: eg,
    hangStatusActivity: em,
    requestToStreamActivity: eA,
    showHangStatus: ey
  } = e, eO = l.useRef(null), [ej, ev] = l.useState(false), ex = l.useRef(null), [eE, e_] = l.useState(false), [eC, eS] = l.useState(false), [eI, eN] = l.useState(false), [eT, eP] = l.useState(false), ew = eC || eT || eI, eR = eE || ew, eD = (null == eA ? true : eA.session_id) != null, eM = () => {
    ev(!ej)
  }, eL = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eI && eN(false), eC && eS(false)), eG()
  }, eG = () => {
    (en || ey || eD) && (null == es || es(p.id))
  }, ek = e => {
    e ? ex.current = setTimeout(() => {
      e_(true)
    }, 150 * !!ec) : clearTimeout(ex.current)
  };
  l.useEffect(() => () => clearTimeout(ex.current), []);
  let eU = e => {
      e && e_(false)
    },
    eV = () => {
      if (!(en && (0, O.eo)(U, w.A, N.A, T.A, m.default)[0])) return;
      let e = {
        streamType: D.U4.GUILD,
        ownerId: p.id,
        channelId: U.id,
        guildId: U.guild_id
      };
      I.default.getId() !== p.id && d.default.selectVoiceChannel(U.id), er ? ((0, j.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, f.Nl)(e), null == es || es(p.id)
    },
    eF = e => {
      (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("39271")]).then(n.bind(n, 107632));
        return t => (0, r.jsx)(e, k(G({}, t), {
          user: p,
          guildId: U.guild_id,
          channel: U,
          showMediaItems: true,
          showStageChannelItems: U.isGuildStageVoice(),
          onInteraction: (0, g.s)("GuildChannelUserContextMenu", b.A.VOICE_USER, {
            targetUserId: p.id
          })
        }))
      })
    },
    eH = e => eb ? (0, r.jsx)(x.h, k(G({}, e), {
      channel: U,
      setIsHangStatusInputFocused: eS,
      setIsEmojiPickerOpen: eP
    })) : null != em ? (0, r.jsx)(E.E, k(G({}, e), {
      hangStatusActivity: em,
      channel: U,
      userId: p.id
    })) : null,
    eB = () => (0, r.jsx)(_.A, {
      userId: p.id,
      channel: U
    }),
    eK = () => (0, h.r9)() && (0, h.UK)(U.id) ? null : (0, r.jsx)(v.A, {
      user: p,
      channel: U,
      onWatch: eV,
      previewIsOpen: ec,
      location: eh
    }),
    eW = (0, r.jsx)("div", {
      className: L.kZ,
      "data-dnd-name": U.name,
      onMouseEnter: ef ? true : () => {
        (en || ey || eD) && !ej && (null == ea || ea(p.id))
      },
      onMouseLeave: ef ? true : eG,
      children: (0, r.jsx)(C.A, {
        clickTrap: (null == p ? true : p.id) === (null == (t = P.default.getCurrentUser()) ? true : t.id) && ej,
        targetElementRef: eO,
        user: p,
        guildId: U.guild_id,
        channelId: U.id,
        newAnalyticsLocations: [b.A.VOICE_USER],
        shouldShow: ej,
        onRequestClose: () => ev(false),
        children: e => (e => {
          let t = R.hv.has(null != eu ? eu : ""),
            n = {
              user: p,
              speaking: J,
              voiceDb: Q,
              latched: Z,
              disconnected: $,
              mute: V,
              localMute: F,
              localVideoDisabled: H,
              isStreaming: en,
              isGuest: el,
              video: K,
              priority: ei,
              ringing: X,
              deaf: B,
              nick: q,
              collapsed: i,
              overlap: i,
              serverMute: z,
              serverDeaf: Y,
              tabIndex: ep,
              otherClientSessionType: eu,
              voicePlatform: ed,
              embeddedApplication: W,
              avatarContainerClass: a()({
                [L.dj]: true
              }),
              disabled: ef && !t,
              selected: ej,
              onClick: t ? true : eM,
              onDoubleClick: eV,
              onContextMenu: eF,
              guildId: U.guild_id,
              isSelf: eb,
              application: eg,
              channelId: U.id,
              hangStatusActivity: em,
              showHangStatus: ey
            };
          if (ef) {
            var l;
            return (0, r.jsx)(s.m, {
              text: null != (l = (0, A.A)(eu)) ? l : M.intl.string(M.t.IyYqqY),
              children: (0, r.jsx)(S.Ay, G({
                ref: eO
              }, n))
            })
          }
          let c = () => null;
          return ey && eR ? c = eH : en ? c = eK : eD && p.id !== I.default.getId() ? c = eB : ey && (c = eH), (0, r.jsx)(o.YNO, {
            targetElementRef: eO,
            position: "right",
            renderPopout: c,
            shouldShow: (eo || ey && ew) && !ej,
            onRequestClose: eL,
            align: ey && eR && !eb ? "center" : true,
            spacing: ey && eR ? 8 : 0,
            children: () => (0, r.jsx)(S.Ay, k(G({}, n), {
              ref: eO,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: ek,
              handleHoverIcons: eU,
              onAddHangStatusClicked: () => eN(true)
            }))
          })
        })(e)
      })
    });
  return et ? ee(eW) : eW
})