/** Chunk was on 13140 **/
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
    buttonIcon: f,
    buttonSubmitting: h,
    onButtonClick: m,
    imageSrc: g,
    animationSrc: b,
    secondaryButtonText: _,
    onSecondaryButtonClick: y,
    children: C,
    useReducedMotion: v = false,
    buttonVariant: O
  } = e, x = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
  if (l.tq && x) return null;
  if (null == t) return (0, r.jsx)(r.Fragment, {
    children: i.Children.only(C)
  });
  let E = null;
  return null != g ? E = (0, r.jsx)("img", {
    alt: "",
    src: g,
    className: u.image
  }) : null != b && (E = (0, r.jsx)(o.Fmz, {
    importData: b,
    shouldAnimate: !v,
    className: u.animation
  })), (0, r.jsxs)("div", {
    className: u.wrapper,
    children: [(0, r.jsxs)("div", {
      className: u.content,
      children: [E, (0, r.jsxs)("div", {
        className: u.text,
        children: [(0, r.jsx)(o.Heading, {
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
      children: [null != _ && (0, r.jsx)("div", {
        className: u.button,
        children: (0, r.jsx)(o.Avr, {
          textVariant: "text-sm/semibold",
          text: _,
          onClick: y
        })
      }), null != p && (0, r.jsx)("div", {
        className: u.button,
        children: (0, r.jsx)(o.Button, {
          text: p,
          size: "sm",
          variant: null != O ? O : "secondary",
          onClick: m,
          loading: h,
          icon: f
        })
      })]
    }), null != d && (0, r.jsx)(s.Z, {
      className: u.countdown,
      deadline: d
    })]
  })
}