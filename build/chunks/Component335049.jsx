/** Chunk was on 9414 **/
/** chunk id: 335049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk471445 = require("./471445.js"),
  Chunk518738 = require("./518738.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478321 = require("./478321.js");

function w(e) {
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

function E(e, t) {
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

function P(e) {
  let {
    guild: t,
    id: l,
    type: a,
    isLocked: o,
    lockTooltipText: c
  } = e, d = !o || null != c;
  s()(d, "No lockTooltipText provided while isLocked=true");
  let u = r.useCallback(e => {
    (0, b.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, i.jsx)(e, E(w({}, t), {
        id: l,
        label: S.intl.string(S.t.oJ1Muw)
      }))
    })
  }, [l]);
  switch (a) {
    case p.Kw.CHANNEL:
      return (0, i.jsx)(T, {
        guild: t,
        id: l,
        isLocked: o,
        lockTooltipText: c,
        openEntryContextMenu: u
      });
    case p.Kw.ROLE:
      return (0, i.jsx)(Z, {
        guild: t,
        id: l,
        isLocked: o,
        lockTooltipText: c,
        openEntryContextMenu: u
      });
    case p.Kw.USER:
      return (0, i.jsx)(_, {
        guild: t,
        id: l,
        isLocked: o,
        lockTooltipText: c,
        openEntryContextMenu: u
      })
  }
}

function T(e) {
  let {
    guild: t,
    id: n,
    isLocked: l,
    lockTooltipText: o,
    openEntryContextMenu: s
  } = e, d = (0, m.bD)(t.id), {
    icon: b,
    name: p,
    categoryName: g
  } = (0, c.cj)([x.Z], () => {
    if (d === n) return {
      name: S.intl.string(S.t["7YqSGx"]),
      icon: u.VL1
    };
    let e = x.Z.getChannel(n),
      i = (null == e ? true : e.parent_id) != null ? x.Z.getChannel(e.parent_id) : null;
    return {
      icon: null != e ? (0, f.KS)(e, t) : null,
      name: null == e ? true : e.name,
      categoryName: null == i ? true : i.name
    }
  }, [d, t, n]), h = r.useCallback(e => {
    n !== d && s(e)
  }, [d, n, s]);
  return null == b || null == p ? null : (0, i.jsxs)("div", {
    onContextMenu: h,
    className: I.identifier,
    children: [(0, i.jsx)(b, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: a()(I.channelIcon, I.image)
    }), (0, i.jsx)(u.Text, {
      className: I.roleName,
      color: "text-strong",
      variant: "text-md/normal",
      children: p
    }), null != g ? (0, i.jsxs)(u.Text, {
      className: I.tag,
      variant: "text-sm/normal",
      children: ["(", g, ")"]
    }) : null, l ? (0, i.jsx)(k, {
      tooltipText: o
    }) : null]
  })
}

function Z(e) {
  var t;
  let {
    guild: l,
    id: o,
    isLocked: s,
    lockTooltipText: d
  } = e, p = (0, c.e7)([v.Z], () => v.Z.getRole(l.id, o)), m = (0, g.p9)({
    guildId: l.id,
    roleId: o,
    size: 24
  }), f = r.useCallback(e => {
    null != l && null != p && (0, b.jW)(e, async () => {
      let {
        default: e
      } = await n.e("14486").then(n.bind(n, 786746));
      return t => (0, i.jsx)(e, E(w({}, t), {
        guild: l,
        role: p
      }))
    })
  }, [l, p]);
  return (null == p ? true : p.name) == null ? null : (0, i.jsxs)("div", {
    onContextMenu: f,
    className: I.identifier,
    children: [null != m ? (0, i.jsx)(h.Z, w({
      className: a()(I.__invalid_icon, I.image)
    }, m)) : (0, i.jsx)(u.lZ8, {
      size: "custom",
      width: 23,
      height: 23,
      className: a()(I.shield, I.image),
      color: null != (t = p.colorString) ? t : N.Pbq
    }), (0, i.jsx)(u.Text, {
      className: I.roleName,
      color: "text-strong",
      variant: "text-md/normal",
      children: p.name
    }), s ? (0, i.jsx)(k, {
      tooltipText: d
    }) : null]
  })
}

function _(e) {
  let {
    guild: t,
    id: n,
    isLocked: r,
    lockTooltipText: l,
    openEntryContextMenu: a
  } = e, o = (0, c.e7)([y.default], () => y.default.getUser(n)), s = (0, c.e7)([j.ZP], () => {
    var e;
    return null == (e = j.ZP.getMember(t.id, n)) ? true : e.nick
  }, [t.id, n]), d = (0, c.e7)([O.Z], () => O.Z.hidePersonalInformation);
  return null == o ? null : (0, i.jsxs)("div", {
    onContextMenu: a,
    className: I.identifier,
    children: [(0, i.jsx)(u.qEK, {
      className: I.image,
      src: o.getAvatarURL(t.id, 24),
      "aria-label": o.username,
      size: u.EFr.SIZE_24
    }), (0, i.jsx)(u.Text, {
      className: I.roleName,
      color: "text-strong",
      variant: "text-md/normal",
      children: null != s ? s : o.username
    }), d ? null : (0, i.jsx)(u.Text, {
      className: I.tag,
      variant: "text-sm/normal",
      children: C.ZP.getUserTag(o)
    }), r ? (0, i.jsx)(k, {
      tooltipText: l
    }) : null]
  })
}

function k(e) {
  let {
    tooltipText: t
  } = e;
  return (0, i.jsx)(d.u, {
    text: t,
    children: (0, i.jsx)("div", {
      className: I.lockIcon,
      children: (0, i.jsx)(u.mBM, {
        size: "xs",
        color: "currentColor"
      })
    })
  })
}