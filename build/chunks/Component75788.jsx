/** Chunk was on 9343 **/
/** chunk id: 75788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js");

function x(e) {
  var t;
  let {
    isSlideReady: n,
    error: x,
    setEmailToken: u,
    setError: _,
    onNext: E,
    onClose: N
  } = e, [h, p] = s.useState(false), [A, C] = s.useState(""), [j, f] = s.useState(false), g = (0, r.e7)([c.Z], () => c.Z.getErrors()), S = s.useRef(null);
  s.useEffect(() => {
    if (n) {
      var e;
      null == (e = S.current) || e.focus()
    }
  }, [n]);
  let v = async e => {
    e.preventDefault(), _(null), p(true);
    try {
      let {
        token: e
      } = await (0, o.w)(A);
      u(e), E()
    } catch (e) {
      _(new l.Z(e).getAnyErrorMessage())
    } finally {
      p(false)
    }
  }, O = async () => {
    if (!j) {
      f(true);
      try {
        await (0, o.i)(true), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["84yeo6"]), i.ToastType.SUCCESS))
      } catch (t) {
        let e = new l.Z(t).getAnyErrorMessage();
        null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE))
      } finally {
        f(false)
      }
    }
  };
  return (0, a.jsxs)("form", {
    onSubmit: v,
    children: [(0, a.jsxs)(i.xBx, {
      separator: false,
      className: m.header,
      children: [(0, a.jsx)(i.X6q, {
        className: m.title,
        variant: "heading-xl/extrabold",
        children: d.intl.string(d.t.jMGc4O)
      }), (0, a.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: m.subtitle,
        children: d.intl.string(d.t.SZJow8)
      }), (0, a.jsx)(i.olH, {
        onClick: N,
        className: m.modalCloseButton
      })]
    }), (0, a.jsxs)(i.hzk, {
      className: m.content,
      children: [(0, a.jsx)(i.xJW, {
        title: d.intl.string(d.t["8mZX6O"]),
        error: null != x ? x : null == g || null == (t = g.email_token) ? true : t[0],
        children: (0, a.jsx)(i.oil, {
          value: A,
          onChange: C,
          inputRef: S
        })
      }), (0, a.jsx)(i.Text, {
        className: m.help,
        variant: "text-sm/normal",
        children: d.intl.format(d.t.P0sak5, {
          onResend: O
        })
      })]
    }), (0, a.jsx)(i.mzw, {
      children: (0, a.jsx)(i.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.PDTjLC),
        type: "submit",
        loading: h
      })
    })]
  })
}