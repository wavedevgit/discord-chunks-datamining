/** Chunk was on 82081 **/
n.d(t, {
  BalanceWidgetEarnedOrbsCoachmarkModal: () => C,
  E: () => y
});
var r = n(255367);
n(73800);
var a = n(120356),
  o = n.n(a),
  i = n(442837),
  c = n(481060),
  s = n(607070),
  l = n(70097),
  b = n(751648),
  d = n(790542),
  m = n(317257),
  u = n(970815),
  p = n(622562),
  f = n(937860),
  h = n(335346),
  _ = n(981631),
  g = n(388032),
  O = n(806539),
  j = n(293401),
  x = n(447489),
  v = n(484885);
let k = () => {
    let e = (0, i.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, r.jsx)("div", {
      className: j.centerContent,
      children: e ? (0, r.jsx)("img", {
        src: x.Z,
        className: j.orbAsset,
        alt: "Orb"
      }) : (0, r.jsxs)(l.Z, {
        autoPlay: !0,
        loop: !0,
        className: j.orbAsset,
        children: [(0, r.jsx)("source", {
          src: v.Z,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: x.Z,
          className: j.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  y = e => {
    let {
      descriptionText: t = g.intl.string(g.t["6If1Cw"]),
      onClose: n = () => {}
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(j.container, O.baseCardOutline),
      children: [(0, r.jsx)(f.s, {
        onClick: n
      }), (0, r.jsx)(h.V, {
        rightOffset: 20,
        invertTail: !0,
        tailSpineClassName: j.coachmarkTailSpine,
        tailTargetInnerClassName: j.coachmarkTailTargetInner
      }), (0, r.jsx)(k, {}), (0, r.jsx)("div", {
        className: j.contentContainer,
        children: (0, r.jsxs)("div", {
          className: j.textContainer,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            className: j.coachmarkTitle,
            children: g.intl.string(g.t["D/nzVl"])
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: j.coachmarkDescription,
            children: t
          })]
        })
      })]
    })
  };

function C(e) {
  var {
    backgroundElementRef: t,
    onClickPill: n,
    onClose: a,
    onCloseCallback: o
  } = e;
  ! function(e, t) {
    if (null != e) {
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
    }
  }(e, ["backgroundElementRef", "onClickPill", "onClose", "onCloseCallback"]);
  let {
    balance: i
  } = (0, d.A)(), c = async () => {
    await (0, b.j2)(), await a(), o()
  };
  return (0, r.jsxs)(p.E9, {
    className: j.coachmarkModalContainer,
    backgroundElementRef: t,
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
    children: [(0, r.jsx)(u.A4, {
      onClick: async () => {
        await c(), n()
      },
      balance: i,
      balanceWidgetMode: m.b.DEFAULT
    }), (0, r.jsx)(y, {
      onClose: c
    })]
  })
}