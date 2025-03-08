/** Chunk was on 74329 **/
n.d(t, {
  Sr: () => C,
  Xq: () => T,
  Zg: () => S
}), n(411104);
var r = n(186070),
  i = n(185514),
  o = n(360038),
  l = n(175724),
  a = n(705371),
  s = n(138976),
  c = n(167042),
  u = n(239748),
  d = n(337482),
  _ = n(679080),
  p = n(510761),
  E = n(189509),
  f = n(673553),
  m = n(280492),
  h = n(746887),
  b = n(721383),
  g = n(743810),
  O = n(981631),
  N = n(388032);

function I() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = C[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let C = {
    [O.EkH.SERVER_NEXT]: p.nq,
    [O.EkH.SERVER_PREV]: p.X3,
    [O.EkH.CHANNEL_NEXT]: i.tQ,
    [O.EkH.CHANNEL_PREV]: i.x5,
    [O.EkH.NAVIGATE_BACK]: i.Nx,
    [O.EkH.NAVIGATE_FORWARD]: i.On,
    [O.EkH.UNREAD_NEXT]: g.pd,
    [O.EkH.UNREAD_PREV]: g.wk,
    [O.EkH.MENTION_CHANNEL_NEXT]: g.Nv,
    [O.EkH.MENTION_CHANNEL_PREV]: g.uX,
    [O.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
    [O.EkH.JUMP_TO_GUILD]: o.u,
    [O.EkH.SUBMIT]: E.z,
    [O.EkH.TEXTAREA_FOCUS]: f.U,
    [O.EkH.MARK_CHANNEL_READ]: l.f,
    [O.EkH.MARK_SERVER_READ]: a.l,
    [O.EkH.TOGGLE_MUTE]: m.iN,
    [O.EkH.TOGGLE_DEAFEN]: m.oV,
    [O.EkH.TOGGLE_CATEGORY_COLLAPSED]: h.u,
    [O.EkH.SCROLL_UP]: d.B2,
    [O.EkH.SCROLL_DOWN]: d.gN,
    [O.EkH.SEARCH_EMOJIS]: _.S,
    [O.EkH.TOGGLE_HOTKEYS]: b._,
    [O.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
    [O.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
    [O.EkH.CALL_ACCEPT]: r.IL,
    [O.EkH.CALL_START]: r.FI,
    [O.EkH.QUICKSWITCHER_SHOW]: c.$
  },
  T = {
    [O.EkH.QUICKSWITCHER_SHOW]: c.$
  };

function S() {
  return [{
    description: N.NW.string(N.t.bx4Uy8),
    binds: I(O.EkH.SERVER_PREV, O.EkH.SERVER_NEXT)
  }, {
    description: N.NW.string(N.t["+Wem6u"]),
    binds: I(O.EkH.CHANNEL_PREV, O.EkH.CHANNEL_NEXT)
  }, {
    description: N.NW.string(N.t["+2fcd3"]),
    binds: I(O.EkH.NAVIGATE_BACK, O.EkH.NAVIGATE_FORWARD)
  }, {
    description: N.NW.string(N.t.eVmj1N),
    binds: I(O.EkH.UNREAD_PREV, O.EkH.UNREAD_NEXT)
  }, {
    description: N.NW.string(N.t.EcqS7e),
    binds: I(O.EkH.MENTION_CHANNEL_PREV, O.EkH.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: N.NW.string(N.t["Bqss7+"]),
    binds: I(O.EkH.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: N.NW.string(N.t.UaXAPz),
    binds: I(O.EkH.MARK_SERVER_READ)
  }, {
    description: N.NW.string(N.t["5X9vFh"]),
    binds: I(O.EkH.MARK_CHANNEL_READ)
  }, {
    description: N.NW.string(N.t.JoxNnp),
    binds: I(O.EkH.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: N.NW.string(N.t.tL6eVV),
    binds: I(O.EkH.TOGGLE_MUTE)
  }, {
    description: N.NW.string(N.t["QXe/7e"]),
    binds: I(O.EkH.TOGGLE_DEAFEN)
  }, {
    description: N.NW.string(N.t.d6UIio),
    binds: I(O.EkH.CALL_ACCEPT)
  }, {
    description: N.NW.string(N.t.IcEW09),
    binds: I(O.EkH.MARK_CHANNEL_READ)
  }, {
    description: N.NW.string(N.t.WN2dsb),
    binds: I(O.EkH.CALL_START),
    groupEnd: !0
  }, {
    description: N.NW.string(N.t.L3RYYG),
    binds: I(O.EkH.SCROLL_UP, O.EkH.SCROLL_DOWN)
  }, {
    description: N.NW.string(N.t["3HAurK"]),
    binds: I(O.EkH.JUMP_TO_FIRST_UNREAD)
  }, {
    description: N.NW.string(N.t.rrYBEh),
    binds: I(O.EkH.TEXTAREA_FOCUS)
  }, {
    description: N.NW.string(N.t.yYsRlJ),
    binds: I(O.EkH.QUICKSWITCHER_SHOW)
  }]
}