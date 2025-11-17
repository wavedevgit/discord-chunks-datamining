/** Chunk was on web.js **/
/** chunk id: 203143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q,
  n: () => Z
}), require("./415506.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./781311.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk263568 = require("./263568.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk749210 = require("./749210.js"),
  Chunk904245 = require("./904245.js"),
  Chunk881052 = require("./881052.js"),
  Chunk367907 = require("./367907.js"),
  Chunk41776 = require("./41776.js"),
  Chunk58873 = require("./58873.js"),
  Chunk566006 = require("./566006.js"),
  Chunk869765 = require("./869765.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk607744 = require("./607744.js"),
  Chunk375954 = require("./375954.js"),
  Chunk117530 = require("./117530.js"),
  Chunk553803 = require("./553803.jsx"),
  Chunk467531 = require("./467531.js"),
  Chunk798628 = require("./798628.js"),
  Chunk918088 = require("./918088.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function w(e, t, n) {
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
      w(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = j(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function U(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = T.Z.getMessage(t, n);
  if (null != r) return {
    message: r,
    channelId: t,
    messageId: n
  };
  let a = b.Z.getMessage(t, n);
  if (null != a.message) return {
    channelId: t,
    messageId: n,
    message: a.message
  };
  throw i()(null != r, "Tapped on a non-existent poll message"), Error()
}

function G(e, t) {
  let n = [...t],
    r = 0,
    i = 0;
  for (let t of n) {
    var a;
    let n = null == e || null == (a = e.find(e => e.answer_id === parseInt(t))) ? true : a.poll_media;
    (null == n ? true : n.text) != null && (r += 1), (null == n ? true : n.emoji) != null && (i += 1)
  }
  return {
    analyticsSelectedAnswerIds: n,
    selectedTextAnswersCount: r,
    selectedEmojiAnswersCount: i
  }
}

function B(e) {
  let {
    guildId: t,
    title: n,
    body: r
  } = e;
  d.Z.show({
    title: n,
    body: r,
    confirmText: D.intl.string(D.t["9VLmlZ"]),
    cancelText: D.intl.string(D.t["2m+Sqk"]),
    onConfirm: () => {
      f.Z.joinGuild(t, {
        source: P.vtS.POLL_ALERT
      })
    }
  })
}

function Z(e) {
  let {
    channelId: t,
    messageId: n,
    answerId: r
  } = e, i = O.Z.getChannel(t);
  if (null == i) return;
  if (m.Z.isLurking(i.guild_id)) return void B({
    guildId: i.guild_id,
    title: D.intl.string(D.t["7LpysO"]),
    body: D.intl.string(D.t["5sHHoy"])
  });
  let a = T.Z.getMessage(t, n);
  if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
  let o = null != r ? r : String(a.poll.answers[0].answer_id);
  A.A({
    message: a,
    initialAnswerId: o
  })
}

function F(e) {
  let {
    channelId: t,
    messageId: n,
    isEditing: r
  } = e;
  (0, N.eu)(t, n, e => {
    var n;
    return {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: false,
      editing: r,
      showResults: null != (n = null == e ? true : e.showResults) && n
    }
  })
}

function V(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = T.Z.getMessage(t, n);
  return null == r ? [] : r.reactions.flatMap(e => true === e.me_vote ? e.emoji.name : [])
}
async function H(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: r
  } = e, i = V({
    channelId: t,
    messageId: n
  }), a = o().difference(i, r), s = o().difference(r, i), c = y.default.getId(), d = [...a.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...s.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], f = l.ZP.Emitter.batched(() => {
    let e;
    for (let {
        id: r,
        type: i
      }
      of d) e = u.Z.dispatch({
      type: i,
      channelId: t,
      messageId: n,
      emoji: {
        id: r,
        name: r
      },
      userId: c,
      optimistic: true,
      reactionType: E.O.VOTE
    });
    return e
  });
  null != f && await f
}
async function Y(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = O.Z.getChannel(t);
  if (null == r) return;
  if (m.Z.isLurking(r.guild_id)) return void B({
    guildId: r.guild_id,
    title: D.intl.string(D.t.Qic1FD),
    body: D.intl.string(D.t["5sHHoy"])
  });
  if (!I.Z.canChatInGuild(r.guild_id)) return void d.Z.show({
    title: D.intl.string(D.t.p245wu),
    body: D.intl.string(D.t["U/uodt"])
  });
  let a = (0, N.fU)(t, n);
  i()(null != a, "Must not be able to vote without existing state!");
  let o = V({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...a.selectedAnswerIds.values()];
    (0, N.eu)(t, n, e => (i()(null != e, "Must not be able to vote without existing state!"), M(x({}, e), {
      submitting: true,
      editing: false
    }))), await H({
      channelId: t,
      messageId: n,
      answerIds: e
    }), await C.B({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, N.eu)(t, n, () => true), c.uv.announce(0 === e.length ? D.intl.string(D.t["xcvy+3"]) : D.intl.string(D.t.o20GSo))
  } catch (e) {
    var s, l, u;
    d.Z.show({
      title: D.intl.string(D.t.iufib1),
      body: null != (u = null != (l = null == (s = e.getAnyErrorMessage) ? true : s.call(e)) ? l : e.message) ? u : D.intl.string(D.t.eAn6z2)
    }), await H({
      channelId: t,
      messageId: n,
      answerIds: o
    }), (0, N.eu)(t, n, e => {
      if (null != e) return M(x({}, e), {
        submitting: false,
        editing: false
      })
    })
  }
}
async function W(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = O.Z.getChannel(t);
  if (null != r) return m.Z.isLurking(r.guild_id) ? void B({
    guildId: r.guild_id,
    title: D.intl.string(D.t.B9QnBp),
    body: D.intl.string(D.t.BVZCTn)
  }) : ((0, N.eu)(t, n, e => {
    var n;
    return {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: false,
      editing: false,
      showResults: null != (n = null == e ? true : e.showResults) && n
    }
  }), await Y({
    channelId: t,
    messageId: n
  }))
}

function K(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  (0, N.eu)(t, n, e => {
    var r, i;
    let a = null == e || !e.showResults,
      o = T.Z.getMessage(t, n),
      s = null != o ? o.reactions.reduce((e, t) => {
        var n, r;
        return e + (null != (r = null == (n = t.count_details) ? true : n.vote) ? r : 0)
      }, 0) : 0;
    return h.ZP.trackWithMetadata(P.rMx.POLL_SHOW_RESULTS_CLICKED, {
      channel_id: t,
      message_id: n,
      show_results: a,
      votes_count: s
    }), {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: null != (r = null == e ? true : e.submitting) && r,
      editing: null != (i = null == e ? true : e.submitting) && i,
      showResults: a
    }
  })
}
async function z(e) {
  let {
    channelId: t,
    messageId: n,
    type: r
  } = e;
  switch (r) {
    case "submit":
      await Y({
        channelId: t,
        messageId: n
      });
      break;
    case "remove":
      await W({
        channelId: t,
        messageId: n
      });
      break;
    case "cancel":
      F({
        channelId: t,
        messageId: n,
        isEditing: false
      });
      break;
    case "showVotes":
      K({
        channelId: t,
        messageId: n
      });
      break;
    case "showVoterDetails":
      Z({
        channelId: t,
        messageId: n
      });
      break;
    default:
      i()(false, "Unknown poll action type: ".concat(r))
  }
}
let q = {
  handlePollAnswerTapped: function(e) {
    var t, n, {
      answerId: r
    } = e;
    let {
      channelId: i,
      messageId: a,
      message: o
    } = U(k(e, ["answerId"])), {
      tapShouldOpenVotersModal: s
    } = null != (n = (0, R.Tk)(o)) ? n : {};
    if (true === s) return void Z({
      channelId: i,
      messageId: a,
      answerId: r
    });
    let l = null == (t = o.poll) ? true : t.allow_multiselect;
    (0, N.eu)(i, a, e => {
      var t, n;
      if (null == e) {
        let e = new Set([r]),
          {
            analyticsSelectedAnswerIds: t,
            selectedTextAnswersCount: s,
            selectedEmojiAnswersCount: l
          } = G(null == (n = o.poll) ? true : n.answers, e);
        return h.ZP.trackWithMetadata(P.rMx.POLL_VOTE_SELECTED, {
          channel_id: i,
          message_id: a,
          selected_answer_ids: t,
          selected_text_answers_count: s,
          selected_emoji_answers_count: l
        }), {
          channelId: i,
          selectedAnswerIds: e,
          submitting: false,
          editing: false,
          showResults: false
        }
      }
      let s = x({}, e),
        c = new Set(s.selectedAnswerIds);
      if (s.selectedAnswerIds = c, c.has(r)) c.delete(r);
      else {
        if (!l)
          for (let e of c) c.delete(e);
        c.add(r)
      }
      let {
        analyticsSelectedAnswerIds: u,
        selectedTextAnswersCount: d,
        selectedEmojiAnswersCount: f
      } = G(null == (t = o.poll) ? true : t.answers, c);
      return h.ZP.trackWithMetadata(P.rMx.POLL_VOTE_SELECTED, {
        channel_id: i,
        message_id: a,
        selected_answer_ids: u,
        selected_text_answers_count: d,
        selected_emoji_answers_count: f
      }), s
    })
  },
  handlePollSubmitVote: Y,
  handleUpdateVoteEditingState: F,
  handlePollActionTapped: z,
  createPoll: async function(e) {
    let {
      channel: t,
      question: n,
      answers: r,
      allowMultiSelect: i,
      duration: a,
      layout: o,
      onClose: l
    } = e, c = S.Z.getUploads(t.id, v.d.Poll), u = r.map(e => {
      var t, n;
      let r = null == c ? true : c.findIndex(t => t.id === e.localCreationAnswerId),
        i = {
          attachment_ids: false !== r ? ["".concat(r)] : true
        };
      o === s.C.DEFAULT && (i.text = null == (n = e.text) ? true : n.trim());
      let a = null == (t = e.image) ? true : t.emoji;
      return null != a && (null != a.id ? i.emoji = {
        id: a.id,
        name: ""
      } : null != a.optionallyDiverseSequence && (i.emoji = {
        name: a.optionallyDiverseSequence
      })), {
        poll_media: i
      }
    }), d = {
      question: {
        text: n.trim()
      },
      answers: u,
      allow_multiselect: i,
      duration: a,
      layout_type: o
    };
    try {
      await _.Z.sendPollMessage(t.id, d, {
        attachmentsToUpload: c,
        onAttachmentUploadError: (e, n, r) => {
          (0, g.A)({
            file: e,
            guildId: t.getGuildId(),
            analyticsLocations: [],
            code: n,
            reason: r
          })
        }
      }), null == l || l()
    } catch (e) {
      if ("poll" === (e instanceof p.Hx ? e : new p.Hx(e)).getAnyErrorMessage() && null != e.text) throw M(x({}, e), {
        body: JSON.parse(e.text)
      });
      throw e
    }
  },
  endPollEarly: async function(e) {
    let {
      channelId: t,
      messageId: n
    } = e;
    await d.Z.confirm({
      title: D.intl.string(D.t["+rfkTK"]),
      body: D.intl.string(D.t.H2I1gL)
    }) && await C.W({
      channelId: t,
      messageId: n
    })
  }
}