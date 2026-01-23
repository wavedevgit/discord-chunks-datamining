/** Chunk was on 20601 **/
/** chunk id: 624094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => p,
  k: () => _
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
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    guildId: t,
    formFields: n,
    updateFormFields: r
  } = e, a = (0, i.bG)([s.A], () => {
    var e;
    return null == (e = s.A.getGuild(t)) ? true : e.rulesChannelId
  }), c = (e, t) => {
    let l = n[e];
    r([...n.slice(0, e), j(v({}, l), {
      response: t
    }), ...n.slice(e + 1)])
  };
  return (0, l.jsx)(l.Fragment, {
    children: n.map((e, t) => ((e, t) => {
      switch (e.field_type) {
        case o.rX.TERMS:
          return (0, l.jsx)(x.Ot, {
            channelId: a,
            formField: e,
            onChange: e => {
              let l;
              return l = n[t], void r([...n.slice(0, t), j(v({}, l), {
                response: e
              }), ...n.slice(t + 1)])
            }
          }, t);
        case o.rX.TEXT_INPUT:
          return (0, l.jsx)(h.y4, {
            formField: e,
            autofocus: 0 === t,
            onChange: e => c(t, e)
          }, t);
        case o.rX.PARAGRAPH:
          return (0, l.jsx)(m.zD, {
            formField: e,
            autofocus: 0 === t,
            onChange: e => c(t, e)
          }, t);
        case o.rX.MULTIPLE_CHOICE:
          return (0, l.jsx)(d.MZ, {
            formField: e,
            onChange: e => ((e, t) => {
              let {
                value: l
              } = t, i = n[e];
              r([...n.slice(0, e), j(v({}, i), {
                response: l
              }), ...n.slice(e + 1)])
            })(t, e)
          }, t)
      }
    })(e, t))
  })
}

function p(e) {
  let t, {
      guildId: n,
      formFields: r,
      updateFormFields: s,
      disableVerification: o
    } = e,
    d = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
    m = (0, c.B)({
      guildId: n
    });
  return (t = m === g.PvD.NONE ? null : m === g.PvD.VERY_HIGH ? f.A : u.G, null == d) ? null : (0, l.jsxs)(l.Fragment, {
    children: [!o && null != t && (0, l.jsx)(t, {}), (0, l.jsx)(b, {
      guildId: n,
      formFields: r,
      updateFormFields: s
    })]
  })
}

function _(e) {
  let t, {
      guildId: n,
      formFields: s,
      updateFormFields: o,
      disableVerification: d
    } = e,
    m = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
    x = (0, c.B)({
      guildId: n
    }),
    h = (null == m ? true : m.isPhoneVerified()) || (null == m ? true : m.isStaff()),
    v = (null == m ? true : m.verified) || h,
    j = false;
  x === g.PvD.NONE ? (j = true, t = null) : x === g.PvD.VERY_HIGH ? (j = null != h && h, t = f.e) : (j = null != v && v, t = u.O);
  let p = r.useRef(j);
  return null == m ? null : (0, l.jsxs)(l.Fragment, {
    children: [!d && !p.current && null != t && (0, l.jsx)(t, {
      isUserVerified: j
    }), (0, l.jsx)(b, {
      guildId: n,
      formFields: s,
      updateFormFields: o
    })]
  })
}