/** Chunk was on 74590 **/
/** chunk id: 651081, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk731595 = require("./731595.js"),
  Chunk144452 = require("./144452.js");
let k = Chunk566006.O.VOTE;

function P() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk54381.jsxs)(Chunk481060.ubH, {
    theme: module,
    children: [(0, Chunk54381.jsx)(Chunk481060.oxh, {
      darkSrc: Chunk144452,
      lightSrc: Chunk144452,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, Chunk54381.jsx)(Chunk481060.OZU, {
      note: Chunk388032.intl.string(Chunk388032.t.bwytdh),
      noteClassName: Chunk731595.emptyText,
      className: Chunk731595.emptyTitle,
      children: Chunk388032.intl.string(Chunk388032.t.vhQK3o)
    })]
  })
}

function M(e) {
  var t;
  let {
    emoji: l,
    emojiSize: a,
    imageClassNames: s,
    textClassNames: i
  } = e, r = null == l.id ? g.ZP.getURL(l.name) : f.ZP.getEmojiURL({
    id: l.id,
    animated: null != (t = l.animated) && t,
    size: a
  });
  return null != r && "" !== r ? (0, n.jsx)("img", {
    className: s,
    src: r,
    alt: l.name
  }) : (0, n.jsx)("span", {
    className: i,
    children: l.name
  })
}

function z(e) {
  let {
    poll: t,
    reactionVoteCounts: l,
    selectedAnswerId: a,
    onSelectAnswer: s
  } = e;
  return (0, n.jsx)(d.njP, {
    look: "custom",
    orientation: "vertical",
    "aria-label": Z.intl.string(Z.t["qbir+4"]),
    selectedItem: a,
    onItemSelect: s,
    children: t.answers.map(e => {
      var t;
      let s = String(e.answer_id),
        r = null != (t = l[s]) ? t : 0,
        {
          emoji: o,
          text: u
        } = e.poll_media,
        m = Z.intl.formatToPlainString(Z.t.wqBc7A, {
          numVotes: r,
          option: u
        }),
        h = a === s;
      return (0, n.jsxs)(d.njP.Item, {
        id: s,
        disableItemStyles: true,
        className: i()({
          [y.voteDefault]: !h,
          [y.voteSelected]: h
        }),
        "aria-label": m,
        selectedItem: a,
        children: [null != o ? (0, n.jsx)(M, {
          emoji: o,
          emojiSize: 16,
          imageClassNames: y.emoji,
          textClassNames: i()(y.emoji, y.emojiText),
          "aria-hidden": true
        }) : null, (0, n.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          lineClamp: 1,
          children: (0, n.jsx)(c.Z, {
            position: "left",
            "aria-hidden": true,
            children: u
          })
        }), (0, n.jsxs)(d.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: y.voteCount,
          children: ["(", r.toLocaleString(), ")"]
        })]
      }, s)
    })
  })
}

function A(e) {
  let {
    user: t,
    channel: l
  } = e, a = (0, o.e7)([j.default], () => j.default.getUser(t.id), [t]), s = C.ZP.useName(l.guild_id, l.id, t);
  return (0, n.jsxs)("div", {
    className: y.voterDefault,
    onContextMenu: e => (0, N.Pv)(e, t, l),
    children: [(0, n.jsx)("div", {
      className: y.voterAvatarContainer,
      children: (0, n.jsx)(m.Z, {
        user: null != a ? a : t,
        size: d.EFr.SIZE_32,
        "aria-hidden": true,
        guildId: l.guild_id
      })
    }), (0, n.jsxs)(d.Text, {
      tag: "span",
      variant: "text-md/normal",
      className: y.name,
      "aria-label": s,
      children: [(0, n.jsx)("span", {
        className: i()(y.ellipsized, {
          [y.nickname]: !t.hasUniqueUsername()
        }),
        children: s
      }), (0, n.jsx)(u.Z, {
        user: t,
        className: y.tagFaded,
        usernameClass: i()(y.username, y.ellipsized),
        discriminatorClass: y.discriminator,
        forceUsername: true
      })]
    })]
  })
}

function E(e) {
  let {
    message: t,
    reaction: l,
    channel: s
  } = e, {
    reactors: i,
    hasMore: o
  } = (0, T.Z)({
    channelId: s.id,
    messageId: t.id,
    reaction: l
  }), c = a.useRef(null), u = a.useRef(null), [m, _] = a.useState(false), v = a.useCallback(async () => {
    let e = u.current;
    _(true);
    let n = await p.U0({
      channelId: s.id,
      messageId: t.id,
      emoji: l.emoji,
      limit: w.pTL,
      after: e,
      type: k
    });
    u.current = n[n.length - 1].id, _(false)
  }, [s.id, t.id, l.emoji]);
  (0, h.ZP)(() => {
    v()
  });
  let x = a.useCallback(() => {
      let {
        current: e
      } = c;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 && o && !m && v()
    }, [c, o, m, v]),
    j = a.useCallback((e, t) => 1 === e ? 52 * (0 === t) : 52 * (0 === e && (0 === t && 0 === i.length || null != i[t])), [i]),
    f = a.useCallback(e => {
      let {
        section: t,
        row: l
      } = e, a = i[l];
      return 1 === t ? 0 === l ? (0, n.jsx)(d.$jN, {
        className: y.spinner
      }, "hasMore") : null : 0 === i.length && m ? (0, n.jsx)(d.$jN, {
        className: y.spinner
      }, "loadingMore") : null != a && (0, n.jsx)(A, {
        channel: s,
        user: a
      }, a.id)
    }, [s, m, i]),
    g = a.useMemo(() => {
      let e = [];
      return 0 === i.length && m ? e.push(1) : (e.push(i.length), o && e.push(1)), e
    }, [o, m, i.length]);
  return (0, n.jsx)(r._2F, {
    className: y.voters,
    fade: true,
    ref: c,
    sections: g,
    sectionHeight: 0,
    rowHeight: j,
    renderRow: f,
    onScroll: o ? x : true
  })
}

function U(e) {
  var t;
  let {
    message: l,
    initialAnswerId: s,
    onClose: i,
    transitionState: c
  } = e, u = (0, o.e7)([x.Z], () => x.Z.getChannel(l.getChannelId())), [m, h] = a.useState(s), _ = a.useMemo(() => {
    if (null != l.reactions) return (0, S.ef)(l.reactions, m)
  }, [l.reactions, m]), v = a.useMemo(() => (0, b.cZ)(l.reactions), [l.reactions]), p = a.useMemo(() => (function(e) {
    let t = {};
    for (let a of e) {
      var l, n;
      let e = null != (n = null == (l = a.count_details) ? true : l.vote) ? n : 0,
        s = a.emoji.id;
      null != s && (t[s] = e)
    }
    return t
  })(l.reactions), [l.reactions]), j = p[m], f = a.useMemo(() => {
    var e;
    let t = {};
    return null == (e = l.poll) || e.answers.forEach(e => {
      var l;
      (null == e ? true : e.answer_id) != null && (null == (l = e.poll_media) ? true : l.text) != null && (t[e.answer_id] = e.poll_media.text)
    }), t
  }, [null == (t = l.poll) ? true : t.answers]), g = Z.intl.formatToPlainString(Z.t.wqBc7A, {
    numVotes: j,
    option: f[m]
  });
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, n.jsxs)(r.IX, {
    transitionState: c,
    onClose: i,
    size: "lg",
    children: [(0, n.jsx)(r.xBx, {
      title: l.poll.question.text,
      subtitle: Z.intl.format(Z.t.XRkuof, {
        count: v
      })
    }), (0, n.jsx)("div", {
      className: y.spacer
    }), (0, n.jsxs)("div", {
      className: y.body,
      children: [(0, n.jsx)(d.Ttm, {
        className: y.scroller,
        fade: true,
        children: (0, n.jsx)(z, {
          poll: l.poll,
          selectedAnswerId: m,
          onSelectAnswer: h,
          reactionVoteCounts: p
        })
      }), (0, n.jsx)(d.njP.Panel, {
        id: m,
        "aria-label": g,
        className: y.panel,
        children: null != _ && j > 0 ? (0, n.jsx)(E, {
          message: l,
          reaction: _,
          channel: u
        }) : (0, n.jsx)(P, {})
      })]
    })]
  })
}