/** Chunk was on 804 **/
/** chunk id: 89616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk365007 = require("./365007.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463373 = require("./463373.js");

function o(e) {
  let {
    transitionState: t,
    onClose: n,
    credential: o
  } = e, [d, u] = s.useState(false), [h, x] = s.useState(""), [m, p] = s.useState(true), g = s.useRef(null);
  async function f(e) {
    e.preventDefault(), u(true);
    try {
      await (0, i.WQ)(o.id, h), n()
    } catch (e) {
      p(e.message)
    } finally {
      u(false)
    }
  }
  return s.useEffect(() => {
    if (t === l.Dvm.ENTERED) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [t]), (0, a.jsxs)(l.Y0X, {
    transitionState: t,
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
          onChange: x,
          autoFocus: true,
          required: true,
          error: m
        })
      }), (0, a.jsxs)(l.mzw, {
        children: [(0, a.jsx)(l.zxk, {
          variant: "primary",
          text: r.intl.string(r.t.i4jeWV),
          type: "submit",
          loading: d,
          disabled: 0 === h.length || h.length > 32
        }), (0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: c.cancel,
          children: (0, a.jsx)(l.zxk, {
            variant: "secondary",
            text: r.intl.string(r.t["ETE/oK"]),
            onClick: n
          })
        })]
      })]
    })]
  })
}