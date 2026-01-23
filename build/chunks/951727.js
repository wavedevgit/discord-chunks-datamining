/** Chunk was on web.js **/
/** chunk id: 951727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => P,
  Ej: () => T,
  Ls: () => w,
  j8: () => R
}), require("./896048.js"), require("./801541.js");
var Chunk889137 = require("./889137.js"),
  Chunk966974 = require("./966974.js"),
  Chunk775602 = require("./775602.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk229527 = require("./229527.js"),
  Chunk316031 = require("./316031.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk320501 = require("./320501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk723702 = require("./723702.js"),
  Chunk862780 = require("./862780.js"),
  Chunk969632 = require("./969632.js"),
  Chunk438437 = require("./438437.js"),
  Chunk842901 = require("./842901.js"),
  Chunk589590 = require("./589590.js"),
  Chunk708676 = require("./708676.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let S = {
  channelId: Chunk652215.dJq,
  selectedAnswerIds: new Set,
  submitting: false,
  editing: false,
  showResults: false
};

function T(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}
let C = e => (0, r.YW)(e).with({
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
    r = null != (i = null == (a = s.Ay.getCustomEmojiById(e.id)) ? true : a.animated) && i
  }
  let l = t && null != r && r;
  return {
    id: null == e.id ? null : "".concat(e.id),
    name: e.name,
    displayName: null == e.id ? o.Ay.convertSurrogateToName(e.name) : e.name,
    src: null == e.id ? h.Ay.getURL(e.name) : _.Ay.getEmojiURL({
      id: e.id,
      animated: l,
      size: n
    }),
    animated: l
  }
}

function w(e) {
  return null == e.poll || f.A.getMessage(e.channel_id, e.id) === e
}

function R(e, t) {
  var n, r, i, a;
  let {
    formattedExpirationLabel: s
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: o
  } = e;
  if (null == o) return;
  let p = e.state === A.cmJ.SENT,
    _ = p ? null != s ? s : (0, v.J)(o.expiry) : "",
    h = null == _ && p,
    {
      selectedAnswerIds: m,
      submitting: E,
      editing: y,
      showResults: b
    } = null != (n = null != t ? t : (0, g.xt)(e.getChannelId(), e.id)) ? n : S,
    O = e.reactions,
    I = true;
  if (!w(e)) {
    let t = f.A.getMessage(e.channel_id, e.id);
    I = !e.isSearchHit && null != t, O = null != (a = null == t ? true : t.reactions) ? a : O
  }
  let T = m.size > 0,
    C = O.some(e => true === e.me_vote),
    N = !y && C,
    R = N || h || b,
    P = p && I && (!C || y || R),
    D = null == (i = u.A.getChannel(e.getChannelId())) || null == (r = i.getGuildId) ? true : r.call(i),
    x = null != D ? d.Ay.getSelfMember(D) : null,
    L = (0, l.TR)(x),
    j = (0, c.Z)(x),
    M = !E && T && !N && p && !L && !j;
  return {
    poll: o,
    canTapAnswers: P,
    canRemoveVote: N && p && !h,
    canShowVoteCounts: R,
    canSubmitVote: M,
    expirationLabel: _,
    hasSelectedAnswer: T,
    hasVoted: N,
    hasVoteRecorded: C,
    isEditingVote: y,
    isExpired: h,
    isInteractive: I,
    isSent: p,
    reactions: O,
    selectedAnswerIds: m,
    submitting: E,
    tapShouldOpenVotersModal: R,
    showResults: b
  }
}

function P(e, t) {
  var n, s;
  let {
    animateEmoji: o = false,
    theme: l = "dark",
    formattedExpirationLabel: c
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: d
  } = e;
  if (null == d) return;
  let f = p.default.getCurrentUser();
  if (null == f) return;
  let _ = a.A.useReducedMotion,
    h = null == (s = u.A.getChannel(e.getChannelId())) || null == (n = s.getGuildId) ? true : n.call(s),
    g = (0, b.T)(f, h),
    v = d.answers,
    A = d.layout_type,
    S = R(e, t, {
      formattedExpirationLabel: c
    });
  if (null == S) return;
  let {
    canTapAnswers: w,
    canRemoveVote: P,
    canShowVoteCounts: D,
    canSubmitVote: x,
    expirationLabel: L = I.intl.string(I.t["e+J3JZ"]),
    hasSelectedAnswer: j,
    hasVoted: M,
    isEditingVote: k,
    isExpired: U,
    isInteractive: G,
    reactions: V,
    selectedAnswerIds: F,
    submitting: B,
    tapShouldOpenVotersModal: H,
    showResults: Y
  } = S, W = (0, E.aw)(V), K = I.intl.formatToPlainString(I.t.XRkuof, {
    count: W
  }), z = Math.max(...v.map(e => {
    var t, n;
    let r = T(V, "".concat(e.answer_id));
    return null != (t = null == r || null == (n = r.count_details) ? true : n.vote) ? t : 0
  })), q = v.map(e => {
    var t, n, a;
    let s = "".concat(e.answer_id),
      l = T(V, s),
      c = null != (t = null == l || null == (a = l.count_details) ? true : a.vote) ? t : 0,
      u = 0 === W ? 0 : c / W,
      d = F.has(s),
      f = c >= z && 0 !== c,
      p = M && null != (n = null == l ? true : l.me_vote) && n,
      h = C({
        didSelfVote: p,
        hasVoted: M,
        isExpired: U,
        isSelected: d,
        isLeader: f,
        showResults: Y
      });
    return {
      answerId: s,
      pollMedia: {
        text: e.poll_media.text,
        emoji: N(e.poll_media.emoji, {
          animateEmoji: o
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: d,
      isVictor: U && f,
      didSelfVote: p,
      style: h,
      shouldAnimateTransition: B && !_,
      votesPercentage: Math.round(100 * u),
      votes: (0, r.YW)(A).with(i.Z.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")")).otherwise(() => I.intl.formatToPlainString(I.t.XRkuof, {
        count: c
      }))
    }
  }), Z = (0, r.YW)({
    isExpired: U,
    canSubmitVote: x,
    hasVoted: M,
    isEditingVote: k,
    canRemoveVote: P,
    isInteractive: G,
    showResults: Y
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    isEditingVote: true
  }, () => ({
    label: I.intl.string(I.t.JwkNU4),
    presentation: "button",
    enabled: j,
    type: "submit"
  })).with({
    canRemoveVote: true
  }, () => ({
    label: I.intl.string(I.t.XhQEh8),
    presentation: "secondaryButton",
    enabled: true,
    type: "remove"
  })).with({
    hasVoted: false,
    showResults: true
  }, () => ({
    label: I.intl.string(I.t.gNj6In),
    presentation: "secondaryButton",
    enabled: true,
    type: "showVotes"
  })).otherwise(() => ({
    label: I.intl.string(I.t.JwkNU4),
    presentation: "button",
    enabled: x,
    type: "submit"
  })), X = (0, m.isIOS)() ? I.intl.string(I.t["PVATM/"]) : I.intl.string(I.t.cHfFql), Q = (0, r.YW)({
    isExpired: U,
    isInteractive: G,
    isEditingVote: k
  }).with({
    isInteractive: false,
    isExpired: false
  }, () => ({
    label: I.intl.string(I.t.trrip0),
    presentation: "text",
    enabled: false
  })).with({
    isEditingVote: true
  }, () => ({
    label: I.intl.string(I.t["ETE/oC"]),
    presentation: "textButton",
    enabled: true,
    type: "cancel"
  })).otherwise(() => ({
    label: K,
    secondaryLabel: L,
    accessibilityHint: X,
    presentation: "text",
    enabled: true,
    type: "showVoterDetails"
  })), J = !G || U || M || Y ? true : {
    label: I.intl.string(I.t["/KHAUF"]),
    presentation: "textButton",
    enabled: true,
    type: "showVotes"
  }, $ = d.allow_multiselect, ee = (0, r.YW)({
    isInteractive: G,
    isExpired: U,
    canSelectMultipleAnswers: $
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    canSelectMultipleAnswers: true
  }, () => I.intl.string(I.t.yCXvxa)).otherwise(() => I.intl.string(I.t["9Y2wKO"]));
  return {
    question: d.question,
    promptLabel: ee,
    answers: q,
    answersInteraction: (0, r.YW)({
      tapShouldOpenVotersModal: H,
      canTapAnswers: w,
      canSelectMultipleAnswers: $
    }).with({
      tapShouldOpenVotersModal: true
    }, () => y.CQ.LIST).with({
      canTapAnswers: false
    }, () => y.CQ.LIST).with({
      canSelectMultipleAnswers: false
    }, () => y.CQ.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: true
    }, () => y.CQ.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: H ? X : true,
    layoutType: A,
    resources: (0, O.A)({
      theme: l,
      layoutType: A
    }),
    containerStyle: "normal",
    primaryAction: Z,
    isInteractive: G,
    canTapAnswers: w,
    canSelectMultipleAnswers: $,
    hasSelectedAnswer: j,
    canShowVoteCounts: D,
    hasVoted: M,
    isExpired: U,
    myAvatarUrl: g,
    secondaryAction: Q,
    tertiaryAction: J
  }
}