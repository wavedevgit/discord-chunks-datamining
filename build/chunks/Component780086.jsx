/** Chunk was on 98363 **/
/** chunk id: 780086, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk846293 = require("./846293.js"),
  Chunk299091 = require("./299091.js"),
  Chunk509099 = require("./509099.js"),
  Chunk197654 = require("./197654.jsx"),
  Chunk365940 = require("./365940.jsx"),
  Chunk531461 = require("./531461.jsx"),
  Chunk71441 = require("./71441.jsx"),
  Chunk760322 = require("./760322.jsx"),
  Chunk330936 = require("./330936.js"),
  Chunk634580 = require("./634580.js");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function j(e) {
  let {
    inviteCode: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["inviteCode"]);
  l.useEffect(() => {
    s.A.hideHubUpsell()
  }, []);
  let [j, m] = l.useState(null != t);
  l.useEffect(() => {
    null != t && a.Ay.resolveInvite(t, "Hub").finally(() => m(false))
  }, [t]);
  let h = (0, o.bG)([c.A], () => null != t ? c.A.getInvite(t) : null),
    [E, v] = l.useState([b.Di.VERIFY_EMAIL]),
    [I, S] = l.useState(""),
    [w, P] = l.useState(""),
    [A, _] = l.useState(true),
    [x, L] = l.useState([]),
    R = e => {
      v(E.concat(e).slice(false))
    },
    C = E[E.length - 1];
  if (j) {
    var D, T;
    return (0, n.jsx)(i.dWK, (D = g({}, r), T = T = {
      children: (0, n.jsx)(i.y$y, {
        className: d.u
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(T)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(T)).forEach(function(e) {
      Object.defineProperty(D, e, Object.getOwnPropertyDescriptor(T, e))
    }), D))
  }
  switch (C) {
    case b.Di.VERIFY_EMAIL:
      return (0, n.jsx)(u.A, g({
        setGuildsInfo: L,
        setStep: R,
        email: I,
        setEmail: S,
        setGuildId: _,
        invite: h
      }, r));
    case b.Di.SELECT_SCHOOL:
      return (0, n.jsx)(p.A, g({
        guildsInfo: x,
        setStep: R,
        email: I,
        setGuildId: _
      }, r));
    case b.Di.SUBMIT_SCHOOL:
      return (0, n.jsx)(y.A, g({
        onBack: () => {
          E.length > 1 && v(E.slice(0, false).slice(false))
        },
        setStep: R,
        email: I,
        school: w,
        setSchool: P
      }, r));
    case b.Di.VERIFY_PIN:
      return (0, n.jsx)(f.A, g({
        email: I,
        guildId: A
      }, r));
    case b.Di.EMAIL_WAITLIST:
      return (0, n.jsx)(O.A, g({
        setStep: R,
        school: w
      }, r));
    default:
      return r.onClose(), null
  }
}