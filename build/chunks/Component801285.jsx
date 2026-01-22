/** Chunk was on 80966 **/
/** chunk id: 801285, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./896048.js"), require("./321073.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk966327 = require("./966327.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk736653 = require("./736653.js"),
  Chunk505527 = require("./505527.js"),
  Chunk649963 = require("./649963.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk562153 = require("./562153.js"),
  Chunk841549 = require("./841549.jsx"),
  Chunk969632 = require("./969632.js"),
  Chunk951727 = require("./951727.js"),
  Chunk573481 = require("./573481.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk974841 = require("./974841.js"),
  Chunk965914 = require("./965914.js");
let k = Chunk505527.v.VOTE;

function V() {
  let e = (0, h.Ay)();
  return (0, t.jsxs)(c.ppr, {
    theme: e,
    children: [(0, t.jsx)(c.G8R, {
      darkSrc: M,
      lightSrc: M,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, t.jsx)(c.SGT, {
      note: y.intl.string(y.t.bwytdh),
      noteClassName: I.BI,
      className: I._U,
      children: y.intl.string(y.t.vhQK3o)
    })]
  })
}

function U(e) {
  var l;
  let {
    emoji: a,
    emojiSize: s,
    imageClassNames: n,
    textClassNames: i
  } = e, r = null == a.id ? p.Ay.getURL(a.name) : v.Ay.getEmojiURL({
    id: a.id,
    animated: null != (l = a.animated) && l,
    size: s
  });
  return null != r && "" !== r ? (0, t.jsx)("img", {
    className: n,
    src: r,
    alt: a.name
  }) : (0, t.jsx)("span", {
    className: i,
    children: a.name
  })
}

function E(e) {
  let {
    poll: l,
    reactionVoteCounts: a,
    selectedAnswerId: s,
    onSelectAnswer: n
  } = e;
  return (0, t.jsx)(c.VQ0, {
    look: "custom",
    orientation: "vertical",
    "aria-label": y.intl.string(y.t["qbir+4"]),
    selectedItem: s,
    onItemSelect: n,
    children: l.answers.map(e => {
      var l;
      let n = String(e.answer_id),
        r = null != (l = a[n]) ? l : 0,
        {
          emoji: o,
          text: u
        } = e.poll_media,
        m = y.intl.formatToPlainString(y.t.wqBc7A, {
          numVotes: r,
          option: u
        }),
        f = s === n;
      return (0, t.jsxs)(c.VQ0.Item, {
        id: n,
        disableItemStyles: true,
        className: i()({
          [I.Ym]: !f,
          [I.yw]: f
        }),
        "aria-label": m,
        selectedItem: s,
        children: [null != o ? (0, t.jsx)(U, {
          emoji: o,
          emojiSize: 16,
          imageClassNames: I.Zg,
          textClassNames: i()(I.Zg, I.at),
          "aria-hidden": true
        }) : null, (0, t.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          lineClamp: 1,
          children: (0, t.jsx)(d.A, {
            position: "left",
            "aria-hidden": true,
            children: u
          })
        }), (0, t.jsxs)(c.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: I.Oo,
          children: ["(", r.toLocaleString(), ")"]
        })]
      }, n)
    })
  })
}

function T(e) {
  let {
    user: l,
    channel: a
  } = e, s = (0, o.bG)([j.default], () => j.default.getUser(l.id), [l]), n = _.Ay.useName(a.guild_id, a.id, l);
  return (0, t.jsxs)("div", {
    className: I.Mg,
    onContextMenu: e => (0, w.wQ)(e, l, a),
    children: [(0, t.jsx)("div", {
      className: I.x$,
      children: (0, t.jsx)(m.A, {
        user: null != s ? s : l,
        size: c._3J.SIZE_32,
        "aria-hidden": true,
        guildId: a.guild_id
      })
    }), (0, t.jsxs)("div", {
      className: I.v3,
      children: [(0, t.jsx)(c.Text, {
        variant: "text-md/normal",
        className: I.UU,
        "aria-label": n,
        children: (0, t.jsx)("span", {
          className: I.Ci,
          children: n
        })
      }), (0, t.jsx)(u.A, {
        user: l,
        className: I.rW,
        usernameClass: i()(I.Xh, I.Ci),
        discriminatorClass: I.D2,
        forceUsername: true
      })]
    })]
  })
}

function R(e) {
  let {
    message: l,
    reaction: a,
    channel: n
  } = e, {
    reactors: i,
    hasMore: o
  } = (0, A.A)({
    channelId: n.id,
    messageId: l.id,
    reaction: a
  }), d = s.useRef(null), u = s.useRef(null), [m, h] = s.useState(false), x = s.useCallback(async () => {
    let e = u.current;
    h(true);
    let t = await g.ao({
      channelId: n.id,
      messageId: l.id,
      emoji: a.emoji,
      limit: S.WxW,
      after: e,
      type: k
    });
    u.current = t[t.length - 1].id, h(false)
  }, [n.id, l.id, a.emoji]);
  (0, f.Ay)(() => {
    x()
  });
  let b = s.useCallback(() => {
      let {
        current: e
      } = d;
      if (null == e) return;
      let l = e.getScrollerState();
      l.scrollTop + l.offsetHeight >= l.scrollHeight - 52 && o && !m && x()
    }, [d, o, m, x]),
    j = s.useCallback((e, l) => 1 === e ? 52 * (0 === l) : 52 * (0 === e && (0 === l && 0 === i.length || null != i[l])), [i]),
    v = s.useCallback(e => {
      let {
        section: l,
        row: a
      } = e, s = i[a];
      return 1 === l ? 0 === a ? (0, t.jsx)(c.y$y, {
        className: I.u1
      }, "hasMore") : null : 0 === i.length && m ? (0, t.jsx)(c.y$y, {
        className: I.u1
      }, "loadingMore") : null != s && (0, t.jsx)(T, {
        channel: n,
        user: s
      }, s.id)
    }, [n, m, i]),
    p = s.useMemo(() => {
      let e = [];
      return 0 === i.length && m ? e.push(1) : (e.push(i.length), o && e.push(1)), e
    }, [o, m, i.length]);
  return (0, t.jsx)(r.Eie, {
    className: I.Ov,
    fade: true,
    ref: d,
    sections: p,
    sectionHeight: 0,
    rowHeight: j,
    renderRow: v,
    onScroll: o ? b : true
  })
}

function G(e) {
  var l;
  let {
    message: a,
    initialAnswerId: n,
    onClose: i,
    transitionState: d
  } = e, u = (0, o.bG)([b.A], () => b.A.getChannel(a.getChannelId())), [m, f] = s.useState(n), h = s.useMemo(() => {
    if (null != a.reactions) return (0, C.Ej)(a.reactions, m)
  }, [a.reactions, m]), x = s.useMemo(() => (0, N.aw)(a.reactions), [a.reactions]), g = s.useMemo(() => (function(e) {
    let l = {};
    for (let s of e) {
      var a, t;
      let e = null != (a = null == (t = s.count_details) ? true : t.vote) ? a : 0,
        n = s.emoji.id;
      null != n && (l[n] = e)
    }
    return l
  })(a.reactions), [a.reactions]), j = g[m], v = s.useMemo(() => {
    var e;
    let l = {};
    return null == (e = a.poll) || e.answers.forEach(e => {
      var a;
      (null == e ? true : e.answer_id) != null && (null == (a = e.poll_media) ? true : a.text) != null && (l[e.answer_id] = e.poll_media.text)
    }), l
  }, [null == (l = a.poll) ? true : l.answers]), p = y.intl.formatToPlainString(y.t.wqBc7A, {
    numVotes: j,
    option: v[m]
  });
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == a.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, t.jsxs)(r.dWK, {
    transitionState: d,
    onClose: i,
    size: "lg",
    children: [(0, t.jsx)(r.rQ0, {
      title: a.poll.question.text,
      subtitle: y.intl.format(y.t.XRkuof, {
        count: x
      })
    }), (0, t.jsx)("div", {
      className: I.jH
    }), (0, t.jsxs)("div", {
      className: I.rf,
      children: [(0, t.jsx)(c.HOs, {
        className: I.XG,
        fade: true,
        children: (0, t.jsx)(E, {
          poll: a.poll,
          selectedAnswerId: m,
          onSelectAnswer: f,
          reactionVoteCounts: g
        })
      }), (0, t.jsx)(c.VQ0.Panel, {
        id: m,
        "aria-label": p,
        className: I.nd,
        children: null != h && j > 0 ? (0, t.jsx)(R, {
          message: a,
          reaction: h,
          channel: u
        }) : (0, t.jsx)(V, {})
      })]
    })]
  })
}