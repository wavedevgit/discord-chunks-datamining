/** Chunk was on web.js **/
/** chunk id: 365206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk528708 = require("./528708.js"),
  Chunk481060 = require("./481060.js"),
  Chunk839963 = require("./839963.js"),
  Chunk139256 = require("./139256.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk241127 = require("./241127.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = 40,
  g = 18;

function E(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: i
  } = e;
  return <div className={d.votesData}>{t && <a.T>{u.intl.string(u.t["8DAM+/"])}</a.T>}{<s.Text variant={"text-md/semibold"} color={"none"}>{i}{"%"}</s.Text>}{<s.Text variant={"text-xs/semibold"} color={"none"}>{n}</s.Text>}</div>
}

function b(e) {
  let {
    answer: t,
    isExpired: n,
    myAvatarUrl: i,
    canShowVoteCounts: a
  } = e, s = true === t.isSelected, l = true === t.didSelfVote, u = true === t.isVictor;
  return <r.Fragment>{<c.$w attachmentClassName={o()(d.attachment, {
        [d.attachmentWithResults]: a
      })} emojiClassName={d.emoji} media={t.pollMedia} fallback={(0, r.jsx)("div", {
        className: o()(d.attachment, d.mediaMissing)
      })} />}{s && <c.ZY size={m} isVictor={u} isExpired={n} className={d.selectedIcon} />}{a && <r.Fragment>{<E didSelfVote={l} percentage={t.votesPercentage} label={t.votes} myAvatarUrl={l ? i : true} />}{(!n && l || u) && <c.ZY size={g} isVictor={u} isExpired={n} className={d.pollAnswerIcon} />}</r.Fragment>}</r.Fragment>
}

function y(e) {
  var {
    isExpired: t,
    myAvatarUrl: n,
    answersInteraction: i,
    canShowVoteCounts: a
  } = e, s = p(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
  return <c.$e{..._({
    className: d.answersContainer,
    answerClassName: o()(d.answer, {
      [d.currentlyVoting]: i !== l.Y7.LIST
    }),
    myAvatarUrl: n,
    answersInteraction: i,
    renderAnswerContent: e => (0, r.jsx)(b, {
      answer: e,
      isExpired: t,
      myAvatarUrl: n,
      answersInteraction: i,
      canShowVoteCounts: a
    })
  }, s)} />
}