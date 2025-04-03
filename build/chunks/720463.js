/** Chunk was on 82081 **/
n.d(t, {
  BalanceWidgetEarnedOrbsCoachmarkModal: () => N,
  E: () => C
});
var r = n(200651);
n(192379);
var o = n(120356),
  a = n.n(o),
  i = n(442837),
  s = n(481060),
  c = n(607070),
  l = n(70097),
  u = n(751648),
  d = n(790542),
  b = n(317257),
  m = n(970815),
  f = n(622562),
  p = n(432792),
  h = n(937860),
  g = n(981631),
  _ = n(388032),
  O = n(806539),
  j = n(293401),
  v = n(447489),
  x = n(484885);
let y = () => {
    let e = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, r.jsx)("div", {
      className: j.centerContent,
      children: e ? (0, r.jsx)("img", {
        src: v.Z,
        className: j.orbAsset,
        alt: "Orb"
      }) : (0, r.jsxs)(l.Z, {
        autoPlay: !0,
        loop: !0,
        className: j.orbAsset,
        children: [(0, r.jsx)("source", {
          src: x.Z,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: v.Z,
          className: j.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  C = e => {
    let {
      descriptionText: t = _.NW.string(_.t["6If1Cw"]),
      onClose: n = () => {}
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(j.container, O.baseCardOutline),
      children: [(0, r.jsx)(h.s, {
        onClick: n
      }), (0, r.jsx)(p.VK, {
        rightOffset: 20,
        invertTail: !0,
        tailSpineClassName: j.coachmarkTailSpine,
        tailTargetInnerClassName: j.coachmarkTailTargetInner
      }), (0, r.jsx)(y, {}), (0, r.jsx)("div", {
        className: j.contentContainer,
        children: (0, r.jsxs)("div", {
          className: j.textContainer,
          children: [(0, r.jsx)(s.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            className: j.coachmarkTitle,
            children: _.NW.string(_.t["D/nzVl"])
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            className: j.coachmarkDescription,
            children: t
          })]
        })
      })]
    })
  };

function N(e) {
  var {
    backgroundElementRef: t,
    onClickPill: n,
    onClose: o,
    onCloseCallback: a
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
  }(e, ["backgroundElementRef", "onClickPill", "onClose", "onCloseCallback"]);
  let {
    balance: i
  } = (0, d.A)(), s = async () => {
    await (0, u.j2)(), await o(), a()
  };
  return (0, r.jsxs)(f.E9, {
    className: j.coachmarkModalContainer,
    backgroundElementRef: t,
    onGetBoundingRect: g.dG4,
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
    children: [(0, r.jsx)(m.A4, {
      onClick: async () => {
        await s(), n()
      },
      balance: i,
      balanceWidgetMode: b.b.DEFAULT
    }), (0, r.jsx)(C, {
      onClose: s
    })]
  })
}