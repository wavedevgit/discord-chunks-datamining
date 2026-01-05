/** Chunk was on 40184 **/
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
    onButtonClick: m,
    imageSrc: g,
    animationSrc: b,
    secondaryButtonText: C,
    onSecondaryButtonClick: y,
    children: v,
    useReducedMotion: x = false,
    buttonVariant: O
  } = e, E = (0, a.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
  if (l.tq && E) return null;
  if (null == t) return (0, i.jsx)(i.Fragment, {
    children: r.Children.only(v)
  });
  let j = null;
  return null != g ? j = (0, i.jsx)("img", {
    alt: "",
    src: g,
    className: u.image
  }) : null != b && (j = (0, i.jsx)(o.Fmz, {
    importData: b,
    shouldAnimate: !x,
    className: u.animation
  })), (0, i.jsxs)("div", {
    className: u.wrapper,
    children: [(0, i.jsxs)("div", {
      className: u.content,
      children: [j, (0, i.jsxs)("div", {
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
      children: [null != C && (0, i.jsx)("div", {
        className: u.button,
        children: (0, i.jsx)(o.Avr, {
          textVariant: "text-sm/semibold",
          text: C,
          onClick: y
        })
      }), null != p && (0, i.jsx)("div", {
        className: u.button,
        children: (0, i.jsx)(o.Button, {
          text: p,
          size: "sm",
          variant: null != O ? O : "secondary",
          onClick: m,
          loading: h,
          icon: f
        })
      })]
    }), null != d && (0, i.jsx)(s.Z, {
      className: u.countdown,
      deadline: d
    })]
  })
}