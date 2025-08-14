/** Chunk was on web.js **/
/** chunk id: 613548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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
  Chunk956235 = require("./956235.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = 3;

function U(e) {
  let {
    channelId: t,
    guildId: n
  } = e, i = (0, c.Wu)([A.Z, N.Z], () => {
    let e = Date.now();
    return l()(A.Z.getSpeakers()).map(e => N.Z.getParticipant(t, e)).filter(e => null != e && e.type === P.fO.USER && e.speaking && !(0, b.ZP)(e)).sortBy(t => -A.Z.getSpeakingDuration(t.user.id, e)).slice(0, k).value()
  });
  return 0 === i.length ? null : (0, r.jsx)(r.Fragment, {
    children: i.map((e, t) => (0, r.jsx)(u.ua7, {
      position: "bottom",
      color: u.ua7.Colors.GREY,
      text: w.intl.formatToPlainString(w.t.JjdizM, {
        username: e.user.username
      }),
      children: o => (0, r.jsx)(S.ZP, j(x({}, o), {
        className: a()(D.speaker, {
          [D.last]: t === i.length - 1
        }),
        user: e.user,
        speaking: true,
        collapsed: true,
        guildId: n
      }))
    }, e.id))
  })
}

function G(e) {
  let {
    channel: t,
    isChatOpen: n
  } = e, o = i.useRef(null), {
    analyticsLocations: s
  } = (0, _.ZP)(f.Z.VOICE_CHANNEL_HEADER), l = t.id, {
    voiceParticipantsHidden: b,
    selectedParticipant: S,
    userParticipantCount: A,
    participantsListOpen: w
  } = (0, c.cj)([N.Z], () => ({
    selectedParticipant: N.Z.getSelectedParticipant(l),
    voiceParticipantsHidden: N.Z.getVoiceParticipantsHidden(l),
    userParticipantCount: N.Z.getUserParticipantCount(l),
    participantsListOpen: N.Z.getParticipantsListOpen(l)
  }), [l]), L = t.isGuildVoice() && !n, {
    hasParticipantsPanel: M
  } = (0, R.Z)({
    location: "ChannelCallHeaderToolbar"
  }), k = !w && M && (t.isGuildVoice() || t.isGroupDM()), {
    enabled: G,
    inInbox: B
  } = g.Z.useExperiment({
    location: "ChannelCallHeaderToolbar"
  }), Z = [];
  return b && Z.push((0, r.jsx)(U, {
    channelId: l,
    guildId: t.guild_id
  }, "current-speaker")), Z.push((0, r.jsx)(h.Z, {
    className: D.button,
    channelId: l
  }, "clips-enabled-indicator")), (null == S ? true : S.type) === P.fO.STREAM && (Z.push((0, r.jsx)(y.Z, {
    className: D.button,
    participant: S
  }, "warning")), Z.push((0, r.jsx)(m.Z, {
    size: p.ZP.Sizes.LARGE,
    className: D.button,
    participant: S,
    showQuality: true,
    premiumIndicator: false
  }, "live-indicator"))), (null == S ? true : S.type) === P.fO.USER && Z.push((0, r.jsx)(O.Z, {
    className: D.button,
    userId: S.id
  }, "video-warning")), b && !M && Z.push((0, r.jsx)(u.yRy, {
    targetElementRef: o,
    position: "bottom",
    renderPopout: () => (0, r.jsx)(v.Z, {
      children: (0, r.jsx)(C.Z, {
        channel: t
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.createElement)(T.Z, j(x({}, e), {
        buttonRef: o,
        isActive: n,
        count: A,
        key: "call-members",
        className: D.button
      }))
    }
  }, "call-members-popout")), G && !B && Z.push((0, r.jsx)(E.Z, {
    className: D.button
  }, "for-later")), k && Z.push((0, r.jsx)(T.Z, {
    className: a()(D.button, {
      [D.lastButton]: n
    }),
    onClick: () => d.Z.toggleParticipantsList(t.id, !w)
  }, "participants-list-button")), L && Z.push((0, r.jsx)(I.T, {
    channelId: t.id,
    className: a()(D.button, {
      [D.lastButton]: w
    }),
    disabled: n
  }, "chat-spacer")), (0, r.jsx)(_.Gt, {
    value: s,
    children: Z
  })
}