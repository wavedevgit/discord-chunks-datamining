/** Chunk was on 85342 **/
/** chunk id: 108793, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk401393 = require("./401393.js"),
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
  var t, r, {
      userRef: p,
      usernameSuggestionLoading: y = false,
      oneClickFlow: O = false
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]);
  let {
    user: b,
    editState: S,
    onClose: _
  } = h, v = (0, s.ZP)(b.id), j = function(e, t, r) {
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
              r(), (0, l.openUserSettings)()
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
  }(S, u.ZP.getName(b), _), [N, x] = (0, a.q_F)(() => ({
    opacity: 0,
    y: 10
  }));
  return i.useEffect(() => {
    x({
      y: 0,
      opacity: 1,
      from: {
        y: 10,
        opacity: 0
      }
    })
  }, [x, S]), (0, n.jsxs)("div", {
    className: E.displayNameContainer,
    children: [(0, n.jsxs)(o.animated.div, {
      style: {
        opacity: N.opacity,
        y: N.y
      },
      children: [(0, n.jsx)(a.X6q, {
        className: E.title,
        color: "header-primary",
        variant: "heading-xl/extrabold",
        children: j.header
      }), (0, n.jsxs)("div", {
        className: E.subtitle,
        children: [(0, n.jsx)(a.X6q, {
          color: "header-secondary",
          variant: "heading-sm/medium",
          children: j.subtitle
        }), null != j.link && (0, n.jsx)(a.Text, {
          className: E.link,
          color: "header-secondary",
          variant: "text-sm/medium",
          children: j.link
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
    }({}, h), r = r = {
      displayProfile: v,
      ref: p,
      usernameSuggestionLoading: y,
      oneClickFlow: O
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