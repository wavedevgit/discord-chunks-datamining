/** Chunk was on 91173 **/
/** chunk id: 262, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857395 = require("./857395.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    children: t,
    messageReference: n,
    guildName: a
  } = e, s = i.useRef(null);
  if (null == n) return (0, r.jsx)(l.eee, {
    children: t
  });
  let {
    guild_id: c
  } = n;
  return null == c ? (0, r.jsx)(l.eee, {
    children: t
  }) : (0, r.jsx)(o.Z, {
    guildId: c,
    name: a,
    targetElementRef: s,
    children: e => {
      var n, i;
      let {
        "aria-controls": o,
        "aria-expanded": a
      } = e, c = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["aria-controls", "aria-expanded"]);
      return (0, r.jsx)(l.eee, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, c), i = i = {
        ref: s,
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}

function d(e) {
  let {
    usernameHook: t,
    message: i,
    compact: l
  } = e, {
    content: o,
    timestamp: d,
    messageReference: p
  } = i, m = (0, a.ZP)(i), f = t(m), g = (null != o ? o : "").split(" ").slice(0, false).join(" "), _ = c.intl.format(c.t["47CZc3"], {
    username: m.nick,
    usernameHook: f,
    webhookName: o,
    webhookNameHook: (e, t) => (0, r.jsx)(u, {
      messageReference: p,
      guildName: g,
      children: e
    }, t)
  });
  return (0, r.jsx)(s.Z, {
    icon: n(570111),
    timestamp: d,
    compact: l,
    children: _
  })
}