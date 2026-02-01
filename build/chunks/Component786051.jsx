/** Chunk was on 61344 **/
/** chunk id: 786051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576470 = require("./576470.jsx"),
  Chunk761640 = require("./761640.js"),
  Chunk945675 = require("./945675.js");
let d = function(e) {
  let {
    message: t,
    subtitle: n,
    countdown: d,
    buttonText: h,
    buttonIcon: p,
    buttonSubmitting: f,
    onButtonClick: m,
    imageSrc: g,
    animationSrc: A,
    secondaryButtonText: b,
    onSecondaryButtonClick: _,
    children: y,
    useReducedMotion: v = false,
    buttonVariant: E
  } = e, O = (0, a.bG)([c.Ay], () => c.Ay.getState().isMembersOpen);
  if (i.Fr && O) return null;
  if (null == t) return (0, l.jsx)(l.Fragment, {
    children: r.Children.only(y)
  });
  let C = null;
  return null != g ? C = (0, l.jsx)("img", {
    alt: "",
    src: g,
    className: u.Sl
  }) : null != A && (C = (0, l.jsx)(s.akl, {
    importData: A,
    shouldAnimate: !v,
    className: u.lY
  })), (0, l.jsxs)("div", {
    className: u.iE,
    children: [(0, l.jsxs)("div", {
      className: u.Qs,
      children: [C, (0, l.jsxs)("div", {
        className: u.Qq,
        children: [(0, l.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: u.DD,
          children: t
        }), null != n && (0, l.jsx)(s.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: n
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: u.UD,
      children: [null != b && (0, l.jsx)("div", {
        className: u.x6,
        children: (0, l.jsx)(s.QWc, {
          textVariant: "text-sm/semibold",
          text: b,
          onClick: _
        })
      }), null != h && (0, l.jsx)("div", {
        className: u.x6,
        children: (0, l.jsx)(s.Button, {
          text: h,
          size: "sm",
          variant: null != E ? E : "secondary",
          onClick: m,
          loading: f,
          icon: p
        })
      })]
    }), null != d && (0, l.jsx)(o.A, {
      className: u.qW,
      deadline: d
    })]
  })
}