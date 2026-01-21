/** Chunk was on 82124 **/
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
  Chunk46291 = require("./46291.js");
let d = function(e) {
  let {
    message: t,
    subtitle: n,
    countdown: d,
    buttonText: p,
    buttonIcon: f,
    buttonSubmitting: h,
    onButtonClick: g,
    imageSrc: m,
    animationSrc: b,
    secondaryButtonText: y,
    onSecondaryButtonClick: v,
    children: O,
    useReducedMotion: j = false,
    buttonVariant: x
  } = e, C = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
  if (l.tq && C) return null;
  if (null == t) return (0, r.jsx)(r.Fragment, {
    children: i.Children.only(O)
  });
  let E = null;
  return null != m ? E = (0, r.jsx)("img", {
    alt: "",
    src: m,
    className: u.image
  }) : null != b && (E = (0, r.jsx)(o.Fmz, {
    importData: b,
    shouldAnimate: !j,
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
      children: [null != y && (0, r.jsx)("div", {
        className: u.button,
        children: (0, r.jsx)(o.Avr, {
          textVariant: "text-sm/semibold",
          text: y,
          onClick: v
        })
      }), null != p && (0, r.jsx)("div", {
        className: u.button,
        children: (0, r.jsx)(o.Button, {
          text: p,
          size: "sm",
          variant: null != x ? x : "secondary",
          onClick: g,
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