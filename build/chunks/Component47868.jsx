/** Chunk was on 1113 **/
/** chunk id: 47868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk67170 = require("./67170.js");

function d(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: i,
    title: d,
    description: h,
    userCount: p,
    onClick: g,
    highlight: f,
    onDismiss: m
  } = e, b = l.useCallback(e => {
    e.stopPropagation(), null == m || m()
  }, [m]);
  return (0, r.jsxs)(o.DUT, {
    className: s()(u.kL, t, null != f && {
      [u.U6]: f
    }),
    onClick: g,
    children: [(0, r.jsx)("div", {
      className: s()(u.Kk, n),
      children: i
    }), (0, r.jsxs)("div", {
      className: u.FS,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: d
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        className: u.mG,
        children: h
      }), null != p && p > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-strong",
          className: u.Om,
          children: "•"
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-strong",
          className: u.mG,
          children: c.intl.format(c.t.NywdIj, {
            count: p
          })
        })]
      }) : null]
    }), null != m ? (0, r.jsx)("div", {
      className: u.r,
      children: (0, r.jsx)(a.JnF, {
        size: "xs",
        onClick: b
      })
    }) : (0, r.jsx)(o._BQ, {
      size: "xs",
      color: "currentColor",
      className: u.OW
    })]
  })
}