/** Chunk was on 38626 **/
/** chunk id: 942951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, j = r.useRef(null), {
    analyticsLocations: O
  } = (0, a.ZP)(o.Z.USERNAME), y = (0, c.ZP)(m, null == t ? true : t.id), v = (0, s.j)({
    displayNameStyles: null == t ? true : t.displayNameStyles
  }), T = r.useCallback(e => {
    let i = d.Z.getChannel(n);
    null != i && null != t && (0, h.Pv)(e, t, i)
  }, [t, n]);
  return r.useCallback(e => (r, o) => {
    let s = null == e ? true : e.colorStrings,
      c = y && null != s && null != s.primaryColor && null != s.secondaryColor,
      d = t => {
        var n, o, a;
        return (0, i.jsx)(l.rz2, (o = p({}, null != t ? t : {}), a = a = {
          ref: j,
          onContextMenu: T,
          name: (0, l.qgQ)(r),
          colorString: null != (n = null == e ? true : e.colorString) ? n : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: c ? s : null,
          "aria-label": b,
          className: v
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
      value: O,
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
            var n, i, r = function(e, t) {
              if (null == e) return {};
              var n, i, r = {},
                l = Object.keys(e);
              for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
          }(e, ["onClick"])))
        }
      }) : d(true)
    }, o)
  }, [O, t, n, m, f, T, g, b, y, v])
}