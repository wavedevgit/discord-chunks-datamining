/** Chunk was on 39048 **/
/** chunk id: 435732, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk219504 = require("./219504.js"),
  Chunk374084 = require("./374084.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk520761 = require("./520761.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js");

function p(e) {
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
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = [],
  b = function(e) {
    let {
      guildId: t
    } = e, b = (0, l.yK)([d.A], () => {
      var e;
      return null != (e = d.A.getSettings().resourceChannels) ? e : h
    }), x = i.useMemo(() => b.map(e => f(p({}, e), {
      id: e.channelId
    })), [b]), {
      handleDragStart: j,
      handleDragReset: _,
      handleDragComplete: O
    } = (0, a.A)(x, c.WA), v = i.useCallback((e, n) => {
      let r = d.A.getSettings();
      null != r && ((0, c.px)(e), (0, c.W5)(t, r).then(() => {
        (0, c.E0)(t, e.channelId, n)
      }))
    }, [t]), y = i.useCallback(() => {
      if (null != t) return (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("36354").then(n.bind(n, 983161));
        return n => (0, r.jsx)(e, f(p({}, n), {
          guildId: t,
          onSave: c.px,
          onIconUpload: v
        }))
      })
    }, [t, v]);
    return (0, r.jsxs)("div", {
      className: m.C5,
      children: [b.map((e, n) => (0, r.jsx)(u.A, {
        guildId: t,
        resourceChannel: e,
        index: n,
        onDragStart: j,
        onDragReset: _,
        onDragComplete: O
      }, e.channelId)), b.length < o.CW && (0, r.jsxs)(s.DUT, {
        className: m.Bw,
        onClick: y,
        children: [(0, r.jsx)(s.U1e, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "none",
          children: g.intl.string(g.t["w9/qGY"])
        })]
      })]
    })
  }