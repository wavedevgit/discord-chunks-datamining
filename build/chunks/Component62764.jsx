/** Chunk was on web.js **/
/** chunk id: 62764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk130883 = require("./130883.js"),
  Chunk184844 = require("./184844.js"),
  Chunk92254 = require("./92254.js");

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
let Y = 16,
  W = 2e3,
  K = 3,
  z = 280,
  q = 58;

function X(e) {
  let {
    channel: t
  } = e, o = t.isArchivedThread(), a = (0, T.P0)(t), [s, d] = i.useState(false), f = () => {
    d(true), I.Z.resolveFlag(t.id).then(() => {
      d(false)
    })
  };
  if (!a) return null;
  let _ = () => {
    true === l.K.get(A.F) ? f() : (0, u.ZDy)(async () => {
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
          handleResolveFlag: f
        })
      }
    })
  };
  return (0, r.jsxs)(c.zx, {
    size: c.zx.Sizes.SMALL,
    look: c.zx.Looks.FILLED,
    color: c.zx.Colors.PRIMARY,
    onClick: _,
    disabled: o,
    innerClassName: G.actionButton,
    submitting: s,
    children: [(0, r.jsx)(u.dz2, {
      size: "custom",
      color: "currentColor",
      width: Y,
      height: Y
    }), o ? j.intl.string(U.default["2Y4vkp"]) : j.intl.string(U.default.YIbR4u)]
  })
}

function Q(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: o = false,
    parentChannelId: l
  } = e, {
    ref: I,
    width: T
  } = (0, _.ZP)(), [A, U] = i.useState(K), [Z, V] = i.useState(!n), [Q, J] = (0, p.Z)(false, W), $ = (0, s.e7)([P.Z], () => P.Z.getChannel(t), [t]), {
    firstMessage: ee
  } = (0, x.cl)($), et = (0, s.e7)([C.Z], () => C.Z.hasJoined(t)), {
    disableReactionUpdates: en,
    disableReactionCreates: er,
    isLurking: ei,
    isGuest: eo,
    isPendingMember: ea
  } = (0, E.Z)($), es = (0, S.nw)($), el = (0, s.e7)([P.Z], () => P.Z.getChannel(l)), ec = (0, L.Bs)(el), eu = (0, s.e7)([h.Z], () => h.Z.shouldDisplayPrompt(t) && true === n, [t, n]), ed = i.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      V((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  i.useLayoutEffect(() => {
    let e = I.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(ed, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [ef, e_] = i.useState(true);
  if (i.useEffect(() => {
      null != T && (U(Math.floor((T - z) / q)), e_(false))
    }, [T]), null == $ || null == ee) return null;
  let ep = ee.reactions.length > 0,
    eh = () => {
      et ? R.Z.leaveThread($, "Forum Toolbar") : R.Z.joinThread($, "Forum Toolbar")
    },
    em = () => {
      (0, M.B)({
        postId: $.id,
        location: {
          section: k.jXE.CHANNEL_HEADER
        }
      }), (0, D.JG)((0, w.EO)($, el), () => J(true))
    },
    eg = () => {
      d.Z.jumpToMessage({
        channelId: $.id,
        messageId: $.id,
        flash: true,
        jumpType: f.SR.INSTANT
      })
    },
    eE = et ? u.dz2 : u.Dkj,
    eb = !ep && !er;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(G.container, {
        [G.header]: Z
      }),
      ref: I,
      children: [es ? (0, r.jsx)("div", {
        className: G.reportedMessageActions,
        children: (0, r.jsx)(N.Z, {
          message: ee,
          channel: $
        })
      }) : (0, r.jsxs)("div", {
        className: a()(G.reactButtons, {
          [G.loading]: ef
        }),
        children: [eb && null != ec && (0, r.jsx)("div", {
          className: B.reactions,
          children: (0, r.jsx)(v.le, {
            message: ee,
            readOnly: false,
            useChatFontScaling: false,
            isLurking: ei,
            isGuest: eo,
            isPendingMember: ea,
            emoji: ec,
            type: g.O.NORMAL,
            hideCount: true,
            count: 0,
            me: false,
            burst_count: 0,
            me_burst: false,
            emojiSize: "reaction"
          })
        }), (0, r.jsx)(O.Z, {
          message: ee,
          channel: $,
          disableReactionCreates: true,
          disableReactionUpdates: en,
          isLurking: ei,
          isGuest: eo,
          isPendingMember: ea,
          maxReactions: A,
          className: G.reactions,
          useChatFontScaling: false,
          isForumToolbar: true,
          forceHideReactionCreates: true
        }), !er && (0, r.jsx)(b.X, {
          type: g.O.NORMAL,
          message: ee,
          channel: $,
          useChatFontScaling: false,
          className: a()(G.addReactButton, {
            [G.hasNoReactions]: !ep
          }),
          isForumToolbar: true,
          children: !ep && j.intl.string(j.t.xpOyTE)
        })]
      }), (0, r.jsxs)("div", {
        className: G.buttons,
        children: [es ? (0, r.jsx)(X, {
          channel: $
        }) : (0, r.jsx)(u.ua7, {
          text: j.intl.string(j.t.F7oeDg),
          children: e => (0, r.jsxs)(c.zx, H(F({}, e), {
            look: c.zx.Looks.BLANK,
            size: c.zx.Sizes.SMALL,
            onClick: eh,
            className: G.button,
            innerClassName: a()(G.buttonInner, {
              [G.active]: et
            }),
            children: [(0, r.jsx)(eE, {
              size: "xs",
              color: "currentColor"
            }), et ? j.intl.string(j.t["7OkUzs"]) : j.intl.string(j.t["3aOv+v"])]
          }))
        }), (0, r.jsx)(u.ua7, {
          text: j.intl.string(j.t.WqhZsr),
          children: e => (0, r.jsxs)(c.zx, H(F({}, e), {
            look: c.zx.Looks.BLANK,
            size: c.zx.Sizes.SMALL,
            onClick: em,
            className: G.button,
            innerClassName: G.buttonInner,
            children: [Q ? (0, r.jsx)(u.dz2, {
              size: "custom",
              color: "currentColor",
              width: Y,
              height: Y
            }) : (0, r.jsx)(u.xPt, {
              size: "custom",
              color: "currentColor",
              width: Y,
              height: Y
            }), Q ? j.intl.string(j.t["t5VZ8/"]) : null]
          }))
        }), !n && (0, r.jsx)(u.ua7, {
          text: j.intl.string(j.t.nFP4oa),
          children: e => (0, r.jsx)(c.zx, H(F({}, e), {
            look: c.zx.Looks.BLANK,
            size: c.zx.Sizes.SMALL,
            onClick: eg,
            className: G.button,
            innerClassName: G.buttonInner,
            children: (0, r.jsx)(u.Za2, {
              size: "custom",
              color: "currentColor",
              width: Y,
              height: Y
            })
          }))
        })]
      })]
    }), eu && (0, r.jsx)(m.Z, {
      threadId: t
    }), (0, r.jsx)(y.Z, {
      channel: $,
      isLastItem: o
    })]
  })
}