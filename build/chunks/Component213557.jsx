/** Chunk was on 58121 **/
/** chunk id: 213557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk561472 = require("./561472.jsx"),
  Chunk36311 = require("./36311.jsx"),
  Chunk622822 = require("./622822.js"),
  Chunk367907 = require("./367907.js"),
  Chunk188471 = require("./188471.js"),
  Chunk541716 = require("./541716.js"),
  Chunk526120 = require("./526120.js"),
  Chunk563534 = require("./563534.js"),
  Chunk736052 = require("./736052.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk442336 = require("./442336.jsx"),
  Chunk910611 = require("./910611.jsx"),
  Chunk41776 = require("./41776.js"),
  Chunk703656 = require("./703656.js"),
  Chunk6025 = require("./6025.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk731290 = require("./731290.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk933557 = require("./933557.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10832 = require("./10832.js");

function k(e) {
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

function B(e, t) {
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

function R(e) {
  let {
    channelId: t,
    baseChannelId: R,
    channelViewSource: D = "Split View",
    isResourceChannelView: L
  } = e, M = (0, i.e7)([y.Z], () => y.Z.getChannel(t)), H = (0, i.e7)([Z.Z], () => Z.Z.getGuild(null == M ? true : M.getGuildId())), U = (0, i.e7)([w.default], () => w.default.getCurrentUser()), G = (0, i.e7)([N.Z], () => N.Z.didAgree(null == M ? true : M.guild_id)), W = (null == U ? true : U.nsfwAllowed) === true, q = (0, P.ZP)(M), F = (0, i.e7)([b.Z], () => (null == H ? true : H.id) != null && b.Z.isLurking(H.id), [H]), z = (0, g.Z)(t), X = (0, i.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getResourceForChannel(null == H ? true : H.id, t)) ? true : e.title
  }), V = r.useRef(false);
  if (r.useEffect(() => {
      null == M || V.current || (V.current = true, (0, u.yw)(S.rMx.CHANNEL_OPENED, B(k({}, (0, u.$H)(M.id)), {
        channel_view: D
      })), (0, m.a)(S.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: M.id
      }))
    }, [M, D]), null == M || null == H) return null;
  let Q = [];
  return (F || Q.push((0, l.jsx)(_.Z, {
    channel: M
  }, "notifications")), Q.push((0, l.jsx)(x.ZP.Icon, {
    icon: a.Dio,
    tooltip: T.intl.string(T.t.cpT0Cg),
    onClick: () => v.Z.closeChannelSidebar(R)
  }, "close")), !(0, d.aC)(M) || W && G) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.Z, {
      channel: M,
      draftType: O.d.ChannelMessage
    }), (0, l.jsx)(x.ZP, {
      toolbar: Q,
      "aria-label": T.intl.string(T.t.BIYAqa),
      children: (0, C.ud)({
        channel: M,
        channelName: z ? X : q,
        guild: H,
        inSidebar: true,
        handleContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await n.e("24783").then(n.bind(n, 439635));
            return t => (0, l.jsx)(e, B(k({}, t), {
              channel: M,
              guild: H
            }))
          })
        },
        handleClick: () => {
          let e = I.Z.getMessages(M.id);
          if (L) {
            (0, j.uL)(S.Z5c.CHANNEL(M.guild_id, M.id)), (0, p.C3)(M.guild_id, null);
            return
          }(0, j.XU)(M.guild_id, M.id, e.jumpTargetId)
        }
      })
    }), (0, l.jsx)("div", {
      className: A.chat,
      children: (0, l.jsx)(E.Z, {
        channel: M,
        guild: H,
        chatInputType: h.Ie.SIDEBAR
      }, t)
    })]
  }) : (0, l.jsx)(c.Z, {
    guild: H,
    channelId: M.id
  })
}