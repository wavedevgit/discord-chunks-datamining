/** Chunk was on 38626 **/
/** chunk id: 942951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk402235 = require("./402235.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk91047 = require("./91047.jsx");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function m(e) {
  let {
    user: t,
    channelId: n,
    guildId: m,
    messageId: f,
    stopPropagation: g = false,
    ariaLabel: b
  } = e, j = l.useRef(null), {
    analyticsLocations: v
  } = (0, a.ZP)(o.Z.USERNAME), O = (0, c.ZP)(m, null == t ? true : t.id), y = (0, s.j)({
    displayNameStyles: null == t ? true : t.displayNameStyles
  }), T = l.useCallback(e => {
    let i = d.Z.getChannel(n);
    null != i && null != t && (0, h.Pv)(e, t, i)
  }, [t, n]);
  return l.useCallback(e => (l, o) => {
    let s = null == e ? true : e.colorStrings,
      c = O && null != s && null != s.primaryColor && null != s.secondaryColor,
      d = t => {
        var n, o, a;
        return (0, i.jsx)(r.rz2, (o = p({}, null != t ? t : {}), a = a = {
          ref: j,
          onContextMenu: T,
          name: (0, r.qgQ)(l),
          colorString: null != (n = null == e ? true : e.colorString) ? n : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: c ? s : null,
          "aria-label": b,
          className: y
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
        }), o))
      };
    return (0, i.jsx)(a.Gt, {
      value: v,
      children: null != t ? (0, i.jsx)(u.Z, {
        targetElementRef: j,
        user: t,
        guildId: m,
        channelId: n,
        messageId: f,
        roleId: null == e ? true : e.colorRoleId,
        clickTrap: true,
        children: e => {
          var {
            onClick: t
          } = e;
          return d(p({
            onClick: e => {
              g && null != e && e.stopPropagation(), t(e)
            }
          }, function(e, t) {
            if (null == e) return {};
            var n, i, l = function(e, t) {
              if (null == e) return {};
              var n, i, l = {},
                r = Object.keys(e);
              for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
              return l
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
          }(e, ["onClick"])))
        }
      }) : d(true)
    }, o)
  }, [v, t, n, m, f, T, g, b, O, y])
}