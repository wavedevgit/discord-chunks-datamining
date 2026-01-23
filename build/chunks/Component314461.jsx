/** Chunk was on 14691 **/
/** chunk id: 314461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk801264 = require("./801264.jsx"),
  Chunk397400 = require("./397400.js"),
  Chunk187549 = require("./187549.js"),
  Chunk355609 = require("./355609.jsx"),
  Chunk842319 = require("./842319.jsx"),
  Chunk27023 = require("./27023.jsx"),
  Chunk800007 = require("./800007.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk8577 = require("./8577.js");

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

function v(e, t) {
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

function b(e) {
  let {
    step: t,
    setFooterNode: n
  } = (0, m.bv)(), s = (0, o.U)("GameServerSetupModal"), {
    title: d,
    subtitle: b
  } = function(e) {
    switch (e) {
      case x.HS.SELECT_GAME:
        return {
          title: f.intl.string(g.default["3vWDMz"]), subtitle: f.intl.string(g.default.Az5bjs)
        };
      case x.HS.SERVER_SETTINGS:
        return {
          title: f.intl.string(g.default.RLGW9z)
        }
    }
  }(t);
  return (0, r.jsxs)(l.dWK, v(p({}, e), {
    size: "lg",
    children: [(0, r.jsx)(l.rQ0, {
      title: d,
      subtitle: b
    }), s && (0, r.jsx)("div", {
      className: j.M,
      children: (0, r.jsx)(a.A, {
        look: a.k.WARNING,
        children: f.intl.format(g.default.XzXjK2, {})
      })
    }), (0, r.jsx)(i.IpV, {
      className: j.j,
      style: {
        width: x.ST
      },
      children: (0, r.jsx)("div", {
        style: {
          padding: x.by
        },
        children: (0, r.jsxs)(i.tN_, {
          width: x.U$,
          activeSlide: t,
          children: [(0, r.jsx)(i.q7S, {
            id: x.HS.SELECT_GAME,
            children: (0, r.jsx)(c.A, {})
          }, x.HS.SELECT_GAME), (0, r.jsx)(i.q7S, {
            id: x.HS.SERVER_SETTINGS,
            children: (0, r.jsx)(u.A, {})
          }, x.HS.SERVER_SETTINGS)]
        })
      })
    }), (0, r.jsx)("div", {
      ref: e => n(e)
    })]
  }))
}

function h(e) {
  let {
    analyticsLocations: t
  } = (0, s.Ay)();
  return (0, d.wN)(e.guildId, t, e.analyticsLocation), (0, r.jsx)(s.f5, {
    value: t,
    children: (0, r.jsx)(m.mf, v(p({}, e), {
      children: (0, r.jsx)(b, p({}, e))
    }))
  })
}