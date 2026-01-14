/** Chunk was on 85342 **/
/** chunk id: 108793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk853590 = require("./853590.js"),
  Chunk481060 = require("./481060.js"),
  Chunk687158 = require("./687158.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk544508 = require("./544508.jsx"),
  Chunk801461 = require("./801461.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk991119 = require("./991119.js");

function p(e) {
  var t, n, {
      userRef: p,
      usernameSuggestionLoading: h = false,
      oneClickFlow: O = false
    } = e,
    y = function(e, t) {
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
    onClose: x
  } = y, N = (0, s.ZP)(S.id), v = function(e, t, n) {
    switch (e) {
      case f.Wq.EDIT_USERNAME:
        return {
          header: g.intl.string(g.t["a/zCWh"]), subtitle: g.intl.string(g.t.gGz0se)
        };
      case f.Wq.EDIT_DISPLAY_NAME:
        return {
          header: g.intl.string(g.t.SRDNcG), subtitle: g.intl.string(g.t["940AS0"])
        };
      case f.Wq.PREVIEW:
        return {
          header: g.intl.formatToPlainString(g.t.XDHrcj, {
            displayName: t
          }), subtitle: g.intl.format(g.t.bWE0ZD, {
            onClick: () => {
              n(), (0, l.openUserSettings)()
            }
          })
        };
      case f.Wq.SUGGESTION:
        return {
          header: g.intl.string(g.t.F7T4db), subtitle: g.intl.formatToPlainString(g.t.Z8F83a, {}), link: g.intl.format(g.t.i2vB8z, {
            helpdeskArticle: c.Z.getArticleURL(m.BhN.POMELO_FAQ)
          })
        };
      default:
        return {
          header: g.intl.string(g.t["a/zCWh"]), subtitle: g.intl.string(g.t.gGz0se)
        }
    }
  }(b, u.ZP.getName(S), x), [T, I] = (0, o.q_F)(() => ({
    opacity: 0,
    y: 10
  }));
  return i.useEffect(() => {
    I({
      y: 0,
      opacity: 1,
      from: {
        y: 10,
        opacity: 0
      }
    })
  }, [I, b]), (0, r.jsxs)("div", {
    className: E.displayNameContainer,
    children: [(0, r.jsxs)(a.animated.div, {
      style: {
        opacity: T.opacity,
        y: T.y
      },
      children: [(0, r.jsx)(o.Heading, {
        className: E.title,
        color: "text-strong",
        variant: "heading-xl/extrabold",
        children: v.header
      }), (0, r.jsxs)("div", {
        className: E.subtitle,
        children: [(0, r.jsx)(o.Heading, {
          color: "text-default",
          variant: "heading-sm/medium",
          children: v.subtitle
        }), null != v.link && (0, r.jsx)(o.Text, {
          className: E.link,
          color: "text-default",
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
    }({}, y), n = n = {
      displayProfile: N,
      ref: p,
      usernameSuggestionLoading: h,
      oneClickFlow: O
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