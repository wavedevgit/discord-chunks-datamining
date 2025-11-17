/** Chunk was on 20670 **/
/** chunk id: 993018, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx");
let p = RegExp("(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$", "i");

function c(t) {
  let {
    transitionState: e,
    onFormSubmit: n,
    onSuccess: c,
    onClose: d,
    headerText: m,
    confirmButtonText: h,
    confirmButtonVariant: f = "primary"
  } = t, [y, A] = s.useState(false), [g, v] = s.useState(""), [C, E] = s.useState(null), Z = s.useRef(null), b = async t => {
    if (t.preventDefault(), E(null), A(true), false === p.test(g)) {
      E(u.intl.string(u.t.hML7Gw)), A(false);
      return
    }
    try {
      let t = null != n ? await n(g) : true;
      null != c && (null != t ? c({
        response: t,
        email: g
      }) : c(g)), d()
    } catch (t) {
      E(new o.Z(t).getAnyErrorMessage())
    } finally {
      A(false)
    }
  };
  return (0, i.jsx)("form", {
    onSubmit: b,
    children: (0, i.jsx)(a.Modal, {
      transitionState: e,
      trackingProps: {
        impression: {
          impressionName: r.ImpressionNames.URF_ENTER_EMAIL
        },
        impressionType: r.ImpressionTypes.MODAL
      },
      title: m,
      actions: [{
        text: u.intl.string(u.t["ETE/oC"]),
        onClick: d,
        variant: "secondary",
        disabled: y
      }, {
        text: h,
        variant: f,
        loading: y,
        type: "submit"
      }],
      onClose: d,
      children: (0, i.jsx)(l.oil, {
        label: u.intl.string(u.t.hvOfmC),
        error: C,
        value: g,
        onChange: v,
        inputRef: Z
      })
    })
  })
}