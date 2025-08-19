/** Chunk was on 66181 **/
/** chunk id: 851718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function p(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class f extends Chunk647438.PureComponent {
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
      }), " ", Chunk388032.intl.format(Chunk388032.t.fh65ER, {
        helpLink: "https://support.discord.com/hc/en-us"
      })]
    }) : this.props.children
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      hasError: false
    })
  }
}

function b(e) {
  let {
    subscriptions: t,
    updateHeader: n
  } = e, [s, p] = r.useState({
    route: d.j.HOME
  }), {
    route: b
  } = s, x = () => {
    p({
      route: d.j.HOME
    })
  }, _ = e => {
    p(g({
      route: d.j.SWITCH_APP_PLANS
    }, e)), n(m.intl.string(m.t.VFqtkJ), x)
  }, [j, E] = r.useState({});
  r.useEffect(() => {
    for (let n of t) {
      var e;
      let t = null == (e = n.items[0]) ? true : e.planId;
      null != t && (E(e => h(g({}, e), {
        [n.id]: c.G.LOADING
      })), (0, l.vY)(t).then(() => {
        E(e => h(g({}, e), {
          [n.id]: c.G.DONE
        }))
      }).catch(() => {
        E(e => h(g({}, e), {
          [n.id]: c.G.ERROR
        }))
      }))
    }
  }, [t]);
  let {
    loadState: C
  } = (0, o.qz)(), O = C !== o.jd.LOADED;
  switch (b) {
    case d.j.HOME:
      return (0, i.jsx)(i.Fragment, {
        children: t.map(e => {
          var t;
          return (0, i.jsx)(f, {
            subscription: e,
            children: (0, i.jsx)(c.Z, {
              subscription: e,
              navigateToSwitchPlan: _,
              loadingState: O ? c.G.LOADING : null != (t = j[e.id]) ? t : c.G.LOADING
            })
          }, e.id)
        })
      });
    case d.j.SWITCH_APP_PLANS:
      let {
        route: v
      } = s, S = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            s = Object.keys(e);
          for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(s, ["route"]);
      return (0, i.jsx)(u.Z, h(g({}, S), {
        navigateToHome: x
      }));
    default:
      (0, a.vE)(b)
  }
}