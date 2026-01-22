/** Chunk was on 77986 **/
/** chunk id: 834991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    children: t
  } = e;
  return (0, l.jsxs)("div", {
    className: m.do,
    children: [(0, l.jsx)(o.A, {
      children: (0, l.jsx)("div", {
        className: m.n1,
        children: (0, l.jsx)(c.nFg, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: m.Kk
        })
      })
    }), t]
  })
}

function O() {
  return (0, l.jsx)(A, {
    children: (0, l.jsx)(c.Heading, {
      color: "text-strong",
      variant: "heading-xl/semibold",
      className: m.DD,
      children: p.intl.string(p.t.hW0mBR)
    })
  })
}

function N() {
  return (0, l.jsx)(A, {
    children: (0, l.jsx)(c.Heading, {
      color: "text-default",
      variant: "heading-md/semibold",
      className: m.JU,
      children: p.intl.string(p.t.obChXk)
    })
  })
}

function E(e) {
  let {
    count: t
  } = e;
  return (0, l.jsxs)("div", {
    className: m.f0,
    children: [(0, l.jsx)("div", {
      className: s()(m.Pc, m.uY),
      children: (0, l.jsx)(c.nFg, {
        size: "custom",
        color: "currentColor",
        height: 14,
        width: 14,
        className: m.Kk
      })
    }), (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-md/normal",
      children: p.intl.format(p.t.BdQTfR, {
        userRemainCount: t
      })
    })]
  })
}

function C(e) {
  let {
    eventUser: t,
    guildId: n,
    onContextMenu: i
  } = e, u = r.useRef(null), o = (0, a.bG)([v.default], () => v.default.getUser(t.user_id)), j = (0, a.bG)([h.A, b.A, g.default], () => t.user_id === g.default.getId() ? h.A.getStatus() : b.A.getStatus(t.user_id, n), [t.user_id, n]);
  return null == o ? null : (0, l.jsx)(f.A, {
    targetElementRef: u,
    userId: t.user_id,
    guildId: n,
    position: "left",
    spacing: 16,
    children: (e, r) => {
      var a;
      let {
        isShown: f
      } = r;
      return (0, l.jsxs)(c.DUT, _(y({
        innerRef: u,
        className: s()(m.f0, m.fv, {
          [m.wH]: f
        }),
        onContextMenu: e => i(e, o)
      }, e), {
        children: [(0, l.jsx)(c.euF, {
          src: o.getAvatarURL(n, 24),
          "aria-label": o.username,
          size: c._3J.SIZE_24,
          className: m.uY,
          status: j
        }), (0, l.jsx)(d.A, {
          user: o,
          className: m.sY,
          discriminatorClass: m.XU,
          nick: null == (a = t.member) ? true : a.nick
        })]
      }))
    }
  })
}

function P(e) {
  let {
    eventUsers: t,
    guildId: n,
    usersNotShownCount: r = 0,
    onContextMenu: i
  } = e;
  return (0, l.jsxs)(c.IpV, {
    className: m.DK,
    children: [t.map(e => (0, l.jsx)(C, {
      guildId: n,
      eventUser: e,
      onContextMenu: i
    }, e.user_id)), r > 0 && (0, l.jsx)(E, {
      count: r
    })]
  })
}

function I(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, l.jsx)("div", {
    className: m.kL,
    style: null != n ? n : {},
    children: t
  })
}

function S(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, l.jsx)(I, {
    style: {
      height: n
    },
    children: t
  })
}

function k(e) {
  let {
    guildEvent: t,
    recurrenceId: r,
    eventUsers: i,
    loading: s,
    error: a,
    containerHeight: d
  } = e, o = (0, j.A)(t.guild_id, t.id, r);
  if (s && 0 === i.length) return (0, l.jsx)(S, {
    height: d,
    children: (0, l.jsx)(c.y$y, {
      type: c.y$y.Type.SPINNING_CIRCLE,
      className: m.u1
    })
  });
  if (null != a && 0 === i.length) return (0, l.jsx)(S, {
    height: d,
    children: (0, l.jsx)(N, {})
  });
  let f = 0;
  return i.length >= x.C1 && o > x.C1 && (f = Math.max(o - i.length, 0)), 0 === i.length ? (0, l.jsx)(S, {
    height: d,
    children: (0, l.jsx)(O, {})
  }) : (0, l.jsx)(I, {
    children: (0, l.jsx)(P, {
      eventUsers: i,
      guildId: t.guild_id,
      onContextMenu: function(e, t) {
        (0, u.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(n.bind(n, 668569));
          return n => (0, l.jsx)(e, _(y({}, n), {
            user: t
          }))
        })
      },
      usersNotShownCount: f
    })
  })
}