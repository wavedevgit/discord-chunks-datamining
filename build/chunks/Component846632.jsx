/** Chunk was on 76212 **/
/** chunk id: 846632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk978088 = require("./978088.jsx"),
  Chunk840720 = require("./840720.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk731722 = require("./731722.js"),
  Chunk446094 = require("./446094.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk541673 = require("./541673.js"),
  Chunk265227 = require("./265227.js");

function h(e) {
  var t, n, r, h, {
      guildId: j
    } = e,
    v = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["guildId"]);
  let _ = (0, o.e7)([u.Z], () => u.Z.getGuild(j)),
    y = (0, o.e7)([g.default], () => {
      var e;
      let t = null == (e = g.default.getCurrentUser()) ? true : e.primaryGuild;
      return (null == t ? true : t.identityGuildId) === j && (null == t ? true : t.identityEnabled) === true
    }, [j]),
    {
      isAdopting: O,
      onAdoptTag: x,
      onEditProfile: w
    } = (0, b.Z)(j, v.onClose);
  if (null != _ && (0, f.up)(_) && (0, f.jq)(_)) return (0, a.jsxs)(d.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    "data-migration-pending": true,
    className: C.modal,
    size: d.CgR.DYNAMIC
  }, v), n = n = {
    parentComponent: "GuildTagAdoptModal",
    children: [(0, a.jsxs)(d.hzk, {
      "data-migration-pending": true,
      className: C.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)("div", {
        className: C.modalContentChild,
        children: (0, a.jsxs)("div", {
          className: C.left,
          children: [(0, a.jsxs)("div", {
            className: C.headerContainer,
            children: [(0, a.jsx)(d.Heading, {
              variant: "heading-lg/bold",
              children: p.intl.string(m.default.OvKPi0)
            }), (0, a.jsx)(d.Text, {
              variant: "text-md/normal",
              children: p.intl.string(m.default.kHxfDw)
            })]
          }), (0, a.jsx)(c.Z, {
            className: C.guildRow,
            guildId: _.id,
            guildName: _.name,
            guildIcon: _.icon,
            guildIconSize: 32,
            guildTag: _.profile.tag,
            guildBadge: null != (r = _.profile.badge) ? r : ""
          }), (0, a.jsxs)("div", {
            className: C.buttonContainer,
            children: [(0, a.jsx)(l.u, {
              text: p.intl.string(m.default.WlENZt),
              shouldShow: y,
              children: (0, a.jsx)(d.Button, {
                variant: "primary",
                text: p.intl.string(p.t.jwEaiX),
                fullWidth: true,
                onClick: x,
                loading: O,
                disabled: y
              })
            }), (0, a.jsx)(d.Button, {
              variant: "secondary",
              text: p.intl.string(p.t.s5vZlQ),
              fullWidth: true,
              onClick: w
            })]
          })]
        })
      }), (0, a.jsx)("div", {
        className: i()(C.modalContentChild, C.right),
        children: (0, a.jsx)(s.Z, {
          className: C.rightContent,
          guildId: _.id,
          tag: _.profile.tag,
          badge: null != (h = _.profile.badge) ? h : ""
        })
      })]
    }), (0, a.jsx)(d.olH, {
      "data-migration-pending": true,
      className: C.close,
      onClick: v.onClose
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}