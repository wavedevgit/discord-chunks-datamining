/** Chunk was on 85342 **/
/** chunk id: 108793, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk687158 = require("./687158.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk544508 = require("./544508.jsx"),
  Chunk801461 = require("./801461.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk927687 = require("./927687.js");

function E(e) {
  var t, r, {
      userRef: E,
      usernameSuggestionLoading: h = false,
      oneClickFlow: y = false
    } = e,
    O = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]);
  let {
    user: b,
    editState: S,
    onClose: _
  } = O, x = (0, l.ZP)(b.id), v = function(e, t, r) {
    switch (e) {
      case m.Wq.EDIT_USERNAME:
        return {
          header: f.intl.string(f.t["a/zCWl"]), subtitle: f.intl.string(f.t.gGz0sb)
        };
      case m.Wq.EDIT_DISPLAY_NAME:
        return {
          header: f.intl.string(f.t.SRDNcH), subtitle: f.intl.string(f.t["940AS0"])
        };
      case m.Wq.PREVIEW:
        return {
          header: f.intl.formatToPlainString(f.t.XDHrcn, {
            displayName: t
          }), subtitle: f.intl.format(f.t.bWE0ZG, {
            onClick: () => {
              r(), s.Z.open(g.oAB.ACCOUNT)
            }
          })
        };
      case m.Wq.SUGGESTION:
        return {
          header: f.intl.string(f.t.F7T4dX), subtitle: f.intl.formatToPlainString(f.t.Z8F83d, {}), link: f.intl.format(f.t["i2vB8/"], {
            helpdeskArticle: c.Z.getArticleURL(g.BhN.POMELO_FAQ)
          })
        };
      default:
        return {
          header: f.intl.string(f.t["a/zCWl"]), subtitle: f.intl.string(f.t.gGz0sb)
        }
    }
  }(S, u.ZP.getName(b), _), [N, j] = (0, o.q_F)(() => ({
    opacity: 0,
    y: 10
  }));
  return i.useEffect(() => {
    j({
      y: 0,
      opacity: 1,
      from: {
        y: 10,
        opacity: 0
      }
    })
  }, [j, S]), (0, n.jsxs)("div", {
    className: p.displayNameContainer,
    children: [(0, n.jsxs)(a.animated.div, {
      style: {
        opacity: N.opacity,
        y: N.y
      },
      children: [(0, n.jsx)(o.X6q, {
        className: p.title,
        color: "header-primary",
        variant: "heading-xl/extrabold",
        children: v.header
      }), (0, n.jsxs)("div", {
        className: p.subtitle,
        children: [(0, n.jsx)(o.X6q, {
          color: "header-secondary",
          variant: "heading-sm/medium",
          children: v.subtitle
        }), null != v.link && (0, n.jsx)(o.Text, {
          className: p.link,
          color: "header-secondary",
          variant: "text-sm/medium",
          children: v.link
        })]
      })]
    }), (0, n.jsx)(d.Z, (t = function(e) {
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
      displayProfile: x,
      ref: E,
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