/** Chunk was on web.js **/
/** chunk id: 728963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./446912.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk740075 = require("./740075.js"),
  Chunk706727 = require("./706727.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk763754 = require("./763754.js");
require("./827669.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk998815 = require("./998815.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = {
    tag: "span",
    variant: "text-md/normal",
    color: "text-default"
  },
  C = {
    className: s()("mention", Chunk998815.lE)
  };

function N(e) {
  return (0, r.jsx)(l.Text, S(A({}, T), {
    color: "text-strong",
    children: e
  }))
}

function R(e) {
  var t, n, a, s, o, u, d;
  let f, {
      option: g,
      channel: O,
      guild: v,
      messageId: I,
      parentOptionKey: w,
      commandOptionSpec: P,
      sourceAnalyticsLocations: D
    } = e,
    x = null != w ? w + " " + g.name : g.name;
  if (g.type === c.n4.SUB_COMMAND || g.type === c.n4.SUB_COMMAND_GROUP) {
    let e = [(0, r.jsxs)(i.Fragment, {
        children: [" ", (0, r.jsx)(l.Text, S(A({}, T), {
          children: null != (n = null == P ? true : P.name_localized) ? n : g.name
        }))]
      }, x)],
      t = Object.fromEntries(null == (o = null != (a = null == P ? true : P.options) ? a : []) ? true : o.map(e => [e.name, e]));
    for (let n of null != (s = g.options) ? s : []) e = e.concat(R({
      option: n,
      channel: O,
      guild: v,
      messageId: I,
      parentOptionKey: x,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: D
    }));
    return e
  }
  let L = g.value;
  if (null != g.value) switch (g.type) {
    case c.n4.USER: {
      let e = g.value.toString(),
        t = E.default.getUser(e);
      if (null != t) {
        let e = (0, y.FT)(t, O);
        f = (0, r.jsxs)(p.A, S(A({}, C), {
          onClick: () => (0, _.openUserProfileModal)({
            userId: t.id,
            guildId: O.guild_id,
            channelId: O.id,
            messageId: I,
            sourceAnalyticsLocations: D
          }),
          children: ["@", e.nick]
        }))
      }
      break
    }
    case c.n4.CHANNEL: {
      let e = g.value.toString(),
        t = h.A.getChannel(e);
      null != t && (f = (0, r.jsxs)(p.A, S(A({}, C), {
        children: ["#", t.name]
      })));
      break
    }
    case c.n4.ROLE: {
      let e = g.value.toString(),
        t = null != v ? m.A.getRole(v.id, e) : true;
      null != t && (f = (0, r.jsxs)(p.A, S(A({}, C), {
        children: ["@", t.name]
      })));
      break
    }
    case c.n4.MENTIONABLE: {
      let e = g.value.toString(),
        t = null != v ? m.A.getRole(v.id, e) : true;
      if (null != t) f = (0, r.jsxs)(p.A, {
        children: ["@", t.name]
      });
      else {
        let t = E.default.getUser(e);
        if (null != t) {
          let e = (0, y.FT)(t, O);
          f = (0, r.jsxs)(p.A, S(A({}, C), {
            onClick: () => (0, _.openUserProfileModal)({
              userId: t.id,
              guildId: O.guild_id,
              sourceAnalyticsLocations: D
            }),
            children: ["@", e.nick]
          }))
        }
      }
      break
    }
    case c.n4.ATTACHMENT:
      f = N(b.intl.string(b.t.nONJVc));
      break;
    default: {
      let e = null == P || null == (u = P.choices) ? true : u.find(e => e.value === g.value);
      null != e && (L = null != (d = e.name_localized) ? d : e.name)
    }
  }
  return null == f && (f = N(null == L ? true : L.toString())), [(0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)(l.Text, S(A({}, T), {
      children: [" ", null != (t = null == P ? true : P.name_localized) ? t : g.name, ": "]
    })), f]
  }, x)]
}

function w(e) {
  var t, n, a, s, p, _;
  let h, {
      channel: m,
      messageId: E,
      interactionData: y
    } = e,
    {
      analyticsLocations: b
    } = (0, u.Ay)(),
    {
      onCopy: v,
      copyRef: I
    } = (0, d.A)(m, null == y || null == (t = y.application_command) ? true : t.id),
    C = (0, o.bG)([g.A], () => g.A.getGuild(m.guild_id), [m.guild_id]);
  if (i.useEffect(() => {
      (null == y || y.type === c.kc.CHAT && true === y.application_command) && f.S7(m.id, E)
    }, [m.id, E, y]), null == y) h = (0, r.jsx)(l.y$y, {
    type: l.y$y.Type.SPINNING_CIRCLE,
    className: O.u1
  });
  else {
    let e = [],
      t = Object.fromEntries((null != (n = null == (p = y.application_command) ? true : p.options) ? n : []).map(e => [e.name, e]));
    for (let n of null != (a = y.options) ? a : []) e = e.concat(R({
      option: n,
      channel: m,
      guild: C,
      messageId: E,
      parentOptionKey: null,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: b
    }));
    h = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(l.Text, S(A({}, T), {
        children: ["/", null != (s = null == (_ = y.application_command) ? true : _.name_localized) ? s : y.name]
      })), e]
    })
  }
  let N = e => {
    var t, n, r;
    let i = null != (t = null == (r = window) || null == (n = r.getSelection()) ? true : n.toString()) ? t : "";
    i.startsWith("/") && i.endsWith("\n") && v(e, y)
  };
  return (0, r.jsxs)("div", {
    className: O.kL,
    onCopy: N,
    children: [(0, r.jsx)("div", {
      className: O.YL,
      ref: I,
      children: h
    }), (0, r.jsx)("div", {
      className: O.xQ
    })]
  })
}
let P = Chunk64700.memo(w)