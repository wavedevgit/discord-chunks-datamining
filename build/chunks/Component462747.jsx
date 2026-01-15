/** Chunk was on 92486 **/
/** chunk id: 462747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk939863 = require("./939863.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk315416 = require("./315416.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184494 = require("./184494.js");

function _(e) {
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

function N(e, t) {
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

function I(e) {
  let {
    children: t
  } = e;
  return (0, l.jsxs)("div", {
    className: p.emptyContainer,
    children: [(0, l.jsx)(u.Z, {
      children: (0, l.jsx)("div", {
        className: p.circle,
        children: (0, l.jsx)(c.BFJ, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: p.icon
        })
      })
    }), t]
  })
}

function Z() {
  return (0, l.jsx)(I, {
    children: (0, l.jsx)(c.Heading, {
      color: "text-strong",
      variant: "heading-xl/semibold",
      className: p.title,
      children: v.intl.string(v.t.hW0mBR)
    })
  })
}

function y() {
  return (0, l.jsx)(I, {
    children: (0, l.jsx)(c.Heading, {
      color: "text-default",
      variant: "heading-md/semibold",
      className: p.errorTitle,
      children: v.intl.string(v.t.obChXk)
    })
  })
}

function P(e) {
  let {
    count: t
  } = e;
  return (0, l.jsxs)("div", {
    className: p.listRow,
    children: [(0, l.jsx)("div", {
      className: a()(p.listRowCircle, p.listAvatar),
      children: (0, l.jsx)(c.BFJ, {
        size: "custom",
        color: "currentColor",
        height: 14,
        width: 14,
        className: p.icon
      })
    }), (0, l.jsx)(c.Text, {
      color: "text-default",
      variant: "text-md/normal",
      children: v.intl.format(v.t.BdQTfR, {
        userRemainCount: t
      })
    })]
  })
}

function O(e) {
  let {
    eventUser: t,
    guildId: n,
    onContextMenu: i
  } = e, o = r.useRef(null), u = (0, s.e7)([g.default], () => g.default.getUser(t.user_id)), m = (0, s.e7)([h.Z, x.Z, b.default], () => t.user_id === b.default.getId() ? h.Z.getStatus() : x.Z.getStatus(t.user_id, n), [t.user_id, n]);
  return null == u ? null : (0, l.jsx)(f.Z, {
    targetElementRef: o,
    userId: t.user_id,
    guildId: n,
    position: "left",
    spacing: 16,
    children: (e, r) => {
      var s;
      let {
        isShown: f
      } = r;
      return (0, l.jsxs)(c.P3F, N(_({
        innerRef: o,
        className: a()(p.listRow, p.interactiveRow, {
          [p.selected]: f
        }),
        onContextMenu: e => i(e, u)
      }, e), {
        children: [(0, l.jsx)(c.qEK, {
          src: u.getAvatarURL(n, 24),
          "aria-label": u.username,
          size: c.EFr.SIZE_24,
          className: p.listAvatar,
          status: m
        }), (0, l.jsx)(d.Z, {
          user: u,
          className: p.listName,
          discriminatorClass: p.listDiscriminator,
          nick: null == (s = t.member) ? true : s.nick
        })]
      }))
    }
  })
}

function C(e) {
  let {
    eventUsers: t,
    guildId: n,
    usersNotShownCount: r = 0,
    onContextMenu: i
  } = e;
  return (0, l.jsxs)(c.zJl, {
    className: p.listScroller,
    children: [t.map(e => (0, l.jsx)(O, {
      guildId: n,
      eventUser: e,
      onContextMenu: i
    }, e.user_id)), r > 0 && (0, l.jsx)(P, {
      count: r
    })]
  })
}

function S(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, l.jsx)("div", {
    className: p.container,
    style: null != n ? n : {},
    children: t
  })
}

function k(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, l.jsx)(S, {
    style: {
      height: n
    },
    children: t
  })
}

function w(e) {
  let {
    guildEvent: t,
    recurrenceId: r,
    eventUsers: i,
    loading: a,
    error: s,
    containerHeight: d
  } = e, u = (0, m.Z)(t.guild_id, t.id, r);
  if (a && 0 === i.length) return (0, l.jsx)(k, {
    height: d,
    children: (0, l.jsx)(c.$jN, {
      type: c.$jN.Type.SPINNING_CIRCLE,
      className: p.spinner
    })
  });
  if (null != s && 0 === i.length) return (0, l.jsx)(k, {
    height: d,
    children: (0, l.jsx)(y, {})
  });
  let f = 0;
  return i.length >= j.rC && u > j.rC && (f = Math.max(u - i.length, 0)), 0 === i.length ? (0, l.jsx)(k, {
    height: d,
    children: (0, l.jsx)(Z, {})
  }) : (0, l.jsx)(S, {
    children: (0, l.jsx)(C, {
      eventUsers: i,
      guildId: t.guild_id,
      onContextMenu: function(e, t) {
        (0, o.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(n.bind(n, 881351));
          return n => (0, l.jsx)(e, N(_({}, n), {
            user: t
          }))
        })
      },
      usersNotShownCount: f
    })
  })
}