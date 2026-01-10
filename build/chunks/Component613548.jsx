/** Chunk was on 81985 **/
/** chunk id: 613548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk116388 = require("./116388.js");

function R(e) {
  let {
    channelId: t,
    guildId: n
  } = e, i = (0, c.Wu)([I.Z, P.Z], () => {
    let e = Date.now();
    return s()(I.Z.getSpeakers()).map(e => P.Z.getParticipant(t, e)).filter(e => null != e && e.type === T.fO.USER && e.speaking && !(0, O.ZP)(e)).sortBy(t => -I.Z.getSpeakingDuration(t.user.id, e)).slice(0, 3).value()
  });
  return 0 === i.length ? null : (0, r.jsx)("div", {
    className: w.speakers,
    children: i.map(e => (0, r.jsx)(u.u, {
      position: "bottom",
      text: A.intl.formatToPlainString(A.t.JjdizN, {
        username: e.user.username
      }),
      children: (0, r.jsx)(_.ZP, {
        user: e.user,
        speaking: true,
        collapsed: true,
        guildId: n
      })
    }, e.id))
  })
}

function D(e) {
  let {
    channel: t,
    isChatOpen: n
  } = e, l = i.useRef(null), {
    analyticsLocations: o
  } = (0, h.ZP)(f.Z.VOICE_CHANNEL_HEADER), s = t.id, {
    voiceParticipantsHidden: u,
    selectedParticipant: O,
    userParticipantCount: _,
    participantsListOpen: I
  } = (0, c.cj)([P.Z], () => ({
    selectedParticipant: P.Z.getSelectedParticipant(s),
    voiceParticipantsHidden: P.Z.getVoiceParticipantsHidden(s),
    userParticipantCount: P.Z.getUserParticipantCount(s),
    participantsListOpen: P.Z.getParticipantsListOpen(s)
  }), [s]), A = t.isGuildVoiceOrThread() && !n, {
    hasParticipantsPanel: D
  } = (0, N.Z)({
    location: "ChannelCallHeaderToolbar"
  }), M = !I && D && (t.isGuildVoiceOrThread() || t.isGroupDM()), {
    enabled: k,
    inInbox: L
  } = y.Z.useExperiment({
    location: "ChannelCallHeaderToolbar"
  }), U = [];
  return u && U.push((0, r.jsx)(R, {
    channelId: s,
    guildId: t.guild_id
  }, "current-speaker")), U.push((0, r.jsx)(m.Z, {
    className: w.button,
    channelId: s
  }, "clips-enabled-indicator")), (null == O ? true : O.type) === T.fO.STREAM && (U.push((0, r.jsx)(j.Z, {
    className: w.button,
    participant: O
  }, "warning")), U.push((0, r.jsx)(b.Z, {
    size: g.ZP.Sizes.LARGE,
    className: w.button,
    participant: O,
    showQuality: true,
    premiumIndicator: false
  }, "live-indicator"))), (null == O ? true : O.type) === T.fO.USER && U.push((0, r.jsx)(x.Z, {
    className: w.button,
    userId: O.id
  }, "video-warning")), u && !D && U.push((0, r.jsx)(d.yRy, {
    targetElementRef: l,
    position: "bottom",
    renderPopout: () => (0, r.jsx)(C.Z, {
      children: (0, r.jsx)(Z.Z, {
        channel: t
      })
    }),
    children: (e, t) => {
      var n, r;
      let {
        isShown: a
      } = t;
      return (0, i.createElement)(S.Z, (n = function(e) {
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
        count: _,
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
  }, "call-members-popout")), k && !L && U.push((0, r.jsx)(v.Z, {
    className: w.button
  }, "for-later")), M && U.push((0, r.jsx)(S.Z, {
    className: a()(w.button, {
      [w.lastButton]: n
    }),
    onClick: () => p.Z.toggleParticipantsList(t.id, !I)
  }, "participants-list-button")), A && U.push((0, r.jsx)(E.T, {
    channelId: t.id,
    className: a()(w.button, {
      [w.lastButton]: I
    }),
    disabled: n
  }, "chat-spacer")), (0, r.jsx)(h.Gt, {
    value: o,
    children: U
  })
}