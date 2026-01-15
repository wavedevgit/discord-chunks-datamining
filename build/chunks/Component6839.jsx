/** Chunk was on web.js **/
/** chunk id: 6839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => ed
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
  Chunk159691 = require("./159691.js"),
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
  Chunk87611 = require("./87611.js"),
  Chunk478411 = require("./478411.js");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = 52,
  $ = 52,
  ee = 24,
  et = .025;

function en(e) {
  return null == e.id ? y.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function er(e, t, n, i) {
  let a = null == e.id ? U.ZP.getURL(e.name) : k.ZP.getEmojiURL({
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
let ei = e => {
    let {
      emoji: t,
      channelId: n,
      messageId: a
    } = e, [s, l] = i.useState(true), [c, u] = i.useState([]), d = i.useMemo(() => {
      if (null == c || c.length < 1) return;
      let e = (0, C.Zn)(t, c[0], n, {
        emojiSize: T.M.LARGE,
        messageId: a
      });
      return (0, r.jsx)(T.Z, {
        className: W.__invalid_effect,
        effect: e,
        emojiSize: T.M.LARGE,
        onComplete: () => l(false)
      })
    }, [c, t, n, a]);
    return i.useEffect(() => {
      let e = false;
      return l(true), !async function() {
        let n = await (0, U.B6)(t);
        Array.isArray(n) && n.length > 0 && !e && u(n)
      }(), () => {
        e = true
      }
    }, [t]), (0, r.jsxs)("div", {
      className: W.burstEmojiSection,
      children: [d, (0, r.jsx)(h.Z, {
        className: o()(W.burstEmoji, {
          [W.hideEmoji]: s
        }),
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated,
        size: "reaction"
      }), (0, r.jsx)(_.Text, {
        variant: "text-md/medium",
        children: en(t)
      })]
    })
  },
  ea = Chunk473749.memo(function(e) {
    let {
      emoji: t,
      count: n,
      isSelected: a,
      setSelected: s,
      reactionType: l,
      colors: u
    } = e, f = i.useMemo(() => en(t), [t]), p = i.useMemo(() => er(t, ee, W.emoji, o()(W.emoji, W.emojiText)), [t]), h = l === I.O.BURST, m = h ? Y.t.VmiNjd : Y.t["cNfs1/"], g = Y.intl.formatToPlainString(m, {
      name: f,
      n: n
    }), E = i.useMemo(() => {
      let e = {};
      if (h) {
        var t, n, r, i;
        let {
          backgroundColor: o = "",
          opacity: s = 1
        } = null != u ? u : {};
        a ? (e.background = null != (t = (0, c.wK)(o, s)) ? t : "", e.border = "1px solid ".concat(null != (n = (0, c.wK)(o, 1.1 * s)) ? n : "")) : (e.background = null != (r = (0, c.wK)(o, et)) ? r : "", e.border = "1px solid ".concat(null != (i = (0, c.wK)(o, 2 * et)) ? i : ""))
      }
      return e
    }, [h, u, a]), b = i.useMemo(() => {
      let e = {};
      if (h) {
        let {
          accentColor: t = ""
        } = null != u ? u : {};
        e.color = t
      }
      return e
    }, [h, u]), y = i.useCallback(() => {
      s({
        emoji: t,
        reactionType: l
      })
    }, [t, l, s]);
    return (0, r.jsx)(d.u, {
      position: "left",
      __unsupportedReactNodeAsText: f,
      asContainer: true,
      children: (0, r.jsxs)(_.P3F, {
        className: o()({
          [W.reactionDefault]: !a,
          [W.reactionSelected]: a
        }),
        "aria-label": g,
        "aria-selected": a,
        onClick: y,
        style: E,
        children: [p, (0, r.jsx)(_.Text, {
          variant: "text-sm/bold",
          style: b,
          children: n
        })]
      })
    })
  });

function eo(e) {
  let {
    emoji: t,
    user: n,
    message: i,
    channel: a,
    guildId: s,
    reactionType: l,
    onRemoveReactor: c
  } = e, d = (0, u.e7)([P.default], () => P.default.getId()), p = (0, u.e7)([M.default], () => M.default.getUser(n.id), [n]), h = (0, A.$R)(a), E = (0, u.e7)([L.Z], () => L.Z.can(H.Plq.MANAGE_MESSAGES, a) && h) || d === n.id, y = (0, u.e7)([R.ZP, w.Z, j.Z], () => G.ZP.getName(s, a.id, n));

  function O() {
    B.WO({
      channelId: a.id,
      messageId: i.id,
      emoji: t,
      location: B.TW.MESSAGE,
      userId: n.id,
      options: {
        burst: l === I.O.BURST
      }
    }), null == c || c()
  }
  return (0, r.jsxs)(b.Z, {
    className: W.reactor,
    onContextMenu: e => (0, F.Pv)(e, n, a),
    align: b.Z.Align.CENTER,
    tabIndex: 0,
    "aria-label": n.username,
    children: [(0, r.jsx)(b.Z.Child, {
      wrap: true,
      grow: 0,
      shrink: 0,
      className: K.marginReset,
      children: (0, r.jsx)(g.Z, {
        user: null != p ? p : n,
        size: _.EFr.SIZE_32
      })
    }), (0, r.jsxs)(b.Z.Child, {
      className: W.reactorInfo,
      children: [(0, r.jsx)(_.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: W.name,
        children: null != y && "" !== y && (0, r.jsx)("span", {
          className: W.ellipsized,
          children: y
        })
      }), (0, r.jsx)(m.Z, {
        user: n,
        className: null != y && "" !== y ? W.tagFaded : null,
        usernameClass: o()(W.username, W.ellipsized),
        discriminatorClass: W.discriminator,
        forceUsername: true
      })]
    }), E && (0, r.jsx)("div", {
      className: W.remove,
      children: (0, r.jsx)(f.hU, {
        onClick: O,
        "aria-label": Y.intl.string(Y.t["+BdaDn"]),
        icon: _.Dio,
        size: "sm",
        variant: "icon-only"
      })
    })]
  })
}
class es extends Chunk473749.PureComponent {
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
    }), B.U0({
      channelId: e.getChannelId(),
      messageId: e.id,
      emoji: t.emoji,
      limit: H.pTL,
      after: r,
      type: n
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
    return 0 === t.length && this.state.loadingMore ? o.push(1) : (o.push(t.length), e && o.push(1)), (0, r.jsxs)("div", {
      className: W.reactorsContainer,
      children: [a === I.O.BURST && (0, r.jsx)(ei, {
        emoji: n.emoji,
        channelId: i.getChannelId(),
        messageId: i.id
      }), (0, r.jsx)(_._2F, {
        className: W.reactors,
        fade: true,
        ref: this.scrollerRef,
        sections: o,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: e ? this.handleScroll : true
      })]
    })
  }
  constructor(...e) {
    super(...e), z(this, "scrollerRef", i.createRef()), z(this, "state", {
      lastId: null,
      loadingMore: true
    }), z(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - J && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), z(this, "getRowHeight", (e, t) => {
      let {
        reactors: n
      } = this.props;
      if (1 === e) return 0 === t ? J : 0;
      if (0 === e) {
        if (0 === t && 0 === n.length) return $;
        if (null != this.props.reactors[t]) return J
      }
      return 0
    }), z(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        message: i,
        guildId: a,
        channel: o,
        reaction: s,
        reactors: l,
        reactionType: c
      } = this.props, u = l[n];
      return 1 === t ? 0 === n ? (0, r.jsx)(_.$jN, {
        className: W.spinner
      }, "hasMore") : null : 0 === l.length && this.state.loadingMore ? (0, r.jsx)(_.$jN, {
        className: W.spinner
      }, "loadingMore") : null != u && (0, r.jsx)(eo, {
        message: i,
        emoji: s.emoji,
        guildId: a,
        channel: o,
        user: u,
        reaction: s,
        reactionType: c
      }, u.id)
    })
  }
}
let el = Chunk442837.ZP.connectStores([Chunk542578.Z], e => {
  let {
    message: t,
    reaction: n,
    reactionType: r
  } = e, i = D.Z.getReactions(t.getChannelId(), t.id, n.emoji, H.pTL, r);
  if (null == i) return {
    reactors: [],
    hasMore: false
  };
  let a = Array.from(i.values()),
    o = (r === I.O.BURST ? n.burst_count : n.count) > a.length;
  return {
    reactors: a,
    hasMore: o
  }
})(es);

function ec(e) {
  return i.useMemo(() => {
    let t = [];
    return e.forEach(e => {
      e.burst_count > 0 && t.push(X(q({}, e), {
        count: 0
      })), e.count > 0 && t.push(X(q({}, e), {
        burst_count: 0
      }))
    }), t.sort((e, t) => {
      let n = e.burst_count > 0 ? e.burst_count : e.count;
      return (t.burst_count > 0 ? t.burst_count : t.count) - n
    }), t
  }, [e])
}

function eu(e, t, n) {
  let [r, a] = i.useState(null != e ? e : t);
  return i.useEffect(() => {
    null != r && null == n.find(e => {
      let t = null != e.me_vote ? I.O.VOTE : e.burst_count > 0 ? I.O.BURST : I.O.NORMAL,
        n = (0, V.ir)(e.emoji, r.emoji),
        i = t === r.reactionType;
      return n && i
    }) && a(t)
  }, [r, a, n, t]), [r, a]
}

function ed(e) {
  let {
    message: t,
    selectedReaction: n,
    onClose: a,
    transitionState: o,
    "aria-label": s = Y.intl.string(Y.t.gHp0C4)
  } = e, l = (0, u.e7)([w.Z], () => w.Z.getChannel(t.getChannelId())), c = null == l ? true : l.getGuildId(), d = (0, u.e7)([x.Z, v.Z], () => {
    var e, n;
    let r = null != (n = x.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = v.Z.getMessage(Z.default.castMessageIdAsChannelId(t.id))) ? true : e.firstMessage;
    return null != r ? r.reactions : []
  }, [t]), h = ec(d), m = h[0], [g, b] = eu(n, null != m ? {
    emoji: m.emoji,
    reactionType: m.burst_count > 0 ? I.O.BURST : I.O.NORMAL
  } : null, h), y = i.useMemo(() => {
    var e;
    return null == g ? null : null != (e = d.find(e => (0, V.ir)(e.emoji, g.emoji))) ? e : null
  }, [d, g]), T = (0, u.e7)([E.Z], () => E.Z.saturation), C = (0, u.e7)([N.Z], () => (0, p.wj)(N.Z.theme));
  if (i.useEffect(() => {
      (0 === d.length || null == g && null == y) && setImmediate(a)
    }, [a, d.length, y, g]), null == g || null == y) return (0, r.jsx)(_.$jN, {});
  if (null == l) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, r.jsx)(S.Z.Provider, {
    value: null != c ? c : true,
    children: (0, r.jsxs)(f.IX, {
      transitionState: o,
      size: "md",
      onClose: a,
      "aria-label": s,
      children: [(0, r.jsx)(f.xBx, {
        title: Y.intl.string(Y.t.gHp0C4)
      }), (0, r.jsx)("div", {
        className: W.spacer
      }), (0, r.jsxs)("div", {
        className: W.container,
        children: [(0, r.jsx)(_.Ttm, {
          className: W.scroller,
          fade: true,
          children: h.map(e => {
            var t;
            let n = e.burst_count > 0;
            return (0, r.jsx)(ea, {
              isSelected: ef(g, e, n ? I.O.BURST : I.O.NORMAL),
              setSelected: b,
              reactionType: n ? I.O.BURST : I.O.NORMAL,
              emoji: e.emoji,
              count: n ? e.burst_count : e.count,
              colors: null != e.burst_colors ? (0, O.Z)(e.burst_colors, T, C) : true
            }, "".concat(n ? "burst-" : "normal-").concat(null != (t = e.emoji.id) ? t : "", ":").concat(e.emoji.name))
          })
        }), (0, r.jsx)(el, {
          message: t,
          reaction: y,
          guildId: c,
          channel: l,
          reactionType: g.reactionType
        })]
      })]
    })
  })
}
let ef = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n