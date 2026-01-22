/** Chunk was on 20601 **/
/** chunk id: 624094, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  E: () => p,
  k: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk513461 = require("./513461.js"),
  Chunk942658 = require("./942658.js"),
  Chunk656854 = require("./656854.jsx"),
  Chunk414626 = require("./414626.jsx"),
  Chunk601047 = require("./601047.jsx"),
  Chunk222650 = require("./222650.jsx"),
  Chunk273926 = require("./273926.jsx"),
  Chunk453016 = require("./453016.jsx"),
  Chunk652215 = require("./652215.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function j(e) {
  let {
    guildId: t,
    formFields: l,
    updateFormFields: r
  } = e, a = (0, s.bG)([i.A], () => {
    var e;
    return null == (e = i.A.getGuild(t)) ? true : e.rulesChannelId
  }), c = (e, t) => {
    let n = l[e];
    r([...l.slice(0, e), g(v({}, n), {
      response: t
    }), ...l.slice(e + 1)])
  };
  return (0, n.jsx)(n.Fragment, {
    children: l.map((e, t) => ((e, t) => {
      switch (e.field_type) {
        case o.rX.TERMS:
          return (0, n.jsx)(x.Ot, {
            channelId: a,
            formField: e,
            onChange: e => {
              let n;
              return n = l[t], void r([...l.slice(0, t), g(v({}, n), {
                response: e
              }), ...l.slice(t + 1)])
            }
          }, t);
        case o.rX.TEXT_INPUT:
          return (0, n.jsx)(b.y4, {
            formField: e,
            autofocus: 0 === t,
            onChange: e => c(t, e)
          }, t);
        case o.rX.PARAGRAPH:
          return (0, n.jsx)(f.zD, {
            formField: e,
            autofocus: 0 === t,
            onChange: e => c(t, e)
          }, t);
        case o.rX.MULTIPLE_CHOICE:
          return (0, n.jsx)(u.MZ, {
            formField: e,
            onChange: e => ((e, t) => {
              let {
                value: n
              } = t, s = l[e];
              r([...l.slice(0, e), g(v({}, s), {
                response: n
              }), ...l.slice(e + 1)])
            })(t, e)
          }, t)
      }
    })(e, t))
  })
}

function p(e) {
  let t, {
      guildId: l,
      formFields: r,
      updateFormFields: i,
      disableVerification: o
    } = e,
    u = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
    f = (0, c.B)({
      guildId: l
    });
  return (t = f === h.PvD.NONE ? null : f === h.PvD.VERY_HIGH ? m.A : d.G, null == u) ? null : (0, n.jsxs)(n.Fragment, {
    children: [!o && null != t && (0, n.jsx)(t, {}), (0, n.jsx)(j, {
      guildId: l,
      formFields: r,
      updateFormFields: i
    })]
  })
}

function C(e) {
  let t, {
      guildId: l,
      formFields: i,
      updateFormFields: o,
      disableVerification: u
    } = e,
    f = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
    x = (0, c.B)({
      guildId: l
    }),
    b = (null == f ? true : f.isPhoneVerified()) || (null == f ? true : f.isStaff()),
    v = (null == f ? true : f.verified) || b,
    g = false;
  x === h.PvD.NONE ? (g = true, t = null) : x === h.PvD.VERY_HIGH ? (g = null != b && b, t = m.e) : (g = null != v && v, t = d.O);
  let p = r.useRef(g);
  return null == f ? null : (0, n.jsxs)(n.Fragment, {
    children: [!u && !p.current && null != t && (0, n.jsx)(t, {
      isUserVerified: g
    }), (0, n.jsx)(j, {
      guildId: l,
      formFields: i,
      updateFormFields: o
    })]
  })
}