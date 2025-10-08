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
  Chunk872175 = require("./872175.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
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
    otherKey: y,
    hasCloseButton: D,
    onSubmit: T,
    onClose: x,
    canDismissForever: M = true,
    showHelpdeskLink: k = true
  } = e, R = (0, E.Z)(h), [j, A] = a.useState(false), [P, B] = a.useState(null), [U, $] = a.useState(u().shuffle(h)), [F, Z] = a.useState(""), [w, H] = a.useState(false), G = (0, f.Dt)(), J = (0, d.Z)(j), Y = (0, d.Z)(P), z = (0, d.Z)(T), K = (0, d.Z)(F), Q = (0, d.Z)(w), X = null != P ? L[P] : null, V = null != X;
  return a.useEffect(() => {
    u().isEqual(R, h) || $((0, g.Bi)(h, y))
  }, [h, R, y]), (0, c.ZP)(() => () => {
    z.current({
      problem: Y.current,
      dontShowAgain: J.current,
      feedback: K.current,
      closeClicked: Q.current
    })
  }), (0, l.jsxs)(b.Y0X, {
    transitionState: I,
    "aria-labelledby": G,
    parentComponent: "SimpleFeedbackModal",
    children: [(0, l.jsx)(_.Z, {}), (0, l.jsxs)(b.xBx, {
      separator: false,
      className: r()(m.headerContainer, p.headerContainer),
      children: [(0, l.jsx)(b.X6q, {
        id: G,
        variant: "heading-xl/bold",
        color: "header-primary",
        className: m.header,
        children: i
      }), (0, l.jsx)(b.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: r()(m.ratingBody, p.headerBody),
        children: null != (t = null == X ? true : X.subheader) ? t : o
      }), D ? (0, l.jsx)(b.olH, {
        className: m.modalCloseButton,
        onClick: function() {
          H(true), x()
        }
      }) : null]
    }), (0, l.jsxs)(b.hzk, {
      className: p.modalContent,
      children: [V ? null : (0, l.jsx)("div", {
        className: m.problemInfo,
        children: (0, l.jsx)(v.Z, {
          options: U,
          onClick: function(e) {
            let {
              value: t
            } = e;
            B(t), Object.keys(L).includes(t) || x()
          }
        })
      }), V ? (0, l.jsxs)("div", {
        className: m.problemInfo,
        children: [(0, l.jsx)(b.Kx8, {
          value: F,
          maxLength: S.iF,
          onChange: Z,
          placeholder: null != (n = X.hint) ? n : N.intl.string(N.t.h95hcn)
        }), k ? (0, l.jsx)(C, {}) : null]
      }) : null]
    }), M || V ? (0, l.jsx)(b.mzw, {
      className: r()(m.footer, V ? p.submitFooter : p.modalFooter),
      direction: O.Z.Direction.HORIZONTAL,
      children: V ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.zx, {
          className: p.backButton,
          size: s.zx.Sizes.NONE,
          look: s.zx.Looks.LINK,
          color: s.zx.Colors.PRIMARY,
          onClick: () => {
            B(null), Z("")
          },
          children: N.intl.string(N.t["13/7kZ"])
        }), (0, l.jsx)(b.zxk, {
          variant: "primary",
          size: "sm",
          text: N.intl.string(N.t.geKm7u),
          onClick: x
        })]
      }) : M ? (0, l.jsx)(b.XZJ, {
        checked: j,
        onChange: () => A(!j),
        label: N.intl.string(N.t.lkWab2),
        labelType: "secondary"
      }) : null
    }) : null]
  })
}