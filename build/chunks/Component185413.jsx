/** Chunk was on web.js **/
/** chunk id: 185413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => j,
  default: () => B,
  t: () => G
}), require("./953529.js"), require("./388685.js"), require("./781311.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk934415 = require("./934415.js"),
  Chunk892880 = require("./892880.js"),
  Chunk226951 = require("./226951.js"),
  Chunk605436 = require("./605436.js"),
  Chunk971628 = require("./971628.jsx"),
  Chunk71080 = require("./71080.js"),
  Chunk981631 = require("./981631.js"),
  Chunk494831 = require("./494831.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk208838 = require("./208838.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function D(e, t) {
  if ("object" !== x(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var r = n.call(e, t || "default");
    if ("object" !== x(r)) return r;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}

function L(e) {
  var t = D(e, "string");
  return "symbol" === x(t) ? t : String(t)
}

function x(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let M = (0, Chunk313201.hQ)();

function k(e, t) {
  return t ? e.slice(1) : e
}

function j(e) {
  let t, {
      guild: n,
      channel: a,
      permission: s,
      pendingAdditions: l,
      setPendingAdditions: u,
      isStageChannel: d = null != a && a.isGuildStageVoice(),
      description: f
    } = e,
    [_, m] = i.useState(false),
    [g, E] = i.useState(""),
    T = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(n.id));

  function S(e) {
    let t = k(g.trim(), _);
    return RegExp("".concat(y.Z.escape(t)), "i").test(e)
  }
  let A = (0, o.Wu)([p.ZP], () => p.ZP.getMemberIds(n.id));
  _ ? t = [] : d ? t = O.Wx(n, T, a, s, S) : 0 === (t = O.ik(n, T, a, s, S)).length && "" === g.trim() && 1 === T.length && (t = O.aq());
  let N = O.iI(A, a, n, s, S);

  function C(e) {
    let t = e.trim(),
      r = "@" === t.charAt(0);
    b.Z.requestMembers(n.id, k(t, r), I.EQ), E(e), m(r)
  }

  function w(e) {
    let t = (0, v.G)(e);
    u(n => {
      let r = R({}, n);
      if (t in r) delete r[t];
      else {
        let n;
        e.rowType === I.aC.ROLE || e.rowType === I.aC.ADMINISTRATOR ? n = {
          type: c.F.ROLE,
          label: e.name,
          color: e.colorString
        } : (e.rowType === I.aC.MEMBER || e.rowType === I.aC.OWNER) && (n = {
          type: c.F.MEMBER,
          label: e.name,
          avatar: e.avatarURL
        }), null != n && (r[t] = {
          display: n,
          row: e
        })
      }
      return r
    })
  }

  function D(e) {
    u(t => {
      let {
        [e]: n
      } = t;
      return P(t, [e].map(L))
    })
  }
  let {
    placeholderText: x,
    hintText: M,
    renderEmptyText: j
  } = U();
  return (0, r.jsx)(G, {
    pendingAdditions: l,
    query: g,
    onQueryChange: C,
    onClickRow: w,
    onRemovePendingAddition: D,
    roles: t,
    members: N,
    placeholderText: x,
    hintText: M,
    renderEmptyText: j,
    isStageChannel: d,
    description: f
  })
}

function U() {
  return {
    placeholderText: Chunk388032.intl.string(Chunk388032.t.iezLLi),
    hintText: Chunk388032.intl.string(Chunk388032.t["rwFx8/"]),
    renderEmptyText: e => A.intl.format(A.t.ErpIY2, {
      query: e
    })
  }
}

function G(e) {
  let {
    listClassName: t,
    pendingAdditions: n,
    query: i,
    onQueryChange: o,
    onClickRow: a,
    onRemovePendingAddition: l,
    roles: c,
    members: u,
    placeholderText: d,
    hintText: f,
    renderEmptyText: _,
    isStageChannel: p,
    focusSearchAfterReady: h,
    isReady: m,
    description: g
  } = e, E = () => {
    let e = g;
    return (null == e && p && (e = A.intl.string(A.t.f7VbhI)), null == e || "" === e) ? null : (0, r.jsx)(s.Text, {
      color: "header-secondary",
      className: N.description,
      variant: "text-sm/normal",
      children: e
    })
  };
  return (0, r.jsxs)("div", {
    className: N.content,
    children: [E(), (0, r.jsx)(v.Z, {
      listClassName: t,
      pendingAdditions: n,
      query: i,
      onQueryChange: o,
      onClickRow: a,
      onRemovePendingAddition: l,
      roles: c,
      members: u,
      placeholderText: d,
      hintText: f,
      renderEmptyText: _,
      disabledText: p ? A.intl.string(A.t.MVVOCg) : null,
      focusSearchAfterReady: h,
      isReady: m,
      maxCount: S.ey
    })]
  })
}

function B(e) {
  let {
    transitionState: t,
    onClose: n,
    channelId: l,
    newChannel: c,
    inSettings: d
  } = e, [p, h] = i.useState(false), [E, b] = i.useState({}), y = (0, o.e7)([_.Z], () => _.Z.getChannel(l), [l]), O = (0, o.e7)([m.Z], () => m.Z.getGuild(null == y ? true : y.getGuildId()));
  if (i.useEffect(() => {
      g.default.track(T.rMx.OPEN_MODAL, {
        type: "Grant Channel Access"
      })
    }, []), null == y || null == O) return null;
  let v = c && 0 === Object.keys(E).length;
  async function I() {
    if (null == y || 0 === Object.keys(E).length) return void n();
    h(true);
    try {
      await Z(y, E, d), n(), h(false)
    } catch (e) {
      h(false)
    }
  }
  let S = (0, f.zi)(y.type) ? s.W4G : s.gjC;
  return (0, r.jsxs)(s.Y0X, {
    transitionState: t,
    size: s.CgR.SMALL,
    "aria-labelledby": M,
    className: N.modalRoot,
    parentComponent: "AddMembersModal",
    children: [(0, r.jsxs)(s.xBx, {
      separator: false,
      direction: u.Z.Direction.VERTICAL,
      align: u.Z.Align.CENTER,
      className: N.header,
      children: [(0, r.jsx)(s.X6q, {
        id: M,
        variant: "heading-xl/semibold",
        children: A.intl.string(A.t.dMJ3Y2)
      }), (0, r.jsxs)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: N.headerSubtitle,
        children: [(0, r.jsx)(S, {
          size: "xs",
          color: "currentColor",
          className: N.headerSubtitleIcon
        }), y.name]
      })]
    }), (0, r.jsx)(j, {
      guild: O,
      channel: y,
      permission: y.accessPermissions,
      pendingAdditions: E,
      setPendingAdditions: b
    }), (0, r.jsxs)(s.mzw, {
      children: [!v && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: N.button,
          children: (0, r.jsx)(s.zxk, {
            variant: "primary",
            size: "sm",
            text: A.intl.string(A.t.i4jeWV),
            onClick: I,
            loading: p
          })
        }), (0, r.jsx)(a.zx, {
          look: a.zx.Looks.LINK,
          color: a.zx.Colors.TRANSPARENT,
          onClick: n,
          size: a.zx.Sizes.SMALL,
          children: A.intl.string(A.t["ETE/oK"])
        })]
      }), v && (0, r.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        text: A.intl.string(A.t.u46sxc),
        onClick: n
      })]
    })]
  })
}

function Z(e, t, n) {
  let r = [];
  return Object.values(t).forEach(t => {
    let {
      row: n
    } = t;
    null != n.id && "" !== n.id && (n.rowType === I.aC.ROLE ? r.push((0, E.rX)(n.id, e.type)) : n.rowType === I.aC.MEMBER && r.push((0, E.jZ)(n.id, e.type)))
  }), (0, l.hw)(e.id, r, n)
}