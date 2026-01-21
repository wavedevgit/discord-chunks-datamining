/** Chunk was on 82124 **/
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
  Chunk761589 = require("./761589.js");

function d(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: l,
    title: d,
    description: p,
    userCount: f,
    onClick: h,
    highlight: g,
    onDismiss: m
  } = e, b = i.useCallback(e => {
    e.stopPropagation(), null == m || m()
  }, [m]);
  return (0, r.jsxs)(s.P3F, {
    className: a()(u.container, t, null != g && {
      [u.pulse]: g
    }),
    onClick: h,
    children: [(0, r.jsx)("div", {
      className: a()(u.icon, n),
      children: l
    }), (0, r.jsxs)("div", {
      className: u.textContainer,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: d
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        className: u.inline,
        children: p
      }), null != f && f > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-strong",
          className: u.dot,
          children: "•"
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-strong",
          className: u.inline,
          children: c.intl.format(c.t.NywdIj, {
            count: f
          })
        })]
      }) : null]
    }), null != m ? (0, r.jsx)("div", {
      className: u.dismissButton,
      children: (0, r.jsx)(o.PZ7, {
        size: "xs",
        onClick: b
      })
    }) : (0, r.jsx)(s.Fbu, {
      size: "xs",
      color: "currentColor",
      className: u.caret
    })]
  })
}