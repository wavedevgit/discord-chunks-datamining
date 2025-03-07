/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(219929),
  c = n(594174),
  u = n(754103),
  d = n(12464),
  f = n(388032),
  _ = n(575031),
  p = n(857254);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = function(e) {
  let {
    onCardInfoChange: t,
    error: n
  } = e, o = i.useRef(t), [h, g] = i.useState(!1), [v, b] = i.useState({}), [y, O] = i.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [I, S] = i.useState({}), [T, N] = i.useState({});

  function A(e, t) {
    !!v[e] !== t && b(n => E(m({}, n), {
      [e]: t
    }))
  }
  let C = i.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = {};
    return (e || I.name) && "" === y.name && (t.name = f.NW.string(f.t.lIkVsr)), t
  }, [I, y]);

  function R() {
    N(C())
  }
  i.useEffect(() => {
    let e = v.cardNumber && v.cardExpiry && v.cardCvc && 0 === Object.keys(C(!0)).length;
    o.current({
      name: y.name
    }, !!e)
  }, [v, y, C]);
  let P = [{
    fields: [{
      name: "cardNumber",
      title: () => f.NW.string(f.t.cVyJ3t),
      getClassNameForLayout: () => p.width100,
      renderInput: () => (0, r.jsx)(d.Z, {
        stripeType: "cardNumber",
        flipped: h,
        updateCompleted: e => A("cardNumber", e)
      })
    }]
  }, {
    fields: [{
      name: "cardExpiry",
      title: () => f.NW.string(f.t["CeBa//"]),
      getClassNameForLayout: () => p.width50,
      renderInput: () => (0, r.jsx)(d.Z, {
        stripeType: "cardExpiry",
        updateCompleted: e => A("cardExpiry", e)
      })
    }, {
      name: "cardCvc",
      title: () => f.NW.string(f.t.Fd3rOz),
      getClassNameForLayout: () => p.width50,
      renderInput: () => (0, r.jsx)(d.Z, {
        stripeType: "cardCvc",
        updateCompleted: e => A("cardCvc", e),
        onFocus: () => {
          g(!0)
        },
        onBlur: () => {
          g(!1)
        }
      })
    }]
  }, {
    fields: [{
      id: "card-name",
      name: "name",
      title: () => f.NW.string(f.t.VUlFdX),
      autoComplete: "cc-name",
      placeholder: () => f.NW.string(f.t.yf7ms7),
      getClassNameForLayout: () => p.width100,
      renderInput: e => (0, r.jsx)(s.oil, m({}, e))
    }]
  }];

  function w(e, t) {
    if ("name" !== t && "country" !== t && "postalCode" !== t) return;
    let n = m({}, y),
      r = m({}, I),
      i = {
        name: T.name
      };
    I[t] || "" === e || (r[t] = !0), n[t] = e, r[t] && "" === e ? "name" === t && (i.name = f.NW.string(f.t.lIkVsr)) : delete i[t], O(n), S(r), N(i)
  }

  function D() {
    var e;
    return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) ? (0, r.jsxs)("div", {
      className: _.cardBrands,
      children: [(0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.visa, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.mastercard, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.discover, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.amex, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.jcb, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.dinersclub, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.unionpay, _.cardFormHeader)
      })]
    }) : (0, r.jsxs)("div", {
      className: _.cardBrands,
      children: [(0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.visa_monochrome, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.mastercard_monochrome, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.discover_monochrome, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.amex_monochrome, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.jcb_monochrome, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.dinersclub_monochrome, _.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: a()(l.Uy.SMALL, _.unionpay_monochrome, _.cardFormHeader)
      })]
    })
  }
  return (0, r.jsxs)("div", {
    children: [D(), (0, r.jsx)(u.Z, {
      form: P,
      errors: T,
      formError: n,
      values: y,
      onFieldChange: w,
      onFieldBlur: R
    })]
  })
}