/** Chunk was on 50118 **/
/** chunk id: 62764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk764295 = require("./764295.js"),
  Chunk319720 = require("./319720.js"),
  Chunk127947 = require("./127947.js"),
  Chunk577650 = require("./577650.js");

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let {
    channel: t
  } = e, l = t.isArchivedThread(), a = (0, j.P0)(t), [o, c] = r.useState(false), d = () => {
    c(true), O.Z.resolveFlag(t.id).then(() => {
      c(false)
    })
  };
  return a ? (0, i.jsx)(u.zxk, {
    size: "sm",
    variant: "secondary",
    text: l ? L.intl.string(D.default["2Y4vkp"]) : L.intl.string(D.default.YIbR4u),
    onClick: () => {
      true === s.K.get(S.F) ? d() : (0, u.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 5101));
        return t => {
          let {
            transitionState: n,
            onClose: r
          } = t;
          return (0, i.jsx)(e, {
            transitionState: n,
            onClose: r,
            handleResolveFlag: d
          })
        }
      })
    },
    loading: o,
    icon: u.dz2,
    disabled: l
  }) : null
}

function z(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: l = false,
    parentChannelId: s
  } = e, {
    ref: O,
    width: j
  } = (0, h.ZP)(), [S, D] = r.useState(3), [z, W] = r.useState(!n), [q, Y] = (0, f.Z)(false, 2e3), K = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]), {
    firstMessage: X
  } = (0, M.cl)(K), J = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)), {
    disableReactionUpdates: Q,
    disableReactionCreates: $,
    isLurking: ee,
    isGuest: et,
    isPendingMember: en
  } = (0, C.Z)(K), ei = (0, E.nw)(K), er = (0, o.e7)([T.Z], () => T.Z.getChannel(s)), el = (0, w.Bs)(er), ea = (0, o.e7)([m.Z], () => m.Z.shouldDisplayPrompt(t) && true === n, [t, n]), eo = r.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      W((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  r.useLayoutEffect(() => {
    let e = O.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(eo, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [es, ec] = r.useState(true);
  if (r.useEffect(() => {
      null != j && (D(Math.floor((j - 280) / 58)), ec(false))
    }, [j]), null == K || null == X) return null;
  let eu = X.reactions.length > 0,
    ed = () => {
      (0, R.B)({
        postId: K.id,
        location: {
          section: k.jXE.CHANNEL_HEADER
        }
      }), (0, A.JG)((0, N.EO)(K, er), () => Y(true))
    },
    ep = J ? u.dz2 : u.Dkj;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: a()(U.container, {
        [U.header]: z
      }),
      ref: O,
      children: [ei ? (0, i.jsx)("div", {
        className: U.reportedMessageActions,
        children: (0, i.jsx)(P.Z, {
          message: X,
          channel: K
        })
      }) : (0, i.jsxs)("div", {
        className: a()(U.reactButtons, {
          [U.loading]: es
        }),
        children: [!eu && !$ && null != el && (0, i.jsx)("div", {
          className: B.reactions,
          children: (0, i.jsx)(x.le, {
            message: X,
            readOnly: false,
            useChatFontScaling: false,
            isLurking: ee,
            isGuest: et,
            isPendingMember: en,
            emoji: el,
            type: b.O.NORMAL,
            hideCount: true,
            count: 0,
            me: false,
            burst_count: 0,
            me_burst: false,
            emojiSize: "reaction"
          })
        }), (0, i.jsx)(v.Z, {
          message: X,
          channel: K,
          disableReactionCreates: true,
          disableReactionUpdates: Q,
          isLurking: ee,
          isGuest: et,
          isPendingMember: en,
          maxReactions: S,
          className: U.reactions,
          useChatFontScaling: false,
          isForumToolbar: true,
          forceHideReactionCreates: true
        }), !$ && (0, i.jsx)(y.X, {
          type: b.O.NORMAL,
          message: X,
          channel: K,
          useChatFontScaling: false,
          className: a()(H.secondary, U.addReactButton, {
            [U.hasNoReactions]: !eu
          }),
          isForumToolbar: true,
          children: !eu && L.intl.string(L.t.xpOyTE)
        })]
      }), (0, i.jsxs)("div", {
        className: U.buttons,
        children: [ei ? (0, i.jsx)(G, {
          channel: K
        }) : (0, i.jsx)(c.u, {
          text: L.intl.string(L.t.F7oeDg),
          children: (0, i.jsx)(u.zxk, {
            icon: ep,
            size: "sm",
            variant: "secondary",
            text: J ? L.intl.string(L.t["7OkUzs"]) : L.intl.string(L.t["3aOv+v"]),
            onClick: () => {
              J ? Z.Z.leaveThread(K, "Forum Toolbar") : Z.Z.joinThread(K, "Forum Toolbar")
            }
          })
        }), (0, i.jsx)(u.ua7, {
          text: L.intl.string(L.t.WqhZsr),
          children: e => q ? (0, i.jsx)(u.zxk, F(V({}, e), {
            icon: u.dz2,
            size: "sm",
            variant: "secondary",
            onClick: ed,
            text: L.intl.string(L.t["t5VZ8/"])
          })) : (0, i.jsx)(u.hU, F(V({}, e), {
            icon: u.xPt,
            size: "sm",
            variant: "secondary",
            onClick: ed,
            "aria-label": L.intl.string(L.t.WqhZsr)
          }))
        }), !n && (0, i.jsx)(c.u, {
          text: L.intl.string(L.t.nFP4oa),
          children: (0, i.jsx)(u.hU, {
            icon: u.Za2,
            size: "sm",
            variant: "secondary",
            onClick: () => {
              d.Z.jumpToMessage({
                channelId: K.id,
                messageId: K.id,
                flash: true,
                jumpType: p.SR.INSTANT
              })
            },
            "aria-label": L.intl.string(L.t.nFP4oa)
          })
        })]
      })]
    }), ea && (0, i.jsx)(g.Z, {
      threadId: t
    }), (0, i.jsx)(_.Z, {
      channel: K,
      isLastItem: l
    })]
  })
}