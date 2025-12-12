/** Chunk was on 804 **/
/** chunk id: 89616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk365007 = require("./365007.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk676641 = require("./676641.js");

function o(e) {
  let {
    transitionState: t,
    onClose: n,
    credential: o
  } = e, [d, u] = s.useState(false), [f, h] = s.useState(""), [b, m] = s.useState(true), x = s.useRef(null);
  async function p(e) {
    e.preventDefault(), u(true);
    try {
      await (0, i.WQ)(o.id, f), n()
    } catch (e) {
      m(e.message)
    } finally {
      u(false)
    }
  }
  return s.useEffect(() => {
    if (t === l.Dvm.ENTERED) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [t]), (0, a.jsxs)(l.Y0X, {
    transitionState: t,
    parentComponent: "EditCredentialModal",
    children: [(0, a.jsxs)(l.xBx, {
      separator: false,
      className: c.header,
      children: [(0, a.jsx)(l.Text, {
        color: "text-default",
        variant: "text-lg/bold",
        className: c.subtitle,
        children: r.intl.string(r.t.YjuMsf)
      }), (0, a.jsx)(l.olH, {
        onClick: n,
        className: c.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: p,
      children: [(0, a.jsx)(l.hzk, {
        className: c.content,
        children: (0, a.jsx)(l.oil, {
          label: r.intl.string(r.t["7yEgJY"]),
          inputRef: x,
          "aria-label": r.intl.string(r.t["7yEgJY"]),
          placeholder: o.name,
          value: f,
          minLength: 1,
          maxLength: 32,
          onChange: h,
          autoFocus: true,
          required: true,
          error: b
        })
      }), (0, a.jsxs)(l.mzw, {
        children: [(0, a.jsx)(l.Button, {
          variant: "primary",
          text: r.intl.string(r.t.i4jeWR),
          type: "submit",
          loading: d,
          disabled: 0 === f.length || f.length > 32
        }), (0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: c.cancel,
          children: (0, a.jsx)(l.Button, {
            variant: "secondary",
            text: r.intl.string(r.t["ETE/oC"]),
            onClick: n
          })
        })]
      })]
    })]
  })
}