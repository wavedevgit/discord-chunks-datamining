/** Chunk was on 72663 **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(780384),
  o = n(481060),
  l = n(410030),
  s = n(44315),
  a = n(889901),
  c = n(955204),
  d = n(231338),
  u = n(454304);

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
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  },
  h = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  };

function f(e) {
  var t;
  let {
    achievementId: n,
    unlocked: d,
    size: f = o.EFr.SIZE_40
  } = e, m = (0, l.ZP)(), g = (0, c.oX)(n);
  if (null == g) return null;
  let b = (0, o.UCu)(f),
    {
      name: E,
      rarity: C
    } = g,
    {
      color: O
    } = (0, c.F7)(C),
    y = (0, i.wj)(m) ? p : h,
    v = (b.size - b.offset - 2 * b.stroke) * .8,
    N = b.size - b.stroke,
    S = {
      width: .4 * v,
      height: .4 * v
    },
    x = {
      width: S.width + 1,
      height: S.height + 1,
      right: b.stroke + 1,
      bottom: b.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: u.container,
    style: {
      width: N,
      height: N,
      padding: b.stroke
    },
    "aria-label": "".concat(null !== (t = E()) && void 0 !== t ? t : ""),
    children: [(0, r.jsx)("div", {
      className: u.trophyIconContainer,
      children: (0, r.jsx)(o.rm8, {
        size: "custom",
        color: d ? O : (0, s.Lq)(y.trophy),
        width: v,
        height: v
      })
    }), !d && (0, r.jsx)("div", {
      className: u.lockContainer,
      style: x,
      children: (0, r.jsx)(o.mBM, _({
        size: "custom",
        color: (0, s.Lq)(y.locked)
      }, S))
    }), d && C === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: u.lockContainer,
      style: x,
      children: (0, r.jsx)(a.Z, _({
        className: u.confettiIcon
      }, S))
    })]
  })
}
f.Sizes = o.EFr