/** Chunk was on 62634 **/
/** chunk id: 461964, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk561716 = require("./561716.js"),
  Chunk721383 = require("./721383.js"),
  Chunk313201 = require("./313201.js"),
  Chunk63063 = require("./63063.js"),
  Chunk857595 = require("./857595.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk582914 = require("./582914.js");

function p(t) {
  let {
    transitionState: e,
    onClose: n
  } = t, p = (0, o.Dt)();
  return i.useEffect(() => {
    _.r_()
  }, []), (0, l.jsxs)(c.Y0X, {
    transitionState: e,
    role: "alertdialog",
    "aria-labelledby": p,
    parentComponent: "KeyboardNavigationModal",
    children: [(0, l.jsxs)(c.hzk, {
      className: h.content,
      children: [(0, l.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        id: p,
        className: h.header,
        children: d.intl.format(d.t.V4fxrq, {
          tab: (t, e) => (0, l.jsx)(c.M2$, {
            shortcut: "tab",
            className: h.headerShortcut
          }, e)
        })
      }), (0, l.jsx)(c.Text, {
        variant: "text-md/normal",
        children: d.intl.string(d.t["oQA/OD"])
      }), (0, l.jsxs)("ul", {
        className: h.tips,
        children: [(0, l.jsxs)("li", {
          children: [(0, l.jsx)(c.M2$, {
            shortcut: r._.binds["0"]
          }), (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            children: d.intl.string(d.t["43Qn2t"])
          })]
        }), (0, l.jsxs)("li", {
          children: [(0, l.jsx)(c.M2$, {
            shortcut: a.$.binds["0"]
          }), (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            children: d.intl.string(d.t.zJg4FR)
          })]
        })]
      }), (0, l.jsx)(c.Text, {
        variant: "text-md/normal",
        children: d.intl.format(d.t.EWFVSU, {
          link: s.Z.getArticleURL(u.BhN.KEYBOARD_NAVIGATION)
        })
      })]
    }), (0, l.jsx)(c.mzw, {
      children: (0, l.jsx)(c.zxk, {
        variant: "primary",
        size: "sm",
        text: d.intl.string(d.t.BddRzc),
        onClick: n,
        autoFocus: true
      })
    })]
  })
}