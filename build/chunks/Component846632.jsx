/** Chunk was on 76212 **/
/** chunk id: 846632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk978088 = require("./978088.jsx"),
  Chunk840720 = require("./840720.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk731722 = require("./731722.js"),
  Chunk446094 = require("./446094.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk659854 = require("./659854.js"),
  Chunk265227 = require("./265227.js");

function m(e) {
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
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  var t, n, {
      guildId: r
    } = e,
    j = function(e, t) {
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
  let _ = (0, o.e7)([c.Z], () => c.Z.getGuild(r)),
    v = (0, o.e7)([u.default], () => {
      var e;
      let t = null == (e = u.default.getCurrentUser()) ? true : e.primaryGuild;
      return (null == t ? true : t.identityGuildId) === r && (null == t ? true : t.identityEnabled) === true
    }, [r]),
    {
      isAdopting: y,
      onAdoptTag: O,
      onEditProfile: x
    } = (0, f.Z)(r, j.onClose);
  if (null != _ && (0, g.up)(_) && (0, g.jq)(_)) return (0, a.jsxs)(l.Y0X, h(m({
    className: C.modal,
    size: l.CgR.DYNAMIC
  }, j), {
    parentComponent: "GuildTagAdoptModal",
    children: [(0, a.jsxs)(l.hzk, {
      className: C.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)("div", {
        className: C.modalContentChild,
        children: (0, a.jsxs)("div", {
          className: C.left,
          children: [(0, a.jsxs)("div", {
            className: C.headerContainer,
            children: [(0, a.jsx)(l.X6q, {
              variant: "heading-lg/bold",
              children: b.intl.string(p.default.OvKPi4)
            }), (0, a.jsx)(l.Text, {
              variant: "text-md/normal",
              children: b.intl.string(p.default.kHxfDw)
            })]
          }), (0, a.jsx)(d.Z, {
            className: C.guildRow,
            guildId: _.id,
            guildName: _.name,
            guildIcon: _.icon,
            guildIconSize: 32,
            guildTag: _.profile.tag,
            guildBadge: null != (t = _.profile.badge) ? t : ""
          }), (0, a.jsxs)("div", {
            className: C.buttonContainer,
            children: [(0, a.jsx)(l.ua7, {
              text: b.intl.string(p.default.WlENZm),
              tooltipContentClassName: C.tooltip,
              shouldShow: v,
              children: e => (0, a.jsx)(l.zxk, h(m({
                variant: "primary",
                text: b.intl.string(b.t.jwEaiY)
              }, e), {
                fullWidth: true,
                onClick: O,
                loading: y,
                disabled: v
              }))
            }), (0, a.jsx)(l.zxk, {
              variant: "secondary",
              text: b.intl.string(b.t.s5vZlZ),
              fullWidth: true,
              onClick: x
            })]
          })]
        })
      }), (0, a.jsx)("div", {
        className: i()(C.modalContentChild, C.right),
        children: (0, a.jsx)(s.Z, {
          className: C.rightContent,
          guildId: _.id,
          tag: _.profile.tag,
          badge: null != (n = _.profile.badge) ? n : ""
        })
      })]
    }), (0, a.jsx)(l.olH, {
      className: C.close,
      onClick: j.onClose
    })]
  }))
}