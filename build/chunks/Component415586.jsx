/** Chunk was on 17534 **/
/** chunk id: 415586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk442433 = require("./442433.js"),
  Chunk738876 = require("./738876.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk332456 = require("./332456.js"),
  Chunk237774 = require("./237774.js"),
  Chunk47167 = require("./47167.js"),
  Chunk698718 = require("./698718.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk353428 = require("./353428.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk71393 = require("./71393.js"),
  Chunk977997 = require("./977997.js"),
  Chunk823471 = require("./823471.jsx"),
  Chunk37411 = require("./37411.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk266920 = require("./266920.js");

function N(e) {
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

function T(e, t) {
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

function P(e) {
  var t;
  let i, {
      channelId: P,
      baseChannelId: w,
      channelViewSource: R = "Split View"
    } = e,
    D = (0, a.bG)([O.A], () => O.A.getChannel(P)),
    L = (0, a.bG)([j.A], () => j.A.getGuild(null == D ? true : D.getGuildId())),
    M = (0, g.Ay)(D);
  t = D, i = (0, a.bG)([x.A], () => null != t && !s().isEmpty(x.A.getVoiceStatesForChannel(t.id))), l.useEffect(() => {
    i && null != t && (o.h.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: t.parent_id
    }), (0, y.N9)(t, {
      source: E.H9.VOICE_AUTO_OPEN
    }))
  }, [i, t]);
  let G = l.useRef(false);
  if (l.useEffect(() => {
      if (null == D || G.current) return;
      G.current = true;
      let e = (0, h.C)(O.A.getChannel(D.id), true);
      (0, d.zV)(C.HAw.CHANNEL_OPENED, T(N({}, e, (0, d.qL)(D.id)), {
        channel_view: R
      })), (0, p.k)(C.HAw.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: D.id
      })
    }, [D, R]), null == D || null == L) return null;
  let k = (0, r.jsx)(v.A, {
    channel: D,
    baseChannelId: w
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.A, {
      channel: D,
      draftType: _.C.ChannelMessage
    }), (0, r.jsx)(b.Ay, {
      toolbar: k,
      "aria-label": S.intl.string(S.t.Pwe8tN),
      children: (0, A.zF)({
        channel: D,
        channelName: M,
        guild: L,
        inSidebar: true,
        handleContextMenu: function(e) {
          (0, c.L3)(e, async () => {
            let {
              default: e
            } = await n.e("33").then(n.bind(n, 44536));
            return t => (0, r.jsx)(e, T(N({}, t), {
              channel: D
            }))
          })
        },
        handleClick: function() {
          null != D && (0, y.iN)(D.id)
        }
      })
    }), (0, r.jsx)("div", {
      className: I.T,
      children: (0, r.jsx)(f.A, {
        channel: D,
        guild: L,
        chatInputType: m.oU.SIDEBAR
      }, P)
    })]
  })
}