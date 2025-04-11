/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  l: () => b
}), r(388685);
var n = r(200651),
  l = r(192379),
  o = r(481060),
  i = r(100527),
  u = r(906732),
  a = r(181918),
  c = r(823415),
  s = r(670188),
  d = r(592125),
  f = r(91047);

function p(e) {
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

function b(e) {
  let {
    user: t,
    channelId: r,
    guildId: b,
    messageId: v,
    stopPropagation: O = !1,
    ariaLabel: g
  } = e, {
    analyticsLocations: y
  } = (0, u.ZP)(i.Z.USERNAME), h = (0, a.$V)(b, "useUsernameHook"), [m, j] = l.useState(!1), w = (0, c.ic)({
    location: "useUsernameHook"
  }), P = l.useCallback(e => {
    let n = d.Z.getChannel(r);
    null != n && null != t && (0, f.Pv)(e, t, n)
  }, [t, r]);
  return l.useCallback(e => (l, i) => {
    let a = null == e ? void 0 : e.colorStrings,
      c = h && null != a && null != a.primaryColor && null != a.secondaryColor,
      d = t => {
        var r, i;
        return (0, n.jsx)(o.rz2, (r = p({}, null != t ? t : {}), i = i = {
          onContextMenu: P,
          name: l,
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleColors: c ? a : null,
          "aria-label": g
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
      f = e => {
        O && (null == e || e.stopPropagation()), j(!m)
      };
    return (0, n.jsx)(u.Gt, {
      value: y,
      children: null != t ? (0, n.jsx)(s.Z, {
        user: t,
        guildId: b,
        channelId: r,
        messageId: v,
        shouldShowOnHover: w,
        roleId: null == e ? void 0 : e.colorRoleId,
        clickTrap: m,
        shouldShow: m,
        onRequestClose: () => j(!1),
        children: e => {
          var {
            onClick: t
          } = e;
          return d(p({
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
      }) : d(void 0)
    }, i)
  }, [y, t, r, b, v, P, O, g, h, w, m])
}