/** Chunk was on 98186 **/
/** chunk id: 645905, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk675704 = require("./675704.js"),
  Chunk512513 = require("./512513.js"),
  Chunk915089 = require("./915089.js"),
  Chunk975571 = require("./975571.js"),
  Chunk955572 = require("./955572.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk51057 = require("./51057.js");

function j(t) {
  let {
    transitionState: e,
    onClose: s
  } = t, j = (0, d.GV)();
  return i.useEffect(() => {
    x.Er()
  }, []), (0, a.jsxs)(n.EOs, {
    transitionState: e,
    role: "alertdialog",
    "aria-labelledby": j,
    parentComponent: "KeyboardNavigationModal",
    children: [(0, a.jsxs)(n.$mQ, {
      className: m.Qs,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        id: j,
        className: m.wx,
        children: h.intl.format(h.t.V4fxrp, {
          tab: (t, e) => (0, a.jsx)(n.e7I, {
            shortcut: "tab",
            className: m.Wj
          }, e)
        })
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        children: h.intl.string(h.t["oQA/OB"])
      }), (0, a.jsxs)("ul", {
        className: m.Xq,
        children: [(0, a.jsxs)("li", {
          children: [(0, a.jsx)(n.e7I, {
            shortcut: l.z.binds["0"]
          }), (0, a.jsx)(n.Text, {
            variant: "text-md/normal",
            children: h.intl.string(h.t["43Qn2r"])
          })]
        }), (0, a.jsxs)("li", {
          children: [(0, a.jsx)(n.e7I, {
            shortcut: r.R.binds["0"]
          }), (0, a.jsx)(n.Text, {
            variant: "text-md/normal",
            children: h.intl.string(h.t.zJg4FY)
          })]
        })]
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        children: h.intl.format(h.t.EWFVSW, {
          link: c.A.getArticleURL(o.MVz.KEYBOARD_NAVIGATION)
        })
      })]
    }), (0, a.jsx)(n.jlY, {
      children: (0, a.jsx)(n.Button, {
        variant: "primary",
        size: "sm",
        text: h.intl.string(h.t.BddRzS),
        onClick: s,
        autoFocus: true
      })
    })]
  })
}