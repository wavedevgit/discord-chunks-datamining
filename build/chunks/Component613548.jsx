/** Chunk was on 70127 **/
/** chunk id: 613548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk194082 = require("./194082.jsx"),
  Chunk236091 = require("./236091.jsx"),
  Chunk517525 = require("./517525.jsx"),
  Chunk2818 = require("./2818.js"),
  Chunk954551 = require("./954551.jsx"),
  Chunk44136 = require("./44136.js"),
  Chunk651183 = require("./651183.jsx"),
  Chunk853476 = require("./853476.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk616286 = require("./616286.jsx"),
  Chunk975146 = require("./975146.jsx"),
  Chunk597998 = require("./597998.jsx"),
  Chunk606304 = require("./606304.js"),
  Chunk358221 = require("./358221.js"),
  Chunk355827 = require("./355827.jsx"),
  Chunk185935 = require("./185935.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk611295 = require("./611295.js");

function w(e) {
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

function R(e, t) {
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

function M(e) {
  let {
    channelId: t,
    guildId: n
  } = e, i = (0, c.Wu)([S.Z, I.Z], () => {
    let e = Date.now();
    return s()(S.Z.getSpeakers()).map(e => I.Z.getParticipant(t, e)).filter(e => null != e && e.type === T.fO.USER && e.speaking && !(0, _.ZP)(e)).sortBy(t => -S.Z.getSpeakingDuration(t.user.id, e)).slice(0, 3).value()
  });
  return 0 === i.length ? null : (0, r.jsx)(r.Fragment, {
    children: i.map((e, t) => (0, r.jsx)(u.ua7, {
      position: "bottom",
      color: u.ua7.Colors.GREY,
      text: N.intl.formatToPlainString(N.t.JjdizM, {
        username: e.user.username
      }),
      children: l => (0, r.jsx)(E.ZP, R(w({}, l), {
        className: a()(A.speaker, {
          [A.last]: t === i.length - 1
        }),
        user: e.user,
        speaking: true,
        collapsed: true,
        guildId: n
      }))
    }, e.id))
  })
}

function D(e) {
  let {
    channel: t,
    isChatOpen: n
  } = e, l = i.useRef(null), {
    analyticsLocations: o
  } = (0, h.ZP)(p.Z.VOICE_CHANNEL_HEADER), s = t.id, {
    voiceParticipantsHidden: _,
    selectedParticipant: E,
    userParticipantCount: S,
    participantsListOpen: N
  } = (0, c.cj)([I.Z], () => ({
    selectedParticipant: I.Z.getSelectedParticipant(s),
    voiceParticipantsHidden: I.Z.getVoiceParticipantsHidden(s),
    userParticipantCount: I.Z.getUserParticipantCount(s),
    participantsListOpen: I.Z.getParticipantsListOpen(s)
  }), [s]), D = t.isGuildVoice() && !n, {
    hasParticipantsPanel: L
  } = (0, Z.Z)({
    location: "ChannelCallHeaderToolbar"
  }), k = !N && L && (t.isGuildVoice() || t.isGroupDM()), {
    enabled: U,
    inInbox: B
  } = b.Z.useExperiment({
    location: "ChannelCallHeaderToolbar"
  }), G = [];
  return _ && G.push((0, r.jsx)(M, {
    channelId: s,
    guildId: t.guild_id
  }, "current-speaker")), G.push((0, r.jsx)(m.Z, {
    className: A.button,
    channelId: s
  }, "clips-enabled-indicator")), (null == E ? true : E.type) === T.fO.STREAM && (G.push((0, r.jsx)(C.Z, {
    className: A.button,
    participant: E
  }, "warning")), G.push((0, r.jsx)(g.Z, {
    size: f.ZP.Sizes.LARGE,
    className: A.button,
    participant: E,
    showQuality: true,
    premiumIndicator: false
  }, "live-indicator"))), (null == E ? true : E.type) === T.fO.USER && G.push((0, r.jsx)(v.Z, {
    className: A.button,
    userId: E.id
  }, "video-warning")), _ && !L && G.push((0, r.jsx)(u.yRy, {
    targetElementRef: l,
    position: "bottom",
    renderPopout: () => (0, r.jsx)(x.Z, {
      children: (0, r.jsx)(P.Z, {
        channel: t
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.createElement)(j.Z, R(w({}, e), {
        buttonRef: l,
        isActive: n,
        count: S,
        key: "call-members",
        className: A.button
      }))
    }
  }, "call-members-popout")), U && !B && G.push((0, r.jsx)(y.Z, {
    className: A.button
  }, "for-later")), k && G.push((0, r.jsx)(j.Z, {
    className: a()(A.button, {
      [A.lastButton]: n
    }),
    onClick: () => d.Z.toggleParticipantsList(t.id, !N)
  }, "participants-list-button")), D && G.push((0, r.jsx)(O.T, {
    channelId: t.id,
    className: a()(A.button, {
      [A.lastButton]: N
    }),
    disabled: n
  }, "chat-spacer")), (0, r.jsx)(h.Gt, {
    value: o,
    children: G
  })
}