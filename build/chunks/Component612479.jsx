/** Chunk was on 26484 **/
/** chunk id: 612479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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

function m(e) {
  var t;
  let {
    modalType: n,
    header: i,
    body: d,
    problemTitle: m,
    problems: A,
    transitionState: R,
    ratingOptions: _,
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
  } = e, G = (0, E.A)(A), [k, H] = l.useState(false), [B, w] = l.useState(V), [X, K] = l.useState(null), [Y, q] = l.useState(s().shuffle(A)), [Q, z] = l.useState(""), Z = (0, o.GV)(), W = (0, u.A)(B), J = (0, u.A)(k), $ = (0, u.A)(X), ee = (0, u.A)(y), et = (0, u.A)(Q), en = null;
  return null == B ? en = "RATING" : B !== S.P0.GOOD && null == X ? en = "PROBLEM" : null != X && I.includes(X.value) && (en = "FREEFORM"), l.useEffect(() => {
    s().isEqual(G, A) || q((0, N.ed)(A, T))
  }, [A, G, T]), (0, b.Ay)(() => (f.default.track(U.HAw.OPEN_MODAL, {
    type: n,
    source: "Feedback Modal"
  }), () => {
    ee.current({
      rating: W.current,
      problem: $.current,
      dontShowAgain: J.current,
      feedback: et.current
    })
  })), (0, a.jsxs)(O.EOs, {
    "data-migration-pending": true,
    impression: F,
    transitionState: R,
    className: j.CR,
    "aria-labelledby": Z,
    parentComponent: "FeedbackModal",
    children: [(0, a.jsxs)(O.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: j.N1,
      children: [(0, a.jsx)(O.Heading, {
        id: Z,
        variant: "heading-xl/extrabold",
        color: "none",
        children: i
      }), (0, a.jsx)(O.Text, {
        variant: "text-md/normal",
        color: "none",
        className: j.sB,
        children: d
      })]
    }), ("RATING" === en || "PROBLEM" === en && null == L) && (0, a.jsx)("div", {
      className: r()(j.OS, j.Ko),
      children: (0, a.jsx)(h.A, {
        ratingOptions: _,
        emojiKind: D,
        textLabels: L,
        selectedRating: B,
        onChangeRating: function(e) {
          w(e), e === S.P0.GOOD && P()
        }
      })
    }), "PROBLEM" === en && (0, a.jsx)(O.$mQ, {
      "data-migration-pending": true,
      children: (0, a.jsx)(O.D0$, {
        label: m,
        children: (0, a.jsx)(v.A, {
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
    }), "FREEFORM" === en && (0, a.jsx)(O.$mQ, {
      "data-migration-pending": true,
      className: j.__invalid_content,
      children: (0, a.jsx)(O.fs1, {
        label: null != (t = null == M ? true : M(X)) ? t : p.intl.string(p.t.h95hcn),
        helperText: x ? true : p.intl.format(p.t.ybi2tD, {
          helpdeskURL: g.A.getSubmitRequestURL()
        }),
        value: Q,
        maxLength: S.u0,
        onChange: z
      })
    }), "RATING" === en && !C && (0, a.jsx)(O.jlY, {
      "data-migration-pending": true,
      className: j.qr,
      direction: c.A.Direction.HORIZONTAL,
      children: (0, a.jsx)(O.Checkbox, {
        checked: k,
        onChange: () => H(!k),
        label: p.intl.string(p.t["5E9SB9"]),
        labelType: "secondary"
      })
    }), ("FREEFORM" === en || "PROBLEM" === en && null != L) && (0, a.jsx)(O.jlY, {
      "data-migration-pending": true,
      className: j.qr,
      direction: c.A.Direction.HORIZONTAL,
      children: (0, a.jsxs)(O.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(O.Button, {
          variant: "secondary",
          size: "sm",
          text: p.intl.string(p.t["13/7kX"]),
          onClick: () => {
            "FREEFORM" === en ? (K(null), z("")) : w(null)
          }
        }), (0, a.jsx)(O.Button, {
          variant: "primary",
          size: "sm",
          text: p.intl.string(p.t.geKm7t),
          onClick: P
        })]
      })
    })]
  })
}