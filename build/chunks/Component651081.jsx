/** Chunk was on 74590 **/
/** chunk id: 651081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk566006 = require("./566006.js"),
  Chunk222677 = require("./222677.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk5192 = require("./5192.js"),
  Chunk91047 = require("./91047.jsx"),
  Chunk79390 = require("./79390.js"),
  Chunk918088 = require("./918088.js"),
  Chunk22864 = require("./22864.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132423 = require("./132423.js"),
  Chunk144452 = require("./144452.js");
let k = Chunk566006.O.VOTE;

function I() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsxs)(Chunk481060.ubH, {
    theme: module,
    children: [(0, Chunk951288.jsx)(Chunk481060.oxh, {
      darkSrc: Chunk144452,
      lightSrc: Chunk144452,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, Chunk951288.jsx)(Chunk481060.OZU, {
      note: Chunk388032.intl.string(Chunk388032.t.bwytdh),
      noteClassName: Chunk132423.emptyText,
      className: Chunk132423.emptyTitle,
      children: Chunk388032.intl.string(Chunk388032.t.vhQK3o)
    })]
  })
}

function P(e) {
  var t;
  let {
    emoji: n,
    emojiSize: a,
    imageClassNames: s,
    textClassNames: r
  } = e, i = null == n.id ? g.ZP.getURL(n.name) : f.ZP.getEmojiURL({
    id: n.id,
    animated: null != (t = n.animated) && t,
    size: a
  });
  return null != i && "" !== i ? (0, l.jsx)("img", {
    className: s,
    src: i,
    alt: n.name
  }) : (0, l.jsx)("span", {
    className: r,
    children: n.name
  })
}

function A(e) {
  let {
    poll: t,
    reactionVoteCounts: n,
    selectedAnswerId: a,
    onSelectAnswer: s
  } = e;
  return (0, l.jsx)(d.njP, {
    look: "custom",
    orientation: "vertical",
    "aria-label": Z.intl.string(Z.t["qbir+4"]),
    selectedItem: a,
    onItemSelect: s,
    children: t.answers.map(e => {
      var t;
      let s = String(e.answer_id),
        i = null != (t = n[s]) ? t : 0,
        {
          emoji: o,
          text: u
        } = e.poll_media,
        m = Z.intl.formatToPlainString(Z.t.wqBc7A, {
          numVotes: i,
          option: u
        }),
        h = a === s;
      return (0, l.jsxs)(d.njP.Item, {
        id: s,
        className: r()({
          [y.voteDefault]: !h,
          [y.voteSelected]: h
        }),
        "aria-label": m,
        selectedItem: a,
        children: [null != o ? (0, l.jsx)(P, {
          emoji: o,
          emojiSize: 16,
          imageClassNames: y.emoji,
          textClassNames: r()(y.emoji, y.emojiText),
          "aria-hidden": true
        }) : null, (0, l.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          lineClamp: 1,
          children: (0, l.jsx)(c.Z, {
            position: "left",
            "aria-hidden": true,
            children: u
          })
        }), (0, l.jsxs)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          className: y.voteCount,
          children: ["(", i.toLocaleString(), ")"]
        })]
      }, s)
    })
  })
}

function E(e) {
  let {
    user: t,
    channel: n
  } = e, a = (0, o.e7)([p.default], () => p.default.getUser(t.id), [t]), s = C.ZP.useName(n.guild_id, n.id, t);
  return (0, l.jsxs)("div", {
    className: y.voterDefault,
    onContextMenu: e => (0, N.Pv)(e, t, n),
    children: [(0, l.jsx)("div", {
      className: y.voterAvatarContainer,
      children: (0, l.jsx)(m.Z, {
        user: null != a ? a : t,
        size: d.EFr.SIZE_24,
        "aria-hidden": true,
        guildId: n.guild_id
      })
    }), (0, l.jsxs)(d.Text, {
      tag: "span",
      variant: "text-md/normal",
      className: y.name,
      "aria-label": s,
      children: [(0, l.jsx)("span", {
        className: t.hasUniqueUsername() ? "" : y.nickname,
        children: s
      }), (0, l.jsx)(u.Z, {
        user: t,
        className: y.tagFaded,
        usernameClass: y.username,
        discriminatorClass: y.discriminator,
        forceUsername: true
      })]
    })]
  })
}

function L(e) {
  let {
    message: t,
    reaction: n,
    channel: s
  } = e, {
    reactors: r,
    hasMore: i
  } = (0, T.Z)({
    channelId: s.id,
    messageId: t.id,
    reaction: n
  }), o = a.useRef(null), c = a.useRef(null), [u, m] = a.useState(false), _ = a.useCallback(async () => {
    let e = c.current;
    m(true);
    let l = await x.U0({
      channelId: s.id,
      messageId: t.id,
      emoji: n.emoji,
      limit: S.pTL,
      after: e,
      type: k
    });
    c.current = l[l.length - 1].id, m(false)
  }, [s.id, t.id, n.emoji]);
  (0, h.ZP)(() => {
    _()
  });
  let v = a.useCallback(() => {
      let {
        current: e
      } = o;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && i && !u && _()
    }, [o, i, u, _]),
    j = a.useCallback((e, t) => {
      if (1 === e) return 44 * (0 === t);
      if (0 === e) {
        if (0 === t && 0 === r.length) return 440;
        if (null != r[t]) return 44
      }
      return 0
    }, [r]),
    p = a.useCallback(e => {
      let {
        section: t,
        row: n
      } = e, a = r[n];
      return 1 === t ? 0 === n ? (0, l.jsx)(d.$jN, {
        className: y.spinnerMore
      }, "hasMore") : null : 0 === r.length && u ? (0, l.jsx)(d.$jN, {
        className: y.spinner
      }, "loadingMore") : null != a && (0, l.jsx)(E, {
        channel: s,
        user: a
      }, a.id)
    }, [s, u, r]),
    f = a.useMemo(() => {
      let e = [];
      return 0 === r.length && u ? e.push(0) : (e.push(r.length), i && e.push(1)), e
    }, [i, u, r.length]);
  return (0, l.jsx)("div", {
    className: y.votersListContainer,
    children: (0, l.jsx)(d.aVo, {
      className: y.voters,
      fade: true,
      ref: o,
      sections: f,
      sectionHeight: 0,
      rowHeight: j,
      renderRow: p,
      onScroll: i ? v : true
    })
  })
}

function U(e) {
  var t;
  let {
    message: n,
    initialAnswerId: s,
    onClose: r,
    transitionState: c
  } = e, u = (0, o.e7)([j.Z], () => j.Z.getChannel(n.getChannelId())), [m, h] = a.useState(s), _ = a.useMemo(() => {
    if (null != n.reactions) return (0, w.ef)(n.reactions, m)
  }, [n.reactions, m]), v = a.useMemo(() => (0, b.cZ)(n.reactions), [n.reactions]), x = a.useMemo(() => (function(e) {
    let t = {};
    for (let a of e) {
      var n, l;
      let e = null != (l = null == (n = a.count_details) ? true : n.vote) ? l : 0,
        s = a.emoji.id;
      null != s && (t[s] = e)
    }
    return t
  })(n.reactions), [n.reactions]), p = x[m], f = a.useMemo(() => {
    var e;
    let t = {};
    return null == (e = n.poll) || e.answers.forEach(e => {
      var n;
      (null == e ? true : e.answer_id) != null && (null == (n = e.poll_media) ? true : n.text) != null && (t[e.answer_id] = e.poll_media.text)
    }), t
  }, [null == (t = n.poll) ? true : t.answers]), g = Z.intl.formatToPlainString(Z.t.wqBc7A, {
    numVotes: p,
    option: f[m]
  });
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == n.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, l.jsxs)(i.IX, {
    transitionState: c,
    onClose: r,
    size: "lg",
    children: [(0, l.jsx)(i.xBx, {
      title: n.poll.question.text,
      subtitle: Z.intl.format(Z.t.XRkuof, {
        count: v
      })
    }), (0, l.jsx)(d.w0Z, {
      className: y.body,
      children: (0, l.jsxs)("div", {
        className: y.content,
        children: [(0, l.jsx)(d.Ttm, {
          className: y.scroller,
          fade: true,
          children: (0, l.jsx)(A, {
            poll: n.poll,
            selectedAnswerId: m,
            onSelectAnswer: h,
            reactionVoteCounts: x
          })
        }), (0, l.jsx)(d.njP.Panel, {
          id: m,
          "aria-label": g,
          className: y.panel,
          children: null != _ && p > 0 ? (0, l.jsx)(L, {
            message: n,
            reaction: _,
            channel: u
          }) : (0, l.jsx)(I, {})
        })]
      })
    })]
  })
}