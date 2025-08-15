/** Chunk was on 22878 **/
/** chunk id: 619895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => d,
  h: () => m
}), require("./35282.js");
var Chunk73800 = require("./73800.js"),
  Chunk228458 = require("./228458.js"),
  Chunk442837 = require("./442837.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk823379 = require("./823379.js"),
  Chunk399654 = require("./399654.js"),
  Chunk844439 = require("./844439.js");

function d(e) {
  let {
    contentType: t
  } = e;
  switch (t) {
    case "image/jpeg":
    case "image/jpg":
      return ".jpg";
    case "image/png":
    case "image/apng":
      return ".png";
    case "image/webp":
      return ".webp";
    default:
      return ""
  }
}

function m(e) {
  let {
    channelId: t
  } = e, {
    fetchState: n,
    recommendationsSections: d
  } = function(e) {
    let {
      channelId: t
    } = e, n = l.I.CONTEXTUAL_IMAGE, o = r.useMemo(() => ({
      channelId: t,
      location: n,
      withCommands: true
    }), [t, n]);
    r.useEffect(() => {
      (0, u.a)(o)
    }, [o]);
    let {
      fetchState: a,
      recommendationsSections: c
    } = (0, i.cj)([s.ZP], () => ({
      fetchState: s.ZP.getFetchState(o),
      recommendationsSections: s.ZP.getRecommendations(o)
    }));
    return {
      fetchState: a,
      recommendationsSections: c
    }
  }({
    channelId: t
  });
  return {
    fetchState: n,
    imageRecCommandContexts: r.useMemo(() => {
      let e = d.length > 0 ? d[0].items : true;
      if (true === e) return [];
      let t = {};
      return e.forEach(e => {
        var n;
        let r = null != (n = e.command_metadata) ? n : {};
        Object.keys(r).forEach(e => {
          t[e] = r[e]
        })
      }), Object.keys(t).map(t => {
        var n, r, l, i, c, u, s, d, m, p, f, b, O, g;
        let E, y, h = e.find(e => {
          var n;
          return null != (E = null == (n = e.commands) ? true : n.find(e => e.id === t))
        });
        if (null == h) return null;
        let {
          application: v
        } = h;
        if (null == E) return null;
        let C = (0, a.Z8)({
            rootCommand: E,
            command: E,
            applicationId: v.id
          }),
          j = null == (l = h.command_metadata) || null == (r = l[t]) || null == (n = r.overrideSendCommandInfo) ? true : n.commandId;
        if (null != j) {
          let e = null != j ? null == (f = h.commands) ? true : f.find(e => e.id === j) : true;
          null != e && (y = (0, a.Z8)({
            rootCommand: e,
            command: e,
            applicationId: v.id
          }))
        }
        return {
          command: (O = function(e) {
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
          }({}, C), g = g = {
            displayName: C.displayName.split(/[_ ]/).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(g)).forEach(function(e) {
            Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(g, e))
          }), O),
          imageOption: null == (c = h.command_metadata) || null == (i = c[t]) ? true : i.imageOption,
          overrideSendCommand: y,
          overrideSendCommandInfo: null == (s = h.command_metadata) || null == (u = s[t]) ? true : u.overrideSendCommandInfo,
          onlyAllowEdit: null == (m = h.command_metadata) || null == (d = m[t]) ? true : d.onlyAllowEdit,
          section: {
            type: o.Qi.APPLICATION,
            id: v.id,
            icon: v.icon,
            name: null != (b = null == v || null == (p = v.bot) ? true : p.username) ? b : v.name,
            application: v
          }
        }
      }).filter(c.lm)
    }, [d])
  }
}