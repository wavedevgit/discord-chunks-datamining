/** Chunk was on 71264 **/
/** chunk id: 862679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk98484 = require("./98484.js");
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
    children: v,
    useReducedMotion: _ = false,
    buttonVariant: x
  } = e, j = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
  if (l.tq && j) return null;
  if (null == t) return (0, i.jsx)(i.Fragment, {
    children: r.Children.only(v)
  });
  let O = null;
  return null != g ? O = (0, i.jsx)("img", {
    alt: "",
    src: g,
    className: u.image
  }) : null != b && (O = (0, i.jsx)(o.Fmz, {
    importData: b,
    shouldAnimate: !_,
    className: u.animation
  })), (0, i.jsxs)("div", {
    className: u.wrapper,
    children: [(0, i.jsxs)("div", {
      className: u.content,
      children: [O, (0, i.jsxs)("div", {
        className: u.text,
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: u.title,
          children: t
        }), null != n && (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: n
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: u.buttonContainer,
      children: [null != y && (0, i.jsx)("div", {
        className: u.button,
        children: (0, i.jsx)(o.Avr, {
          textVariant: "text-sm/semibold",
          text: y,
          onClick: C
        })
      }), null != p && (0, i.jsx)("div", {
        className: u.button,
        children: (0, i.jsx)(o.Button, {
          text: p,
          size: "sm",
          variant: null != x ? x : "secondary",
          onClick: m,
          loading: f,
          icon: h
        })
      })]
    }), null != d && (0, i.jsx)(s.Z, {
      className: u.countdown,
      deadline: d
    })]
  })
}