/** Chunk was on 9343 **/
/** chunk id: 264119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk810512 = require("./810512.js");

function l(e) {
  let {
    email: t,
    onClose: n
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(s.xBx, {
      separator: false,
      className: i.header,
      children: [(0, a.jsx)(s.X6q, {
        className: i.title,
        variant: "heading-xl/semibold",
        children: r.intl.string(r.t["8O+nFx"])
      }), (0, a.jsx)(s.olH, {
        onClick: n,
        className: i.modalCloseButton
      })]
    }), (0, a.jsx)(s.hzk, {
      className: i.content,
      children: (0, a.jsx)(s.Text, {
        className: i.description,
        variant: "text-md/normal",
        children: r.intl.format(r.t.Zvx0Oz, {
          email: t
        })
      })
    }), (0, a.jsx)(s.hzk, {
      className: i.content,
      children: (0, a.jsx)(s.Text, {
        className: i.tooltip,
        variant: "text-sm/normal",
        children: r.intl.string(r.t.yb7itb)
      })
    }), (0, a.jsx)(s.mzw, {
      className: i.modalFooter,
      children: (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: i.__invalid_submit,
        children: (0, a.jsx)(s.zxk, {
          variant: "primary",
          text: r.intl.string(r.t.BddRzc),
          onClick: n
        })
      })
    })]
  })
}