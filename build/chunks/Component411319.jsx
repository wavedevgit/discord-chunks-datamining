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
let x = e => {
    let {
      index: t,
      title: i,
      selected: l
    } = e;
    return (0, s.jsxs)("div", {
      className: a()(u.wJ, {
        [u.wH]: l
      }),
      children: [(0, s.jsx)(o.Text, {
        className: u.BM,
        variant: "text-sm/normal",
        children: t + 1
      }), (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        className: u.Fb,
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
      onClose: p,
      completeButtonText: h,
      overviewFooter: b,
      onNextPressed: g,
      onPrevPressed: v,
      onComplete: j,
      sequencerClassName: f,
      initialStep: N = 0,
      forceStep: _,
      submitting: C = false,
      autoCloseOnComplete: S = true
    } = e, [A, E] = l.useState([]), [I, M] = l.useState(N), L = (0, d.GV)();
    l.useEffect(() => {
      E([...Array(n.length).keys()])
    }, [n.length]);
    let y = null != _ ? _ : I,
      w = n[y],
      O = 0 === y,
      P = y === n.length - 1,
      k = null != h ? h : c.intl.string(c.t.i4jeWR),
      T = l.useCallback(() => {
        null == v || v(), M(y - 1)
      }, [v, y, M]);
    return (0, s.jsxs)(o.EOs, {
      size: o.rIJ.MEDIUM,
      className: a()(u.kL, t),
      transitionState: m,
      "aria-labelledby": L,
      parentComponent: "MultiStepModal",
      children: [(0, s.jsxs)("div", {
        className: u.A0,
        children: [(0, s.jsx)(o.Heading, {
          id: L,
          variant: "heading-xl/semibold",
          className: u.wx,
          children: i
        }), (0, s.jsx)("div", {
          className: u.Ji,
          children: n.map((e, t) => (0, s.jsx)(x, {
            index: t,
            title: e.overviewTitle,
            selected: t === y
          }, t))
        }), b]
      }), (0, s.jsxs)("div", {
        className: u.yl,
        children: [(0, s.jsxs)(o.$mQ, {
          children: [(0, s.jsx)(o.s_y, {
            focusProps: {
              offset: {
                top: 4,
                right: 4,
                left: 4
              }
            },
            onClick: p,
            className: u.b
          }), (0, s.jsx)(o.YC2, {
            step: y,
            steps: A,
            sideMargin: 24,
            verticalMargin: 24,
            className: a()(u.C9, f),
            innerClassName: u.C,
            children: w.modalContent
          })]
        }), (0, s.jsxs)(o.jlY, {
          className: u.qr,
          children: [(0, s.jsx)(o.Button, {
            variant: "active",
            text: P ? k : c.intl.string(c.t.PDTjLN),
            type: "submit",
            loading: C,
            onClick: () => {
              P ? (j(), S && p()) : (null == g || g(), M(y + 1))
            },
            disabled: w.disableNextStep
          }), O ? null : (0, s.jsx)(r.$n, {
            look: r.$n.Looks.LINK,
            color: r.$n.Colors.PRIMARY,
            size: r.$n.Sizes.MIN,
            onClick: T,
            children: c.intl.string(c.t["13/7kX"])
          })]
        })]
      })]
    })
  }