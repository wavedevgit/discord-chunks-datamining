/** Chunk was on 43498 **/
n.d(t, {
  Z: () => g
});
var i = n(200651);
n(192379);
var r = n(780384),
  l = n(481060),
  o = n(410030),
  s = n(44315),
  a = n(889901),
  c = n(955204),
  u = n(231338),
  d = n(835115);

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}
let f = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  },
  p = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  };

function g(e) {
  var t;
  let {
    achievementId: n,
    unlocked: u,
    size: g = l.EFr.SIZE_40
  } = e, E = (0, o.ZP)(), b = (0, c.oX)(n);
  if (null == b) return null;
  let m = (0, l.UCu)(g),
    {
      name: O,
      rarity: _
    } = b,
    {
      color: C
    } = (0, c.F7)(_),
    v = (0, r.wj)(E) ? f : p,
    y = (m.size - m.offset - 2 * m.stroke) * .8,
    L = m.size - m.stroke,
    k = {
      width: .4 * y,
      height: .4 * y
    },
    T = {
      width: k.width + 1,
      height: k.height + 1,
      right: m.stroke + 1,
      bottom: m.stroke + 1,
      padding: 0
    };
  return (0, i.jsxs)("div", {
    className: d.container,
    style: {
      width: L,
      height: L,
      padding: m.stroke
    },
    "aria-label": "".concat(null != (t = O()) ? t : ""),
    children: [(0, i.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, i.jsx)(l.rm8, {
        size: "custom",
        color: u ? C : (0, s.Lq)(v.trophy),
        width: y,
        height: y
      })
    }), !u && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: T,
      children: (0, i.jsx)(l.mBM, h({
        size: "custom",
        color: (0, s.Lq)(v.locked)
      }, k))
    }), u && _ === c.EP.LEGENDARY && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: T,
      children: (0, i.jsx)(a.Z, h({
        className: d.confettiIcon
      }, k))
    })]
  })
}
g.Sizes = l.EFr