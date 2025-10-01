/** Chunk was on 56499 **/
/** chunk id: 433570, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800010 = require("./800010.js");

function p(t) {
  let {
    transitionState: e,
    onFormSubmit: a,
    onResend: p,
    onSuccess: y,
    onClose: d,
    headerText: h,
    confirmButtonText: g,
    confirmButtonVariant: T = "primary",
    impression: f
  } = t, [m, x] = n.useState(false), [S, w] = n.useState(""), [b, k] = n.useState(false), [v, C] = n.useState(null), E = n.useRef(null), j = async t => {
    t.preventDefault(), C(null), x(true);
    try {
      let t = await a(S);
      null != y && y(t), d()
    } catch (t) {
      C(new o.Z(t).getAnyErrorMessage())
    } finally {
      x(false)
    }
  }, A = async () => {
    if (!b) {
      k(true);
      try {
        await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeo6"]), l.ToastType.SUCCESS))
      } catch (e) {
        let t = new o.Z(e).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        k(false)
      }
    }
  }, M = m || b;
  return (0, s.jsx)("form", {
    onSubmit: j,
    children: (0, s.jsx)(r.ExpressiveModal, {
      transitionState: e,
      trackingProps: {
        impression: f,
        impressionType: i.ImpressionTypes.MODAL
      },
      graphic: {
        src: u,
        type: "image"
      },
      title: h,
      subtitle: c.intl.string(c.t.SZJow8),
      actions: [{
        text: c.intl.string(c.t["ETE/oK"]),
        onClick: d,
        variant: "secondary",
        disabled: M
      }, {
        text: g,
        variant: T,
        loading: M,
        type: "submit"
      }],
      onClose: d,
      children: (0, s.jsxs)(l.Kqy, {
        gap: 8,
        children: [(0, s.jsx)(l.oil, {
          label: c.intl.string(c.t["8mZX6O"]),
          error: v,
          value: S,
          onChange: w,
          inputRef: E
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: c.intl.format(c.t.P0sak5, {
            onResend: A
          })
        })]
      })
    })
  })
}