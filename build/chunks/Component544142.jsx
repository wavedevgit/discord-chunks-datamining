/** Chunk was on 7891 **/
/** chunk id: 544142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function O(e) {
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

function x(e, t) {
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

function E(e) {
  var t, l, p;
  let {
    userId: C,
    channel: y
  } = e, v = r.useRef(null), {
    analyticsLocations: E
  } = (0, d.ZP)(u.Z.USERNAME), j = (0, o.e7)([g.default], () => g.default.getUser(C)), S = (0, o.e7)([m.ZP], () => null != C ? m.ZP.getMember(y.guild_id, C) : null), P = (0, h.X7)(y.guild_id, null != C ? C : true, null != (t = null == S ? true : S.colorStrings) ? t : null);

  function I(e) {
    if (null == j) return null;
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("70675"), n.e("85994")]).then(n.bind(n, 654663));
      return t => (0, i.jsx)(e, x(O({}, t), {
        user: j,
        guildId: y.guild_id,
        channel: y
      }))
    })
  }
  let Z = null != (p = null != (l = null == S ? true : S.nick) ? l : b.ZP.getName(j)) ? p : "???",
    T = null == S ? true : S.colorString;
  return null == j ? (0, i.jsx)("span", {
    className: a()(_.threadCreatorName, _.unknownCreatorName),
    children: Z
  }) : (0, i.jsx)(d.Gt, {
    value: E,
    children: (0, i.jsx)(f.Z, {
      targetElementRef: v,
      user: j,
      guildId: y.guild_id,
      channelId: y.id,
      roleId: null == S ? true : S.colorRoleId,
      clickTrap: true,
      children: e => (0, i.jsx)(s.P3F, x(O({}, e), {
        innerRef: v,
        tag: "span",
        className: _.threadCreatorName,
        onContextMenu: I,
        children: (0, i.jsx)(s.PUh, {
          name: Z,
          colorString: null != T ? T : null,
          colorStrings: P
        })
      }))
    })
  })
}

function j(e) {
  let {
    channel: t
  } = e, {
    threadMetadata: n
  } = t;
  return null == n ? (0, i.jsx)("div", {
    style: {
      marginTop: false
    }
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: (0, i.jsx)("div", {
        className: _.subtitle,
        children: v.intl.format(v.t.imPXd5, {
          usernameHook: (e, n) => (0, i.jsx)(E, {
            userId: t.ownerId,
            channel: t
          }, n)
        })
      })
    }), t.type === y.d4z.PRIVATE_THREAD ? (0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: v.intl.string(v.t["1awbZG"])
    }) : null]
  })
}

function S(e) {
  var t;
  let {
    channel: n
  } = e, r = null != (t = (0, p.KS)(n)) ? t : s.or_;
  return (0, i.jsxs)(C.ZP, {
    channelId: n.id,
    children: [(0, i.jsx)("div", {
      className: _.iconWrapper,
      children: (0, i.jsx)(r, {
        className: _.icon
      })
    }), (0, i.jsx)(C.Ot, {
      children: n.name
    }), (0, i.jsx)(j, {
      channel: n
    })]
  })
}