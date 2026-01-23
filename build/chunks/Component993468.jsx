/** Chunk was on 27533 **/
/** chunk id: 993468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./801541.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk889137 = require("./889137.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk963334 = require("./963334.js"),
  Chunk781436 = require("./781436.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk197266 = require("./197266.js");

function _(e) {
  var t, n;
  let {
    transitionState: s,
    onClose: _
  } = e, y = (0, u.bG)([h.default], () => {
    let e = h.default.getCurrentUser();
    return a()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), T = i.useMemo(() => f.Ay.canEditDiscriminator(y) && !y.hasUniqueUsername(), [y]), [p, A] = i.useState(y.username), [R, L] = i.useState(y.discriminator), [b, P] = i.useState(""), [C, M] = i.useState(false), U = (0, u.bG)([E.A], () => E.A.getErrors()), w = y.hasUniqueUsername(), k = (0, m.i)(p, w, false, y.username), I = i.useRef(null), N = i.useMemo(() => {
    var e, t, n;
    return null != (e = null == U || null == (t = U.username) ? true : t[0]) ? e : null == U || null == (n = U.discriminator) ? true : n[0]
  }, [U]);
  i.useEffect(() => {
    if (s === d.ip4.ENTERED) {
      var e;
      null == (e = I.current) || e.focus()
    }
  }, [s]);
  let G = R !== y.discriminator;
  async function x(e) {
    e.preventDefault(), M(true);
    let t = await (0, g.yu)({
      username: p,
      discriminator: T ? R : true,
      password: b
    });
    M(false), (null == t ? true : t.ok) && _()
  }
  return (0, r.jsx)("form", {
    onSubmit: x,
    children: (0, r.jsx)(l.Modal, {
      onClose: _,
      transitionState: s,
      title: v.intl.string(v.t.m5or54),
      subtitle: v.intl.string(v.t.SLJvy0),
      actions: [{
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: _
      }, {
        variant: "primary",
        text: v.intl.string(v.t.i4jeWR),
        type: "submit",
        loading: C
      }],
      children: (0, r.jsxs)(d.BJc, {
        gap: 16,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsxs)(d.BJc, {
            direction: "horizontal",
            gap: 4,
            children: [(0, r.jsx)(d.ksK, function(e) {
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
              label: v.intl.string(v.t.TWzdWj),
              error: N,
              name: "username",
              value: p,
              maxLength: S.d0r,
              onChange: A,
              inputRef: I,
              fullWidth: true
            }, (n = y.hasUniqueUsername(), (0, o.YW)(k).with({
              type: c.q.ERROR,
              message: o.P.select()
            }, e => ({
              error: e
            })).with({
              type: c.q.AVAILABLE,
              message: o.P.select()
            }, e => ({
              successMessage: e
            })).otherwise(() => n ? {
              helperText: v.intl.string(v.t.z7c4bP)
            } : {})))), !y.hasUniqueUsername() && (0, r.jsx)(d.ksK, {
              name: "discriminator",
              "aria-label": v.intl.string(v.t.ozumaN),
              maxLength: 4,
              value: R,
              onChange: L,
              disabled: !T,
              leading: "#"
            })]
          }), G ? (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: O.Z,
            children: v.intl.string(v.t.mConUX)
          }) : null]
        }), (0, r.jsx)(d.ksK, {
          label: v.intl.string(v.t.TmdnJ3),
          error: null == U || null == (t = U.password) ? true : t[0],
          type: "password",
          value: b,
          onChange: P
        })]
      })
    })
  })
}