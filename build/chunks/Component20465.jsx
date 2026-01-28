/** Chunk was on 78528 **/
/** chunk id: 20465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T,
  R: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk353709 = require("./353709.js"),
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
    isIgnored: a
  } = (0, c.cf)([O.A], () => ({
    isBlocked: O.A.isBlockedForMessage(n),
    isIgnored: O.A.isIgnoredForMessage(n)
  }), [n]), o = (0, m.X4)(n), d = l.useContext(f.A), [_, v] = l.useState(false), x = l.useCallback(e => {
    "A" !== e.target.nodeName && (p.A.updateChatOpen(n.channel_id, true), h.A.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.id,
      flash: true
    }))
  }, [n.channel_id, n.id]), E = null != n.content && "" !== n.content ? (0, g.Ay)(n, {
    isInteracting: _
  }).content : null, {
    contentPlaceholder: I,
    renderedContent: N,
    trailingIcon: T,
    leadingIcon: P
  } = (0, b.o)(n, E, i, a, S.BK, {
    trailingIconClass: S.sl,
    leadingIconClass: S.aG,
    iconSize: C.eJ
  }), w = (0, A.o6)(n), R = w.length > 0 ? w.map(e => (0, r.jsx)(y.A, {
    className: S.yI,
    size: 128,
    sticker: e,
    isInteracting: _
  }, e.id)) : null;
  return (0, r.jsxs)(u.DUT, {
    className: S.oR,
    onMouseEnter: () => {
      v(true)
    },
    onMouseLeave: () => {
      v(false)
    },
    onClick: x,
    children: [(0, r.jsxs)("div", {
      className: s()(S.kn, {
        [S.mK]: n.mentioned
      }),
      children: [null != R ? null : P, null != (t = null != N ? N : R) ? t : (0, r.jsx)("span", {
        children: I
      }), null != R ? null : T]
    }), (0, r.jsx)("img", {
      alt: "",
      src: (null == o ? true : o.guildMemberAvatar) != null && null != d ? (0, j.s7)({
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
  } = e, [i, p] = l.useState(false), {
    toastsHidden: h,
    toastMessages: f
  } = function(e) {
    var t;
    let {
      channelId: n,
      isFrozen: r,
      count: i,
      lingerMs: s
    } = e, [a, o] = l.useState([]), [u, p] = l.useState(false), h = l.useRef(null), f = l.useRef(true), g = l.useCallback(() => {
      o([]), p(true)
    }, []);
    l.useEffect(() => {
      function e(e) {
        let {
          channelId: t,
          message: r,
          optimistic: l
        } = e;
        t !== n || r.type === E.lAJ.STAGE_START || r.type === E.lAJ.STAGE_END || r.type === E.lAJ.STAGE_TOPIC || r.type === E.lAJ.STAGE_SPEAKER || r.type === E.lAJ.STAGE_RAISE_HAND || l || (clearTimeout(f.current), f.current = setTimeout(g, s), o(e => [...e, r.id]))
      }
      return d.h.subscribe("MESSAGE_CREATE", e), () => {
        d.h.unsubscribe("MESSAGE_CREATE", e)
      }
    }, [n, g, i, s]), l.useEffect(() => () => {
      clearTimeout(f.current)
    }, []), l.useEffect(() => {
      a.length > 3 && o(e => {
        let t = e.length - 3;
        return [...e.slice(t)]
      })
    }, [a]), r && null == h.current ? h.current = a : r || null == h.current || (h.current = null);
    let m = null != (t = h.current) ? t : a;
    return {
      toastsHidden: u,
      toastMessages: (0, c.yK)([_.A], () => m.map(e => _.A.getMessage(n, e)), [n, m]).filter(x.Vq)
    }
  }({
    channelId: t,
    isFrozen: i,
    count: 3,
    lingerMs: I
  }), g = l.useRef({}), [m, b] = l.useState({}), A = l.useCallback((e, t) => {
    null == t ? delete g.current[e] : g.current[e] = t
  }, []), y = l.useRef(m);
  l.useLayoutEffect(() => {
    y.current = m
  }), l.useLayoutEffect(() => {
    let e = {},
      t = 0;
    for (let r of f) {
      var n;
      let l = null != (n = g.current[r.id]) ? n : 0;
      e[r.id] = t, t += l + 8
    }(0, a.isEqual)(e, y.current) || b(e)
  }, [f]);
  let O = f.map(e => ({
      message: e,
      height: g.current[e.id],
      y: m[e.id]
    })),
    j = (0, u.pnh)(O, {
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
          translateY: h ? n : -(null != t ? t : 0) - 8,
          pointerEvents: "none"
        }
      }
    });
  return (0, r.jsx)(u.NPJ, {
    theme: E.NJ8.DARK,
    children: e => (0, r.jsx)("div", {
      className: s()(n, e),
      onMouseEnter: () => {
        p(true)
      },
      onMouseLeave: () => {
        p(false)
      },
      children: j((e, t) => (0, r.jsx)(o.animated.div, {
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