/** Chunk was on 10620 **/
/** chunk id: 624659, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk817320 = require("./817320.js"),
  Chunk519249 = require("./519249.js");

function C() {
  return (0, Chunk951288.jsx)(Chunk481060.Text, {
    className: Chunk817320.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: Chunk388032.intl.format(Chunk388032.t.ybi2tD, {
      helpdeskURL: Chunk63063.Z.getSubmitRequestURL()
    })
  })
}

function D(e) {
  var t, n;
  let {
    header: i,
    body: d,
    problems: h,
    transitionState: D,
    feedbackProblems: I = {},
    otherKey: y,
    hasCloseButton: L,
    onSubmit: T,
    onClose: x,
    canDismissForever: M = true,
    showHelpdeskLink: k = true
  } = e, R = (0, E.Z)(h), [j, P] = a.useState(false), [A, U] = a.useState(null), [$, B] = a.useState(o().shuffle(h)), [F, Z] = a.useState(""), [H, w] = a.useState(false), G = (0, f.Dt)(), J = (0, u.Z)(j), Y = (0, u.Z)(A), z = (0, u.Z)(T), K = (0, u.Z)(F), Q = (0, u.Z)(H), X = null != A ? I[A] : null, V = null != X;
  return a.useEffect(() => {
    o().isEqual(R, h) || B((0, g.Bi)(h, y))
  }, [h, R, y]), (0, c.ZP)(() => () => {
    z.current({
      problem: Y.current,
      dontShowAgain: J.current,
      feedback: K.current,
      closeClicked: Q.current
    })
  }), (0, l.jsxs)(b.Y0X, {
    transitionState: D,
    "aria-labelledby": G,
    parentComponent: "SimpleFeedbackModal",
    children: [(0, l.jsx)(_.Z, {}), (0, l.jsxs)(b.xBx, {
      separator: false,
      className: r()(m.headerContainer, p.headerContainer),
      children: [(0, l.jsx)(b.Heading, {
        id: G,
        variant: "heading-xl/bold",
        color: "header-primary",
        className: m.header,
        children: i
      }), (0, l.jsx)(b.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: r()(m.ratingBody, p.headerBody),
        children: null != (t = null == X ? true : X.subheader) ? t : d
      }), L ? (0, l.jsx)(b.olH, {
        className: m.modalCloseButton,
        onClick: function() {
          w(true), x()
        }
      }) : null]
    }), (0, l.jsxs)(b.hzk, {
      className: p.modalContent,
      children: [V ? null : (0, l.jsx)("div", {
        className: m.problemInfo,
        children: (0, l.jsx)(v.Z, {
          options: $,
          onClick: function(e) {
            let {
              value: t
            } = e;
            U(t), Object.keys(I).includes(t) || x()
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
            U(null), Z("")
          },
          children: N.intl.string(N.t["13/7kX"])
        }), (0, l.jsx)(b.Button, {
          variant: "primary",
          size: "sm",
          text: N.intl.string(N.t.geKm7t),
          onClick: x
        })]
      }) : M ? (0, l.jsx)(b.Checkbox, {
        checked: j,
        onChange: () => P(!j),
        label: N.intl.string(N.t.lkWaby),
        labelType: "secondary"
      }) : null
    }) : null]
  })
}