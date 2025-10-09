/** Chunk was on 9343 **/
/** chunk id: 22150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js");

function m(e) {
  let {
    onNext: t,
    onClose: n
  } = e, [m, x] = s.useState(false), _ = (0, r.e7)([c.default], () => c.default.getCurrentUser()), E = async e => {
    e.preventDefault(), x(true);
    try {
      await (0, o.i)(), t()
    } catch (t) {
      let e = new l.Z(t).getAnyErrorMessage();
      null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE))
    } finally {
      x(false)
    }
  };
  return (0, a.jsxs)("form", {
    onSubmit: E,
    children: [(0, a.jsxs)(i.xBx, {
      separator: false,
      className: u.header,
      children: [(0, a.jsx)(i.Heading, {
        className: u.title,
        variant: "heading-xl/extrabold",
        children: d.intl.string(d.t.uFxYq6)
      }), (0, a.jsx)(i.olH, {
        onClick: n,
        className: u.modalCloseButton
      })]
    }), (0, a.jsx)(i.hzk, {
      className: u.content,
      children: (0, a.jsx)(i.Text, {
        className: u.description,
        variant: "text-md/normal",
        children: d.intl.format(d.t.oMFSgo, {
          oldEmail: null == _ ? true : _.email
        })
      })
    }), (0, a.jsxs)(i.mzw, {
      className: u.modalFooter,
      children: [(0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.__invalid_submit,
        children: (0, a.jsx)(i.Button, {
          variant: "primary",
          text: d.intl.string(d.t.rXV81N),
          type: "submit",
          loading: m
        })
      }), (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.__invalid_cancel,
        children: (0, a.jsx)(i.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oK"]),
          onClick: n
        })
      })]
    })]
  })
}