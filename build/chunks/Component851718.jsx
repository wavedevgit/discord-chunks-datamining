/** Chunk was on web.js **/
/** chunk id: 851718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk823379 = require("./823379.js"),
  Chunk106976 = require("./106976.js"),
  Chunk270144 = require("./270144.js"),
  Chunk301935 = require("./301935.jsx"),
  Chunk630656 = require("./630656.js"),
  Chunk10970 = require("./10970.jsx"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = "https://support.discord.com/hc/en-us";
class y extends Chunk647438.PureComponent {
  static getDerivedStateFromError(e) {
    return {
      hasError: true
    }
  }
  render() {
    return this.state.hasError ? (0, Chunk951288.jsxs)(Chunk481060.qXd, {
      color: Chunk481060.DM8.DANGER,
      style: {
        borderRadius: 0
      },
      children: [Chunk388032.intl.format(Chunk388032.t.IIHUUF, {
        subscriptionId: this.props.subscription.id
      }), " ", Chunk388032.intl.format(Chunk388032.t.fh65ES, {
        helpLink: b
      })]
    }) : this.props.children
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      hasError: false
    })
  }
}

function O(e) {
  let {
    subscriptions: t,
    updateHeader: n
  } = e, [a, _] = i.useState({
    route: u.j.HOME
  }), {
    route: h
  } = a, E = () => {
    _({
      route: u.j.HOME
    })
  }, b = e => {
    _(p({
      route: u.j.SWITCH_APP_PLANS
    }, e)), n(f.intl.string(f.t.VFqtkP), E)
  }, [O, v] = i.useState({});
  i.useEffect(() => {
    for (let n of t) {
      var e;
      let t = null == (e = n.items[0]) ? true : e.planId;
      null != t && (v(e => m(p({}, e), {
        [n.id]: c.G.LOADING
      })), (0, s.vY)(t).then(() => {
        v(e => m(p({}, e), {
          [n.id]: c.G.DONE
        }))
      }).catch(() => {
        v(e => m(p({}, e), {
          [n.id]: c.G.ERROR
        }))
      }))
    }
  }, [t]);
  let {
    loadState: I
  } = (0, l.qz)(), T = I !== l.jd.LOADED;
  switch (h) {
    case u.j.HOME:
      return (0, r.jsx)(r.Fragment, {
        children: t.map(e => {
          var t;
          return (0, r.jsx)(y, {
            subscription: e,
            children: (0, r.jsx)(c.Z, {
              subscription: e,
              navigateToSwitchPlan: b,
              loadingState: T ? c.G.LOADING : null != (t = O[e.id]) ? t : c.G.LOADING
            })
          }, e.id)
        })
      });
    case u.j.SWITCH_APP_PLANS:
      let {
        route: S
      } = a, A = g(a, ["route"]);
      return (0, r.jsx)(d.Z, m(p({}, A), {
        navigateToHome: E
      }));
    default:
      (0, o.vE)(h)
  }
}