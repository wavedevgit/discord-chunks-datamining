/** Chunk was on 95617 **/
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
  u = n(231338),
  d = n(396514);

function h(e) {
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
let b = {
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
      rarity: E
    } = O,
    {
      color: y
    } = (0, c.F7)(E),
    _ = (0, i.wj)(g) ? b : p,
    C = (v.size - v.offset - 2 * v.stroke) * .8,
    P = v.size - v.stroke,
    j = {
      width: .4 * C,
      height: .4 * C
    },
    x = {
      width: j.width + 1,
      height: j.height + 1,
      right: v.stroke + 1,
      bottom: v.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: d.container,
    style: {
      width: P,
      height: P,
      padding: v.stroke
    },
    "aria-label": "".concat(null !== (t = m()) && void 0 !== t ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(o.rm8, {
        size: "custom",
        color: u ? y : (0, s.Lq)(_.trophy),
        width: C,
        height: C
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: x,
      children: (0, r.jsx)(o.mBM, h({
        size: "custom",
        color: (0, s.Lq)(_.locked)
      }, j))
    }), u && E === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: x,
      children: (0, r.jsx)(a.Z, h({
        className: d.confettiIcon
      }, j))
    })]
  })
}
f.Sizes = o.EFr