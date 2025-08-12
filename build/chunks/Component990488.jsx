/** Chunk was on 70971 **/
/** chunk id: 990488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => j,
  r: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk246364 = require("./246364.js"),
  Chunk990686 = require("./990686.js"),
  Chunk118346 = require("./118346.jsx"),
  Chunk186078 = require("./186078.jsx"),
  Chunk73880 = require("./73880.jsx"),
  Chunk276486 = require("./276486.jsx"),
  Chunk196345 = require("./196345.jsx"),
  Chunk707592 = require("./707592.jsx"),
  Chunk981631 = require("./981631.js");

function g(e) {
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

function b(e, t) {
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

function v(e) {
  let {
    guildId: t,
    formFields: n,
    updateFormFields: i
  } = e, a = (0, l.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getGuild(t)) ? true : e.rulesChannelId
  }), c = (e, t) => {
    let r = n[e];
    i([...n.slice(0, e), b(g({}, r), {
      response: t
    }), ...n.slice(e + 1)])
  }, u = (e, t) => {
    let r = n[e];
    i([...n.slice(0, e), b(g({}, r), {
      response: t
    }), ...n.slice(e + 1)])
  }, f = (e, t) => {
    let {
      value: r
    } = t, l = n[e];
    i([...n.slice(0, e), b(g({}, l), {
      response: r
    }), ...n.slice(e + 1)])
  }, p = (e, t) => {
    switch (e.field_type) {
      case o.QJ.TERMS:
        return (0, r.jsx)(h.dd, {
          channelId: a,
          formField: e,
          onChange: (e, n) => c(t, n)
        }, t);
      case o.QJ.TEXT_INPUT:
        return (0, r.jsx)(x.zY, {
          formField: e,
          autofocus: 0 === t,
          onChange: e => u(t, e)
        }, t);
      case o.QJ.PARAGRAPH:
        return (0, r.jsx)(m.lX, {
          formField: e,
          autofocus: 0 === t,
          onChange: e => u(t, e)
        }, t);
      case o.QJ.MULTIPLE_CHOICE:
        return (0, r.jsx)(d.sp, {
          formField: e,
          onChange: e => f(t, e)
        }, t)
    }
  };
  return (0, r.jsx)(r.Fragment, {
    children: n.map((e, t) => p(e, t))
  })
}

function j(e) {
  let t, {
      guildId: n,
      formFields: i,
      updateFormFields: s,
      disableVerification: o
    } = e,
    d = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
    m = (0, c.i)({
      guildId: n
    });
  return (t = m === p.sFg.NONE ? null : m === p.sFg.VERY_HIGH ? f.l : u.b, null == d) ? null : (0, r.jsxs)(r.Fragment, {
    children: [!o && null != t && (0, r.jsx)(t, {}), (0, r.jsx)(v, {
      guildId: n,
      formFields: i,
      updateFormFields: s
    })]
  })
}

function C(e) {
  let t, {
      guildId: n,
      formFields: s,
      updateFormFields: o,
      disableVerification: d
    } = e,
    m = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
    h = (0, c.i)({
      guildId: n
    }),
    x = (null == m ? true : m.isPhoneVerified()) || (null == m ? true : m.isStaff()),
    g = (null == m ? true : m.verified) || x,
    b = false;
  h === p.sFg.NONE ? (b = true, t = null) : h === p.sFg.VERY_HIGH ? (b = null != x && x, t = f.v) : (b = null != g && g, t = u.B);
  let j = i.useRef(b);
  return null == m ? null : (0, r.jsxs)(r.Fragment, {
    children: [!d && !j.current && null != t && (0, r.jsx)(t, {
      isUserVerified: b
    }), (0, r.jsx)(v, {
      guildId: n,
      formFields: s,
      updateFormFields: o
    })]
  })
}