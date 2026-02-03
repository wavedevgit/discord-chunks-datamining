/** Chunk was on 61344 **/
/** chunk id: 928764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
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

function B(e) {
  let {
    channel: t
  } = e, i = t.isArchivedThread(), a = (0, C.uW)(t), [s, c] = r.useState(false), d = () => {
    c(true), O.A.resolveFlag(t.id).then(() => {
      c(false)
    })
  };
  return a ? (0, l.jsx)(u.Button, {
    size: "sm",
    variant: "secondary",
    text: i ? L.intl.string(U.default["2Y4vkk"]) : L.intl.string(U.default.YIbR4r),
    onClick: () => {
      true === o.w.get(x.f) ? d() : (0, u.mMO)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 390897));
        return t => {
          let {
            transitionState: n,
            onClose: r
          } = t;
          return (0, l.jsx)(e, {
            transitionState: n,
            onClose: r,
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

function V(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: i = false,
    parentChannelId: o
  } = e, {
    ref: O,
    width: C
  } = (0, p.Ay)(), [x, U] = r.useState(3), [V, K] = r.useState(!n), [W, z] = (0, f.A)(false, 2e3), Y = (0, s.bG)([N.A], () => N.A.getChannel(t), [t]), {
    firstMessage: q
  } = (0, D.OA)(Y), J = (0, s.bG)([I.A], () => I.A.hasJoined(t)), {
    disableReactionUpdates: Z,
    disableReactionCreates: X,
    isLurking: Q,
    isPendingMember: $
  } = (0, b.A)(Y), ee = (0, S.W1)(Y), et = (0, s.bG)([N.A], () => N.A.getChannel(o)), en = (0, R.Ck)(et), el = (0, s.bG)([m.A], () => m.A.shouldDisplayPrompt(t) && true === n, [t, n]), er = r.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      K((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  r.useLayoutEffect(() => {
    let e = O.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(er, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [ei, ea] = r.useState(true);
  if (r.useEffect(() => {
      null == C || (U(Math.floor((C - 280) / 58)), ea(false))
    }, [C]), null == Y || null == q) return null;
  let es = q.reactions.length > 0,
    eo = () => {
      (0, M.jC)({
        postId: Y.id,
        location: {
          section: k.JJy.CHANNEL_HEADER
        }
      }), (0, w.C)((0, P.af)(Y, et), () => z(true))
    },
    ec = J ? u.A9s : u.XFE;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: a()(G.kL, {
        [G.wx]: V
      }),
      ref: O,
      children: [ee ? (0, l.jsx)("div", {
        className: G.kX,
        children: (0, l.jsx)(j.A, {
          message: q,
          channel: Y
        })
      }) : (0, l.jsxs)("div", {
        className: a()(G.hY, {
          [G.Lq]: ei
        }),
        children: [!es && !X && null != en && (0, l.jsx)("div", {
          className: F.reactions,
          children: (0, l.jsx)(E.qT, {
            message: q,
            readOnly: false,
            useChatFontScaling: false,
            isLurking: Q,
            isPendingMember: $,
            emoji: en,
            type: A.v.NORMAL,
            hideCount: true,
            count: 0,
            me: false,
            burst_count: 0,
            me_burst: false,
            emojiSize: "reaction"
          })
        }), (0, l.jsx)(v.A, {
          message: q,
          channel: Y,
          disableReactionCreates: true,
          disableReactionUpdates: Z,
          isLurking: Q,
          isPendingMember: $,
          maxReactions: x,
          className: G.Br,
          useChatFontScaling: false,
          isForumToolbar: true,
          forceHideReactionCreates: true
        }), !X && (0, l.jsx)(_.t, {
          message: q,
          channel: Y,
          useChatFontScaling: false,
          className: a()(H.secondary, G.vU, {
            [G.w$]: !es
          }),
          isForumToolbar: true,
          children: !es && L.intl.string(L.t.xpOyTO)
        })]
      }), (0, l.jsxs)("div", {
        className: G.Uo,
        children: [ee ? (0, l.jsx)(B, {
          channel: Y
        }) : !Q && (0, l.jsx)(c.m, {
          text: L.intl.string(L.t.F7oeDv),
          children: (0, l.jsx)(u.Button, {
            icon: ec,
            size: "sm",
            variant: "secondary",
            text: J ? L.intl.string(L.t["7OkUzs"]) : L.intl.string(L.t["3aOv+h"]),
            onClick: () => {
              J ? T.A.leaveThread(Y, "Forum Toolbar") : T.A.joinThread(Y, "Forum Toolbar")
            }
          })
        }), (0, l.jsx)(c.m, {
          text: L.intl.string(L.t.WqhZss),
          children: W ? (0, l.jsx)(u.Button, {
            icon: u.A9s,
            size: "sm",
            variant: "secondary",
            onClick: eo,
            text: L.intl.string(L.t.t5VZ88)
          }) : (0, l.jsx)(u.K0, {
            icon: u.qYV,
            size: "sm",
            variant: "secondary",
            onClick: eo,
            "aria-label": L.intl.string(L.t.WqhZss)
          })
        }), !n && (0, l.jsx)(c.m, {
          text: L.intl.string(L.t.nFP4oa),
          children: (0, l.jsx)(u.K0, {
            icon: u.Dl6,
            size: "sm",
            variant: "secondary",
            onClick: () => {
              d.A.jumpToMessage({
                channelId: Y.id,
                messageId: Y.id,
                flash: true,
                jumpType: h.US.INSTANT
              })
            },
            "aria-label": L.intl.string(L.t.nFP4oa)
          })
        })]
      })]
    }), el && (0, l.jsx)(g.A, {
      threadId: t
    }), (0, l.jsx)(y.A, {
      channel: Y,
      isLastItem: i
    })]
  })
}