/** Chunk was on 28965 **/
"use strict";
r.d(t, {
  l: () => g
}), r(388685);
var n = r(200651),
  l = r(192379),
  o = r(442837),
  i = r(481060),
  u = r(607070),
  a = r(100527),
  s = r(906732),
  c = r(181918),
  d = r(7543),
  f = r(823415),
  p = r(670188),
  b = r(592125),
  v = r(91047);

function h(e) {
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
    messageId: O,
    stopPropagation: m = !1,
    ariaLabel: y
  } = e, {
    analyticsLocations: j
  } = (0, s.ZP)(a.Z.USERNAME), w = (0, c.$V)(g, "useUsernameHook"), P = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), [S, C] = l.useState(!1), I = (0, f.ic)({
    location: "useUsernameHook"
  }), E = l.useCallback(e => {
    let n = b.Z.getChannel(r);
    null != n && null != t && (0, v.Pv)(e, t, n)
  }, [t, r]);
  return l.useCallback(e => (l, o) => {
    let u = null == e ? void 0 : e.colorStrings,
      a = w && null != u && null != u.primaryColor && null != u.secondaryColor ? (0, d.Z)(u.primaryColor, u.secondaryColor, u.tertiaryColor, P) : void 0,
      c = t => {
        var r, o;
        return (0, n.jsx)(i.rz2, (r = h({}, null != t ? t : {}), o = o = {
          onContextMenu: E,
          name: l,
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleGradient: a,
          "aria-label": y
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
      f = e => {
        m && (null == e || e.stopPropagation()), C(!S)
      };
    return (0, n.jsx)(s.Gt, {
      value: j,
      children: null != t ? (0, n.jsx)(p.Z, {
        user: t,
        guildId: g,
        channelId: r,
        messageId: O,
        shouldShowOnHover: I,
        roleId: null == e ? void 0 : e.colorRoleId,
        clickTrap: S,
        shouldShow: S,
        onRequestClose: () => C(!1),
        children: e => {
          var {
            onClick: t
          } = e;
          return c(h({
            onClick: f
          }, function(e, t) {
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
          }(e, ["onClick"])))
        }
      }) : c(void 0)
    }, o)
  }, [j, t, r, g, O, E, m, y, w, P, I, S])
}