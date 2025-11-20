/** Chunk was on 58121 **/
/** chunk id: 213557, original params: e,n,t (module,exports,require) **/
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
  Chunk340501 = require("./340501.jsx"),
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

function A(e) {
  let {
    channelId: n,
    baseChannelId: A,
    channelViewSource: k = "Split View",
    isResourceChannelView: D
  } = e, L = (0, i.e7)([O.Z], () => O.Z.getChannel(n)), R = (0, i.e7)([N.Z], () => N.Z.getGuild(null == L ? true : L.getGuildId())), H = (0, w.ZP)(L), M = (0, i.e7)([C.Z], () => (null == R ? true : R.id) != null && C.Z.isLurking(R.id), [R]), U = (0, f.Z)(n), G = (0, i.e7)([m.Z], () => {
    var e;
    return null == (e = m.Z.getResourceForChannel(null == R ? true : R.id, n)) ? true : e.title
  }), F = (0, c.$5)(L), W = l.useRef(false);
  if (l.useEffect(() => {
      null == L || W.current || (W.current = true, (0, d.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, d.$H)(L.id)), {
        channel_view: k
      })), (0, u.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: L.id
      }))
    }, [L, k]), null == L || null == R) return null;
  let q = [];
  return (M || q.push((0, r.jsx)(_.Z, {
    channel: L
  }, "notifications")), q.push((0, r.jsx)(g.ZP.Icon, {
    icon: a.Dio,
    tooltip: S.intl.string(S.t.cpT0Cq),
    onClick: () => j.Z.closeChannelSidebar(A)
  }, "close")), F) ? (0, r.jsx)(v.Z, {
    guild: R,
    channelId: L.id
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      channel: L,
      draftType: y.d.ChannelMessage
    }), (0, r.jsx)(g.ZP, {
      toolbar: q,
      "aria-label": S.intl.string(S.t.BIYAqa),
      children: (0, x.ud)({
        channel: L,
        channelName: U ? G : H,
        guild: R,
        inSidebar: true,
        handleContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([t.e("24783"), t.e("41815")]).then(t.bind(t, 439635));
            return n => (0, r.jsx)(e, B(T({}, n), {
              channel: L,
              guild: R
            }))
          })
        },
        handleClick: () => {
          let e = I.Z.getMessages(L.id);
          if (D) {
            (0, b.uL)(P.Z5c.CHANNEL(L.guild_id, L.id)), (0, h.C3)(L.guild_id, null);
            return
          }(0, b.XU)(L.guild_id, L.id, e.jumpTargetId)
        }
      })
    }), (0, r.jsx)("div", {
      className: E.chat,
      children: (0, r.jsx)(Z.Z, {
        channel: L,
        guild: R,
        chatInputType: p.Ie.SIDEBAR
      }, n)
    })]
  })
}