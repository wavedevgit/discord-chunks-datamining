/** Chunk was on 58121 **/
/** chunk id: 213557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
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
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk933557 = require("./933557.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk952713 = require("./952713.js");

function T(e) {
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

function k(e, t) {
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

function B(e) {
  let {
    channelId: t,
    baseChannelId: B,
    channelViewSource: A = "Split View",
    isResourceChannelView: R
  } = e, D = (0, i.e7)([y.Z], () => y.Z.getChannel(t)), L = (0, i.e7)([N.Z], () => N.Z.getGuild(null == D ? true : D.getGuildId())), M = (0, I.ZP)(D), H = (0, i.e7)([b.Z], () => (null == L ? true : L.id) != null && b.Z.isLurking(L.id), [L]), U = (0, g.Z)(t), G = (0, i.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getResourceForChannel(null == L ? true : L.id, t)) ? true : e.title
  }), W = (0, d.$5)(D), q = r.useRef(false);
  if (r.useEffect(() => {
      null == D || q.current || (q.current = true, (0, u.yw)(P.rMx.CHANNEL_OPENED, k(T({}, (0, u.$H)(D.id)), {
        channel_view: A
      })), (0, m.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: D.id
      }))
    }, [D, A]), null == D || null == L) return null;
  let F = [];
  return (H || F.push((0, l.jsx)(_.Z, {
    channel: D
  }, "notifications")), F.push((0, l.jsx)(x.ZP.Icon, {
    icon: a.Dio,
    tooltip: E.intl.string(E.t.cpT0Cg),
    onClick: () => v.Z.closeChannelSidebar(B)
  }, "close")), W) ? (0, l.jsx)(c.Z, {
    guild: L,
    channelId: D.id
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.Z, {
      channel: D,
      draftType: O.d.ChannelMessage
    }), (0, l.jsx)(x.ZP, {
      toolbar: F,
      "aria-label": E.intl.string(E.t.BIYAqa),
      children: (0, C.ud)({
        channel: D,
        channelName: U ? G : M,
        guild: L,
        inSidebar: true,
        handleContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("24783"), n.e("63384")]).then(n.bind(n, 439635));
            return t => (0, l.jsx)(e, k(T({}, t), {
              channel: D,
              guild: L
            }))
          })
        },
        handleClick: () => {
          let e = Z.Z.getMessages(D.id);
          if (R) {
            (0, j.uL)(P.Z5c.CHANNEL(D.guild_id, D.id)), (0, p.C3)(D.guild_id, null);
            return
          }(0, j.XU)(D.guild_id, D.id, e.jumpTargetId)
        }
      })
    }), (0, l.jsx)("div", {
      className: S.chat,
      children: (0, l.jsx)(w.Z, {
        channel: D,
        guild: L,
        chatInputType: h.Ie.SIDEBAR
      }, t)
    })]
  })
}