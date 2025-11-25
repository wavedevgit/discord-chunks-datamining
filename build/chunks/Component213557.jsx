/** Chunk was on 58121 **/
/** chunk id: 213557, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => D
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
  Chunk10832 = require("./10832.js");

function T(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function B(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function D(e) {
  let {
    channelId: n,
    baseChannelId: D,
    channelViewSource: k = "Split View",
    isResourceChannelView: A
  } = e, R = (0, i.e7)([O.Z], () => O.Z.getChannel(n)), L = (0, i.e7)([N.Z], () => N.Z.getGuild(null == R ? true : R.getGuildId())), H = (0, w.ZP)(R), M = (0, i.e7)([C.Z], () => (null == L ? true : L.id) != null && C.Z.isLurking(L.id), [L]), U = (0, f.Z)(n), G = (0, i.e7)([m.Z], () => {
    var e;
    return null == (e = m.Z.getResourceForChannel(null == L ? true : L.id, n)) ? true : e.title
  }), W = (0, c.$5)(R), F = l.useRef(false);
  if (l.useEffect(() => {
      null == R || F.current || (F.current = true, (0, d.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, d.$H)(R.id)), {
        channel_view: k
      })), (0, u.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: R.id
      }))
    }, [R, k]), null == R || null == L) return null;
  let q = [];
  return (M || q.push((0, r.jsx)(_.Z, {
    channel: R
  }, "notifications")), q.push((0, r.jsx)(g.ZP.Icon, {
    icon: a.Dio,
    tooltip: S.intl.string(S.t.cpT0Cq),
    onClick: () => j.Z.closeChannelSidebar(D)
  }, "close")), W) ? (0, r.jsx)(v.Z, {
    guild: L,
    channelId: R.id
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      channel: R,
      draftType: y.d.ChannelMessage
    }), (0, r.jsx)(g.ZP, {
      toolbar: q,
      "aria-label": S.intl.string(S.t.BIYAqa),
      children: (0, x.ud)({
        channel: R,
        channelName: U ? G : H,
        guild: L,
        inSidebar: true,
        handleContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([t.e("24783"), t.e("41815")]).then(t.bind(t, 439635));
            return n => (0, r.jsx)(e, B(T({}, n), {
              channel: R,
              guild: L
            }))
          })
        },
        handleClick: () => {
          let e = I.Z.getMessages(R.id);
          if (A) {
            (0, b.uL)(P.Z5c.CHANNEL(R.guild_id, R.id)), (0, h.C3)(R.guild_id, null);
            return
          }(0, b.XU)(R.guild_id, R.id, e.jumpTargetId)
        }
      })
    }), (0, r.jsx)("div", {
      className: E.chat,
      children: (0, r.jsx)(Z.Z, {
        channel: R,
        guild: L,
        chatInputType: p.Ie.SIDEBAR
      }, n)
    })]
  })
}