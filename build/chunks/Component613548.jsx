/** Chunk was on 13140 **/
/** chunk id: 613548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function M(e) {
  let {
    channelId: t,
    guildId: n
  } = e, i = (0, c.Wu)([P.Z, I.Z], () => {
    let e = Date.now();
    return s()(P.Z.getSpeakers()).map(e => I.Z.getParticipant(t, e)).filter(e => null != e && e.type === N.fO.USER && e.speaking && !(0, C.ZP)(e)).sortBy(t => -P.Z.getSpeakingDuration(t.user.id, e)).slice(0, 3).value()
  });
  return 0 === i.length ? null : (0, r.jsx)("div", {
    className: w.speakers,
    children: i.map(e => (0, r.jsx)(u.u, {
      position: "bottom",
      text: A.intl.formatToPlainString(A.t.JjdizN, {
        username: e.user.username
      }),
      children: (0, r.jsx)(S.ZP, {
        user: e.user,
        speaking: true,
        collapsed: true,
        guildId: n
      })
    }, e.id))
  })
}

function R(e) {
  let {
    channel: t,
    isChatOpen: n
  } = e, l = i.useRef(null), {
    analyticsLocations: o
  } = (0, h.ZP)(f.Z.VOICE_CHANNEL_HEADER), s = t.id, {
    voiceParticipantsHidden: u,
    selectedParticipant: C,
    userParticipantCount: S,
    participantsListOpen: P
  } = (0, c.cj)([I.Z], () => ({
    selectedParticipant: I.Z.getSelectedParticipant(s),
    voiceParticipantsHidden: I.Z.getVoiceParticipantsHidden(s),
    userParticipantCount: I.Z.getUserParticipantCount(s),
    participantsListOpen: I.Z.getParticipantsListOpen(s)
  }), [s]), A = t.isGuildVoiceOrThread() && !n, {
    hasParticipantsPanel: R
  } = (0, T.Z)({
    location: "ChannelCallHeaderToolbar"
  }), D = !P && R && (t.isGuildVoiceOrThread() || t.isGroupDM()), {
    enabled: k,
    inInbox: L
  } = _.Z.useExperiment({
    location: "ChannelCallHeaderToolbar"
  }), U = [];
  return u && U.push((0, r.jsx)(M, {
    channelId: s,
    guildId: t.guild_id
  }, "current-speaker")), U.push((0, r.jsx)(g.Z, {
    className: w.button,
    channelId: s
  }, "clips-enabled-indicator")), (null == C ? true : C.type) === N.fO.STREAM && (U.push((0, r.jsx)(v.Z, {
    className: w.button,
    participant: C
  }, "warning")), U.push((0, r.jsx)(b.Z, {
    size: m.ZP.Sizes.LARGE,
    className: w.button,
    participant: C,
    showQuality: true,
    premiumIndicator: false
  }, "live-indicator"))), (null == C ? true : C.type) === N.fO.USER && U.push((0, r.jsx)(O.Z, {
    className: w.button,
    userId: C.id
  }, "video-warning")), u && !R && U.push((0, r.jsx)(d.yRy, {
    targetElementRef: l,
    position: "bottom",
    renderPopout: () => (0, r.jsx)(x.Z, {
      children: (0, r.jsx)(Z.Z, {
        channel: t
      })
    }),
    children: (e, t) => {
      var n, r;
      let {
        isShown: a
      } = t;
      return (0, i.createElement)(j.Z, (n = function(e) {
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
      }({}, e), r = r = {
        buttonRef: l,
        isActive: a,
        count: S,
        key: "call-members",
        className: w.button
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  }, "call-members-popout")), k && !L && U.push((0, r.jsx)(y.Z, {
    className: w.button
  }, "for-later")), D && U.push((0, r.jsx)(j.Z, {
    className: a()(w.button, {
      [w.lastButton]: n
    }),
    onClick: () => p.Z.toggleParticipantsList(t.id, !P)
  }, "participants-list-button")), A && U.push((0, r.jsx)(E.T, {
    channelId: t.id,
    className: a()(w.button, {
      [w.lastButton]: P
    }),
    disabled: n
  }, "chat-spacer")), (0, r.jsx)(h.Gt, {
    value: o,
    children: U
  })
}