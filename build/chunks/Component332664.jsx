/** Chunk was on 47672 **/
/** chunk id: 332664, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk872175 = require("./872175.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk957115 = require("./957115.js"),
  Chunk764920 = require("./764920.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk652395 = require("./652395.js");

function L(e) {
  var t;
  let {
    modalType: a,
    header: i,
    body: s,
    problemTitle: L,
    problems: R,
    transitionState: I,
    ratingOptions: D,
    ratingEmojiKind: T,
    ratingTextLabels: j,
    freeformNeededProblems: x = [],
    otherKey: M,
    hideDontShowAgainCheckbox: C,
    startRating: A = null,
    hideHelpDeskLink: P = false,
    onSubmit: y,
    onClose: F,
    impression: $,
    freeformDescription: U
  } = e, k = (0, o.Z)(R), [Z, B] = l.useState(false), [G, H] = l.useState(A), [J, w] = l.useState(null), [z, Y] = l.useState(d().shuffle(R)), [K, X] = l.useState(""), Q = (0, O.Dt)(), V = (0, u.Z)(G), q = (0, u.Z)(Z), W = (0, u.Z)(J), ee = (0, u.Z)(y), et = (0, u.Z)(K), ea = null;
  return null == G ? ea = "RATING" : G !== g.aZ.GOOD && null == J ? ea = "PROBLEM" : null != J && x.includes(J.value) && (ea = "FREEFORM"), l.useEffect(() => {
    d().isEqual(k, R) || Y((0, h.Bi)(R, M))
  }, [R, k, M]), (0, c.ZP)(() => (f.default.track(_.rMx.OPEN_MODAL, {
    type: a,
    source: "Feedback Modal"
  }), () => {
    ee.current({
      rating: V.current,
      problem: W.current,
      dontShowAgain: q.current,
      feedback: et.current
    })
  })), (0, n.jsxs)(b.Y0X, {
    impression: $,
    transitionState: I,
    className: p.modalRoot,
    "aria-labelledby": Q,
    parentComponent: "FeedbackModal",
    children: [(0, n.jsxs)(b.xBx, {
      separator: false,
      className: p.headerContainer,
      children: [(0, n.jsx)(b.X6q, {
        id: Q,
        variant: "heading-xl/extrabold",
        color: "none",
        children: i
      }), (0, n.jsx)(b.Text, {
        variant: "text-md/normal",
        color: "none",
        className: p.ratingBody,
        children: s
      })]
    }), ("RATING" === ea || "PROBLEM" === ea && null == j) && (0, n.jsx)("div", {
      className: r()(p.problemInfo, p.ratingSelectorContainer),
      children: (0, n.jsx)(S.Z, {
        ratingOptions: D,
        emojiKind: T,
        textLabels: j,
        selectedRating: G,
        onChangeRating: function(e) {
          H(e), e === g.aZ.GOOD && F()
        }
      })
    }), "PROBLEM" === ea && (0, n.jsx)(b.hzk, {
      className: p.__invalid_content,
      children: (0, n.jsx)(b.xJW, {
        title: L,
        className: r()(p.problemInfo, p.presetList, {
          [p.marginBottom16]: C
        }),
        children: (0, n.jsx)(v.Z, {
          options: z,
          onClick: function(e) {
            w(e), x.includes(e.value) || F()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !x.includes(t)
          }
        })
      })
    }), "FREEFORM" === ea && (0, n.jsx)(b.hzk, {
      className: p.__invalid_content,
      children: (0, n.jsx)(b.Kx8, {
        label: null != (t = null == U ? true : U(J)) ? t : m.intl.string(m.t.h95hcn),
        helperText: P ? true : m.intl.format(m.t.ybi2tL, {
          helpdeskURL: N.Z.getSubmitRequestURL()
        }),
        value: K,
        maxLength: g.iF,
        onChange: X
      })
    }), "RATING" === ea && !C && (0, n.jsx)(b.mzw, {
      className: p.footer,
      direction: E.Z.Direction.HORIZONTAL,
      children: (0, n.jsx)(b.XZJ, {
        checked: Z,
        onChange: () => B(!Z),
        label: m.intl.string(m.t["5E9SBw"]),
        labelType: "secondary"
      })
    }), ("FREEFORM" === ea || "PROBLEM" === ea && null != j) && (0, n.jsx)(b.mzw, {
      className: p.footer,
      direction: E.Z.Direction.HORIZONTAL,
      children: (0, n.jsxs)(b.hE2, {
        direction: "horizontal-reverse",
        children: [(0, n.jsx)(b.zxk, {
          variant: "secondary",
          size: "sm",
          text: m.intl.string(m.t["13/7kZ"]),
          onClick: () => {
            "FREEFORM" === ea ? (w(null), X("")) : H(null)
          }
        }), (0, n.jsx)(b.zxk, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t.geKm7u),
          onClick: F
        })]
      })
    })]
  })
}