/** Chunk was on 86736 **/
/** chunk id: 680298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk911969 = require("./911969.js"),
  Chunk399860 = require("./399860.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk808978 = require("./808978.js");

function u(e) {
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

function p(e) {
  let {
    applicationIcon: t,
    applicationName: p,
    canNavigate: m,
    command: b,
    guildId: g
  } = e, f = r.useMemo(() => {
    var e;
    return 0 !== Object.keys(null != (e = b.permissions) ? e : {}).length
  }, [b.permissions]), h = r.useCallback(() => {
    null != b && m() && (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("78786").then(n.bind(n, 50474));
      return n => (0, i.jsx)(e, u({
        applicationIcon: t,
        applicationId: b.applicationId,
        applicationName: p,
        command: b,
        guildId: g
      }, n))
    })
  }, [t, p, m, b, g]), x = r.useCallback(e => {
    (0, a.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => {
        var n, r;
        return (0, i.jsx)(e, (n = u({}, t), r = r = {
          id: b.id,
          label: c.intl.string(c.t.oJ1Muw)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    })
  }, [b]), j = b.type === o.yU.CHAT ? l.SsZ : l.hH0, O = (0, s.gw)(b.type, b.displayName);
  return (0, i.jsxs)(l.P3F, {
    onClick: h,
    className: d.item,
    onContextMenu: x,
    children: [(0, i.jsxs)("div", {
      className: d.identifier,
      children: [(0, i.jsx)(j, {
        className: d.icon,
        size: "md",
        color: "currentColor"
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        children: O
      })]
    }), (0, i.jsx)("div", {
      className: d.statusContainer,
      children: f ? (0, i.jsxs)("div", {
        className: d.statusLine,
        children: [(0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          children: c.intl.string(c.t.jH4B9O)
        }), (0, i.jsx)(l.d3s, {
          size: "sm",
          color: "currentColor",
          className: d.statusIcon
        })]
      }) : null
    })]
  })
}