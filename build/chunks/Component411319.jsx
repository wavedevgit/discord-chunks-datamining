/** Chunk was on 92853 **/
/** chunk id: 411319, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk65943 = require("./65943.js");
let u = e => {
    let {
      index: t,
      title: i,
      selected: l
    } = e;
    return (0, s.jsxs)("div", {
      className: a()(x.wJ, {
        [x.wH]: l
      }),
      children: [(0, s.jsx)(c.Text, {
        className: x.BM,
        variant: "text-sm/normal",
        children: t + 1
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        className: x.Fb,
        children: i
      })]
    })
  },
  m = e => {
    let {
      className: t,
      title: i,
      stepData: n,
      transitionState: m,
      onClose: b,
      completeButtonText: f,
      overviewFooter: h,
      onNextPressed: p,
      onPrevPressed: g,
      onComplete: j,
      sequencerClassName: v,
      initialStep: N = 0,
      forceStep: C,
      submitting: _ = false,
      autoCloseOnComplete: A = true
    } = e, [E, S] = l.useState([]), [I, M] = l.useState(N), L = (0, d.GV)();
    l.useEffect(() => {
      S([...Array(n.length).keys()])
    }, [n.length]);
    let y = null != C ? C : I,
      O = n[y],
      w = 0 === y,
      P = y === n.length - 1,
      k = null != f ? f : o.intl.string(o.t.i4jeWR),
      G = l.useCallback(() => {
        null == g || g(), M(y - 1)
      }, [g, y, M]);
    return (0, s.jsxs)(c.EOs, {
      size: c.rIJ.MEDIUM,
      className: a()(x.kL, t),
      transitionState: m,
      "aria-labelledby": L,
      parentComponent: "MultiStepModal",
      children: [(0, s.jsxs)("div", {
        className: x.A0,
        children: [(0, s.jsx)(c.Heading, {
          id: L,
          variant: "heading-xl/semibold",
          className: x.wx,
          children: i
        }), (0, s.jsx)("div", {
          className: x.Ji,
          children: n.map((e, t) => (0, s.jsx)(u, {
            index: t,
            title: e.overviewTitle,
            selected: t === y
          }, t))
        }), h]
      }), (0, s.jsxs)("div", {
        className: x.yl,
        children: [(0, s.jsxs)(c.$mQ, {
          children: [(0, s.jsx)(c.s_y, {
            focusProps: {
              offset: {
                top: 4,
                right: 4,
                left: 4
              }
            },
            onClick: b,
            className: x.b
          }), (0, s.jsx)(c.YC2, {
            step: y,
            steps: E,
            sideMargin: 24,
            verticalMargin: 24,
            className: a()(x.C9, v),
            innerClassName: x.C,
            children: O.modalContent
          })]
        }), (0, s.jsxs)(c.jlY, {
          className: x.qr,
          children: [(0, s.jsx)(c.Button, {
            variant: "active",
            text: P ? k : o.intl.string(o.t.PDTjLN),
            type: "submit",
            loading: _,
            onClick: () => {
              P ? (j(), A && b()) : (null == p || p(), M(y + 1))
            },
            disabled: O.disableNextStep
          }), w ? null : (0, s.jsx)(r.$n, {
            look: r.$n.Looks.LINK,
            color: r.$n.Colors.PRIMARY,
            size: r.$n.Sizes.MIN,
            onClick: G,
            children: o.intl.string(o.t["13/7kX"])
          })]
        })]
      })]
    })
  }