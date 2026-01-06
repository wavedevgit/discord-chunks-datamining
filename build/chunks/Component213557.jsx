/** Chunk was on 58121 **/
/** chunk id: 213557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk561472 = require("./561472.jsx"),
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
  Chunk271172 = require("./271172.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk933557 = require("./933557.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk495182 = require("./495182.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    channelId: t,
    baseChannelId: A,
    channelViewSource: D = "Split View",
    isResourceChannelView: R
  } = e, k = (0, l.e7)([y.Z], () => y.Z.getChannel(t)), L = (0, l.e7)([_.Z], () => _.Z.getGuild(null == k ? true : k.getGuildId())), H = (0, w.ZP)(k), M = (0, l.e7)([C.Z], () => (null == L ? true : L.id) != null && C.Z.isLurking(L.id), [L]), U = (0, h.Z)(t), G = (0, l.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getResourceForChannel(null == L ? true : L.id, t)) ? true : e.title
  }), W = (0, d.$5)(k), F = r.useRef(false);
  if (r.useEffect(() => {
      null == k || F.current || (F.current = true, (0, s.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, s.$H)(k.id)), {
        channel_view: D
      })), (0, u.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: k.id
      }))
    }, [k, D]), null == k || null == L) return null;
  let q = [];
  return (M || q.push((0, a.jsx)(g.Z, {
    channel: k
  }, "notifications")), q.push((0, a.jsx)(m.ZP.Icon, {
    icon: i.Dio,
    tooltip: S.intl.string(S.t.cpT0Cq),
    onClick: () => v.Z.closeChannelSidebar(A)
  }, "close")), W) ? (0, a.jsx)(O.Z, {
    guild: L,
    channelId: k.id
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Z, {
      channel: k,
      draftType: N.d.ChannelMessage
    }), (0, a.jsx)(m.ZP, {
      toolbar: q,
      "aria-label": S.intl.string(S.t.BIYAqa),
      children: (0, x.ud)({
        channel: k,
        channelName: U ? G : H,
        guild: L,
        inSidebar: true,
        handleContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("24783"), n.e("45917")]).then(n.bind(n, 439635));
            return t => (0, a.jsx)(e, B(T({}, t), {
              channel: k,
              guild: L
            }))
          })
        },
        handleClick: () => {
          let e = Z.Z.getMessages(k.id);
          if (R) {
            (0, j.uL)(P.Z5c.CHANNEL(k.guild_id, k.id)), (0, p.C3)(k.guild_id, null);
            return
          }(0, j.XU)(k.guild_id, k.id, e.jumpTargetId)
        }
      })
    }), (0, a.jsx)("div", {
      className: E.chat,
      children: (0, a.jsx)(I.Z, {
        channel: k,
        guild: L,
        chatInputType: b.Ie.SIDEBAR
      }, t)
    })]
  })
}