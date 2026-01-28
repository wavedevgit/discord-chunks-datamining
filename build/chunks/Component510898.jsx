/** Chunk was on 5606 **/
/** chunk id: 510898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk403362 = require("./403362.js"),
  Chunk143582 = require("./143582.js"),
  Chunk915043 = require("./915043.js"),
  Chunk888848 = require("./888848.jsx"),
  Chunk331441 = require("./331441.js"),
  Chunk20770 = require("./20770.jsx"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class f extends Chunk64700.PureComponent {
  static getDerivedStateFromError(e) {
    return {
      hasError: true
    }
  }
  render() {
    return this.state.hasError ? (0, r.jsxs)(l.$Td, {
      color: l.Hv$.DANGER,
      style: {
        borderRadius: 0
      },
      children: [p.intl.format(p.t.IIHUUF, {
        subscriptionId: this.props.subscription.id
      }), " ", p.intl.format(p.t.fh65ES, {
        helpLink: "https://support.discord.com/hc/en-us"
      })]
    }) : this.props.children
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      hasError: false
    })
  }
}

function b(e) {
  let {
    subscriptions: t,
    updateHeader: n
  } = e, [l, _] = i.useState({
    route: d.R.HOME
  }), {
    route: b
  } = l, h = () => {
    _({
      route: d.R.HOME
    })
  }, A = e => {
    _(m({
      route: d.R.SWITCH_APP_PLANS
    }, e)), n(p.intl.string(p.t.VFqtkP), h)
  }, [E, x] = i.useState({});
  i.useEffect(() => {
    for (let n of t) {
      var e;
      let t = null == (e = n.items[0]) ? true : e.planId;
      null != t && (x(e => g(m({}, e), {
        [n.id]: c.G.LOADING
      })), (0, a._R)(t).then(() => {
        x(e => g(m({}, e), {
          [n.id]: c.G.DONE
        }))
      }).catch(() => {
        x(e => g(m({}, e), {
          [n.id]: c.G.ERROR
        }))
      }))
    }
  }, [t]);
  let {
    loadState: O
  } = (0, o.E)(), C = O !== o.mJ.LOADED;
  switch (b) {
    case d.R.HOME:
      return (0, r.jsx)(r.Fragment, {
        children: t.map(e => {
          var t;
          return (0, r.jsx)(f, {
            subscription: e,
            children: (0, r.jsx)(c.A, {
              subscription: e,
              navigateToSwitchPlan: A,
              loadingState: C ? c.G.LOADING : null != (t = E[e.id]) ? t : c.G.LOADING
            })
          }, e.id)
        })
      });
    case d.R.SWITCH_APP_PLANS:
      let {
        route: y
      } = l, j = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(l, ["route"]);
      return (0, r.jsx)(u.A, g(m({}, j), {
        navigateToHome: h
      }));
    default:
      (0, s.xb)(b)
  }
}