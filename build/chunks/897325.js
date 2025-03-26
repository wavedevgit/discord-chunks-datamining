/** Chunk was on 52272 **/
n.d(t, {
  E: () => l,
  _: () => a
}), n(627341);
var r = n(278074),
  i = n(263568),
  o = n(579540);

function a(e, t) {
  let n = (0, r.EQ)(t).with(i.C.IMAGE_ONLY_ANSWERS, () => o.normalStylesImageOnlyAnswers).otherwise(() => o.normalStylesDefault);
  return {
    styles: {
      loserSelected: n,
      normal: n,
      notVoted: n,
      selected: n,
      voted: o.votedStyles,
      victorSelected: o.victorStyles,
      victorNotSelected: o.victorStyles,
      normalVote: n
    }
  }
}

function l(e, t) {
  return e.getAvatarURL(t, 20, !1)
}