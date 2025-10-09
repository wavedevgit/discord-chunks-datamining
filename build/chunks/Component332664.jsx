/** Chunk was on 47672 **/
/** chunk id: 332664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
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
  Chunk817320 = require("./817320.js");

function R(e) {
  var t;
  let {
    modalType: n,
    header: i,
    body: s,
    problemTitle: R,
    problems: L,
    transitionState: D,
    ratingOptions: I,
    ratingEmojiKind: T,
    ratingTextLabels: j,
    freeformNeededProblems: M = [],
    otherKey: C,
    hideDontShowAgainCheckbox: x,
    startRating: A = null,
    hideHelpDeskLink: P = false,
    onSubmit: y,
    onClose: F,
    impression: $,
    freeformDescription: U
  } = e, k = (0, o.Z)(L), [Z, B] = l.useState(false), [G, H] = l.useState(A), [w, J] = l.useState(null), [Y, K] = l.useState(d().shuffle(L)), [z, Q] = l.useState(""), V = (0, E.Dt)(), X = (0, u.Z)(G), q = (0, u.Z)(Z), W = (0, u.Z)(w), ee = (0, u.Z)(y), et = (0, u.Z)(z), en = null;
  return null == G ? en = "RATING" : G !== g.aZ.GOOD && null == w ? en = "PROBLEM" : null != w && M.includes(w.value) && (en = "FREEFORM"), l.useEffect(() => {
    d().isEqual(k, L) || K((0, h.Bi)(L, C))
  }, [L, k, C]), (0, c.ZP)(() => (f.default.track(_.rMx.OPEN_MODAL, {
    type: n,
    source: "Feedback Modal"
  }), () => {
    ee.current({
      rating: X.current,
      problem: W.current,
      dontShowAgain: q.current,
      feedback: et.current
    })
  })), (0, a.jsxs)(b.Y0X, {
    impression: $,
    transitionState: D,
    className: p.modalRoot,
    "aria-labelledby": V,
    parentComponent: "FeedbackModal",
    children: [(0, a.jsxs)(b.xBx, {
      separator: false,
      className: p.headerContainer,
      children: [(0, a.jsx)(b.Heading, {
        id: V,
        variant: "heading-xl/extrabold",
        color: "none",
        children: i
      }), (0, a.jsx)(b.Text, {
        variant: "text-md/normal",
        color: "none",
        className: p.ratingBody,
        children: s
      })]
    }), ("RATING" === en || "PROBLEM" === en && null == j) && (0, a.jsx)("div", {
      className: r()(p.problemInfo, p.ratingSelectorContainer),
      children: (0, a.jsx)(S.Z, {
        ratingOptions: I,
        emojiKind: T,
        textLabels: j,
        selectedRating: G,
        onChangeRating: function(e) {
          H(e), e === g.aZ.GOOD && F()
        }
      })
    }), "PROBLEM" === en && (0, a.jsx)(b.hzk, {
      children: (0, a.jsx)(b.gNt, {
        label: R,
        children: (0, a.jsx)(v.Z, {
          options: Y,
          onClick: function(e) {
            J(e), M.includes(e.value) || F()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !M.includes(t)
          }
        })
      })
    }), "FREEFORM" === en && (0, a.jsx)(b.hzk, {
      className: p.__invalid_content,
      children: (0, a.jsx)(b.Kx8, {
        label: null != (t = null == U ? true : U(w)) ? t : m.intl.string(m.t.h95hcn),
        helperText: P ? true : m.intl.format(m.t.ybi2tL, {
          helpdeskURL: N.Z.getSubmitRequestURL()
        }),
        value: z,
        maxLength: g.iF,
        onChange: Q
      })
    }), "RATING" === en && !x && (0, a.jsx)(b.mzw, {
      className: p.footer,
      direction: O.Z.Direction.HORIZONTAL,
      children: (0, a.jsx)(b.Checkbox, {
        checked: Z,
        onChange: () => B(!Z),
        label: m.intl.string(m.t["5E9SBw"]),
        labelType: "secondary"
      })
    }), ("FREEFORM" === en || "PROBLEM" === en && null != j) && (0, a.jsx)(b.mzw, {
      className: p.footer,
      direction: O.Z.Direction.HORIZONTAL,
      children: (0, a.jsxs)(b.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(b.Button, {
          variant: "secondary",
          size: "sm",
          text: m.intl.string(m.t["13/7kZ"]),
          onClick: () => {
            "FREEFORM" === en ? (J(null), Q("")) : H(null)
          }
        }), (0, a.jsx)(b.Button, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t.geKm7u),
          onClick: F
        })]
      })
    })]
  })
}