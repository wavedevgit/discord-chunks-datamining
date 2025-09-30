/** Chunk was on 42758 **/
/** chunk id: 2702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./314940.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk219496 = require("./219496.js"),
  Chunk807369 = require("./807369.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk377238 = require("./377238.js");

function _(e) {
  var t, n;
  let {
    transitionState: a,
    onClose: _
  } = e, O = (0, l.e7)([f.default], () => {
    let e = f.default.getCurrentUser();
    return s()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), y = i.useMemo(() => E.ZP.canEditDiscriminator(O) && !O.hasUniqueUsername(), [O]), [p, T] = i.useState(O.username), [L, R] = i.useState(O.discriminator), [b, M] = i.useState(""), [A, P] = i.useState(false), C = (0, l.e7)([m.Z], () => m.Z.getErrors()), U = O.hasUniqueUsername(), x = (0, g.a)(p, U, false, O.username), N = i.useRef(null), w = i.useMemo(() => {
    var e, t, n;
    return null != (n = null == C || null == (e = C.username) ? true : e[0]) ? n : null == C || null == (t = C.discriminator) ? true : t[0]
  }, [C]);
  i.useEffect(() => {
    if (a === u.Dvm.ENTERED) {
      var e;
      null == (e = N.current) || e.focus()
    }
  }, [a]);
  let k = L !== O.discriminator;
  async function I(e) {
    e.preventDefault(), P(true);
    let t = await (0, d.Mn)({
      username: p,
      discriminator: y ? L : true,
      password: b
    });
    P(false), (null == t ? true : t.ok) && _()
  }
  return (0, r.jsxs)(u.Y0X, {
    transitionState: a,
    parentComponent: "ChangeUsernameModal",
    children: [(0, r.jsxs)(u.xBx, {
      separator: false,
      className: v.header,
      children: [(0, r.jsx)(u.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: v.title,
        children: S.intl.string(S.t["m5or5+"])
      }), (0, r.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: v.subtitle,
        children: S.intl.string(S.t.SLJvy8)
      }), (0, r.jsx)(u.olH, {
        onClick: _,
        className: v.modalCloseButton
      })]
    }), (0, r.jsxs)("form", {
      onSubmit: I,
      children: [(0, r.jsx)(u.hzk, {
        className: v.content,
        children: (0, r.jsxs)(u.Kqy, {
          gap: 16,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsxs)(u.Kqy, {
              direction: "horizontal",
              gap: 4,
              children: [(0, r.jsx)(u.oil, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = r
                  })
                }
                return e
              }({
                label: S.intl.string(S.t.TWzdWl),
                error: w,
                name: "username",
                value: p,
                maxLength: h.l$U,
                onChange: T,
                inputRef: N,
                fullWidth: true
              }, (n = O.hasUniqueUsername(), (0, o.EQ)(x).with({
                type: c.K.ERROR,
                message: o.P.select()
              }, e => ({
                error: e
              })).with({
                type: c.K.AVAILABLE,
                message: o.P.select()
              }, e => ({
                successMessage: e
              })).otherwise(() => n ? {
                helperText: S.intl.string(S.t.z7c4bG)
              } : {})))), !O.hasUniqueUsername() && (0, r.jsx)(u.oil, {
                name: "discriminator",
                "aria-label": S.intl.string(S.t.ozumaG),
                maxLength: 4,
                value: L,
                onChange: R,
                disabled: !y,
                leading: "#"
              })]
            }), k ? (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: v.discriminatorChangeWarning,
              children: S.intl.string(S.t.mConUV)
            }) : null]
          }), (0, r.jsx)(u.oil, {
            label: S.intl.string(S.t.TmdnJy),
            error: null == C || null == (t = C.password) ? true : t[0],
            type: "password",
            value: b,
            onChange: M
          })]
        })
      }), (0, r.jsxs)(u.mzw, {
        children: [(0, r.jsx)(u.zxk, {
          variant: "primary",
          text: S.intl.string(S.t.i4jeWV),
          type: "submit",
          loading: A
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: v.cancel,
          children: (0, r.jsx)(u.zxk, {
            variant: "secondary",
            text: S.intl.string(S.t["ETE/oK"]),
            onClick: _
          })
        })]
      })]
    })]
  })
}