/** Chunk was on 71256 **/
/** chunk id: 369323, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk95035 = require("./95035.jsx"),
  Chunk400492 = require("./400492.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk654923 = require("./654923.js");
let c = [{
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

function b(e) {
  let {
    punConfig: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [t.preBold, (0, n.jsx)("b", {
      children: (0, n.jsx)("i", {
        children: t.bold
      })
    }), t.postBold]
  })
}

function u(e) {
  let {
    transitionState: t,
    onClose: a,
    asanaTask: u
  } = e;
  i.useEffect(() => {
    (0, r.Ak)("success", .1)
  }, []);
  let h = i.useRef(c[Math.floor(Math.random() * c.length)]).current;
  return (0, n.jsx)(l.EOs, {
    "data-migration-pending": true,
    className: p.Nk,
    transitionState: t,
    "aria-label": o.intl.string(o.t.mCCdwi),
    parentComponent: "BugReporterSubmitModal",
    children: (0, n.jsxs)(l.$mQ, {
      "data-migration-pending": true,
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      className: p.jE,
      paddingFix: false,
      children: [(0, n.jsx)(l.s_y, {
        "data-migration-pending": true,
        onClick: () => {
          null == a || a()
        },
        className: p.b
      }), (0, n.jsxs)(l.Text, {
        className: p.KP,
        variant: "text-sm/normal",
        children: ["Thanks for submitting a ", (0, n.jsx)(d.A, {
          onClick: () => (0, s.A)(u.permalink_url),
          children: "bug"
        }), "!", (0, n.jsx)("br", {}), (0, n.jsx)(b, {
          punConfig: h
        })]
      })]
    })
  })
}