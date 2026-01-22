/** Chunk was on 97492 **/
/** chunk id: 713842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk442433 = require("./442433.js"),
  Chunk738876 = require("./738876.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk698718 = require("./698718.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk353428 = require("./353428.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk823471 = require("./823471.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk71393 = require("./71393.js"),
  Chunk853742 = require("./853742.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk388552 = require("./388552.js");

function j(e) {
  let {
    channelId: t
  } = e, j = (0, i.bG)([b.A], () => b.A.getChannel(t)), v = (0, i.bG)([b.A], () => b.A.getChannel(null == j ? true : j.parent_id)), x = (0, i.bG)([m.A], () => m.A.getGuild(null == j ? true : j.getGuildId())), E = (0, o.Ay)(j), _ = l.useRef(false);
  if (l.useEffect(() => {
      null == j || _.current || (_.current = true, (0, A.rH)(j))
    }, [j]), null == j || null == x) return null;
  let C = (0, r.jsx)(h.A, {
    channel: j
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.A, {
      channel: j,
      draftType: g.C.ChannelMessage
    }), (0, r.jsx)(d.Ay, {
      toolbar: C,
      "aria-label": y.intl.string(y.t.Pwe8tN),
      children: (0, f.zF)({
        channel: j,
        parentChannel: v,
        channelName: E,
        guild: x,
        inSidebar: true,
        handleContextMenu: function(e) {
          (0, a.L3)(e, async () => {
            let {
              default: e
            } = await n.e("33").then(n.bind(n, 44536));
            return t => {
              var n, l;
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
              }({}, t), l = l = {
                channel: j
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
              }), n))
            }
          })
        },
        handleClick: function() {
          null != j && (0, p.uh)(j.guild_id, j.id)
        }
      })
    }), (0, r.jsx)("div", {
      className: O.T,
      children: (0, r.jsx)(c.A, {
        channel: j,
        guild: x,
        chatInputType: u.oU.SIDEBAR
      }, t)
    })]
  })
}