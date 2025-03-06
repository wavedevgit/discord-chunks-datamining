/** Chunk was on 76282 **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(780384),
  o = n(481060),
  l = n(410030),
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
let p = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  },
  E = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  };

function f(e) {
  var t;
  let {
    achievementId: n,
    unlocked: u,
    size: f = o.EFr.SIZE_40
  } = e, m = (0, l.ZP)(), h = (0, c.oX)(n);
  if (null == h) return null;
  let g = (0, o.UCu)(f),
    {
      name: b,
      rarity: O
    } = h,
    {
      color: N
    } = (0, c.F7)(O),
    I = (0, i.wj)(m) ? p : E,
    C = (g.size - g.offset - 2 * g.stroke) * .8,
    T = g.size - g.stroke,
    S = {
      width: .4 * C,
      height: .4 * C
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
      width: T,
      height: T,
      padding: g.stroke
    },
    "aria-label": "".concat(null !== (t = b()) && void 0 !== t ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(o.rm8, {
        size: "custom",
        color: u ? N : (0, a.Lq)(I.trophy),
        width: C,
        height: C
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: y,
      children: (0, r.jsx)(o.mBM, _({
        size: "custom",
        color: (0, a.Lq)(I.locked)
      }, S))
    }), u && O === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: y,
      children: (0, r.jsx)(s.Z, _({
        className: d.confettiIcon
      }, S))
    })]
  })
}
f.Sizes = o.EFr