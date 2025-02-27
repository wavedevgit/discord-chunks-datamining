/** Chunk was on 82081 **/
e.d(t, {
  BalanceWidgetEarnedOrbsCoachmarkModal: () => x,
  E: () => _
});
var a = e(200651);
e(192379);
var i = e(120356),
  c = e.n(i),
  r = e(568611),
  o = e(693789),
  l = e(481060),
  s = e(751648),
  d = e(790542),
  m = e(317257),
  b = e(970815),
  k = e(622562),
  u = e(981631),
  h = e(388032),
  C = e(803812),
  f = e(981987),
  g = e(232474);
let _ = n => {
  let {
    earnedOrbsQuantity: t,
    descriptionText: e = h.NW.string(h.t["4YgBe3"]),
    ctaText: i = h.NW.string(h.t.WYchdX),
    linkText: s = h.NW.string(h.t["H57f4+"]),
    ctaOnClick: d,
    linkOnClick: m,
    linkTo: b
  } = n;
  return (0, a.jsxs)("div", {
    className: c()(f.container, C.baseCardOutline),
    children: [(0, a.jsx)("div", {
      className: c()(f.gifContainer, f.centerContent),
      children: (0, a.jsx)("img", {
        src: g.Z,
        className: f.gif,
        alt: "Orb GIF"
      })
    }), (0, a.jsxs)("div", {
      className: f.contentContainer,
      children: [(0, a.jsx)("h3", {
        className: C.coachmarkTitle,
        children: h.NW.format(h.t.lA7CLi, {
          quantity: t
        })
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        className: C.coachmarkDescription,
        children: e
      }), (0, a.jsx)(o.zx, {
        className: f.ctaButton,
        color: o.zx.Colors.BRAND,
        look: o.zx.Looks.FILLED,
        onClick: d,
        fullWidth: !0,
        children: i
      }), (0, a.jsx)(r.rU, {
        to: {
          pathname: b
        },
        onClick: m,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: f.link,
          children: s
        })
      })]
    })]
  })
};

function x(n) {
  var {
    earnedOrbsQuantity: t,
    backgroundElementRef: e,
    onClickPill: i,
    ctaOnClick: c,
    linkOnClick: r,
    onClose: o,
    onCloseCallback: l
  } = n;
  ! function(n, t) {
    if (null != n) {
      var e, a, i = function(n, t) {
        if (null == n) return {};
        var e, a, i = {},
          c = Object.keys(n);
        for (a = 0; a < c.length; a++) e = c[a], t.indexOf(e) >= 0 || (i[e] = n[e]);
        return i
      }(n, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(n);
        for (a = 0; a < c.length; a++) e = c[a], !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(n, e) && (i[e] = n[e])
      }
    }
  }(n, ["earnedOrbsQuantity", "backgroundElementRef", "onClickPill", "ctaOnClick", "linkOnClick", "onClose", "onCloseCallback"]);
  let {
    balance: h
  } = (0, d.A)(), C = async () => {
    await (0, s.j2)(), await o(), l()
  };
  return (0, a.jsxs)(k.E, {
    className: f.coachmarkModalContainer,
    backgroundElementRef: e,
    onGetBoundingRect: u.dG4,
    getOffsetsRelativeToElement: () => ({
      top: 0,
      right: 0
    }),
    minimumOffsets: {
      right: 12
    },
    fallbackAbsoluteOffsets: {
      top: 84,
      right: 32
    },
    children: [(0, a.jsx)(b.A4, {
      onClick: async () => {
        await C(), i()
      },
      balance: h,
      balanceWidgetMode: m.b.DEFAULT
    }), (0, a.jsx)(_, {
      earnedOrbsQuantity: t,
      ctaOnClick: async () => {
        await C(), c()
      },
      linkOnClick: async () => {
        await C(), r()
      }
    })]
  })
}