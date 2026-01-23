/** Chunk was on web.js **/
/** chunk id: 652176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $o: () => J,
  Ab: () => ec,
  Dk: () => ea,
  Ez: () => eu,
  GN: () => ed,
  LL: () => en,
  OZ: () => ef,
  P$: () => et,
  UK: () => eh,
  Uk: () => X,
  Uq: () => eg,
  Y0: () => eE,
  _d: () => ei,
  bU: () => er,
  gL: () => ee,
  ks: () => es,
  yR: () => em
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk334738 = require("./334738.js"),
  Chunk490693 = require("./490693.jsx"),
  Chunk9578 = require("./9578.jsx"),
  Chunk56562 = require("./56562.js"),
  Chunk475743 = require("./475743.js"),
  Chunk718468 = require("./718468.jsx"),
  Chunk692051 = require("./692051.js"),
  Chunk915089 = require("./915089.js"),
  Chunk611371 = require("./611371.jsx"),
  Chunk74068 = require("./74068.jsx"),
  Chunk248643 = require("./248643.jsx"),
  Chunk752063 = require("./752063.jsx"),
  Chunk863922 = require("./863922.js"),
  Chunk513272 = require("./513272.js"),
  Chunk977463 = require("./977463.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk41431 = require("./41431.jsx"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk587481 = require("./587481.js"),
  Chunk661191 = require("./661191.js"),
  Chunk838541 = require("./838541.js"),
  Chunk652215 = require("./652215.js"),
  Chunk521732 = require("./521732.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk702926 = require("./702926.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
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

function W(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = q(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let X = {
    delay: 300,
    position: "top"
  },
  Z = e => t => {
    null == e || e(t), (0, j.ls)(t)
  },
  Q = e => t => {
    null == e || e(t), (0, j.y5)(t)
  };

function $(e) {
  let {
    onVolumeChange: t,
    onMute: n,
    volume: a,
    autoMute: o,
    alt: l,
    renderAdjacentContent: c,
    renderOverlayContent: u,
    disableAltTextDisplay: f = false,
    hiddenSpoilers: p,
    mosaicStyleAlt: _,
    mediaLayoutType: h,
    reducedSizeAltTextButton: m
  } = e, g = z(e, ["onVolumeChange", "onMute", "volume", "autoMute", "alt", "renderAdjacentContent", "renderOverlayContent", "disableAltTextDisplay", "hiddenSpoilers", "mosaicStyleAlt", "mediaLayoutType", "reducedSizeAltTextButton"]), E = Z(t), y = Q(n);
  a = null == a ? j.v1 : a, o = null == o ? j.uj : o;
  let [b, O] = i.useState(true), [v, I] = i.useState(false), S = h === k.dG.MOSAIC || true === _, T = (b || v) && !f && N._z.getSetting() && null != l && "" !== l && true !== p, C = e => {
    let {
      altText: t
    } = e;
    return (0, r.jsxs)(d.lGe, {
      "aria-label": F.intl.string(F.t.fSiQ3A),
      className: B.ob,
      onKeyDown: e => {
        e.key === V.N$.Escape && setTimeout(() => {
          var e;
          return null == (e = R.current) ? true : e.focus()
        }, 0)
      },
      children: [(0, r.jsx)("span", {
        className: B.k_,
        children: F.intl.string(F.t.fSiQ3A)
      }), (0, r.jsx)("span", {
        className: B.a7,
        children: t
      })]
    })
  }, R = i.useRef(null);
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(A.A, K(Y({}, g), {
      alt: l,
      autoMute: o,
      mediaLayoutType: h,
      onControlsHide: () => O(false),
      onControlsShow: () => O(true),
      onMute: y,
      onVolumeChange: E,
      renderLinkComponent: er,
      renderOverlayContent: u,
      volume: a
    })), null != c && c(), S && T && (0, r.jsx)("div", {
      className: B.NO,
      children: (0, r.jsx)(d.YNO, {
        targetElementRef: R,
        animation: d.YNO.Animation.FADE,
        renderPopout: () => (0, r.jsx)(C, {
          altText: l
        }),
        children: e => (0, r.jsx)(d.vN3, {
          offset: 4,
          children: (0, r.jsx)("button", K(Y({}, e), {
            type: "button",
            ref: R,
            "aria-label": F.intl.string(F.t.fSiQ3A),
            onMouseEnter: () => I(true),
            onMouseLeave: () => I(false),
            className: s()(B.DV, {
              [B.yZ]: true,
              [B.I5]: m
            }),
            children: F.intl.string(F.t.jCV1Tz)
          }))
        })
      })
    }), !S && T && (0, r.jsx)("span", {
      className: B.R5,
      children: l
    })]
  })
}

function J(e) {
  return (0, r.jsx)($, Y({}, e))
}

function ee(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: a,
    onVolumeShow: s,
    onVolumeHide: o,
    renderAdjacentContent: l
  } = e, c = z(e, ["onVolumeChange", "volume", "onMute", "onVolumeShow", "onVolumeHide", "renderAdjacentContent"]), u = Z(t), d = Q(a);
  n = null == n ? j.v1 : n;
  let f = () => false;
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(v.A, K(Y({}, c), {
      onVolumeChange: u,
      onMute: d,
      onVolumeShow: s,
      onVolumeHide: o,
      volume: n,
      autoMute: f,
      renderLinkComponent: er
    })), null != l && l()]
  })
}

function et(e) {
  let {
    onVolumeChange: t,
    volume: n,
    onMute: i
  } = e, a = z(e, ["onVolumeChange", "volume", "onMute"]), s = Z(t), o = Q(i);
  return n = null == n ? j.v1 : n, (0, r.jsx)(R.A, K(Y({}, a), {
    onVolumeChange: s,
    onMute: o,
    volume: n
  }))
}

function en(e) {
  let {
    alt: t,
    hiddenSpoilers: n,
    renderAdjacentContent: a,
    containerClassName: o,
    imageContainerClassName: l,
    disableAltTextDisplay: c = false,
    reducedSizeAltTextButton: u = false,
    mediaLayoutType: f,
    imageContainerStyle: p,
    mosaicStyleAlt: h
  } = e, m = f === k.dG.MOSAIC || true === h, g = !c && N._z.getSetting() && null != t && "" !== t && true !== n, E = e => {
    let {
      altText: t
    } = e;
    return (0, r.jsxs)(d.lGe, {
      "aria-label": F.intl.string(F.t.fSiQ3A),
      className: B.ob,
      onKeyDown: e => {
        e.key === V.N$.Escape && setTimeout(() => {
          var e;
          return null == (e = y.current) ? true : e.focus()
        }, 0)
      },
      children: [(0, r.jsx)("span", {
        className: B.k_,
        children: F.intl.string(F.t.fSiQ3A)
      }), (0, r.jsx)("span", {
        className: B.a7,
        children: t
      })]
    })
  }, y = i.createRef();
  return (0, r.jsxs)("div", {
    className: s()(B.fo, o),
    children: [(0, r.jsxs)("div", {
      className: s()(B.ZS, l),
      style: p,
      children: [(0, r.jsx)(_.A, Y({}, e)), null != a && a()]
    }), m && g && (0, r.jsx)("div", {
      className: B.Y1,
      children: (0, r.jsx)(d.YNO, {
        targetElementRef: y,
        animation: d.YNO.Animation.FADE,
        renderPopout: () => (0, r.jsx)(E, {
          altText: t
        }),
        children: e => (0, r.jsx)(d.vN3, {
          offset: 4,
          children: (0, r.jsx)("button", K(Y({}, e), {
            type: "button",
            ref: y,
            "aria-label": F.intl.string(F.t.fSiQ3A),
            className: s()(B.DV, {
              [B.I5]: u
            }),
            children: F.intl.string(F.t.jCV1Tz)
          }))
        })
      })
    }), !m && g && (0, r.jsx)("span", {
      className: B.R5,
      children: t
    })]
  })
}

function er(e) {
  return (0, r.jsx)(h.A, Y({}, e))
}

function ei(e) {
  let {
    renderAdjacentContent: t
  } = e, n = z(e, ["renderAdjacentContent"]);
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(I.A, Y({}, n)), null != t && t()]
  })
}

function ea(e) {
  return (0, r.jsx)(E.A, Y({}, e))
}
var es = function(e) {
  return e[e.OLD_MESSAGES = 0] = "OLD_MESSAGES", e[e.REPLY = 1] = "REPLY", e
}({});

function eo(e) {
  switch (e) {
    case 0:
      return F.intl.string(F.t["4EvBbw"]);
    case 1:
      return F.intl.string(F.t["1J6Xq7"]);
    default:
      return (0, L.xb)(e)
  }
}

function el(e) {
  switch (e) {
    case 0:
      return F.intl.string(F.t.gpoQsB);
    case 1:
      return F.intl.string(F.t.k3RM8z);
    default:
      return (0, L.xb)(e)
  }
}
let ec = e => {
    let {
      type: t = 0,
      onClick: n,
      className: i
    } = e;
    return (0, r.jsx)(y.Y.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)("div", {
        onClick: n,
        className: s()(B.Sg, i),
        children: [(0, r.jsx)("div", {
          className: B.$I,
          children: eo(t)
        }), null != n ? (0, r.jsx)(d.vN3, {
          offset: false,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: el(t),
            onClick: n
          })
        }) : (0, r.jsx)(d.y$y, {
          type: d.y$y.Type.PULSING_ELLIPSIS,
          className: B.u1,
          itemClassName: B.$N
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
    return (0, r.jsx)(y.Y.Consumer, {
      children: e => e.disableInteractions ? null : (0, r.jsxs)(d.DUT, {
        className: s()(B._5, i),
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
          className: B.$I,
          children: F.intl.string(F.t["1zUvlw"])
        }), n ? (0, r.jsx)(d.y$y, {
          type: d.y$y.Type.PULSING_ELLIPSIS,
          className: B.u1,
          itemClassName: B.$N
        }) : (0, r.jsx)("div", {
          className: B.hQ,
          children: F.intl.string(F.t.TdQXA8)
        })]
      })
    })
  };

function ed(e) {
  let {
    content: t,
    channelId: n
  } = e, [a] = i.useState(() => (0, b.Ld)("NewMessagesBarJumpToNewMessages_")), o = i.useCallback(() => {
    let e = w.Ay.ackMessageId(n);
    null != e ? f.A.jumpToMessage({
      channelId: n,
      messageId: e,
      offset: 1,
      context: "Mark As Read"
    }) : f.A.jumpToMessage({
      channelId: n,
      messageId: M.default.castChannelIdAsMessageId(n),
      offset: 1,
      context: "Mark As Read"
    })
  }, [n]), l = i.useCallback(() => {
    (0, p.ack)(n, {
      section: U.JJy.NEW_MESSAGES_BANNER,
      object: U.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
      objectType: U.AnalyticsObjectTypes.ACK_MANUAL
    })
  }, [n]), {
    disableInteractions: c
  } = i.useContext(y.Y);
  return c ? null : (0, r.jsxs)("div", {
    className: s()(B.eb, {
      [B.y7]: c
    }),
    children: [(0, r.jsx)(d.vN3, {
      offset: 4,
      children: (0, r.jsx)("button", {
        type: "button",
        className: B.$I,
        onClick: o,
        "aria-label": F.intl.string(F.t.z0Mkp3),
        "aria-describedby": a,
        children: (0, r.jsx)("span", {
          id: a,
          className: B.Ln,
          children: t
        })
      })
    }), (0, r.jsx)(d.vN3, {
      offset: 4,
      children: (0, r.jsxs)("button", {
        type: "button",
        onClick: l,
        className: B.hQ,
        children: [F.intl.string(F.t.e6RscS), (0, r.jsx)(d.MBj, {
          size: "md",
          color: "currentColor",
          className: B.t3
        })]
      })
    })]
  })
}

function ef(e) {
  var t, n, a;
  let {
    channel: o,
    content: _,
    scrollManager: h
  } = e, {
    disableInteractions: E
  } = i.useContext(y.Y), [b, v] = i.useState(null), A = i.useRef(null), [I, N] = i.useState(null), R = i.useRef(null), j = (0, u.yK)([T.A], () => {
    var e;
    return null != (e = T.A.summaries(o.id)) ? e : []
  }, [o]), k = (0, g.A)(j);
  i.useEffect(() => {
    l().isEqual(k, j) || x.default.track(U.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: j.length,
      message_counts: j.map(e => e.count),
      start_message_ids: j.map(e => e.startId),
      end_message_ids: j.map(e => e.endId),
      num_participants: j.map(e => e.people.length),
      guild_id: o.guild_id,
      channel_id: o.id,
      channel_type: o.type
    })
  }, [j, k, o.guild_id, o.id, o.type]);
  let V = (0, u.bG)([P.default], () => {
      var e;
      return null != (e = null == j ? true : j.map(e => {
        var t;
        return null == (t = e.people) ? true : t.map(e => {
          var t;
          return null != (t = P.default.getUser(e)) ? t : null
        }).filter(L.Vq)
      })) ? e : []
    }, [j], e_),
    H = null != (t = (0, u.bG)([T.A], () => T.A.visibleSummaryIndex())) ? t : false,
    Y = null == j || null == (n = j[H]) ? true : n.topic;
  null == Y && null == b && (null == j ? true : j.length) >= 1 && (Y = null == (a = j[0]) ? true : a.topic);
  let W = i.useMemo(() => l().debounce(e => {
      var t;
      v(null != (t = null == e ? true : e.id) ? t : null)
    }, 64), [v]),
    K = i.useMemo(() => l().throttle(() => {
      (0, S.C6)(null)
    }, 1200, {
      trailing: false
    }), []),
    z = i.useCallback(e => {
      K(), W(e)
    }, [W, K]),
    [q, X] = i.useState(false),
    Z = i.useCallback(() => {
      x.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !q,
        num_summaries: j.length,
        message_counts: j.map(e => e.count),
        start_message_ids: j.map(e => e.startId),
        end_message_ids: j.map(e => e.endId),
        num_participants: j.map(e => e.people.length),
        guild_id: o.guild_id,
        channel_id: o.id,
        channel_type: o.type
      }), X(!q)
    }, [q, j, X, o]),
    Q = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : G.eh.PILL_DROPDOWN,
        n = j[e];
      if (null == n) return;
      (0, S.sK)(o.id, n.id), (0, S.C6)(o.id, n.id);
      let r = () => {
        h.removeScrollCompleteCallback(r), setTimeout(() => {
          h.addAutomaticAnchorCallback(z, false)
        }, 100)
      };
      h.removeAutomaticAnchorCallback(z), h.addScrollCompleteCallback(r), x.default.track(U.HAw.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: o.guild_id,
        channel_id: o.id,
        channel_type: o.type
      }), f.A.jumpToMessage({
        channelId: o.id,
        messageId: n.startId,
        flash: true,
        offset: 0,
        jumpType: m.US.ANIMATED,
        context: "Summary Jump"
      })
    }, [j, o, z, h]),
    $ = i.useCallback(e => {
      var t;
      X(e);
      let n = null == (t = R.current) ? true : t.scrollTop;
      null != n && N(n)
    }, []);
  i.useEffect(() => {
    if (null != I && q) {
      var e;
      null == (e = R.current) || e.scrollTo({
        top: I
      })
    }
  }, [I, q]);
  let J = i.useCallback(e => {
    var t;
    (0, c.vq)(e.target) && (null == (t = A.current) ? true : t.contains(e.target)) || (q && x.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: false,
      num_summaries: j.length,
      message_counts: j.map(e => e.count),
      start_message_ids: j.map(e => e.startId),
      end_message_ids: j.map(e => e.endId),
      num_participants: j.map(e => e.people.length),
      guild_id: o.guild_id,
      channel_id: o.id,
      channel_type: o.type
    }), $(false))
  }, [q, j, o, $]);
  i.useEffect(() => (h.addAutomaticAnchorCallback(z), () => {
    h.removeAutomaticAnchorCallback(z)
  }), [h, z]), i.useEffect(() => {
    (0, S.$T)(o.id)
  }, [o.id]), i.useEffect(() => (document.addEventListener("mousedown", J), () => {
    document.removeEventListener("mousedown", J)
  }), [J]);
  let ee = i.useMemo(() => (0, r.jsx)(C.A, {
      channel: o,
      summaries: j,
      summariesMembers: V,
      selectTopic: Q,
      setOpen: $
    }), [j, V, Q, $, o]),
    et = i.useCallback(() => {
      let e = w.Ay.ackMessageId(o.id);
      null != e ? f.A.jumpToMessage({
        channelId: o.id,
        messageId: e,
        offset: 1,
        context: "Mark As Read"
      }) : f.A.jumpToMessage({
        channelId: o.id,
        messageId: M.default.castChannelIdAsMessageId(o.id),
        offset: 1,
        context: "Mark As Read"
      })
    }, [o.id]),
    en = i.useCallback(() => {
      (0, p.ack)(o.id, {
        section: U.JJy.NEW_TOPICS_BAR,
        object: U.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
        objectType: U.AnalyticsObjectTypes.ACK_MANUAL
      })
    }, [o.id]),
    er = F.intl.string(F.t["38qwgO"]);
  return j.length > 0 && (er = "" === Y || null == Y ? F.intl.string(F.t.DwnFuG) : Y), E ? null : (0, r.jsxs)("div", {
    ref: A,
    className: s()(B.dw, B.jh),
    children: [(0, r.jsx)("div", {
      className: B.qm,
      children: (0, r.jsx)(d.DUT, {
        className: B.TQ,
        "aria-label": F.intl.string(F.t.RT3MPz),
        onClick: Z,
        children: (0, r.jsxs)("div", {
          className: s()({
            [B.hN]: !q,
            [B.Ap]: q
          }),
          children: [(0, r.jsx)(d.Kck, {
            size: "xs",
            color: "currentColor",
            className: B.Vd
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: s()(B.$U, B.lc),
            children: er
          }), (0, r.jsx)(D.A, {
            width: 16,
            height: 16,
            direction: D.A.Directions.DOWN,
            className: B.HB
          })]
        })
      })
    }), (0, r.jsx)(d.DUT, {
      onClick: et,
      className: B.ij,
      children: _
    }), (0, r.jsxs)(d.DUT, {
      onClick: en,
      className: s()(B.hQ, B.NX),
      children: [(0, r.jsx)("div", {
        className: B.$U,
        children: F.intl.string(F.t.e6RscS)
      }), (0, r.jsx)(d.MBj, {
        size: "md",
        color: "currentColor",
        className: B.t3
      })]
    }), q && (0, r.jsxs)("div", {
      className: B.A1,
      children: [(0, r.jsxs)("div", {
        className: B.ke,
        children: [(0, r.jsxs)("div", {
          className: B.Ne,
          children: [(0, r.jsx)(d.Kck, {
            size: "custom",
            color: "currentColor",
            className: B.vl,
            width: 18,
            height: 20
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: F.intl.string(F.t.q21fUr)
          }), (0, r.jsx)(O.A, {
            className: B.Zx
          })]
        }), (0, r.jsx)(d.DUT, {
          "aria-label": F.intl.string(F.t.cpT0Cq),
          onClick: Z,
          className: B.oX,
          children: (0, r.jsx)(d.PGe, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.HOs, {
        ref: R,
        className: B.Pe,
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

function eh(e) {
  var t, n, a;
  let {
    channel: o,
    scrollManager: p
  } = e, {
    disableInteractions: _
  } = i.useContext(y.Y), [h, E] = i.useState(null), b = i.useRef(null), [v, A] = i.useState(null), I = i.useRef(null), N = (0, u.yK)([T.A], () => {
    var e;
    return null != (e = T.A.summaries(o.id)) ? e : []
  }, [o]), R = (0, g.A)(N);
  i.useEffect(() => {
    l().isEqual(R, N) || x.default.track(U.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
      num_summaries: N.length,
      message_counts: N.map(e => e.count),
      start_message_ids: N.map(e => e.startId),
      end_message_ids: N.map(e => e.endId),
      num_participants: N.map(e => e.people.length),
      guild_id: o.guild_id,
      channel_id: o.id,
      channel_type: o.type
    })
  }, [N, R, o.guild_id, o.id, o.type]);
  let w = (0, u.bG)([P.default], () => {
      var e;
      return null != (e = null == N ? true : N.map(e => {
        var t;
        return null == (t = e.people) ? true : t.map(e => {
          var t;
          return null != (t = P.default.getUser(e)) ? t : null
        }).filter(L.Vq)
      })) ? e : []
    }, [N], e_),
    j = null != (t = (0, u.bG)([T.A], () => T.A.visibleSummaryIndex())) ? t : false,
    M = null == N || null == (n = N[j]) ? true : n.topic;
  null == M && null == h && (null == N ? true : N.length) >= 1 && (M = null == (a = N[0]) ? true : a.topic);
  let k = i.useMemo(() => l().get(N, j - 1), [j, N]),
    V = i.useMemo(() => l().get(N, j + 1), [j, N]),
    H = i.useMemo(() => l().debounce(e => {
      var t;
      E(null != (t = null == e ? true : e.id) ? t : null)
    }, 64), [E]),
    Y = i.useMemo(() => l().throttle(() => {
      (0, S.C6)(null)
    }, 1200, {
      trailing: false
    }), []),
    W = i.useCallback(e => {
      Y(), H(e)
    }, [H, Y]),
    [K, z] = i.useState(false),
    q = i.useCallback(() => {
      x.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
        topics_dropdown_open: !K,
        num_summaries: N.length,
        message_counts: N.map(e => e.count),
        start_message_ids: N.map(e => e.startId),
        end_message_ids: N.map(e => e.endId),
        num_participants: N.map(e => e.people.length),
        guild_id: o.guild_id,
        channel_id: o.id,
        channel_type: o.type
      }), z(!K)
    }, [K, N, z, o]),
    X = i.useCallback(function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : G.eh.PILL_DROPDOWN,
        n = N[e];
      if (null == n) return;
      (0, S.sK)(o.id, n.id), (0, S.C6)(o.id, n.id);
      let r = () => {
        p.removeScrollCompleteCallback(r), setTimeout(() => {
          p.addAutomaticAnchorCallback(W, false)
        }, 100)
      };
      p.removeAutomaticAnchorCallback(W), p.addScrollCompleteCallback(r), x.default.track(U.HAw.SUMMARIES_TOPIC_CLICKED, {
        source: t,
        message_id: n.startId,
        guild_id: o.guild_id,
        channel_id: o.id,
        channel_type: o.type
      }), f.A.jumpToMessage({
        channelId: o.id,
        messageId: n.startId,
        flash: true,
        offset: 0,
        jumpType: m.US.ANIMATED,
        context: "Summary Jump"
      })
    }, [N, o, W, p]),
    Z = i.useCallback(() => {
      X(j - 1, G.eh.PILL_NEXT_ARROW)
    }, [X, j]),
    Q = i.useCallback(() => {
      X(j + 1, G.eh.PILL_PREVIOUS_ARROW)
    }, [j, X]),
    $ = i.useCallback(e => {
      var t;
      z(e);
      let n = null == (t = I.current) ? true : t.scrollTop;
      null != n && A(n)
    }, []);
  i.useEffect(() => {
    if (null != v && K) {
      var e;
      null == (e = I.current) || e.scrollTo({
        top: v
      })
    }
  }, [v, K]);
  let J = i.useCallback(e => {
    var t;
    (0, c.vq)(e.target) && (null == (t = b.current) ? true : t.contains(e.target)) || (K && x.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
      topics_dropdown_open: false,
      num_summaries: N.length,
      message_counts: N.map(e => e.count),
      start_message_ids: N.map(e => e.startId),
      end_message_ids: N.map(e => e.endId),
      num_participants: N.map(e => e.people.length),
      guild_id: o.guild_id,
      channel_id: o.id,
      channel_type: o.type
    }), $(false))
  }, [K, N, o, $]);
  i.useEffect(() => (p.addAutomaticAnchorCallback(W), () => {
    p.removeAutomaticAnchorCallback(W)
  }), [p, W]), i.useEffect(() => {
    (0, S.$T)(o.id)
  }, [o.id]), i.useEffect(() => (document.addEventListener("mousedown", J), () => {
    document.removeEventListener("mousedown", J)
  }), [J]);
  let ee = i.useMemo(() => (0, r.jsx)(C.A, {
    channel: o,
    summaries: N,
    summariesMembers: w,
    selectTopic: X,
    setOpen: $
  }), [N, w, X, $, o]);
  if (!(0, u.bG)([T.A], () => T.A.shouldShowTopicsBar())) return null;
  let et = F.intl.string(F.t["38qwgO"]);
  return N.length > 0 && (et = "" === M || null == M ? F.intl.string(F.t.DwnFuG) : M), _ ? null : (0, r.jsxs)("div", {
    ref: b,
    className: s()(B.$T, B.jh),
    children: [(0, r.jsxs)("div", {
      className: B.sE,
      children: [(0, r.jsx)(d.DUT, {
        className: B.LP,
        "aria-label": F.intl.string(F.t.RT3MPz),
        onClick: q,
        children: (0, r.jsxs)("div", {
          className: s()({
            [B.Nv]: !K,
            [B.An]: K
          }),
          children: [(0, r.jsx)(d.Kck, {
            size: "xs",
            color: "currentColor",
            className: B.Np
          }), (0, r.jsx)(d.Text, {
            className: B.r1,
            variant: "text-sm/medium",
            children: et
          }), (0, r.jsx)(D.A, {
            width: 16,
            height: 16,
            direction: D.A.Directions.DOWN,
            className: B._l
          })]
        })
      }), (0, r.jsxs)("div", {
        className: B.Yk,
        children: [(0, r.jsx)(d.DUT, {
          "aria-label": F.intl.string(F.t["4huCnC"]),
          onClick: Q,
          className: s()(B.ZM, B.vz, {
            [B.jf]: null == V
          }),
          children: (0, r.jsx)(D.A, {
            width: 16,
            height: 16,
            direction: D.A.Directions.UP
          })
        }), (0, r.jsx)(d.DUT, {
          "aria-label": F.intl.string(F.t["58KOoF"]),
          onClick: Z,
          className: s()(B.ZM, B.mt, {
            [B.jf]: null == k
          }),
          children: (0, r.jsx)(D.A, {
            width: 16,
            height: 16,
            direction: D.A.Directions.DOWN
          })
        })]
      })]
    }), K && (0, r.jsxs)("div", {
      className: B.A1,
      children: [(0, r.jsxs)("div", {
        className: B.ke,
        children: [(0, r.jsxs)("div", {
          className: B.Ne,
          children: [(0, r.jsx)(d.Kck, {
            size: "custom",
            color: "currentColor",
            className: B.vl,
            width: 18,
            height: 20
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-md/bold",
            color: "text-strong",
            lineClamp: 1,
            children: F.intl.string(F.t.q21fUr)
          }), (0, r.jsx)(O.A, {
            className: B.Zx
          })]
        }), (0, r.jsx)(d.DUT, {
          "aria-label": F.intl.string(F.t.cpT0Cq),
          onClick: q,
          className: B.oX,
          children: (0, r.jsx)(d.PGe, {
            size: "md",
            color: "currentColor"
          })
        })]
      }), (0, r.jsx)(d.HOs, {
        ref: I,
        className: B.Pe,
        fade: true,
        children: ee
      })]
    })]
  })
}
let em = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return (0, r.jsxs)("div", {
      className: B.YL,
      children: [(0, r.jsx)(d.Text, {
        color: "none",
        variant: "text-sm/semibold",
        lineClamp: 1,
        className: B.Ld,
        children: e
      }), t && (0, r.jsx)(d.Text, {
        className: B.$o,
        color: "text-muted",
        variant: "text-sm/normal",
        children: F.intl.string(F.t["515vjG"])
      })]
    })
  },
  eg = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: s()(B.jC, n),
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
        className: B.wH,
        children: (0, r.jsx)("div", {
          className: B.j3
        })
      })
    })
  }