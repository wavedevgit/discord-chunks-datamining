/** Chunk was on web.js **/
/** chunk id: 524444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A7: () => eo,
  BO: () => ep,
  DR: () => el,
  G5: () => ed,
  LE: () => eu,
  Rp: () => ec,
  SE: () => eg,
  W_: () => em,
  Y: () => eh,
  Yi: () => et,
  b_: () => q,
  hX: () => $,
  iT: () => en,
  lV: () => J,
  ur: () => ei,
  wj: () => ee,
  xi: () => er
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk431279 = require("./431279.jsx"),
  Chunk794295 = require("./794295.jsx"),
  Chunk593472 = require("./593472.js"),
  Chunk110924 = require("./110924.js"),
  Chunk40330 = require("./40330.jsx"),
  Chunk249458 = require("./249458.js"),
  Chunk313201 = require("./313201.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk425886 = require("./425886.jsx"),
  Chunk80966 = require("./80966.jsx"),
  Chunk593545 = require("./593545.jsx"),
  Chunk479313 = require("./479313.js"),
  Chunk765104 = require("./765104.js"),
  Chunk505953 = require("./505953.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk201542 = require("./201542.jsx"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk589530 = require("./589530.js"),
  Chunk709054 = require("./709054.js"),
  Chunk217702 = require("./217702.js"),
  Chunk981631 = require("./981631.js"),
  Chunk420212 = require("./420212.js"),
  Chunk814249 = require("./814249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793398 = require("./793398.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
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

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i = z(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let q = {
    delay: 300,
    position: "top"
  },
  X = e => t => {
    null == e || e(t), (0, M.jA)(t)
  },
  Q = e => t => {
    null == e || e(t), (0, M.Zj)(t)
  };

function J(e) {
  var {
    onVolumeChange: t,
    onMute: n,
    volume: o,
    autoMute: a,
    alt: s,
    renderAdjacentContent: l,
    renderOverlayContent: c
  } = e, u = K(e, ["onVolumeChange", "onMute", "volume", "autoMute", "alt", "renderAdjacentContent", "renderOverlayContent"]);
  let d = X(t),
    f = Q(n);
  return o = null == o ? M.FC : o, a = null == a ? M.rs : a, (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(I.Z, W(H({}, u), {
      alt: s,
      volume: o,
      autoMute: a,
      onVolumeChange: d,
      onMute: f,
      renderLinkComponent: en,
      renderOverlayContent: c
    })), null != l && l()]
  })
}

function $(e) {
  var {
    onVolumeChange: t,
    volume: n,
    onMute: o,
    onVolumeShow: a,
    onVolumeHide: s,
    renderAdjacentContent: l
  } = e, c = K(e, ["onVolumeChange", "volume", "onMute", "onVolumeShow", "onVolumeHide", "renderAdjacentContent"]);
  let u = X(t),
    d = Q(o);
  n = null == n ? M.FC : n;
  let f = () => false;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(v.Z, W(H({}, c), {
      onVolumeChange: u,
      onMute: d,
      onVolumeShow: a,
      onVolumeHide: s,
      volume: n,
      autoMute: f,
      renderLinkComponent: en
    })), null != l && l()]
  })
}

function ee(e) {
  var {
    onVolumeChange: t,
    volume: n,
    onMute: i
  } = e, o = K(e, ["onVolumeChange", "volume", "onMute"]);
  let a = X(t),
    s = Q(i);
  return n = null == n ? M.FC : n, (0, r.jsx)(R.Z, W(H({}, o), {
    onVolumeChange: a,
    onMute: s,
    volume: n
  }))
}

function et(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: o,
    containerClassName: s,
    imageContainerClassName: l,
    disableAltTextDisplay: c = false,
    reducedSizeAltTextButton: u = false,
    mediaLayoutType: f,
    imageContainerStyle: _,
    mosaicStyleAlt: h
  } = e, m = f === j.hV.MOSAIC || true === h, g = !c && C.H1.getSetting() && null != t && "" !== t && true !== n, E = e => {
    let {
      altText: t
    } = e;
    return (0, r.jsxs)(d.VqE, {
      "aria-label": Z.intl.string(Z.t.fSiQ3N),
      className: F.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === G.mR.Escape && setTimeout(() => {
          var e;
          return null == (e = b.current) ? true : e.focus()
        }, 0)
      },
      children: [(0, r.jsx)("span", {
        className: F.mediaMosaicAltTextPopoutTitle,
        children: Z.intl.string(Z.t.fSiQ3N)
      }), (0, r.jsx)("span", {
        className: F.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, b = i.createRef();
  return (0, r.jsxs)("div", {
    className: a()(F.imageContent, s),
    children: [(0, r.jsxs)("div", {
      className: a()(F.imageContainer, l),
      style: _,
      children: [(0, r.jsx)(p.Z, H({}, e)), null != o && o()]
    }), m && g && (0, r.jsx)("div", {
      className: F.mediaMosaicAltTextContainer,
      children: (0, r.jsx)(d.yRy, {
        targetElementRef: b,
        animation: d.yRy.Animation.FADE,
        renderPopout: () => (0, r.jsx)(E, {
          altText: t
        }),
        children: e => (0, r.jsx)(d.tEY, {
          offset: 4,
          children: (0, r.jsx)("button", W(H({}, e), {
            type: "button",
            ref: b,
            "aria-label": Z.intl.string(Z.t.fSiQ3N),
            className: a()(F.mediaMosaicAltText, {
              [F.reducedSize]: u
            }),
            children: Z.intl.string(Z.t.jCV1T0)
          }))
        })
      })
    }), !m && g && (0, r.jsx)("span", {
      className: F.altText,
      children: t
    })]
  })
}

function en(e) {
  return (0, r.jsx)(h.Z, H({}, e))
}

function er(e) {
  var {
    renderAdjacentContent: t
  } = e, n = K(e, ["renderAdjacentContent"]);
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(T.Z, H({}, n)), null != t && t()]
  })
}

function ei(e) {
  return (0, r.jsx)(E.Z, H({}, e))
}
var eo = function(e) {
  return e[e.OLD_MESSAGES = 0] = "OLD_MESSAGES", e[e.REPLY = 1] = "REPLY", e
}({});

function ea(e) {
  switch (e) {
    case 0:
      return Z.intl.string(Z.t["4EvBb2"]);
    case 1:
      return Z.intl.string(Z.t["1J6Xq6"]);
    default:
      return (0, x.vE)(e)
  }
}

function es(e) {
  switch (e) {
    case 0:
      return Z.intl.string(Z.t.gpoQsL);
    case 1:
      return Z.intl.string(Z.t["k3RM8/"]);
    default:
      return (0, x.vE)(e)
  }
}
let el = e => {
    let {
      type: t = 0,
      onClick: n,
      className: i
    } = e;
    return (0, r.jsx)(b.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)("div", {
        onClick: n,
        className: a()(F.jumpToPresentBar, i),
        children: [(0, r.jsx)("div", {
          className: F.barButtonMain,
          children: ea(t)
        }), null != n ? (0, r.jsx)(d.tEY, {
          offset: false,
          children: (0, r.jsx)(d.zxk, {
            variant: "primary",
            size: "sm",
            text: es(t),
            onClick: n
          })
        }) : (0, r.jsx)(d.$jN, {
          type: d.$jN.Type.PULSING_ELLIPSIS,
          className: F.spinner,
          itemClassName: F.spinnerItem
        })]
      })
    })
  },
  ec = e => {
    let {
      onClick: t,
      loading: n,
      className: i
    } = e;
    return (0, r.jsx)(b.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)(d.P3F, {
        className: a()(F.messagesErrorBar, i),
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
          className: F.barButtonMain,
          children: Z.intl.string(Z.t["1zUvl5"])
        }), n ? (0, r.jsx)(d.$jN, {
          type: d.$jN.Type.PULSING_ELLIPSIS,
          className: F.spinner,
          itemClassName: F.spinnerItem
        }) : (0, r.jsx)("div", {
          className: F.barButtonAlt,
          children: Z.intl.string(Z.t.TdQXAw)
        })]
      })
    })
  };

function eu(e) {
  let {
    content: t,
    channelId: n
  } = e, [o] = i.useState(() => (0, y.hQ)("NewMessagesBarJumpToNewMessages_")), s = i.useCallback(() => {
    let e = P.ZP.ackMessageId(n);
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
    (0, _.In)(n, {
      section: U.jXE.NEW_MESSAGES_BANNER,
      object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
      objectType: U.Qqv.ACK_MANUAL
    })
  }, [n]), {
    disableInteractions: c
  } = i.useContext(b.G);
  return c ? null : (0, r.jsxs)("div", {
    className: a()(F.newMessagesBar, {
      [F.disableInteractions]: c
    }),
    children: [(0, r.jsx)(d.tEY, {
      offset: 4,
      children: (0, r.jsx)("button", {
        type: "button",
        className: F.barButtonMain,
        onClick: s,
        "aria-label": Z.intl.string(Z.t.z0Mkp6),
        "aria-describedby": o,
        children: (0, r.jsx)("span", {
          id: o,
          className: F.span,
          children: t
        })
      })
    }), (0, r.jsx)(d.tEY, {
      offset: 4,
      children: (0, r.jsxs)("button", {
        type: "button",
        onClick: l,
        className: F.barButtonAlt,
        children: [Z.intl.string(Z.t.e6RscX), (0, r.jsx)(d.eQA, {
          size: "md",
          color: "currentColor",
          className: F.barButtonIcon
        })]
      })
    })]
  })
}

function ed(e) {
  var t, n, o;
  let {
    channel: s,
    content: p,
    scrollManager: h
  } = e, {
    disableInteractions: E
  } = i.useContext(b.G), [y, v] = i.useState(null), I = i.useRef(null), [T, C] = i.useState(null), R = i.useRef(null), M = (0, u.Wu)([A.Z], () => {
    var e;
    return null != (e = A.Z.summaries(s.id)) ? e : []
  }, [s]), j = (0, g.Z)(M);
  i.useEffect(() => {
    l().isEqual(j, M) || L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: M.length,
      message_counts: M.map(e => e.count),
      start_message_ids: M.map(e => e.startId),
      end_message_ids: M.map(e => e.endId),
      num_participants: M.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    })
  }, [M, j, s.guild_id, s.id, s.type]);
  let G = (0, u.e7)([w.default], () => {
      var e;
      return null != (e = null == M ? true : M.map(e => {
        var t;
        return null == (t = e.people) ? true : t.map(e => {
          var t;
          return null != (t = w.default.getUser(e)) ? t : null
        }).filter(x.lm)
      })) ? e : []
    }, [M], e_),
    V = null != (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) ? n : false,
    H = null == M || null == (t = M[V]) ? true : t.topic;
  null == H && null == y && (null == M ? true : M.length) >= 1 && (H = null == (o = M[0]) ? true : o.topic);
  let Y = i.useMemo(() => l().debounce(e => {
      var t;
      v(null != (t = null == e ? true : e.id) ? t : null)
    }, 64), [v]),
    W = i.useMemo(() => l().throttle(() => {
      (0, S.yK)(null)
    }, 1200, {
      trailing: false
    }), []),
    K = i.useCallback(e => {
      W(), Y(e)
    }, [Y, W]),
    [z, q] = i.useState(false),
    X = i.useCallback(() => {
      L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !z,
        num_summaries: M.length,
        message_counts: M.map(e => e.count),
        start_message_ids: M.map(e => e.startId),
        end_message_ids: M.map(e => e.endId),
        num_participants: M.map(e => e.people.length),
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), q(!z)
    }, [z, M, q, s]),
    Q = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : B.DZ.PILL_DROPDOWN,
        n = M[e];
      if (null == n) return;
      (0, S.wv)(s.id, n.id), (0, S.yK)(s.id, n.id);
      let r = () => {
        h.removeScrollCompleteCallback(r), setTimeout(() => {
          h.addAutomaticAnchorCallback(K, false)
        }, 100)
      };
      h.removeAutomaticAnchorCallback(K), h.addScrollCompleteCallback(r), L.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), f.Z.jumpToMessage({
        channelId: s.id,
        messageId: n.startId,
        flash: true,
        offset: 0,
        jumpType: m.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [M, s, K, h]),
    J = i.useCallback(e => {
      var t;
      q(e);
      let n = null == (t = R.current) ? true : t.scrollTop;
      null != n && C(n)
    }, []);
  i.useEffect(() => {
    if (null != T && z) {
      var e;
      null == (e = R.current) || e.scrollTo({
        top: T
      })
    }
  }, [T, z]);
  let $ = i.useCallback(e => {
    var t;
    (0, c.k)(e.target) && (null == (t = I.current) ? true : t.contains(e.target)) || (z && L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: false,
      num_summaries: M.length,
      message_counts: M.map(e => e.count),
      start_message_ids: M.map(e => e.startId),
      end_message_ids: M.map(e => e.endId),
      num_participants: M.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }), J(false))
  }, [z, M, s, J]);
  i.useEffect(() => (h.addAutomaticAnchorCallback(K), () => {
    h.removeAutomaticAnchorCallback(K)
  }), [h, K]), i.useEffect(() => {
    (0, S.G1)(s.id)
  }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = i.useMemo(() => (0, r.jsx)(N.Z, {
      channel: s,
      summaries: M,
      summariesMembers: G,
      selectTopic: Q,
      setOpen: J
    }), [M, G, Q, J, s]),
    et = i.useCallback(() => {
      let e = P.ZP.ackMessageId(s.id);
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
      (0, _.In)(s.id, {
        section: U.jXE.NEW_TOPICS_BAR,
        object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
        objectType: U.Qqv.ACK_MANUAL
      })
    }, [s.id]),
    er = Z.intl.string(Z.t["38qwgI"]);
  return M.length > 0 && (er = "" === H || null == H ? Z.intl.string(Z.t.DwnFuL) : H), E ? null : (0, r.jsxs)("div", {
    ref: I,
    className: a()(F.newTopicsBarContainer, F.containerMarginTop),
    children: [(0, r.jsx)("div", {
      className: F.newTopicsBarTopicSection,
      children: (0, r.jsx)(d.P3F, {
        className: F.newTopicsBarTextClickable,
        "aria-label": Z.intl.string(Z.t.RT3MPz),
        onClick: X,
        children: (0, r.jsxs)("div", {
          className: a()({
            [F.newTopicsBarTextUnselected]: !z,
            [F.newTopicsBarTextSelected]: z
          }),
          children: [(0, r.jsx)(d.sVe, {
            size: "xs",
            color: "currentColor",
            className: F.newTopicsBarIcon
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: a()(F.newTopicsBarCompact, F.newTopicsBarText),
            children: er
          }), (0, r.jsx)(D.Z, {
            width: 16,
            height: 16,
            direction: D.Z.Directions.DOWN,
            className: F.newTopicsBarCaret
          })]
        })
      })
    }), (0, r.jsx)(d.P3F, {
      onClick: et,
      className: F.newTopicsBarInitial,
      children: p
    }), (0, r.jsxs)(d.P3F, {
      onClick: en,
      className: a()(F.barButtonAlt, F.flexEnd),
      children: [(0, r.jsx)("div", {
        className: F.newTopicsBarCompact,
        children: Z.intl.string(Z.t.e6RscX)
      }), (0, r.jsx)(d.eQA, {
        size: "md",
        color: "currentColor",
        className: F.barButtonIcon
      })]
    }), z && (0, r.jsxs)("div", {
      className: F.topicsDropdown,
      children: [(0, r.jsxs)("div", {
        className: F.topicsDropdownHeading,
        children: [(0, r.jsxs)("div", {
          className: F.topicsDropdownHeadingText,
          children: [(0, r.jsx)(d.sVe, {
            size: "custom",
            color: "currentColor",
            className: F.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, r.jsx)(d.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: Z.intl.string(Z.t.q21fUl)
          }), (0, r.jsx)(O.Z, {
            className: F.summariesBetaTag
          })]
        }), (0, r.jsx)(d.P3F, {
          "aria-label": Z.intl.string(Z.t.cpT0Cg),
          onClick: X,
          className: F.topicsDropdownClose,
          children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.Ttm, {
        ref: R,
        className: F.topicsScroller,
        fade: true,
        children: ee
      })]
    })]
  })
}

function ef(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e)
}

function e_(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => !ef(e, t[n]))
}

function ep(e) {
  var t, n, o;
  let {
    channel: s,
    scrollManager: _
  } = e, {
    disableInteractions: p
  } = i.useContext(b.G), [h, E] = i.useState(null), y = i.useRef(null), [v, I] = i.useState(null), T = i.useRef(null), C = (0, u.Wu)([A.Z], () => {
    var e;
    return null != (e = A.Z.summaries(s.id)) ? e : []
  }, [s]), R = (0, g.Z)(C);
  i.useEffect(() => {
    l().isEqual(R, C) || L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: C.length,
      message_counts: C.map(e => e.count),
      start_message_ids: C.map(e => e.startId),
      end_message_ids: C.map(e => e.endId),
      num_participants: C.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    })
  }, [C, R, s.guild_id, s.id, s.type]);
  let P = (0, u.e7)([w.default], () => {
      var e;
      return null != (e = null == C ? true : C.map(e => {
        var t;
        return null == (t = e.people) ? true : t.map(e => {
          var t;
          return null != (t = w.default.getUser(e)) ? t : null
        }).filter(x.lm)
      })) ? e : []
    }, [C], e_),
    M = null != (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) ? n : false,
    k = null == C || null == (t = C[M]) ? true : t.topic;
  null == k && null == h && (null == C ? true : C.length) >= 1 && (k = null == (o = C[0]) ? true : o.topic);
  let j = i.useMemo(() => l().get(C, M - 1), [M, C]),
    G = i.useMemo(() => l().get(C, M + 1), [M, C]),
    V = i.useMemo(() => l().debounce(e => {
      var t;
      E(null != (t = null == e ? true : e.id) ? t : null)
    }, 64), [E]),
    H = i.useMemo(() => l().throttle(() => {
      (0, S.yK)(null)
    }, 1200, {
      trailing: false
    }), []),
    Y = i.useCallback(e => {
      H(), V(e)
    }, [V, H]),
    [W, K] = i.useState(false),
    z = i.useCallback(() => {
      L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !W,
        num_summaries: C.length,
        message_counts: C.map(e => e.count),
        start_message_ids: C.map(e => e.startId),
        end_message_ids: C.map(e => e.endId),
        num_participants: C.map(e => e.people.length),
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), K(!W)
    }, [W, C, K, s]),
    q = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : B.DZ.PILL_DROPDOWN,
        n = C[e];
      if (null == n) return;
      (0, S.wv)(s.id, n.id), (0, S.yK)(s.id, n.id);
      let r = () => {
        _.removeScrollCompleteCallback(r), setTimeout(() => {
          _.addAutomaticAnchorCallback(Y, false)
        }, 100)
      };
      _.removeAutomaticAnchorCallback(Y), _.addScrollCompleteCallback(r), L.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), f.Z.jumpToMessage({
        channelId: s.id,
        messageId: n.startId,
        flash: true,
        offset: 0,
        jumpType: m.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [C, s, Y, _]),
    X = i.useCallback(() => {
      q(M - 1, B.DZ.PILL_NEXT_ARROW)
    }, [q, M]),
    Q = i.useCallback(() => {
      q(M + 1, B.DZ.PILL_PREVIOUS_ARROW)
    }, [M, q]),
    J = i.useCallback(e => {
      var t;
      K(e);
      let n = null == (t = T.current) ? true : t.scrollTop;
      null != n && I(n)
    }, []);
  i.useEffect(() => {
    if (null != v && W) {
      var e;
      null == (e = T.current) || e.scrollTo({
        top: v
      })
    }
  }, [v, W]);
  let $ = i.useCallback(e => {
    var t;
    (0, c.k)(e.target) && (null == (t = y.current) ? true : t.contains(e.target)) || (W && L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: false,
      num_summaries: C.length,
      message_counts: C.map(e => e.count),
      start_message_ids: C.map(e => e.startId),
      end_message_ids: C.map(e => e.endId),
      num_participants: C.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }), J(false))
  }, [W, C, s, J]);
  i.useEffect(() => (_.addAutomaticAnchorCallback(Y), () => {
    _.removeAutomaticAnchorCallback(Y)
  }), [_, Y]), i.useEffect(() => {
    (0, S.G1)(s.id)
  }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = i.useMemo(() => (0, r.jsx)(N.Z, {
    channel: s,
    summaries: C,
    summariesMembers: P,
    selectTopic: q,
    setOpen: J
  }), [C, P, q, J, s]);
  if (!(0, u.e7)([A.Z], () => A.Z.shouldShowTopicsBar())) return null;
  let et = Z.intl.string(Z.t["38qwgI"]);
  return C.length > 0 && (et = "" === k || null == k ? Z.intl.string(Z.t.DwnFuL) : k), p ? null : (0, r.jsxs)("div", {
    ref: y,
    className: a()(F.topicsPillContainer, F.containerMarginTop),
    children: [(0, r.jsxs)("div", {
      className: F.topicsPill,
      children: [(0, r.jsx)(d.P3F, {
        className: F.topicsPillText,
        "aria-label": Z.intl.string(Z.t.RT3MPz),
        onClick: z,
        children: (0, r.jsxs)("div", {
          className: a()({
            [F.topicsPillTextUnselected]: !W,
            [F.topicsPillTextSelected]: W
          }),
          children: [(0, r.jsx)(d.sVe, {
            size: "xs",
            color: "currentColor",
            className: F.topicsPillSummaryIcon
          }), (0, r.jsx)(d.Text, {
            className: F.topicsPillTextTitle,
            variant: "text-sm/medium",
            children: et
          }), (0, r.jsx)(D.Z, {
            width: 16,
            height: 16,
            direction: D.Z.Directions.DOWN,
            className: F.topicsPillDropdownCaret
          })]
        })
      }), (0, r.jsxs)("div", {
        className: F.topicsPillCarets,
        children: [(0, r.jsx)(d.P3F, {
          "aria-label": Z.intl.string(Z.t["4huCnJ"]),
          onClick: Q,
          className: a()(F.topicsPillCaret, F.topicsCaretLeft, {
            [F.topicsPillCaretDisabled]: null == G
          }),
          children: (0, r.jsx)(D.Z, {
            width: 16,
            height: 16,
            direction: D.Z.Directions.UP
          })
        }), (0, r.jsx)(d.P3F, {
          "aria-label": Z.intl.string(Z.t["58KOoK"]),
          onClick: X,
          className: a()(F.topicsPillCaret, F.topicsCaretRight, {
            [F.topicsPillCaretDisabled]: null == j
          }),
          children: (0, r.jsx)(D.Z, {
            width: 16,
            height: 16,
            direction: D.Z.Directions.DOWN
          })
        })]
      })]
    }), W && (0, r.jsxs)("div", {
      className: F.topicsDropdown,
      children: [(0, r.jsxs)("div", {
        className: F.topicsDropdownHeading,
        children: [(0, r.jsxs)("div", {
          className: F.topicsDropdownHeadingText,
          children: [(0, r.jsx)(d.sVe, {
            size: "custom",
            color: "currentColor",
            className: F.topicsPillHeadingIcon,
            width: 18,
            height: 20
          }), (0, r.jsx)(d.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: Z.intl.string(Z.t.q21fUl)
          }), (0, r.jsx)(O.Z, {
            className: F.summariesBetaTag
          })]
        }), (0, r.jsx)(d.P3F, {
          "aria-label": Z.intl.string(Z.t.cpT0Cg),
          onClick: z,
          className: F.topicsDropdownClose,
          children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.Ttm, {
        ref: T,
        className: F.topicsScroller,
        fade: true,
        children: ee
      })]
    })]
  })
}
let eh = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return (0, r.jsxs)("div", {
      className: F.tooltip,
      children: [(0, r.jsx)(d.Text, {
        color: "none",
        variant: "text-sm/semibold",
        lineClamp: 1,
        className: F.tooltipEmojiName,
        children: e
      }), t && (0, r.jsx)(d.Text, {
        className: F.clickCTA,
        color: "text-muted",
        variant: "text-sm/normal",
        children: Z.intl.string(Z.t["515vjI"])
      })]
    })
  },
  em = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(F.popoutContainer, n),
      children: t
    })
  },
  eg = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(em, {
      className: t,
      children: (0, r.jsx)("div", {
        className: F.popoutLoadingBackground,
        children: (0, r.jsx)("div", {
          className: F.popoutLoadingForeground
        })
      })
    })
  }