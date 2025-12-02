/** Chunk was on web.js **/
/** chunk id: 6839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => eu
}), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./358797.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk712057 = require("./712057.js"),
  Chunk660189 = require("./660189.js"),
  Chunk372900 = require("./372900.js"),
  Chunk566006 = require("./566006.js"),
  Chunk620652 = require("./620652.jsx"),
  Chunk815605 = require("./815605.js"),
  Chunk665906 = require("./665906.js"),
  Chunk210887 = require("./210887.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk542578 = require("./542578.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk91047 = require("./91047.jsx"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302854 = require("./302854.js"),
  Chunk197571 = require("./197571.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = 44,
  J = 440,
  $ = 24,
  ee = .025;

function et(e) {
  return null == e.id ? b.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function en(e, t, n, i) {
  let a = null == e.id ? k.ZP.getURL(e.name) : M.ZP.getEmojiURL({
    id: e.id,
    animated: e.animated,
    size: t
  });
  return null != a && "" !== a ? (0, r.jsx)("img", {
    className: n,
    src: a,
    alt: e.name
  }) : (0, r.jsx)("span", {
    className: i,
    children: e.name
  })
}
let er = e => {
    let {
      emoji: t,
      channelId: n,
      messageId: a
    } = e, [s, l] = i.useState(true), [c, u] = i.useState([]), d = i.useMemo(() => {
      if (null == c || c.length < 1) return;
      let e = (0, T.Zn)(t, c[0], n, {
        emojiSize: I.M.LARGE,
        messageId: a
      });
      return (0, r.jsx)(I.Z, {
        className: Y.__invalid_effect,
        effect: e,
        emojiSize: I.M.LARGE,
        onComplete: () => l(false)
      })
    }, [c, t, n, a]);
    return i.useEffect(() => {
      let e = false;
      return l(true), !async function() {
        let n = await (0, k.B6)(t);
        Array.isArray(n) && n.length > 0 && !e && u(n)
      }(), () => {
        e = true
      }
    }, [t]), (0, r.jsxs)("div", {
      className: Y.burstEmojiSection,
      children: [d, (0, r.jsx)(_.Z, {
        className: o()(Y.burstEmoji, {
          [Y.hideEmoji]: s
        }),
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated,
        size: "reaction"
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/medium",
        children: et(t)
      })]
    })
  },
  ei = Chunk473749.memo(function(e) {
    let {
      emoji: t,
      count: n,
      isSelected: a,
      setSelected: s,
      reactionType: l,
      colors: u
    } = e, f = i.useMemo(() => et(t), [t]), _ = i.useMemo(() => en(t, $, Y.emoji, o()(Y.emoji, Y.emojiText)), [t]), m = l === S.O.BURST, h = m ? H.t.VmiNjd : H.t["cNfs1/"], g = H.intl.formatToPlainString(h, {
      name: f,
      n: n
    }), E = i.useMemo(() => {
      let e = {};
      if (m) {
        var t, n, r, i;
        let {
          backgroundColor: o = "",
          opacity: s = 1
        } = null != u ? u : {};
        a ? (e.background = null != (t = (0, c.wK)(o, s)) ? t : "", e.border = "1px solid ".concat(null != (n = (0, c.wK)(o, 1.1 * s)) ? n : "")) : (e.background = null != (r = (0, c.wK)(o, ee)) ? r : "", e.border = "1px solid ".concat(null != (i = (0, c.wK)(o, 2 * ee)) ? i : ""))
      }
      return e
    }, [m, u, a]), b = i.useMemo(() => {
      let e = {};
      if (m) {
        let {
          accentColor: t = ""
        } = null != u ? u : {};
        e.color = t
      }
      return e
    }, [m, u]), y = i.useCallback(() => {
      s({
        emoji: t,
        reactionType: l
      })
    }, [t, l, s]);
    return (0, r.jsx)(d.u, {
      position: "left",
      __unsupportedReactNodeAsText: f,
      asContainer: true,
      children: (0, r.jsxs)(p.P3F, {
        className: o()({
          [Y.reactionDefault]: !a,
          [Y.reactionSelected]: a
        }),
        "aria-label": g,
        "aria-selected": a,
        onClick: y,
        style: E,
        children: [_, (0, r.jsx)(p.Text, {
          variant: "text-sm/bold",
          style: b,
          children: n
        })]
      })
    })
  });

function ea(e) {
  let {
    emoji: t,
    user: n,
    message: i,
    channel: a,
    guildId: o,
    reactionType: s,
    onRemoveReactor: l,
    disableManage: c = false
  } = e, d = (0, u.e7)([N.default], () => N.default.getId()), f = (0, u.e7)([j.default], () => j.default.getUser(n.id), [n]), _ = (0, A.$R)(a), g = (0, u.e7)([x.Z], () => x.Z.can(V.Plq.MANAGE_MESSAGES, a) && _) || d === n.id, b = (0, u.e7)([R.ZP, P.Z, L.Z], () => U.ZP.getName(o, a.id, n));

  function y() {
    B.WO({
      channelId: a.id,
      messageId: i.id,
      emoji: t,
      location: B.TW.MESSAGE,
      userId: n.id,
      options: {
        burst: s === S.O.BURST
      }
    }), null == l || l()
  }
  return (0, r.jsxs)(E.Z, {
    className: Y.reactorDefault,
    onContextMenu: e => (0, Z.Pv)(e, n, a),
    align: E.Z.Align.CENTER,
    tabIndex: 0,
    "aria-label": n.username,
    children: [(0, r.jsx)(E.Z.Child, {
      wrap: true,
      grow: 0,
      shrink: 0,
      className: W.marginReset,
      children: (0, r.jsx)(h.Z, {
        user: null != f ? f : n,
        size: p.EFr.SIZE_24
      })
    }), (0, r.jsx)(E.Z.Child, {
      children: (0, r.jsxs)(p.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: Y.name,
        children: [null != b && "" !== b && (0, r.jsx)("span", {
          className: n.hasUniqueUsername() ? "" : Y.nickname,
          children: b
        }), (0, r.jsx)(m.Z, {
          user: n,
          className: null != b && "" !== b ? Y.tagFaded : null,
          usernameClass: Y.username,
          discriminatorClass: Y.discriminator,
          forceUsername: true
        })]
      })
    }), !c && g && (0, r.jsx)(p.P3F, {
      onClick: y,
      "aria-label": H.intl.string(H.t["+BdaDn"]),
      children: (0, r.jsx)(p.Dio, {
        size: "xs",
        color: "currentColor",
        className: Y.remove
      })
    })]
  })
}
class eo extends Chunk473749.PureComponent {
  componentDidMount() {
    this.loadMore()
  }
  componentDidUpdate(e) {
    l().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType || this.setState({
      lastId: null,
      loadingMore: false
    }, () => this.loadMore())
  }
  loadMore() {
    let {
      message: e,
      reaction: t,
      reactionType: n
    } = this.props, {
      lastId: r
    } = this.state;
    this.setState({
      loadingMore: true
    }), Chunk222677.U0({
      channelId: module.getChannelId(),
      messageId: module.id,
      emoji: exports.emoji,
      limit: Chunk981631.pTL,
      after: Chunk54381,
      type: require
    }).then(e => {
      var t;
      return this.setState({
        loadingMore: false,
        lastId: null == (t = e[e.length - 1]) ? true : t.id
      })
    })
  }
  renderSection() {
    return null
  }
  render() {
    let {
      hasMore: e,
      reactors: t,
      reaction: n,
      message: i,
      reactionType: a
    } = this.props, o = [];
    return 0 === exports.length && this.state.loadingMore ? o.push(length) : (o.push(exports.length), module && o.push(1)), (0, Chunk54381.jsxs)("div", {
      className: Chunk302854.reactorsContainer,
      children: [Chunk120356 === Chunk566006.O.BURST && (0, Chunk54381.jsx)(er, {
        emoji: require.emoji,
        channelId: Chunk473749.getChannelId(),
        messageId: Chunk473749.id
      }), (0, Chunk54381.jsx)(Chunk481060.aVo, {
        className: Chunk302854.reactors,
        fade: true,
        ref: this.scrollerRef,
        sections: o,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: module ? this.handleScroll : true
      })]
    })
  }
  constructor(...e) {
    super(...e), K(this, "scrollerRef", i.createRef()), K(this, "state", {
      lastId: null,
      loadingMore: false
    }), K(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - Q && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), K(this, "getRowHeight", (e, t) => {
      let {
        reactors: n
      } = this.props;
      if (1 === e) return 0 === t ? Q : 0;
      if (0 === e) {
        if (0 === t && 0 === n.length) return J;
        if (null != this.props.reactors[t]) return Q
      }
      return 0
    }), K(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        message: i,
        guildId: a,
        channel: o,
        reaction: s,
        reactors: l,
        reactionType: c,
        disableManage: u
      } = this.props, d = l[n];
      return 1 === t ? 0 === n ? (0, r.jsx)(p.$jN, {
        className: Y.spinnerMore
      }, "hasMore") : null : 0 === l.length && this.state.loadingMore ? (0, r.jsx)(p.$jN, {
        className: Y.spinner
      }, "loadingMore") : null != d && (0, r.jsx)(ea, {
        message: i,
        emoji: s.emoji,
        guildId: a,
        channel: o,
        user: d,
        reaction: s,
        reactionType: c,
        disableManage: u
      }, d.id)
    })
  }
}
let es = Chunk442837.ZP.connectStores([Chunk542578.Z], e => {
  let {
    message: t,
    reaction: n,
    reactionType: r
  } = e, i = w.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, r);
  if (null == i) return {
    reactors: [],
    hasMore: false
  };
  let a = Array.from(i.values()),
    o = (r === S.O.BURST ? n.burst_count : n.count) > a.length;
  return {
    reactors: a,
    hasMore: o
  }
})(eo);

function el(e) {
  return i.useMemo(() => {
    let t = [];
    return e.forEach(e => {
      e.burst_count > 0 && t.push(X(z({}, e), {
        count: 0
      })), e.count > 0 && t.push(X(z({}, e), {
        burst_count: 0
      }))
    }), t.sort((e, t) => {
      let n = e.burst_count > 0 ? e.burst_count : e.count;
      return (t.burst_count > 0 ? t.burst_count : t.count) - n
    }), t
  }, [e])
}

function ec(e, t, n) {
  let [r, a] = i.useState(null != e ? e : t);
  return i.useEffect(() => {
    null != r && null == n.find(e => {
      let t = null != e.me_vote ? S.O.VOTE : e.burst_count > 0 ? S.O.BURST : S.O.NORMAL,
        n = (0, F.ir)(e.emoji, r.emoji),
        i = t === r.reactionType;
      return n && i
    }) && a(t)
  }, [r, a, n, t]), [r, a]
}

function eu(e) {
  let {
    message: t,
    selectedReaction: n,
    disableManage: a = false,
    disableTabs: o = false,
    onClose: s,
    transitionState: l,
    "aria-label": c = H.intl.string(H.t.gHp0C4)
  } = e, d = (0, u.e7)([P.Z], () => P.Z.getChannel(t.getChannelId())), _ = null == d ? true : d.getGuildId(), m = (0, u.e7)([D.Z, O.Z], () => {
    var e, n;
    let r = null != (n = D.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = O.Z.getMessage(G.default.castMessageIdAsChannelId(t.id))) ? true : e.firstMessage;
    return null != r ? r.reactions : []
  }, [t]), h = el(m), E = h[0], [b, I] = ec(n, null != E ? {
    emoji: E.emoji,
    reactionType: E.burst_count > 0 ? S.O.BURST : S.O.NORMAL
  } : null, h), T = i.useMemo(() => {
    var e;
    return null == b ? null : null != (e = m.find(e => (0, F.ir)(e.emoji, b.emoji))) ? e : null
  }, [m, b]), A = (0, u.e7)([g.Z], () => g.Z.saturation), N = (0, u.e7)([C.Z], () => (0, f.wj)(C.Z.theme));
  if (i.useEffect(() => {
      (0 === m.length || null == b && null == T) && setImmediate(s)
    }, [s, m.length, T, b]), null == b || null == T) return (0, r.jsx)(p.$jN, {});
  if (null == d) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, r.jsx)(v.Z.Provider, {
    value: null != _ ? _ : true,
    children: (0, r.jsxs)(p.Y0X, {
      "aria-label": c,
      transitionState: l,
      size: p.CgR.DYNAMIC,
      className: Y.container,
      parentComponent: "MessageReactions",
      children: [o ? null : (0, r.jsx)(p.Ttm, {
        className: Y.scroller,
        fade: true,
        children: h.map(e => {
          var t;
          let n = e.burst_count > 0;
          return (0, r.jsx)(ei, {
            isSelected: ed(b, e, n ? S.O.BURST : S.O.NORMAL),
            setSelected: I,
            reactionType: n ? S.O.BURST : S.O.NORMAL,
            emoji: e.emoji,
            count: n ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, y.Z)(e.burst_colors, A, N) : true
          }, "".concat(n ? "burst-" : "normal-").concat(null != (t = e.emoji.id) ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, r.jsx)(es, {
        message: t,
        reaction: T,
        guildId: _,
        channel: d,
        reactionType: b.reactionType,
        disableManage: a
      })]
    })
  })
}
let ed = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n