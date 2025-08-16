/** Chunk was on 36499 **/
/** chunk id: 544142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk471445 = require("./471445.js"),
  Chunk884902 = require("./884902.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149623 = require("./149623.js");

function v(e) {
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

function j(e, t) {
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

function O(e) {
  var t, l, p;
  let {
    userId: y,
    channel: _
  } = e, C = i.useRef(null), {
    analyticsLocations: O
  } = (0, d.ZP)(u.Z.USERNAME), E = (0, o.e7)([g.default], () => g.default.getUser(y)), S = (0, o.e7)([m.ZP], () => null != y ? m.ZP.getMember(_.guild_id, y) : null), P = (0, h.X7)(_.guild_id, null != y ? y : true, null != (t = null == S ? true : S.colorStrings) ? t : null);

  function I(e) {
    if (null == E) return null;
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70675")]).then(n.bind(n, 654663));
      return t => (0, r.jsx)(e, j(v({}, t), {
        user: E,
        guildId: _.guild_id,
        channel: _
      }))
    })
  }
  let Z = null != (p = null != (l = null == S ? true : S.nick) ? l : b.ZP.getName(E)) ? p : "???",
    T = null == S ? true : S.colorString;
  return null == E ? (0, r.jsx)("span", {
    className: a()(x.threadCreatorName, x.unknownCreatorName),
    children: Z
  }) : (0, r.jsx)(d.Gt, {
    value: O,
    children: (0, r.jsx)(f.Z, {
      targetElementRef: C,
      user: E,
      guildId: _.guild_id,
      channelId: _.id,
      roleId: null == S ? true : S.colorRoleId,
      clickTrap: true,
      children: e => (0, r.jsx)(s.P3F, j(v({}, e), {
        innerRef: C,
        tag: "span",
        className: x.threadCreatorName,
        onContextMenu: I,
        children: (0, r.jsx)(s.PUh, {
          name: Z,
          colorString: null != T ? T : null,
          colorStrings: P
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
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: (0, r.jsx)("div", {
        className: x.subtitle,
        children: C.intl.format(C.t.imPXd3, {
          usernameHook: (e, n) => (0, r.jsx)(O, {
            userId: t.ownerId,
            channel: t
          }, n)
        })
      })
    }), t.type === _.d4z.PRIVATE_THREAD ? (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: C.intl.string(C.t["1awbZG"])
    }) : null]
  })
}

function S(e) {
  var t;
  let {
    channel: n
  } = e, i = null != (t = (0, p.KS)(n)) ? t : s.or_;
  return (0, r.jsxs)(y.ZP, {
    channelId: n.id,
    children: [(0, r.jsx)("div", {
      className: x.iconWrapper,
      children: (0, r.jsx)(i, {
        className: x.icon
      })
    }), (0, r.jsx)(y.Ot, {
      children: n.name
    }), (0, r.jsx)(E, {
      channel: n
    })]
  })
}