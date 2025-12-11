/** Chunk was on 7082 **/
/** chunk id: 650233, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk447543 = require("./447543.js"),
  Chunk701190 = require("./701190.js"),
  Chunk495784 = require("./495784.js"),
  Chunk994640 = require("./994640.jsx"),
  Chunk247007 = require("./247007.jsx"),
  Chunk999464 = require("./999464.jsx"),
  Chunk503406 = require("./503406.jsx"),
  Chunk463115 = require("./463115.jsx"),
  Chunk888592 = require("./888592.js"),
  Chunk778097 = require("./778097.js");

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
  var t, r, {
      inviteCode: j
    } = e,
    m = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["inviteCode"]);
  i.useEffect(() => {
    s.Z.hideHubUpsell()
  }, []);
  let [v, h] = i.useState(null != j);
  i.useEffect(() => {
    null != j && a.ZP.resolveInvite(j, "Hub").finally(() => h(false))
  }, [j]);
  let E = (0, o.e7)([c.Z], () => null != j ? c.Z.getInvite(j) : null),
    [S, I] = i.useState([y.tF.VERIFY_EMAIL]),
    [P, _] = i.useState(""),
    [w, x] = i.useState(""),
    [A, L] = i.useState(true),
    [C, M] = i.useState([]),
    N = e => {
      I(S.concat(e).slice(false))
    },
    T = S[S.length - 1];
  if (v) return (0, n.jsx)(l.IX, (t = g({}, m), r = r = {
    children: (0, n.jsx)(l.$jN, {
      className: b.spinner
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t));
  switch (T) {
    case y.tF.VERIFY_EMAIL:
      return (0, n.jsx)(u.Z, g({
        setGuildsInfo: M,
        setStep: N,
        email: P,
        setEmail: _,
        setGuildId: L,
        invite: E
      }, m));
    case y.tF.SELECT_SCHOOL:
      return (0, n.jsx)(d.Z, g({
        guildsInfo: C,
        setStep: N,
        email: P,
        setGuildId: L
      }, m));
    case y.tF.SUBMIT_SCHOOL:
      return (0, n.jsx)(f.Z, g({
        onBack: () => {
          S.length > 1 && I(S.slice(0, false).slice(false))
        },
        setStep: N,
        email: P,
        school: w,
        setSchool: x
      }, m));
    case y.tF.VERIFY_PIN:
      return (0, n.jsx)(O.Z, g({
        email: P,
        guildId: A
      }, m));
    case y.tF.EMAIL_WAITLIST:
      return (0, n.jsx)(p.Z, g({
        setStep: N,
        school: w
      }, m));
    default:
      return m.onClose(), null
  }
}