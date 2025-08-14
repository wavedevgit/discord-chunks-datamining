/** Chunk was on 9343 **/
/** chunk id: 134562, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk308569 = require("./308569.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js");

function o(e) {
  let {
    onNext: t,
    onClose: n
  } = e;
  return (0, s.jsxs)("form", {
    onSubmit: t,
    children: [(0, s.jsxs)(a.xBx, {
      separator: false,
      className: l.header,
      children: [(0, s.jsx)(a.X6q, {
        variant: "heading-xl/extrabold",
        children: i.intl.string(i.t.hhR7gY)
      }), (0, s.jsx)(a.olH, {
        onClick: n,
        className: l.modalCloseButton
      })]
    }), (0, s.jsxs)(a.hzk, {
      className: l.content,
      children: [(0, s.jsx)(a.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: i.intl.format(i.t.rqWXUV, {
          hcArticle: r.j1
        })
      }), (0, s.jsx)(a.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: i.intl.string(i.t["3LW10N"])
      })]
    }), (0, s.jsx)(a.mzw, {
      className: l.modalFooter,
      children: (0, s.jsxs)(a.hE2, {
        direction: "horizontal-reverse",
        children: [(0, s.jsx)(a.zxk, {
          variant: "primary",
          text: i.intl.string(i.t["ETE/oK"]),
          onClick: n
        }), (0, s.jsx)(a.zxk, {
          variant: "secondary",
          text: i.intl.string(i.t.rwTBFh),
          onClick: t
        })]
      })
    })]
  })
}