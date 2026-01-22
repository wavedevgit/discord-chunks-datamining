/** Chunk was on 29232 **/
/** chunk id: 180275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk985018 = require("./985018.jsx");
let p = RegExp("(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$", "i");

function c(e) {
  let {
    transitionState: t,
    onFormSubmit: n,
    onSuccess: c,
    onClose: d,
    headerText: h,
    confirmButtonText: m,
    confirmButtonVariant: A = "primary",
    helperText: f
  } = e, [y, g] = i.useState(false), [k, v] = i.useState(""), [x, C] = i.useState(null), E = i.useRef(null), b = async e => {
    if (e.preventDefault(), C(null), g(true), false === p.test(k)) {
      C(u.intl.string(u.t.hML7Gw)), g(false);
      return
    }
    try {
      let e = null != n ? await n(k) : true;
      null != c && (null != e ? c({
        response: e,
        email: k
      }) : c(k)), d()
    } catch (e) {
      C(new o.A(e).getAnyErrorMessage())
    } finally {
      g(false)
    }
  };
  return (0, s.jsx)("form", {
    onSubmit: b,
    children: (0, s.jsx)(a.Modal, {
      transitionState: t,
      trackingProps: {
        impression: {
          impressionName: r.ImpressionNames.URF_ENTER_EMAIL
        },
        impressionType: r.ImpressionTypes.MODAL
      },
      title: h,
      actions: [{
        text: u.intl.string(u.t["ETE/oC"]),
        onClick: d,
        variant: "secondary",
        disabled: y
      }, {
        text: m,
        variant: A,
        loading: y,
        type: "submit"
      }],
      onClose: d,
      children: (0, s.jsx)(l.ksK, {
        label: u.intl.string(u.t.hvOfmC),
        error: x,
        value: k,
        onChange: v,
        helperText: f,
        inputRef: E
      })
    })
  })
}