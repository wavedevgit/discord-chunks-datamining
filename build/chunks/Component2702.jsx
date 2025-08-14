/** Chunk was on 42758 **/
/** chunk id: 2702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./314940.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk954955 = require("./954955.js"),
  c = require.n(Chunk954955),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk377238 = require("./377238.js"),
  Chunk979712 = require("./979712.js");
let N = e => {
  let {
    usernameStatus: t,
    showHint: n
  } = e;
  return (0, d.EQ)(t).with({
    type: p.K.ERROR,
    message: d.P.select()
  }, e => (0, a.jsx)(x.Text, {
    variant: "text-sm/normal",
    color: "text-danger",
    children: e
  })).with({
    type: p.K.AVAILABLE,
    message: d.P.select()
  }, e => (0, a.jsx)(x.Text, {
    variant: "text-sm/normal",
    color: "text-feedback-positive",
    children: e
  })).otherwise(() => n ? (0, a.jsx)(x.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: U.intl.string(U.t.z7c4bG)
  }) : null)
};

function E(e) {
  var t;
  let {
    transitionState: n,
    onClose: i
  } = e, r = (0, m.e7)([_.default], () => {
    let e = _.default.getCurrentUser();
    return u()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), o = s.useMemo(() => C.ZP.canEditDiscriminator(r) && !r.hasUniqueUsername(), [r]), [d, E] = s.useState(false), [y, L] = s.useState(r.username), [R, S] = s.useState(r.discriminator), [T, q] = s.useState(""), [F, B] = s.useState(false), W = (0, m.e7)([j.Z], () => j.Z.getErrors()), z = (0, b.n)(), M = r.hasUniqueUsername() && z, D = (0, g.a)(y, M, false, r.username), J = s.useRef(null), K = s.useMemo(() => {
    var e, t, n;
    return null != (n = null == W || null == (e = W.username) ? true : e[0]) ? n : null == W || null == (t = W.discriminator) ? true : t[0]
  }, [W]);
  s.useEffect(() => {
    if (n === x.Dvm.ENTERED) {
      var e;
      null == (e = J.current) || e.focus()
    }
  }, [n]);
  let Z = R !== r.discriminator;
  async function A(e) {
    e.preventDefault(), B(true);
    let t = await (0, f.Mn)({
      username: y,
      discriminator: o ? R : true,
      password: T
    });
    B(false), (null == t ? true : t.ok) && i()
  }
  let P = s.useMemo(() => c()(E, 50), []);
  return (0, a.jsxs)(x.Y0X, {
    transitionState: n,
    parentComponent: "ChangeUsernameModal",
    children: [(0, a.jsxs)(x.xBx, {
      separator: false,
      className: k.header,
      children: [(0, a.jsx)(x.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        className: k.title,
        children: U.intl.string(U.t["m5or5+"])
      }), (0, a.jsx)(x.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: k.subtitle,
        children: U.intl.string(U.t.SLJvy8)
      }), (0, a.jsx)(x.olH, {
        onClick: i,
        className: k.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: A,
      children: [(0, a.jsxs)(x.hzk, {
        className: k.content,
        children: [(0, a.jsx)(x.xJW, {
          title: U.intl.string(U.t.TWzdWl),
          error: K,
          children: (0, a.jsxs)("div", {
            className: l()(I.input, k.multiInput, {
              [I.error]: null != K,
              [I.focused]: d
            }),
            children: [(0, a.jsx)(h.Is, {
              name: "username",
              "aria-label": U.intl.string(U.t.qqhR3N),
              value: y,
              maxLength: w.l$U,
              onChange: L,
              onFocus: () => P(true),
              onBlur: () => P(false),
              inputRef: J,
              className: k.multiInputFirst,
              inputClassName: l()(k.multiInputField, {
                [k.lowercase]: r.hasUniqueUsername()
              })
            }), !r.hasUniqueUsername() && (0, a.jsx)(h.Is, {
              name: "discriminator",
              "aria-label": U.intl.string(U.t.ozumaG),
              maxLength: 4,
              value: R,
              onChange: S,
              onFocus: () => P(true),
              onBlur: () => P(false),
              disabled: !o,
              className: k.multiInputLast,
              inputClassName: k.multiInputField
            })]
          })
        }), Z ? (0, a.jsx)(x.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: k.discriminatorChangeWarning,
          children: U.intl.string(U.t.mConUV)
        }) : null, M ? (0, a.jsx)(v.Z, {
          show: (null == D ? true : D.type) === p.K.ERROR || d,
          top: 8,
          bottom: 4,
          children: (0, a.jsx)(N, {
            usernameStatus: D,
            showHint: r.hasUniqueUsername()
          })
        }) : null, (0, a.jsx)(x.xJW, {
          className: k.password,
          title: U.intl.string(U.t.TmdnJy),
          error: null == W || null == (t = W.password) ? true : t[0],
          children: (0, a.jsx)(x.oil, {
            type: "password",
            value: T,
            onChange: q
          })
        })]
      }), (0, a.jsxs)(x.mzw, {
        children: [(0, a.jsx)(x.zxk, {
          variant: "primary",
          text: U.intl.string(U.t.i4jeWV),
          type: "submit",
          loading: F
        }), (0, a.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: k.cancel,
          children: (0, a.jsx)(x.zxk, {
            variant: "secondary",
            text: U.intl.string(U.t["ETE/oK"]),
            onClick: i
          })
        })]
      })]
    })]
  })
}