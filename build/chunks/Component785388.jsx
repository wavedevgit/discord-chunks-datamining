/** Chunk was on web.js **/
/** chunk id: 785388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => ec
}), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./358797.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk368508 = require("./368508.js"),
  Chunk881488 = require("./881488.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = 44,
  Q = 440,
  J = 24,
  $ = .025;

function ee(e) {
  return null == e.id ? E.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function et(e, t, n, i) {
  let o = null == e.id ? U.ZP.getURL(e.name) : k.ZP.getEmojiURL({
    id: e.id,
    animated: e.animated,
    size: t
  });
  return null != o && "" !== o ? (0, r.jsx)("img", {
    className: n,
    src: o,
    alt: e.name
  }) : (0, r.jsx)("span", {
    className: i,
    children: e.name
  })
}
let en = e => {
    let {
      emoji: t,
      channelId: n,
      messageId: o
    } = e, [s, l] = i.useState(true), [c, u] = i.useState([]), d = i.useMemo(() => {
      if (null == c || c.length < 1) return;
      let e = (0, T.Zn)(t, c[0], n, {
        emojiSize: I.M.LARGE,
        messageId: o
      });
      return (0, r.jsx)(I.Z, {
        className: H.__invalid_effect,
        effect: e,
        emojiSize: I.M.LARGE,
        onComplete: () => l(false)
      })
    }, [c, t, n, o]);
    return i.useEffect(() => {
      let e = false;
      return l(true), !async function() {
        let n = await (0, U.B6)(t);
        Array.isArray(n) && n.length > 0 && !e && u(n)
      }(), () => {
        e = true
      }
    }, [t]), (0, r.jsxs)("div", {
      className: H.burstEmojiSection,
      children: [d, (0, r.jsx)(_.Z, {
        className: a()(H.burstEmoji, {
          [H.hideEmoji]: s
        }),
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated,
        size: "reaction"
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: ee(t)
      })]
    })
  },
  er = Chunk73800.memo(function(e) {
    let {
      emoji: t,
      count: n,
      isSelected: o,
      setSelected: s,
      reactionType: l,
      colors: u
    } = e, d = i.useMemo(() => ee(t), [t]), _ = i.useMemo(() => et(t, J, H.emoji, a()(H.emoji, H.emojiText)), [t]), p = l === v.O.BURST, h = p ? V.t.VmiNjY : V.t.cNfs19, m = V.intl.formatToPlainString(h, {
      name: d,
      n: n
    }), g = i.useMemo(() => {
      let e = {};
      if (p) {
        var t, n, r, i;
        let {
          backgroundColor: a = "",
          opacity: s = 1
        } = null != u ? u : {};
        o ? (e.background = null != (t = (0, c.wK)(a, s)) ? t : "", e.border = "1px solid ".concat(null != (n = (0, c.wK)(a, 1.1 * s)) ? n : "")) : (e.background = null != (r = (0, c.wK)(a, $)) ? r : "", e.border = "1px solid ".concat(null != (i = (0, c.wK)(a, 2 * $)) ? i : ""))
      }
      return e
    }, [p, u, o]), E = i.useMemo(() => {
      let e = {};
      if (p) {
        let {
          accentColor: t = ""
        } = null != u ? u : {};
        e.color = t
      }
      return e
    }, [p, u]), b = i.useCallback(() => {
      s({
        emoji: t,
        reactionType: l
      })
    }, [t, l, s]);
    return (0, r.jsx)(f.ua7, {
      position: "left",
      text: d,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: i
        } = e;
        return (0, r.jsxs)(f.P3F, {
          className: a()({
            [H.reactionDefault]: !o,
            [H.reactionSelected]: o
          }),
          "aria-label": m,
          onClick: b,
          onMouseEnter: t,
          onMouseLeave: i,
          style: g,
          children: [_, (0, r.jsx)(f.Text, {
            variant: "text-sm/bold",
            style: E,
            children: n
          })]
        })
      }
    })
  });

function ei(e) {
  let {
    emoji: t,
    user: n,
    message: i,
    channel: o,
    guildId: a,
    reactionType: s,
    onRemoveReactor: l,
    disableManage: c = false
  } = e, d = (0, u.e7)([R.default], () => R.default.getId()), _ = (0, u.e7)([j.default], () => j.default.getUser(n.id), [n]), m = (0, N.$R)(o), E = (0, u.e7)([x.Z], () => x.Z.can(F.Plq.MANAGE_MESSAGES, o) && m) || d === n.id, b = (0, u.e7)([w.ZP, P.Z, M.Z], () => G.ZP.getName(a, o.id, n));

  function y() {
    S.WO({
      channelId: o.id,
      messageId: i.id,
      emoji: t,
      location: S.TW.MESSAGE,
      userId: n.id,
      options: {
        burst: s === v.O.BURST
      }
    }), null == l || l()
  }
  return (0, r.jsxs)(g.Z, {
    className: H.reactorDefault,
    onContextMenu: e => (0, Z.Pv)(e, n, o),
    align: g.Z.Align.CENTER,
    children: [(0, r.jsx)(g.Z.Child, {
      wrap: true,
      grow: 0,
      shrink: 0,
      className: Y.marginReset,
      children: (0, r.jsx)(h.Z, {
        user: null != _ ? _ : n,
        size: f.EFr.SIZE_24
      })
    }), (0, r.jsx)(g.Z.Child, {
      children: (0, r.jsxs)(f.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: H.name,
        children: [null != b && "" !== b && (0, r.jsx)("span", {
          className: n.hasUniqueUsername() ? "" : H.nickname,
          children: b
        }), (0, r.jsx)(p.Z, {
          user: n,
          className: null != b && "" !== b ? H.tagFaded : null,
          usernameClass: H.username,
          discriminatorClass: H.discriminator,
          forceUsername: true
        })]
      })
    }), !c && E && (0, r.jsx)(f.P3F, {
      onClick: y,
      children: (0, r.jsx)(f.Dio, {
        size: "xs",
        color: "currentColor",
        className: H.remove
      })
    })]
  })
}
class eo extends Chunk73800.PureComponent {
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
      after: Chunk255367,
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
      reactionType: o
    } = this.props, a = [];
    return 0 === exports.length && this.state.loadingMore ? a.push(length) : (a.push(exports.length), module && a.push(1)), (0, Chunk255367.jsxs)("div", {
      className: Chunk368508.reactorsContainer,
      children: [Chunk120356 === Chunk566006.O.BURST && (0, Chunk255367.jsx)(en, {
        emoji: require.emoji,
        channelId: Chunk73800.getChannelId(),
        messageId: Chunk73800.id
      }), (0, Chunk255367.jsx)(Chunk481060.aVo, {
        className: Chunk368508.reactors,
        fade: true,
        ref: this.scrollerRef,
        sections: a,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: module ? this.handleScroll : true
      })]
    })
  }
  constructor(...e) {
    super(...e), W(this, "scrollerRef", i.createRef()), W(this, "state", {
      lastId: null,
      loadingMore: false
    }), W(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - X && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), W(this, "getRowHeight", (e, t) => {
      let {
        reactors: n
      } = this.props;
      if (1 === e) return 0 === t ? X : 0;
      if (0 === e) {
        if (0 === t && 0 === n.length) return Q;
        if (null != this.props.reactors[t]) return X
      }
      return 0
    }), W(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        message: i,
        guildId: o,
        channel: a,
        reaction: s,
        reactors: l,
        reactionType: c,
        disableManage: u
      } = this.props, d = l[n];
      return 1 === t ? 0 === n ? (0, r.jsx)(f.$jN, {
        className: H.spinnerMore
      }, "hasMore") : null : 0 === l.length && this.state.loadingMore ? (0, r.jsx)(f.$jN, {
        className: H.spinner
      }, "loadingMore") : null != d && (0, r.jsx)(ei, {
        message: i,
        emoji: s.emoji,
        guildId: o,
        channel: a,
        user: d,
        reaction: s,
        reactionType: c,
        disableManage: u
      }, d.id)
    })
  }
}
let ea = Chunk442837.ZP.connectStores([Chunk542578.Z], e => {
  let {
    message: t,
    reaction: n,
    reactionType: r
  } = e, i = D.Z.getReactions(t.getChannelId(), t.id, n.emoji, F.pTL, r);
  if (null == i) return {
    reactors: [],
    hasMore: false
  };
  let o = Array.from(i.values()),
    a = (r === v.O.BURST ? n.burst_count : n.count) > o.length;
  return {
    reactors: o,
    hasMore: a
  }
})(eo);

function es(e) {
  return i.useMemo(() => {
    let t = [];
    return e.forEach(e => {
      e.burst_count > 0 && t.push(q(K({}, e), {
        count: 0
      })), e.count > 0 && t.push(q(K({}, e), {
        burst_count: 0
      }))
    }), t.sort((e, t) => {
      let n = e.burst_count > 0 ? e.burst_count : e.count;
      return (t.burst_count > 0 ? t.burst_count : t.count) - n
    }), t
  }, [e])
}

function el(e, t, n) {
  let [r, o] = i.useState(null != e ? e : t);
  return i.useEffect(() => {
    null != r && null == n.find(e => {
      let t = null != e.me_vote ? v.O.VOTE : e.burst_count > 0 ? v.O.BURST : v.O.NORMAL,
        n = (0, A.ir)(e.emoji, r.emoji),
        i = t === r.reactionType;
      return n && i
    }) && o(t)
  }, [r, o, n, t]), [r, o]
}

function ec(e) {
  let {
    message: t,
    selectedReaction: n,
    disableManage: o = false,
    disableTabs: a = false,
    onClose: s,
    transitionState: l,
    "aria-label": c = V.intl.string(V.t.gHp0Cw)
  } = e, _ = (0, u.e7)([P.Z], () => P.Z.getChannel(t.getChannelId())), p = null == _ ? true : _.getGuildId(), h = (0, u.e7)([L.Z, y.Z], () => {
    var e, n;
    let r = null != (n = L.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = y.Z.getMessage(B.default.castMessageIdAsChannelId(t.id))) ? true : e.firstMessage;
    return null != r ? r.reactions : []
  }, [t]), g = es(h), E = g[0], [I, T] = el(n, null != E ? {
    emoji: E.emoji,
    reactionType: E.burst_count > 0 ? v.O.BURST : v.O.NORMAL
  } : null, g), S = i.useMemo(() => {
    var e;
    return null == I ? null : null != (e = h.find(e => (0, A.ir)(e.emoji, I.emoji))) ? e : null
  }, [h, I]), N = (0, u.e7)([m.Z], () => m.Z.saturation), R = (0, u.e7)([C.Z], () => (0, d.wj)(C.Z.theme));
  if (i.useEffect(() => {
      (0 === h.length || null == I && null == S) && setImmediate(s)
    }, [s, h.length, S, I]), null == I || null == S) return (0, r.jsx)(f.$jN, {});
  if (null == _) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, r.jsx)(O.Z.Provider, {
    value: null != p ? p : true,
    children: (0, r.jsxs)(f.Y0X, {
      "aria-label": c,
      transitionState: l,
      size: f.CgR.DYNAMIC,
      className: H.container,
      parentComponent: "MessageReactions",
      children: [a ? null : (0, r.jsx)(f.Ttm, {
        className: H.scroller,
        fade: true,
        children: g.map(e => {
          var t;
          let n = e.burst_count > 0;
          return (0, r.jsx)(er, {
            isSelected: eu(I, e, n ? v.O.BURST : v.O.NORMAL),
            setSelected: T,
            reactionType: n ? v.O.BURST : v.O.NORMAL,
            emoji: e.emoji,
            count: n ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, b.Z)(e.burst_colors, N, R) : true
          }, "".concat(n ? "burst-" : "normal-").concat(null != (t = e.emoji.id) ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, r.jsx)(ea, {
        message: t,
        reaction: S,
        guildId: p,
        channel: _,
        reactionType: I.reactionType,
        disableManage: o
      })]
    })
  })
}
let eu = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n