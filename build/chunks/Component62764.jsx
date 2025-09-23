/** Chunk was on 80037 **/
/** chunk id: 62764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk593472 = require("./593472.js"),
  Chunk393238 = require("./393238.js"),
  Chunk330726 = require("./330726.js"),
  Chunk48929 = require("./48929.js"),
  Chunk333535 = require("./333535.jsx"),
  Chunk566006 = require("./566006.js"),
  Chunk443877 = require("./443877.js"),
  Chunk60174 = require("./60174.jsx"),
  Chunk216337 = require("./216337.jsx"),
  Chunk920888 = require("./920888.jsx"),
  Chunk287151 = require("./287151.jsx"),
  Chunk501517 = require("./501517.js"),
  Chunk982168 = require("./982168.js"),
  Chunk216572 = require("./216572.js"),
  Chunk5101 = require("./5101.jsx"),
  Chunk817608 = require("./817608.jsx"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk592125 = require("./592125.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk456269 = require("./456269.js"),
  Chunk109590 = require("./109590.js"),
  Chunk228392 = require("./228392.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk304726 = require("./304726.js"),
  Chunk243777 = require("./243777.js"),
  Chunk487111 = require("./487111.js"),
  Chunk332103 = require("./332103.js");

function V(e) {
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

function F(e, t) {
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

function H(e) {
  let {
    channel: t
  } = e, l = t.isArchivedThread(), a = (0, O.P0)(t), [o, u] = i.useState(false), d = () => {
    u(true), x.Z.resolveFlag(t.id).then(() => {
      u(false)
    })
  };
  return a ? (0, r.jsx)(c.zxk, {
    size: "sm",
    variant: "secondary",
    text: l ? k.intl.string(L.default["2Y4vkp"]) : k.intl.string(L.default.YIbR4u),
    onClick: () => {
      true === s.K.get(E.F) ? d() : (0, c.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 5101));
        return t => {
          let {
            transitionState: n,
            onClose: i
          } = t;
          return (0, r.jsx)(e, {
            transitionState: n,
            onClose: i,
            handleResolveFlag: d
          })
        }
      })
    },
    loading: o,
    icon: c.dz2,
    disabled: l
  }) : null
}

function G(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: l = false,
    parentChannelId: s
  } = e, {
    ref: x,
    width: O
  } = (0, p.ZP)(), [E, L] = i.useState(3), [G, z] = i.useState(!n), [W, q] = (0, h.Z)(false, 2e3), Y = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t), [t]), {
    firstMessage: K
  } = (0, w.cl)(Y), X = (0, o.e7)([P.Z], () => P.Z.hasJoined(t)), {
    disableReactionUpdates: J,
    disableReactionCreates: Q,
    isLurking: $,
    isGuest: ee,
    isPendingMember: et
  } = (0, b.Z)(Y), en = (0, j.nw)(Y), er = (0, o.e7)([Z.Z], () => Z.Z.getChannel(s)), ei = (0, A.Bs)(er), el = (0, o.e7)([f.Z], () => f.Z.shouldDisplayPrompt(t) && true === n, [t, n]), ea = i.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      z((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  i.useLayoutEffect(() => {
    let e = x.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(ea, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [eo, es] = i.useState(true);
  if (i.useEffect(() => {
      null != O && (L(Math.floor((O - 280) / 58)), es(false))
    }, [O]), null == Y || null == K) return null;
  let ec = K.reactions.length > 0,
    eu = () => {
      X ? I.Z.leaveThread(Y, "Forum Toolbar") : I.Z.joinThread(Y, "Forum Toolbar")
    },
    ed = () => {
      (0, M.B)({
        postId: Y.id,
        location: {
          section: R.jXE.CHANNEL_HEADER
        }
      }), (0, N.JG)((0, T.EO)(Y, er), () => q(true))
    },
    ep = () => {
      u.Z.jumpToMessage({
        channelId: Y.id,
        messageId: Y.id,
        flash: true,
        jumpType: d.SR.INSTANT
      })
    },
    eh = X ? c.dz2 : c.Dkj;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(D.container, {
        [D.header]: G
      }),
      ref: x,
      children: [en ? (0, r.jsx)("div", {
        className: D.reportedMessageActions,
        children: (0, r.jsx)(S.Z, {
          message: K,
          channel: Y
        })
      }) : (0, r.jsxs)("div", {
        className: a()(D.reactButtons, {
          [D.loading]: eo
        }),
        children: [!ec && !Q && null != ei && (0, r.jsx)("div", {
          className: U.reactions,
          children: (0, r.jsx)(v.le, {
            message: K,
            readOnly: false,
            useChatFontScaling: false,
            isLurking: $,
            isGuest: ee,
            isPendingMember: et,
            emoji: ei,
            type: g.O.NORMAL,
            hideCount: true,
            count: 0,
            me: false,
            burst_count: 0,
            me_burst: false,
            emojiSize: "reaction"
          })
        }), (0, r.jsx)(_.Z, {
          message: K,
          channel: Y,
          disableReactionCreates: true,
          disableReactionUpdates: J,
          isLurking: $,
          isGuest: ee,
          isPendingMember: et,
          maxReactions: E,
          className: D.reactions,
          useChatFontScaling: false,
          isForumToolbar: true,
          forceHideReactionCreates: true
        }), !Q && (0, r.jsx)(y.X, {
          type: g.O.NORMAL,
          message: K,
          channel: Y,
          useChatFontScaling: false,
          className: a()(B.secondary, D.addReactButton, {
            [D.hasNoReactions]: !ec
          }),
          isForumToolbar: true,
          children: !ec && k.intl.string(k.t.xpOyTE)
        })]
      }), (0, r.jsxs)("div", {
        className: D.buttons,
        children: [en ? (0, r.jsx)(H, {
          channel: Y
        }) : (0, r.jsx)(c.ua7, {
          text: k.intl.string(k.t.F7oeDg),
          children: e => (0, r.jsx)(c.zxk, F(V({}, e), {
            icon: eh,
            size: "sm",
            variant: "secondary",
            text: X ? k.intl.string(k.t["7OkUzs"]) : k.intl.string(k.t["3aOv+v"]),
            onClick: eu
          }))
        }), (0, r.jsx)(c.ua7, {
          text: k.intl.string(k.t.WqhZsr),
          children: e => W ? (0, r.jsx)(c.zxk, F(V({}, e), {
            icon: c.dz2,
            size: "sm",
            variant: "secondary",
            onClick: ed,
            text: k.intl.string(k.t["t5VZ8/"])
          })) : (0, r.jsx)(c.hU, F(V({}, e), {
            icon: c.xPt,
            size: "sm",
            variant: "secondary",
            onClick: ed,
            "aria-label": k.intl.string(k.t.WqhZsr)
          }))
        }), !n && (0, r.jsx)(c.ua7, {
          text: k.intl.string(k.t.nFP4oa),
          children: e => (0, r.jsx)(c.hU, F(V({}, e), {
            icon: c.Za2,
            size: "sm",
            variant: "secondary",
            onClick: ep,
            "aria-label": k.intl.string(k.t.nFP4oa)
          }))
        })]
      })]
    }), el && (0, r.jsx)(m.Z, {
      threadId: t
    }), (0, r.jsx)(C.Z, {
      channel: Y,
      isLastItem: l
    })]
  })
}