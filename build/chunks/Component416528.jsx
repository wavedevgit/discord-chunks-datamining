/** Chunk was on 78528 **/
/** chunk id: 416528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk402216 = require("./402216.jsx"),
  Chunk689874 = require("./689874.jsx"),
  Chunk872363 = require("./872363.jsx"),
  Chunk966597 = require("./966597.js"),
  Chunk922281 = require("./922281.jsx"),
  Chunk51082 = require("./51082.js"),
  Chunk275731 = require("./275731.jsx"),
  Chunk289552 = require("./289552.jsx"),
  Chunk246356 = require("./246356.js"),
  Chunk977851 = require("./977851.jsx"),
  Chunk772475 = require("./772475.jsx"),
  Chunk481947 = require("./481947.jsx"),
  Chunk485296 = require("./485296.js"),
  Chunk313961 = require("./313961.js"),
  Chunk195007 = require("./195007.jsx"),
  Chunk261718 = require("./261718.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk433122 = require("./433122.js");

function D(e) {
  let {
    channelId: t,
    guildId: n
  } = e, l = (0, c.yK)([S.A, I.A], () => {
    let e = Date.now();
    return o()(S.A.getSpeakers()).map(e => I.A.getParticipant(t, e)).filter(e => null != e && e.type === P.lp.USER && e.speaking && !(0, _.Ay)(e)).sortBy(t => -S.A.getSpeakingDuration(t.user.id, e)).slice(0, 3).value()
  });
  return 0 === l.length ? null : (0, r.jsx)("div", {
    className: R.$U,
    children: l.map(e => (0, r.jsx)(u.m, {
      position: "bottom",
      text: w.intl.formatToPlainString(w.t.JjdizN, {
        username: e.user.username
      }),
      children: (0, r.jsx)(C.Ay, {
        user: e.user,
        speaking: true,
        collapsed: true,
        guildId: n
      })
    }, e.id))
  })
}

function M(e) {
  let {
    channel: t,
    isChatOpen: n
  } = e, i = l.useRef(null), {
    analyticsLocations: a
  } = (0, f.Ay)(h.A.VOICE_CHANNEL_HEADER), o = t.id, {
    voiceParticipantsHidden: u,
    selectedParticipant: _,
    userParticipantCount: C,
    participantsListOpen: S
  } = (0, c.cf)([I.A], () => ({
    selectedParticipant: I.A.getSelectedParticipant(o),
    voiceParticipantsHidden: I.A.getVoiceParticipantsHidden(o),
    userParticipantCount: I.A.getUserParticipantCount(o),
    participantsListOpen: I.A.getParticipantsListOpen(o)
  }), [o]), w = t.isGuildVoiceOrThread() && !n, {
    hasParticipantsPanel: M
  } = (0, T.A)({
    location: "ChannelCallHeaderToolbar"
  }), L = !S && M && (t.isGuildVoiceOrThread() || t.isGroupDM()), {
    enabled: k,
    inInbox: U
  } = A.A.useExperiment({
    location: "ChannelCallHeaderToolbar"
  }), G = [];
  return u && G.push((0, r.jsx)(D, {
    channelId: o,
    guildId: t.guild_id
  }, "current-speaker")), G.push((0, r.jsx)(m.A, {
    className: R.x6,
    channelId: o
  }, "clips-enabled-indicator")), (null == _ ? true : _.type) === P.lp.STREAM && (G.push((0, r.jsx)(O.A, {
    className: R.x6,
    participant: _
  }, "warning")), G.push((0, r.jsx)(b.A, {
    size: g.Ay.Sizes.LARGE,
    className: R.x6,
    participant: _,
    showQuality: true,
    premiumIndicator: false
  }, "live-indicator"))), (null == _ ? true : _.type) === P.lp.USER && G.push((0, r.jsx)(j.A, {
    className: R.x6,
    userId: _.id
  }, "video-warning")), u && !M && G.push((0, r.jsx)(d.YNO, {
    targetElementRef: i,
    position: "bottom",
    renderPopout: () => (0, r.jsx)(v.A, {
      children: (0, r.jsx)(N.A, {
        channel: t
      })
    }),
    children: (e, t) => {
      var n, r;
      let {
        isShown: s
      } = t;
      return (0, l.createElement)(E.A, (n = function(e) {
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
        buttonRef: i,
        isActive: s,
        count: C,
        key: "call-members",
        className: R.x6
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
  }, "call-members-popout")), k && !U && G.push((0, r.jsx)(y.A, {
    className: R.x6
  }, "for-later")), L && G.push((0, r.jsx)(E.A, {
    className: s()(R.x6, {
      [R.Lt]: n
    }),
    onClick: () => p.A.toggleParticipantsList(t.id, !S)
  }, "participants-list-button")), w && G.push((0, r.jsx)(x.V, {
    channelId: t.id,
    className: s()(R.x6, {
      [R.Lt]: S
    }),
    disabled: n
  }, "chat-spacer")), (0, r.jsx)(f.f5, {
    value: a,
    children: G
  })
}