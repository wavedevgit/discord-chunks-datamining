/** Chunk was on 51218 **/
/** chunk id: 962145, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975101 = require("./975101.js");
let m = e => {
    let {
      index: t,
      title: i,
      selected: n
    } = e;
    return (0, l.jsxs)("div", {
      className: a()(u.overviewStep, {
        [u.selected]: n
      }),
      children: [(0, l.jsx)(c.Text, {
        className: u.stepIndex,
        variant: "text-sm/normal",
        children: t + 1
      }), (0, l.jsx)(c.Text, {
        variant: "text-md/normal",
        className: u.stepTitle,
        children: i
      })]
    })
  },
  b = e => {
    let {
      className: t,
      title: i,
      stepData: s,
      transitionState: b,
      onClose: x,
      completeButtonText: h,
      overviewFooter: p,
      onNextPressed: g,
      onPrevPressed: f,
      onComplete: v,
      sequencerClassName: N,
      initialStep: j = 0,
      forceStep: C,
      submitting: S = false,
      autoCloseOnComplete: I = true
    } = e, [E, _] = n.useState([]), [w, O] = n.useState(j), L = (0, o.Dt)();
    n.useEffect(() => {
      _([...Array(s.length).keys()])
    }, [s.length]);
    let M = null != C ? C : w,
      y = s[M],
      P = 0 === M,
      T = M === s.length - 1,
      k = null != h ? h : d.intl.string(d.t.i4jeWR),
      R = n.useCallback(() => {
        null == f || f(), O(M - 1)
      }, [f, M, O]);
    return (0, l.jsxs)(c.Y0X, {
      size: c.CgR.MEDIUM,
      className: a()(u.container, t),
      transitionState: b,
      "aria-labelledby": L,
      parentComponent: "MultiStepModal",
      children: [(0, l.jsxs)("div", {
        className: u.overviewSidebar,
        children: [(0, l.jsx)(c.Heading, {
          id: L,
          variant: "heading-xl/semibold",
          className: u.header,
          children: i
        }), (0, l.jsx)("div", {
          className: u.overviewSteps,
          children: s.map((e, t) => (0, l.jsx)(m, {
            index: t,
            title: e.overviewTitle,
            selected: t === M
          }, t))
        }), p]
      }), (0, l.jsxs)("div", {
        className: u.modal,
        children: [(0, l.jsxs)(c.hzk, {
          children: [(0, l.jsx)(c.olH, {
            focusProps: {
              offset: {
                top: 4,
                right: 4,
                left: 4
              }
            },
            onClick: x,
            className: u.closeButton
          }), (0, l.jsx)(c.qBt, {
            step: M,
            steps: E,
            sideMargin: 24,
            verticalMargin: 24,
            className: a()(u.sequencer, N),
            innerClassName: u.innerSequencer,
            children: y.modalContent
          })]
        }), (0, l.jsxs)(c.mzw, {
          className: u.footer,
          children: [(0, l.jsx)(c.Button, {
            variant: "active",
            text: T ? k : d.intl.string(d.t.PDTjLN),
            type: "submit",
            loading: S,
            onClick: () => {
              T ? (v(), I && x()) : (null == g || g(), O(M + 1))
            },
            disabled: y.disableNextStep
          }), P ? null : (0, l.jsx)(r.zx, {
            look: r.zx.Looks.LINK,
            color: r.zx.Colors.PRIMARY,
            size: r.zx.Sizes.MIN,
            onClick: R,
            children: d.intl.string(d.t["13/7kX"])
          })]
        })]
      })]
    })
  }