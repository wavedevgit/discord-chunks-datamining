/** Chunk was on 46875 **/
/** chunk id: 933917, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function C(e) {
  let {
    className: t,
    sound: n,
    playSound: i,
    isPlaying: s,
    text: d
  } = e, u = (null == n ? true : n.emojiId) != null || (null == n ? true : n.emojiName) != null, m = y.intl.formatToPlainString(y.t.tuMUJ2, {
    emojiName: null == n ? true : n.emojiName,
    soundName: null == n ? true : n.name
  }), h = l.useCallback(() => {
    x.default.track(b.HAw.MODERATOR_QUEUE_ACTION, {
      guild_id: f.A.getGuildId(),
      action: "airhorn"
    }), null != i && i()
  }, [i]);
  return (0, r.jsxs)(o.DUT, {
    "aria-label": m,
    tag: "span",
    onClick: h,
    className: a()(A.Ls, A.oR, {
      [A.he]: true === s
    }, t),
    children: [u && (0, r.jsx)(c.A, {
      emojiId: null == n ? true : n.emojiId,
      emojiName: null == n ? true : n.emojiName,
      className: A.JS
    }), (0, r.jsx)("span", {
      children: " ".concat(d, " ")
    })]
  })
}

function O(e) {
  let {
    containerRef: t,
    text: n
  } = e, i = l.useRef(null), a = (0, s.bG)([g.A], () => {
    var e;
    return null == (e = g.A.getSoundsForGuild(v.mV)) ? true : e.find(e => "airhorn" === e.name)
  }), {
    createMultipleConfettiAt: o
  } = l.useContext(m.x), c = (0, s.bG)([u.A], () => u.A.useReducedMotion), {
    isPlaying: f,
    playSound: x
  } = (0, p.E)(a);
  (0, d.Ay)(() => {
    (0, h.E7)()
  });
  let b = l.useCallback(async () => {
    if (await x()) {
      var e;
      if (null == (e = i.current) || e.addAnimation(), !c && (null == t ? true : t.current) != null) {
        let e = t.current.getBoundingClientRect(),
          n = {
            x: e.left + e.width / 2,
            y: e.top + e.height / 3
          },
          r = j.uI[Math.floor(Math.random() * j.uI.length)];
        o(n.x, n.y, {
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
          sprite: r
        })
      }
    }
  }, [x, o, c, t]);
  return true === a ? null : (0, r.jsx)(C, {
    sound: a,
    playSound: b,
    isPlaying: f,
    text: n
  })
}

function T() {
  let e = l.useRef(null);
  return (0, r.jsxs)(o.BJc, {
    className: A.kL,
    direction: "vertical",
    align: "center",
    justify: "center",
    padding: {
      top: 24,
      bottom: 24
    },
    ref: e,
    children: [(0, r.jsx)(o._vT, {
      size: "custom",
      width: 48,
      height: 48
    }), (0, r.jsxs)(o.BJc, {
      direction: "vertical",
      align: "center",
      justify: "center",
      children: [(0, r.jsx)(o.Heading, {
        className: A.wx,
        variant: "heading-md/medium",
        children: y.intl.string(_.default.h6QNky)
      }), (0, r.jsx)(o.Text, {
        className: A.Qq,
        variant: "text-md/medium",
        color: "text-subtle",
        children: y.intl.format(_.default["8N4c58"], {
          airhornHook: t => (0, r.jsx)(O, {
            containerRef: e,
            text: t
          })
        })
      })]
    })]
  })
}