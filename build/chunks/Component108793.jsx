/** Chunk was on 81162 **/
/** chunk id: 108793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk687158 = require("./687158.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk544508 = require("./544508.jsx"),
  Chunk801461 = require("./801461.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk38579 = require("./38579.js");

function p(e) {
  var t, n, {
      userRef: p,
      usernameSuggestionLoading: h = false,
      oneClickFlow: y = false
    } = e,
    O = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]);
  let {
    user: S,
    editState: b,
    onClose: _
  } = O, N = (0, s.ZP)(S.id), v = function(e, t, n) {
    switch (e) {
      case m.Wq.EDIT_USERNAME:
        return {
          header: f.intl.string(f.t["a/zCWh"]), subtitle: f.intl.string(f.t.gGz0se)
        };
      case m.Wq.EDIT_DISPLAY_NAME:
        return {
          header: f.intl.string(f.t.SRDNcG), subtitle: f.intl.string(f.t["940AS0"])
        };
      case m.Wq.PREVIEW:
        return {
          header: f.intl.formatToPlainString(f.t.XDHrcj, {
            displayName: t
          }), subtitle: f.intl.format(f.t.bWE0ZD, {
            onClick: () => {
              n(), (0, l.openUserSettings)()
            }
          })
        };
      case m.Wq.SUGGESTION:
        return {
          header: f.intl.string(f.t.F7T4db), subtitle: f.intl.formatToPlainString(f.t.Z8F83a, {}), link: f.intl.format(f.t.i2vB8z, {
            helpdeskArticle: c.Z.getArticleURL(g.BhN.POMELO_FAQ)
          })
        };
      default:
        return {
          header: f.intl.string(f.t["a/zCWh"]), subtitle: f.intl.string(f.t.gGz0se)
        }
    }
  }(b, u.ZP.getName(S), _), [x, T] = (0, o.q_F)(() => ({
    opacity: 0,
    y: 10
  }));
  return i.useEffect(() => {
    T({
      y: 0,
      opacity: 1,
      from: {
        y: 10,
        opacity: 0
      }
    })
  }, [T, b]), (0, r.jsxs)("div", {
    className: E.displayNameContainer,
    children: [(0, r.jsxs)(a.animated.div, {
      style: {
        opacity: x.opacity,
        y: x.y
      },
      children: [(0, r.jsx)(o.Heading, {
        className: E.title,
        color: "header-primary",
        variant: "heading-xl/extrabold",
        children: v.header
      }), (0, r.jsxs)("div", {
        className: E.subtitle,
        children: [(0, r.jsx)(o.Heading, {
          color: "header-secondary",
          variant: "heading-sm/medium",
          children: v.subtitle
        }), null != v.link && (0, r.jsx)(o.Text, {
          className: E.link,
          color: "header-secondary",
          variant: "text-sm/medium",
          children: v.link
        })]
      })]
    }), (0, r.jsx)(d.Z, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, O), n = n = {
      displayProfile: N,
      ref: p,
      usernameSuggestionLoading: h,
      oneClickFlow: y
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}