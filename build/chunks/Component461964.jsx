/** Chunk was on 73872 **/
/** chunk id: 461964, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk561716 = require("./561716.js"),
  Chunk721383 = require("./721383.js"),
  Chunk313201 = require("./313201.js"),
  Chunk63063 = require("./63063.js"),
  Chunk857595 = require("./857595.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk582914 = require("./582914.js");

function m(t) {
  let {
    transitionState: e,
    onClose: a
  } = t, m = (0, d.Dt)();
  return r.useEffect(() => {
    o.r_()
  }, []), (0, n.jsxs)(i.Y0X, {
    transitionState: e,
    role: "alertdialog",
    "aria-labelledby": m,
    parentComponent: "KeyboardNavigationModal",
    children: [(0, n.jsxs)(i.hzk, {
      className: u.content,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        id: m,
        className: u.header,
        children: x.intl.format(x.t.V4fxrp, {
          tab: (t, e) => (0, n.jsx)(i.M2$, {
            shortcut: "tab",
            className: u.headerShortcut
          }, e)
        })
      }), (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        children: x.intl.string(x.t["oQA/OB"])
      }), (0, n.jsxs)("ul", {
        className: u.tips,
        children: [(0, n.jsxs)("li", {
          children: [(0, n.jsx)(i.M2$, {
            shortcut: l._.binds["0"]
          }), (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            children: x.intl.string(x.t["43Qn2r"])
          })]
        }), (0, n.jsxs)("li", {
          children: [(0, n.jsx)(i.M2$, {
            shortcut: s.$.binds["0"]
          }), (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            children: x.intl.string(x.t.zJg4FY)
          })]
        })]
      }), (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        children: x.intl.format(x.t.EWFVSW, {
          link: c.Z.getArticleURL(h.BhN.KEYBOARD_NAVIGATION)
        })
      })]
    }), (0, n.jsx)(i.mzw, {
      children: (0, n.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: x.intl.string(x.t.BddRzS),
        onClick: a,
        autoFocus: true
      })
    })]
  })
}