/** Chunk was on 97492 **/
/** chunk id: 20465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T,
  R: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk367513 = require("./367513.js"),
  Chunk843472 = require("./843472.js"),
  Chunk386467 = require("./386467.js"),
  Chunk465364 = require("./465364.js"),
  Chunk763754 = require("./763754.js"),
  Chunk448368 = require("./448368.jsx"),
  Chunk378058 = require("./378058.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk320501 = require("./320501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk486020 = require("./486020.js"),
  Chunk927813 = require("./927813.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk279633 = require("./279633.js");
let I = 10 * Chunk927813.A.Millis.SECOND;

function N(e) {
  var t;
  let {
    message: n
  } = e, {
    isBlocked: i,
    isIgnored: s
  } = (0, c.cf)([j.A], () => ({
    isBlocked: j.A.isBlockedForMessage(n),
    isIgnored: j.A.isIgnoredForMessage(n)
  }), [n]), o = (0, g.X4)(n), d = l.useContext(h.A), [O, x] = l.useState(false), E = l.useCallback(e => {
    "A" !== e.target.nodeName && (f.A.updateChatOpen(n.channel_id, true), p.A.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: true
    }))
  }, [n.channel_id, n.id]), _ = null != n.content && "" !== n.content ? (0, b.Ay)(n, {
    isInteracting: O
  }).content : null, {
    contentPlaceholder: I,
    renderedContent: N,
    trailingIcon: T,
    leadingIcon: P
  } = (0, m.o)(n, _, i, s, S.BK, {
    trailingIconClass: S.sl,
    leadingIconClass: S.aG,
    iconSize: C.eJ
  }), w = (0, A.o6)(n), R = w.length > 0 ? w.map(e => (0, r.jsx)(y.A, {
    className: S.yI,
    size: 128,
    sticker: e,
    isInteracting: O
  }, e.id)) : null;
  return (0, r.jsxs)(u.DUT, {
    className: S.oR,
    onMouseEnter: () => {
      x(true)
    },
    onMouseLeave: () => {
      x(false)
    },
    onClick: E,
    children: [(0, r.jsxs)("div", {
      className: a()(S.kn, {
        [S.mK]: n.mentioned
      }),
      children: [null != R ? null : P, null != (t = null != N ? N : R) ? t : (0, r.jsx)("span", {
        children: I
      }), null != R ? null : T]
    }), (0, r.jsx)("img", {
      alt: "",
      src: (null == o ? true : o.guildMemberAvatar) != null && null != d ? (0, v.s7)({
        guildId: d,
        userId: n.author.id,
        avatar: o.guildMemberAvatar
      }) : n.author.getAvatarURL(d, 32),
      className: S.my
    })]
  })
}

function T(e) {
  let {
    channelId: t,
    className: n
  } = e, [i, f] = l.useState(false), {
    toastsHidden: p,
    toastMessages: h
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: r,
      count: i,
      lingerMs: a
    } = e, [s, o] = l.useState([]), [u, f] = l.useState(false), p = l.useRef(null), h = l.useRef(true), b = l.useCallback(() => {
      o([]), f(true)
    }, []);
    l.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: r,
          optimistic: l
        } = e;
        t !== n || r.type === _.lAJ.STAGE_START || r.type === _.lAJ.STAGE_END || r.type === _.lAJ.STAGE_TOPIC || r.type === _.lAJ.STAGE_SPEAKER || r.type === _.lAJ.STAGE_RAISE_HAND || l || (clearTimeout(h.current), h.current = setTimeout(b, a), o(e => [...e, r.id]))
      }
      return d.h.subscribe("MESSAGE_CREATE", e), () => {
        d.h.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, b, i, a]), l.useEffect(() => () => {
      clearTimeout(h.current)
    }, []), l.useEffect(() => {
      s.length > 3 && o(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [s]), r && null == p.current ? p.current = s : r || null == p.current || (p.current = null);
    let g = null != (t = p.current) ? t : s;
    return {
      toastsHidden: u,
      toastMessages: (0, c.yK)([O.A], () => g.map(e => O.A.getMessage(n, e)), [n, g]).filter(E.Vq)
    }
  }({
    channelId: t,
    isFrozen: i,
    count: 3,
    lingerMs: I
  }), b = l.useRef({}), [g, m] = l.useState({}), A = l.useCallback((e, t) => {
    null == t ? delete b.current[e] : b.current[e] = t
  }, []), y = l.useRef(g);
  l.useLayoutEffect(() => {
    y.current = g
  }), l.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let r of h) {
      var n;
      let l = null != (n = b.current[r.id]) ? n : 0;
      e[r.id] = t, t += l + 8
    }(0, s.isEqual)(e, y.current) || m(e)
  }, [h]);
  let j = h.map(e => ({
      message: e,
      height: b.current[e.id],
      y: g[e.id]
    })),
    v = (0, u.pnh)(j, {
      keys: e => e.message.id,
      from: () => ({
        opacity: 0
      }),
      enter: e => {
        let {
          y: t
        } = e;
        return {
          opacity: 1,
          translateY: t
        }
      },
      update: e => {
        let {
          y: t
        } = e;
        return {
          translateY: t
        }
      },
      leave: e => {
        let {
          height: t,
          y: n
        } = e;
        return {
          opacity: 0,
          translateY: p ? n : -(null != t ? t : 0) - 8,
          pointerEvents: "none"
        }
      }
    });
  return (0, r.jsx)(u.NPJ, {
    theme: _.NJ8.DARK,
    children: e => (0, r.jsx)("div", {
      className: a()(n, e),
      onMouseEnter: () => {
        f(true)
      },
      onMouseLeave: () => {
        f(false)
      },
      children: v((e, t) => (0, r.jsx)(o.animated.div, {
        ref: e => A(t.message.id, null != e ? e.offsetHeight : null),
        className: S.T_,
        style: e,
        children: (0, r.jsx)(N, {
          message: t.message
        })
      }))
    })
  })
}