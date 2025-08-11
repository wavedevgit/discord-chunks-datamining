/** Chunk was on 94566 **/
/** chunk id: 965072, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800010 = require("./800010.js");

function p(t) {
  let {
    transitionState: e,
    onFormSubmit: n,
    onResend: p,
    onSuccess: y,
    onClose: d,
    headerText: h,
    confirmButtonText: g,
    confirmButtonVariant: T = "primary",
    impression: f
  } = t, [m, x] = a.useState(false), [S, w] = a.useState(""), [k, C] = a.useState(false), [b, j] = a.useState(null), v = a.useRef(null), E = async t => {
    t.preventDefault(), j(null), x(true);
    try {
      let t = await n(S);
      null != y && y(t), d()
    } catch (t) {
      j(new o.Z(t).getAnyErrorMessage())
    } finally {
      x(false)
    }
  }, A = async () => {
    if (!k) {
      C(true);
      try {
        await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeo6"]), l.ToastType.SUCCESS))
      } catch (e) {
        let t = new o.Z(e).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        C(false)
      }
    }
  }, R = m || k;
  return (0, s.jsx)("form", {
    onSubmit: E,
    children: (0, s.jsx)(r.I, {
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
      children: (0, s.jsxs)(l.Kqy, {
        gap: 8,
        children: [(0, s.jsx)(l.xJW, {
          title: c.intl.string(c.t["8mZX6O"]),
          error: b,
          children: (0, s.jsx)(l.oil, {
            value: S,
            onChange: w,
            inputRef: v
          })
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