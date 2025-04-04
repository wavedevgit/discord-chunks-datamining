/** Chunk was on 28965 **/
"use strict";
r.d(t, {
  l: () => g
});
var n = r(200651),
  l = r(192379),
  o = r(442837),
  i = r(481060),
  u = r(607070),
  a = r(100527),
  c = r(906732),
  s = r(181918),
  d = r(956226),
  f = r(670188),
  p = r(592125),
  b = r(91047);

function v(e) {
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

function g(e) {
  let {
    user: t,
    channelId: r,
    guildId: g,
    messageId: h,
    stopPropagation: O = !1,
    ariaLabel: m
  } = e, {
    analyticsLocations: y
  } = (0, c.ZP)(a.Z.USERNAME), j = (0, s.$V)(g, "useUsernameHook"), w = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), P = l.useCallback(e => {
    let n = p.Z.getChannel(r);
    null != n && null != t && (0, b.Pv)(e, t, n)
  }, [t, r]);
  return l.useCallback(e => (l, o) => {
    let u = null == e ? void 0 : e.colorStrings,
      a = j && null != u && null != u.primaryColor && null != u.secondaryColor ? (0, d.$)(u.primaryColor, u.secondaryColor, u.tertiaryColor, w) : void 0,
      s = t => {
        var r, o;
        return (0, n.jsx)(i.rz2, (r = v({}, null != t ? t : {}), o = o = {
          onContextMenu: P,
          name: l,
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleGradient: a,
          "aria-label": m
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r))
      },
      p = e => t => {
        O && null != t && t.stopPropagation(), e(t)
      };
    return (0, n.jsx)(c.Gt, {
      value: y,
      children: null != t ? (0, n.jsx)(f.Z, {
        user: t,
        guildId: g,
        channelId: r,
        messageId: h,
        roleId: null == e ? void 0 : e.colorRoleId,
        clickTrap: !0,
        children: e => {
          var {
            onClick: t
          } = e, r = function(e, t) {
            if (null == e) return {};
            var r, n, l = function(e, t) {
              if (null == e) return {};
              var r, n, l = {},
                o = Object.keys(e);
              for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
              return l
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
            }
            return l
          }(e, ["onClick"]);
          return s(v({
            onClick: p(t)
          }, r))
        }
      }) : s(void 0)
    }, o)
  }, [y, t, r, g, h, P, O, m, j, w])
}