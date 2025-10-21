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
  Chunk622869 = require("./622869.js");

function m(t) {
  let {
    transitionState: e,
    onClose: a
  } = t, m = (0, d.Dt)();
  return i.useEffect(() => {
    o.r_()
  }, []), (0, n.jsxs)(r.Y0X, {
    transitionState: e,
    role: "alertdialog",
    "aria-labelledby": m,
    parentComponent: "KeyboardNavigationModal",
    children: [(0, n.jsxs)(r.hzk, {
      className: u.content,
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        id: m,
        className: u.header,
        children: x.intl.format(x.t.V4fxrq, {
          tab: (t, e) => (0, n.jsx)(r.M2$, {
            shortcut: "tab",
            className: u.headerShortcut
          }, e)
        })
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        children: x.intl.string(x.t["oQA/OD"])
      }), (0, n.jsxs)("ul", {
        className: u.tips,
        children: [(0, n.jsxs)("li", {
          children: [(0, n.jsx)(r.M2$, {
            shortcut: l._.binds["0"]
          }), (0, n.jsx)(r.Text, {
            variant: "text-md/normal",
            children: x.intl.string(x.t["43Qn2t"])
          })]
        }), (0, n.jsxs)("li", {
          children: [(0, n.jsx)(r.M2$, {
            shortcut: s.$.binds["0"]
          }), (0, n.jsx)(r.Text, {
            variant: "text-md/normal",
            children: x.intl.string(x.t.zJg4FR)
          })]
        })]
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        children: x.intl.format(x.t.EWFVSU, {
          link: c.Z.getArticleURL(h.BhN.KEYBOARD_NAVIGATION)
        })
      })]
    }), (0, n.jsx)(r.mzw, {
      children: (0, n.jsx)(r.Button, {
        variant: "primary",
        size: "sm",
        text: x.intl.string(x.t.BddRzc),
        onClick: a,
        autoFocus: true
      })
    })]
  })
}