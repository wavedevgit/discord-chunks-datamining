/** Chunk was on web.js **/
/** chunk id: 310423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./467055.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk778087 = require("./778087.js"),
  Chunk603721 = require("./603721.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk739566 = require("./739566.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867202 = require("./867202.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = {
    tag: "span",
    variant: "text-md/normal",
    color: "text-default"
  },
  N = {
    className: o()("mention", Chunk867202.mention)
  };

function P(e) {
  return (0, r.jsx)(l.Text, C(I({}, A), {
    color: "text-strong",
    children: e
  }))
}

function w(e) {
  var t, n, a, o, s, u, d;
  let f, {
      option: g,
      channel: v,
      guild: S,
      messageId: T,
      parentOptionKey: R,
      commandOptionSpec: D,
      sourceAnalyticsLocations: x
    } = e,
    L = null != R ? R + " " + g.name : g.name;
  if (g.type === c.jw.SUB_COMMAND || g.type === c.jw.SUB_COMMAND_GROUP) {
    let e = [(0, r.jsxs)(i.Fragment, {
        children: [" ", (0, r.jsx)(l.Text, C(I({}, A), {
          children: null != (n = null == D ? true : D.name_localized) ? n : g.name
        }))]
      }, L)],
      s = Object.fromEntries(null == (t = null != (a = null == D ? true : D.options) ? a : []) ? true : t.map(e => [e.name, e]));
    for (let t of null != (o = g.options) ? o : []) e = e.concat(w({
      option: t,
      channel: v,
      guild: S,
      messageId: T,
      parentOptionKey: L,
      commandOptionSpec: s[t.name],
      sourceAnalyticsLocations: x
    }));
    return e
  }
  let j = g.value;
  if (null != g.value) switch (g.type) {
    case c.jw.USER: {
      let e = g.value.toString(),
        t = E.default.getUser(e);
      if (null != t) {
        let e = (0, b.ij)(t, v);
        f = (0, r.jsxs)(p.Z, C(I({}, N), {
          onClick: () => (0, _.openUserProfileModal)({
            userId: t.id,
            guildId: v.guild_id,
            channelId: v.id,
            messageId: T,
            sourceAnalyticsLocations: x
          }),
          children: [y.ME, e.nick]
        }))
      }
      break
    }
    case c.jw.CHANNEL: {
      let e = g.value.toString(),
        t = h.Z.getChannel(e);
      null != t && (f = (0, r.jsxs)(p.Z, C(I({}, N), {
        children: [y.zy, t.name]
      })));
      break
    }
    case c.jw.ROLE: {
      let e = g.value.toString(),
        t = null != S ? m.Z.getRole(S.id, e) : true;
      null != t && (f = (0, r.jsxs)(p.Z, C(I({}, N), {
        children: [y.ME, t.name]
      })));
      break
    }
    case c.jw.MENTIONABLE: {
      let e = g.value.toString(),
        t = null != S ? m.Z.getRole(S.id, e) : true;
      if (null != t) f = (0, r.jsxs)(p.Z, {
        children: [y.ME, t.name]
      });
      else {
        let t = E.default.getUser(e);
        if (null != t) {
          let e = (0, b.ij)(t, v);
          f = (0, r.jsxs)(p.Z, C(I({}, N), {
            onClick: () => (0, _.openUserProfileModal)({
              userId: t.id,
              guildId: v.guild_id,
              sourceAnalyticsLocations: x
            }),
            children: [y.ME, e.nick]
          }))
        }
      }
      break
    }
    case c.jw.ATTACHMENT:
      f = P(O.intl.string(O.t.nONJVc));
      break;
    default: {
      let e = null == D || null == (s = D.choices) ? true : s.find(e => e.value === g.value);
      null != e && (j = null != (u = e.name_localized) ? u : e.name)
    }
  }
  return null == f && (f = P(null == j ? true : j.toString())), [(0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)(l.Text, C(I({}, A), {
      children: [" ", null != (d = null == D ? true : D.name_localized) ? d : g.name, ": "]
    })), f]
  }, L)]
}

function R(e) {
  var t, n, a, o, p, _;
  let h, {
      channel: m,
      messageId: E,
      interactionData: b
    } = e,
    {
      analyticsLocations: y
    } = (0, u.ZP)(),
    {
      onCopy: O,
      copyRef: S
    } = (0, d.Z)(m, null == b || null == (t = b.application_command) ? true : t.id),
    T = (0, s.e7)([g.Z], () => g.Z.getGuild(m.guild_id), [m.guild_id]);
  if (i.useEffect(() => {
      (null == b || b.type === c.yU.CHAT && true === b.application_command) && f.OG(m.id, E)
    }, [m.id, E, b]), null == b) h = (0, r.jsx)(l.$jN, {
    type: l.$jN.Type.SPINNING_CIRCLE,
    className: v.spinner
  });
  else {
    let e = [],
      t = Object.fromEntries((null != (o = null == (n = b.application_command) ? true : n.options) ? o : []).map(e => [e.name, e]));
    for (let n of null != (p = b.options) ? p : []) e = e.concat(w({
      option: n,
      channel: m,
      guild: T,
      messageId: E,
      parentOptionKey: null,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: y
    }));
    h = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(l.Text, C(I({}, A), {
        children: ["/", null != (_ = null == (a = b.application_command) ? true : a.name_localized) ? _ : b.name]
      })), e]
    })
  }
  let N = e => {
    var t, n, r;
    let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? true : t.toString()) ? r : "";
    i.startsWith("/") && i.endsWith("\n") && O(e, b)
  };
  return (0, r.jsxs)("div", {
    className: v.container,
    onCopy: N,
    children: [(0, r.jsx)("div", {
      className: v.tooltip,
      ref: S,
      children: h
    }), (0, r.jsx)("div", {
      className: v.tooltipPointer
    })]
  })
}
let D = Chunk473749.memo(R)