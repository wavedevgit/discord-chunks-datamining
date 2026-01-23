/** Chunk was on web.js **/
/** chunk id: 112753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => ed
}), require("./896048.js"), require("./321073.js"), require("./638769.js"), require("./142703.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk297413 = require("./297413.jsx"),
  Chunk966327 = require("./966327.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk7584 = require("./7584.js"),
  Chunk478840 = require("./478840.js"),
  Chunk969043 = require("./969043.js"),
  Chunk386467 = require("./386467.js"),
  Chunk505527 = require("./505527.js"),
  Chunk211180 = require("./211180.jsx"),
  Chunk60317 = require("./60317.js"),
  Chunk406704 = require("./406704.js"),
  Chunk544028 = require("./544028.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk956703 = require("./956703.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk562153 = require("./562153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk841549 = require("./841549.jsx"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk882181 = require("./882181.js"),
  Chunk473169 = require("./473169.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = 52,
  $ = 52,
  ee = 24,
  et = .025;

function en(e) {
  return null == e.id ? b.Ay.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function er(e, t, n, i) {
  let a = null == e.id ? U.Ay.getURL(e.name) : k.Ay.getEmojiURL({
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
    } = e, [o, l] = i.useState(true), [c, u] = i.useState([]), d = i.useMemo(() => {
      if (null == c || c.length < 1) return;
      let e = (0, T.eT)(t, c[0], n, {
        emojiSize: S.x.LARGE,
        messageId: a
      });
      return (0, r.jsx)(S.A, {
        className: K.__invalid_effect,
        effect: e,
        emojiSize: S.x.LARGE,
        onComplete: () => l(false)
      })
    }, [c, t, n, a]);
    return i.useEffect(() => {
      let e = false;
      return l(true), !async function() {
        let n = await (0, U.D_)(t);
        Array.isArray(n) && n.length > 0 && !e && u(n)
      }(), () => {
        e = true
      }
    }, [t]), (0, r.jsxs)("div", {
      className: K.sb,
      children: [d, (0, r.jsx)(h.A, {
        className: s()(K.h_, {
          [K.bD]: o
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
  ea = Chunk64700.memo(function(e) {
    let {
      emoji: t,
      count: n,
      isSelected: a,
      setSelected: o,
      reactionType: l,
      colors: u
    } = e, f = i.useMemo(() => en(t), [t]), p = i.useMemo(() => er(t, ee, K.Zg, s()(K.Zg, K.at)), [t]), h = l === I.v.BURST, m = h ? W.t.VmiNjd : W.t["cNfs1/"], g = W.intl.formatToPlainString(m, {
      name: f,
      n: n
    }), E = i.useMemo(() => {
      let e = {};
      if (h) {
        var t, n, r, i;
        let {
          backgroundColor: s = "",
          opacity: o = 1
        } = null != u ? u : {};
        a ? (e.background = null != (t = (0, c.xp)(s, o)) ? t : "", e.border = "1px solid ".concat(null != (n = (0, c.xp)(s, 1.1 * o)) ? n : "")) : (e.background = null != (r = (0, c.xp)(s, et)) ? r : "", e.border = "1px solid ".concat(null != (i = (0, c.xp)(s, 2 * et)) ? i : ""))
      }
      return e
    }, [h, u, a]), y = i.useMemo(() => {
      let e = {};
      if (h) {
        let {
          accentColor: t = ""
        } = null != u ? u : {};
        e.color = t
      }
      return e
    }, [h, u]), b = i.useCallback(() => {
      o({
        emoji: t,
        reactionType: l
      })
    }, [t, l, o]);
    return (0, r.jsx)(d.m, {
      position: "left",
      __unsupportedReactNodeAsText: f,
      asContainer: true,
      children: (0, r.jsxs)(_.DUT, {
        className: s()({
          [K.X_]: !a,
          [K.HS]: a
        }),
        "aria-label": g,
        "aria-selected": a,
        onClick: b,
        style: E,
        children: [p, (0, r.jsx)(_.Text, {
          variant: "text-sm/bold",
          style: y,
          children: n
        })]
      })
    })
  });

function es(e) {
  let {
    emoji: t,
    user: n,
    message: i,
    channel: a,
    guildId: o,
    reactionType: l,
    onRemoveReactor: c
  } = e, d = (0, u.bG)([w.default], () => w.default.getId()), p = (0, u.bG)([M.default], () => M.default.getUser(n.id), [n]), h = (0, C.Id)(a), E = (0, u.bG)([L.A], () => L.A.can(Y.xBc.MANAGE_MESSAGES, a) && h) || d === n.id, b = (0, u.bG)([P.Ay, R.A, j.A], () => G.Ay.getName(o, a.id, n));

  function O() {
    B.et({
      channelId: a.id,
      messageId: i.id,
      emoji: t,
      location: B.qN.MESSAGE,
      userId: n.id,
      options: {
        burst: l === I.v.BURST
      }
    }), null == c || c()
  }
  return (0, r.jsxs)(y.A, {
    className: K.Px,
    onContextMenu: e => (0, F.wQ)(e, n, a),
    align: y.A.Align.CENTER,
    tabIndex: 0,
    "aria-label": n.username,
    children: [(0, r.jsx)(y.A.Child, {
      wrap: true,
      grow: 0,
      shrink: 0,
      className: z.Gf,
      children: (0, r.jsx)(g.A, {
        user: null != p ? p : n,
        size: _._3J.SIZE_32
      })
    }), (0, r.jsxs)(y.A.Child, {
      className: K.Bi,
      children: [(0, r.jsx)(_.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: K.UU,
        children: null != b && "" !== b && (0, r.jsx)("span", {
          className: K.Ci,
          children: b
        })
      }), (0, r.jsx)(m.A, {
        user: n,
        className: null != b && "" !== b ? K.rW : null,
        usernameClass: s()(K.Xh, K.Ci),
        discriminatorClass: K.D2,
        forceUsername: true
      })]
    }), E && (0, r.jsx)("div", {
      className: K.TF,
      children: (0, r.jsx)(f.K0, {
        onClick: O,
        "aria-label": W.intl.string(W.t["+BdaDn"]),
        icon: _.PGe,
        size: "sm",
        variant: "icon-only"
      })
    })]
  })
}
class eo extends Chunk64700.PureComponent {
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
    }), B.ao({
      channelId: e.getChannelId(),
      messageId: e.id,
      emoji: t.emoji,
      limit: Y.WxW,
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
    } = this.props, s = [];
    return 0 === t.length && this.state.loadingMore ? s.push(1) : (s.push(t.length), e && s.push(1)), (0, r.jsxs)("div", {
      className: K.Ro,
      children: [a === I.v.BURST && (0, r.jsx)(ei, {
        emoji: n.emoji,
        channelId: i.getChannelId(),
        messageId: i.id
      }), (0, r.jsx)(_.Eie, {
        className: K.OV,
        fade: true,
        ref: this.scrollerRef,
        sections: s,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: e ? this.handleScroll : true
      })]
    })
  }
  constructor(...e) {
    super(...e), q(this, "scrollerRef", i.createRef()), q(this, "state", {
      lastId: null,
      loadingMore: true
    }), q(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - J && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), q(this, "getRowHeight", (e, t) => {
      let {
        reactors: n
      } = this.props;
      if (1 === e) return 0 === t ? J : 0;
      if (0 === e) {
        if (0 === t && 0 === n.length) return $;
        if (null != this.props.reactors[t]) return J
      }
      return 0
    }), q(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        message: i,
        guildId: a,
        channel: s,
        reaction: o,
        reactors: l,
        reactionType: c
      } = this.props, u = l[n];
      return 1 === t ? 0 === n ? (0, r.jsx)(_.y$y, {
        className: K.u1
      }, "hasMore") : null : 0 === l.length && this.state.loadingMore ? (0, r.jsx)(_.y$y, {
        className: K.u1
      }, "loadingMore") : null != u && (0, r.jsx)(es, {
        message: i,
        emoji: o.emoji,
        guildId: a,
        channel: s,
        user: u,
        reaction: o,
        reactionType: c
      }, u.id)
    })
  }
}
let el = Chunk311907.Ay.connectStores([Chunk956703.A], e => {
  let {
    message: t,
    reaction: n,
    reactionType: r
  } = e, i = D.A.getReactions(t.getChannelId(), t.id, n.emoji, Y.WxW, r);
  if (null == i) return {
    reactors: [],
    hasMore: false
  };
  let a = Array.from(i.values()),
    s = (r === I.v.BURST ? n.burst_count : n.count) > a.length;
  return {
    reactors: a,
    hasMore: s
  }
})(eo);

function ec(e) {
  return i.useMemo(() => {
    let t = [];
    return e.forEach(e => {
      e.burst_count > 0 && t.push(Q(Z({}, e), {
        count: 0
      })), e.count > 0 && t.push(Q(Z({}, e), {
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
      let t = null != e.me_vote ? I.v.VOTE : e.burst_count > 0 ? I.v.BURST : I.v.NORMAL,
        n = (0, H.i6)(e.emoji, r.emoji),
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
    transitionState: s,
    "aria-label": o = W.intl.string(W.t.gHp0C4)
  } = e, l = (0, u.bG)([R.A], () => R.A.getChannel(t.getChannelId())), c = null == l ? true : l.getGuildId(), d = (0, u.bG)([x.A, v.A], () => {
    var e, n;
    let r = null != (e = x.A.getMessage(t.getChannelId(), t.id)) ? e : null == (n = v.A.getMessage(V.default.castMessageIdAsChannelId(t.id))) ? true : n.firstMessage;
    return null != r ? r.reactions : []
  }, [t]), h = ec(d), m = h[0], [g, y] = eu(n, null != m ? {
    emoji: m.emoji,
    reactionType: m.burst_count > 0 ? I.v.BURST : I.v.NORMAL
  } : null, h), b = i.useMemo(() => {
    var e;
    return null == g ? null : null != (e = d.find(e => (0, H.i6)(e.emoji, g.emoji))) ? e : null
  }, [d, g]), S = (0, u.bG)([E.A], () => E.A.saturation), T = (0, u.bG)([N.A], () => (0, p.Mw)(N.A.theme));
  if (i.useEffect(() => {
      (0 === d.length || null == g && null == b) && setImmediate(a)
    }, [a, d.length, b, g]), null == g || null == b) return (0, r.jsx)(_.y$y, {});
  if (null == l) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, r.jsx)(A.A.Provider, {
    value: null != c ? c : true,
    children: (0, r.jsxs)(f.dWK, {
      transitionState: s,
      size: "md",
      onClose: a,
      "aria-label": o,
      children: [(0, r.jsx)(f.rQ0, {
        title: W.intl.string(W.t.gHp0C4)
      }), (0, r.jsx)("div", {
        className: K.jH
      }), (0, r.jsxs)("div", {
        className: K.kL,
        children: [(0, r.jsx)(_.HOs, {
          className: K.XG,
          fade: true,
          children: h.map(e => {
            var t;
            let n = e.burst_count > 0;
            return (0, r.jsx)(ea, {
              isSelected: ef(g, e, n ? I.v.BURST : I.v.NORMAL),
              setSelected: y,
              reactionType: n ? I.v.BURST : I.v.NORMAL,
              emoji: e.emoji,
              count: n ? e.burst_count : e.count,
              colors: null != e.burst_colors ? (0, O.V)(e.burst_colors, S, T) : true
            }, "".concat(n ? "burst-" : "normal-").concat(null != (t = e.emoji.id) ? t : "", ":").concat(e.emoji.name))
          })
        }), (0, r.jsx)(el, {
          message: t,
          reaction: b,
          guildId: c,
          channel: l,
          reactionType: g.reactionType
        })]
      })]
    })
  })
}
let ef = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n