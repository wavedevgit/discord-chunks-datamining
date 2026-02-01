/** Chunk was on 9753 **/
/** chunk id: 180662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V,
  e: () => M
}), require("./65821.js"), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./733351.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk966974 = require("./966974.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk686956 = require("./686956.js"),
  Chunk843472 = require("./843472.js"),
  Chunk198982 = require("./198982.js"),
  Chunk58149 = require("./58149.js"),
  Chunk857071 = require("./857071.js"),
  Chunk301169 = require("./301169.js"),
  Chunk505527 = require("./505527.js"),
  Chunk9842 = require("./9842.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk834942 = require("./834942.js"),
  Chunk320501 = require("./320501.js"),
  Chunk522602 = require("./522602.js"),
  Chunk491037 = require("./491037.jsx"),
  Chunk335759 = require("./335759.js"),
  Chunk862780 = require("./862780.js"),
  Chunk951727 = require("./951727.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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

function D(e, t) {
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

function L(e) {
  let {
    guildId: t,
    title: n,
    body: r
  } = e;
  d.A.show({
    title: n,
    body: r,
    confirmText: P.intl.string(P.t["9VLmlZ"]),
    cancelText: P.intl.string(P.t["2m+Sqk"]),
    onConfirm: () => {
      p.A.joinGuild(t, {
        source: N.Q4z.POLL_ALERT
      })
    }
  })
}

function M(e) {
  let {
    channelId: t,
    messageId: n,
    answerId: r
  } = e, i = v.A.getChannel(t);
  if (null == i) return;
  if (_.A.isLurking(i.guild_id)) return void L({
    guildId: i.guild_id,
    title: P.intl.string(P.t["7LpysO"]),
    body: P.intl.string(P.t["5sHHoy"])
  });
  let l = E.A.getMessage(t, n);
  if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
  let a = null != r ? r : String(l.poll.answers[0].answer_id);
  C.W({
    message: l,
    initialAnswerId: a
  })
}

function k(e) {
  let {
    channelId: t,
    messageId: n,
    isEditing: r
  } = e;
  (0, S.A2)(t, n, e => {
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

function U(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = E.A.getMessage(t, n);
  return null == r ? [] : r.reactions.flatMap(e => true === e.me_vote ? e.emoji.name : [])
}
async function G(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: r
  } = e, i = U({
    channelId: t,
    messageId: n
  }), l = a().difference(i, r), s = a().difference(r, i), c = A.default.getId(), d = [...l.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...s.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], p = o.Ay.Emitter.batched(() => {
    let e;
    for (let {
        id: r,
        type: i
      }
      of d) e = u.h.dispatch({
      type: i,
      channelId: t,
      messageId: n,
      emoji: {
        id: r,
        name: r
      },
      userId: c,
      optimistic: true,
      reactionType: b.v.VOTE
    });
    return e
  });
  null != p && await p
}
async function B(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = v.A.getChannel(t);
  if (null == r) return;
  if (_.A.isLurking(r.guild_id)) return void L({
    guildId: r.guild_id,
    title: P.intl.string(P.t.Qic1FD),
    body: P.intl.string(P.t["5sHHoy"])
  });
  if (!x.A.canChatInGuild(r.guild_id)) return void d.A.show({
    title: P.intl.string(P.t.p245wu),
    body: P.intl.string(P.t["U/uodt"])
  });
  let l = (0, S.xt)(t, n);
  i()(null != l, "Must not be able to vote without existing state!");
  let a = U({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...l.selectedAnswerIds.values()];
    (0, S.A2)(t, n, e => (i()(null != e, "Must not be able to vote without existing state!"), R(w({}, e), {
      submitting: true,
      editing: false
    }))), await G({
      channelId: t,
      messageId: n,
      answerIds: e
    }), await I.Q({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, S.A2)(t, n, () => true), c.OR.announce(0 === e.length ? P.intl.string(P.t["xcvy+3"]) : P.intl.string(P.t.o20GSo))
  } catch (e) {
    var s, o, u;
    d.A.show({
      title: P.intl.string(P.t.iufib1),
      body: null != (s = null != (o = null == (u = e.getAnyErrorMessage) ? true : u.call(e)) ? o : e.message) ? s : P.intl.string(P.t.eAn6z2)
    }), await G({
      channelId: t,
      messageId: n,
      answerIds: a
    }), (0, S.A2)(t, n, e => {
      if (null != e) return R(w({}, e), {
        submitting: false,
        editing: false
      })
    })
  }
}
async function F(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = v.A.getChannel(t);
  if (null != r) return _.A.isLurking(r.guild_id) ? void L({
    guildId: r.guild_id,
    title: P.intl.string(P.t.B9QnBp),
    body: P.intl.string(P.t.BVZCTn)
  }) : ((0, S.A2)(t, n, e => {
    var n;
    return {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: false,
      editing: false,
      showResults: null != (n = null == e ? true : e.showResults) && n
    }
  }), await B({
    channelId: t,
    messageId: n
  }))
}
async function H(e) {
  let {
    channelId: t,
    messageId: n,
    type: r
  } = e;
  switch (r) {
    case "submit":
      await B({
        channelId: t,
        messageId: n
      });
      break;
    case "remove":
      await F({
        channelId: t,
        messageId: n
      });
      break;
    case "cancel":
      k({
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
        (0, S.A2)(t, n, e => {
          var r, i;
          let l = null == e || !e.showResults,
            a = E.A.getMessage(t, n),
            s = null != a ? a.reactions.reduce((e, t) => {
              var n, r;
              return e + (null != (n = null == (r = t.count_details) ? true : r.vote) ? n : 0)
            }, 0) : 0;
          return g.Ay.trackWithMetadata(N.HAw.POLL_SHOW_RESULTS_CLICKED, {
            channel_id: t,
            message_id: n,
            show_results: l,
            votes_count: s
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
      M({
        channelId: t,
        messageId: n
      });
      break;
    default:
      i()(false, "Unknown poll action type: ".concat(r))
  }
}
let V = {
  handlePollAnswerTapped: function(e) {
    var t, n;
    let {
      answerId: r
    } = e, {
      channelId: l,
      messageId: a,
      message: s
    } = function(e) {
      let {
        channelId: t,
        messageId: n
      } = e, r = E.A.getMessage(t, n);
      if (null != r) return {
        message: r,
        channelId: t,
        messageId: n
      };
      let l = y.A.getMessage(t, n);
      if (null != l.message) return {
        channelId: t,
        messageId: n,
        message: l.message
      };
      throw i()(null != r, "Tapped on a non-existent poll message"), Error()
    }(function(e, t) {
      if (null == e) return {};
      var n, r, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, ["answerId"])), {
      tapShouldOpenVotersModal: o
    } = null != (t = (0, T.j8)(s)) ? t : {};
    if (true === o) return void M({
      channelId: l,
      messageId: a,
      answerId: r
    });
    let c = null == (n = s.poll) ? true : n.allow_multiselect;
    (0, S.A2)(l, a, e => {
      var t, n;
      if (null == e) {
        let e = new Set([r]),
          {
            analyticsSelectedAnswerIds: t,
            selectedTextAnswersCount: i,
            selectedEmojiAnswersCount: o
          } = D(null == (n = s.poll) ? true : n.answers, e);
        return g.Ay.trackWithMetadata(N.HAw.POLL_VOTE_SELECTED, {
          channel_id: l,
          message_id: a,
          selected_answer_ids: t,
          selected_text_answers_count: i,
          selected_emoji_answers_count: o
        }), {
          channelId: l,
          selectedAnswerIds: e,
          submitting: false,
          editing: false,
          showResults: false
        }
      }
      let i = w({}, e),
        o = new Set(i.selectedAnswerIds);
      if (i.selectedAnswerIds = o, o.has(r)) o.delete(r);
      else {
        if (!c)
          for (let e of o) o.delete(e);
        o.add(r)
      }
      let {
        analyticsSelectedAnswerIds: u,
        selectedTextAnswersCount: d,
        selectedEmojiAnswersCount: p
      } = D(null == (t = s.poll) ? true : t.answers, o);
      return g.Ay.trackWithMetadata(N.HAw.POLL_VOTE_SELECTED, {
        channel_id: l,
        message_id: a,
        selected_answer_ids: u,
        selected_text_answers_count: d,
        selected_emoji_answers_count: p
      }), i
    })
  },
  handlePollSubmitVote: B,
  handleUpdateVoteEditingState: k,
  handlePollActionTapped: H,
  createPoll: async function(e) {
    let {
      channel: t,
      question: n,
      answers: r,
      allowMultiSelect: i,
      duration: l,
      layout: a,
      onClose: o
    } = e, c = j.A.getUploads(t.id, O.C.Poll), u = r.map(e => {
      var t, n;
      let r = null == c ? true : c.findIndex(t => t.id === e.localCreationAnswerId),
        i = {
          attachment_ids: false !== r ? ["".concat(r)] : true
        };
      a === s.Z.DEFAULT && (i.text = null == (n = e.text) ? true : n.trim());
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
      await m.A.sendPollMessage(t.id, d, {
        attachmentsToUpload: c,
        onAttachmentUploadError: (e, n, r) => {
          (0, h.k)({
            file: e,
            guildId: t.getGuildId(),
            analyticsLocations: [],
            code: n,
            reason: r
          })
        }
      }), null == o || o()
    } catch (e) {
      if ("poll" === (e instanceof f.LG ? e : new f.LG(e)).getAnyErrorMessage() && null != e.text) throw R(w({}, e), {
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
    await d.A.confirm({
      title: P.intl.string(P.t["+rfkTK"]),
      body: P.intl.string(P.t.H2I1gL)
    }) && await I.w({
      channelId: t,
      messageId: n
    })
  }
}