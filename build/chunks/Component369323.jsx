/** Chunk was on 71256 **/
/** chunk id: 369323, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk95035 = require("./95035.jsx"),
  Chunk400492 = require("./400492.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk654923 = require("./654923.js");
let u = [{
  preBold: "That's pretty...",
  bold: "fly!"
}, {
  preBold: "On Point will make sure to",
  bold: " tick ",
  postBold: "a look at it!"
}, {
  preBold: "You're...un",
  bold: "bee ",
  postBold: "lievable!"
}];

function c(t) {
  let {
    punConfig: e
  } = t;
  return (0, l.jsxs)(l.Fragment, {
    children: [e.preBold, (0, l.jsx)("b", {
      children: (0, l.jsx)("i", {
        children: e.bold
      })
    }), e.postBold]
  })
}

function b(t) {
  let {
    transitionState: e,
    onClose: n,
    asanaTask: b
  } = t;
  i.useEffect(() => {
    (0, r.Ak)("success", .1)
  }, []);
  let m = i.useRef(u[Math.floor(Math.random() * u.length)]).current;
  return (0, l.jsx)(o.EOs, {
    "data-migration-pending": true,
    className: p.Nk,
    transitionState: e,
    "aria-label": d.intl.string(d.t.mCCdwi),
    parentComponent: "BugReporterSubmitModal",
    children: (0, l.jsxs)(o.$mQ, {
      "data-migration-pending": true,
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      className: p.jE,
      paddingFix: false,
      children: [(0, l.jsx)(o.s_y, {
        "data-migration-pending": true,
        onClick: () => {
          null == n || n()
        },
        className: p.b
      }), (0, l.jsxs)(o.Text, {
        className: p.KP,
        variant: "text-sm/normal",
        children: ["Thanks for submitting a ", (0, l.jsx)(s.A, {
          onClick: () => (0, a.A)(b.permalink_url),
          children: "bug"
        }), "!", (0, l.jsx)("br", {}), (0, l.jsx)(c, {
          punConfig: m
        })]
      })]
    })
  })
}