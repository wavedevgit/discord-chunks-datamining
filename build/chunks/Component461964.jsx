/** Chunk was on 73872 **/
/** chunk id: 461964, original params: e,t,n (module,exports,require) **/
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

function p(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, p = (0, s.Dt)();
  return i.useEffect(() => {
    u.r_()
  }, []), (0, l.jsxs)(a.Y0X, {
    transitionState: t,
    role: "alertdialog",
    "aria-labelledby": p,
    parentComponent: "KeyboardNavigationModal",
    children: [(0, l.jsxs)(a.hzk, {
      className: h.content,
      children: [(0, l.jsx)(a.X6q, {
        variant: "heading-xl/semibold",
        id: p,
        className: h.header,
        children: _.intl.format(_.t.V4fxrq, {
          tab: (e, t) => (0, l.jsx)(a.M2$, {
            shortcut: "tab",
            className: h.headerShortcut
          }, t)
        })
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: _.intl.string(_.t["oQA/OD"])
      }), (0, l.jsxs)("ul", {
        className: h.tips,
        children: [(0, l.jsxs)("li", {
          children: [(0, l.jsx)(a.M2$, {
            shortcut: r._.binds["0"]
          }), (0, l.jsx)(a.Text, {
            variant: "text-md/normal",
            children: _.intl.string(_.t["43Qn2t"])
          })]
        }), (0, l.jsxs)("li", {
          children: [(0, l.jsx)(a.M2$, {
            shortcut: c.$.binds["0"]
          }), (0, l.jsx)(a.Text, {
            variant: "text-md/normal",
            children: _.intl.string(_.t.zJg4FR)
          })]
        })]
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: _.intl.format(_.t.EWFVSU, {
          link: o.Z.getArticleURL(d.BhN.KEYBOARD_NAVIGATION)
        })
      })]
    }), (0, l.jsx)(a.mzw, {
      children: (0, l.jsx)(a.zxk, {
        variant: "primary",
        size: "sm",
        text: _.intl.string(_.t.BddRzc),
        onClick: n,
        autoFocus: true
      })
    })]
  })
}