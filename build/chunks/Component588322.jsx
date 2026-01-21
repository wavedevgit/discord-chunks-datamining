/** Chunk was on 82124 **/
/** chunk id: 588322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk561472 = require("./561472.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk910611 = require("./910611.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk664342 = require("./664342.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk430824 = require("./430824.js"),
  Chunk228392 = require("./228392.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131884 = require("./131884.js");

function j(e) {
  let {
    channelId: t
  } = e, j = (0, l.e7)([g.Z], () => g.Z.getChannel(t)), x = (0, l.e7)([g.Z], () => g.Z.getChannel(null == j ? true : j.parent_id)), C = (0, l.e7)([b.Z], () => b.Z.getGuild(null == j ? true : j.getGuildId())), E = (0, s.ZP)(j), S = i.useRef(false);
  if (i.useEffect(() => {
      null == j || S.current || (S.current = true, (0, y.lN)(j))
    }, [j]), null == j || null == C) return null;
  let _ = (0, r.jsx)(h.Z, {
    channel: j
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Z, {
      channel: j,
      draftType: m.d.ChannelMessage
    }), (0, r.jsx)(d.ZP, {
      toolbar: _,
      "aria-label": v.intl.string(v.t.Pwe8tN),
      children: (0, p.ud)({
        channel: j,
        parentChannel: x,
        channelName: E,
        guild: C,
        inSidebar: true,
        handleContextMenu: function(e) {
          (0, a.jW)(e, async () => {
            let {
              default: e
            } = await n.e("40157").then(n.bind(n, 422200));
            return t => {
              var n, i;
              return (0, r.jsx)(e, (n = function(e) {
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
              }({}, t), i = i = {
                channel: j
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(i)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
              }), n))
            }
          })
        },
        handleClick: function() {
          null != j && (0, f.XU)(j.guild_id, j.id)
        }
      })
    }), (0, r.jsx)("div", {
      className: O.chat,
      children: (0, r.jsx)(c.Z, {
        channel: j,
        guild: C,
        chatInputType: u.Ie.SIDEBAR
      }, t)
    })]
  })
}