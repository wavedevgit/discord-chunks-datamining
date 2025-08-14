/** Chunk was on web.js **/
/** chunk id: 62764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk764295 = require("./764295.js"),
  Chunk319720 = require("./319720.js"),
  Chunk214785 = require("./214785.js"),
  Chunk127947 = require("./127947.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = 2e3,
  W = 3,
  K = 280,
  z = 58;

function q(e) {
  let {
    channel: t
  } = e, o = t.isArchivedThread(), a = (0, I.P0)(t), [s, u] = i.useState(false), d = () => {
    u(true), v.Z.resolveFlag(t.id).then(() => {
      u(false)
    })
  };
  if (!a) return null;
  let f = () => {
    true === l.K.get(S.F) ? d() : (0, c.ZDy)(async () => {
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
  };
  return (0, r.jsx)(c.zxk, {
    size: "sm",
    variant: "secondary",
    text: o ? k.intl.string(j.default["2Y4vkp"]) : k.intl.string(j.default.YIbR4u),
    onClick: f,
    loading: s,
    icon: c.dz2,
    disabled: o
  })
}

function X(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: o = false,
    parentChannelId: l
  } = e, {
    ref: v,
    width: I
  } = (0, f.ZP)(), [S, j] = i.useState(W), [Z, V] = i.useState(!n), [X, Q] = (0, _.Z)(false, Y), J = (0, s.e7)([R.Z], () => R.Z.getChannel(t), [t]), {
    firstMessage: $
  } = (0, L.cl)(J), ee = (0, s.e7)([N.Z], () => N.Z.hasJoined(t)), {
    disableReactionUpdates: et,
    disableReactionCreates: en,
    isLurking: er,
    isGuest: ei,
    isPendingMember: eo
  } = (0, g.Z)(J), ea = (0, T.nw)(J), es = (0, s.e7)([R.Z], () => R.Z.getChannel(l)), el = (0, D.Bs)(es), ec = (0, s.e7)([p.Z], () => p.Z.shouldDisplayPrompt(t) && true === n, [t, n]), eu = i.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      V((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  i.useLayoutEffect(() => {
    let e = v.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(eu, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [ed, ef] = i.useState(true);
  if (i.useEffect(() => {
      null != I && (j(Math.floor((I - K) / z)), ef(false))
    }, [I]), null == J || null == $) return null;
  let e_ = $.reactions.length > 0,
    ep = () => {
      ee ? C.Z.leaveThread(J, "Forum Toolbar") : C.Z.joinThread(J, "Forum Toolbar")
    },
    eh = () => {
      (0, x.B)({
        postId: J.id,
        location: {
          section: M.jXE.CHANNEL_HEADER
        }
      }), (0, w.JG)((0, P.EO)(J, es), () => Q(true))
    },
    em = () => {
      u.Z.jumpToMessage({
        channelId: J.id,
        messageId: J.id,
        flash: true,
        jumpType: d.SR.INSTANT
      })
    },
    eg = ee ? c.dz2 : c.Dkj,
    eE = !e_ && !en;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(U.container, {
        [U.header]: Z
      }),
      ref: v,
      children: [ea ? (0, r.jsx)("div", {
        className: U.reportedMessageActions,
        children: (0, r.jsx)(A.Z, {
          message: $,
          channel: J
        })
      }) : (0, r.jsxs)("div", {
        className: a()(U.reactButtons, {
          [U.loading]: ed
        }),
        children: [eE && null != el && (0, r.jsx)("div", {
          className: B.reactions,
          children: (0, r.jsx)(O.le, {
            message: $,
            readOnly: false,
            useChatFontScaling: false,
            isLurking: er,
            isGuest: ei,
            isPendingMember: eo,
            emoji: el,
            type: m.O.NORMAL,
            hideCount: true,
            count: 0,
            me: false,
            burst_count: 0,
            me_burst: false,
            emojiSize: "reaction"
          })
        }), (0, r.jsx)(y.Z, {
          message: $,
          channel: J,
          disableReactionCreates: true,
          disableReactionUpdates: et,
          isLurking: er,
          isGuest: ei,
          isPendingMember: eo,
          maxReactions: S,
          className: U.reactions,
          useChatFontScaling: false,
          isForumToolbar: true,
          forceHideReactionCreates: true
        }), !en && (0, r.jsx)(E.X, {
          type: m.O.NORMAL,
          message: $,
          channel: J,
          useChatFontScaling: false,
          className: a()(G.secondary, U.addReactButton, {
            [U.hasNoReactions]: !e_
          }),
          isForumToolbar: true,
          children: !e_ && k.intl.string(k.t.xpOyTE)
        })]
      }), (0, r.jsxs)("div", {
        className: U.buttons,
        children: [ea ? (0, r.jsx)(q, {
          channel: J
        }) : (0, r.jsx)(c.ua7, {
          text: k.intl.string(k.t.F7oeDg),
          children: e => (0, r.jsx)(c.zxk, H(F({}, e), {
            icon: eg,
            size: "sm",
            variant: "secondary",
            text: ee ? k.intl.string(k.t["7OkUzs"]) : k.intl.string(k.t["3aOv+v"]),
            onClick: ep
          }))
        }), (0, r.jsx)(c.ua7, {
          text: k.intl.string(k.t.WqhZsr),
          children: e => X ? (0, r.jsx)(c.zxk, H(F({}, e), {
            icon: c.dz2,
            size: "sm",
            variant: "secondary",
            onClick: eh,
            text: k.intl.string(k.t["t5VZ8/"])
          })) : (0, r.jsx)(c.hU, H(F({}, e), {
            icon: c.xPt,
            size: "sm",
            variant: "secondary",
            onClick: eh,
            "aria-label": k.intl.string(k.t.WqhZsr)
          }))
        }), !n && (0, r.jsx)(c.ua7, {
          text: k.intl.string(k.t.nFP4oa),
          children: e => (0, r.jsx)(c.hU, H(F({}, e), {
            icon: c.Za2,
            size: "sm",
            variant: "secondary",
            onClick: em,
            "aria-label": k.intl.string(k.t.nFP4oa)
          }))
        })]
      })]
    }), ec && (0, r.jsx)(h.Z, {
      threadId: t
    }), (0, r.jsx)(b.Z, {
      channel: J,
      isLastItem: o
    })]
  })
}