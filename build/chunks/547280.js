/** Chunk was on 39612 **/
i.d(t, {
  b: () => r,
  o: () => o
});
var n = i(570140),
  s = i(605236),
  l = i(626135),
  c = i(445507),
  a = i(981631),
  d = i(921944);

function o(e) {
  let {
    targetKey: t,
    dismissibleContent: i,
    data: o,
    completed: r
  } = e;
  null != o.selectedOptionKey && ((0, s.un)(i) || l.default.track(a.rMx.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: o.selectedOptionKey,
    email: o.email,
    guild_id: o.guildId,
    metadata: (0, c.mU)(o),
    completed: r
  }), (0, s.EW)(i, {
    dismissAction: d.L.PRIMARY,
    forceTrack: !0
  }), n.Z.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: o.email,
    targetKey: t,
    selectedOptionKey: o.selectedOptionKey
  }))
}

function r(e, t) {
  (0, s.EW)(t, {
    dismissAction: d.L.DISMISS,
    forceTrack: !0
  }), n.Z.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: e
  })
}