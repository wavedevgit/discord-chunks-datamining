/** Chunk was on 26434 **/
/** chunk id: 918088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tk: () => T,
  ZP: () => P,
  ef: () => I,
  r8: () => S
}), require("./388685.js"), require("./314940.js");
var Chunk278074 = require("./278074.js"),
  Chunk263568 = require("./263568.js"),
  Chunk607070 = require("./607070.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk715903 = require("./715903.js"),
  Chunk69882 = require("./69882.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk358085 = require("./358085.js"),
  Chunk798628 = require("./798628.js"),
  Chunk79390 = require("./79390.js"),
  Chunk839963 = require("./839963.js"),
  Chunk897325 = require("./897325.js"),
  Chunk57101 = require("./57101.js"),
  Chunk562293 = require("./562293.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let j = {
  channelId: Chunk981631.lds,
  selectedAnswerIds: new Set,
  submitting: false,
  editing: false,
  showResults: false
};

function I(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}

function S(e) {
  return null == e.poll || p.Z.getMessage(e.channel_id, e.id) === e
}

function T(e, t) {
  var n, r, i, l;
  let {
    formattedExpirationLabel: o
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: a
  } = e;
  if (null == a) return;
  let m = e.state === y.yb.SENT,
    f = m ? null != o ? o : (0, O.H)(a.expiry) : "",
    g = null == f && m,
    {
      selectedAnswerIds: _,
      submitting: b,
      editing: E,
      showResults: C
    } = null != (i = null != t ? t : (0, h.fU)(e.getChannelId(), e.id)) ? i : j,
    v = e.reactions,
    x = true;
  if (!S(e)) {
    let t = p.Z.getMessage(e.channel_id, e.id);
    x = !e.isSearchHit && null != t, v = null != (l = null == t ? true : t.reactions) ? l : v
  }
  let I = _.size > 0,
    T = v.some(e => true === e.me_vote),
    P = !E && T,
    N = P || g || C,
    A = m && x && (!T || E || N),
    w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? true : n.call(r),
    Z = null != w ? d.ZP.getSelfMember(w) : null,
    R = (0, s.EY)(Z),
    D = (0, c.b)(Z),
    L = !b && I && !P && m && !R && !D;
  return {
    poll: a,
    canTapAnswers: A,
    canRemoveVote: P && m && !g,
    canShowVoteCounts: N,
    canSubmitVote: L,
    expirationLabel: f,
    hasSelectedAnswer: I,
    hasVoted: P,
    hasVoteRecorded: T,
    isEditingVote: E,
    isExpired: g,
    isInteractive: x,
    isSent: m,
    reactions: v,
    selectedAnswerIds: _,
    submitting: b,
    tapShouldOpenVotersModal: N,
    showResults: C
  }
}

function P(e, t) {
  var n, s;
  let {
    animateEmoji: c = false,
    theme: d = "dark",
    formattedExpirationLabel: p
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: h
  } = e;
  if (null == h) return;
  let O = m.default.getCurrentUser();
  if (null == O) return;
  let y = l.Z.useReducedMotion,
    j = null == (s = u.Z.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? true : n.call(s),
    S = (0, C.E)(O, j),
    P = h.answers,
    N = h.layout_type,
    A = T(e, t, {
      formattedExpirationLabel: p
    });
  if (null == A) return;
  let {
    canTapAnswers: w,
    canRemoveVote: Z,
    canShowVoteCounts: R,
    canSubmitVote: D,
    expirationLabel: L = x.intl.string(x.t["e+J3JS"]),
    hasSelectedAnswer: M,
    hasVoted: k,
    isEditingVote: U,
    isExpired: F,
    isInteractive: B,
    reactions: G,
    selectedAnswerIds: H,
    submitting: V,
    tapShouldOpenVotersModal: z,
    showResults: W
  } = A, Y = (0, b.cZ)(G), K = x.intl.formatToPlainString(x.t.XRkuoa, {
    count: Y.toLocaleString()
  }), X = Math.max(...P.map(e => {
    var t, n;
    let r = I(G, "".concat(e.answer_id));
    return null != (n = null == r || null == (t = r.count_details) ? true : t.vote) ? n : 0
  })), q = P.map(e => {
    var t, n, l;
    let s, u = "".concat(e.answer_id),
      d = I(G, u),
      p = null != (n = null == d || null == (t = d.count_details) ? true : t.vote) ? n : 0,
      m = 0 === Y ? 0 : p / Y,
      _ = H.has(u),
      h = p >= X && 0 !== p,
      b = k && null != (l = null == d ? true : d.me_vote) && l,
      E = (s = {
        didSelfVote: b,
        hasVoted: k,
        isExpired: F,
        isSelected: _,
        isLeader: h,
        showResults: W
      }, (0, r.EQ)(s).with({
        isExpired: true,
        isLeader: true,
        didSelfVote: true
      }, () => "victorSelected").with({
        isExpired: true,
        isLeader: true,
        didSelfVote: false
      }, () => "victorNotSelected").with({
        isExpired: true,
        didSelfVote: true
      }, () => "loserSelected").with({
        isExpired: true
      }, () => "notVoted").with({
        didSelfVote: true,
        isExpired: false
      }, () => "voted").with({
        hasVoted: true,
        isExpired: false
      }, () => "notVoted").with({
        isSelected: true
      }, () => "selected").with({
        isExpired: false,
        showResults: true
      }, () => "notVoted").otherwise(() => "normalVote"));
    return {
      answerId: u,
      pollMedia: {
        text: e.poll_media.text,
        emoji: function(e) {
          let {
            animateEmoji: t = false,
            size: n = 48
          } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
          if (null == e) return;
          let r = e.animated;
          if (null == r && null != e.id) {
            var i, l;
            r = null != (l = null == (i = o.ZP.getCustomEmojiById(e.id)) ? true : i.animated) && l
          }
          let s = t && null != r && r;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? a.ZP.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? g.ZP.getURL(e.name) : f.ZP.getEmojiURL({
              id: e.id,
              animated: s,
              size: n
            }),
            animated: s
          }
        }(e.poll_media.emoji, {
          animateEmoji: c
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: _,
      isVictor: F && h,
      didSelfVote: b,
      style: E,
      shouldAnimateTransition: V && !y,
      votesPercentage: Math.round(100 * m),
      votes: (0, r.EQ)(N).with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(p.toLocaleString(), ")")).otherwise(() => x.intl.formatToPlainString(x.t.XRkuoa, {
        count: p.toLocaleString()
      }))
    }
  }), J = (0, r.EQ)({
    isExpired: F,
    canSubmitVote: D,
    hasVoted: k,
    isEditingVote: U,
    canRemoveVote: Z,
    isInteractive: B,
    showResults: W
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    isEditingVote: true
  }, () => ({
    label: x.intl.string(x.t.JwkNU1),
    presentation: "button",
    enabled: M,
    type: "submit"
  })).with({
    canRemoveVote: true
  }, () => ({
    label: x.intl.string(x.t.XhQEh4),
    presentation: "secondaryButton",
    enabled: true,
    type: "remove"
  })).with({
    hasVoted: false,
    showResults: true
  }, () => ({
    label: x.intl.string(x.t.gNj6Ii),
    presentation: "secondaryButton",
    enabled: true,
    type: "showVotes"
  })).otherwise(() => ({
    label: x.intl.string(x.t.JwkNU1),
    presentation: "button",
    enabled: D,
    type: "submit"
  })), Q = (0, _.isIOS)() ? x.intl.string(x.t.PVATMz) : x.intl.string(x.t.cHfFqq), $ = (0, r.EQ)({
    isExpired: F,
    isInteractive: B,
    isEditingVote: U
  }).with({
    isInteractive: false,
    isExpired: false
  }, () => ({
    label: x.intl.string(x.t.trrip6),
    presentation: "text",
    enabled: false
  })).with({
    isEditingVote: true
  }, () => ({
    label: x.intl.string(x.t["ETE/oK"]),
    presentation: "textButton",
    enabled: true,
    type: "cancel"
  })).otherwise(() => ({
    label: K,
    secondaryLabel: L,
    accessibilityHint: Q,
    presentation: "text",
    enabled: true,
    type: "showVoterDetails"
  })), ee = !B || F || k || W ? true : {
    label: x.intl.string(x.t["/KHAUF"]),
    presentation: "textButton",
    enabled: true,
    type: "showVotes"
  }, et = h.allow_multiselect, en = (0, r.EQ)({
    isInteractive: B,
    isExpired: F,
    canSelectMultipleAnswers: et
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    canSelectMultipleAnswers: true
  }, () => x.intl.string(x.t.yCXvxc)).otherwise(() => x.intl.string(x.t["9Y2wKC"]));
  return {
    question: h.question,
    promptLabel: en,
    answers: q,
    answersInteraction: (0, r.EQ)({
      tapShouldOpenVotersModal: z,
      canTapAnswers: w,
      canSelectMultipleAnswers: et
    }).with({
      tapShouldOpenVotersModal: true
    }, () => E.Y7.LIST).with({
      canTapAnswers: false
    }, () => E.Y7.LIST).with({
      canSelectMultipleAnswers: false
    }, () => E.Y7.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: true
    }, () => E.Y7.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: z ? Q : true,
    layoutType: N,
    resources: (0, v.Z)({
      theme: d,
      layoutType: N
    }),
    containerStyle: "normal",
    primaryAction: J,
    isInteractive: B,
    canTapAnswers: w,
    canSelectMultipleAnswers: et,
    hasSelectedAnswer: M,
    canShowVoteCounts: R,
    hasVoted: k,
    isExpired: F,
    myAvatarUrl: S,
    secondaryAction: $,
    tertiaryAction: ee
  }
}