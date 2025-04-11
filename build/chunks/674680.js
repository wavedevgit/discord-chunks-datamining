/** Chunk was on 69313 **/
n.d(t, {
  Z: () => p
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
let E = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  },
  g = {
    trophy: u.Il.PRIMARY_400,
    locked: u.Il.PRIMARY_400,
    unlocked: u.Il.GREEN_330
  };

function p(e) {
  var t;
  let {
    achievementId: n,
    unlocked: u,
    size: p = l.EFr.SIZE_40
  } = e, f = (0, o.ZP)(), _ = (0, c.oX)(n);
  if (null == _) return null;
  let O = (0, l.UCu)(p),
    {
      name: m,
      rarity: C
    } = _,
    {
      color: b
    } = (0, c.F7)(C),
    L = (0, r.wj)(f) ? E : g,
    v = (O.size - O.offset - 2 * O.stroke) * .8,
    y = O.size - O.stroke,
    T = {
      width: .4 * v,
      height: .4 * v
    },
    N = {
      width: T.width + 1,
      height: T.height + 1,
      right: O.stroke + 1,
      bottom: O.stroke + 1,
      padding: 0
    };
  return (0, i.jsxs)("div", {
    className: d.container,
    style: {
      width: y,
      height: y,
      padding: O.stroke
    },
    "aria-label": "".concat(null != (t = m()) ? t : ""),
    children: [(0, i.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, i.jsx)(l.rm8, {
        size: "custom",
        color: u ? b : (0, s.Lq)(L.trophy),
        width: v,
        height: v
      })
    }), !u && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: N,
      children: (0, i.jsx)(l.mBM, h({
        size: "custom",
        color: (0, s.Lq)(L.locked)
      }, T))
    }), u && C === c.EP.LEGENDARY && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: N,
      children: (0, i.jsx)(a.Z, h({
        className: d.confettiIcon
      }, T))
    })]
  })
}
p.Sizes = l.EFr