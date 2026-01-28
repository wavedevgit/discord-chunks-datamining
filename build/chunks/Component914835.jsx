/** Chunk was on 78528 **/
/** chunk id: 914835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  var t, i, p;
  let {
    userId: A,
    channel: y
  } = e, _ = l.useRef(null), {
    analyticsLocations: x
  } = (0, d.Ay)(u.A.USERNAME), E = (0, a.bG)([m.default], () => m.default.getUser(A)), C = (0, a.bG)([g.Ay], () => null != A ? g.Ay.getMember(y.guild_id, A) : null), S = (0, h.gn)(y.guild_id, null != A ? A : true, null != (t = null == C ? true : C.colorStrings) ? t : null);

  function I(e) {
    if (null == E) return null;
    (0, c.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("29534"), n.e("67447"), n.e("10905")]).then(n.bind(n, 708202));
      return t => (0, r.jsx)(e, v(j({}, t), {
        user: E,
        guildId: y.guild_id,
        channel: y
      }))
    })
  }
  let N = null != (i = null != (p = null == C ? true : C.nick) ? p : b.Ay.getName(E)) ? i : "???",
    T = null == C ? true : C.colorString;
  return null == E ? (0, r.jsx)("span", {
    className: s()(O.eM, O.sL),
    children: N
  }) : (0, r.jsx)(d.f5, {
    value: x,
    children: (0, r.jsx)(f.A, {
      targetElementRef: _,
      user: E,
      guildId: y.guild_id,
      channelId: y.id,
      roleId: null == C ? true : C.colorRoleId,
      clickTrap: true,
      children: e => (0, r.jsx)(o.DUT, v(j({}, e), {
        innerRef: _,
        tag: "span",
        className: O.eM,
        onContextMenu: I,
        children: (0, r.jsx)(o.gyj, {
          name: N,
          colorString: null != T ? T : null,
          colorStrings: S
        })
      }))
    })
  })
}

function E(e) {
  let {
    channel: t
  } = e, {
    threadMetadata: n
  } = t;
  return null == n ? (0, r.jsx)("div", {
    style: {
      marginTop: false
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: (0, r.jsx)("div", {
        className: O.VA,
        children: _.intl.format(_.t.imPXd5, {
          usernameHook: (e, n) => (0, r.jsx)(x, {
            userId: t.ownerId,
            channel: t
          }, n)
        })
      })
    }), t.type === y.rbe.PRIVATE_THREAD ? (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: _.intl.string(_.t["1awbZG"])
    }) : null]
  })
}

function C(e) {
  var t;
  let {
    channel: n
  } = e, l = null != (t = (0, p.gU)(n)) ? t : o.ysw;
  return (0, r.jsxs)(A.Ay, {
    channelId: n.id,
    children: [(0, r.jsx)("div", {
      className: O.P0,
      children: (0, r.jsx)(l, {
        className: O.Kk
      })
    }), (0, r.jsx)(A.cr, {
      children: n.name
    }), (0, r.jsx)(E, {
      channel: n
    })]
  })
}