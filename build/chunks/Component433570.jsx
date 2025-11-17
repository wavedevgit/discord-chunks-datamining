/** Chunk was on 56499 **/
/** chunk id: 433570, original params: t,e,a (module,exports,require) **/
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
    onFormSubmit: a,
    onResend: p,
    onSuccess: y,
    onClose: d,
    headerText: h,
    confirmButtonText: g,
    confirmButtonVariant: T = "primary",
    impression: f
  } = t, [m, x] = n.useState(false), [S, w] = n.useState(""), [C, b] = n.useState(false), [k, v] = n.useState(null), E = n.useRef(null), j = async t => {
    t.preventDefault(), v(null), x(true);
    try {
      let t = await a(S);
      null != y && y(t), d()
    } catch (t) {
      v(new o.Z(t).getAnyErrorMessage())
    } finally {
      x(false)
    }
  }, M = async () => {
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
  }, A = m || C;
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
      subtitle: c.intl.string(c.t.SZJowy),
      actions: [{
        text: c.intl.string(c.t["ETE/oC"]),
        onClick: d,
        variant: "secondary",
        disabled: A
      }, {
        text: g,
        variant: T,
        loading: A,
        type: "submit"
      }],
      onClose: d,
      children: (0, s.jsxs)(l.Kqy, {
        gap: 8,
        children: [(0, s.jsx)(l.oil, {
          label: c.intl.string(c.t["8mZX6M"]),
          error: k,
          value: S,
          onChange: w,
          inputRef: E
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: c.intl.format(c.t.P0sak5, {
            onResend: M
          })
        })]
      })
    })
  })
}