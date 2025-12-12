/** Chunk was on 47135 **/
/** chunk id: 462747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function b(e) {
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
    children: [(0, l.jsx)(d.Z, {
      children: (0, l.jsx)("div", {
        className: p.circle,
        children: (0, l.jsx)(o.BFJ, {
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
  return (0, Chunk54381.jsx)(I, {
    children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
      color: "text-strong",
      variant: "heading-xl/semibold",
      className: Chunk200608.title,
      children: Chunk388032.intl.string(Chunk388032.t.hW0mBR)
    })
  })
}

function S() {
  return (0, Chunk54381.jsx)(I, {
    children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
      color: "text-default",
      variant: "heading-md/semibold",
      className: Chunk200608.errorTitle,
      children: Chunk388032.intl.string(Chunk388032.t.obChXk)
    })
  })
}

function y(e) {
  let {
    count: t
  } = e;
  return (0, l.jsxs)("div", {
    className: p.listRow,
    children: [(0, l.jsx)("div", {
      className: s()(p.listRowCircle, p.listAvatar),
      children: (0, l.jsx)(o.BFJ, {
        size: "custom",
        color: "currentColor",
        height: 14,
        width: 14,
        className: p.icon
      })
    }), (0, l.jsx)(o.Text, {
      color: "text-default",
      variant: "text-md/normal",
      children: j.intl.format(j.t.BdQTfR, {
        userRemainCount: t
      })
    })]
  })
}

function E(e) {
  let {
    eventUser: t,
    guildId: n,
    onContextMenu: i
  } = e, a = r.useRef(null), d = (0, c.e7)([m.default], () => m.default.getUser(t.user_id)), g = (0, c.e7)([x.Z, h.Z, f.default], () => t.user_id === f.default.getId() ? x.Z.getStatus() : h.Z.getStatus(t.user_id, n), [t.user_id, n]);
  return null == d ? null : (0, l.jsx)(_.Z, {
    targetElementRef: a,
    userId: t.user_id,
    guildId: n,
    position: "left",
    spacing: 16,
    children: (e, r) => {
      var c;
      let {
        isShown: _
      } = r;
      return (0, l.jsxs)(o.P3F, N(b({
        innerRef: a,
        className: s()(p.listRow, p.interactiveRow, {
          [p.selected]: _
        }),
        onContextMenu: e => i(e, d)
      }, e), {
        children: [(0, l.jsx)(o.qEK, {
          src: d.getAvatarURL(n, 24),
          "aria-label": d.username,
          size: o.EFr.SIZE_24,
          className: p.listAvatar,
          status: g
        }), (0, l.jsx)(u.Z, {
          user: d,
          className: p.listName,
          discriminatorClass: p.listDiscriminator,
          nick: null == (c = t.member) ? true : c.nick
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
  return (0, l.jsxs)(o.zJl, {
    className: p.listScroller,
    children: [t.map(e => (0, l.jsx)(E, {
      guildId: n,
      eventUser: e,
      onContextMenu: i
    }, e.user_id)), r > 0 && (0, l.jsx)(y, {
      count: r
    })]
  })
}

function P(e) {
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

function T(e) {
  let {
    children: t,
    height: n
  } = e;
  return (0, l.jsx)(P, {
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
    loading: s,
    error: c,
    containerHeight: u
  } = e, d = (0, g.Z)(t.guild_id, t.id, r);
  if (s && 0 === i.length) return (0, l.jsx)(T, {
    height: u,
    children: (0, l.jsx)(o.$jN, {
      type: o.$jN.Type.SPINNING_CIRCLE,
      className: p.spinner
    })
  });
  if (null != c && 0 === i.length) return (0, l.jsx)(T, {
    height: u,
    children: (0, l.jsx)(S, {})
  });
  let _ = 0;
  return i.length >= v.rC && d > v.rC && (_ = Math.max(d - i.length, 0)), 0 === i.length ? (0, l.jsx)(T, {
    height: u,
    children: (0, l.jsx)(Z, {})
  }) : (0, l.jsx)(P, {
    children: (0, l.jsx)(C, {
      eventUsers: i,
      guildId: t.guild_id,
      onContextMenu: function(e, t) {
        (0, a.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(n.bind(n, 881351));
          return n => (0, l.jsx)(e, N(b({}, n), {
            user: t
          }))
        })
      },
      usersNotShownCount: _
    })
  })
}