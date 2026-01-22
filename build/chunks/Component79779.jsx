/** Chunk was on 19840 **/
/** chunk id: 79779, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk222872 = require("./222872.js");

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
  } = t, [m, S] = n.useState(false), [f, w] = n.useState(""), [C, k] = n.useState(false), [b, E] = n.useState(null), v = n.useRef(null), A = async t => {
    t.preventDefault(), E(null), S(true);
    try {
      let t = await s(f);
      null != y && y(t), g()
    } catch (t) {
      E(new o.A(t).getAnyErrorMessage())
    } finally {
      S(false)
    }
  }, j = async () => {
    if (!C) {
      k(true);
      try {
        await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeoz"]), l.ToastType.SUCCESS))
      } catch (e) {
        let t = new o.A(e).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        k(false)
      }
    }
  }, M = m || C;
  return (0, a.jsx)("form", {
    onSubmit: A,
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
      children: (0, a.jsxs)(l.BJc, {
        gap: 8,
        children: [(0, a.jsx)(l.ksK, {
          label: c.intl.string(c.t["8mZX6M"]),
          error: b,
          value: f,
          onChange: w,
          inputRef: v
        }), (0, a.jsx)(r.QWc, {
          textVariant: "text-sm/normal",
          text: c.intl.string(c.t.K0NPQ6),
          onClick: j
        })]
      })
    })
  })
}