/** Chunk was on 87337 **/
/** chunk id: 343544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  let {
    headerText: t,
    secondaryHeaderText: n,
    descriptionText: i,
    infoRows: _,
    onDismissAndStay: A,
    onDismissAndLeave: E,
    leaveButtonText: f,
    stayButtonText: I,
    transitionState: m,
    impression: g
  } = e;
  return (0, r.jsxs)(o.Y0X, {
    transitionState: m,
    impression: g,
    parentComponent: "BlockedUserWarningModal",
    children: [(0, r.jsx)("img", {
      alt: "",
      className: u.headerImage,
      src: d
    }), (0, r.jsxs)(o.xBx, {
      separator: false,
      className: u.header,
      children: [(0, r.jsxs)(o.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: u.title,
        children: [t, null != n && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), n]
        })]
      }), null != i && (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: i
      })]
    }), (0, r.jsxs)(o.hzk, {
      className: u.content,
      children: [(0, r.jsx)("div", {
        className: u.infoGroup,
        children: _.map((e, t) => (0, r.jsxs)(s.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: a()(u.infoRow, e.className),
            children: [e.icon, (0, r.jsx)(o.Text, {
              variant: "text-md/medium",
              children: e.text
            })]
          }), t < _.length - 1 && (0, r.jsx)(c.Z, {})]
        }, t))
      }), (0, r.jsxs)("div", {
        className: u.buttonGroup,
        children: [(0, r.jsx)(o.zxk, {
          variant: "secondary",
          text: I,
          onClick: A
        }), (0, r.jsx)(l.zx, {
          color: l.zx.Colors.BRAND,
          size: l.zx.Sizes.MEDIUM,
          onClick: E,
          className: u.leave,
          children: f
        })]
      })]
    })]
  })
}