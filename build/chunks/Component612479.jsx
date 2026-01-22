/** Chunk was on 26484 **/
/** chunk id: 612479, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  d = require.n(Chunk735438),
  Chunk66455 = require("./66455.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk475743 = require("./475743.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk124480 = require("./124480.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk930932 = require("./930932.js"),
  Chunk321563 = require("./321563.jsx"),
  Chunk670455 = require("./670455.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk768919 = require("./768919.js");

function A(e) {
  var t;
  let {
    modalType: l,
    header: i,
    body: s,
    problemTitle: A,
    problems: R,
    transitionState: _,
    ratingOptions: m,
    ratingEmojiKind: D,
    ratingTextLabels: L,
    freeformNeededProblems: I = [],
    otherKey: T,
    hideDontShowAgainCheckbox: C,
    startRating: V = null,
    hideHelpDeskLink: x = false,
    onSubmit: y,
    onClose: P,
    impression: F,
    freeformDescription: M
  } = e, G = (0, E.A)(R), [k, H] = a.useState(false), [B, w] = a.useState(V), [X, K] = a.useState(null), [Y, q] = a.useState(d().shuffle(R)), [Q, z] = a.useState(""), Z = (0, o.GV)(), W = (0, u.A)(B), J = (0, u.A)(k), $ = (0, u.A)(X), ee = (0, u.A)(y), et = (0, u.A)(Q), el = null;
  return null == B ? el = "RATING" : B !== U.P0.GOOD && null == X ? el = "PROBLEM" : null != X && I.includes(X.value) && (el = "FREEFORM"), a.useEffect(() => {
    d().isEqual(G, R) || q((0, h.ed)(R, T))
  }, [R, G, T]), (0, b.Ay)(() => (f.default.track(g.HAw.OPEN_MODAL, {
    type: l,
    source: "Feedback Modal"
  }), () => {
    ee.current({
      rating: W.current,
      problem: $.current,
      dontShowAgain: J.current,
      feedback: et.current
    })
  })), (0, n.jsxs)(O.EOs, {
    impression: F,
    transitionState: _,
    className: p.CR,
    "aria-labelledby": Z,
    parentComponent: "FeedbackModal",
    children: [(0, n.jsxs)(O.rQ0, {
      separator: false,
      className: p.N1,
      children: [(0, n.jsx)(O.Heading, {
        id: Z,
        variant: "heading-xl/extrabold",
        color: "none",
        children: i
      }), (0, n.jsx)(O.Text, {
        variant: "text-md/normal",
        color: "none",
        className: p.sB,
        children: s
      })]
    }), ("RATING" === el || "PROBLEM" === el && null == L) && (0, n.jsx)("div", {
      className: r()(p.OS, p.Ko),
      children: (0, n.jsx)(S.A, {
        ratingOptions: m,
        emojiKind: D,
        textLabels: L,
        selectedRating: B,
        onChangeRating: function(e) {
          w(e), e === U.P0.GOOD && P()
        }
      })
    }), "PROBLEM" === el && (0, n.jsx)(O.$mQ, {
      children: (0, n.jsx)(O.D0$, {
        label: A,
        children: (0, n.jsx)(v.A, {
          options: Y,
          onClick: function(e) {
            K(e), I.includes(e.value) || P()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !I.includes(t)
          }
        })
      })
    }), "FREEFORM" === el && (0, n.jsx)(O.$mQ, {
      className: p.__invalid_content,
      children: (0, n.jsx)(O.fs1, {
        label: null != (t = null == M ? true : M(X)) ? t : j.intl.string(j.t.h95hcn),
        helperText: x ? true : j.intl.format(j.t.ybi2tD, {
          helpdeskURL: N.A.getSubmitRequestURL()
        }),
        value: Q,
        maxLength: U.u0,
        onChange: z
      })
    }), "RATING" === el && !C && (0, n.jsx)(O.jlY, {
      className: p.qr,
      direction: c.A.Direction.HORIZONTAL,
      children: (0, n.jsx)(O.Checkbox, {
        checked: k,
        onChange: () => H(!k),
        label: j.intl.string(j.t["5E9SB9"]),
        labelType: "secondary"
      })
    }), ("FREEFORM" === el || "PROBLEM" === el && null != L) && (0, n.jsx)(O.jlY, {
      className: p.qr,
      direction: c.A.Direction.HORIZONTAL,
      children: (0, n.jsxs)(O.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, n.jsx)(O.Button, {
          variant: "secondary",
          size: "sm",
          text: j.intl.string(j.t["13/7kX"]),
          onClick: () => {
            "FREEFORM" === el ? (K(null), z("")) : w(null)
          }
        }), (0, n.jsx)(O.Button, {
          variant: "primary",
          size: "sm",
          text: j.intl.string(j.t.geKm7t),
          onClick: P
        })]
      })
    })]
  })
}