/** Chunk was on 47672 **/
/** chunk id: 332664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk237617 = require("./237617.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk957115 = require("./957115.js"),
  Chunk764920 = require("./764920.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817320 = require("./817320.js");

function x() {
  return (0, Chunk255367.jsx)(Chunk481060.Text, {
    className: Chunk817320.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: Chunk388032.intl.format(Chunk388032.t.ybi2tL, {
      helpdeskURL: Chunk63063.Z.getSubmitRequestURL()
    })
  })
}

function R(e) {
  var t;
  let {
    modalType: n,
    header: i,
    body: s,
    problemTitle: h,
    problems: R,
    transitionState: L,
    ratingOptions: T,
    ratingEmojiKind: j,
    ratingTextLabels: D,
    freeformNeededProblems: I = [],
    otherKey: C,
    hideDontShowAgainCheckbox: M,
    startRating: A = null,
    hideHelpDeskLink: P = false,
    onSubmit: y,
    onClose: F,
    impression: $,
    freeformDescription: k
  } = e, U = (0, b.Z)(R), [Z, B] = l.useState(false), [G, J] = l.useState(A), [w, H] = l.useState(null), [z, K] = l.useState(d().shuffle(R)), [Y, X] = l.useState(""), Q = (0, E.Dt)(), V = (0, O.Z)(G), W = (0, O.Z)(Z), q = (0, O.Z)(w), ee = (0, O.Z)(y), et = (0, O.Z)(Y), en = null;
  return null == G ? en = "RATING" : G !== m.aZ.GOOD && null == w ? en = "PROBLEM" : null != w && I.includes(w.value) && (en = "FREEFORM"), l.useEffect(() => {
    d().isEqual(U, R) || K((0, N.Bi)(R, C))
  }, [R, U, C]), (0, c.ZP)(() => (f.default.track(g.rMx.OPEN_MODAL, {
    type: n,
    source: "Feedback Modal"
  }), () => {
    ee.current({
      rating: V.current,
      problem: q.current,
      dontShowAgain: W.current,
      feedback: et.current
    })
  })), (0, a.jsxs)(u.Y0X, {
    impression: $,
    transitionState: L,
    className: p.modalRoot,
    "aria-labelledby": Q,
    parentComponent: "FeedbackModal",
    children: [(0, a.jsxs)(u.xBx, {
      separator: false,
      className: p.headerContainer,
      children: [(0, a.jsx)(u.X6q, {
        id: Q,
        variant: "heading-xl/extrabold",
        color: "none",
        children: i
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "none",
        className: p.ratingBody,
        children: s
      })]
    }), ("RATING" === en || "PROBLEM" === en && null == D) && (0, a.jsx)(u.xJW, {
      className: r()(p.problemInfo, p.ratingSelectorContainer),
      children: (0, a.jsx)(S.Z, {
        ratingOptions: T,
        emojiKind: j,
        textLabels: D,
        selectedRating: G,
        onChangeRating: function(e) {
          J(e), e === m.aZ.GOOD && F()
        }
      })
    }), "PROBLEM" === en && (0, a.jsx)(u.hzk, {
      className: p.__invalid_content,
      children: (0, a.jsx)(u.xJW, {
        title: h,
        className: r()(p.problemInfo, p.presetList, {
          [p.marginBottom16]: M
        }),
        children: (0, a.jsx)(v.Z, {
          options: z,
          onClick: function(e) {
            H(e), I.includes(e.value) || F()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !I.includes(t)
          }
        })
      })
    }), "FREEFORM" === en && (0, a.jsx)(u.hzk, {
      className: p.__invalid_content,
      children: (0, a.jsxs)(u.xJW, {
        title: null != (t = null == k ? true : k(w)) ? t : _.intl.string(_.t.h95hcn),
        className: p.problemInfo,
        children: [(0, a.jsx)(u.Kx8, {
          value: Y,
          maxLength: m.iF,
          onChange: X
        }), !P && (0, a.jsx)(x, {})]
      })
    }), "RATING" === en && !M && (0, a.jsx)(u.mzw, {
      className: p.footer,
      direction: o.Z.Direction.HORIZONTAL,
      children: (0, a.jsx)(u.XZJ, {
        type: u.XZJ.Types.INVERTED,
        size: 18,
        value: Z,
        onChange: () => B(!Z),
        children: (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: _.intl.string(_.t["5E9SBw"])
        })
      })
    }), ("FREEFORM" === en || "PROBLEM" === en && null != D) && (0, a.jsx)(u.mzw, {
      className: p.footer,
      direction: o.Z.Direction.HORIZONTAL,
      children: (0, a.jsxs)(u.hE2, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(u.zxk, {
          variant: "secondary",
          size: "sm",
          text: _.intl.string(_.t["13/7kZ"]),
          onClick: () => {
            "FREEFORM" === en ? (H(null), X("")) : J(null)
          }
        }), (0, a.jsx)(u.zxk, {
          variant: "primary",
          size: "sm",
          text: _.intl.string(_.t.geKm7u),
          onClick: F
        })]
      })
    })]
  })
}