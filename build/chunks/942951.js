/** Chunk was on 81691 **/
"use strict";
r.d(t, {
  l: () => b
});
var n = r(255367),
  l = r(73800),
  o = r(481060),
  i = r(100527),
  u = r(906732),
  a = r(7284),
  s = r(402235),
  c = r(670188),
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
    stopPropagation: g = !1,
    ariaLabel: h
  } = e, m = l.useRef(null), {
    analyticsLocations: O
  } = (0, u.ZP)(i.Z.USERNAME), y = (0, s.ZP)(b, null == t ? void 0 : t.id), w = (0, a.j)({
    displayNameStyles: null == t ? void 0 : t.displayNameStyles
  }), P = l.useCallback(e => {
    let n = d.Z.getChannel(r);
    null != n && null != t && (0, f.Pv)(e, t, n)
  }, [t, r]);
  return l.useCallback(e => (l, i) => {
    let a = null == e ? void 0 : e.colorStrings,
      s = y && null != a && null != a.primaryColor && null != a.secondaryColor,
      d = t => {
        var r, i;
        return (0, n.jsx)(o.rz2, (r = p({}, null != t ? t : {}), i = i = {
          ref: m,
          onContextMenu: P,
          name: (0, o.qgQ)(l),
          color: null == e ? void 0 : e.colorString,
          roleName: null == e ? void 0 : e.colorRoleName,
          roleColors: s ? a : null,
          "aria-label": h,
          className: w
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
      f = e => t => {
        g && null != t && t.stopPropagation(), e(t)
      };
    return (0, n.jsx)(u.Gt, {
      value: O,
      children: null != t ? (0, n.jsx)(c.Z, {
        targetElementRef: m,
        user: t,
        guildId: b,
        channelId: r,
        messageId: v,
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
          return d(p({
            onClick: f(t)
          }, r))
        }
      }) : d(void 0)
    }, i)
  }, [O, t, r, b, v, P, g, h, y, w])
}