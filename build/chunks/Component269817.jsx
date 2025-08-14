/** Chunk was on 74194 **/
/** chunk id: 269817, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk398439 = require("./398439.js");

function d(t) {
  let {
    url: e,
    onClose: d,
    transitionState: x
  } = t, m = (0, r.Dt)();
  return (0, a.jsxs)(s.Y0X, {
    transitionState: x,
    "aria-labelledby": m,
    parentComponent: "LinkNotDiscordModal",
    children: [(0, a.jsx)("img", {
      className: c.art,
      src: n(902623),
      alt: ""
    }), (0, a.jsx)(s.hzk, {
      children: (0, a.jsxs)("div", {
        className: c.modalContent,
        children: [(0, a.jsx)(s.X6q, {
          id: m,
          variant: "heading-lg/semibold",
          className: c.title,
          children: l.intl.string(l.t.biy1X1)
        }), (0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          className: c.body,
          children: l.intl.format(l.t.J86cyc, {
            url: e
          })
        })]
      })
    }), (0, a.jsxs)(s.mzw, {
      children: [(0, a.jsx)(s.zxk, {
        variant: "primary",
        text: l.intl.string(l.t["xl8R+/"]),
        type: "button",
        onClick: d
      }), (0, a.jsx)(i.zx, {
        type: "button",
        size: i.zx.Sizes.MEDIUM,
        color: i.zx.Colors.TRANSPARENT,
        look: i.zx.Looks.LINK,
        onClick: () => {
          (0, o.Z)(e, true)
        },
        children: l.intl.string(l.t.gQrLtr)
      })]
    })]
  })
}