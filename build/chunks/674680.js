/** Chunk was on 51424 **/
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(780384),
  l = n(481060),
  o = n(410030),
  a = n(44315),
  s = n(889901),
  c = n(955204),
  u = n(231338),
  d = n(319239);

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let E = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  },
  p = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  };

function m(e) {
  var t;
  let {
    achievementId: n,
    unlocked: u,
    size: m = l.EFr.SIZE_40
  } = e, f = (0, o.ZP)(), h = (0, c.oX)(n);
  if (null == h) return null;
  let g = (0, l.UCu)(m),
    {
      name: O,
      rarity: N
    } = h,
    {
      color: I
    } = (0, c.F7)(N),
    b = (0, i.wj)(f) ? E : p,
    T = (g.size - g.offset - 2 * g.stroke) * .8,
    C = g.size - g.stroke,
    S = {
      width: .4 * T,
      height: .4 * T
    },
    y = {
      width: S.width + 1,
      height: S.height + 1,
      right: g.stroke + 1,
      bottom: g.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: d.container,
    style: {
      width: C,
      height: C,
      padding: g.stroke
    },
    "aria-label": "".concat(null !== (t = O()) && void 0 !== t ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(l.rm8, {
        size: "custom",
        color: u ? I : (0, a.Lq)(b.trophy),
        width: T,
        height: T
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: y,
      children: (0, r.jsx)(l.mBM, _({
        size: "custom",
        color: (0, a.Lq)(b.locked)
      }, S))
    }), u && N === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: y,
      children: (0, r.jsx)(s.Z, _({
        className: d.confettiIcon
      }, S))
    })]
  })
}
m.Sizes = l.EFr