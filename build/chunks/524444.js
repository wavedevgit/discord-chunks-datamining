/** Chunk was on web.js **/
"use strict";
n.d(t, {
  A7: () => ea,
  BO: () => eh,
  DR: () => ec,
  G5: () => ef,
  LE: () => ed,
  Rp: () => eu,
  SE: () => eE,
  W_: () => eg,
  Y: () => em,
  Yi: () => en,
  b_: () => Q,
  hX: () => ee,
  iT: () => er,
  lV: () => $,
  ur: () => eo,
  wj: () => et,
  xi: () => ei
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n.n(s),
  c = n(374470),
  u = n(442837),
  d = n(481060),
  f = n(904245),
  p = n(45114),
  _ = n(431279),
  h = n(794295),
  m = n(593472),
  g = n(110924),
  E = n(40330),
  v = n(249458),
  b = n(313201),
  y = n(540059),
  O = n(688465),
  S = n(425886),
  I = n(80966),
  T = n(593545),
  N = n(479313),
  A = n(765104),
  C = n(505953),
  R = n(695346),
  P = n(201542),
  D = n(306680),
  w = n(594174),
  L = n(259580),
  x = n(626135),
  M = n(823379),
  j = n(589530),
  k = n(709054),
  U = n(217702),
  G = n(981631),
  B = n(420212),
  F = n(814249),
  V = n(388032),
  Z = n(298010);

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = q(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let Q = {
    delay: 300,
    position: "top"
  },
  X = e => t => {
    null == e || e(t), (0, j.jA)(t)
  },
  J = e => t => {
    null == e || e(t), (0, j.Zj)(t)
  };

function $(e) {
  var {
    onVolumeChange: t,
    onMute: n,
    volume: o,
    autoMute: a,
    alt: s,
    renderAdjacentContent: l,
    renderOverlayContent: c
  } = e, u = z(e, ["onVolumeChange", "onMute", "volume", "autoMute", "alt", "renderAdjacentContent", "renderOverlayContent"]);
  let d = X(t),
    f = J(n);
  return o = null == o ? j.FC : o, a = null == a ? j.rs : a, (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(I.Z, K(W({}, u), {
      alt: s,
      volume: o,
      autoMute: a,
      onVolumeChange: d,
      onMute: f,
      renderLinkComponent: er,
      renderOverlayContent: c
    })), null != l && l()]
  })
}

function ee(e) {
  var {
    onVolumeChange: t,
    volume: n,
    onMute: o,
    onVolumeShow: a,
    onVolumeHide: s,
    renderAdjacentContent: l
  } = e, c = z(e, ["onVolumeChange", "volume", "onMute", "onVolumeShow", "onVolumeHide", "renderAdjacentContent"]);
  let u = X(t),
    d = J(o);
  n = null == n ? j.FC : n;
  let f = () => !1;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(S.Z, K(W({}, c), {
      onVolumeChange: u,
      onMute: d,
      onVolumeShow: a,
      onVolumeHide: s,
      volume: n,
      autoMute: f,
      renderLinkComponent: er
    })), null != l && l()]
  })
}

function et(e) {
  var {
    onVolumeChange: t,
    volume: n,
    onMute: i
  } = e, o = z(e, ["onVolumeChange", "volume", "onMute"]);
  let a = X(t),
    s = J(i);
  return n = null == n ? j.FC : n, (0, r.jsx)(P.Z, K(W({}, o), {
    onVolumeChange: a,
    onMute: s,
    volume: n
  }))
}

