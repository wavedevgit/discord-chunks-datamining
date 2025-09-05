/** Chunk was on 9343 **/
/** chunk id: 134562, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk308569 = require("./308569.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js");

function o(e) {
  let {
    onNext: t,
    onClose: n
  } = e;
  return (0, a.jsxs)("form", {
    onSubmit: t,
    children: [(0, a.jsxs)(s.xBx, {
      separator: false,
      className: l.header,
      children: [(0, a.jsx)(s.X6q, {
        variant: "heading-xl/extrabold",
        children: i.intl.string(i.t.hhR7gY)
      }), (0, a.jsx)(s.olH, {
        onClick: n,
        className: l.modalCloseButton
      })]
    }), (0, a.jsxs)(s.hzk, {
      className: l.content,
      children: [(0, a.jsx)(s.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: i.intl.format(i.t.rqWXUV, {
          hcArticle: r.j1
        })
      }), (0, a.jsx)(s.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: i.intl.string(i.t["3LW10N"])
      })]
    }), (0, a.jsx)(s.mzw, {
      className: l.modalFooter,
      children: (0, a.jsxs)(s.hE2, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(s.zxk, {
          variant: "primary",
          text: i.intl.string(i.t["ETE/oK"]),
          onClick: n
        }), (0, a.jsx)(s.zxk, {
          variant: "secondary",
          text: i.intl.string(i.t.rwTBFh),
          onClick: t
        })]
      })
    })]
  })
}