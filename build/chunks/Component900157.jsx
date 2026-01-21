/** Chunk was on 82124 **/
/** chunk id: 900157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk239091 = require("./239091.js"),
  Chunk561472 = require("./561472.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk731429 = require("./731429.js"),
  Chunk188471 = require("./188471.js"),
  Chunk933557 = require("./933557.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk910611 = require("./910611.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979651 = require("./979651.js"),
  Chunk664342 = require("./664342.jsx"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk19055 = require("./19055.js");

function Z(e) {
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
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    channelId: t,
    baseChannelId: l,
    channelViewSource: T = "Split View"
  } = e, A = (0, o.e7)([O.Z], () => O.Z.getChannel(t)), w = (0, o.e7)([x.Z], () => x.Z.getGuild(null == A ? true : A.getGuildId())), R = (0, h.ZP)(A);
  var D = A;
  let M = (0, o.e7)([C.Z], () => null != D && !a().isEmpty(C.Z.getVoiceStatesForChannel(D.id)));
  i.useEffect(() => {
    M && null != D && (s.Z.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: D.parent_id
    }), (0, v.ad)(D, {
      source: S.on.VOICE_AUTO_OPEN
    }))
  }, [M, D]);
  let k = i.useRef(false);
  if (i.useEffect(() => {
      if (null == A || k.current) return;
      k.current = true;
      let e = (0, p.K)(O.Z.getChannel(A.id), true);
      (0, d.yw)(_.rMx.CHANNEL_OPENED, N(Z({}, e, (0, d.$H)(A.id)), {
        channel_view: T
      })), (0, f.a)(_.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: A.id
      })
    }, [A, T]), null == A || null == w) return null;
  let L = (0, r.jsx)(E.Z, {
    channel: A,
    baseChannelId: l
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      channel: A,
      draftType: j.d.ChannelMessage
    }), (0, r.jsx)(b.ZP, {
      toolbar: L,
      "aria-label": I.intl.string(I.t.Pwe8tN),
      children: (0, y.ud)({
        channel: A,
        channelName: R,
        guild: w,
        inSidebar: true,
        handleContextMenu: function(e) {
          (0, c.jW)(e, async () => {
            let {
              default: e
            } = await n.e("40157").then(n.bind(n, 422200));
            return t => (0, r.jsx)(e, N(Z({}, t), {
              channel: A
            }))
          })
        },
        handleClick: function() {
          null != A && (0, v.Kh)(A.id)
        }
      })
    }), (0, r.jsx)("div", {
      className: P.chat,
      children: (0, r.jsx)(g.Z, {
        channel: A,
        guild: w,
        chatInputType: m.Ie.SIDEBAR
      }, t)
    })]
  })
}