function en(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: o,
    containerClassName: s,
    imageContainerClassName: l,
    disableAltTextDisplay: c = !1,
    reducedSizeAltTextButton: u = !1,
    mediaLayoutType: f,
    imageContainerStyle: p
  } = e, h = f === U.hV.MOSAIC, m = !c && R.H1.getSetting() && null != t && "" !== t && !0 !== n, g = e => {
    let {
      altText: t
    } = e;
    return (0, r.jsxs)(d.VqE, {
      "aria-label": V.NW.string(V.t.fSiQ3N),
      className: Z.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === B.mR.Escape && setTimeout(() => {
          var e;
          return null === (e = E.current) || void 0 === e ? void 0 : e.focus()
        }, 0)
      },
      children: [(0, r.jsx)("span", {
        className: Z.mediaMosaicAltTextPopoutTitle,
        children: V.NW.string(V.t.fSiQ3N)
      }), (0, r.jsx)("span", {
        className: Z.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, E = i.createRef();
  return (0, r.jsxs)("div", {
    className: a()(Z.imageContent, s),
    children: [(0, r.jsxs)("div", {
      className: a()(Z.imageContainer, l),
      style: p,
      children: [(0, r.jsx)(_.Z, W({}, e)), null != o && o()]
    }), h && m && (0, r.jsx)("div", {
      className: Z.mediaMosaicAltTextContainer,
      children: (0, r.jsx)(d.yRy, {
        animation: d.yRy.Animation.FADE,
        renderPopout: () => (0, r.jsx)(g, {
          altText: t
        }),
        children: e => (0, r.jsx)(d.tEY, {
          offset: 4,
          children: (0, r.jsx)("button", K(W({}, e), {
            type: "button",
            ref: E,
            "aria-label": V.NW.string(V.t.fSiQ3N),
            className: a()(Z.mediaMosaicAltText, {
              [Z.reducedSize]: u
            }),
            children: V.NW.string(V.t.jCV1T0)
          }))
        })
      })
    }), !h && m && (0, r.jsx)("span", {
      className: Z.altText,
      children: t
    })]
  })
}

function er(e) {
  return (0, r.jsx)(h.Z, W({}, e))
}

function ei(e) {
  var {
    renderAdjacentContent: t
  } = e, n = z(e, ["renderAdjacentContent"]);
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(T.Z, W({}, n)), null != t && t()]
  })
}

function eo(e) {
  return (0, r.jsx)(E.Z, W({}, e))
}
var ea = function(e) {
  return e[e.OLD_MESSAGES = 0] = "OLD_MESSAGES", e[e.REPLY = 1] = "REPLY", e
}({});

function es(e) {
  switch (e) {
    case 0:
      return V.NW.string(V.t["4EvBb2"]);
    case 1:
      return V.NW.string(V.t["1J6Xq6"]);
    default:
      return (0, M.vE)(e)
  }
}

function el(e) {
  switch (e) {
    case 0:
      return V.NW.string(V.t.gpoQsL);
    case 1:
      return V.NW.string(V.t["k3RM8/"]);
    default:
      return (0, M.vE)(e)
  }
}
let ec = e => {
    let {
      type: t = 0,
      onClick: n,
      className: i
    } = e, o = (0, y.Q3)("JumpToPresentBar");
    return (0, r.jsx)(v.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)("div", {
        className: a()(Z.jumpToPresentBar, i),
        children: [(0, r.jsx)(d.tEY, {
          offset: 4,
          children: (0, r.jsx)("button", {
            type: "button",
            onClick: n,
            className: Z.barButtonMain,
            children: es(t)
          })
        }), null != n ? (0, r.jsx)(d.tEY, {
          offset: 4,
          children: o ? (0, r.jsx)(d.zxk, {
            size: "sm",
            onClick: n,
            children: el(t)
          }) : (0, r.jsxs)("button", {
            type: "button",
            onClick: n,
            className: Z.barButtonAlt,
            children: [el(t), (0, r.jsx)(L.Z, {
              className: Z.barButtonIcon
            })]
          })
        }) : (0, r.jsx)(d.$jN, {
          type: d.$jN.Type.PULSING_ELLIPSIS,
          className: Z.spinner,
          itemClassName: Z.spinnerItem
        })]
      })
    })
  },
  eu = e => {
    let {
      onClick: t,
      loading: n,
      className: i
    } = e;
    return (0, r.jsx)(v.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)(d.P3F, {
        className: a()(Z.messagesErrorBar, i),
        onClick: t,
        focusProps: {
          offset: {
            top: 4,
            right: 4,
            bottom: 12,
            left: 4
          }
        },
        children: [(0, r.jsx)("div", {
          className: Z.barButtonMain,
          children: V.NW.string(V.t["1zUvl5"])
        }), n ? (0, r.jsx)(d.$jN, {
          type: d.$jN.Type.PULSING_ELLIPSIS,
          className: Z.spinner,
          itemClassName: Z.spinnerItem
        }) : (0, r.jsx)("div", {
          className: Z.barButtonAlt,
          children: V.NW.string(V.t.TdQXAw)
        })]
      })
    })
  };

