/** Chunk was on 25046 **/
/** chunk id: 462747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk376108 = require("./376108.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200608 = require("./200608.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e) {
  let {
    children: t
  } = e;
  return (0, i.jsxs)("div", {
    className: v.emptyContainer,
    children: [(0, i.jsx)(u.Z, {
      children: (0, i.jsx)("div", {
        className: v.circle,
        children: (0, i.jsx)(s.BFJ, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: v.icon
        })
      })
    }), t]
  })
}

function x() {
  return (0, Chunk951288.jsx)(C, {
    children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: Chunk200608.title,
      children: Chunk388032.intl.string(Chunk388032.t.hW0mBQ)
    })
  })
}

function L() {
  return (0, Chunk951288.jsx)(C, {
    children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
      color: "header-secondary",
      variant: "heading-md/semibold",
      className: Chunk200608.errorTitle,
      children: Chunk388032.intl.string(Chunk388032.t.obChXl)
    })
  })
}

function j(e) {
  let {
    count: t
  } = e;
  return (0, i.jsxs)("div", {
    className: v.listRow,
    children: [(0, i.jsx)("div", {
      className: a()(v.listRowCircle, v.listAvatar),
      children: (0, i.jsx)(s.BFJ, {
        size: "custom",
        color: "currentColor",
        height: 14,
        width: 14,
        className: v.icon
      })
    }), (0, i.jsx)(s.Text, {
      color: "text-default",
      variant: "text-md/normal",
      children: h.intl.format(h.t.BdQTfX, {
        userRemainCount: t
      })
    })]
  })
}

function b(e) {
  let {
    eventUser: t,
    guildId: n,
    onContextMenu: r
  } = e, o = l.useRef(null), u = (0, d.e7)([I.default], () => I.default.getUser(t.user_id)), E = (0, d.e7)([m.Z, p.Z, g.default], () => t.user_id === g.default.getId() ? m.Z.getStatus() : p.Z.getStatus(t.user_id, n), [t.user_id, n]);
  return null == u ? null : (0, i.jsx)(_.Z, {
    targetElementRef: o,
    userId: t.user_id,
    guildId: n,
    position: "left",
    spacing: 16,
    children: (e, l) => {
      var d;
      let {
        isShown: _
      } = l;
      return (0, i.jsxs)(s.P3F, y(T({
        innerRef: o,
        className: a()(v.listRow, v.interactiveRow, {
          [v.selected]: _
        }),
        onContextMenu: e => r(e, u)
      }, e), {
        children: [(0, i.jsx)(s.qEK, {
          src: u.getAvatarURL(n, 24),
          "aria-label": u.username,
          size: s.EFr.SIZE_24,
          className: v.listAvatar,
          status: E
        }), (0, i.jsx)(c.Z, {
          user: u,
          className: v.listName,
          discriminatorClass: v.listDiscriminator,
          nick: null == (d = t.member) ? true : d.nick
        })]
      }))
    }
  })
}

function O(e) {
  let {
    eventUsers: t,
    guildId: n,
    usersNotShownCount: l = 0,
    onContextMenu: r
  } = e;
  return (0, i.jsxs)(s.zJl, {
    className: v.listScroller,
    children: [t.map(e => (0, i.jsx)(b, {
      guildId: n,
      eventUser: e,
      onContextMenu: r
    }, e.user_id)), l > 0 && (0, i.jsx)(j, {
      count: l
    })]
  })
}

function S(e) {
  let {
    children: t,
    style: n
  } = e;
  return (0, i.jsx)("div", {
    className: v.container,
    style: null != n ? n : {},
    children: t
  })
}

function U(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, i.jsx)(S, {
    style: {
      height: n
    },
    children: t
  })
}

function D(e) {
  let {
    guildEvent: t,
    recurrenceId: l,
    eventUsers: r,
    loading: a,
    error: d,
    containerHeight: c
  } = e, u = (0, E.Z)(t.guild_id, t.id, l);
  if (a && 0 === r.length) return (0, i.jsx)(U, {
    height: c,
    children: (0, i.jsx)(s.$jN, {
      type: s.$jN.Type.SPINNING_CIRCLE,
      className: v.spinner
    })
  });
  if (null != d && 0 === r.length) return (0, i.jsx)(U, {
    height: c,
    children: (0, i.jsx)(L, {})
  });
  let _ = 0;
  return r.length >= f.rC && u > f.rC && (_ = Math.max(u - r.length, 0)), 0 === r.length ? (0, i.jsx)(U, {
    height: c,
    children: (0, i.jsx)(x, {})
  }) : (0, i.jsx)(S, {
    children: (0, i.jsx)(O, {
      eventUsers: r,
      guildId: t.guild_id,
      onContextMenu: function(e, t) {
        (0, o.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
          return n => (0, i.jsx)(e, y(T({}, n), {
            user: t
          }))
        })
      },
      usersNotShownCount: _
    })
  })
}