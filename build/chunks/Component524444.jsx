/** Chunk was on web.js **/
/** chunk id: 524444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A7: () => eo,
  BO: () => em,
  DR: () => ec,
  G5: () => ef,
  LE: () => ed,
  Rp: () => eu,
  SE: () => eE,
  W_: () => eg,
  Y: () => eh,
  Yi: () => en,
  b_: () => q,
  hX: () => ee,
  iT: () => er,
  lV: () => $,
  ur: () => ea,
  wj: () => et,
  xi: () => ei
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk814249 = require("./814249.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk180376 = require("./180376.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let q = {
    delay: 300,
    position: "top"
  },
  Q = e => t => {
    null == e || e(t), (0, j.jA)(t)
  },
  X = e => t => {
    null == e || e(t), (0, j.Zj)(t)
  };

function J(e) {
  var {
    onVolumeChange: t,
    onMute: n,
    volume: a,
    autoMute: s,
    alt: l,
    renderAdjacentContent: c,
    renderOverlayContent: u,
    disableAltTextDisplay: f = false,
    hiddenSpoilers: p,
    mosaicStyleAlt: _,
    mediaLayoutType: m,
    reducedSizeAltTextButton: h
  } = e, g = K(e, ["onVolumeChange", "onMute", "volume", "autoMute", "alt", "renderAdjacentContent", "renderOverlayContent", "disableAltTextDisplay", "hiddenSpoilers", "mosaicStyleAlt", "mediaLayoutType", "reducedSizeAltTextButton"]);
  let E = Q(t),
    b = X(n);
  a = null == a ? j.FC : a, s = null == s ? j.rs : s;
  let [y, O] = i.useState(true), [v, I] = i.useState(false), T = m === k.hV.MOSAIC || true === _, C = (y || v) && !f && N.H1.getSetting() && null != l && "" !== l && true !== p, A = e => {
    let {
      altText: t
    } = e;
    return (0, r.jsxs)(d.VqE, {
      "aria-label": B.intl.string(B.t.fSiQ3A),
      className: F.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === Z.mR.Escape && setTimeout(() => {
          var e;
          return null == (e = P.current) ? true : e.focus()
        }, 0)
      },
      children: [(0, r.jsx)("span", {
        className: F.mediaMosaicAltTextPopoutTitle,
        children: B.intl.string(B.t.fSiQ3A)
      }), (0, r.jsx)("span", {
        className: F.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, P = i.useRef(null);
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(S.Z, W(H({}, g), {
      alt: l,
      autoMute: s,
      mediaLayoutType: m,
      onControlsHide: () => O(false),
      onControlsShow: () => O(true),
      onMute: b,
      onVolumeChange: E,
      renderLinkComponent: er,
      renderOverlayContent: u,
      volume: a
    })), null != c && c(), T && C && (0, r.jsx)("div", {
      className: F.mediaMosaicVideoAltTextContainer,
      children: (0, r.jsx)(d.yRy, {
        targetElementRef: P,
        animation: d.yRy.Animation.FADE,
        renderPopout: () => (0, r.jsx)(A, {
          altText: l
        }),
        children: e => (0, r.jsx)(d.tEY, {
          offset: 4,
          children: (0, r.jsx)("button", W(H({}, e), {
            type: "button",
            ref: P,
            "aria-label": B.intl.string(B.t.fSiQ3A),
            onMouseEnter: () => I(true),
            onMouseLeave: () => I(false),
            className: o()(F.mediaMosaicAltText, {
              [F.mediaMosaicVideoAltText]: true,
              [F.reducedSize]: h
            }),
            children: B.intl.string(B.t.jCV1Tz)
          }))
        })
      })
    }), !T && C && (0, r.jsx)("span", {
      className: F.altText,
      children: l
    })]
  })
}

function $(e) {
  return (0, r.jsx)(J, H({}, e))
}

function ee(e) {
  var {
    onVolumeChange: t,
    volume: n,
    onMute: a,
    onVolumeShow: o,
    onVolumeHide: s,
    renderAdjacentContent: l
  } = e, c = K(e, ["onVolumeChange", "volume", "onMute", "onVolumeShow", "onVolumeHide", "renderAdjacentContent"]);
  let u = Q(t),
    d = X(a);
  n = null == n ? j.FC : n;
  let f = () => false;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(v.Z, W(H({}, c), {
      onVolumeChange: u,
      onMute: d,
      onVolumeShow: o,
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
  } = e, a = K(e, ["onVolumeChange", "volume", "onMute"]);
  let o = Q(t),
    s = X(i);
  return n = null == n ? j.FC : n, (0, r.jsx)(P.Z, W(H({}, a), {
    onVolumeChange: o,
    onMute: s,
    volume: n
  }))
}

function en(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: a,
    containerClassName: s,
    imageContainerClassName: l,
    disableAltTextDisplay: c = false,
    reducedSizeAltTextButton: u = false,
    mediaLayoutType: f,
    imageContainerStyle: p,
    mosaicStyleAlt: m
  } = e, h = f === k.hV.MOSAIC || true === m, g = !c && N.H1.getSetting() && null != t && "" !== t && true !== n, E = e => {
    let {
      altText: t
    } = e;
    return (0, r.jsxs)(d.VqE, {
      "aria-label": B.intl.string(B.t.fSiQ3A),
      className: F.mediaMosaicAltTextPopout,
      onKeyDown: e => {
        e.key === Z.mR.Escape && setTimeout(() => {
          var e;
          return null == (e = b.current) ? true : e.focus()
        }, 0)
      },
      children: [(0, r.jsx)("span", {
        className: F.mediaMosaicAltTextPopoutTitle,
        children: B.intl.string(B.t.fSiQ3A)
      }), (0, r.jsx)("span", {
        className: F.mediaMosaicAltTextPopoutDescription,
        children: t
      })]
    })
  }, b = i.createRef();
  return (0, r.jsxs)("div", {
    className: o()(F.imageContent, s),
    children: [(0, r.jsxs)("div", {
      className: o()(F.imageContainer, l),
      style: p,
      children: [(0, r.jsx)(_.Z, H({}, e)), null != a && a()]
    }), h && g && (0, r.jsx)("div", {
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
            "aria-label": B.intl.string(B.t.fSiQ3A),
            className: o()(F.mediaMosaicAltText, {
              [F.reducedSize]: u
            }),
            children: B.intl.string(B.t.jCV1Tz)
          }))
        })
      })
    }), !h && g && (0, r.jsx)("span", {
      className: F.altText,
      children: t
    })]
  })
}

function er(e) {
  return (0, r.jsx)(m.Z, H({}, e))
}

function ei(e) {
  var {
    renderAdjacentContent: t
  } = e, n = K(e, ["renderAdjacentContent"]);
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(I.Z, H({}, n)), null != t && t()]
  })
}

function ea(e) {
  return (0, r.jsx)(E.Z, H({}, e))
}
var eo = function(e) {
  return e[e.OLD_MESSAGES = 0] = "OLD_MESSAGES", e[e.REPLY = 1] = "REPLY", e
}({});

function es(e) {
  switch (e) {
    case 0:
      return B.intl.string(B.t["4EvBbw"]);
    case 1:
      return B.intl.string(B.t["1J6Xq7"]);
    default:
      return (0, L.vE)(e)
  }
}

function el(e) {
  switch (e) {
    case 0:
      return B.intl.string(B.t.gpoQsB);
    case 1:
      return B.intl.string(B.t.k3RM8z);
    default:
      return (0, L.vE)(e)
  }
}
let ec = e => {
    let {
      type: t = 0,
      onClick: n,
      className: i
    } = e;
    return (0, r.jsx)(b.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)("div", {
        onClick: n,
        className: o()(F.jumpToPresentBar, i),
        children: [(0, r.jsx)("div", {
          className: F.barButtonMain,
          children: es(t)
        }), null != n ? (0, r.jsx)(d.tEY, {
          offset: false,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: el(t),
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
  eu = e => {
    let {
      onClick: t,
      loading: n,
      className: i
    } = e;
    return (0, r.jsx)(b.G.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)(d.P3F, {
        className: o()(F.messagesErrorBar, i),
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
          children: B.intl.string(B.t["1zUvlw"])
        }), n ? (0, r.jsx)(d.$jN, {
          type: d.$jN.Type.PULSING_ELLIPSIS,
          className: F.spinner,
          itemClassName: F.spinnerItem
        }) : (0, r.jsx)("div", {
          className: F.barButtonAlt,
          children: B.intl.string(B.t.TdQXA8)
        })]
      })
    })
  };

function ed(e) {
  let {
    content: t,
    channelId: n
  } = e, [a] = i.useState(() => (0, y.hQ)("NewMessagesBarJumpToNewMessages_")), s = i.useCallback(() => {
    let e = R.ZP.ackMessageId(n);
    null != e ? f.Z.jumpToMessage({
      channelId: n,
      messageId: e,
      offset: 1,
      context: "Mark As Read"
    }) : f.Z.jumpToMessage({
      channelId: n,
      messageId: M.default.castChannelIdAsMessageId(n),
      offset: 1,
      context: "Mark As Read"
    })
  }, [n]), l = i.useCallback(() => {
    (0, p.ack)(n, {
      section: U.jXE.NEW_MESSAGES_BANNER,
      object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
      objectType: U.AnalyticsObjectTypes.ACK_MANUAL
    })
  }, [n]), {
    disableInteractions: c
  } = i.useContext(b.G);
  return c ? null : (0, r.jsxs)("div", {
    className: o()(F.newMessagesBar, {
      [F.disableInteractions]: c
    }),
    children: [(0, r.jsx)(d.tEY, {
      offset: 4,
      children: (0, r.jsx)("button", {
        type: "button",
        className: F.barButtonMain,
        onClick: s,
        "aria-label": B.intl.string(B.t.z0Mkp3),
        "aria-describedby": a,
        children: (0, r.jsx)("span", {
          id: a,
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
        children: [B.intl.string(B.t.e6RscS), (0, r.jsx)(d.eQA, {
          size: "md",
          color: "currentColor",
          className: F.barButtonIcon
        })]
      })
    })]
  })
}

function ef(e) {
  var t, n, a;
  let {
    channel: s,
    content: _,
    scrollManager: m
  } = e, {
    disableInteractions: E
  } = i.useContext(b.G), [y, v] = i.useState(null), S = i.useRef(null), [I, N] = i.useState(null), P = i.useRef(null), j = (0, u.Wu)([C.Z], () => {
    var e;
    return null != (e = C.Z.summaries(s.id)) ? e : []
  }, [s]), k = (0, g.Z)(j);
  i.useEffect(() => {
    l().isEqual(k, j) || x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: j.length,
      message_counts: j.map(e => e.count),
      start_message_ids: j.map(e => e.startId),
      end_message_ids: j.map(e => e.endId),
      num_participants: j.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    })
  }, [j, k, s.guild_id, s.id, s.type]);
  let Z = (0, u.e7)([w.default], () => {
      var e;
      return null != (e = null == j ? true : j.map(e => {
        var t;
        return null == (t = e.people) ? true : t.map(e => {
          var t;
          return null != (t = w.default.getUser(e)) ? t : null
        }).filter(L.lm)
      })) ? e : []
    }, [j], e_),
    V = null != (n = (0, u.e7)([C.Z], () => C.Z.visibleSummaryIndex())) ? n : false,
    H = null == j || null == (t = j[V]) ? true : t.topic;
  null == H && null == y && (null == j ? true : j.length) >= 1 && (H = null == (a = j[0]) ? true : a.topic);
  let Y = i.useMemo(() => l().debounce(e => {
      var t;
      v(null != (t = null == e ? true : e.id) ? t : null)
    }, 64), [v]),
    W = i.useMemo(() => l().throttle(() => {
      (0, T.yK)(null)
    }, 1200, {
      trailing: false
    }), []),
    K = i.useCallback(e => {
      W(), Y(e)
    }, [Y, W]),
    [z, q] = i.useState(false),
    Q = i.useCallback(() => {
      x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !z,
        num_summaries: j.length,
        message_counts: j.map(e => e.count),
        start_message_ids: j.map(e => e.startId),
        end_message_ids: j.map(e => e.endId),
        num_participants: j.map(e => e.people.length),
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), q(!z)
    }, [z, j, q, s]),
    X = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : G.DZ.PILL_DROPDOWN,
        n = j[e];
      if (null == n) return;
      (0, T.wv)(s.id, n.id), (0, T.yK)(s.id, n.id);
      let r = () => {
        m.removeScrollCompleteCallback(r), setTimeout(() => {
          m.addAutomaticAnchorCallback(K, false)
        }, 100)
      };
      m.removeAutomaticAnchorCallback(K), m.addScrollCompleteCallback(r), x.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
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
        jumpType: h.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [j, s, K, m]),
    J = i.useCallback(e => {
      var t;
      q(e);
      let n = null == (t = P.current) ? true : t.scrollTop;
      null != n && N(n)
    }, []);
  i.useEffect(() => {
    if (null != I && z) {
      var e;
      null == (e = P.current) || e.scrollTo({
        top: I
      })
    }
  }, [I, z]);
  let $ = i.useCallback(e => {
    var t;
    (0, c.kK)(e.target) && (null == (t = S.current) ? true : t.contains(e.target)) || (z && x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: false,
      num_summaries: j.length,
      message_counts: j.map(e => e.count),
      start_message_ids: j.map(e => e.startId),
      end_message_ids: j.map(e => e.endId),
      num_participants: j.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }), J(false))
  }, [z, j, s, J]);
  i.useEffect(() => (m.addAutomaticAnchorCallback(K), () => {
    m.removeAutomaticAnchorCallback(K)
  }), [m, K]), i.useEffect(() => {
    (0, T.G1)(s.id)
  }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = i.useMemo(() => (0, r.jsx)(A.Z, {
      channel: s,
      summaries: j,
      summariesMembers: Z,
      selectTopic: X,
      setOpen: J
    }), [j, Z, X, J, s]),
    et = i.useCallback(() => {
      let e = R.ZP.ackMessageId(s.id);
      null != e ? f.Z.jumpToMessage({
        channelId: s.id,
        messageId: e,
        offset: 1,
        context: "Mark As Read"
      }) : f.Z.jumpToMessage({
        channelId: s.id,
        messageId: M.default.castChannelIdAsMessageId(s.id),
        offset: 1,
        context: "Mark As Read"
      })
    }, [s.id]),
    en = i.useCallback(() => {
      (0, p.ack)(s.id, {
        section: U.jXE.NEW_TOPICS_BAR,
        object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
        objectType: U.AnalyticsObjectTypes.ACK_MANUAL
      })
    }, [s.id]),
    er = B.intl.string(B.t["38qwgO"]);
  return j.length > 0 && (er = "" === H || null == H ? B.intl.string(B.t.DwnFuG) : H), E ? null : (0, r.jsxs)("div", {
    ref: S,
    className: o()(F.newTopicsBarContainer, F.containerMarginTop),
    children: [(0, r.jsx)("div", {
      className: F.newTopicsBarTopicSection,
      children: (0, r.jsx)(d.P3F, {
        className: F.newTopicsBarTextClickable,
        "aria-label": B.intl.string(B.t.RT3MPz),
        onClick: Q,
        children: (0, r.jsxs)("div", {
          className: o()({
            [F.newTopicsBarTextUnselected]: !z,
            [F.newTopicsBarTextSelected]: z
          }),
          children: [(0, r.jsx)(d.sVe, {
            size: "xs",
            color: "currentColor",
            className: F.newTopicsBarIcon
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: o()(F.newTopicsBarCompact, F.newTopicsBarText),
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
      children: _
    }), (0, r.jsxs)(d.P3F, {
      onClick: en,
      className: o()(F.barButtonAlt, F.flexEnd),
      children: [(0, r.jsx)("div", {
        className: F.newTopicsBarCompact,
        children: B.intl.string(B.t.e6RscS)
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
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: B.intl.string(B.t.q21fUr)
          }), (0, r.jsx)(O.Z, {
            className: F.summariesBetaTag
          })]
        }), (0, r.jsx)(d.P3F, {
          "aria-label": B.intl.string(B.t.cpT0Cq),
          onClick: Q,
          className: F.topicsDropdownClose,
          children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.Ttm, {
        ref: P,
        className: F.topicsScroller,
        fade: true,
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

function em(e) {
  var t, n, a;
  let {
    channel: s,
    scrollManager: p
  } = e, {
    disableInteractions: _
  } = i.useContext(b.G), [m, E] = i.useState(null), y = i.useRef(null), [v, S] = i.useState(null), I = i.useRef(null), N = (0, u.Wu)([C.Z], () => {
    var e;
    return null != (e = C.Z.summaries(s.id)) ? e : []
  }, [s]), P = (0, g.Z)(N);
  i.useEffect(() => {
    l().isEqual(P, N) || x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: N.length,
      message_counts: N.map(e => e.count),
      start_message_ids: N.map(e => e.startId),
      end_message_ids: N.map(e => e.endId),
      num_participants: N.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    })
  }, [N, P, s.guild_id, s.id, s.type]);
  let R = (0, u.e7)([w.default], () => {
      var e;
      return null != (e = null == N ? true : N.map(e => {
        var t;
        return null == (t = e.people) ? true : t.map(e => {
          var t;
          return null != (t = w.default.getUser(e)) ? t : null
        }).filter(L.lm)
      })) ? e : []
    }, [N], e_),
    j = null != (n = (0, u.e7)([C.Z], () => C.Z.visibleSummaryIndex())) ? n : false,
    M = null == N || null == (t = N[j]) ? true : t.topic;
  null == M && null == m && (null == N ? true : N.length) >= 1 && (M = null == (a = N[0]) ? true : a.topic);
  let k = i.useMemo(() => l().get(N, j - 1), [j, N]),
    Z = i.useMemo(() => l().get(N, j + 1), [j, N]),
    V = i.useMemo(() => l().debounce(e => {
      var t;
      E(null != (t = null == e ? true : e.id) ? t : null)
    }, 64), [E]),
    H = i.useMemo(() => l().throttle(() => {
      (0, T.yK)(null)
    }, 1200, {
      trailing: false
    }), []),
    Y = i.useCallback(e => {
      H(), V(e)
    }, [V, H]),
    [W, K] = i.useState(false),
    z = i.useCallback(() => {
      x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !W,
        num_summaries: N.length,
        message_counts: N.map(e => e.count),
        start_message_ids: N.map(e => e.startId),
        end_message_ids: N.map(e => e.endId),
        num_participants: N.map(e => e.people.length),
        guild_id: s.guild_id,
        channel_id: s.id,
        channel_type: s.type
      }), K(!W)
    }, [W, N, K, s]),
    q = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : G.DZ.PILL_DROPDOWN,
        n = N[e];
      if (null == n) return;
      (0, T.wv)(s.id, n.id), (0, T.yK)(s.id, n.id);
      let r = () => {
        p.removeScrollCompleteCallback(r), setTimeout(() => {
          p.addAutomaticAnchorCallback(Y, false)
        }, 100)
      };
      p.removeAutomaticAnchorCallback(Y), p.addScrollCompleteCallback(r), x.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
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
        jumpType: h.SR.ANIMATED,
        context: "Summary Jump"
      })
    }, [N, s, Y, p]),
    Q = i.useCallback(() => {
      q(j - 1, G.DZ.PILL_NEXT_ARROW)
    }, [q, j]),
    X = i.useCallback(() => {
      q(j + 1, G.DZ.PILL_PREVIOUS_ARROW)
    }, [j, q]),
    J = i.useCallback(e => {
      var t;
      K(e);
      let n = null == (t = I.current) ? true : t.scrollTop;
      null != n && S(n)
    }, []);
  i.useEffect(() => {
    if (null != v && W) {
      var e;
      null == (e = I.current) || e.scrollTo({
        top: v
      })
    }
  }, [v, W]);
  let $ = i.useCallback(e => {
    var t;
    (0, c.kK)(e.target) && (null == (t = y.current) ? true : t.contains(e.target)) || (W && x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: false,
      num_summaries: N.length,
      message_counts: N.map(e => e.count),
      start_message_ids: N.map(e => e.startId),
      end_message_ids: N.map(e => e.endId),
      num_participants: N.map(e => e.people.length),
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }), J(false))
  }, [W, N, s, J]);
  i.useEffect(() => (p.addAutomaticAnchorCallback(Y), () => {
    p.removeAutomaticAnchorCallback(Y)
  }), [p, Y]), i.useEffect(() => {
    (0, T.G1)(s.id)
  }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
    document.removeEventListener("mousedown", $)
  }), [$]);
  let ee = i.useMemo(() => (0, r.jsx)(A.Z, {
    channel: s,
    summaries: N,
    summariesMembers: R,
    selectTopic: q,
    setOpen: J
  }), [N, R, q, J, s]);
  if (!(0, u.e7)([C.Z], () => C.Z.shouldShowTopicsBar())) return null;
  let et = B.intl.string(B.t["38qwgO"]);
  return N.length > 0 && (et = "" === M || null == M ? B.intl.string(B.t.DwnFuG) : M), _ ? null : (0, r.jsxs)("div", {
    ref: y,
    className: o()(F.topicsPillContainer, F.containerMarginTop),
    children: [(0, r.jsxs)("div", {
      className: F.topicsPill,
      children: [(0, r.jsx)(d.P3F, {
        className: F.topicsPillText,
        "aria-label": B.intl.string(B.t.RT3MPz),
        onClick: z,
        children: (0, r.jsxs)("div", {
          className: o()({
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
          "aria-label": B.intl.string(B.t["4huCnC"]),
          onClick: X,
          className: o()(F.topicsPillCaret, F.topicsCaretLeft, {
            [F.topicsPillCaretDisabled]: null == Z
          }),
          children: (0, r.jsx)(D.Z, {
            width: 16,
            height: 16,
            direction: D.Z.Directions.UP
          })
        }), (0, r.jsx)(d.P3F, {
          "aria-label": B.intl.string(B.t["58KOoF"]),
          onClick: Q,
          className: o()(F.topicsPillCaret, F.topicsCaretRight, {
            [F.topicsPillCaretDisabled]: null == k
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
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-md/bold",
            color: "header-primary",
            lineClamp: 1,
            children: B.intl.string(B.t.q21fUr)
          }), (0, r.jsx)(O.Z, {
            className: F.summariesBetaTag
          })]
        }), (0, r.jsx)(d.P3F, {
          "aria-label": B.intl.string(B.t.cpT0Cq),
          onClick: z,
          className: F.topicsDropdownClose,
          children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.Ttm, {
        ref: I,
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
        children: B.intl.string(B.t["515vjG"])
      })]
    })
  },
  eg = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: o()(F.popoutContainer, n),
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
        className: F.popoutLoadingBackground,
        children: (0, r.jsx)("div", {
          className: F.popoutLoadingForeground
        })
      })
    })
  }