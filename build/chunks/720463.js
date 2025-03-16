/** Chunk was on 82081 **/
n.d(t, {
  BalanceWidgetEarnedOrbsCoachmarkModal: () => N,
  E: () => y
});
var r = n(200651);
n(192379);
var o = n(120356),
  a = n.n(o),
  i = n(568611),
  s = n(442837),
  c = n(693789),
  l = n(481060),
  d = n(607070),
  b = n(70097),
  u = n(751648),
  f = n(790542),
  m = n(317257),
  p = n(970815),
  h = n(622562),
  O = n(432792),
  _ = n(981631),
  g = n(388032),
  x = n(803812),
  j = n(981987),
  k = n(447489),
  v = n(484885);
let C = () => {
    let e = (0, s.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)("div", {
      className: j.centerContent,
      children: e ? (0, r.jsx)("img", {
        src: k.Z,
        className: j.orbAsset,
        alt: "Orb"
      }) : (0, r.jsxs)(b.Z, {
        autoPlay: !0,
        loop: !0,
        className: j.orbAsset,
        children: [(0, r.jsx)("source", {
          src: v.Z,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: k.Z,
          className: j.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  y = e => {
    let {
      earnedOrbsQuantity: t,
      descriptionText: n = g.NW.string(g.t["4YgBe3"]),
      ctaText: o = g.NW.string(g.t.WYchdX),
      linkText: s = g.NW.string(g.t["H57f4+"]),
      ctaOnClick: d,
      linkOnClick: b,
      linkTo: u
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(j.container, x.baseCardOutline),
      children: [(0, r.jsx)(O.VK, {
        rightOffset: 20,
        invertTail: !0
      }), (0, r.jsx)(C, {}), (0, r.jsxs)("div", {
        className: j.contentContainer,
        children: [(0, r.jsxs)("div", {
          className: j.textContainer,
          children: [(0, r.jsx)(l.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            className: j.coachmarkTitle,
            children: g.NW.format(g.t.lA7CLi, {
              quantity: t
            })
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            className: j.coachmarkDescription,
            children: n
          })]
        }), (0, r.jsx)(c.zx, {
          className: j.ctaButton,
          color: c.zx.Colors.BRAND,
          look: c.zx.Looks.FILLED,
          onClick: d,
          fullWidth: !0,
          children: o
        }), (0, r.jsx)(i.rU, {
          to: {
            pathname: u
          },
          onClick: b,
          children: (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            className: j.link,
            children: s
          })
        })]
      })]
    })
  };

function N(e) {
  var {
    earnedOrbsQuantity: t,
    backgroundElementRef: n,
    onClickPill: o,
    ctaOnClick: a,
    linkOnClick: i,
    onClose: s,
    onCloseCallback: c
  } = e;
  ! function(e, t) {
    if (null != e) {
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
    }
  }(e, ["earnedOrbsQuantity", "backgroundElementRef", "onClickPill", "ctaOnClick", "linkOnClick", "onClose", "onCloseCallback"]);
  let {
    balance: l
  } = (0, f.A)(), d = async () => {
    await (0, u.j2)(), await s(), c()
  };
  return (0, r.jsxs)(h.E, {
    className: j.coachmarkModalContainer,
    backgroundElementRef: n,
    onGetBoundingRect: _.dG4,
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
    children: [(0, r.jsx)(p.A4, {
      onClick: async () => {
        await d(), o()
      },
      balance: l,
      balanceWidgetMode: m.b.DEFAULT
    }), (0, r.jsx)(y, {
      earnedOrbsQuantity: t,
      ctaOnClick: async () => {
        await d(), a()
      },
      linkOnClick: async () => {
        await d(), i()
      }
    })]
  })
}