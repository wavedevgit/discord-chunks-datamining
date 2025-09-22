/** Chunk was on 47672 **/
/** chunk id: 332664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
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

function L(e) {
  var t;
  let {
    modalType: n,
    header: i,
    body: s,
    problemTitle: L,
    problems: I,
    transitionState: D,
    ratingOptions: T,
    ratingEmojiKind: x,
    ratingTextLabels: j,
    freeformNeededProblems: M = [],
    otherKey: C,
    hideDontShowAgainCheckbox: A,
    startRating: P = null,
    hideHelpDeskLink: $ = false,
    onSubmit: F,
    onClose: y,
    impression: U,
    freeformDescription: k
  } = e, Z = (0, o.Z)(I), [B, G] = l.useState(false), [w, H] = l.useState(P), [J, z] = l.useState(null), [K, Y] = l.useState(d().shuffle(I)), [Q, V] = l.useState(""), X = (0, O.Dt)(), q = (0, v.Z)(w), W = (0, v.Z)(B), ee = (0, v.Z)(J), et = (0, v.Z)(F), en = (0, v.Z)(Q), ea = null;
  return null == w ? ea = "RATING" : w !== m.aZ.GOOD && null == J ? ea = "PROBLEM" : null != J && M.includes(J.value) && (ea = "FREEFORM"), l.useEffect(() => {
    d().isEqual(Z, I) || Y((0, S.Bi)(I, C))
  }, [I, Z, C]), (0, c.ZP)(() => (N.default.track(_.rMx.OPEN_MODAL, {
    type: n,
    source: "Feedback Modal"
  }), () => {
    et.current({
      rating: q.current,
      problem: ee.current,
      dontShowAgain: W.current,
      feedback: en.current
    })
  })), (0, a.jsxs)(b.Y0X, {
    impression: U,
    transitionState: D,
    className: R.modalRoot,
    "aria-labelledby": X,
    parentComponent: "FeedbackModal",
    children: [(0, a.jsxs)(b.xBx, {
      separator: false,
      className: R.headerContainer,
      children: [(0, a.jsx)(b.X6q, {
        id: X,
        variant: "heading-xl/extrabold",
        color: "none",
        children: i
      }), (0, a.jsx)(b.Text, {
        variant: "text-md/normal",
        color: "none",
        className: R.ratingBody,
        children: s
      })]
    }), ("RATING" === ea || "PROBLEM" === ea && null == j) && (0, a.jsx)("div", {
      className: r()(R.problemInfo, R.ratingSelectorContainer),
      children: (0, a.jsx)(g.Z, {
        ratingOptions: T,
        emojiKind: x,
        textLabels: j,
        selectedRating: w,
        onChangeRating: function(e) {
          H(e), e === m.aZ.GOOD && y()
        }
      })
    }), "PROBLEM" === ea && (0, a.jsx)(b.hzk, {
      className: R.__invalid_content,
      children: (0, a.jsx)(b.xJW, {
        title: L,
        className: r()(R.problemInfo, R.presetList, {
          [R.marginBottom16]: A
        }),
        children: (0, a.jsx)(f.Z, {
          options: K,
          onClick: function(e) {
            z(e), M.includes(e.value) || y()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !M.includes(t)
          }
        })
      })
    }), "FREEFORM" === ea && (0, a.jsx)(b.hzk, {
      className: R.__invalid_content,
      children: (0, a.jsx)(b.Kx8, {
        label: null != (t = null == k ? true : k(J)) ? t : p.intl.string(p.t.h95hcn),
        helperText: $ ? true : p.intl.format(p.t.ybi2tL, {
          helpdeskURL: h.Z.getSubmitRequestURL()
        }),
        value: Q,
        maxLength: m.iF,
        onChange: V
      })
    }), "RATING" === ea && !A && (0, a.jsx)(b.mzw, {
      className: R.footer,
      direction: E.Z.Direction.HORIZONTAL,
      children: (0, a.jsx)(u.$q, {
        type: u.M0.INVERTED,
        size: 18,
        value: B,
        onChange: () => G(!B),
        children: (0, a.jsx)(b.Text, {
          variant: "text-sm/normal",
          children: p.intl.string(p.t["5E9SBw"])
        })
      })
    }), ("FREEFORM" === ea || "PROBLEM" === ea && null != j) && (0, a.jsx)(b.mzw, {
      className: R.footer,
      direction: E.Z.Direction.HORIZONTAL,
      children: (0, a.jsxs)(b.hE2, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(b.zxk, {
          variant: "secondary",
          size: "sm",
          text: p.intl.string(p.t["13/7kZ"]),
          onClick: () => {
            "FREEFORM" === ea ? (z(null), V("")) : H(null)
          }
        }), (0, a.jsx)(b.zxk, {
          variant: "primary",
          size: "sm",
          text: p.intl.string(p.t.geKm7u),
          onClick: y
        })]
      })
    })]
  })
}