function ed(e) {
  let {
    content: t,
    channelId: n
  } = e, [o] = i.useState(() => (0, b.hQ)("NewMessagesBarJumpToNewMessages_")), s = i.useCallback(() => {
    let e = D.ZP.ackMessageId(n);
    null != e ? f.Z.jumpToMessage({
      channelId: n,
      messageId: e,
      offset: 1,
      context: "Mark As Read"
    }) : f.Z.jumpToMessage({
      channelId: n,
      messageId: k.default.castChannelIdAsMessageId(n),
      offset: 1,
      context: "Mark As Read"
    })
  }, [n]), l = i.useCallback(() => {
    (0, p.In)(n)
  }, [n]), {
    disableInteractions: c
  } = i.useContext(v.G);
  return c ? null : (0, r.jsxs)("div", {
    className: a()(Z.newMessagesBar, {
      [Z.disableInteractions]: c
    }),
    children: [(0, r.jsx)(d.tEY, {
      offset: 4,
      children: (0, r.jsx)("button", {
        type: "button",
        className: Z.barButtonMain,
        onClick: s,
        "aria-label": V.NW.string(V.t.z0Mkp6),
        "aria-describedby": o,
        children: (0, r.jsx)("span", {
          id: o,
          className: Z.span,
          children: t
        })
      })
    }), (0, r.jsx)(d.tEY, {
      offset: 4,
      children: (0, r.jsxs)("button", {
        type: "button",
        onClick: l,
        className: Z.barButtonAlt,
        children: [V.NW.string(V.t.e6RscX), (0, r.jsx)(d.eQA, {
          size: "md",
          color: "currentColor",
          className: Z.barButtonIcon
        })]
      })
    })]
  })
}

