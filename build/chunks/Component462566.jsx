/** Chunk was on web.js **/
/** chunk id: 462566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk507274 = require("./507274.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk754103 = require("./754103.jsx"),
  Chunk795487 = require("./795487.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk954873 = require("./954873.js"),
  Chunk189068 = require("./189068.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = function(e) {
  let {
    onCardInfoChange: t,
    error: n
  } = e, a = i.useRef(t), [m, E] = i.useState(false), [y, O] = i.useState({}), [v, I] = i.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [T, S] = i.useState({}), [A, C] = i.useState({}), {
    setFocusLockDisabled: N
  } = i.useContext(s.M);
  i.useEffect(() => () => {
    true !== N && N(false)
  });
  let R = i.useCallback(() => {
    true !== N && N(true)
  }, [N]);

  function P(e, t) {
    !!y[e] !== t && O(n => b(g({}, n), {
      [e]: t
    }))
  }
  let D = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      t = {};
    return (e || T.name) && "" === v.name && (t.name = _.intl.string(_.t.lIkVsi)), t
  }, [T, v]);

  function w() {
    C(D())
  }
  i.useEffect(() => {
    let e = y.cardNumber && y.cardExpiry && y.cardCvc && 0 === Object.keys(D(true)).length;
    a.current({
      name: v.name
    }, !!e)
  }, [y, v, D]);
  let L = [{
    fields: [{
      id: "card-number",
      name: "cardNumber",
      title: () => _.intl.string(_.t.cVyJ3o),
      getClassNameForLayout: () => h.width100,
      renderInput: () => (0, r.jsx)(f.Z, {
        stripeType: "cardNumber",
        flipped: m,
        updateCompleted: e => P("cardNumber", e),
        onFocus: R
      })
    }]
  }, {
    fields: [{
      id: "card-expiration-date",
      name: "cardExpiry",
      title: () => _.intl.string(_.t["CeBa/4"]),
      getClassNameForLayout: () => h.width50,
      renderInput: () => (0, r.jsx)(f.Z, {
        stripeType: "cardExpiry",
        updateCompleted: e => P("cardExpiry", e),
        onFocus: R
      })
    }, {
      id: "card-cvc",
      name: "cardCvc",
      title: () => _.intl.string(_.t.Fd3rOz),
      getClassNameForLayout: () => h.width50,
      renderInput: () => (0, r.jsx)(f.Z, {
        stripeType: "cardCvc",
        updateCompleted: e => P("cardCvc", e),
        onFocus: () => {
          R(), E(true)
        },
        onBlur: () => {
          E(false)
        }
      })
    }]
  }, {
    fields: [{
      id: "card-name",
      name: "name",
      title: () => _.intl.string(_.t.VUlFdU),
      autoComplete: "cc-name",
      placeholder: () => _.intl.string(_.t["yf7ms+"]),
      getClassNameForLayout: () => h.width100,
      renderInput: e => (0, r.jsx)(l.oil, g({}, e))
    }]
  }];

  function x(e, t) {
    if ("name" !== t && "country" !== t && "postalCode" !== t) return;
    let n = g({}, v),
      r = g({}, T),
      i = {
        name: A.name
      };
    T[t] || "" === e || (r[t] = true), n[t] = e, r[t] && "" === e ? "name" === t && (i.name = _.intl.string(_.t.lIkVsi)) : delete i[t], I(n), S(r), C(i)
  }

  function M() {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.nsfwAllowed) ? (0, r.jsxs)("div", {
      className: p.cardBrands,
      children: [(0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.visa, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.mastercard, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.discover, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.amex, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.jcb, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.dinersclub, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.unionpay, p.cardFormHeader)
      })]
    }) : (0, r.jsxs)("div", {
      className: p.cardBrands,
      children: [(0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.visa_monochrome, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.mastercard_monochrome, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.discover_monochrome, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.amex_monochrome, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.jcb_monochrome, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.dinersclub_monochrome, p.cardFormHeader)
      }), (0, r.jsx)("div", {
        className: o()(c.Uy.SMALL, p.unionpay_monochrome, p.cardFormHeader)
      })]
    })
  }
  return (0, r.jsxs)("div", {
    children: [M(), (0, r.jsx)(d.Z, {
      form: L,
      errors: A,
      formError: n,
      values: v,
      onFieldChange: x,
      onFieldBlur: w
    })]
  })
}