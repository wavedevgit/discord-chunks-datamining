/** Chunk was on 9665 **/
/** chunk id: 862679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk944701 = require("./944701.js");
let d = function(e) {
  let {
    message: t,
    subtitle: n,
    countdown: d,
    buttonText: p,
    buttonIcon: h,
    buttonSubmitting: f,
    onButtonClick: m,
    imageSrc: g,
    animationSrc: b,
    secondaryButtonText: y,
    onSecondaryButtonClick: C,
    children: _,
    useReducedMotion: v = false,
    buttonVariant: x
  } = e, O = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
  if (l.tq && O) return null;
  if (null == t) return (0, r.jsx)(r.Fragment, {
    children: i.Children.only(_)
  });
  let j = null;
  return null != g ? j = (0, r.jsx)("img", {
    alt: "",
    src: g,
    className: u.image
  }) : null != b && (j = (0, r.jsx)(o.Fmz, {
    importData: b,
    shouldAnimate: !v,
    className: u.animation
  })), (0, r.jsxs)("div", {
    className: u.wrapper,
    children: [(0, r.jsxs)("div", {
      className: u.content,
      children: [j, (0, r.jsxs)("div", {
        className: u.text,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          className: u.title,
          children: t
        }), null != n && (0, r.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: n
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: u.buttonContainer,
      children: [null != y && (0, r.jsx)("div", {
        className: u.button,
        children: (0, r.jsx)(o.Avr, {
          textVariant: "text-sm/semibold",
          text: y,
          onClick: C
        })
      }), null != p && (0, r.jsx)("div", {
        className: u.button,
        children: (0, r.jsx)(o.zxk, {
          text: p,
          size: "sm",
          variant: null != x ? x : "secondary",
          onClick: m,
          loading: f,
          icon: h
        })
      })]
    }), null != d && (0, r.jsx)(s.Z, {
      className: u.countdown,
      deadline: d
    })]
  })
}