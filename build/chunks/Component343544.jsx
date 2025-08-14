/** Chunk was on 87337 **/
/** chunk id: 343544, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk64515 = require("./64515.js"),
  Chunk444812 = require("./444812.js");

function m(e) {
  let {
    headerText: n,
    secondaryHeaderText: t,
    descriptionText: r,
    infoRows: m,
    onDismissAndStay: x,
    onDismissAndLeave: h,
    leaveButtonText: _,
    stayButtonText: f,
    transitionState: g,
    impression: j
  } = e;
  return (0, s.jsxs)(o.Y0X, {
    transitionState: g,
    impression: j,
    parentComponent: "BlockedUserWarningModal",
    children: [(0, s.jsx)("img", {
      alt: "",
      className: c.headerImage,
      src: u
    }), (0, s.jsxs)(o.xBx, {
      separator: false,
      className: c.header,
      children: [(0, s.jsxs)(o.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: c.title,
        children: [n, null != t && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("br", {}), t]
        })]
      }), null != r && (0, s.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: r
      })]
    }), (0, s.jsxs)(o.hzk, {
      className: c.content,
      children: [(0, s.jsx)("div", {
        className: c.infoGroup,
        children: m.map((e, n) => (0, s.jsxs)(i.Fragment, {
          children: [(0, s.jsxs)("div", {
            className: a()(c.infoRow, e.className),
            children: [e.icon, (0, s.jsx)(o.Text, {
              variant: "text-md/medium",
              children: e.text
            })]
          }), n < m.length - 1 && (0, s.jsx)(d.Z, {})]
        }, n))
      }), (0, s.jsxs)("div", {
        className: c.buttonGroup,
        children: [(0, s.jsx)(o.zxk, {
          variant: "secondary",
          text: f,
          onClick: x
        }), (0, s.jsx)(l.zx, {
          color: l.zx.Colors.BRAND,
          size: l.zx.Sizes.MEDIUM,
          onClick: h,
          className: c.leave,
          children: _
        })]
      })]
    })]
  })
}