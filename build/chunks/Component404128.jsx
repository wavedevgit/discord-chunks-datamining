/** Chunk was on 72668 **/
/** chunk id: 404128, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk29086 = require("./29086.jsx"),
  Chunk581781 = require("./581781.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk685073 = require("./685073.js"),
  Chunk514661 = require("./514661.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk583970 = require("./583970.js"),
  Chunk581298 = require("./581298.js");

function m(e) {
  var t, r, l, m;
  let {
    guildId: O
  } = e, h = function(e, t) {
    if (null == e) return {};
    var r, n, l, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["guildId"]), v = (0, i.bG)([f.A], () => f.A.getGuild(O)), x = (0, i.bG)([b.default], () => {
    var e;
    let t = null == (e = b.default.getCurrentUser()) ? true : e.primaryGuild;
    return (null == t ? true : t.identityGuildId) === O && (null == t ? true : t.identityEnabled) === true
  }, [O]), {
    isAdopting: w,
    onAdoptTag: _,
    onEditProfile: N
  } = (0, p.A)(O, h.onClose);
  if (null != v && (0, u.Rg)(v) && (0, u.q0)(v)) return (0, n.jsxs)(d.EOs, (l = function(e) {
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
  }({
    "data-migration-pending": true,
    className: j.yl,
    size: d.rIJ.DYNAMIC
  }, h), m = m = {
    parentComponent: "GuildTagAdoptModal",
    children: [(0, n.jsxs)(d.$mQ, {
      "data-migration-pending": true,
      className: j.jE,
      scrollbarType: "none",
      children: [(0, n.jsx)("div", {
        className: j.X6,
        children: (0, n.jsxs)("div", {
          className: j.kb,
          children: [(0, n.jsxs)("div", {
            className: j.N1,
            children: [(0, n.jsx)(d.Heading, {
              variant: "heading-lg/bold",
              children: g.intl.string(y.default.OvKPi0)
            }), (0, n.jsx)(d.Text, {
              variant: "text-md/normal",
              children: g.intl.string(y.default.kHxfDw)
            })]
          }), (0, n.jsx)(s.A, {
            className: j._S,
            guildId: v.id,
            guildName: v.name,
            guildIcon: v.icon,
            guildIconSize: 32,
            guildTag: v.profile.tag,
            guildBadge: null != (t = v.profile.badge) ? t : ""
          }), (0, n.jsxs)("div", {
            className: j.UD,
            children: [(0, n.jsx)(c.m, {
              text: g.intl.string(y.default.WlENZt),
              shouldShow: x,
              children: (0, n.jsx)(d.Button, {
                variant: "primary",
                text: g.intl.string(g.t.jwEaiX),
                fullWidth: true,
                onClick: _,
                loading: w,
                disabled: x
              })
            }), (0, n.jsx)(d.Button, {
              variant: "secondary",
              text: g.intl.string(g.t.s5vZlQ),
              fullWidth: true,
              onClick: N
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: a()(j.X6, j.pG),
        children: (0, n.jsx)(o.A, {
          className: j.uJ,
          guildId: v.id,
          tag: v.profile.tag,
          badge: null != (r = v.profile.badge) ? r : ""
        })
      })]
    }), (0, n.jsx)(d.s_y, {
      "data-migration-pending": true,
      className: j.VN,
      onClick: h.onClose
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(m)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(m, e))
  }), l))
}