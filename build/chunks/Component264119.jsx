/** Chunk was on 9343 **/
/** chunk id: 264119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk191208 = require("./191208.js");

function l(e) {
  let {
    email: t,
    onClose: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(a.xBx, {
      separator: false,
      className: i.header,
      children: [(0, s.jsx)(a.X6q, {
        className: i.title,
        variant: "heading-xl/semibold",
        children: r.intl.string(r.t["8O+nFx"])
      }), (0, s.jsx)(a.olH, {
        onClick: n,
        className: i.modalCloseButton
      })]
    }), (0, s.jsx)(a.hzk, {
      className: i.content,
      children: (0, s.jsx)(a.Text, {
        className: i.description,
        variant: "text-md/normal",
        children: r.intl.format(r.t.Zvx0Oz, {
          email: t
        })
      })
    }), (0, s.jsx)(a.hzk, {
      className: i.content,
      children: (0, s.jsx)(a.Text, {
        className: i.tooltip,
        variant: "text-sm/normal",
        children: r.intl.string(r.t.yb7itb)
      })
    }), (0, s.jsx)(a.mzw, {
      className: i.modalFooter,
      children: (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: i.__invalid_submit,
        children: (0, s.jsx)(a.zxk, {
          variant: "primary",
          text: r.intl.string(r.t.BddRzc),
          onClick: n
        })
      })
    })]
  })
}