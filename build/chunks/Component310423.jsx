/** Chunk was on web.js **/
/** chunk id: 310423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./467055.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk466002 = require("./466002.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = {
    tag: "span",
    variant: "text-md/normal",
    color: "header-secondary"
  },
  N = {
    className: o()("mention", Chunk466002.mention)
  };

function R(e) {
  return (0, r.jsx)(l.Text, A(T({}, C), {
    color: "header-primary",
    children: e
  }))
}

function P(e) {
  var t, n, a, o, s, u, d;
  let f, {
      option: g,
      channel: v,
      guild: I,
      messageId: S,
      parentOptionKey: w,
      commandOptionSpec: D,
      sourceAnalyticsLocations: x
    } = e,
    L = null != w ? w + " " + g.name : g.name;
  if (g.type === c.jw.SUB_COMMAND || g.type === c.jw.SUB_COMMAND_GROUP) {
    let e = [(0, r.jsxs)(i.Fragment, {
        children: [" ", (0, r.jsx)(l.Text, A(T({}, C), {
          children: null != (n = null == D ? true : D.name_localized) ? n : g.name
        }))]
      }, L)],
      s = Object.fromEntries(null == (t = null != (a = null == D ? true : D.options) ? a : []) ? true : t.map(e => [e.name, e]));
    for (let t of null != (o = g.options) ? o : []) e = e.concat(P({
      option: t,
      channel: v,
      guild: I,
      messageId: S,
      parentOptionKey: L,
      commandOptionSpec: s[t.name],
      sourceAnalyticsLocations: x
    }));
    return e
  }
  let M = g.value;
  if (null != g.value) switch (g.type) {
    case c.jw.USER: {
      let e = g.value.toString(),
        t = E.default.getUser(e);
      if (null != t) {
        let e = (0, b.ij)(t, v);
        f = (0, r.jsxs)(_.Z, A(T({}, N), {
          onClick: () => (0, p.openUserProfileModal)({
            userId: t.id,
            guildId: v.guild_id,
            channelId: v.id,
            messageId: S,
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
      null != t && (f = (0, r.jsxs)(_.Z, A(T({}, N), {
        children: [y.zy, t.name]
      })));
      break
    }
    case c.jw.ROLE: {
      let e = g.value.toString(),
        t = null != I ? m.Z.getRole(I.id, e) : true;
      null != t && (f = (0, r.jsxs)(_.Z, A(T({}, N), {
        children: [y.ME, t.name]
      })));
      break
    }
    case c.jw.MENTIONABLE: {
      let e = g.value.toString(),
        t = null != I ? m.Z.getRole(I.id, e) : true;
      if (null != t) f = (0, r.jsxs)(_.Z, {
        children: [y.ME, t.name]
      });
      else {
        let t = E.default.getUser(e);
        if (null != t) {
          let e = (0, b.ij)(t, v);
          f = (0, r.jsxs)(_.Z, A(T({}, N), {
            onClick: () => (0, p.openUserProfileModal)({
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
      f = R(O.intl.string(O.t.nONJVc));
      break;
    default: {
      let e = null == D || null == (s = D.choices) ? true : s.find(e => e.value === g.value);
      null != e && (M = null != (u = e.name_localized) ? u : e.name)
    }
  }
  return null == f && (f = R(null == M ? true : M.toString())), [(0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)(l.Text, A(T({}, C), {
      children: [" ", null != (d = null == D ? true : D.name_localized) ? d : g.name, ": "]
    })), f]
  }, L)]
}

function w(e) {
  var t, n, a, o, _, p;
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
      copyRef: I
    } = (0, d.Z)(m, null == b || null == (t = b.application_command) ? true : t.id),
    S = (0, s.e7)([g.Z], () => g.Z.getGuild(m.guild_id), [m.guild_id]);
  if (i.useEffect(() => {
      (null == b || b.type === c.yU.CHAT && true === b.application_command) && f.OG(m.id, E)
    }, [m.id, E, b]), null == b) h = (0, r.jsx)(l.$jN, {
    type: l.$jN.Type.SPINNING_CIRCLE,
    className: v.spinner
  });
  else {
    let e = [],
      t = Object.fromEntries((null != (o = null == (n = b.application_command) ? true : n.options) ? o : []).map(e => [e.name, e]));
    for (let n of null != (_ = b.options) ? _ : []) e = e.concat(P({
      option: n,
      channel: m,
      guild: S,
      messageId: E,
      parentOptionKey: null,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: y
    }));
    h = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(l.Text, A(T({}, C), {
        children: ["/", null != (p = null == (a = b.application_command) ? true : a.name_localized) ? p : b.name]
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
      ref: I,
      children: h
    }), (0, r.jsx)("div", {
      className: v.tooltipPointer
    })]
  })
}
let D = Chunk647438.memo(w)