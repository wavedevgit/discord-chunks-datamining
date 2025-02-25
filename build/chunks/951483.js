/** Chunk was on 25499 **/
n.d(t, {
  Sr: () => C,
  Xq: () => T,
  Zg: () => S
}), n(411104);
var r = n(186070),
  i = n(185514),
  l = n(360038),
  o = n(175724),
  a = n(705371),
  s = n(138976),
  c = n(167042),
  u = n(239748),
  d = n(337482),
  _ = n(679080),
  E = n(510761),
  p = n(189509),
  h = n(673553),
  m = n(280492),
  f = n(746887),
  g = n(721383),
  O = n(743810),
  N = n(981631),
  I = n(388032);

function b() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = C[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let C = {
    [N.EkH.SERVER_NEXT]: E.nq,
    [N.EkH.SERVER_PREV]: E.X3,
    [N.EkH.CHANNEL_NEXT]: i.tQ,
    [N.EkH.CHANNEL_PREV]: i.x5,
    [N.EkH.NAVIGATE_BACK]: i.Nx,
    [N.EkH.NAVIGATE_FORWARD]: i.On,
    [N.EkH.UNREAD_NEXT]: O.pd,
    [N.EkH.UNREAD_PREV]: O.wk,
    [N.EkH.MENTION_CHANNEL_NEXT]: O.Nv,
    [N.EkH.MENTION_CHANNEL_PREV]: O.uX,
    [N.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
    [N.EkH.JUMP_TO_GUILD]: l.u,
    [N.EkH.SUBMIT]: p.z,
    [N.EkH.TEXTAREA_FOCUS]: h.U,
    [N.EkH.MARK_CHANNEL_READ]: o.f,
    [N.EkH.MARK_SERVER_READ]: a.l,
    [N.EkH.TOGGLE_MUTE]: m.iN,
    [N.EkH.TOGGLE_DEAFEN]: m.oV,
    [N.EkH.TOGGLE_CATEGORY_COLLAPSED]: f.u,
    [N.EkH.SCROLL_UP]: d.B2,
    [N.EkH.SCROLL_DOWN]: d.gN,
    [N.EkH.SEARCH_EMOJIS]: _.S,
    [N.EkH.TOGGLE_HOTKEYS]: g._,
    [N.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
    [N.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
    [N.EkH.CALL_ACCEPT]: r.IL,
    [N.EkH.CALL_START]: r.FI,
    [N.EkH.QUICKSWITCHER_SHOW]: c.$
  },
  T = {
    [N.EkH.QUICKSWITCHER_SHOW]: c.$
  };

function S() {
  return [{
    description: I.NW.string(I.t.bx4Uy8),
    binds: b(N.EkH.SERVER_PREV, N.EkH.SERVER_NEXT)
  }, {
    description: I.NW.string(I.t["+Wem6u"]),
    binds: b(N.EkH.CHANNEL_PREV, N.EkH.CHANNEL_NEXT)
  }, {
    description: I.NW.string(I.t["+2fcd3"]),
    binds: b(N.EkH.NAVIGATE_BACK, N.EkH.NAVIGATE_FORWARD)
  }, {
    description: I.NW.string(I.t.eVmj1N),
    binds: b(N.EkH.UNREAD_PREV, N.EkH.UNREAD_NEXT)
  }, {
    description: I.NW.string(I.t.EcqS7e),
    binds: b(N.EkH.MENTION_CHANNEL_PREV, N.EkH.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: I.NW.string(I.t["Bqss7+"]),
    binds: b(N.EkH.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: I.NW.string(I.t.UaXAPz),
    binds: b(N.EkH.MARK_SERVER_READ)
  }, {
    description: I.NW.string(I.t["5X9vFh"]),
    binds: b(N.EkH.MARK_CHANNEL_READ)
  }, {
    description: I.NW.string(I.t.JoxNnp),
    binds: b(N.EkH.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: I.NW.string(I.t.tL6eVV),
    binds: b(N.EkH.TOGGLE_MUTE)
  }, {
    description: I.NW.string(I.t["QXe/7e"]),
    binds: b(N.EkH.TOGGLE_DEAFEN)
  }, {
    description: I.NW.string(I.t.d6UIio),
    binds: b(N.EkH.CALL_ACCEPT)
  }, {
    description: I.NW.string(I.t.IcEW09),
    binds: b(N.EkH.MARK_CHANNEL_READ)
  }, {
    description: I.NW.string(I.t.WN2dsb),
    binds: b(N.EkH.CALL_START),
    groupEnd: !0
  }, {
    description: I.NW.string(I.t.L3RYYG),
    binds: b(N.EkH.SCROLL_UP, N.EkH.SCROLL_DOWN)
  }, {
    description: I.NW.string(I.t["3HAurK"]),
    binds: b(N.EkH.JUMP_TO_FIRST_UNREAD)
  }, {
    description: I.NW.string(I.t.rrYBEh),
    binds: b(N.EkH.TEXTAREA_FOCUS)
  }, {
    description: I.NW.string(I.t.yYsRlJ),
    binds: b(N.EkH.QUICKSWITCHER_SHOW)
  }]
}