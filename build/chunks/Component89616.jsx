/** Chunk was on 804 **/
/** chunk id: 89616, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk365007 = require("./365007.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463373 = require("./463373.js");

function o(t) {
  let {
    transitionState: e,
    onClose: n,
    credential: o
  } = t, [d, u] = s.useState(false), [h, m] = s.useState(""), [x, p] = s.useState(true), g = s.useRef(null);
  async function f(t) {
    t.preventDefault(), u(true);
    try {
      await (0, i.WQ)(o.id, h), n()
    } catch (t) {
      p(t.message)
    } finally {
      u(false)
    }
  }
  return s.useEffect(() => {
    if (e === l.Dvm.ENTERED) {
      var t;
      null == (t = g.current) || t.focus()
    }
  }, [e]), (0, a.jsxs)(l.Y0X, {
    transitionState: e,
    parentComponent: "EditCredentialModal",
    children: [(0, a.jsxs)(l.xBx, {
      separator: false,
      className: c.header,
      children: [(0, a.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-lg/bold",
        className: c.subtitle,
        children: r.intl.string(r.t.YjuMsb)
      }), (0, a.jsx)(l.olH, {
        onClick: n,
        className: c.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: f,
      children: [(0, a.jsx)(l.hzk, {
        className: c.content,
        children: (0, a.jsx)(l.oil, {
          label: r.intl.string(r.t["7yEgJS"]),
          inputRef: g,
          "aria-label": r.intl.string(r.t["7yEgJS"]),
          placeholder: o.name,
          value: h,
          minLength: 1,
          maxLength: 32,
          onChange: m,
          autoFocus: true,
          required: true,
          error: x
        })
      }), (0, a.jsxs)(l.mzw, {
        children: [(0, a.jsx)(l.Button, {
          variant: "primary",
          text: r.intl.string(r.t.i4jeWV),
          type: "submit",
          loading: d,
          disabled: 0 === h.length || h.length > 32
        }), (0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: c.cancel,
          children: (0, a.jsx)(l.Button, {
            variant: "secondary",
            text: r.intl.string(r.t["ETE/oK"]),
            onClick: n
          })
        })]
      })]
    })]
  })
}