/** Chunk was on 57486 **/
/** chunk id: 416162, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869048 = require("./869048.js");
let m = e => {
    let {
      index: t,
      title: i,
      selected: n
    } = e;
    return (0, s.jsxs)("div", {
      className: a()(u.overviewStep, {
        [u.selected]: n
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
  x = e => {
    let {
      className: t,
      title: i,
      stepData: l,
      transitionState: x,
      onClose: f,
      completeButtonText: p,
      overviewFooter: h,
      onNextPressed: b,
      onPrevPressed: v,
      onComplete: g,
      sequencerClassName: N,
      initialStep: j = 0,
      forceStep: C,
      submitting: S = false,
      autoCloseOnComplete: _ = true
    } = e, [I, E] = n.useState([]), [O, T] = n.useState(j), w = (0, c.Dt)();
    n.useEffect(() => {
      E([...Array(l.length).keys()])
    }, [l.length]);
    let y = null != C ? C : O,
      L = l[y],
      R = 0 === y,
      M = y === l.length - 1,
      P = null != p ? p : d.intl.string(d.t.i4jeWV),
      Z = n.useCallback(() => {
        null == v || v(), T(y - 1)
      }, [v, y, T]);
    return (0, s.jsxs)(o.Y0X, {
      size: o.CgR.MEDIUM,
      className: a()(u.container, t),
      transitionState: x,
      "aria-labelledby": w,
      parentComponent: "MultiStepModal",
      children: [(0, s.jsxs)("div", {
        className: u.overviewSidebar,
        children: [(0, s.jsx)(o.X6q, {
          id: w,
          variant: "heading-xl/semibold",
          className: u.header,
          children: i
        }), (0, s.jsx)("div", {
          className: u.overviewSteps,
          children: l.map((e, t) => (0, s.jsx)(m, {
            index: t,
            title: e.overviewTitle,
            selected: t === y
          }, t))
        }), h]
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
            onClick: f,
            className: u.closeButton
          }), (0, s.jsx)(o.qBt, {
            step: y,
            steps: I,
            sideMargin: 24,
            verticalMargin: 24,
            className: a()(u.sequencer, N),
            innerClassName: u.innerSequencer,
            children: L.modalContent
          })]
        }), (0, s.jsxs)(o.mzw, {
          className: u.footer,
          children: [(0, s.jsx)(o.zxk, {
            variant: "active",
            text: M ? P : d.intl.string(d.t.PDTjLC),
            type: "submit",
            loading: S,
            onClick: () => {
              M ? (g(), _ && f()) : (null == b || b(), T(y + 1))
            },
            disabled: L.disableNextStep
          }), R ? null : (0, s.jsx)(r.zx, {
            look: r.zx.Looks.LINK,
            color: r.zx.Colors.PRIMARY,
            size: r.zx.Sizes.MIN,
            onClick: Z,
            children: d.intl.string(d.t["13/7kZ"])
          })]
        })]
      })]
    })
  }