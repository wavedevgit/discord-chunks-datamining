/** Chunk was on 91173 **/
/** chunk id: 310423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./467055.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function y(e) {
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

function x(e, t) {
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
let j = {
    tag: "span",
    variant: "text-md/normal",
    color: "header-secondary"
  },
  I = {
    className: a()("mention", Chunk466002.mention)
  };

function S(e) {
  return (0, r.jsx)(s.Text, x(y({}, j), {
    color: "header-primary",
    children: e
  }))
}
let T = Chunk647438.memo(function(e) {
  var t, n, l, a, T, P;
  let N, {
      channel: A,
      messageId: w,
      interactionData: Z
    } = e,
    {
      analyticsLocations: R
    } = (0, u.ZP)(),
    {
      onCopy: L,
      copyRef: D
    } = (0, d.Z)(A, null == Z || null == (t = Z.application_command) ? true : t.id),
    M = (0, o.e7)([h.Z], () => h.Z.getGuild(A.guild_id), [A.guild_id]);
  if (i.useEffect(() => {
      (null == Z || Z.type === c.yU.CHAT && true === Z.application_command) && p.OG(A.id, w)
    }, [A.id, w, Z]), null == Z) N = (0, r.jsx)(s.$jN, {
    type: s.$jN.Type.SPINNING_CIRCLE,
    className: O.spinner
  });
  else {
    let e = [],
      t = Object.fromEntries((null != (a = null == (n = Z.application_command) ? true : n.options) ? a : []).map(e => [e.name, e]));
    for (let n of null != (T = Z.options) ? T : []) e = e.concat(function e(t) {
      var n, l, a, o, u, d, p;
      let h, {
          option: O,
          channel: T,
          guild: P,
          messageId: N,
          parentOptionKey: A,
          commandOptionSpec: w,
          sourceAnalyticsLocations: Z
        } = t,
        R = null != A ? A + " " + O.name : O.name;
      if (O.type === c.jw.SUB_COMMAND || O.type === c.jw.SUB_COMMAND_GROUP) {
        let t = [(0, r.jsxs)(i.Fragment, {
            children: [" ", (0, r.jsx)(s.Text, x(y({}, j), {
              children: null != (l = null == w ? true : w.name_localized) ? l : O.name
            }))]
          }, R)],
          c = Object.fromEntries(null == (n = null != (a = null == w ? true : w.options) ? a : []) ? true : n.map(e => [e.name, e]));
        for (let n of null != (o = O.options) ? o : []) t = t.concat(e({
          option: n,
          channel: T,
          guild: P,
          messageId: N,
          parentOptionKey: R,
          commandOptionSpec: c[n.name],
          sourceAnalyticsLocations: Z
        }));
        return t
      }
      let L = O.value;
      if (null != O.value) switch (O.type) {
        case c.jw.USER: {
          let e = O.value.toString(),
            t = b.default.getUser(e);
          if (null != t) {
            let e = (0, E.ij)(t, T);
            h = (0, r.jsxs)(m.Z, x(y({}, I), {
              onClick: () => (0, f.openUserProfileModal)({
                userId: t.id,
                guildId: T.guild_id,
                channelId: T.id,
                messageId: N,
                sourceAnalyticsLocations: Z
              }),
              children: [C.ME, e.nick]
            }))
          }
          break
        }
        case c.jw.CHANNEL: {
          let e = O.value.toString(),
            t = _.Z.getChannel(e);
          null != t && (h = (0, r.jsxs)(m.Z, x(y({}, I), {
            children: [C.zy, t.name]
          })));
          break
        }
        case c.jw.ROLE: {
          let e = O.value.toString(),
            t = null != P ? g.Z.getRole(P.id, e) : true;
          null != t && (h = (0, r.jsxs)(m.Z, x(y({}, I), {
            children: [C.ME, t.name]
          })));
          break
        }
        case c.jw.MENTIONABLE: {
          let e = O.value.toString(),
            t = null != P ? g.Z.getRole(P.id, e) : true;
          if (null != t) h = (0, r.jsxs)(m.Z, {
            children: [C.ME, t.name]
          });
          else {
            let t = b.default.getUser(e);
            if (null != t) {
              let e = (0, E.ij)(t, T);
              h = (0, r.jsxs)(m.Z, x(y({}, I), {
                onClick: () => (0, f.openUserProfileModal)({
                  userId: t.id,
                  guildId: T.guild_id,
                  sourceAnalyticsLocations: Z
                }),
                children: [C.ME, e.nick]
              }))
            }
          }
          break
        }
        case c.jw.ATTACHMENT:
          h = S(v.intl.string(v.t.nONJVV));
          break;
        default: {
          let e = null == w || null == (u = w.choices) ? true : u.find(e => e.value === O.value);
          null != e && (L = null != (d = e.name_localized) ? d : e.name)
        }
      }
      return null == h && (h = S(null == L ? true : L.toString())), [(0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsxs)(s.Text, x(y({}, j), {
          children: [" ", null != (p = null == w ? true : w.name_localized) ? p : O.name, ": "]
        })), h]
      }, R)]
    }({
      option: n,
      channel: A,
      guild: M,
      messageId: w,
      parentOptionKey: null,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: R
    }));
    N = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(s.Text, x(y({}, j), {
        children: ["/", null != (P = null == (l = Z.application_command) ? true : l.name_localized) ? P : Z.name]
      })), e]
    })
  }
  return (0, r.jsxs)("div", {
    className: O.container,
    onCopy: e => {
      var t, n, r;
      let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? true : t.toString()) ? r : "";
      i.startsWith("/") && i.endsWith("\n") && L(e, Z)
    },
    children: [(0, r.jsx)("div", {
      className: O.tooltip,
      ref: D,
      children: N
    }), (0, r.jsx)("div", {
      className: O.tooltipPointer
    })]
  })
})