/** Chunk was on 64992 **/
/** chunk id: 506849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk585510 = require("./585510.js"),
  Chunk500896 = require("./500896.jsx"),
  Chunk122802 = require("./122802.jsx"),
  Chunk894333 = require("./894333.jsx"),
  Chunk931413 = require("./931413.jsx"),
  Chunk972192 = require("./972192.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk726228 = require("./726228.js");

function j(e) {
  return (0, i.jsx)("div", {
    className: x.bV,
    children: (0, i.jsx)(a.Heading, {
      variant: "text-xs/bold",
      className: x.l_,
      color: "text-muted",
      children: e.title
    })
  })
}

function p(e) {
  return (0, i.jsx)("div", {
    className: x.yV,
    children: (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: e.description
    })
  })
}

function b(e) {
  return (0, i.jsxs)("div", {
    children: [null != e.title && (0, i.jsx)(j, {
      title: e.title
    }), (0, i.jsx)("div", {
      className: s()(x.f5, {
        [x.ou]: true !== e.noPadding,
        [x._9]: true !== e.noContainer
      }),
      children: e.children
    })]
  })
}

function N(e) {
  var t, n;
  let {
    guildId: l
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, i, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          s = Object.getOwnPropertyNames(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
    return s
  }(e, ["guildId"]), a = (0, d._g)(l);
  return (0, i.jsxs)(r.Modal, (t = function(e) {
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
  }({}, s), n = n = {
    title: m.intl.string(m.t.h850Ss),
    actions: [{
      text: m.intl.string(m.t.i4jeWR),
      onClick: s.onClose
    }],
    children: [(0, i.jsx)(b, {
      noPadding: true,
      noContainer: true,
      children: (0, i.jsx)(g.A, {
        guildId: l
      })
    }), (0, i.jsx)(b, {
      title: m.intl.string(m.t.R9Ej96),
      noPadding: true,
      children: (0, i.jsx)(h.A, {
        guildId: l
      })
    }), (0, i.jsx)(b, {
      title: m.intl.string(m.t["31DySj"]),
      children: (0, i.jsx)(o.A, {
        guildId: l
      })
    }), a && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(j, {
        title: m.intl.string(m.t.D9yVAH)
      }), (0, i.jsx)(p, {
        description: m.intl.string(m.t["0PhAOH"])
      }), (0, i.jsx)(b, {
        children: (0, i.jsx)(u.A, {
          guildId: l
        })
      })]
    }), (0, i.jsx)(j, {
      title: m.intl.string(m.t.JrySi3)
    }), (0, i.jsx)(c.A, {
      guildId: l
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}