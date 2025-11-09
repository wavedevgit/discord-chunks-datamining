/** Chunk was on 30025 **/
/** chunk id: 588322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk114518 = require("./114518.js");

function O(e) {
  let {
    channelId: t
  } = e, O = (0, l.e7)([g.Z], () => g.Z.getChannel(t)), v = (0, l.e7)([g.Z], () => g.Z.getChannel(null == O ? true : O.parent_id)), j = (0, l.e7)([b.Z], () => b.Z.getGuild(null == O ? true : O.getGuildId())), C = (0, o.ZP)(O), I = i.useRef(false);
  if (i.useEffect(() => {
      null == O || I.current || (I.current = true, (0, _.lN)(O))
    }, [O]), null == O || null == j) return null;
  let S = (0, r.jsx)(f.Z, {
    channel: O
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      channel: O,
      draftType: m.d.ChannelMessage
    }), (0, r.jsx)(u.ZP, {
      toolbar: S,
      "aria-label": y.intl.string(y.t.Pwe8tN),
      children: (0, p.ud)({
        channel: O,
        parentChannel: v,
        channelName: C,
        guild: j,
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
                channel: O
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
          null != O && (0, h.XU)(O.guild_id, O.id)
        }
      })
    }), (0, r.jsx)("div", {
      className: x.chat,
      children: (0, r.jsx)(c.Z, {
        channel: O,
        guild: j,
        chatInputType: d.Ie.SIDEBAR
      }, t)
    })]
  })
}