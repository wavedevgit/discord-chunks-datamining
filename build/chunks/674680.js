/** Chunk was on 24389 **/
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

function b(e) {
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
let h = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  },
  p = {
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
  } = e, g = (0, l.ZP)(), O = (0, c.oX)(n);
  if (null == O) return null;
  let v = (0, o.UCu)(f),
    {
      name: m,
      rarity: y
    } = O,
    {
      color: E
    } = (0, c.F7)(y),
    _ = (0, i.wj)(g) ? h : p,
    P = (v.size - v.offset - 2 * v.stroke) * .8,
    j = v.size - v.stroke,
    C = {
      width: .4 * P,
      height: .4 * P
    },
    N = {
      width: C.width + 1,
      height: C.height + 1,
      right: v.stroke + 1,
      bottom: v.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: d.container,
    style: {
      width: j,
      height: j,
      padding: v.stroke
    },
    "aria-label": "".concat(null !== (t = m()) && void 0 !== t ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(o.rm8, {
        size: "custom",
        color: u ? E : (0, a.Lq)(_.trophy),
        width: P,
        height: P
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: N,
      children: (0, r.jsx)(o.mBM, b({
        size: "custom",
        color: (0, a.Lq)(_.locked)
      }, C))
    }), u && y === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: N,
      children: (0, r.jsx)(s.Z, b({
        className: d.confettiIcon
      }, C))
    })]
  })
}
f.Sizes = o.EFr