/** Chunk was on 34740 **/
/** chunk id: 688641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367390 = require("./367390.js");

function d(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: l,
    title: d,
    description: p,
    userCount: h,
    onClick: f,
    highlight: m,
    onDismiss: g
  } = e, b = r.useCallback(e => {
    e.stopPropagation(), null == g || g()
  }, [g]);
  return (0, i.jsxs)(s.P3F, {
    className: a()(u.container, t, null != m && {
      [u.pulse]: m
    }),
    onClick: f,
    children: [(0, i.jsx)("div", {
      className: a()(u.icon, n),
      children: l
    }), (0, i.jsxs)("div", {
      className: u.textContainer,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        color: "text-primary",
        children: d
      }), (0, i.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-primary",
        className: u.inline,
        children: p
      }), null != h && h > 0 ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: u.dot,
          children: "•"
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-primary",
          className: u.inline,
          children: c.intl.format(c.t.NywdIj, {
            count: h
          })
        })]
      }) : null]
    }), null != g ? (0, i.jsx)("div", {
      className: u.dismissButton,
      children: (0, i.jsx)(o.PZ7, {
        size: "xs",
        onClick: b
      })
    }) : (0, i.jsx)(s.Fbu, {
      size: "xs",
      color: "currentColor",
      className: u.caret
    })]
  })
}