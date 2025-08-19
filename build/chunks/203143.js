/** Chunk was on 91173 **/
/** chunk id: 203143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H,
  n: () => L
}), require("./415506.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./781311.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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

function Z(e, t) {
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

function R(e, t) {
  let n = [...t],
    r = 0,
    i = 0;
  for (let t of n) {
    var l;
    let n = null == e || null == (l = e.find(e => e.answer_id === parseInt(t))) ? true : l.poll_media;
    (null == n ? true : n.text) != null && (r += 1), (null == n ? true : n.emoji) != null && (i += 1)
  }
  return {
    analyticsSelectedAnswerIds: n,
    selectedTextAnswersCount: r,
    selectedEmojiAnswersCount: i
  }
}

function D(e) {
  let {
    guildId: t,
    title: n,
    body: r
  } = e;
  d.Z.show({
    title: n,
    body: r,
    confirmText: A.intl.string(A.t["9VLmlZ"]),
    cancelText: A.intl.string(A.t["2m+Sqq"]),
    onConfirm: () => {
      p.Z.joinGuild(t, {
        source: N.vtS.POLL_ALERT
      })
    }
  })
}

function L(e) {
  let {
    channelId: t,
    messageId: n,
    answerId: r
  } = e, i = v.Z.getChannel(t);
  if (null == i) return;
  if (_.Z.isLurking(i.guild_id)) return void D({
    guildId: i.guild_id,
    title: A.intl.string(A.t["7LpysL"]),
    body: A.intl.string(A.t["5sHHo6"])
  });
  let l = x.Z.getMessage(t, n);
  if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
  let a = null != r ? r : String(l.poll.answers[0].answer_id);
  I.A({
    message: l,
    initialAnswerId: a
  })
}

function M(e) {
  let {
    channelId: t,
    messageId: n,
    isEditing: r
  } = e;
  (0, T.eu)(t, n, e => {
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

function k(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = x.Z.getMessage(t, n);
  return null == r ? [] : r.reactions.flatMap(e => true === e.me_vote ? e.emoji.name : [])
}
async function U(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: r
  } = e, i = k({
    channelId: t,
    messageId: n
  }), l = a().difference(i, r), o = a().difference(r, i), c = C.default.getId(), d = [...l.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...o.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], p = s.ZP.Emitter.batched(() => {
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
      reactionType: b.O.VOTE
    });
    return e
  });
  null != p && await p
}
async function F(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = v.Z.getChannel(t);
  if (null == r) return;
  if (_.Z.isLurking(r.guild_id)) return void D({
    guildId: r.guild_id,
    title: A.intl.string(A.t.Qic1FB),
    body: A.intl.string(A.t["5sHHo6"])
  });
  if (!y.Z.canChatInGuild(r.guild_id)) return void d.Z.show({
    title: A.intl.string(A.t.p245ws),
    body: A.intl.string(A.t["U/uodn"])
  });
  let l = (0, T.fU)(t, n);
  i()(null != l, "Must not be able to vote without existing state!");
  let a = k({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...l.selectedAnswerIds.values()];
    (0, T.eu)(t, n, e => (i()(null != e, "Must not be able to vote without existing state!"), Z(w({}, e), {
      submitting: true,
      editing: false
    }))), await U({
      channelId: t,
      messageId: n,
      answerIds: e
    }), await S.B({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, T.eu)(t, n, () => true), c.uv.announce(0 === e.length ? A.intl.string(A.t["xcvy+/"]) : A.intl.string(A.t.o20GSk))
  } catch (e) {
    var o, s, u;
    d.Z.show({
      title: A.intl.string(A.t.iufib2),
      body: null != (u = null != (s = null == (o = e.getAnyErrorMessage) ? true : o.call(e)) ? s : e.message) ? u : A.intl.string(A.t.eAn6z8)
    }), await U({
      channelId: t,
      messageId: n,
      answerIds: a
    }), (0, T.eu)(t, n, e => {
      if (null != e) return Z(w({}, e), {
        submitting: false,
        editing: false
      })
    })
  }
}
async function B(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = v.Z.getChannel(t);
  if (null != r) return _.Z.isLurking(r.guild_id) ? void D({
    guildId: r.guild_id,
    title: A.intl.string(A.t.B9QnBg),
    body: A.intl.string(A.t.BVZCTk)
  }) : ((0, T.eu)(t, n, e => {
    var n;
    return {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: false,
      editing: false,
      showResults: null != (n = null == e ? true : e.showResults) && n
    }
  }), await F({
    channelId: t,
    messageId: n
  }))
}
async function G(e) {
  let {
    channelId: t,
    messageId: n,
    type: r
  } = e;
  switch (r) {
    case "submit":
      await F({
        channelId: t,
        messageId: n
      });
      break;
    case "remove":
      await B({
        channelId: t,
        messageId: n
      });
      break;
    case "cancel":
      M({
        channelId: t,
        messageId: n,
        isEditing: false
      });
      break;
    case "showVotes":
      ! function(e) {
        let {
          channelId: t,
          messageId: n
        } = e;
        (0, T.eu)(t, n, e => {
          var r, i;
          let l = null == e || !e.showResults,
            a = x.Z.getMessage(t, n),
            o = null != a ? a.reactions.reduce((e, t) => {
              var n, r;
              return e + (null != (r = null == (n = t.count_details) ? true : n.vote) ? r : 0)
            }, 0) : 0;
          return g.ZP.trackWithMetadata(N.rMx.POLL_SHOW_RESULTS_CLICKED, {
            channel_id: t,
            message_id: n,
            show_results: l,
            votes_count: o
          }), {
            channelId: t,
            selectedAnswerIds: new Set,
            submitting: null != (r = null == e ? true : e.submitting) && r,
            editing: null != (i = null == e ? true : e.submitting) && i,
            showResults: l
          }
        })
      }({
        channelId: t,
        messageId: n
      });
      break;
    case "showVoterDetails":
      L({
        channelId: t,
        messageId: n
      });
      break;
    default:
      i()(false, "Unknown poll action type: ".concat(r))
  }
}
let H = {
  handlePollAnswerTapped: function(e) {
    var t, n, {
      answerId: r
    } = e;
    let {
      channelId: l,
      messageId: a,
      message: o
    } = function(e) {
      let {
        channelId: t,
        messageId: n
      } = e, r = x.Z.getMessage(t, n);
      if (null != r) return {
        message: r,
        channelId: t,
        messageId: n
      };
      let l = E.Z.getMessage(t, n);
      if (null != l.message) return {
        channelId: t,
        messageId: n,
        message: l.message
      };
      throw i()(null != r, "Tapped on a non-existent poll message"), Error()
    }(function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["answerId"])), {
      tapShouldOpenVotersModal: s
    } = null != (n = (0, P.Tk)(o)) ? n : {};
    if (true === s) return void L({
      channelId: l,
      messageId: a,
      answerId: r
    });
    let c = null == (t = o.poll) ? true : t.allow_multiselect;
    (0, T.eu)(l, a, e => {
      var t, n;
      if (null == e) {
        let e = new Set([r]),
          {
            analyticsSelectedAnswerIds: t,
            selectedTextAnswersCount: i,
            selectedEmojiAnswersCount: s
          } = R(null == (n = o.poll) ? true : n.answers, e);
        return g.ZP.trackWithMetadata(N.rMx.POLL_VOTE_SELECTED, {
          channel_id: l,
          message_id: a,
          selected_answer_ids: t,
          selected_text_answers_count: i,
          selected_emoji_answers_count: s
        }), {
          channelId: l,
          selectedAnswerIds: e,
          submitting: false,
          editing: false,
          showResults: false
        }
      }
      let i = w({}, e),
        s = new Set(i.selectedAnswerIds);
      if (i.selectedAnswerIds = s, s.has(r)) s.delete(r);
      else {
        if (!c)
          for (let e of s) s.delete(e);
        s.add(r)
      }
      let {
        analyticsSelectedAnswerIds: u,
        selectedTextAnswersCount: d,
        selectedEmojiAnswersCount: p
      } = R(null == (t = o.poll) ? true : t.answers, s);
      return g.ZP.trackWithMetadata(N.rMx.POLL_VOTE_SELECTED, {
        channel_id: l,
        message_id: a,
        selected_answer_ids: u,
        selected_text_answers_count: d,
        selected_emoji_answers_count: p
      }), i
    })
  },
  handlePollSubmitVote: F,
  handleUpdateVoteEditingState: M,
  handlePollActionTapped: G,
  createPoll: async function(e) {
    let {
      channel: t,
      question: n,
      answers: r,
      allowMultiSelect: i,
      duration: l,
      layout: a,
      onClose: s
    } = e, c = j.Z.getUploads(t.id, O.d.Poll), u = r.map(e => {
      var t, n;
      let r = null == c ? true : c.findIndex(t => t.id === e.localCreationAnswerId),
        i = {
          attachment_ids: false !== r ? ["".concat(r)] : true
        };
      a === o.C.DEFAULT && (i.text = null == (n = e.text) ? true : n.trim());
      let l = null == (t = e.image) ? true : t.emoji;
      return null != l && (null != l.id ? i.emoji = {
        id: l.id,
        name: ""
      } : null != l.optionallyDiverseSequence && (i.emoji = {
        name: l.optionallyDiverseSequence
      })), {
        poll_media: i
      }
    }), d = {
      question: {
        text: n.trim()
      },
      answers: u,
      allow_multiselect: i,
      duration: l,
      layout_type: a
    };
    try {
      await m.Z.sendPollMessage(t.id, d, {
        attachmentsToUpload: c,
        onAttachmentUploadError: (e, n, r) => {
          (0, h.A)({
            file: e,
            guildId: t.getGuildId(),
            analyticsLocations: [],
            code: n,
            reason: r
          })
        }
      }), null == s || s()
    } catch (e) {
      if ("poll" === (e instanceof f.Hx ? e : new f.Hx(e)).getAnyErrorMessage() && null != e.text) throw Z(w({}, e), {
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
      title: A.intl.string(A.t["+rfkTE"]),
      body: A.intl.string(A.t.H2I1gI)
    }) && await S.W({
      channelId: t,
      messageId: n
    })
  }
}