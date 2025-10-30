/** Chunk was on 58121 **/
/** chunk id: 213557, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk952713 = require("./952713.js");

function T(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function B(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
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
    channelViewSource: R = "Split View",
    isResourceChannelView: k
  } = e, D = (0, i.e7)([y.Z], () => y.Z.getChannel(n)), L = (0, i.e7)([N.Z], () => N.Z.getGuild(null == D ? true : D.getGuildId())), M = (0, I.ZP)(D), H = (0, i.e7)([C.Z], () => (null == L ? true : L.id) != null && C.Z.isLurking(L.id), [L]), U = (0, f.Z)(n), W = (0, i.e7)([p.Z], () => {
    var e;
    return null == (e = p.Z.getResourceForChannel(null == L ? true : L.id, n)) ? true : e.title
  }), G = (0, c.$5)(D), F = r.useRef(false);
  if (r.useEffect(() => {
      null == D || F.current || (F.current = true, (0, d.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, d.$H)(D.id)), {
        channel_view: R
      })), (0, u.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: D.id
      }))
    }, [D, R]), null == D || null == L) return null;
  let q = [];
  return (H || q.push((0, l.jsx)(x.Z, {
    channel: D
  }, "notifications")), q.push((0, l.jsx)(g.ZP.Icon, {
    icon: a.Dio,
    tooltip: E.intl.string(E.t.cpT0Cq),
    onClick: () => j.Z.closeChannelSidebar(A)
  }, "close")), G) ? (0, l.jsx)(v.Z, {
    guild: L,
    channelId: D.id
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.Z, {
      channel: D,
      draftType: O.d.ChannelMessage
    }), (0, l.jsx)(g.ZP, {
      toolbar: q,
      "aria-label": E.intl.string(E.t.BIYAqa),
      children: (0, _.ud)({
        channel: D,
        channelName: U ? W : M,
        guild: L,
        inSidebar: true,
        handleContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([t.e("24783"), t.e("63384")]).then(t.bind(t, 439635));
            return n => (0, l.jsx)(e, B(T({}, n), {
              channel: D,
              guild: L
            }))
          })
        },
        handleClick: () => {
          let e = Z.Z.getMessages(D.id);
          if (k) {
            (0, b.uL)(P.Z5c.CHANNEL(D.guild_id, D.id)), (0, h.C3)(D.guild_id, null);
            return
          }(0, b.XU)(D.guild_id, D.id, e.jumpTargetId)
        }
      })
    }), (0, l.jsx)("div", {
      className: S.chat,
      children: (0, l.jsx)(w.Z, {
        channel: D,
        guild: L,
        chatInputType: m.Ie.SIDEBAR
      }, n)
    })]
  })
}