/** Chunk was on 57486 **/
/** chunk id: 513796, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk918587 = require("./918587.js");
let x = e => {
    let {
      index: t,
      title: i,
      selected: l
    } = e;
    return (0, s.jsxs)("div", {
      className: a()(u.overviewStep, {
        [u.selected]: l
      }),
      children: [(0, s.jsx)(o.Text, {
        className: u.stepIndex,
        variant: "text-sm/normal",
        children: t + 1
      }), (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        className: u.stepTitle,
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
      onClose: h,
      completeButtonText: g,
      overviewFooter: p,
      onNextPressed: f,
      onPrevPressed: v,
      onComplete: j,
      sequencerClassName: N,
      initialStep: b = 0,
      forceStep: C,
      submitting: S = false,
      autoCloseOnComplete: E = true
    } = e, [I, O] = l.useState([]), [M, L] = l.useState(b), w = (0, c.Dt)();
    l.useEffect(() => {
      O([...Array(n.length).keys()])
    }, [n.length]);
    let y = null != C ? C : M,
      _ = n[y],
      P = 0 === y,
      T = y === n.length - 1,
      k = null != g ? g : d.intl.string(d.t.i4jeWV),
      A = l.useCallback(() => {
        null == v || v(), L(y - 1)
      }, [v, y, L]);
    return (0, s.jsxs)(o.Y0X, {
      size: o.CgR.MEDIUM,
      className: a()(u.container, t),
      transitionState: m,
      "aria-labelledby": w,
      parentComponent: "MultiStepModal",
      children: [(0, s.jsxs)("div", {
        className: u.overviewSidebar,
        children: [(0, s.jsx)(o.Heading, {
          id: w,
          variant: "heading-xl/semibold",
          className: u.header,
          children: i
        }), (0, s.jsx)("div", {
          className: u.overviewSteps,
          children: n.map((e, t) => (0, s.jsx)(x, {
            index: t,
            title: e.overviewTitle,
            selected: t === y
          }, t))
        }), p]
      }), (0, s.jsxs)("div", {
        className: u.modal,
        children: [(0, s.jsxs)(o.hzk, {
          children: [(0, s.jsx)(o.olH, {
            focusProps: {
              offset: {
                top: 4,
                right: 4,
                left: 4
              }
            },
            onClick: h,
            className: u.closeButton
          }), (0, s.jsx)(o.qBt, {
            step: y,
            steps: I,
            sideMargin: 24,
            verticalMargin: 24,
            className: a()(u.sequencer, N),
            innerClassName: u.innerSequencer,
            children: _.modalContent
          })]
        }), (0, s.jsxs)(o.mzw, {
          className: u.footer,
          children: [(0, s.jsx)(o.Button, {
            variant: "active",
            text: T ? k : d.intl.string(d.t.PDTjLC),
            type: "submit",
            loading: S,
            onClick: () => {
              T ? (j(), E && h()) : (null == f || f(), L(y + 1))
            },
            disabled: _.disableNextStep
          }), P ? null : (0, s.jsx)(r.zx, {
            look: r.zx.Looks.LINK,
            color: r.zx.Colors.PRIMARY,
            size: r.zx.Sizes.MIN,
            onClick: A,
            children: d.intl.string(d.t["13/7kZ"])
          })]
        })]
      })]
    })
  }