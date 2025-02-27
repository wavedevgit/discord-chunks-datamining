/** Chunk was on 40383 **/
i.d(t, {
  Z: () => g
});
var n = i(200651);
i(192379);
var r = i(780384),
  o = i(481060),
  s = i(410030),
  l = i(44315),
  a = i(889901),
  c = i(955204),
  d = i(231338),
  u = i(548630);

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
let E = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  },
  _ = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  };

function g(e) {
  var t;
  let {
    achievementId: i,
    unlocked: d,
    size: g = o.EFr.SIZE_40
  } = e, L = (0, s.ZP)(), m = (0, c.oX)(i);
  if (null == m) return null;
  let p = (0, o.UCu)(g),
    {
      name: C,
      rarity: O
    } = m,
    {
      color: f
    } = (0, c.F7)(O),
    N = (0, r.wj)(L) ? E : _,
    b = (p.size - p.offset - 2 * p.stroke) * .8,
    k = p.size - p.stroke,
    T = {
      width: .4 * b,
      height: .4 * b
    },
    v = {
      width: T.width + 1,
      height: T.height + 1,
      right: p.stroke + 1,
      bottom: p.stroke + 1,
      padding: 0
    };
  return (0, n.jsxs)("div", {
    className: u.container,
    style: {
      width: k,
      height: k,
      padding: p.stroke
    },
    "aria-label": "".concat(null !== (t = C()) && void 0 !== t ? t : ""),
    children: [(0, n.jsx)("div", {
      className: u.trophyIconContainer,
      children: (0, n.jsx)(o.rm8, {
        size: "custom",
        color: d ? f : (0, l.Lq)(N.trophy),
        width: b,
        height: b
      })
    }), !d && (0, n.jsx)("div", {
      className: u.lockContainer,
      style: v,
      children: (0, n.jsx)(o.mBM, h({
        size: "custom",
        color: (0, l.Lq)(N.locked)
      }, T))
    }), d && O === c.EP.LEGENDARY && (0, n.jsx)("div", {
      className: u.lockContainer,
      style: v,
      children: (0, n.jsx)(a.Z, h({
        className: u.confettiIcon
      }, T))
    })]
  })
}
g.Sizes = o.EFr