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
  Chunk793030 = require("./793030.js"),
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
  } = e, y = (0, u.e7)([f.default], () => {
    let e = f.default.getCurrentUser();
    return s()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), T = r.useMemo(() => S.ZP.canEditDiscriminator(y) && !y.hasUniqueUsername(), [y]), [p, L] = r.useState(y.username), [R, M] = r.useState(y.discriminator), [A, P] = r.useState(""), [b, U] = r.useState(false), C = (0, u.e7)([E.Z], () => E.Z.getErrors()), w = y.hasUniqueUsername(), N = (0, m.a)(p, w, false, y.username), I = r.useRef(null), k = r.useMemo(() => {
    var e, t, n;
    return null != (n = null == C || null == (e = C.username) ? true : e[0]) ? n : null == C || null == (t = C.discriminator) ? true : t[0]
  }, [C]);
  r.useEffect(() => {
    if (a === d.Dvm.ENTERED) {
      var e;
      null == (e = I.current) || e.focus()
    }
  }, [a]);
  let x = R !== y.discriminator;
  async function G(e) {
    e.preventDefault(), U(true);
    let t = await (0, g.Mn)({
      username: p,
      discriminator: T ? R : true,
      password: A
    });
    U(false), (null == t ? true : t.ok) && _()
  }
  return (0, i.jsx)("form", {
    onSubmit: G,
    children: (0, i.jsx)(l.Modal, {
      onClose: _,
      transitionState: a,
      title: v.intl.string(v.t["m5or5+"]),
      subtitle: v.intl.string(v.t.SLJvy8),
      actions: [{
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oK"]),
        onClick: _
      }, {
        variant: "primary",
        text: v.intl.string(v.t.i4jeWV),
        onClick: G,
        loading: b
      }],
      children: (0, i.jsxs)(d.Kqy, {
        gap: 16,
        children: [(0, i.jsxs)("div", {
          children: [(0, i.jsxs)(d.Kqy, {
            direction: "horizontal",
            gap: 4,
            children: [(0, i.jsx)(d.oil, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  var i;
                  i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = i
                })
              }
              return e
            }({
              label: v.intl.string(v.t.TWzdWl),
              error: k,
              name: "username",
              value: p,
              maxLength: h.l$U,
              onChange: L,
              inputRef: I,
              fullWidth: true
            }, (n = y.hasUniqueUsername(), (0, o.EQ)(N).with({
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
              helperText: v.intl.string(v.t.z7c4bG)
            } : {})))), !y.hasUniqueUsername() && (0, i.jsx)(d.oil, {
              name: "discriminator",
              "aria-label": v.intl.string(v.t.ozumaG),
              maxLength: 4,
              value: R,
              onChange: M,
              disabled: !T,
              leading: "#"
            })]
          }), x ? (0, i.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: O.discriminatorChangeWarning,
            children: v.intl.string(v.t.mConUV)
          }) : null]
        }), (0, i.jsx)(d.oil, {
          label: v.intl.string(v.t.TmdnJy),
          error: null == C || null == (t = C.password) ? true : t[0],
          type: "password",
          value: A,
          onChange: P
        })]
      })
    })
  })
}