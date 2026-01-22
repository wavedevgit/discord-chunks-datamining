/** Chunk was on 97492 **/
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
    buttonText: f,
    buttonIcon: p,
    buttonSubmitting: h,
    onButtonClick: b,
    imageSrc: g,
    animationSrc: m,
    secondaryButtonText: A,
    onSecondaryButtonClick: y,
    children: O,
    useReducedMotion: j = false,
    buttonVariant: v
  } = e, x = (0, a.bG)([c.Ay], () => c.Ay.getState().isMembersOpen);
  if (i.Fr && x) return null;
  if (null == t) return (0, r.jsx)(r.Fragment, {
    children: l.Children.only(O)
  });
  let E = null;
  return null != g ? E = (0, r.jsx)("img", {
    alt: "",
    src: g,
    className: u.Sl
  }) : null != m && (E = (0, r.jsx)(s.akl, {
    importData: m,
    shouldAnimate: !j,
    className: u.lY
  })), (0, r.jsxs)("div", {
    className: u.iE,
    children: [(0, r.jsxs)("div", {
      className: u.Qs,
      children: [E, (0, r.jsxs)("div", {
        className: u.Qq,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: u.DD,
          children: t
        }), null != n && (0, r.jsx)(s.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: n
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: u.UD,
      children: [null != A && (0, r.jsx)("div", {
        className: u.x6,
        children: (0, r.jsx)(s.QWc, {
          textVariant: "text-sm/semibold",
          text: A,
          onClick: y
        })
      }), null != f && (0, r.jsx)("div", {
        className: u.x6,
        children: (0, r.jsx)(s.Button, {
          text: f,
          size: "sm",
          variant: null != v ? v : "secondary",
          onClick: b,
          loading: h,
          icon: p
        })
      })]
    }), null != d && (0, r.jsx)(o.A, {
      className: u.qW,
      deadline: d
    })]
  })
}