function ef(e) {
  var t, n, o;
  let {
    channel: s,
    content: _,
    scrollManager: h
  } = e, {
    disableInteractions: E
  } = i.useContext(v.G), [b, y] = i.useState(null), S = i.useRef(null), [I, T] = i.useState(null), R = i.useRef(null), P = (0, u.Wu)([A.Z], () => {
    var e;
    return null !== (e = A.Z.summaries(s.id)) && void 0 !== e ? e : []
  }, [s]), j = (0, g.Z)(P);
  i.useEffect(() => {
    l().isEqual(j, P) || x.default.track(G.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: P.length,
      message_counts: P.map(e => e.count),
      start_message_ids: P.map(e => e.startId),
      end_message_ids: P.map(e => e.endId),
      num_participants: P.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    })
  }, [P, j, s.guild_id, s.id, s.type]);
  let U = (0, u.e7)([w.default], () => {
      var e;
      return null !== (e = null == P ? void 0 : P.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = w.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(M.lm)
      })) && void 0 !== e ? e : []
    }, [P], e_),
    B = null !== (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    H = null == P ? void 0 : null === (t = P[B]) || void 0 === t ? void 0 : t.topic;
  null == H && null == b && (null == P ? void 0 : P.length) >= 1 && (H = null === (o = P[0]) || void 0 === o ? void 0 : o.topic);
  let W = i.useMemo(() => l().debounce(e => {
      var t;
      y(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [y]),
    Y = i.useMemo(() => l().throttle(() => {
      (0, N.yK)(null)
    }, 1200, {
      trailing: !1
    }), []),
    K = i.useCallback(e => {
      Y(), W(e)
    }, [W, Y]),
    [z, q] = i.useState(!1),
    Q = i.useCallback(() => {
      x.default.track(G.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !z,
        num_summaries: P.length,
        message_counts: P.map(e => e.count),
        start_message_ids: P.map(e => e.startId),
        end_message_ids: P.map(e => e.endId),
        num_participants: P.map(e => e.people.length),
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), q(!z)
    }, [z, P, q, s]),
    X = i.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F.DZ.PILL_DROPDOWN,
        n = P[e];
      if (null == n) return;
      (0, N.wv)(s.id, n.id), (0, N.yK)(s.id, n.id);
      let r = () => {
        h.removeScrollCompleteCallback(r), setTimeout(() => {
          h.addAutomaticAnchorCallback(K, !1)
        }, 100)
      };
      h.removeAutomaticAnchorCallback(K), h.addScrollCompleteCallback(r), x.default.track(G.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), f.Z.jumpToMessage({
        channelId: s.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: m.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [P, s, K, h]),
    J = i.useCallback(e => {
      var t;
      q(e);
      let n = null === (t = R.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && T(n)
    }, []);
  i.useEffect(() => {
    if (null != I && z) {
      var e;
      null === (e = R.current) || void 0 === e || e.scrollTo({
        top: I
      })
    }
  }, [I, z]);
  let $ = i.useCallback(e => {
    var t;
    !((0, c.k)(e.target) && (null === (t = S.current) || void 0 === t ? void 0 : t.contains(e.target))) && (z && x.default.track(G.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: P.length,
      message_counts: P.map(e => e.count),
      start_message_ids: P.map(e => e.startId),
      end_message_ids: P.map(e => e.endId),
      num_participants: P.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }), J(!1))
  }, [z, P, s, J]);
  i.useEffect(() => (h.addAutomaticAnchorCallback(K), () => {
    h.removeAutomaticAnchorCallback(K)
  }), [h, K]), i.useEffect(() => {
    (0, N.G1)(s.id)
  }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = i.useMemo(() => (0, r.jsx)(C.Z, {
      channel: s,
      summaries: P,
      summariesMembers: U,
      selectTopic: X,
      setOpen: J
    }), [P, U, X, J, s]),
    et = i.useCallback(() => {
      let e = D.ZP.ackMessageId(s.id);
      null != e ? f.Z.jumpToMessage({
        channelId: s.id,
        messageId: e,
        offset: 1,
        context: "Mark As Read"
      }) : f.Z.jumpToMessage({
        channelId: s.id,
        messageId: k.default.castChannelIdAsMessageId(s.id),
        offset: 1,
        context: "Mark As Read"
      })
    }, [s.id]),
    en = i.useCallback(() => {
      (0, p.In)(s.id)
    }, [s.id]),
    er = V.NW.string(V.t["38qwgI"]);
  return P.length > 0 && (er = "" === H || null == H ? V.NW.string(V.t.DwnFuL) : H), E ? null : (0, r.jsxs)("div", {
    ref: S,
    className: a()(Z.newTopicsBarContainer, Z.containerMarginTop),
    children: [(0, r.jsx)("div", {
      className: a()(Z.newTopicsBarTopicSection),
      children: (0, r.jsx)(d.P3F, {
        className: Z.newTopicsBarTextClickable,
        "aria-label": V.NW.string(V.t.RT3MPz),
        onClick: Q,
        children: (0, r.jsxs)("div", {
          className: a()({
            [Z.newTopicsBarTextUnselected]: !z,
            [Z.newTopicsBarTextSelected]: z
          }),
          children: [(0, r.jsx)(d.sVe, {
            size: "xs",
            color: "currentColor",
            className: Z.newTopicsBarIcon
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: a()(Z.newTopicsBarCompact, Z.newTopicsBarText),
            children: er
          }), (0, r.jsx)(L.Z, {
            width: 16,
            height: 16,
            direction: L.Z.Directions.DOWN,
            className: Z.newTopicsBarCaret
          })]
        })
      })
    }), (0, r.jsx)(d.P3F, {
      onClick: et,
      className: a()(Z.newTopicsBarInitial),
      children: _
    }), (0, r.jsxs)(d.P3F, {
      onClick: en,
      className: a()(Z.barButtonAlt, Z.flexEnd),
      children: [(0, r.jsx)("div", {
        className: Z.newTopicsBarCompact,
        children: V.NW.string(V.t.e6RscX)
      }), (0, r.jsx)(d.eQA, {
        size: "md",
        color: "currentColor",
        className: Z.barButtonIcon
      })]
    }), z && (0, r.jsxs)("div", {
      className: Z.topicsDropdown,
      children: [(0, r.jsxs)("div", {
        className: Z.topicsDropdownHeading,
        children: [(0, r.jsxs)("div", {
          className: Z.topicsDropdownHeadingText,
          children: [(0, r.jsx)(d.sVe, {
            size: "custom",
            color: "currentColor",
            className: Z.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, r.jsx)(d.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: V.NW.string(V.t.q21fUl)
          }), (0, r.jsx)(O.Z, {
            className: Z.summariesBetaTag
          })]
        }), (0, r.jsx)(d.P3F, {
          "aria-label": V.NW.string(V.t.cpT0Cg),
          onClick: Q,
          className: Z.topicsDropdownClose,
          children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.Ttm, {
        ref: R,
        className: Z.topicsScroller,
        fade: !0,
        children: ee
      })]
    })]
  })
}

function ep(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e)
}

function e_(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => !ep(e, t[n]))
}

function eh(e) {
  var t, n, o;
  let {
    channel: s,
    scrollManager: p
  } = e, {
    disableInteractions: _
  } = i.useContext(v.G), [h, E] = i.useState(null), b = i.useRef(null), [y, S] = i.useState(null), I = i.useRef(null), T = (0, u.Wu)([A.Z], () => {
    var e;
    return null !== (e = A.Z.summaries(s.id)) && void 0 !== e ? e : []
  }, [s]), R = (0, g.Z)(T);
  i.useEffect(() => {
    l().isEqual(R, T) || x.default.track(G.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: T.length,
      message_counts: T.map(e => e.count),
      start_message_ids: T.map(e => e.startId),
      end_message_ids: T.map(e => e.endId),
      num_participants: T.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    })
  }, [T, R, s.guild_id, s.id, s.type]);
  let P = (0, u.e7)([w.default], () => {
      var e;
      return null !== (e = null == T ? void 0 : T.map(e => {
        var t;
        return null === (t = e.people) || void 0 === t ? void 0 : t.map(e => {
          var t;
          return null !== (t = w.default.getUser(e)) && void 0 !== t ? t : null
        }).filter(M.lm)
      })) && void 0 !== e ? e : []
    }, [T], e_),
    D = null !== (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
    j = null == T ? void 0 : null === (t = T[D]) || void 0 === t ? void 0 : t.topic;
  null == j && null == h && (null == T ? void 0 : T.length) >= 1 && (j = null === (o = T[0]) || void 0 === o ? void 0 : o.topic);
  let k = i.useMemo(() => l().get(T, D - 1), [D, T]),
    U = i.useMemo(() => l().get(T, D + 1), [D, T]),
    B = i.useMemo(() => l().debounce(e => {
      var t;
      E(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null)
    }, 64), [E]),
    H = i.useMemo(() => l().throttle(() => {
      (0, N.yK)(null)
    }, 1200, {
      trailing: !1
    }), []),
    W = i.useCallback(e => {
      H(), B(e)
    }, [B, H]),
    [Y, K] = i.useState(!1),
    z = i.useCallback(() => {
      x.default.track(G.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !Y,
        num_summaries: T.length,
        message_counts: T.map(e => e.count),
        start_message_ids: T.map(e => e.startId),
        end_message_ids: T.map(e => e.endId),
        num_participants: T.map(e => e.people.length),
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), K(!Y)
    }, [Y, T, K, s]),
    q = i.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F.DZ.PILL_DROPDOWN,
        n = T[e];
      if (null == n) return;
      (0, N.wv)(s.id, n.id), (0, N.yK)(s.id, n.id);
      let r = () => {
        p.removeScrollCompleteCallback(r), setTimeout(() => {
          p.addAutomaticAnchorCallback(W, !1)
        }, 100)
      };
      p.removeAutomaticAnchorCallback(W), p.addScrollCompleteCallback(r), x.default.track(G.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), f.Z.jumpToMessage({
        channelId: s.id,
        messageId: n.startId,
        flash: !0,
        offset: 0,
        jumpType: m.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [T, s, W, p]),
    Q = i.useCallback(() => {
      q(D - 1, F.DZ.PILL_NEXT_ARROW)
    }, [q, D]),
    X = i.useCallback(() => {
      q(D + 1, F.DZ.PILL_PREVIOUS_ARROW)
    }, [D, q]),
    J = i.useCallback(e => {
      var t;
      K(e);
      let n = null === (t = I.current) || void 0 === t ? void 0 : t.scrollTop;
      null != n && S(n)
    }, []);
  i.useEffect(() => {
    if (null != y && Y) {
      var e;
      null === (e = I.current) || void 0 === e || e.scrollTo({
        top: y
      })
    }
  }, [y, Y]);
  let $ = i.useCallback(e => {
    var t;
    !((0, c.k)(e.target) && (null === (t = b.current) || void 0 === t ? void 0 : t.contains(e.target))) && (Y && x.default.track(G.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: !1,
      num_summaries: T.length,
      message_counts: T.map(e => e.count),
      start_message_ids: T.map(e => e.startId),
      end_message_ids: T.map(e => e.endId),
      num_participants: T.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }), J(!1))
  }, [Y, T, s, J]);
  i.useEffect(() => (p.addAutomaticAnchorCallback(W), () => {
    p.removeAutomaticAnchorCallback(W)
  }), [p, W]), i.useEffect(() => {
    (0, N.G1)(s.id)
  }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = i.useMemo(() => (0, r.jsx)(C.Z, {
    channel: s,
    summaries: T,
    summariesMembers: P,
    selectTopic: q,
    setOpen: J
  }), [T, P, q, J, s]);
  if (!(0, u.e7)([A.Z], () => A.Z.shouldShowTopicsBar())) return null;
  let et = V.NW.string(V.t["38qwgI"]);
  return T.length > 0 && (et = "" === j || null == j ? V.NW.string(V.t.DwnFuL) : j), _ ? null : (0, r.jsxs)("div", {
    ref: b,
    className: a()(Z.topicsPillContainer, Z.containerMarginTop),
    children: [(0, r.jsxs)("div", {
      className: Z.topicsPill,
      children: [(0, r.jsx)(d.P3F, {
        className: Z.topicsPillText,
        "aria-label": V.NW.string(V.t.RT3MPz),
        onClick: z,
        children: (0, r.jsxs)("div", {
          className: a()({
            [Z.topicsPillTextUnselected]: !Y,
            [Z.topicsPillTextSelected]: Y
          }),
          children: [(0, r.jsx)(d.sVe, {
            size: "xs",
            color: "currentColor",
            className: Z.topicsPillSummaryIcon
          }), (0, r.jsx)(d.Text, {
            className: Z.topicsPillTextTitle,
            variant: "text-sm/medium",
            children: et
          }), (0, r.jsx)(L.Z, {
            width: 16,
            height: 16,
            direction: L.Z.Directions.DOWN,
            className: Z.topicsPillDropdownCaret
          })]
        })
      }), (0, r.jsxs)("div", {
        className: Z.topicsPillCarets,
        children: [(0, r.jsx)(d.P3F, {
          "aria-label": V.NW.string(V.t["4huCnJ"]),
          onClick: X,
          className: a()(Z.topicsPillCaret, Z.topicsCaretLeft, {
            [Z.topicsPillCaretDisabled]: null == U
          }),
          children: (0, r.jsx)(L.Z, {
            width: 16,
            height: 16,
            direction: L.Z.Directions.UP
          })
        }), (0, r.jsx)(d.P3F, {
          "aria-label": V.NW.string(V.t["58KOoK"]),
          onClick: Q,
          className: a()(Z.topicsPillCaret, Z.topicsCaretRight, {
            [Z.topicsPillCaretDisabled]: null == k
          }),
          children: (0, r.jsx)(L.Z, {
            width: 16,
            height: 16,
            direction: L.Z.Directions.DOWN
          })
        })]
      })]
    }), Y && (0, r.jsxs)("div", {
      className: Z.topicsDropdown,
      children: [(0, r.jsxs)("div", {
        className: Z.topicsDropdownHeading,
        children: [(0, r.jsxs)("div", {
          className: Z.topicsDropdownHeadingText,
          children: [(0, r.jsx)(d.sVe, {
            size: "custom",
            color: "currentColor",
            className: Z.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, r.jsx)(d.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: V.NW.string(V.t.q21fUl)
          }), (0, r.jsx)(O.Z, {
            className: Z.summariesBetaTag
          })]
        }), (0, r.jsx)(d.P3F, {
          "aria-label": V.NW.string(V.t.cpT0Cg),
          onClick: z,
          className: Z.topicsDropdownClose,
          children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.Ttm, {
        ref: I,
        className: Z.topicsScroller,
        fade: !0,
        children: ee
      })]
    })]
  })
}
let em = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, r.jsxs)("div", {
      className: Z.tooltip,
      children: [(0, r.jsx)(d.Text, {
        color: "none",
        variant: "text-sm/semibold",
        lineClamp: 1,
        className: Z.tooltipEmojiName,
        children: e
      }), t && (0, r.jsx)(d.Text, {
        className: Z.clickCTA,
        color: "text-muted",
        variant: "text-sm/normal",
        children: V.NW.string(V.t["515vjI"])
      })]
    })
  },
  eg = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(Z.popoutContainer, n),
      children: t
    })
  },
  eE = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(eg, {
      className: t,
      children: (0, r.jsx)("div", {
        className: Z.popoutLoadingBackground,
        children: (0, r.jsx)("div", {
          className: Z.popoutLoadingForeground
        })
      })
    })
  }