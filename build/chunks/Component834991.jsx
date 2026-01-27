/** Chunk was on 74665 **/
/** chunk id: 834991, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  d = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk489673 = require("./489673.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk826383 = require("./826383.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk939947 = require("./939947.js");

function j(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function y(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function A(e) {
  let {
    children: n
  } = e;
  return (0, l.jsxs)("div", {
    className: x.do,
    children: [(0, l.jsx)(u.A, {
      children: (0, l.jsx)("div", {
        className: x.n1,
        children: (0, l.jsx)(a.nFg, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: x.Kk
        })
      })
    }), n]
  })
}

function I() {
  return (0, l.jsx)(A, {
    children: (0, l.jsx)(a.Heading, {
      color: "text-strong",
      variant: "heading-xl/semibold",
      className: x.DD,
      children: m.intl.string(m.t.hW0mBR)
    })
  })
}

function N() {
  return (0, l.jsx)(A, {
    children: (0, l.jsx)(a.Heading, {
      color: "text-default",
      variant: "heading-md/semibold",
      className: x.JU,
      children: m.intl.string(m.t.obChXk)
    })
  })
}

function C(e) {
  let {
    count: n
  } = e;
  return (0, l.jsxs)("div", {
    className: x.f0,
    children: [(0, l.jsx)("div", {
      className: d()(x.Pc, x.uY),
      children: (0, l.jsx)(a.nFg, {
        size: "custom",
        color: "currentColor",
        height: 14,
        width: 14,
        className: x.Kk
      })
    }), (0, l.jsx)(a.Text, {
      color: "text-default",
      variant: "text-md/normal",
      children: m.intl.format(m.t.BdQTfR, {
        userRemainCount: n
      })
    })]
  })
}

function O(e) {
  let {
    eventUser: n,
    guildId: t,
    onContextMenu: r
  } = e, o = i.useRef(null), u = (0, s.bG)([p.default], () => p.default.getUser(n.user_id)), h = (0, s.bG)([v.A, f.A, g.default], () => n.user_id === g.default.getId() ? v.A.getStatus() : f.A.getStatus(n.user_id, t), [n.user_id, t]);
  return null == u ? null : (0, l.jsx)(_.A, {
    targetElementRef: o,
    userId: n.user_id,
    guildId: t,
    position: "left",
    spacing: 16,
    children: (e, i) => {
      var s;
      let {
        isShown: _
      } = i;
      return (0, l.jsxs)(a.DUT, y(j({
        innerRef: o,
        className: d()(x.f0, x.fv, {
          [x.wH]: _
        }),
        onContextMenu: e => r(e, u)
      }, e), {
        children: [(0, l.jsx)(a.euF, {
          src: u.getAvatarURL(t, 24),
          "aria-label": u.username,
          size: a._3J.SIZE_24,
          className: x.uY,
          status: h
        }), (0, l.jsx)(c.A, {
          user: u,
          className: x.sY,
          discriminatorClass: x.XU,
          nick: null == (s = n.member) ? true : s.nick
        })]
      }))
    }
  })
}

function k(e) {
  let {
    eventUsers: n,
    guildId: t,
    usersNotShownCount: i = 0,
    onContextMenu: r
  } = e;
  return (0, l.jsxs)(a.IpV, {
    className: x.DK,
    children: [n.map(e => (0, l.jsx)(O, {
      guildId: t,
      eventUser: e,
      onContextMenu: r
    }, e.user_id)), i > 0 && (0, l.jsx)(C, {
      count: i
    })]
  })
}

function E(e) {
  let {
    children: n,
    style: t
  } = e;
  return (0, l.jsx)("div", {
    className: x.kL,
    style: null != t ? t : {},
    children: n
  })
}

function S(e) {
  let {
    children: n,
    height: t
  } = e;
  return (0, l.jsx)(E, {
    style: {
      height: t
    },
    children: n
  })
}

function P(e) {
  let {
    guildEvent: n,
    recurrenceId: i,
    eventUsers: r,
    loading: d,
    error: s,
    containerHeight: c
  } = e, u = (0, h.A)(n.guild_id, n.id, i);
  if (d && 0 === r.length) return (0, l.jsx)(S, {
    height: c,
    children: (0, l.jsx)(a.y$y, {
      type: a.y$y.Type.SPINNING_CIRCLE,
      className: x.u1
    })
  });
  if (null != s && 0 === r.length) return (0, l.jsx)(S, {
    height: c,
    children: (0, l.jsx)(N, {})
  });
  let _ = 0;
  return r.length >= b.C1 && u > b.C1 && (_ = Math.max(u - r.length, 0)), 0 === r.length ? (0, l.jsx)(S, {
    height: c,
    children: (0, l.jsx)(I, {})
  }) : (0, l.jsx)(E, {
    children: (0, l.jsx)(k, {
      eventUsers: r,
      guildId: n.guild_id,
      onContextMenu: function(e, n) {
        (0, o.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([t.e("97262"), t.e("3795"), t.e("32418"), t.e("16938")]).then(t.bind(t, 668569));
          return t => (0, l.jsx)(e, y(j({}, t), {
            user: n
          }))
        })
      },
      usersNotShownCount: _
    })
  })
}