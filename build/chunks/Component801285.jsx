/** Chunk was on 80966 **/
/** chunk id: 801285, original params: e,l,t (module,exports,require) **/
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
let T = Chunk505527.v.VOTE;

function k() {
  let e = (0, _.Ay)();
  return (0, n.jsxs)(d.ppr, {
    theme: e,
    children: [(0, n.jsx)(d.G8R, {
      darkSrc: M,
      lightSrc: M,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, n.jsx)(d.SGT, {
      note: S.intl.string(S.t.bwytdh),
      noteClassName: I.BI,
      className: I._U,
      children: S.intl.string(S.t.vhQK3o)
    })]
  })
}

function V(e) {
  var l;
  let {
    emoji: t,
    emojiSize: s,
    imageClassNames: a,
    textClassNames: i
  } = e, r = null == t.id ? p.Ay.getURL(t.name) : f.Ay.getEmojiURL({
    id: t.id,
    animated: null != (l = t.animated) && l,
    size: s
  });
  return null != r && "" !== r ? (0, n.jsx)("img", {
    className: a,
    src: r,
    alt: t.name
  }) : (0, n.jsx)("span", {
    className: i,
    children: t.name
  })
}

function U(e) {
  let {
    poll: l,
    reactionVoteCounts: t,
    selectedAnswerId: s,
    onSelectAnswer: a
  } = e;
  return (0, n.jsx)(d.VQ0, {
    look: "custom",
    orientation: "vertical",
    "aria-label": S.intl.string(S.t["qbir+4"]),
    selectedItem: s,
    onItemSelect: a,
    children: l.answers.map(e => {
      var l;
      let a = String(e.answer_id),
        r = null != (l = t[a]) ? l : 0,
        {
          emoji: o,
          text: u
        } = e.poll_media,
        m = S.intl.formatToPlainString(S.t.wqBc7A, {
          numVotes: r,
          option: u
        }),
        h = s === a;
      return (0, n.jsxs)(d.VQ0.Item, {
        id: a,
        disableItemStyles: true,
        className: i()({
          [I.Ym]: !h,
          [I.yw]: h
        }),
        "aria-label": m,
        selectedItem: s,
        children: [null != o ? (0, n.jsx)(V, {
          emoji: o,
          emojiSize: 16,
          imageClassNames: I.Zg,
          textClassNames: i()(I.Zg, I.at),
          "aria-hidden": true
        }) : null, (0, n.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          lineClamp: 1,
          children: (0, n.jsx)(c.A, {
            position: "left",
            "aria-hidden": true,
            children: u
          })
        }), (0, n.jsxs)(d.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: I.Oo,
          children: ["(", r.toLocaleString(), ")"]
        })]
      }, a)
    })
  })
}

