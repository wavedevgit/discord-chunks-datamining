/** Chunk was on 54160 **/
/** chunk id: 325866, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk92674 = require("./92674.js"),
  Chunk397927 = require("./397927.js"),
  Chunk950191 = require("./950191.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk587510 = require("./587510.jsx"),
  Chunk789622 = require("./789622.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk299043 = require("./299043.js");

function p(e) {
  var t, r;
  let {
    userRef: p,
    usernameSuggestionLoading: h = false,
    oneClickFlow: y = false
  } = e, O = function(e, t) {
    if (null == e) return {};
    var r, n, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]), {
    user: S,
    editState: b,
    onClose: v
  } = O, _ = (0, o.Ay)(S.id), A = function(e, t, r) {
    switch (e) {
      case m.iv.EDIT_USERNAME:
        return {
          header: f.intl.string(f.t["a/zCWh"]), subtitle: f.intl.string(f.t.gGz0se)
        };
      case m.iv.EDIT_DISPLAY_NAME:
        return {
          header: f.intl.string(f.t.SRDNcG), subtitle: f.intl.string(f.t["940AS0"])
        };
      case m.iv.PREVIEW:
        return {
          header: f.intl.formatToPlainString(f.t.XDHrcj, {
            displayName: t
          }), subtitle: f.intl.format(f.t.bWE0ZD, {
            onClick: () => {
              r(), (0, l.openUserSettings)()
            }
          })
        };
      case m.iv.SUGGESTION:
        return {
          header: f.intl.string(f.t.F7T4db), subtitle: f.intl.formatToPlainString(f.t.Z8F83a, {}), link: f.intl.format(f.t.i2vB8z, {
            helpdeskArticle: c.A.getArticleURL(g.MVz.POMELO_FAQ)
          })
        };
      default:
        return {
          header: f.intl.string(f.t["a/zCWh"]), subtitle: f.intl.string(f.t.gGz0se)
        }
    }
  }(b, u.Ay.getName(S), v), [j, N] = (0, s.zhh)(() => ({
    opacity: 0,
    y: 10
  }));
  return i.useEffect(() => {
    N({
      y: 0,
      opacity: 1,
      from: {
        y: 10,
        opacity: 0
      }
    })
  }, [N, b]), (0, n.jsxs)("div", {
    className: E.xm,
    children: [(0, n.jsxs)(a.animated.div, {
      style: {
        opacity: j.opacity,
        y: j.y
      },
      children: [(0, n.jsx)(s.Heading, {
        className: E.DD,
        color: "text-strong",
        variant: "heading-xl/extrabold",
        children: A.header
      }), (0, n.jsxs)("div", {
        className: E.VA,
        children: [(0, n.jsx)(s.Heading, {
          color: "text-default",
          variant: "heading-sm/medium",
          children: A.subtitle
        }), null != A.link && (0, n.jsx)(s.Text, {
          className: E.nf,
          color: "text-default",
          variant: "text-sm/medium",
          children: A.link
        })]
      })]
    }), (0, n.jsx)(d.A, (t = function(e) {
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
    }({}, O), r = r = {
      displayProfile: _,
      ref: p,
      usernameSuggestionLoading: h,
      oneClickFlow: y
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))]
  })
}