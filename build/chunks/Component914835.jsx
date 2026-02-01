/** Chunk was on 61344 **/
/** chunk id: 914835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk713654 = require("./713654.js"),
  Chunk967144 = require("./967144.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk314307 = require("./314307.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk790687 = require("./790687.js");

function E(e) {
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

function O(e, t) {
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

function C(e) {
  var t, i, h;
  let {
    userId: b,
    channel: _
  } = e, y = r.useRef(null), {
    analyticsLocations: C
  } = (0, d.Ay)(u.A.USERNAME), x = (0, s.bG)([g.default], () => g.default.getUser(b)), S = (0, s.bG)([m.Ay], () => null != b ? m.Ay.getMember(_.guild_id, b) : null), j = (0, p.gn)(_.guild_id, null != b ? b : true, null != (t = null == S ? true : S.colorStrings) ? t : null);

  function I(e) {
    if (null == x) return null;
    (0, c.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("29534"), n.e("67447"), n.e("10905")]).then(n.bind(n, 708202));
      return t => (0, l.jsx)(e, O(E({}, t), {
        user: x,
        guildId: _.guild_id,
        channel: _
      }))
    })
  }
  let T = null != (i = null != (h = null == S ? true : S.nick) ? h : A.Ay.getName(x)) ? i : "???",
    N = null == S ? true : S.colorString;
  return null == x ? (0, l.jsx)("span", {
    className: a()(v.eM, v.sL),
    children: T
  }) : (0, l.jsx)(d.f5, {
    value: C,
    children: (0, l.jsx)(f.A, {
      targetElementRef: y,
      user: x,
      guildId: _.guild_id,
      channelId: _.id,
      roleId: null == S ? true : S.colorRoleId,
      clickTrap: true,
      children: e => (0, l.jsx)(o.DUT, O(E({}, e), {
        innerRef: y,
        tag: "span",
        className: v.eM,
        onContextMenu: I,
        children: (0, l.jsx)(o.gyj, {
          name: T,
          colorString: null != N ? N : null,
          colorStrings: j
        })
      }))
    })
  })
}

function x(e) {
  let {
    channel: t
  } = e, {
    threadMetadata: n
  } = t;
  return null == n ? (0, l.jsx)("div", {
    style: {
      marginTop: false
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: (0, l.jsx)("div", {
        className: v.VA,
        children: y.intl.format(y.t.imPXd5, {
          usernameHook: (e, n) => (0, l.jsx)(C, {
            userId: t.ownerId,
            channel: t
          }, n)
        })
      })
    }), t.type === _.rbe.PRIVATE_THREAD ? (0, l.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: y.intl.string(y.t["1awbZG"])
    }) : null]
  })
}

function S(e) {
  var t;
  let {
    channel: n
  } = e, r = null != (t = (0, h.gU)(n)) ? t : o.ysw;
  return (0, l.jsxs)(b.Ay, {
    channelId: n.id,
    children: [(0, l.jsx)("div", {
      className: v.P0,
      children: (0, l.jsx)(r, {
        className: v.Kk
      })
    }), (0, l.jsx)(b.cr, {
      children: n.name
    }), (0, l.jsx)(x, {
      channel: n
    })]
  })
}