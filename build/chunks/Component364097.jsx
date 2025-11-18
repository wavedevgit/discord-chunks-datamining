/** Chunk was on web.js **/
/** chunk id: 364097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk955415 = require("./955415.jsx"),
  Chunk846587 = require("./846587.jsx"),
  Chunk409059 = require("./409059.js"),
  Chunk260539 = require("./260539.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305794 = require("./305794.js"),
  Chunk739236 = require("./739236.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  var t;
  let {
    code: _
  } = e, h = (0, i.e7)([l.Z], () => l.Z.getGuildTemplate(_));
  if (null == h || h.state === c.Rj.RESOLVING) return (0, r.jsxs)(o.Z, {
    children: [(0, r.jsx)(o.Z.Header, {
      text: u.intl.string(u.t.Xj87Yf)
    }), (0, r.jsx)(o.Z.Body, {
      resolving: true
    })]
  });
  if (h.state === c.Rj.EXPIRED) return (0, r.jsxs)(o.Z, {
    children: [(0, r.jsx)(o.Z.Header, {
      text: u.intl.string(u.t.C7ZRNw)
    }), (0, r.jsxs)(o.Z.Body, {
      children: [(0, r.jsx)(o.Z.Icon, {
        expired: true
      }), (0, r.jsx)(o.Z.Info, {
        expired: true,
        title: u.intl.string(u.t.A6MwXE)
      })]
    })]
  });
  let g = () => {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("10778"), n.e("10570")]).then(n.bind(n, 766775));
        return t => (0, r.jsx)(e, m(p({}, t), {
          guildTemplate: h
        }))
      })
    },
    E = __OVERLAY__ ? (0, r.jsx)(a.Button, {
      disabled: true,
      variant: "secondary",
      text: u.intl.string(u.t.W7NTWm)
    }) : (0, r.jsx)(a.Button, {
      onClick: g,
      loading: h.state === c.Rj.ACCEPTING,
      variant: "active",
      text: u.intl.string(u.t["a3Gl+e"])
    });
  return (0, r.jsxs)(o.Z, {
    children: [(0, r.jsx)(o.Z.Header, {
      text: u.intl.string(u.t.kAvFkO)
    }), (0, r.jsxs)(o.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: f.headerLine,
        children: [(0, r.jsx)(s.Z, {
          className: d.icon
        }), (0, r.jsx)(o.Z.Info, {
          title: h.name,
          children: u.intl.format(u.t.cGXXHL, {
            usageCount: String(null != (t = h.usageCount) ? t : 0)
          })
        })]
      }), E]
    })]
  })
}