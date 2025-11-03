/** Chunk was on 88647 **/
/** chunk id: 62764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
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
  Chunk43617 = require("./43617.js"),
  Chunk319720 = require("./319720.js"),
  Chunk127947 = require("./127947.js"),
  Chunk577650 = require("./577650.js");

function V(e) {
  let {
    channel: t
  } = e, l = t.isArchivedThread(), a = (0, E.P0)(t), [o, c] = i.useState(false), d = () => {
    c(true), O.Z.resolveFlag(t.id).then(() => {
      c(false)
    })
  };
  return a ? (0, r.jsx)(u.Button, {
    size: "sm",
    variant: "secondary",
    text: l ? k.intl.string(L.default["2Y4vkk"]) : k.intl.string(L.default.YIbR4r),
    onClick: () => {
      true === s.K.get(S.F) ? d() : (0, u.ZDy)(async () => {
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
    icon: u.dz2,
    disabled: l
  }) : null
}

function H(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: l = false,
    parentChannelId: s
  } = e, {
    ref: O,
    width: E
  } = (0, f.ZP)(), [S, L] = i.useState(3), [H, G] = i.useState(!n), [W, z] = (0, h.Z)(false, 2e3), q = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]), {
    firstMessage: Y
  } = (0, M.cl)(q), K = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)), {
    disableReactionUpdates: X,
    disableReactionCreates: J,
    isLurking: Q,
    isGuest: $,
    isPendingMember: ee
  } = (0, _.Z)(q), et = (0, j.nw)(q), en = (0, o.e7)([T.Z], () => T.Z.getChannel(s)), er = (0, w.Bs)(en), ei = (0, o.e7)([m.Z], () => m.Z.shouldDisplayPrompt(t) && true === n, [t, n]), el = i.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      G((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  i.useLayoutEffect(() => {
    let e = O.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(el, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [ea, eo] = i.useState(true);
  if (i.useEffect(() => {
      null != E && (L(Math.floor((E - 280) / 58)), eo(false))
    }, [E]), null == q || null == Y) return null;
  let es = Y.reactions.length > 0,
    ec = () => {
      (0, R.B)({
        postId: q.id,
        location: {
          section: D.jXE.CHANNEL_HEADER
        }
      }), (0, A.JG)((0, N.EO)(q, en), () => z(true))
    },
    eu = K ? u.dz2 : u.Dkj;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(U.container, {
        [U.header]: H
      }),
      ref: O,
      children: [et ? (0, r.jsx)("div", {
        className: U.reportedMessageActions,
        children: (0, r.jsx)(P.Z, {
          message: Y,
          channel: q
        })
      }) : (0, r.jsxs)("div", {
        className: a()(U.reactButtons, {
          [U.loading]: ea
        }),
        children: [!es && !J && null != er && (0, r.jsx)("div", {
          className: B.reactions,
          children: (0, r.jsx)(x.le, {
            message: Y,
            readOnly: false,
            useChatFontScaling: false,
            isLurking: Q,
            isGuest: $,
            isPendingMember: ee,
            emoji: er,
            type: b.O.NORMAL,
            hideCount: true,
            count: 0,
            me: false,
            burst_count: 0,
            me_burst: false,
            emojiSize: "reaction"
          })
        }), (0, r.jsx)(v.Z, {
          message: Y,
          channel: q,
          disableReactionCreates: true,
          disableReactionUpdates: X,
          isLurking: Q,
          isGuest: $,
          isPendingMember: ee,
          maxReactions: S,
          className: U.reactions,
          useChatFontScaling: false,
          isForumToolbar: true,
          forceHideReactionCreates: true
        }), !J && (0, r.jsx)(y.X, {
          message: Y,
          channel: q,
          useChatFontScaling: false,
          className: a()(F.secondary, U.addReactButton, {
            [U.hasNoReactions]: !es
          }),
          isForumToolbar: true,
          children: !es && k.intl.string(k.t.xpOyTO)
        })]
      }), (0, r.jsxs)("div", {
        className: U.buttons,
        children: [et ? (0, r.jsx)(V, {
          channel: q
        }) : (0, r.jsx)(c.u, {
          text: k.intl.string(k.t.F7oeDv),
          children: (0, r.jsx)(u.Button, {
            icon: eu,
            size: "sm",
            variant: "secondary",
            text: K ? k.intl.string(k.t["7OkUzs"]) : k.intl.string(k.t["3aOv+h"]),
            onClick: () => {
              K ? Z.Z.leaveThread(q, "Forum Toolbar") : Z.Z.joinThread(q, "Forum Toolbar")
            }
          })
        }), (0, r.jsx)(c.u, {
          text: k.intl.string(k.t.WqhZss),
          children: W ? (0, r.jsx)(u.Button, {
            icon: u.dz2,
            size: "sm",
            variant: "secondary",
            onClick: ec,
            text: k.intl.string(k.t.t5VZ88)
          }) : (0, r.jsx)(u.hU, {
            icon: u.xPt,
            size: "sm",
            variant: "secondary",
            onClick: ec,
            "aria-label": k.intl.string(k.t.WqhZss)
          })
        }), !n && (0, r.jsx)(c.u, {
          text: k.intl.string(k.t.nFP4oa),
          children: (0, r.jsx)(u.hU, {
            icon: u.Za2,
            size: "sm",
            variant: "secondary",
            onClick: () => {
              d.Z.jumpToMessage({
                channelId: q.id,
                messageId: q.id,
                flash: true,
                jumpType: p.SR.INSTANT
              })
            },
            "aria-label": k.intl.string(k.t.nFP4oa)
          })
        })]
      })]
    }), ei && (0, r.jsx)(g.Z, {
      threadId: t
    }), (0, r.jsx)(C.Z, {
      channel: q,
      isLastItem: l
    })]
  })
}