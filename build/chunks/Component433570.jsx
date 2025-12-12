/** Chunk was on 56499 **/
/** chunk id: 433570, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800010 = require("./800010.js");

function p(t) {
  let {
    transitionState: e,
    onFormSubmit: s,
    onResend: p,
    onSuccess: y,
    onClose: g,
    headerText: d,
    confirmButtonText: h,
    confirmButtonVariant: x = "primary",
    impression: T
  } = t, [f, m] = n.useState(false), [S, w] = n.useState(""), [C, b] = n.useState(false), [k, v] = n.useState(null), E = n.useRef(null), j = async t => {
    t.preventDefault(), v(null), m(true);
    try {
      let t = await s(S);
      null != y && y(t), g()
    } catch (t) {
      v(new o.Z(t).getAnyErrorMessage())
    } finally {
      m(false)
    }
  }, A = async () => {
    if (!C) {
      b(true);
      try {
        await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeoz"]), l.ToastType.SUCCESS))
      } catch (e) {
        let t = new o.Z(e).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        b(false)
      }
    }
  }, M = f || C;
  return (0, a.jsx)("form", {
    onSubmit: j,
    children: (0, a.jsx)(r.ExpressiveModal, {
      transitionState: e,
      trackingProps: {
        impression: T,
        impressionType: i.ImpressionTypes.MODAL
      },
      graphic: {
        src: u,
        type: "image"
      },
      title: d,
      subtitle: c.intl.string(c.t.SZJowy),
      actions: [{
        text: c.intl.string(c.t["ETE/oC"]),
        onClick: g,
        variant: "secondary",
        disabled: M
      }, {
        text: h,
        variant: x,
        loading: M,
        type: "submit"
      }],
      onClose: g,
      children: (0, a.jsxs)(l.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(l.oil, {
          label: c.intl.string(c.t["8mZX6M"]),
          error: k,
          value: S,
          onChange: w,
          inputRef: E
        }), (0, a.jsx)(r.Avr, {
          textVariant: "text-sm/normal",
          text: c.intl.string(c.t.K0NPQ6),
          onClick: A
        })]
      })
    })
  })
}