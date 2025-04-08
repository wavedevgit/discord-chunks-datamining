/** Chunk was on 28965 **/
"use strict";
n.d(t, {
  l: () => g
}), n(388685);
var r = n(200651),
  l = n(192379),
  o = n(442837),
  i = n(481060),
  u = n(607070),
  a = n(100527),
  s = n(906732),
  c = n(181918),
  d = n(7543),
  f = n(823415),
  p = n(670188),
  b = n(592125),
  v = n(91047);

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function g(e) {
  let {
    user: t,
    channelId: n,
    guildId: g,
    messageId: m,
    stopPropagation: O = !1,
    ariaLabel: y
  } = e, {
    analyticsLocations: w
  } = (0, s.ZP)(a.Z.USERNAME), j = (0, c.$V)(g, "useUsernameHook"), P = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), [S, C] = l.useState(!1), E = (0, f.ic)({
    location: "useUsernameHook"
  }), I = l.useCallback(e => {
    let r = b.Z.getChannel(n);
    null != r && null != t && (0, v.Pv)(e, t, r)
  }, [t, n]);
  return l.useCallback(e => (l, o) => {
    let u = null == e ? void 0 : e.colorStrings,
      a = j && null != u && null != u.primaryColor && null != u.secondaryColor ? (0, d.Z)(u.primaryColor, u.secondaryColor, u.tertiaryColor, P) : void 0,
      c = t => {
        var n, o;
        return (0, r.jsx)(i.rz2, (n = h({}, null != t ? t : {}), o = o = {
          onContextMenu: I,
          name: l,
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleGradient: a,
          "aria-label": y
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n))
      },
      f = e => {
        O && (null == e || e.stopPropagation()), C(!S)
      };
    return (0, r.jsx)(s.Gt, {
      value: w,
      children: null != t ? (0, r.jsx)(p.Z, {
        user: t,
        guildId: g,
        channelId: n,
        messageId: m,
        shouldShowOnHover: E,
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
            var n, r, l = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
              return l
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
          }(e, ["onClick"])))
        }
      }) : c(void 0)
    }, o)
  }, [w, t, n, g, m, I, O, y, j, P, E, S])
}