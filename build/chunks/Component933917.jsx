/** Chunk was on 46875 **/
/** chunk id: 933917, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk964901 = require("./964901.js"),
  Chunk652215 = require("./652215.js"),
  Chunk851110 = require("./851110.js"),
  Chunk980504 = require("./980504.js"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk529349 = require("./529349.js");

function O(e) {
  let {
    className: t,
    sound: n,
    playSound: a,
    isPlaying: s,
    text: d
  } = e, u = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, m = A.intl.formatToPlainString(A.t.tuMUJ2, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  }), h = r.useCallback(() => {
    x.default.track(p.HAw.MODERATOR_QUEUE_ACTION, {
      guild_id: g.A.getGuildId(),
      action: "airhorn"
    }), null != a && a()
  }, [a]);
  return (0, l.jsxs)(c.DUT, {
    "aria-label": m,
    tag: "span",
    onClick: h,
    className: i()(C.Ls, C.oR, {
      [C.he]: true === s
    }, t),
    children: [u && (0, l.jsx)(o.A, {
      emojiId: null == n ? true : n.emojiId,
      emojiName: null == n ? true : n.emojiName,
      className: C.JS
    }), (0, l.jsx)("span", {
      children: " ".concat(d, " ")
    })]
  })
}

function N(e) {
  let {
    containerRef: t,
    text: n
  } = e, a = r.useRef(null), i = (0, s.bG)([f.A], () => {
    var e;
    return null == (e = f.A.getSoundsForGuild(v.mV)) ? true : e.find(e => "airhorn" === e.name)
  }), {
    createMultipleConfettiAt: c
  } = r.useContext(m.x), o = (0, s.bG)([u.A], () => u.A.useReducedMotion), {
    isPlaying: g,
    playSound: x
  } = (0, b.E)(i);
  (0, d.Ay)(() => {
    (0, h.E7)()
  });
  let p = r.useCallback(async () => {
    if (await x()) {
      var e;
      if (null == (e = a.current) || e.addAnimation(), !o && (null == t ? true : t.current) != null) {
        let e = t.current.getBoundingClientRect(),
          n = {
            x: e.left + e.width / 2,
            y: e.top + e.height / 3
          },
          l = j.uI[Math.floor(Math.random() * j.uI.length)];
        c(n.x, n.y, {
          velocity: {
            type: "static-random",
            minValue: {
              x: false,
              y: false
            },
            maxValue: {
              x: 500,
              y: false
            }
          }
        }, 40, {
          sprite: l
        })
      }
    }
  }, [x, c, o, t]);
  return true === i ? null : (0, l.jsx)(O, {
    sound: i,
    playSound: p,
    isPlaying: g,
    text: n
  })
}

function S() {
  let e = r.useRef(null);
  return (0, l.jsxs)(c.BJc, {
    className: C.kL,
    direction: "vertical",
    align: "center",
    justify: "center",
    padding: {
      top: 24,
      bottom: 24
    },
    ref: e,
    children: [(0, l.jsx)(c._vT, {
      size: "custom",
      width: 48,
      height: 48
    }), (0, l.jsxs)(c.BJc, {
      direction: "vertical",
      align: "center",
      justify: "center",
      children: [(0, l.jsx)(c.Heading, {
        className: C.wx,
        variant: "heading-md/medium",
        children: A.intl.string(y.default.h6QNky)
      }), (0, l.jsx)(c.Text, {
        className: C.Qq,
        variant: "text-md/medium",
        color: "text-subtle",
        children: A.intl.format(y.default["8N4c58"], {
          airhornHook: t => (0, l.jsx)(N, {
            containerRef: e,
            text: t
          })
        })
      })]
    })]
  })
}