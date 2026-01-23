/** Chunk was on web.js **/
/** chunk id: 502639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk305866 = require("./305866.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk832208 = require("./832208.jsx"),
  Chunk622678 = require("./622678.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk150067 = require("./150067.js"),
  Chunk784550 = require("./784550.js");

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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = function(e) {
  let {
    onCardInfoChange: t,
    error: n
  } = e, a = i.useRef(t), [m, E] = i.useState(false), [b, O] = i.useState({}), [v, A] = i.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [I, S] = i.useState({}), [T, C] = i.useState({}), {
    setFocusLockDisabled: N
  } = i.useContext(o.M);
  i.useEffect(() => () => {
    true !== N && N(false)
  });
  let R = i.useCallback(() => {
    true !== N && N(true)
  }, [N]);

  function w(e, t) {
    !!b[e] !== t && O(n => y(g({}, n), {
      [e]: t
    }))
  }
  let P = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      t = {};
    return (e || I.name) && "" === v.name && (t.name = p.intl.string(p.t.lIkVsi)), t
  }, [I, v]);

  function D() {
    C(P())
  }
  i.useEffect(() => {
    let e = b.cardNumber && b.cardExpiry && b.cardCvc && 0 === Object.keys(P(true)).length;
    a.current({
      name: v.name
    }, !!e)
  }, [b, v, P]);
  let x = [{
    fields: [{
      id: "card-number",
      name: "cardNumber",
      title: () => p.intl.string(p.t.cVyJ3o),
      getClassNameForLayout: () => h.c6,
      renderInput: () => (0, r.jsx)(f.A, {
        stripeType: "cardNumber",
        flipped: m,
        updateCompleted: e => w("cardNumber", e),
        onFocus: R
      })
    }]
  }, {
    fields: [{
      id: "card-expiration-date",
      name: "cardExpiry",
      title: () => p.intl.string(p.t["CeBa/4"]),
      getClassNameForLayout: () => h.ep,
      renderInput: () => (0, r.jsx)(f.A, {
        stripeType: "cardExpiry",
        updateCompleted: e => w("cardExpiry", e),
        onFocus: R
      })
    }, {
      id: "card-cvc",
      name: "cardCvc",
      title: () => p.intl.string(p.t.Fd3rOz),
      getClassNameForLayout: () => h.ep,
      renderInput: () => (0, r.jsx)(f.A, {
        stripeType: "cardCvc",
        updateCompleted: e => w("cardCvc", e),
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
      title: () => p.intl.string(p.t.VUlFdU),
      autoComplete: "cc-name",
      placeholder: () => p.intl.string(p.t["yf7ms+"]),
      getClassNameForLayout: () => h.c6,
      renderInput: e => (0, r.jsx)(l.ksK, g({}, e))
    }]
  }];

  function L(e, t) {
    if ("name" !== t && "country" !== t && "postalCode" !== t) return;
    let n = g({}, v),
      r = g({}, I),
      i = {
        name: T.name
      };
    I[t] || "" === e || (r[t] = true), n[t] = e, r[t] && "" === e ? "name" === t && (i.name = p.intl.string(p.t.lIkVsi)) : delete i[t], A(n), S(r), C(i)
  }

  function j() {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.nsfwAllowed) ? (0, r.jsxs)("div", {
      className: _.Rm,
      children: [(0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.eo, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.DR, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.k4, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.a3, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.CY, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.Q5, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.YA, _.Ud)
      })]
    }) : (0, r.jsxs)("div", {
      className: _.Rm,
      children: [(0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.aq, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.VX, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.Yi, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.qR, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.m2, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _.Ij, _.Ud)
      }), (0, r.jsx)("div", {
        className: s()(c.y3.SMALL, _._V, _.Ud)
      })]
    })
  }
  return (0, r.jsxs)("div", {
    children: [j(), (0, r.jsx)(d.A, {
      form: x,
      errors: T,
      formError: n,
      values: v,
      onFieldChange: L,
      onFieldBlur: D
    })]
  })
}