/** Chunk was on web.js **/
/** chunk id: 918088, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tk: () => P,
  ZP: () => D,
  ef: () => A,
  r8: () => R
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
let S = {
  channelId: Chunk981631.lds,
  selectedAnswerIds: new Set,
  submitting: false,
  editing: false,
  showResults: false
};

function A(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}
let C = e => (0, r.EQ)(e).with({
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
}, () => "notVoted").otherwise(() => "normalVote");

function N(e) {
  let {
    animateEmoji: t = false,
    size: n = 48
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (null == e) return;
  let r = e.animated;
  if (null == r && null != e.id) {
    var i, a;
    r = null != (a = null == (i = o.ZP.getCustomEmojiById(e.id)) ? true : i.animated) && a
  }
  let l = t && null != r && r;
  return {
    id: null == e.id ? null : "".concat(e.id),
    name: e.name,
    displayName: null == e.id ? s.ZP.convertSurrogateToName(e.name) : e.name,
    src: null == e.id ? h.ZP.getURL(e.name) : p.ZP.getEmojiURL({
      id: e.id,
      animated: l,
      size: n
    }),
    animated: l
  }
}

function R(e) {
  return null == e.poll || f.Z.getMessage(e.channel_id, e.id) === e
}

function P(e, t) {
  var n, r, i, a;
  let {
    formattedExpirationLabel: o
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: s
  } = e;
  if (null == s) return;
  let _ = e.state === I.yb.SENT,
    p = _ ? null != o ? o : (0, v.H)(s.expiry) : "",
    h = null == p && _,
    {
      selectedAnswerIds: m,
      submitting: E,
      editing: b,
      showResults: y
    } = null != (i = null != t ? t : (0, g.fU)(e.getChannelId(), e.id)) ? i : S,
    O = e.reactions,
    T = true;
  if (!R(e)) {
    let t = f.Z.getMessage(e.channel_id, e.id);
    T = !e.isSearchHit && null != t, O = null != (a = null == t ? true : t.reactions) ? a : O
  }
  let A = m.size > 0,
    C = O.some(e => true === e.me_vote),
    N = !b && C,
    P = N || h || y,
    D = _ && T && (!C || b || P),
    w = null == (r = u.Z.getChannel(e.getChannelId())) || null == (n = r.getGuildId) ? true : n.call(r),
    x = null != w ? d.ZP.getSelfMember(w) : null,
    L = (0, l.EY)(x),
    M = (0, c.b)(x),
    k = !E && A && !N && _ && !L && !M;
  return {
    poll: s,
    canTapAnswers: D,
    canRemoveVote: N && _ && !h,
    canShowVoteCounts: P,
    canSubmitVote: k,
    expirationLabel: p,
    hasSelectedAnswer: A,
    hasVoted: N,
    hasVoteRecorded: C,
    isEditingVote: b,
    isExpired: h,
    isInteractive: T,
    isSent: _,
    reactions: O,
    selectedAnswerIds: m,
    submitting: E,
    tapShouldOpenVotersModal: P,
    showResults: y
  }
}

function D(e, t) {
  var n, o;
  let {
    animateEmoji: s = false,
    theme: l = "dark",
    formattedExpirationLabel: c
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: d
  } = e;
  if (null == d) return;
  let f = _.default.getCurrentUser();
  if (null == f) return;
  let p = a.Z.useReducedMotion,
    h = null == (o = u.Z.getChannel(e.getChannelId())) || null == (n = o.getGuildId) ? true : n.call(o),
    g = (0, y.E)(f, h),
    v = d.answers,
    I = d.layout_type,
    S = P(e, t, {
      formattedExpirationLabel: c
    });
  if (null == S) return;
  let {
    canTapAnswers: R,
    canRemoveVote: D,
    canShowVoteCounts: w,
    canSubmitVote: x,
    expirationLabel: L = T.intl.string(T.t["e+J3JZ"]),
    hasSelectedAnswer: M,
    hasVoted: k,
    isEditingVote: j,
    isExpired: U,
    isInteractive: G,
    reactions: B,
    selectedAnswerIds: Z,
    submitting: F,
    tapShouldOpenVotersModal: V,
    showResults: H
  } = S, Y = (0, E.cZ)(B), W = T.intl.formatToPlainString(T.t.XRkuof, {
    count: Y
  }), K = Math.max(...v.map(e => {
    var t, n;
    let r = A(B, "".concat(e.answer_id));
    return null != (n = null == r || null == (t = r.count_details) ? true : t.vote) ? n : 0
  })), z = v.map(e => {
    var t, n, a;
    let o = "".concat(e.answer_id),
      l = A(B, o),
      c = null != (n = null == l || null == (t = l.count_details) ? true : t.vote) ? n : 0,
      u = 0 === Y ? 0 : c / Y,
      d = Z.has(o),
      f = c >= K && 0 !== c,
      _ = k && null != (a = null == l ? true : l.me_vote) && a,
      h = C({
        didSelfVote: _,
        hasVoted: k,
        isExpired: U,
        isSelected: d,
        isLeader: f,
        showResults: H
      });
    return {
      answerId: o,
      pollMedia: {
        text: e.poll_media.text,
        emoji: N(e.poll_media.emoji, {
          animateEmoji: s
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: d,
      isVictor: U && f,
      didSelfVote: _,
      style: h,
      shouldAnimateTransition: F && !p,
      votesPercentage: Math.round(100 * u),
      votes: (0, r.EQ)(I).with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")")).otherwise(() => T.intl.formatToPlainString(T.t.XRkuof, {
        count: c
      }))
    }
  }), q = (0, r.EQ)({
    isExpired: U,
    canSubmitVote: x,
    hasVoted: k,
    isEditingVote: j,
    canRemoveVote: D,
    isInteractive: G,
    showResults: H
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    isEditingVote: true
  }, () => ({
    label: T.intl.string(T.t.JwkNU4),
    presentation: "button",
    enabled: M,
    type: "submit"
  })).with({
    canRemoveVote: true
  }, () => ({
    label: T.intl.string(T.t.XhQEh8),
    presentation: "secondaryButton",
    enabled: true,
    type: "remove"
  })).with({
    hasVoted: false,
    showResults: true
  }, () => ({
    label: T.intl.string(T.t.gNj6In),
    presentation: "secondaryButton",
    enabled: true,
    type: "showVotes"
  })).otherwise(() => ({
    label: T.intl.string(T.t.JwkNU4),
    presentation: "button",
    enabled: x,
    type: "submit"
  })), X = (0, m.isIOS)() ? T.intl.string(T.t["PVATM/"]) : T.intl.string(T.t.cHfFql), Q = (0, r.EQ)({
    isExpired: U,
    isInteractive: G,
    isEditingVote: j
  }).with({
    isInteractive: false,
    isExpired: false
  }, () => ({
    label: T.intl.string(T.t.trrip0),
    presentation: "text",
    enabled: false
  })).with({
    isEditingVote: true
  }, () => ({
    label: T.intl.string(T.t["ETE/oC"]),
    presentation: "textButton",
    enabled: true,
    type: "cancel"
  })).otherwise(() => ({
    label: W,
    secondaryLabel: L,
    accessibilityHint: X,
    presentation: "text",
    enabled: true,
    type: "showVoterDetails"
  })), J = !G || U || k || H ? true : {
    label: T.intl.string(T.t["/KHAUF"]),
    presentation: "textButton",
    enabled: true,
    type: "showVotes"
  }, $ = d.allow_multiselect, ee = (0, r.EQ)({
    isInteractive: G,
    isExpired: U,
    canSelectMultipleAnswers: $
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    canSelectMultipleAnswers: true
  }, () => T.intl.string(T.t.yCXvxa)).otherwise(() => T.intl.string(T.t["9Y2wKO"]));
  return {
    question: d.question,
    promptLabel: ee,
    answers: z,
    answersInteraction: (0, r.EQ)({
      tapShouldOpenVotersModal: V,
      canTapAnswers: R,
      canSelectMultipleAnswers: $
    }).with({
      tapShouldOpenVotersModal: true
    }, () => b.Y7.LIST).with({
      canTapAnswers: false
    }, () => b.Y7.LIST).with({
      canSelectMultipleAnswers: false
    }, () => b.Y7.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: true
    }, () => b.Y7.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: V ? X : true,
    layoutType: I,
    resources: (0, O.Z)({
      theme: l,
      layoutType: I
    }),
    containerStyle: "normal",
    primaryAction: q,
    isInteractive: G,
    canTapAnswers: R,
    canSelectMultipleAnswers: $,
    hasSelectedAnswer: M,
    canShowVoteCounts: w,
    hasVoted: k,
    isExpired: U,
    myAvatarUrl: g,
    secondaryAction: Q,
    tertiaryAction: J
  }
}