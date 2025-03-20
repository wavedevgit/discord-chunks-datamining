/** Chunk was on 69002 **/
n.d(t, {
  Sr: () => T,
  Xq: () => C,
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
  h = n(280492),
  m = n(746887),
  b = n(721383),
  O = n(743810),
  g = n(981631),
  N = n(388032);

function I() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = T[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let T = {
    [g.EkH.SERVER_NEXT]: p.nq,
    [g.EkH.SERVER_PREV]: p.X3,
    [g.EkH.CHANNEL_NEXT]: i.tQ,
    [g.EkH.CHANNEL_PREV]: i.x5,
    [g.EkH.NAVIGATE_BACK]: i.Nx,
    [g.EkH.NAVIGATE_FORWARD]: i.On,
    [g.EkH.UNREAD_NEXT]: O.pd,
    [g.EkH.UNREAD_PREV]: O.wk,
    [g.EkH.MENTION_CHANNEL_NEXT]: O.Nv,
    [g.EkH.MENTION_CHANNEL_PREV]: O.uX,
    [g.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
    [g.EkH.JUMP_TO_GUILD]: o.u,
    [g.EkH.SUBMIT]: E.z,
    [g.EkH.TEXTAREA_FOCUS]: f.U,
    [g.EkH.MARK_CHANNEL_READ]: l.f,
    [g.EkH.MARK_SERVER_READ]: a.l,
    [g.EkH.TOGGLE_MUTE]: h.iN,
    [g.EkH.TOGGLE_DEAFEN]: h.oV,
    [g.EkH.TOGGLE_CATEGORY_COLLAPSED]: m.u,
    [g.EkH.SCROLL_UP]: d.B2,
    [g.EkH.SCROLL_DOWN]: d.gN,
    [g.EkH.SEARCH_EMOJIS]: _.S,
    [g.EkH.TOGGLE_HOTKEYS]: b._,
    [g.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
    [g.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
    [g.EkH.CALL_ACCEPT]: r.IL,
    [g.EkH.CALL_START]: r.FI,
    [g.EkH.QUICKSWITCHER_SHOW]: c.$
  },
  C = {
    [g.EkH.QUICKSWITCHER_SHOW]: c.$
  };

function S() {
  return [{
    description: N.NW.string(N.t.bx4Uy8),
    binds: I(g.EkH.SERVER_PREV, g.EkH.SERVER_NEXT)
  }, {
    description: N.NW.string(N.t["+Wem6u"]),
    binds: I(g.EkH.CHANNEL_PREV, g.EkH.CHANNEL_NEXT)
  }, {
    description: N.NW.string(N.t["+2fcd3"]),
    binds: I(g.EkH.NAVIGATE_BACK, g.EkH.NAVIGATE_FORWARD)
  }, {
    description: N.NW.string(N.t.eVmj1N),
    binds: I(g.EkH.UNREAD_PREV, g.EkH.UNREAD_NEXT)
  }, {
    description: N.NW.string(N.t.EcqS7e),
    binds: I(g.EkH.MENTION_CHANNEL_PREV, g.EkH.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: N.NW.string(N.t["Bqss7+"]),
    binds: I(g.EkH.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: N.NW.string(N.t.UaXAPz),
    binds: I(g.EkH.MARK_SERVER_READ)
  }, {
    description: N.NW.string(N.t["5X9vFh"]),
    binds: I(g.EkH.MARK_CHANNEL_READ)
  }, {
    description: N.NW.string(N.t.JoxNnp),
    binds: I(g.EkH.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: N.NW.string(N.t.tL6eVV),
    binds: I(g.EkH.TOGGLE_MUTE)
  }, {
    description: N.NW.string(N.t["QXe/7e"]),
    binds: I(g.EkH.TOGGLE_DEAFEN)
  }, {
    description: N.NW.string(N.t.d6UIio),
    binds: I(g.EkH.CALL_ACCEPT)
  }, {
    description: N.NW.string(N.t.IcEW09),
    binds: I(g.EkH.MARK_CHANNEL_READ)
  }, {
    description: N.NW.string(N.t.WN2dsb),
    binds: I(g.EkH.CALL_START),
    groupEnd: !0
  }, {
    description: N.NW.string(N.t.L3RYYG),
    binds: I(g.EkH.SCROLL_UP, g.EkH.SCROLL_DOWN)
  }, {
    description: N.NW.string(N.t["3HAurK"]),
    binds: I(g.EkH.JUMP_TO_FIRST_UNREAD)
  }, {
    description: N.NW.string(N.t.rrYBEh),
    binds: I(g.EkH.TEXTAREA_FOCUS)
  }, {
    description: N.NW.string(N.t.yYsRlJ),
    binds: I(g.EkH.QUICKSWITCHER_SHOW)
  }]
}