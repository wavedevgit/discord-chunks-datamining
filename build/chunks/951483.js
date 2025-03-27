/** Chunk was on 39340 **/
n.d(t, {
  Sr: () => C,
  Xq: () => x,
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
  p = n(679080),
  f = n(510761),
  h = n(189509),
  _ = n(673553),
  m = n(280492),
  b = n(746887),
  g = n(721383),
  E = n(743810),
  v = n(981631),
  O = n(388032);

function y() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.map(e => {
    let t = C[e];
    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
    return t.binds[0]
  })
}
let C = {
    [v.EkH.SERVER_NEXT]: f.nq,
    [v.EkH.SERVER_PREV]: f.X3,
    [v.EkH.CHANNEL_NEXT]: i.tQ,
    [v.EkH.CHANNEL_PREV]: i.x5,
    [v.EkH.NAVIGATE_BACK]: i.Nx,
    [v.EkH.NAVIGATE_FORWARD]: i.On,
    [v.EkH.UNREAD_NEXT]: E.pd,
    [v.EkH.UNREAD_PREV]: E.wk,
    [v.EkH.MENTION_CHANNEL_NEXT]: E.Nv,
    [v.EkH.MENTION_CHANNEL_PREV]: E.uX,
    [v.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
    [v.EkH.JUMP_TO_GUILD]: o.u,
    [v.EkH.SUBMIT]: h.z,
    [v.EkH.TEXTAREA_FOCUS]: _.U,
    [v.EkH.MARK_CHANNEL_READ]: l.f,
    [v.EkH.MARK_SERVER_READ]: a.l,
    [v.EkH.TOGGLE_MUTE]: m.iN,
    [v.EkH.TOGGLE_DEAFEN]: m.oV,
    [v.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
    [v.EkH.SCROLL_UP]: d.B2,
    [v.EkH.SCROLL_DOWN]: d.gN,
    [v.EkH.SEARCH_EMOJIS]: p.S,
    [v.EkH.TOGGLE_HOTKEYS]: g._,
    [v.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
    [v.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
    [v.EkH.CALL_ACCEPT]: r.IL,
    [v.EkH.CALL_START]: r.FI,
    [v.EkH.QUICKSWITCHER_SHOW]: c.$
  },
  x = {
    [v.EkH.QUICKSWITCHER_SHOW]: c.$
  };

function S() {
  return [{
    description: O.NW.string(O.t.bx4Uy8),
    binds: y(v.EkH.SERVER_PREV, v.EkH.SERVER_NEXT)
  }, {
    description: O.NW.string(O.t["+Wem6u"]),
    binds: y(v.EkH.CHANNEL_PREV, v.EkH.CHANNEL_NEXT)
  }, {
    description: O.NW.string(O.t["+2fcd3"]),
    binds: y(v.EkH.NAVIGATE_BACK, v.EkH.NAVIGATE_FORWARD)
  }, {
    description: O.NW.string(O.t.eVmj1N),
    binds: y(v.EkH.UNREAD_PREV, v.EkH.UNREAD_NEXT)
  }, {
    description: O.NW.string(O.t.EcqS7e),
    binds: y(v.EkH.MENTION_CHANNEL_PREV, v.EkH.MENTION_CHANNEL_NEXT),
    groupEnd: !0
  }, {
    description: O.NW.string(O.t["Bqss7+"]),
    binds: y(v.EkH.TOGGLE_PREVIOUS_GUILD)
  }, {
    description: O.NW.string(O.t.UaXAPz),
    binds: y(v.EkH.MARK_SERVER_READ)
  }, {
    description: O.NW.string(O.t["5X9vFh"]),
    binds: y(v.EkH.MARK_CHANNEL_READ)
  }, {
    description: O.NW.string(O.t.JoxNnp),
    binds: y(v.EkH.SEARCH_EMOJIS),
    groupEnd: !0
  }, {
    description: O.NW.string(O.t.tL6eVV),
    binds: y(v.EkH.TOGGLE_MUTE)
  }, {
    description: O.NW.string(O.t["QXe/7e"]),
    binds: y(v.EkH.TOGGLE_DEAFEN)
  }, {
    description: O.NW.string(O.t.d6UIio),
    binds: y(v.EkH.CALL_ACCEPT)
  }, {
    description: O.NW.string(O.t.IcEW09),
    binds: y(v.EkH.MARK_CHANNEL_READ)
  }, {
    description: O.NW.string(O.t.WN2dsb),
    binds: y(v.EkH.CALL_START),
    groupEnd: !0
  }, {
    description: O.NW.string(O.t.L3RYYG),
    binds: y(v.EkH.SCROLL_UP, v.EkH.SCROLL_DOWN)
  }, {
    description: O.NW.string(O.t["3HAurK"]),
    binds: y(v.EkH.JUMP_TO_FIRST_UNREAD)
  }, {
    description: O.NW.string(O.t.rrYBEh),
    binds: y(v.EkH.TEXTAREA_FOCUS)
  }, {
    description: O.NW.string(O.t.yYsRlJ),
    binds: y(v.EkH.QUICKSWITCHER_SHOW)
  }]
}