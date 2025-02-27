/** Chunk was on 49750 **/
n.d(t, {
  Sr: () => T,
  Xq: () => C,
  Zg: () => S
}), n(411104);
var r = n(186070),
  i = n(185514),
  l = n(360038),
  o = n(175724),
  s = n(705371),
  a = n(138976),
  c = n(167042),
  u = n(239748),
  d = n(337482),
  _ = n(679080),
  E = n(510761),
  p = n(189509),
  m = n(673553),
  h = n(280492),
  f = n(746887),
  g = n(721383),
  N = n(743810),
  O = n(981631),
  I = n(388032);

function b() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = T[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let T = {
    [O.EkH.SERVER_NEXT]: E.nq,
    [O.EkH.SERVER_PREV]: E.X3,
    [O.EkH.CHANNEL_NEXT]: i.tQ,
    [O.EkH.CHANNEL_PREV]: i.x5,
    [O.EkH.NAVIGATE_BACK]: i.Nx,
    [O.EkH.NAVIGATE_FORWARD]: i.On,
    [O.EkH.UNREAD_NEXT]: N.pd,
    [O.EkH.UNREAD_PREV]: N.wk,
    [O.EkH.MENTION_CHANNEL_NEXT]: N.Nv,
    [O.EkH.MENTION_CHANNEL_PREV]: N.uX,
    [O.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
    [O.EkH.JUMP_TO_GUILD]: l.u,
    [O.EkH.SUBMIT]: p.z,
    [O.EkH.TEXTAREA_FOCUS]: m.U,
    [O.EkH.MARK_CHANNEL_READ]: o.f,
    [O.EkH.MARK_SERVER_READ]: s.l,
    [O.EkH.TOGGLE_MUTE]: h.iN,
    [O.EkH.TOGGLE_DEAFEN]: h.oV,
    [O.EkH.TOGGLE_CATEGORY_COLLAPSED]: f.u,
    [O.EkH.SCROLL_UP]: d.B2,
    [O.EkH.SCROLL_DOWN]: d.gN,
    [O.EkH.SEARCH_EMOJIS]: _.S,
    [O.EkH.TOGGLE_HOTKEYS]: g._,
    [O.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
    [O.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
    [O.EkH.CALL_ACCEPT]: r.IL,
    [O.EkH.CALL_START]: r.FI,
    [O.EkH.QUICKSWITCHER_SHOW]: c.$
  },
  C = {
    [O.EkH.QUICKSWITCHER_SHOW]: c.$
  };

function S() {
  return [{
    description: I.NW.string(I.t.bx4Uy8),
    binds: b(O.EkH.SERVER_PREV, O.EkH.SERVER_NEXT)
  }, {
    description: I.NW.string(I.t["+Wem6u"]),
    binds: b(O.EkH.CHANNEL_PREV, O.EkH.CHANNEL_NEXT)
  }, {
    description: I.NW.string(I.t["+2fcd3"]),
    binds: b(O.EkH.NAVIGATE_BACK, O.EkH.NAVIGATE_FORWARD)
  }, {
    description: I.NW.string(I.t.eVmj1N),
    binds: b(O.EkH.UNREAD_PREV, O.EkH.UNREAD_NEXT)
  }, {
    description: I.NW.string(I.t.EcqS7e),
    binds: b(O.EkH.MENTION_CHANNEL_PREV, O.EkH.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: I.NW.string(I.t["Bqss7+"]),
    binds: b(O.EkH.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: I.NW.string(I.t.UaXAPz),
    binds: b(O.EkH.MARK_SERVER_READ)
  }, {
    description: I.NW.string(I.t["5X9vFh"]),
    binds: b(O.EkH.MARK_CHANNEL_READ)
  }, {
    description: I.NW.string(I.t.JoxNnp),
    binds: b(O.EkH.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: I.NW.string(I.t.tL6eVV),
    binds: b(O.EkH.TOGGLE_MUTE)
  }, {
    description: I.NW.string(I.t["QXe/7e"]),
    binds: b(O.EkH.TOGGLE_DEAFEN)
  }, {
    description: I.NW.string(I.t.d6UIio),
    binds: b(O.EkH.CALL_ACCEPT)
  }, {
    description: I.NW.string(I.t.IcEW09),
    binds: b(O.EkH.MARK_CHANNEL_READ)
  }, {
    description: I.NW.string(I.t.WN2dsb),
    binds: b(O.EkH.CALL_START),
    groupEnd: !0
  }, {
    description: I.NW.string(I.t.L3RYYG),
    binds: b(O.EkH.SCROLL_UP, O.EkH.SCROLL_DOWN)
  }, {
    description: I.NW.string(I.t["3HAurK"]),
    binds: b(O.EkH.JUMP_TO_FIRST_UNREAD)
  }, {
    description: I.NW.string(I.t.rrYBEh),
    binds: b(O.EkH.TEXTAREA_FOCUS)
  }, {
    description: I.NW.string(I.t.yYsRlJ),
    binds: b(O.EkH.QUICKSWITCHER_SHOW)
  }]
}