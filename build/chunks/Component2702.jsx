/** Chunk was on 42758 **/
/** chunk id: 2702, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./314940.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk219496 = require("./219496.js"),
  Chunk575681 = require("./575681.js"),
  Chunk807369 = require("./807369.js"),
  Chunk180529 = require("./180529.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk377238 = require("./377238.js");
let _ = e => {
  let {
    usernameStatus: n,
    showHint: t
  } = e;
  return (0, c.EQ)(n).with({
    type: h.K.ERROR,
    message: c.P.select()
  }, e => (0, a.jsx)(d.Text, {
    variant: "text-sm/normal",
    color: "text-danger",
    children: e
  })).with({
    type: h.K.AVAILABLE,
    message: c.P.select()
  }, e => (0, a.jsx)(d.Text, {
    variant: "text-sm/normal",
    color: "text-feedback-positive",
    children: e
  })).otherwise(() => t ? (0, a.jsx)(d.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: j.intl.string(j.t.z7c4bG)
  }) : null)
};

function C(e) {
  var n;
  let {
    transitionState: t,
    onClose: s
  } = e, l = (0, u.e7)([v.default], () => {
    let e = v.default.getCurrentUser();
    return i()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), c = r.useMemo(() => b.ZP.canEditDiscriminator(l) && !l.hasUniqueUsername(), [l]), [C, k] = r.useState(false), [T, w] = r.useState(l.username), [L, U] = r.useState(l.discriminator), [y, N] = r.useState(""), [A, B] = r.useState(false), S = (0, u.e7)([p.Z], () => p.Z.getErrors()), q = (0, x.n)(), I = l.hasUniqueUsername() && q, W = (0, f.a)(T, I, false, l.username), z = r.useRef(null), M = r.useMemo(() => {
    var e, n, t;
    return null != (t = null == S || null == (e = S.username) ? true : e[0]) ? t : null == S || null == (n = S.discriminator) ? true : n[0]
  }, [S]);
  r.useEffect(() => {
    if (t === d.Dvm.ENTERED) {
      var e;
      null == (e = z.current) || e.focus()
    }
  }, [t]);
  let K = L !== l.discriminator;
  async function O(e) {
    e.preventDefault(), B(true);
    let n = await (0, m.Mn)({
      username: T,
      discriminator: c ? L : true,
      password: y
    });
    B(false), (null == n ? true : n.ok) && s()
  }
  let V = r.useMemo(() => o()(k, 50), []);
  return (0, a.jsxs)(d.Y0X, {
    transitionState: t,
    parentComponent: "ChangeUsernameModal",
    children: [(0, a.jsxs)(d.xBx, {
      separator: false,
      className: E.header,
      children: [(0, a.jsx)(d.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: E.title,
        children: j.intl.string(j.t["m5or5+"])
      }), (0, a.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: E.subtitle,
        children: j.intl.string(j.t.SLJvy8)
      }), (0, a.jsx)(d.olH, {
        onClick: s,
        className: E.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: O,
      children: [(0, a.jsxs)(d.hzk, {
        className: E.content,
        children: [(0, a.jsx)(d.xJW, {
          title: j.intl.string(j.t.TWzdWl),
          error: M,
          children: (0, a.jsxs)(d.Kqy, {
            direction: "horizontal",
            gap: 4,
            children: [(0, a.jsx)(d.oil, {
              name: "username",
              "aria-label": j.intl.string(j.t.qqhR3N),
              value: T,
              maxLength: R.l$U,
              onChange: w,
              onFocus: () => V(true),
              onBlur: () => V(false),
              inputRef: z,
              fullWidth: true
            }), !l.hasUniqueUsername() && (0, a.jsx)(d.oil, {
              name: "discriminator",
              "aria-label": j.intl.string(j.t.ozumaG),
              maxLength: 4,
              value: L,
              onChange: U,
              onFocus: () => V(true),
              onBlur: () => V(false),
              disabled: !c,
              leading: "#"
            })]
          })
        }), K ? (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: E.discriminatorChangeWarning,
          children: j.intl.string(j.t.mConUV)
        }) : null, I ? (0, a.jsx)(g.Z, {
          show: (null == W ? true : W.type) === h.K.ERROR || C,
          top: 8,
          bottom: 4,
          children: (0, a.jsx)(_, {
            usernameStatus: W,
            showHint: l.hasUniqueUsername()
          })
        }) : null, (0, a.jsx)(d.xJW, {
          className: E.password,
          title: j.intl.string(j.t.TmdnJy),
          error: null == S || null == (n = S.password) ? true : n[0],
          children: (0, a.jsx)(d.oil, {
            type: "password",
            value: y,
            onChange: N
          })
        })]
      }), (0, a.jsxs)(d.mzw, {
        children: [(0, a.jsx)(d.zxk, {
          variant: "primary",
          text: j.intl.string(j.t.i4jeWV),
          type: "submit",
          loading: A
        }), (0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: E.cancel,
          children: (0, a.jsx)(d.zxk, {
            variant: "secondary",
            text: j.intl.string(j.t["ETE/oK"]),
            onClick: s
          })
        })]
      })]
    })]
  })
}