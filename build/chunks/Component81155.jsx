/** Chunk was on 64648 **/
/** chunk id: 81155, original params: t,e,o (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk460181 = require("./460181.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk943584 = require("./943584.js");
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

function p(t) {
  let {
    punConfig: e
  } = t;
  return (0, n.jsxs)(n.Fragment, {
    children: [e.preBold, (0, n.jsx)("b", {
      children: (0, n.jsx)("i", {
        children: e.bold
      })
    }), e.postBold]
  })
}

function b(t) {
  let {
    transitionState: e,
    onClose: o,
    asanaTask: b
  } = t;
  l.useEffect(() => {
    (0, r.GN)("success", .1)
  }, []);
  let m = l.useRef(c[Math.floor(Math.random() * c.length)]).current;
  return (0, n.jsx)(i.Y0X, {
    "data-migration-pending": true,
    className: u.bugReporterSubmitModalRoot,
    transitionState: e,
    "aria-label": d.intl.string(d.t.mCCdwi),
    parentComponent: "BugReporterSubmitModal",
    children: (0, n.jsxs)(i.hzk, {
      "data-migration-pending": true,
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      className: u.modalContent,
      paddingFix: false,
      children: [(0, n.jsx)(i.olH, {
        "data-migration-pending": true,
        onClick: () => {
          null == o || o()
        },
        className: u.closeButton
      }), (0, n.jsxs)(i.Text, {
        className: u.submitText,
        variant: "text-sm/normal",
        children: ["Thanks for submitting a ", (0, n.jsx)(s.Z, {
          onClick: () => (0, a.Z)(b.permalink_url),
          children: "bug"
        }), "!", (0, n.jsx)("br", {}), (0, n.jsx)(p, {
          punConfig: m
        })]
      })]
    })
  })
}