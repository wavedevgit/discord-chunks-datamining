/** Chunk was on 10620 **/
/** chunk id: 624659, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk237617 = require("./237617.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk648159 = require("./648159.js"),
  Chunk63063 = require("./63063.js"),
  Chunk957115 = require("./957115.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk652395 = require("./652395.js"),
  Chunk216047 = require("./216047.js");

function C() {
  return (0, Chunk951288.jsx)(Chunk481060.Text, {
    className: Chunk652395.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: Chunk388032.intl.format(Chunk388032.t.ybi2tL, {
      helpdeskURL: Chunk63063.Z.getSubmitRequestURL()
    })
  })
}

function I(e) {
  var t, n;
  let {
    header: i,
    body: o,
    problems: h,
    transitionState: I,
    feedbackProblems: L = {},
    otherKey: D,
    hasCloseButton: T,
    onSubmit: x,
    onClose: y,
    canDismissForever: M = true,
    showHelpdeskLink: R = true
  } = e, k = (0, c.Z)(h), [j, A] = a.useState(false), [P, B] = a.useState(null), [$, U] = a.useState(u().shuffle(h)), [F, Z] = a.useState(""), [w, H] = a.useState(false), G = (0, O.Dt)(), J = (0, f.Z)(j), z = (0, f.Z)(P), K = (0, f.Z)(x), Y = (0, f.Z)(F), Q = (0, f.Z)(w), V = null != P ? L[P] : null, X = null != V;
  return a.useEffect(() => {
    u().isEqual(k, h) || U((0, g.Bi)(h, D))
  }, [h, k, D]), (0, b.ZP)(() => () => {
    K.current({
      problem: z.current,
      dontShowAgain: J.current,
      feedback: Y.current,
      closeClicked: Q.current
    })
  }), (0, l.jsxs)(s.Y0X, {
    transitionState: I,
    "aria-labelledby": G,
    parentComponent: "SimpleFeedbackModal",
    children: [(0, l.jsx)(_.Z, {}), (0, l.jsxs)(s.xBx, {
      separator: false,
      className: r()(m.headerContainer, p.headerContainer),
      children: [(0, l.jsx)(s.X6q, {
        id: G,
        variant: "heading-xl/bold",
        color: "header-primary",
        className: m.header,
        children: i
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: r()(m.ratingBody, p.headerBody),
        children: null != (t = null == V ? true : V.subheader) ? t : o
      }), T ? (0, l.jsx)(s.olH, {
        className: m.modalCloseButton,
        onClick: function() {
          H(true), y()
        }
      }) : null]
    }), (0, l.jsxs)(s.hzk, {
      className: p.modalContent,
      children: [X ? null : (0, l.jsx)(s.xJW, {
        className: m.problemInfo,
        children: (0, l.jsx)(v.Z, {
          options: $,
          onClick: function(e) {
            let {
              value: t
            } = e;
            B(t), Object.keys(L).includes(t) || y()
          }
        })
      }), X ? (0, l.jsxs)(s.xJW, {
        className: m.problemInfo,
        children: [(0, l.jsx)(s.Kx8, {
          value: F,
          maxLength: S.iF,
          onChange: Z,
          placeholder: null != (n = V.hint) ? n : N.intl.string(N.t.h95hcn)
        }), R ? (0, l.jsx)(C, {}) : null]
      }) : null]
    }), M || X ? (0, l.jsx)(s.mzw, {
      className: r()(m.footer, X ? p.submitFooter : p.modalFooter),
      direction: E.Z.Direction.HORIZONTAL,
      children: X ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.zx, {
          className: p.backButton,
          size: d.zx.Sizes.NONE,
          look: d.zx.Looks.LINK,
          color: d.zx.Colors.PRIMARY,
          onClick: () => {
            B(null), Z("")
          },
          children: N.intl.string(N.t["13/7kZ"])
        }), (0, l.jsx)(s.zxk, {
          variant: "primary",
          size: "sm",
          text: N.intl.string(N.t.geKm7u),
          onClick: y
        })]
      }) : M ? (0, l.jsx)(d.$q, {
        size: 24,
        type: d.M0.INVERTED,
        value: j,
        onChange: () => A(!j),
        children: (0, l.jsx)(s.Text, {
          variant: "text-md/normal",
          children: N.intl.string(N.t.lkWab2)
        })
      }) : null
    }) : null]
  })
}