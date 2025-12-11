/** Chunk was on 41700 **/
/** chunk id: 588322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    channelId: t
  } = e, x = (0, l.e7)([g.Z], () => g.Z.getChannel(t)), v = (0, l.e7)([g.Z], () => g.Z.getChannel(null == x ? true : x.parent_id)), C = (0, l.e7)([b.Z], () => b.Z.getGuild(null == x ? true : x.getGuildId())), I = (0, o.ZP)(x), _ = i.useRef(false);
  if (i.useEffect(() => {
      null == x || _.current || (_.current = true, (0, y.lN)(x))
    }, [x]), null == x || null == C) return null;
  let S = (0, r.jsx)(f.Z, {
    channel: x
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      channel: x,
      draftType: m.d.ChannelMessage
    }), (0, r.jsx)(u.ZP, {
      toolbar: S,
      "aria-label": O.intl.string(O.t.Pwe8tN),
      children: (0, p.ud)({
        channel: x,
        parentChannel: v,
        channelName: I,
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
                channel: x
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
          null != x && (0, h.XU)(x.guild_id, x.id)
        }
      })
    }), (0, r.jsx)("div", {
      className: j.chat,
      children: (0, r.jsx)(c.Z, {
        channel: x,
        guild: C,
        chatInputType: d.Ie.SIDEBAR
      }, t)
    })]
  })
}