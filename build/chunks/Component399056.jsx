/** Chunk was on 39048 **/
/** chunk id: 399056, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk219504 = require("./219504.js"),
  Chunk374084 = require("./374084.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk987957 = require("./987957.jsx"),
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
let h = [];

function b() {
  return (0, r.jsx)("div", {
    className: m.L8,
    children: (0, r.jsxs)("div", {
      className: m.kv,
      children: [(0, r.jsx)("div", {
        className: m.zV,
        children: (0, r.jsx)(s.B8Q, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 22
        })
      }), (0, r.jsx)("div", {
        className: m.tV,
        children: (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: g.intl.string(g.t["K/i3iQ"])
        })
      })]
    })
  })
}

function x(e) {
  let {
    guildId: t,
    onAddAction: l
  } = e, a = i.useCallback(() => {
    if (null != t) return (0, s.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("54569"), n.e("76945")]).then(n.bind(n, 251632));
      return n => (0, r.jsx)(e, f(p({}, n), {
        guildId: t,
        onSave: l
      }))
    })
  }, [t, l]);
  return (0, r.jsxs)(s.DUT, {
    className: m.Bw,
    onClick: a,
    children: [(0, r.jsx)(s.U1e, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "none",
      children: g.intl.string(g.t.qce3EM)
    })]
  })
}
let j = function(e) {
  let {
    guildId: t
  } = e, n = (0, l.yK)([d.A], () => {
    var e;
    return null != (e = d.A.getSettings().newMemberActions) ? e : h
  }), s = i.useCallback((e, t) => {
    (0, c.G$)(e, t)
  }, []), g = i.useCallback((e, r, i, l) => {
    var s;
    let a = null == (s = n[e]) ? true : s.channelId,
      o = r.channelId;
    null == a || null == d.A.getSettings() || (null == d.A.getPendingDataForChannel(o) && l && (0, c.Wh)(t, a, i), (0, c.A4)(a, r))
  }, [n, t]), j = i.useCallback(e => {
    var t;
    let r = null == (t = n[e]) ? true : t.channelId;
    null != r && (0, c.sd)(r)
  }, [n]), _ = n.map(e => f(p({}, e), {
    id: e.channelId
  })), O = i.useCallback(e => {
    (0, c.DE)(e)
  }, []), {
    handleDragStart: v,
    handleDragReset: y,
    handleDragComplete: A
  } = (0, a.A)(_, O);
  return (0, r.jsxs)("div", {
    className: m.uW,
    children: [n.map((e, n) => (0, r.jsx)(u.A, {
      guildId: t,
      action: e,
      actionIndex: n,
      onChange: g,
      onDelete: j,
      onDragStart: v,
      onDragReset: y,
      onDragComplete: A
    }, e.channelId)), (0, r.jsx)(b, {}), n.length < o._7 && (0, r.jsx)(x, {
      guildId: t,
      onAddAction: s
    })]
  })
}