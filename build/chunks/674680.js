/** Chunk was on 64946 **/
n.d(t, {
  Z: () => f
});
var i = n(255367);
n(73800);
var r = n(780384),
  l = n(481060),
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
let p = {
    trophy: c.Il.PRIMARY_400,
    locked: c.Il.PRIMARY_400,
    unlocked: c.Il.GREEN_330
  },
  g = {
    trophy: c.Il.PRIMARY_400,
    locked: c.Il.PRIMARY_400,
    unlocked: c.Il.GREEN_330
  };

function f(e) {
  var t;
  let {
    achievementId: n,
    unlocked: c,
    size: f = l.EFr.SIZE_40
  } = e, E = (0, o.ZP)(), m = (0, u.oX)(n);
  if (null == m) return null;
  let _ = (0, l.UCu)(f),
    {
      name: O,
      rarity: b
    } = m,
    {
      color: C
    } = (0, u.F7)(b),
    v = (0, r.wj)(E) ? p : g,
    y = (_.size - _.offset - 2 * _.stroke) * .8,
    L = _.size - _.stroke,
    k = {
      width: .4 * y,
      height: .4 * y
    },
    T = {
      width: k.width + 1,
      height: k.height + 1,
      right: _.stroke + 1,
      bottom: _.stroke + 1,
      padding: 0
    };
  return (0, i.jsxs)("div", {
    className: d.container,
    style: {
      width: L,
      height: L,
      padding: _.stroke
    },
    "aria-label": "".concat(null != (t = O()) ? t : ""),
    children: [(0, i.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, i.jsx)(l.rm8, {
        size: "custom",
        color: c ? C : (0, s.Lq)(v.trophy),
        width: y,
        height: y
      })
    }), !c && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: T,
      children: (0, i.jsx)(l.mBM, h({
        size: "custom",
        color: (0, s.Lq)(v.locked)
      }, k))
    }), c && b === u.EP.LEGENDARY && (0, i.jsx)("div", {
      className: d.lockContainer,
      style: T,
      children: (0, i.jsx)(a.Z, h({
        className: d.confettiIcon
      }, k))
    })]
  })
}
f.Sizes = l.EFr