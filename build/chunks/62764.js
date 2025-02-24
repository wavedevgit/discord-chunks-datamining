/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => M
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(852229),
  s = n(442837),
  c = n(52826),
  u = n(481060),
  d = n(904245),
  p = n(593472),
  h = n(393238),
  f = n(330726),
  m = n(48929),
  g = n(333535),
  b = n(566006),
  _ = n(443877),
  C = n(60174),
  v = n(216337),
  y = n(920888),
  x = n(287151),
  j = n(569471),
  O = n(346479),
  N = n(592125),
  E = n(934415),
  P = n(456269),
  I = n(109590),
  S = n(228392),
  Z = n(981631),
  T = n(388032),
  A = n(145395),
  w = n(773265);

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function k(e, t) {
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

function M(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: l = !1,
    parentChannelId: M
  } = e, {
    ref: L,
    width: D
  } = (0, h.Z)(), [W, U] = i.useState(3), [B, F] = i.useState(!n), [H, G] = (0, f.Z)(!1, 2e3), V = (0, s.e7)([N.Z], () => N.Z.getChannel(t), [t]), {
    firstMessage: z
  } = (0, I.cl)(V), q = (0, s.e7)([j.Z], () => j.Z.hasJoined(t)), {
    disableReactionUpdates: Y,
    disableReactionCreates: K,
    isLurking: X,
    isGuest: Q,
    isPendingMember: J
  } = (0, _.Z)(V), $ = (0, s.e7)([N.Z], () => N.Z.getChannel(M)), ee = (0, P.Bs)($), et = (0, s.e7)([m.Z], () => m.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]), en = i.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      F((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  i.useLayoutEffect(() => {
    let e = L.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(en, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [er, ei] = i.useState(!0);
  if (i.useEffect(() => {
      null != D && (U(Math.floor((D - 280) / 58)), ei(!1))
    }, [D]), null == V || null == z) return null;
  let el = z.reactions.length > 0,
    eo = () => {
      q ? O.Z.leaveThread(V, "Forum Toolbar") : O.Z.joinThread(V, "Forum Toolbar")
    },
    ea = () => {
      (0, S.B)({
        postId: V.id,
        location: {
          section: Z.jXE.CHANNEL_HEADER
        }
      }), (0, a.J)((0, E.EO)(V, $)), G(!0)
    },
    es = () => {
      d.Z.jumpToMessage({
        channelId: V.id,
        messageId: V.id,
        flash: !0,
        jumpType: p.SR.INSTANT
      })
    },
    ec = q ? u.dz2 : u.Dkj;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(A.container, {
        [A.header]: B
      }),
      ref: L,
      children: [(0, r.jsxs)("div", {
        className: o()(A.reactButtons, {
          [A.loading]: er
        }),
        children: [!el && !K && null != ee && (0, r.jsx)("div", {
          className: w.reactions,
          children: (0, r.jsx)(x.le, {
            message: z,
            readOnly: !1,
            useChatFontScaling: !1,
            isLurking: X,
            isGuest: Q,
            isPendingMember: J,
            emoji: ee,
            type: b.O.NORMAL,
            hideCount: !0,
            count: 0,
            me: !1,
            burst_count: 0,
            me_burst: !1,
            emojiSize: "reactionLarge"
          })
        }), (0, r.jsx)(y.Z, {
          message: z,
          channel: V,
          disableReactionCreates: !0,
          disableReactionUpdates: Y,
          isLurking: X,
          isGuest: Q,
          isPendingMember: J,
          maxReactions: W,
          className: A.reactions,
          useChatFontScaling: !1,
          isForumToolbar: !0,
          forceHideReactionCreates: !0
        }), !K && (0, r.jsx)(C.X, {
          type: b.O.NORMAL,
          message: z,
          channel: V,
          useChatFontScaling: !1,
          className: o()(A.addReactButton, {
            [A.hasNoReactions]: !el
          }),
          isForumToolbar: !0,
          children: !el && T.NW.string(T.t.xpOyTE)
        })]
      }), (0, r.jsxs)("div", {
        className: A.buttons,
        children: [(0, r.jsx)(u.ua7, {
          text: T.NW.string(T.t.F7oeDg),
          children: e => (0, r.jsxs)(u.zxk, k(R({}, e), {
            look: u.zxk.Looks.BLANK,
            size: u.zxk.Sizes.SMALL,
            onClick: eo,
            className: A.button,
            innerClassName: o()(A.buttonInner, {
              [A.active]: q
            }),
            children: [(0, r.jsx)(ec, {
              size: "xs",
              color: "currentColor"
            }), q ? T.NW.string(T.t["7OkUzs"]) : T.NW.string(T.t["3aOv+v"])]
          }))
        }), (0, r.jsx)(u.ua7, {
          text: T.NW.string(T.t.WqhZsr),
          children: e => (0, r.jsxs)(u.zxk, k(R({}, e), {
            look: u.zxk.Looks.BLANK,
            size: u.zxk.Sizes.SMALL,
            onClick: ea,
            className: A.button,
            innerClassName: A.buttonInner,
            children: [H ? (0, r.jsx)(u.dz2, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16
            }) : (0, r.jsx)(u.xPt, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16
            }), H ? T.NW.string(T.t["t5VZ8/"]) : null]
          }))
        }), !n && (0, r.jsx)(u.ua7, {
          text: T.NW.string(T.t.nFP4oa),
          children: e => (0, r.jsx)(u.zxk, k(R({}, e), {
            look: u.zxk.Looks.BLANK,
            size: u.zxk.Sizes.SMALL,
            onClick: es,
            className: A.button,
            innerClassName: A.buttonInner,
            children: (0, r.jsx)(c.Z, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16
            })
          }))
        })]
      })]
    }), et && (0, r.jsx)(g.Z, {
      threadId: t
    }), (0, r.jsx)(v.Z, {
      channel: V,
      isLastItem: l
    })]
  })
}