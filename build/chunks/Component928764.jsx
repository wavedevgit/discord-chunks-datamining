/** Chunk was on 97492 **/
/** chunk id: 928764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk56562 = require("./56562.js"),
  Chunk765671 = require("./765671.js"),
  Chunk304072 = require("./304072.js"),
  Chunk390395 = require("./390395.js"),
  Chunk659195 = require("./659195.jsx"),
  Chunk505527 = require("./505527.js"),
  Chunk467073 = require("./467073.js"),
  Chunk960538 = require("./960538.jsx"),
  Chunk898280 = require("./898280.jsx"),
  Chunk573163 = require("./573163.jsx"),
  Chunk260821 = require("./260821.jsx"),
  Chunk226698 = require("./226698.js"),
  Chunk376708 = require("./376708.js"),
  Chunk715757 = require("./715757.js"),
  Chunk390897 = require("./390897.jsx"),
  Chunk704860 = require("./704860.jsx"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk734057 = require("./734057.js"),
  Chunk147036 = require("./147036.js"),
  Chunk957565 = require("./957565.js"),
  Chunk435470 = require("./435470.js"),
  Chunk473503 = require("./473503.js"),
  Chunk853742 = require("./853742.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk256366 = require("./256366.js"),
  Chunk233080 = require("./233080.js"),
  Chunk165180 = require("./165180.js");

function H(e) {
  let {
    channel: t
  } = e, i = t.isArchivedThread(), a = (0, E.uW)(t), [s, c] = l.useState(false), d = () => {
    c(true), x.A.resolveFlag(t.id).then(() => {
      c(false)
    })
  };
  return a ? (0, r.jsx)(u.Button, {
    size: "sm",
    variant: "secondary",
    text: i ? G.intl.string(k.default["2Y4vkk"]) : G.intl.string(k.default.YIbR4r),
    onClick: () => {
      true === o.w.get(C.f) ? d() : (0, u.mMO)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 390897));
        return t => {
          let {
            transitionState: n,
            onClose: l
          } = t;
          return (0, r.jsx)(e, {
            transitionState: n,
            onClose: l,
            handleResolveFlag: d
          })
        }
      })
    },
    loading: s,
    icon: u.A9s,
    disabled: i
  }) : null
}

function B(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: i = false,
    parentChannelId: o
  } = e, {
    ref: x,
    width: E
  } = (0, p.Ay)(), [C, k] = l.useState(3), [B, K] = l.useState(!n), [W, z] = (0, h.A)(false, 2e3), Y = (0, s.bG)([T.A], () => T.A.getChannel(t), [t]), {
    firstMessage: q
  } = (0, D.OA)(Y), X = (0, s.bG)([I.A], () => I.A.hasJoined(t)), {
    disableReactionUpdates: J,
    disableReactionCreates: Q,
    isLurking: Z,
    isGuest: $,
    isPendingMember: ee
  } = (0, A.A)(Y), et = (0, _.W1)(Y), en = (0, s.bG)([T.A], () => T.A.getChannel(o)), er = (0, R.Ck)(en), el = (0, s.bG)([b.A], () => b.A.shouldDisplayPrompt(t) && true === n, [t, n]), ei = l.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      K((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  l.useLayoutEffect(() => {
    let e = x.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(ei, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [ea, es] = l.useState(true);
  if (l.useEffect(() => {
      null == E || (k(Math.floor((E - 280) / 58)), es(false))
    }, [E]), null == Y || null == q) return null;
  let eo = q.reactions.length > 0,
    ec = () => {
      (0, M.jC)({
        postId: Y.id,
        location: {
          section: L.JJy.CHANNEL_HEADER
        }
      }), (0, w.C)((0, P.af)(Y, en), () => z(true))
    },
    eu = X ? u.A9s : u.XFE;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(U.kL, {
        [U.wx]: B
      }),
      ref: x,
      children: [et ? (0, r.jsx)("div", {
        className: U.kX,
        children: (0, r.jsx)(S.A, {
          message: q,
          channel: Y
        })
      }) : (0, r.jsxs)("div", {
        className: a()(U.hY, {
          [U.Lq]: ea
        }),
        children: [!eo && !Q && null != er && (0, r.jsx)("div", {
          className: V.reactions,
          children: (0, r.jsx)(v.qT, {
            message: q,
            readOnly: false,
            useChatFontScaling: false,
            isLurking: Z,
            isGuest: $,
            isPendingMember: ee,
            emoji: er,
            type: m.v.NORMAL,
            hideCount: true,
            count: 0,
            me: false,
            burst_count: 0,
            me_burst: false,
            emojiSize: "reaction"
          })
        }), (0, r.jsx)(j.A, {
          message: q,
          channel: Y,
          disableReactionCreates: true,
          disableReactionUpdates: J,
          isLurking: Z,
          isGuest: $,
          isPendingMember: ee,
          maxReactions: C,
          className: U.Br,
          useChatFontScaling: false,
          isForumToolbar: true,
          forceHideReactionCreates: true
        }), !Q && (0, r.jsx)(y.t, {
          message: q,
          channel: Y,
          useChatFontScaling: false,
          className: a()(F.secondary, U.vU, {
            [U.w$]: !eo
          }),
          isForumToolbar: true,
          children: !eo && G.intl.string(G.t.xpOyTO)
        })]
      }), (0, r.jsxs)("div", {
        className: U.Uo,
        children: [et ? (0, r.jsx)(H, {
          channel: Y
        }) : !Z && (0, r.jsx)(c.m, {
          text: G.intl.string(G.t.F7oeDv),
          children: (0, r.jsx)(u.Button, {
            icon: eu,
            size: "sm",
            variant: "secondary",
            text: X ? G.intl.string(G.t["7OkUzs"]) : G.intl.string(G.t["3aOv+h"]),
            onClick: () => {
              X ? N.A.leaveThread(Y, "Forum Toolbar") : N.A.joinThread(Y, "Forum Toolbar")
            }
          })
        }), (0, r.jsx)(c.m, {
          text: G.intl.string(G.t.WqhZss),
          children: W ? (0, r.jsx)(u.Button, {
            icon: u.A9s,
            size: "sm",
            variant: "secondary",
            onClick: ec,
            text: G.intl.string(G.t.t5VZ88)
          }) : (0, r.jsx)(u.K0, {
            icon: u.qYV,
            size: "sm",
            variant: "secondary",
            onClick: ec,
            "aria-label": G.intl.string(G.t.WqhZss)
          })
        }), !n && (0, r.jsx)(c.m, {
          text: G.intl.string(G.t.nFP4oa),
          children: (0, r.jsx)(u.K0, {
            icon: u.Dl6,
            size: "sm",
            variant: "secondary",
            onClick: () => {
              d.A.jumpToMessage({
                channelId: Y.id,
                messageId: Y.id,
                flash: true,
                jumpType: f.US.INSTANT
              })
            },
            "aria-label": G.intl.string(G.t.nFP4oa)
          })
        })]
      })]
    }), el && (0, r.jsx)(g.A, {
      threadId: t
    }), (0, r.jsx)(O.A, {
      channel: Y,
      isLastItem: i
    })]
  })
}