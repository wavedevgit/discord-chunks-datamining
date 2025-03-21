/** Chunk was on 18475 **/
n.d(t, {
  Z: () => _
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

function p(e) {
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
let f = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  },
  h = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  };

function _(e) {
  var t;
  let {
    achievementId: n,
    unlocked: u,
    size: _ = o.EFr.SIZE_40
  } = e, m = (0, l.ZP)(), b = (0, c.oX)(n);
  if (null == b) return null;
  let g = (0, o.UCu)(_),
    {
      name: E,
      rarity: v
    } = b,
    {
      color: O
    } = (0, c.F7)(v),
    y = (0, i.wj)(m) ? f : h,
    C = (g.size - g.offset - 2 * g.stroke) * .8,
    x = g.size - g.stroke,
    S = {
      width: .4 * C,
      height: .4 * C
    },
    N = {
      width: S.width + 1,
      height: S.height + 1,
      right: g.stroke + 1,
      bottom: g.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: d.container,
    style: {
      width: x,
      height: x,
      padding: g.stroke
    },
    "aria-label": "".concat(null !== (t = E()) && void 0 !== t ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(o.rm8, {
        size: "custom",
        color: u ? O : (0, a.Lq)(y.trophy),
        width: C,
        height: C
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: N,
      children: (0, r.jsx)(o.mBM, p({
        size: "custom",
        color: (0, a.Lq)(y.locked)
      }, S))
    }), u && v === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: N,
      children: (0, r.jsx)(s.Z, p({
        className: d.confettiIcon
      }, S))
    })]
  })
}
_.Sizes = o.EFr