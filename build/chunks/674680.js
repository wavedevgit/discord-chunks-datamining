/** Chunk was on 27805 **/
i.d(t, {
  Z: () => _
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
  g = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  };

function _(e) {
  var t;
  let {
    achievementId: i,
    unlocked: d,
    size: _ = o.EFr.SIZE_40
  } = e, L = (0, s.ZP)(), m = (0, c.oX)(i);
  if (null == m) return null;
  let C = (0, o.UCu)(_),
    {
      name: p,
      rarity: f
    } = m,
    {
      color: O
    } = (0, c.F7)(f),
    N = (0, r.wj)(L) ? E : g,
    b = (C.size - C.offset - 2 * C.stroke) * .8,
    T = C.size - C.stroke,
    v = {
      width: .4 * b,
      height: .4 * b
    },
    k = {
      width: v.width + 1,
      height: v.height + 1,
      right: C.stroke + 1,
      bottom: C.stroke + 1,
      padding: 0
    };
  return (0, n.jsxs)("div", {
    className: u.container,
    style: {
      width: T,
      height: T,
      padding: C.stroke
    },
    "aria-label": "".concat(null !== (t = p()) && void 0 !== t ? t : ""),
    children: [(0, n.jsx)("div", {
      className: u.trophyIconContainer,
      children: (0, n.jsx)(o.rm8, {
        size: "custom",
        color: d ? O : (0, l.Lq)(N.trophy),
        width: b,
        height: b
      })
    }), !d && (0, n.jsx)("div", {
      className: u.lockContainer,
      style: k,
      children: (0, n.jsx)(o.mBM, h({
        size: "custom",
        color: (0, l.Lq)(N.locked)
      }, v))
    }), d && f === c.EP.LEGENDARY && (0, n.jsx)("div", {
      className: u.lockContainer,
      style: k,
      children: (0, n.jsx)(a.Z, h({
        className: u.confettiIcon
      }, v))
    })]
  })
}
_.Sizes = o.EFr