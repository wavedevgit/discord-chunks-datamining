/** Chunk was on 61947 **/
"use strict";
r.d(t, {
  l: () => p
});
var n = r(255367),
  o = r(73800),
  l = r(481060),
  i = r(100527),
  u = r(906732),
  a = r(402235),
  c = r(670188),
  s = r(592125),
  d = r(91047);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function p(e) {
  let {
    user: t,
    channelId: r,
    guildId: p,
    messageId: b,
    stopPropagation: v = !1,
    ariaLabel: O
  } = e, g = o.useRef(null), {
    analyticsLocations: y
  } = (0, u.ZP)(i.Z.USERNAME), m = (0, a.ZP)(p, null == t ? void 0 : t.id), h = o.useCallback(e => {
    let n = s.Z.getChannel(r);
    null != n && null != t && (0, d.Pv)(e, t, n)
  }, [t, r]);
  return o.useCallback(e => (o, i) => {
    let a = null == e ? void 0 : e.colorStrings,
      s = m && null != a && null != a.primaryColor && null != a.secondaryColor,
      d = t => {
        var r, i;
        return (0, n.jsx)(l.rz2, (r = f({}, null != t ? t : {}), i = i = {
          ref: g,
          onContextMenu: h,
          name: (0, l.qgQ)(o),
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleColors: s ? a : null,
          "aria-label": O
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      },
      w = e => t => {
        v && null != t && t.stopPropagation(), e(t)
      };
    return (0, n.jsx)(u.Gt, {
      value: y,
      children: null != t ? (0, n.jsx)(c.Z, {
        targetElementRef: g,
        user: t,
        guildId: p,
        channelId: r,
        messageId: b,
        roleId: null == e ? void 0 : e.colorRoleId,
        clickTrap: !0,
        children: e => {
          var {
            onClick: t
          } = e, r = function(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
              if (null == e) return {};
              var r, n, o = {},
                l = Object.keys(e);
              for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }(e, ["onClick"]);
          return d(f({
            onClick: w(t)
          }, r))
        }
      }) : d(void 0)
    }, i)
  }, [y, t, r, p, b, h, v, O, m])
}