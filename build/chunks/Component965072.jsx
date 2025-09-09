/** Chunk was on 94566 **/
/** chunk id: 965072, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk667202 = require("./667202.jsx"),
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
  } = t, [m, S] = s.useState(false), [w, x] = s.useState(""), [b, k] = s.useState(false), [C, v] = s.useState(null), E = s.useRef(null), j = async t => {
    t.preventDefault(), v(null), S(true);
    try {
      let t = await a(w);
      null != y && y(t), d()
    } catch (t) {
      v(new o.Z(t).getAnyErrorMessage())
    } finally {
      S(false)
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
  }, R = m || b;
  return (0, n.jsx)("form", {
    onSubmit: j,
    children: (0, n.jsx)(r.I, {
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
        disabled: R
      }, {
        text: g,
        variant: T,
        loading: R,
        type: "submit"
      }],
      onClose: d,
      children: (0, n.jsxs)(l.Kqy, {
        gap: 8,
        children: [(0, n.jsx)(l.oil, {
          label: c.intl.string(c.t["8mZX6O"]),
          error: C,
          value: w,
          onChange: x,
          inputRef: E
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: c.intl.format(c.t.P0sak5, {
            onResend: A
          })
        })]
      })
    })
  })
}