function E(e) {
  let {
    user: l,
    channel: t
  } = e, s = (0, o.bG)([j.default], () => j.default.getUser(l.id), [l]), a = w.Ay.useName(t.guild_id, t.id, l);
  return (0, n.jsxs)("div", {
    className: I.Mg,
    onContextMenu: e => (0, C.wQ)(e, l, t),
    children: [(0, n.jsx)("div", {
      className: I.x$,
      children: (0, n.jsx)(m.A, {
        user: null != s ? s : l,
        size: d._3J.SIZE_32,
        "aria-hidden": true,
        guildId: t.guild_id
      })
    }), (0, n.jsxs)("div", {
      className: I.v3,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        className: I.UU,
        "aria-label": a,
        children: (0, n.jsx)("span", {
          className: I.Ci,
          children: a
        })
      }), (0, n.jsx)(u.A, {
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
    reaction: t,
    channel: a
  } = e, {
    reactors: i,
    hasMore: o
  } = (0, y.A)({
    channelId: a.id,
    messageId: l.id,
    reaction: t
  }), c = s.useRef(null), u = s.useRef(null), [m, _] = s.useState(false), x = s.useCallback(async () => {
    let e = u.current;
    _(true);
    let n = await v.ao({
      channelId: a.id,
      messageId: l.id,
      emoji: t.emoji,
      limit: A.WxW,
      after: e,
      type: T
    });
    u.current = n[n.length - 1].id, _(false)
  }, [a.id, l.id, t.emoji]);
  (0, h.Ay)(() => {
    x()
  });
  let g = s.useCallback(() => {
      let {
        current: e
      } = c;
      if (null == e) return;
      let l = e.getScrollerState();
      l.scrollTop + l.offsetHeight >= l.scrollHeight - 52 && o && !m && x()
    }, [c, o, m, x]),
    j = s.useCallback((e, l) => 1 === e ? 52 * (0 === l) : 52 * (0 === e && (0 === l && 0 === i.length || null != i[l])), [i]),
    f = s.useCallback(e => {
      let {
        section: l,
        row: t
      } = e, s = i[t];
      return 1 === l ? 0 === t ? (0, n.jsx)(d.y$y, {
        className: I.u1
      }, "hasMore") : null : 0 === i.length && m ? (0, n.jsx)(d.y$y, {
        className: I.u1
      }, "loadingMore") : null != s && (0, n.jsx)(E, {
        channel: a,
        user: s
      }, s.id)
    }, [a, m, i]),
    p = s.useMemo(() => {
      let e = [];
      return 0 === i.length && m ? e.push(1) : (e.push(i.length), o && e.push(1)), e
    }, [o, m, i.length]);
  return (0, n.jsx)(r.Eie, {
    className: I.Ov,
    fade: true,
    ref: c,
    sections: p,
    sectionHeight: 0,
    rowHeight: j,
    renderRow: f,
    onScroll: o ? g : true
  })
}

function G(e) {
  var l;
  let {
    message: t,
    initialAnswerId: a,
    onClose: i,
    transitionState: c
  } = e, u = (0, o.bG)([g.A], () => g.A.getChannel(t.getChannelId())), [m, h] = s.useState(a), _ = s.useMemo(() => {
    if (null != t.reactions) return (0, b.Ej)(t.reactions, m)
  }, [t.reactions, m]), x = s.useMemo(() => (0, N.aw)(t.reactions), [t.reactions]), v = s.useMemo(() => (function(e) {
    let l = {};
    for (let s of e) {
      var t, n;
      let e = null != (t = null == (n = s.count_details) ? true : n.vote) ? t : 0,
        a = s.emoji.id;
      null != a && (l[a] = e)
    }
    return l
  })(t.reactions), [t.reactions]), j = v[m], f = s.useMemo(() => {
    var e;
    let l = {};
    return null == (e = t.poll) || e.answers.forEach(e => {
      var t;
      (null == e ? true : e.answer_id) != null && (null == (t = e.poll_media) ? true : t.text) != null && (l[e.answer_id] = e.poll_media.text)
    }), l
  }, [null == (l = t.poll) ? true : l.answers]), p = S.intl.formatToPlainString(S.t.wqBc7A, {
    numVotes: j,
    option: f[m]
  });
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == t.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, n.jsxs)(r.dWK, {
    transitionState: c,
    onClose: i,
    size: "lg",
    children: [(0, n.jsx)(r.rQ0, {
      title: t.poll.question.text,
      subtitle: S.intl.format(S.t.XRkuof, {
        count: x
      })
    }), (0, n.jsx)("div", {
      className: I.jH
    }), (0, n.jsxs)("div", {
      className: I.rf,
      children: [(0, n.jsx)(d.HOs, {
        className: I.XG,
        fade: true,
        children: (0, n.jsx)(U, {
          poll: t.poll,
          selectedAnswerId: m,
          onSelectAnswer: h,
          reactionVoteCounts: v
        })
      }), (0, n.jsx)(d.VQ0.Panel, {
        id: m,
        "aria-label": p,
        className: I.nd,
        children: null != _ && j > 0 ? (0, n.jsx)(R, {
          message: t,
          reaction: _,
          channel: u
        }) : (0, n.jsx)(k, {})
      })]
    })]
  })
}