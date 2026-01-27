/** Chunk was on 92917 **/
/** chunk id: 951727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => T,
  Ej: () => C,
  Ls: () => I,
  j8: () => S
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
let j = {
  channelId: Chunk652215.dJq,
  selectedAnswerIds: new Set,
  submitting: false,
  editing: false,
  showResults: false
};

function C(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}

function I(e) {
  return null == e.poll || p.A.getMessage(e.channel_id, e.id) === e
}

function S(e, t) {
  var n, r, i, l;
  let {
    formattedExpirationLabel: a
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: s
  } = e;
  if (null == s) return;
  let m = e.state === O.cmJ.SENT,
    f = m ? null != a ? a : (0, x.J)(s.expiry) : "",
    g = null == f && m,
    {
      selectedAnswerIds: h,
      submitting: b,
      editing: A,
      showResults: y
    } = null != (n = null != t ? t : (0, _.xt)(e.getChannelId(), e.id)) ? n : j,
    v = e.reactions,
    E = true;
  if (!I(e)) {
    let t = p.A.getMessage(e.channel_id, e.id);
    E = !e.isSearchHit && null != t, v = null != (l = null == t ? true : t.reactions) ? l : v
  }
  let C = h.size > 0,
    S = v.some(e => true === e.me_vote),
    T = !A && S,
    N = T || g || y,
    P = m && E && (!S || A || N),
    w = null == (i = u.A.getChannel(e.getChannelId())) || null == (r = i.getGuildId) ? true : r.call(i),
    R = null != w ? d.Ay.getSelfMember(w) : null,
    D = (0, o.TR)(R),
    L = (0, c.Z)(R),
    M = !b && C && !T && m && !D && !L;
  return {
    poll: s,
    canTapAnswers: P,
    canRemoveVote: T && m && !g,
    canShowVoteCounts: N,
    canSubmitVote: M,
    expirationLabel: f,
    hasSelectedAnswer: C,
    hasVoted: T,
    hasVoteRecorded: S,
    isEditingVote: A,
    isExpired: g,
    isInteractive: E,
    isSent: m,
    reactions: v,
    selectedAnswerIds: h,
    submitting: b,
    tapShouldOpenVotersModal: N,
    showResults: y
  }
}

function T(e, t) {
  var n, o;
  let {
    animateEmoji: c = false,
    theme: d = "dark",
    formattedExpirationLabel: p
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, {
    poll: _
  } = e;
  if (null == _) return;
  let x = m.default.getCurrentUser();
  if (null == x) return;
  let O = l.A.useReducedMotion,
    j = null == (o = u.A.getChannel(e.getChannelId())) || null == (n = o.getGuildId) ? true : n.call(o),
    I = (0, y.T)(x, j),
    T = _.answers,
    N = _.layout_type,
    P = S(e, t, {
      formattedExpirationLabel: p
    });
  if (null == P) return;
  let {
    canTapAnswers: w,
    canRemoveVote: R,
    canShowVoteCounts: D,
    canSubmitVote: L,
    expirationLabel: M = E.intl.string(E.t["e+J3JZ"]),
    hasSelectedAnswer: k,
    hasVoted: U,
    isEditingVote: G,
    isExpired: B,
    isInteractive: F,
    reactions: H,
    selectedAnswerIds: V,
    submitting: z,
    tapShouldOpenVotersModal: W,
    showResults: K
  } = P, Y = (0, b.aw)(H), q = E.intl.formatToPlainString(E.t.XRkuof, {
    count: Y
  }), J = Math.max(...T.map(e => {
    var t, n;
    let r = C(H, "".concat(e.answer_id));
    return null != (t = null == r || null == (n = r.count_details) ? true : n.vote) ? t : 0
  })), Q = T.map(e => {
    var t, n, l;
    let o, u = "".concat(e.answer_id),
      d = C(H, u),
      p = null != (t = null == d || null == (l = d.count_details) ? true : l.vote) ? t : 0,
      m = 0 === Y ? 0 : p / Y,
      h = V.has(u),
      _ = p >= J && 0 !== p,
      b = U && null != (n = null == d ? true : d.me_vote) && n,
      A = (o = {
        didSelfVote: b,
        hasVoted: U,
        isExpired: B,
        isSelected: h,
        isLeader: _,
        showResults: K
      }, (0, r.YW)(o).with({
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
            r = null != (i = null == (l = a.Ay.getCustomEmojiById(e.id)) ? true : l.animated) && i
          }
          let o = t && null != r && r;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? s.Ay.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? g.Ay.getURL(e.name) : f.Ay.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: c
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: h,
      isVictor: B && _,
      didSelfVote: b,
      style: A,
      shouldAnimateTransition: z && !O,
      votesPercentage: Math.round(100 * m),
      votes: (0, r.YW)(N).with(i.Z.IMAGE_ONLY_ANSWERS, () => "(".concat(p.toLocaleString(), ")")).otherwise(() => E.intl.formatToPlainString(E.t.XRkuof, {
        count: p
      }))
    }
  }), Z = (0, r.YW)({
    isExpired: B,
    canSubmitVote: L,
    hasVoted: U,
    isEditingVote: G,
    canRemoveVote: R,
    isInteractive: F,
    showResults: K
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    isEditingVote: true
  }, () => ({
    label: E.intl.string(E.t.JwkNU4),
    presentation: "button",
    enabled: k,
    type: "submit"
  })).with({
    canRemoveVote: true
  }, () => ({
    label: E.intl.string(E.t.XhQEh8),
    presentation: "secondaryButton",
    enabled: true,
    type: "remove"
  })).with({
    hasVoted: false,
    showResults: true
  }, () => ({
    label: E.intl.string(E.t.gNj6In),
    presentation: "secondaryButton",
    enabled: true,
    type: "showVotes"
  })).otherwise(() => ({
    label: E.intl.string(E.t.JwkNU4),
    presentation: "button",
    enabled: L,
    type: "submit"
  })), X = (0, h.isIOS)() ? E.intl.string(E.t["PVATM/"]) : E.intl.string(E.t.cHfFql), $ = (0, r.YW)({
    isExpired: B,
    isInteractive: F,
    isEditingVote: G
  }).with({
    isInteractive: false,
    isExpired: false
  }, () => ({
    label: E.intl.string(E.t.trrip0),
    presentation: "text",
    enabled: false
  })).with({
    isEditingVote: true
  }, () => ({
    label: E.intl.string(E.t["ETE/oC"]),
    presentation: "textButton",
    enabled: true,
    type: "cancel"
  })).otherwise(() => ({
    label: q,
    secondaryLabel: M,
    accessibilityHint: X,
    presentation: "text",
    enabled: true,
    type: "showVoterDetails"
  })), ee = !F || B || U || K ? true : {
    label: E.intl.string(E.t["/KHAUF"]),
    presentation: "textButton",
    enabled: true,
    type: "showVotes"
  }, et = _.allow_multiselect, en = (0, r.YW)({
    isInteractive: F,
    isExpired: B,
    canSelectMultipleAnswers: et
  }).with({
    isInteractive: false
  }, () => true).with({
    isExpired: true
  }, () => true).with({
    canSelectMultipleAnswers: true
  }, () => E.intl.string(E.t.yCXvxa)).otherwise(() => E.intl.string(E.t["9Y2wKO"]));
  return {
    question: _.question,
    promptLabel: en,
    answers: Q,
    answersInteraction: (0, r.YW)({
      tapShouldOpenVotersModal: W,
      canTapAnswers: w,
      canSelectMultipleAnswers: et
    }).with({
      tapShouldOpenVotersModal: true
    }, () => A.CQ.LIST).with({
      canTapAnswers: false
    }, () => A.CQ.LIST).with({
      canSelectMultipleAnswers: false
    }, () => A.CQ.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: true
    }, () => A.CQ.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: W ? X : true,
    layoutType: N,
    resources: (0, v.A)({
      theme: d,
      layoutType: N
    }),
    containerStyle: "normal",
    primaryAction: Z,
    isInteractive: F,
    canTapAnswers: w,
    canSelectMultipleAnswers: et,
    hasSelectedAnswer: k,
    canShowVoteCounts: D,
    hasVoted: U,
    isExpired: B,
    myAvatarUrl: I,
    secondaryAction: $,
    tertiaryAction: ee
  }
}