/** Chunk was on 1113 **/
/** chunk id: 340851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => F,
  LR: () => B,
  aI: () => H
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
  Chunk338234 = require("./338234.js"),
  Chunk376696 = require("./376696.jsx"),
  Chunk544105 = require("./544105.js"),
  Chunk502075 = require("./502075.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk861379 = require("./861379.js");

function U(e) {
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

function V(e, t) {
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

function B(e) {
  let {
    numUsers: t
  } = e;
  return (0, r.jsx)("div", {
    className: G.BN,
    children: (0, r.jsxs)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function H(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, l = n ? t : k.intl.formatToPlainString(k.t["+v2pN2"], {
    count: t
  });
  return (0, r.jsxs)("div", {
    className: s()(G.yJ, {
      [G.Nr]: n
    }),
    children: [(0, r.jsx)("div", {
      className: G.$L,
      children: (0, r.jsx)(o.LoC, {
        size: "md",
        color: "currentColor",
        className: G.wG
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
    channel: B,
    mute: H,
    localMute: F,
    localVideoDisabled: K,
    deaf: Y,
    video: W,
    embeddedApplication: z,
    serverMute: q,
    serverDeaf: X,
    nick: J,
    ringing: Q,
    speaking: Z,
    latched: $,
    disconnected: ee,
    connectUserDragSource: et,
    canDrag: en,
    isStreaming: er,
    isWatching: el,
    isGuest: ei,
    priority: es,
    showPreview: ea,
    hidePreview: eo,
    shouldShowHoverPopout: ec,
    previewIsOpen: eu,
    otherClientSessionType: ed,
    voicePlatform: eh,
    isSelfOnOtherClient: ep = false,
    tabIndex: eg,
    location: ef,
    isSelf: em,
    application: eb,
    hangStatusActivity: eA,
    requestToStreamActivity: ey,
    showHangStatus: eO
  } = e, {
    enableUserHoverActivities: e_
  } = (0, R.fC)({
    guildId: B.guild_id,
    location: "VoiceUser"
  }), ex = l.useRef(null), [ej, ev] = l.useState(false), eE = l.useRef(null), [eC, eS] = l.useState(false), [eI, eN] = l.useState(false), [eT, eP] = l.useState(false), [ew, eR] = l.useState(false), eD = eI || ew || eT, eL = eC || eD, eM = (null == ey ? true : ey.session_id) != null, ek = () => {
    ev(!ej)
  }, eG = (e, t) => {
    let n = new Set(["system:click_outside", "user:escape", "user:explicit"]);
    null != t && n.has(t) && (eT && eP(false), eI && eN(false)), eU()
  }, eU = () => {
    null == eo || eo(p.id)
  }, eV = e => {
    (!e_ || em) && (e ? eE.current = setTimeout(() => {
      eS(true)
    }, 150 * !!eu) : clearTimeout(eE.current))
  };
  l.useEffect(() => () => clearTimeout(eE.current), []);
  let eB = e => {
      e && eS(false)
    },
    eH = () => {
      if (!(er && (0, O.eo)(B, w.A, N.A, T.A, b.default)[0])) return;
      let e = {
        streamType: M.U4.GUILD,
        ownerId: p.id,
        channelId: B.id,
        guildId: B.guild_id
      };
      I.default.getId() !== p.id && d.default.selectVoiceChannel(B.id), el ? ((0, _.A)(e), c.A.selectParticipant(e.channelId, (0, y._z)(e))) : (0, h.Nl)(e), null == eo || eo(p.id)
    },
    eF = e => {
      (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("52458")]).then(n.bind(n, 107632));
        return t => (0, r.jsx)(e, V(U({}, t), {
          user: p,
          guildId: B.guild_id,
          channel: B,
          showMediaItems: true,
          showStageChannelItems: B.isGuildStageVoice(),
          onInteraction: (0, m.s)("GuildChannelUserContextMenu", f.A.VOICE_USER, {
            targetUserId: p.id
          })
        }))
      })
    },
    eK = e => em ? (0, r.jsx)(j.h, V(U({}, e), {
      channel: B,
      setIsHangStatusInputFocused: eN,
      setIsEmojiPickerOpen: eR
    })) : null != eA ? (0, r.jsx)(v.E, V(U({}, e), {
      hangStatusActivity: eA,
      channel: B,
      userId: p.id
    })) : null,
    eY = () => (0, r.jsx)(E.A, {
      userId: p.id,
      channel: B
    }),
    eW = () => (0, g.r9)() && (0, g.UK)(B.id) ? null : (0, r.jsx)(x.A, {
      user: p,
      channel: B,
      onWatch: eH,
      previewIsOpen: eu,
      location: ef
    }),
    ez = (0, r.jsx)("div", {
      className: G.kZ,
      "data-dnd-name": B.name,
      onMouseEnter: ep ? true : () => {
        e_ ? (em && eO && !ej && !eL && eS(true), ej || null == ea || ea(p.id)) : (er || eO || eM) && !ej && (null == ea || ea(p.id))
      },
      onMouseLeave: ep ? true : eU,
      children: (0, r.jsx)(C.A, {
        clickTrap: (null == p ? true : p.id) === (null == (t = P.default.getCurrentUser()) ? true : t.id) && ej,
        targetElementRef: ex,
        user: p,
        guildId: B.guild_id,
        channelId: B.id,
        newAnalyticsLocations: [f.A.VOICE_USER],
        shouldShow: ej,
        onRequestClose: () => ev(false),
        children: e => (e => {
          let t = L.hv.has(null != ed ? ed : ""),
            n = {
              user: p,
              speaking: Z,
              latched: $,
              disconnected: ee,
              mute: H,
              localMute: F,
              localVideoDisabled: K,
              isStreaming: er,
              isGuest: ei,
              video: W,
              priority: es,
              ringing: Q,
              deaf: Y,
              nick: J,
              collapsed: i,
              overlap: i,
              serverMute: q,
              serverDeaf: X,
              tabIndex: eg,
              otherClientSessionType: ed,
              voicePlatform: eh,
              embeddedApplication: z,
              avatarContainerClass: s()({
                [G.dj]: true
              }),
              disabled: ep && !t,
              selected: ej,
              onClick: t ? true : ek,
              onDoubleClick: eH,
              onContextMenu: eF,
              guildId: B.guild_id,
              isSelf: em,
              application: eb,
              channelId: B.id,
              hangStatusActivity: eA,
              showHangStatus: eO
            };
          if (ep) {
            var l;
            return (0, r.jsx)(a.m, {
              text: null != (l = (0, A.A)(ed)) ? l : k.intl.string(k.t.IyYqqY),
              children: (0, r.jsx)(S.Ay, U({
                ref: ex
              }, n))
            })
          }
          let c = () => null;
          return eO && eL && (!e_ || em) ? c = eK : e_ ? c = em && eO ? eK : () => (0, r.jsx)(D.A, {
            channel: B,
            user: p,
            onAction: eU,
            onWatchStream: er ? eH : true,
            previewIsOpen: eu,
            hangStatusActivity: eA
          }) : er ? c = eW : eM && p.id !== I.default.getId() ? c = eY : eO && (c = eK), (0, r.jsx)(o.YNO, {
            targetElementRef: ex,
            position: "right",
            renderPopout: c,
            shouldShow: (ec || eO && eD && (!e_ || em)) && !ej,
            onRequestClose: eG,
            align: eO && eL && !em && !e_ ? "center" : true,
            spacing: eO && eL && (!e_ || em) ? 8 : 0,
            children: () => (0, r.jsx)(S.Ay, V(U({}, n), {
              ref: ex,
              onMouseDown: e.onMouseDown,
              onKeyDown: e.onKeyDown,
              handleHoverHangStatus: eV,
              handleHoverIcons: eB,
              onAddHangStatusClicked: () => eP(true)
            }))
          })
        })(e)
      })
    });
  return en ? et(ez) : ez
})