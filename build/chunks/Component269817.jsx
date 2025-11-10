/** Chunk was on 74194 **/
/** chunk id: 269817, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk398439 = require("./398439.js");

function c(t) {
  let {
    url: n,
    onClose: c,
    transitionState: x
  } = t, m = (0, r.Dt)();
  return (0, a.jsxs)(s.Y0X, {
    transitionState: x,
    "aria-labelledby": m,
    parentComponent: "LinkNotDiscordModal",
    children: [(0, a.jsx)("img", {
      className: d.art,
      src: e(902623),
      alt: ""
    }), (0, a.jsx)(s.hzk, {
      children: (0, a.jsxs)("div", {
        className: d.modalContent,
        children: [(0, a.jsx)(s.Heading, {
          id: m,
          variant: "heading-lg/semibold",
          className: d.title,
          children: l.intl.string(l.t["biy1X/"])
        }), (0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          className: d.body,
          children: l.intl.format(l.t.J86cyX, {
            url: n
          })
        })]
      })
    }), (0, a.jsxs)(s.mzw, {
      children: [(0, a.jsx)(s.Button, {
        variant: "primary",
        text: l.intl.string(l.t["xl8R+2"]),
        type: "button",
        onClick: c
      }), (0, a.jsx)(i.zx, {
        type: "button",
        size: i.zx.Sizes.MEDIUM,
        color: i.zx.Colors.TRANSPARENT,
        look: i.zx.Looks.LINK,
        onClick: () => {
          (0, o.Z)(n, true)
        },
        children: l.intl.string(l.t.gQrLtr)
      })]
    })]
  })
}