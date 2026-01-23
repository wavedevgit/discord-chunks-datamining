/** Chunk was on 72165 **/
/** chunk id: 274541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk738876 = require("./738876.jsx"),
  Chunk323073 = require("./323073.js"),
  Chunk58149 = require("./58149.js"),
  Chunk237774 = require("./237774.js"),
  Chunk355622 = require("./355622.js"),
  Chunk225142 = require("./225142.js"),
  Chunk701785 = require("./701785.js"),
  Chunk265869 = require("./265869.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk187360 = require("./187360.jsx"),
  Chunk353428 = require("./353428.jsx"),
  Chunk857071 = require("./857071.js"),
  Chunk976860 = require("./976860.js"),
  Chunk138298 = require("./138298.js"),
  Chunk522556 = require("./522556.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk47167 = require("./47167.js"),
  Chunk698718 = require("./698718.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk305585 = require("./305585.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    channelId: t,
    baseChannelId: T,
    channelViewSource: L = "Split View",
    isResourceChannelView: k
  } = e, H = (0, i.bG)([O.A], () => O.A.getChannel(t)), M = (0, i.bG)([y.A], () => y.A.getGuild(null == H ? true : H.getGuildId())), G = (0, w.Ay)(H), B = (0, i.bG)([b.A], () => (null == M ? true : M.id) != null && b.A.isLurking(M.id), [M]), U = (0, _.A)(t), V = (0, i.bG)([f.h], () => {
    var e;
    return null == (e = f.h.getResourceForChannel(null == M ? true : M.id, t)) ? true : e.title
  }), F = (0, c.vL)(H), W = r.useRef(false);
  if (r.useEffect(() => {
      null == H || W.current || (W.current = true, (0, d.zV)(S.HAw.CHANNEL_OPENED, R(D({}, (0, d.qL)(H.id)), {
        channel_view: L
      })), (0, u.k)(S.HAw.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: H.id
      }))
    }, [H, L]), null == H || null == M) return null;
  let q = [];
  return (B || q.push((0, l.jsx)(g.A, {
    channel: H
  }, "notifications")), q.push((0, l.jsx)(m.Ay.Icon, {
    icon: a.PGe,
    tooltip: E.intl.string(E.t.cpT0Cq),
    onClick: () => C.A.closeChannelSidebar(T)
  }, "close")), F) ? (0, l.jsx)(j.A, {
    guild: M,
    channelId: H.id
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.A, {
      channel: H,
      draftType: v.C.ChannelMessage
    }), (0, l.jsx)(m.Ay, {
      toolbar: q,
      "aria-label": E.intl.string(E.t.BIYAqa),
      children: (0, x.zF)({
        channel: H,
        channelName: U ? V : G,
        guild: M,
        inSidebar: true,
        handleContextMenu: e => {
          (0, s.L3)(e, async () => {
            let {
              default: e
            } = await n.e("17425").then(n.bind(n, 340968));
            return t => (0, l.jsx)(e, R(D({}, t), {
              channel: H,
              guild: M
            }))
          })
        },
        handleClick: () => {
          let e = N.A.getMessages(H.id);
          if (k) {
            (0, A.pX)(S.BVt.CHANNEL(H.guild_id, H.id)), (0, p.bN)(H.guild_id, null);
            return
          }(0, A.uh)(H.guild_id, H.id, e.jumpTargetId)
        }
      })
    }), (0, l.jsx)("div", {
      className: P.T,
      children: (0, l.jsx)(I.A, {
        channel: H,
        guild: M,
        chatInputType: h.oU.SIDEBAR
      }, t)
    })]
  })
}