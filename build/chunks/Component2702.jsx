/** Chunk was on 42758 **/
/** chunk id: 2702, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => w
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
let k = e => {
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
    children: C.intl.string(C.t.z7c4bG)
  }) : null)
};

function w(e) {
  var n;
  let {
    transitionState: t,
    onClose: s
  } = e, l = (0, u.e7)([b.default], () => {
    let e = b.default.getCurrentUser();
    return i()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), c = r.useMemo(() => v.ZP.canEditDiscriminator(l) && !l.hasUniqueUsername(), [l]), [w, U] = r.useState(false), [y, E] = r.useState(l.username), [N, R] = r.useState(l.discriminator), [S, T] = r.useState(""), [q, W] = r.useState(false), z = (0, u.e7)([p.Z], () => p.Z.getErrors()), B = (0, x.n)(), L = l.hasUniqueUsername() && B, M = (0, f.a)(y, L, false, l.username), K = r.useRef(null), D = r.useMemo(() => {
    var e, n, t;
    return null != (t = null == z || null == (e = z.username) ? true : e[0]) ? t : null == z || null == (n = z.discriminator) ? true : n[0]
  }, [z]);
  r.useEffect(() => {
    if (t === d.Dvm.ENTERED) {
      var e;
      null == (e = K.current) || e.focus()
    }
  }, [t]);
  let J = N !== l.discriminator;
  async function Z(e) {
    e.preventDefault(), W(true);
    let n = await (0, m.Mn)({
      username: y,
      discriminator: c ? N : true,
      password: S
    });
    W(false), (null == n ? true : n.ok) && s()
  }
  let A = r.useMemo(() => o()(U, 50), []);
  return (0, a.jsxs)(d.Y0X, {
    transitionState: t,
    parentComponent: "ChangeUsernameModal",
    children: [(0, a.jsxs)(d.xBx, {
      separator: false,
      className: _.header,
      children: [(0, a.jsx)(d.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: _.title,
        children: C.intl.string(C.t["m5or5+"])
      }), (0, a.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: _.subtitle,
        children: C.intl.string(C.t.SLJvy8)
      }), (0, a.jsx)(d.olH, {
        onClick: s,
        className: _.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: Z,
      children: [(0, a.jsxs)(d.hzk, {
        className: _.content,
        children: [(0, a.jsx)(d.xJW, {
          title: C.intl.string(C.t.TWzdWl),
          error: D,
          children: (0, a.jsxs)(d.Kqy, {
            direction: "horizontal",
            gap: 4,
            children: [(0, a.jsx)(d.oil, {
              name: "username",
              "aria-label": C.intl.string(C.t.qqhR3N),
              value: y,
              maxLength: j.l$U,
              onChange: E,
              onFocus: () => A(true),
              onBlur: () => A(false),
              inputRef: K,
              fullWidth: true
            }), !l.hasUniqueUsername() && (0, a.jsx)(d.oil, {
              name: "discriminator",
              "aria-label": C.intl.string(C.t.ozumaG),
              maxLength: 4,
              value: N,
              onChange: R,
              onFocus: () => A(true),
              onBlur: () => A(false),
              disabled: !c,
              leading: "#"
            })]
          })
        }), J ? (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: _.discriminatorChangeWarning,
          children: C.intl.string(C.t.mConUV)
        }) : null, L ? (0, a.jsx)(g.Z, {
          show: (null == M ? true : M.type) === h.K.ERROR || w,
          top: 8,
          bottom: 4,
          children: (0, a.jsx)(k, {
            usernameStatus: M,
            showHint: l.hasUniqueUsername()
          })
        }) : null, (0, a.jsx)(d.xJW, {
          className: _.password,
          title: C.intl.string(C.t.TmdnJy),
          error: null == z || null == (n = z.password) ? true : n[0],
          children: (0, a.jsx)(d.oil, {
            type: "password",
            value: S,
            onChange: T
          })
        })]
      }), (0, a.jsxs)(d.mzw, {
        children: [(0, a.jsx)(d.zxk, {
          variant: "primary",
          text: C.intl.string(C.t.i4jeWV),
          type: "submit",
          loading: q
        }), (0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: _.cancel,
          children: (0, a.jsx)(d.zxk, {
            variant: "secondary",
            text: C.intl.string(C.t["ETE/oK"]),
            onClick: s
          })
        })]
      })]
    })]
  })
}