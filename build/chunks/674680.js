/** Chunk was on 77978 **/
n.d(t, {
  Z: () => p
});
var i = n(255367);
n(73800);
var l = n(780384),
  r = n(481060),
  o = n(410030),
  s = n(44315),
  a = n(889901),
  u = n(955204),
  c = n(231338),
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
let g = {
    trophy: c.Il.PRIMARY_400,
    locked: c.Il.PRIMARY_400,
    unlocked: c.Il.GREEN_330
  },
  f = {
    trophy: c.Il.PRIMARY_400,
    locked: c.Il.PRIMARY_400,
    unlocked: c.Il.GREEN_330
  };

function p(e) {
  var t;
  let {
    achievementId: n,
    unlocked: c,
    size: p = r.EFr.SIZE_40
  } = e, E = (0, o.ZP)(), _ = (0, u.oX)(n);
  if (null == _) return null;
  let m = (0, r.UCu)(p),
    {
      name: b,
      rarity: O
    } = _,
    {
      color: C
    } = (0, u.F7)(O),
    v = (0, l.wj)(E) ? g : f,
    y = (m.size - m.offset - 2 * m.stroke) * .8,
    L = m.size - m.stroke,
    T = {
      width: .4 * y,
      height: .4 * y
    },
    S = {
      width: T.width + 1,
      height: T.height + 1,
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
    "aria-label": "".concat(null != (t = b()) ? t : ""),
    children: [(0, i.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, i.jsx)(r.rm8, {
        size: "custom",
        color: c ? C : (0, s.Lq)(v.trophy),
        width: y,
        height: y
      })
    }), !c && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: S,
      children: (0, i.jsx)(r.mBM, h({
        size: "custom",
        color: (0, s.Lq)(v.locked)
      }, T))
    }), c && O === u.EP.LEGENDARY && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: S,
      children: (0, i.jsx)(a.Z, h({
        className: d.confettiIcon
      }, T))
    })]
  })
}
p.Sizes = r.EFr