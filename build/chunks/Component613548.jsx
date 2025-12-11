/** Chunk was on 40184 **/
/** chunk id: 613548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
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

function M(e) {
  let {
    channelId: t,
    guildId: n
  } = e, r = (0, c.Wu)([P.Z, I.Z], () => {
    let e = Date.now();
    return s()(P.Z.getSpeakers()).map(e => I.Z.getParticipant(t, e)).filter(e => null != e && e.type === N.fO.USER && e.speaking && !(0, v.ZP)(e)).sortBy(t => -P.Z.getSpeakingDuration(t.user.id, e)).slice(0, 3).value()
  });
  return 0 === r.length ? null : (0, i.jsx)("div", {
    className: w.speakers,
    children: r.map(e => (0, i.jsx)(u.u, {
      position: "bottom",
      text: A.intl.formatToPlainString(A.t.JjdizN, {
        username: e.user.username
      }),
      children: (0, i.jsx)(_.ZP, {
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
  } = e, l = r.useRef(null), {
    analyticsLocations: o
  } = (0, h.ZP)(f.Z.VOICE_CHANNEL_HEADER), s = t.id, {
    voiceParticipantsHidden: u,
    selectedParticipant: v,
    userParticipantCount: _,
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
  }), L = !P && R && (t.isGuildVoiceOrThread() || t.isGroupDM()), {
    enabled: D,
    inInbox: k
  } = C.Z.useExperiment({
    location: "ChannelCallHeaderToolbar"
  }), U = [];
  return u && U.push((0, i.jsx)(M, {
    channelId: s,
    guildId: t.guild_id
  }, "current-speaker")), U.push((0, i.jsx)(g.Z, {
    className: w.button,
    channelId: s
  }, "clips-enabled-indicator")), (null == v ? true : v.type) === N.fO.STREAM && (U.push((0, i.jsx)(O.Z, {
    className: w.button,
    participant: v
  }, "warning")), U.push((0, i.jsx)(b.Z, {
    size: m.ZP.Sizes.LARGE,
    className: w.button,
    participant: v,
    showQuality: true,
    premiumIndicator: false
  }, "live-indicator"))), (null == v ? true : v.type) === N.fO.USER && U.push((0, i.jsx)(x.Z, {
    className: w.button,
    userId: v.id
  }, "video-warning")), u && !R && U.push((0, i.jsx)(d.yRy, {
    targetElementRef: l,
    position: "bottom",
    renderPopout: () => (0, i.jsx)(E.Z, {
      children: (0, i.jsx)(Z.Z, {
        channel: t
      })
    }),
    children: (e, t) => {
      var n, i;
      let {
        isShown: a
      } = t;
      return (0, r.createElement)(S.Z, (n = function(e) {
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
      }({}, e), i = i = {
        buttonRef: l,
        isActive: a,
        count: _,
        key: "call-members",
        className: w.button
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  }, "call-members-popout")), D && !k && U.push((0, i.jsx)(y.Z, {
    className: w.button
  }, "for-later")), L && U.push((0, i.jsx)(S.Z, {
    className: a()(w.button, {
      [w.lastButton]: n
    }),
    onClick: () => p.Z.toggleParticipantsList(t.id, !P)
  }, "participants-list-button")), A && U.push((0, i.jsx)(j.T, {
    channelId: t.id,
    className: a()(w.button, {
      [w.lastButton]: P
    }),
    disabled: n
  }, "chat-spacer")), (0, i.jsx)(h.Gt, {
    value: o,
    children: U
  })
}