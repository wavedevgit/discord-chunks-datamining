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

function R() {
  return (0, Chunk951288.jsx)(Chunk481060.Text, {
    className: Chunk817320.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: Chunk388032.intl.format(Chunk388032.t.ybi2tL, {
      helpdeskURL: Chunk63063.Z.getSubmitRequestURL()
    })
  })
}

function L(e) {
  var t;
  let {
    modalType: n,
    header: i,
    body: s,
    problemTitle: h,
    problems: L,
    transitionState: I,
    ratingOptions: D,
    ratingEmojiKind: T,
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
  } = e, Z = (0, o.Z)(L), [B, G] = l.useState(false), [J, w] = l.useState(P), [H, z] = l.useState(null), [K, Y] = l.useState(d().shuffle(L)), [Q, V] = l.useState(""), X = (0, O.Dt)(), q = (0, v.Z)(J), W = (0, v.Z)(B), ee = (0, v.Z)(H), et = (0, v.Z)(F), en = (0, v.Z)(Q), ea = null;
  return null == J ? ea = "RATING" : J !== m.aZ.GOOD && null == H ? ea = "PROBLEM" : null != H && M.includes(H.value) && (ea = "FREEFORM"), l.useEffect(() => {
    d().isEqual(Z, L) || Y((0, S.Bi)(L, C))
  }, [L, Z, C]), (0, b.ZP)(() => (N.default.track(_.rMx.OPEN_MODAL, {
    type: n,
    source: "Feedback Modal"
  }), () => {
    et.current({
      rating: q.current,
      problem: ee.current,
      dontShowAgain: W.current,
      feedback: en.current
    })
  })), (0, a.jsxs)(c.Y0X, {
    impression: U,
    transitionState: I,
    className: x.modalRoot,
    "aria-labelledby": X,
    parentComponent: "FeedbackModal",
    children: [(0, a.jsxs)(c.xBx, {
      separator: false,
      className: x.headerContainer,
      children: [(0, a.jsx)(c.X6q, {
        id: X,
        variant: "heading-xl/extrabold",
        color: "none",
        children: i
      }), (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "none",
        className: x.ratingBody,
        children: s
      })]
    }), ("RATING" === ea || "PROBLEM" === ea && null == j) && (0, a.jsx)(c.xJW, {
      className: r()(x.problemInfo, x.ratingSelectorContainer),
      children: (0, a.jsx)(g.Z, {
        ratingOptions: D,
        emojiKind: T,
        textLabels: j,
        selectedRating: J,
        onChangeRating: function(e) {
          w(e), e === m.aZ.GOOD && y()
        }
      })
    }), "PROBLEM" === ea && (0, a.jsx)(c.hzk, {
      className: x.__invalid_content,
      children: (0, a.jsx)(c.xJW, {
        title: h,
        className: r()(x.problemInfo, x.presetList, {
          [x.marginBottom16]: A
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
    }), "FREEFORM" === ea && (0, a.jsx)(c.hzk, {
      className: x.__invalid_content,
      children: (0, a.jsxs)(c.xJW, {
        title: null != (t = null == k ? true : k(H)) ? t : p.intl.string(p.t.h95hcn),
        className: x.problemInfo,
        children: [(0, a.jsx)(c.Kx8, {
          value: Q,
          maxLength: m.iF,
          onChange: V
        }), !$ && (0, a.jsx)(R, {})]
      })
    }), "RATING" === ea && !A && (0, a.jsx)(c.mzw, {
      className: x.footer,
      direction: E.Z.Direction.HORIZONTAL,
      children: (0, a.jsx)(u.$q, {
        type: u.M0.INVERTED,
        size: 18,
        value: B,
        onChange: () => G(!B),
        children: (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: p.intl.string(p.t["5E9SBw"])
        })
      })
    }), ("FREEFORM" === ea || "PROBLEM" === ea && null != j) && (0, a.jsx)(c.mzw, {
      className: x.footer,
      direction: E.Z.Direction.HORIZONTAL,
      children: (0, a.jsxs)(c.hE2, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(c.zxk, {
          variant: "secondary",
          size: "sm",
          text: p.intl.string(p.t["13/7kZ"]),
          onClick: () => {
            "FREEFORM" === ea ? (z(null), V("")) : w(null)
          }
        }), (0, a.jsx)(c.zxk, {
          variant: "primary",
          size: "sm",
          text: p.intl.string(p.t.geKm7u),
          onClick: y
        })]
      })
    })]
  })
}