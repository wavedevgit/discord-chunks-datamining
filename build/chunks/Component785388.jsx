/** Chunk was on 38626 **/
/** chunk id: 785388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => et
}), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./358797.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
  Chunk575890 = require("./575890.js"),
  Chunk197571 = require("./197571.js");

function z(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function X(e) {
  return null == e.id ? j.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}
let Y = e => {
    let {
      emoji: t,
      channelId: n,
      messageId: l
    } = e, [a, s] = r.useState(true), [c, u] = r.useState([]), d = r.useMemo(() => {
      if (null == c || c.length < 1) return;
      let e = (0, x.Zn)(t, c[0], n, {
        emojiSize: S.M.LARGE,
        messageId: l
      });
      return (0, i.jsx)(S.Z, {
        className: W.__invalid_effect,
        effect: e,
        emojiSize: S.M.LARGE,
        onComplete: () => s(false)
      })
    }, [c, t, n, l]);
    return r.useEffect(() => {
      let e = false;
      return s(true), !async function() {
        let n = await (0, D.B6)(t);
        Array.isArray(n) && n.length > 0 && !e && u(n)
      }(), () => {
        e = true
      }
    }, [t]), (0, i.jsxs)("div", {
      className: W.burstEmojiSection,
      children: [d, (0, i.jsx)(p.Z, {
        className: o()(W.burstEmoji, {
          [W.hideEmoji]: a
        }),
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated,
        size: "reaction"
      }), (0, i.jsx)(h.Text, {
        variant: "text-md/medium",
        children: X(t)
      })]
    })
  },
  q = Chunk73800.memo(function(e) {
    let {
      emoji: t,
      count: n,
      isSelected: l,
      setSelected: a,
      reactionType: s,
      colors: u
    } = e, d = r.useMemo(() => X(t), [t]), p = r.useMemo(() => (function(e, t, n, r) {
      let l = null == e.id ? D.ZP.getURL(e.name) : k.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 24
      });
      return null != l && "" !== l ? (0, i.jsx)("img", {
        className: n,
        src: l,
        alt: e.name
      }) : (0, i.jsx)("span", {
        className: r,
        children: e.name
      })
    })(t, 0, W.emoji, o()(W.emoji, W.emojiText)), [t]), m = s === T.O.BURST, f = m ? H.t.VmiNjY : H.t.cNfs19, g = H.intl.formatToPlainString(f, {
      name: d,
      n: n
    }), b = r.useMemo(() => {
      let e = {};
      if (m) {
        var t, n, i, r;
        let {
          backgroundColor: o = "",
          opacity: a = 1
        } = null != u ? u : {};
        l ? (e.background = null != (t = (0, c.wK)(o, a)) ? t : "", e.border = "1px solid ".concat(null != (n = (0, c.wK)(o, 1.1 * a)) ? n : "")) : (e.background = null != (i = (0, c.wK)(o, .025)) ? i : "", e.border = "1px solid ".concat(null != (r = (0, c.wK)(o, .05)) ? r : ""))
      }
      return e
    }, [m, u, l]), j = r.useMemo(() => {
      let e = {};
      if (m) {
        let {
          accentColor: t = ""
        } = null != u ? u : {};
        e.color = t
      }
      return e
    }, [m, u]), O = r.useCallback(() => {
      a({
        emoji: t,
        reactionType: s
      })
    }, [t, s, a]);
    return (0, i.jsx)(h.ua7, {
      position: "left",
      text: d,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: r
        } = e;
        return (0, i.jsxs)(h.P3F, {
          className: o()({
            [W.reactionDefault]: !l,
            [W.reactionSelected]: l
          }),
          "aria-label": g,
          onClick: O,
          onMouseEnter: t,
          onMouseLeave: r,
          style: b,
          children: [p, (0, i.jsx)(h.Text, {
            variant: "text-sm/bold",
            style: j,
            children: n
          })]
        })
      }
    })
  });

function $(e) {
  let {
    emoji: t,
    user: n,
    message: r,
    channel: l,
    guildId: o,
    reactionType: a,
    onRemoveReactor: s,
    disableManage: c = false
  } = e, d = (0, u.e7)([P.default], () => P.default.getId()), p = (0, u.e7)([L.default], () => L.default.getUser(n.id), [n]), g = (0, I.$R)(l), j = (0, u.e7)([M.Z], () => M.Z.can(G.Plq.MANAGE_MESSAGES, l) && g) || d === n.id, O = (0, u.e7)([w.ZP, C.Z, _.Z], () => U.ZP.getName(o, l.id, n));
  return (0, i.jsxs)(b.Z, {
    className: W.reactorDefault,
    onContextMenu: e => (0, B.Pv)(e, n, l),
    align: b.Z.Align.CENTER,
    children: [(0, i.jsx)(b.Z.Child, {
      wrap: true,
      grow: 0,
      shrink: 0,
      className: F.marginReset,
      children: (0, i.jsx)(f.Z, {
        user: null != p ? p : n,
        size: h.EFr.SIZE_24
      })
    }), (0, i.jsx)(b.Z.Child, {
      children: (0, i.jsxs)(h.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: W.name,
        children: [null != O && "" !== O && (0, i.jsx)("span", {
          className: n.hasUniqueUsername() ? "" : W.nickname,
          children: O
        }), (0, i.jsx)(m.Z, {
          user: n,
          className: null != O && "" !== O ? W.tagFaded : null,
          usernameClass: W.username,
          discriminatorClass: W.discriminator,
          forceUsername: true
        })]
      })
    }), !c && j && (0, i.jsx)(h.P3F, {
      onClick: function() {
        E.WO({
          channelId: l.id,
          messageId: r.id,
          emoji: t,
          location: E.TW.MESSAGE,
          userId: n.id,
          options: {
            burst: a === T.O.BURST
          }
        }), null == s || s()
      },
      children: (0, i.jsx)(h.Dio, {
        size: "xs",
        color: "currentColor",
        className: W.remove
      })
    })]
  })
}
class Q extends Chunk73800.PureComponent {
  componentDidMount() {
    this.loadMore()
  }
  componentDidUpdate(e) {
    s().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType || this.setState({
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
      lastId: i
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
      message: r,
      reactionType: l
    } = this.props, o = [];
    return 0 === exports.length && this.state.loadingMore ? o.push(length) : (o.push(exports.length), module && o.push(1)), (0, Chunk255367.jsxs)("div", {
      className: Chunk575890.reactorsContainer,
      children: [Chunk120356 === Chunk566006.O.BURST && (0, Chunk255367.jsx)(Y, {
        emoji: require.emoji,
        channelId: Chunk73800.getChannelId(),
        messageId: Chunk73800.id
      }), (0, Chunk255367.jsx)(Chunk481060.aVo, {
        className: Chunk575890.reactors,
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
    super(...e), z(this, "scrollerRef", r.createRef()), z(this, "state", {
      lastId: null,
      loadingMore: false
    }), z(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), z(this, "getRowHeight", (e, t) => {
      let {
        reactors: n
      } = this.props;
      if (1 === e) return 44 * (0 === t);
      if (0 === e) {
        if (0 === t && 0 === n.length) return 440;
        if (null != this.props.reactors[t]) return 44
      }
      return 0
    }), z(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        message: r,
        guildId: l,
        channel: o,
        reaction: a,
        reactors: s,
        reactionType: c,
        disableManage: u
      } = this.props, d = s[n];
      return 1 === t ? 0 === n ? (0, i.jsx)(h.$jN, {
        className: W.spinnerMore
      }, "hasMore") : null : 0 === s.length && this.state.loadingMore ? (0, i.jsx)(h.$jN, {
        className: W.spinner
      }, "loadingMore") : null != d && (0, i.jsx)($, {
        message: r,
        emoji: a.emoji,
        guildId: l,
        channel: o,
        user: d,
        reaction: a,
        reactionType: c,
        disableManage: u
      }, d.id)
    })
  }
}
let ee = Chunk442837.ZP.connectStores([Chunk542578.Z], e => {
  let {
    message: t,
    reaction: n,
    reactionType: i
  } = e, r = Z.Z.getReactions(t.getChannelId(), t.id, n.emoji, G.pTL, i);
  if (null == r) return {
    reactors: [],
    hasMore: false
  };
  let l = Array.from(r.values()),
    o = (i === T.O.BURST ? n.burst_count : n.count) > l.length;
  return {
    reactors: l,
    hasMore: o
  }
})(Q);

function et(e) {
  let {
    message: t,
    selectedReaction: n,
    disableManage: l = false,
    disableTabs: o = false,
    onClose: a,
    transitionState: s,
    "aria-label": c = H.intl.string(H.t.gHp0Cw)
  } = e, p = (0, u.e7)([C.Z], () => C.Z.getChannel(t.getChannelId())), m = null == p ? true : p.getGuildId(), f = (0, u.e7)([A.Z, y.Z], () => {
    var e, n;
    let i = null != (n = A.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = y.Z.getMessage(V.default.castMessageIdAsChannelId(t.id))) ? true : e.firstMessage;
    return null != i ? i.reactions : []
  }, [t]), b = r.useMemo(() => {
    let e = [];
    return f.forEach(t => {
      t.burst_count > 0 && e.push(J(K({}, t), {
        count: 0
      })), t.count > 0 && e.push(J(K({}, t), {
        burst_count: 0
      }))
    }), e.sort((e, t) => {
      let n = e.burst_count > 0 ? e.burst_count : e.count;
      return (t.burst_count > 0 ? t.burst_count : t.count) - n
    }), e
  }, [f]), j = b[0], [S, x] = function(e, t, n) {
    let [i, l] = r.useState(null != e ? e : t);
    return r.useEffect(() => {
      null != i && null == n.find(e => {
        let t = null != e.me_vote ? T.O.VOTE : e.burst_count > 0 ? T.O.BURST : T.O.NORMAL,
          n = (0, R.ir)(e.emoji, i.emoji),
          r = t === i.reactionType;
        return n && r
      }) && l(t)
    }, [i, l, n, t]), [i, l]
  }(n, null != j ? {
    emoji: j.emoji,
    reactionType: j.burst_count > 0 ? T.O.BURST : T.O.NORMAL
  } : null, b), E = r.useMemo(() => {
    var e;
    return null == S ? null : null != (e = f.find(e => (0, R.ir)(e.emoji, S.emoji))) ? e : null
  }, [f, S]), I = (0, u.e7)([g.Z], () => g.Z.saturation), P = (0, u.e7)([N.Z], () => (0, d.wj)(N.Z.theme));
  if (r.useEffect(() => {
      (0 === f.length || null == S && null == E) && setImmediate(a)
    }, [a, f.length, E, S]), null == S || null == E) return (0, i.jsx)(h.$jN, {});
  if (null == p) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, i.jsx)(v.Z.Provider, {
    value: null != m ? m : true,
    children: (0, i.jsxs)(h.Y0X, {
      "aria-label": c,
      transitionState: s,
      size: h.CgR.DYNAMIC,
      className: W.container,
      parentComponent: "MessageReactions",
      children: [o ? null : (0, i.jsx)(h.Ttm, {
        className: W.scroller,
        fade: true,
        children: b.map(e => {
          var t;
          let n = e.burst_count > 0;
          return (0, i.jsx)(q, {
            isSelected: en(S, e, n ? T.O.BURST : T.O.NORMAL),
            setSelected: x,
            reactionType: n ? T.O.BURST : T.O.NORMAL,
            emoji: e.emoji,
            count: n ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, O.Z)(e.burst_colors, I, P) : true
          }, "".concat(n ? "burst-" : "normal-").concat(null != (t = e.emoji.id) ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, i.jsx)(ee, {
        message: t,
        reaction: E,
        guildId: m,
        channel: p,
        reactionType: S.reactionType,
        disableManage: l
      })]
    })
  })
}
let en = (e, t, n) => s().isEqual(e.emoji, t.emoji) && e.reactionType === n