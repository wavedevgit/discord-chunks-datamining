/** Chunk was on 8725 **/
/** chunk id: 665578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk605436 = require("./605436.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk821864 = require("./821864.js"),
  Chunk905753 = require("./905753.js"),
  Chunk937427 = require("./937427.js"),
  Chunk643886 = require("./643886.js"),
  Chunk869157 = require("./869157.jsx"),
  Chunk454092 = require("./454092.js"),
  Chunk289465 = require("./289465.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk291506 = require("./291506.js");

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

function Z(e, t) {
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
  let {
    applicationId: t,
    commandId: l,
    guildId: j,
    inModal: v,
    editedTargetPermissions: E,
    originalApplicationPermissions: k,
    originalCommandPermissions: A,
    selectedPermissionCount: R
  } = e, D = (0, s.e7)([x.Z], () => null == l ? null : x.Z.getCommand(l), [l]), L = (null == D ? true : D.defaultMemberPermissions) != null, M = (0, s.e7)([g.Z, m.ZP, f.Z], () => {
    let e = g.Z.getGuild(j),
      t = m.ZP.getSelfMember(j);
    return null != e && null != t && (0, u.Ft)({
      PermissionStore: f.Z,
      guild: e,
      selfMember: t,
      applicationLevelPermissions: k,
      commandLevelPermissions: A,
      defaultMemberPermissions: null == D ? true : D.defaultMemberPermissions
    })
  }, [j, D, k, A]), B = null != l ? l : t, [U, W] = r.useMemo(() => {
    let e = {},
      t = {};
    for (let [n, i] of Object.entries(E)) i.type === d.Kw.CHANNEL ? e[n] = i : t[n] = i;
    return [e, t]
  }, [E]), H = r.useCallback(e => {
    let t = g.Z.getGuild(j),
      n = m.ZP.getSelfMember(j);
    return null != t && null != n && (null != l ? (0, u.Ft)({
      PermissionStore: f.Z,
      guild: t,
      selfMember: n,
      applicationLevelPermissions: k,
      commandLevelPermissions: e,
      defaultMemberPermissions: null == D ? true : D.defaultMemberPermissions
    }) : (0, u.Ft)({
      PermissionStore: f.Z,
      guild: t,
      selfMember: n,
      applicationLevelPermissions: e
    }))
  }, [j, D, l, k]), G = r.useCallback((e, t) => {
    let n, i = null;
    if (0 !== t.length) {
      let e = E[t[0]];
      if (e.type === d.Kw.USER) n = y.s.REMOVE_SELF;
      else {
        let t = e.id;
        if (n = y.s.REMOVE_ROLE, (0, p.pM)(j, t)) i = "@everyone";
        else {
          let e = b.Z.getRole(j, t);
          i = null != e ? e.name : "role"
        }
      }
    } else {
      let t = Object.values(e)[0].id;
      if (n = y.s.DENY_ROLE, (0, p.pM)(j, t)) i = "@everyone";
      else {
        let e = b.Z.getRole(j, t);
        i = null != e ? e.name : "role"
      }
    }(0, y._)(n, i)
  }, [j, E]), z = r.useCallback((e, n) => {
    let i = {};
    for (let [e, t] of Object.entries(E)) i[e] = {
      id: t.id,
      permission: t.permission,
      type: t.type
    };
    if (i = Object.assign(i, e), n.length > 0 && (i = o().omit(i, n)), !H(i)) return void G(e, n);
    h.W4(t, B, i)
  }, [t, E, B, H, G]), F = r.useCallback(() => {
    let e = Object.keys(U);
    return (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("64908").then(n.bind(n, 557944));
      return n => (0, i.jsx)(t, w({
        editPermissions: z,
        guildId: j,
        headerText: S.intl.string(S.t["i1c+kZ"]),
        hasMemberSearch: false,
        overwrittenKeys: e,
        search: P,
        searchPlaceholderText: S.intl.string(S.t["TLQo/v"]),
        selectedPermissionCount: R
      }, n))
    })
  }, [z, U, j, R]), V = r.useCallback(() => {
    let e = Object.keys(W);
    return (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("64908").then(n.bind(n, 557944));
      return n => (0, i.jsx)(t, w({
        editPermissions: z,
        guildId: j,
        hasMemberSearch: true,
        headerText: S.intl.string(S.t["56jRn5"]),
        overwrittenKeys: e,
        search: T,
        searchPlaceholderText: S.intl.string(S.t.wAfO5e),
        selectedPermissionCount: R
      }, n))
    })
  }, [z, j, W, R]), K = r.useCallback(() => (0, c.ZDy)(async () => {
    let {
      default: e
    } = await n.e("21897").then(n.bind(n, 303313)), t = D.defaultMemberPermissions;
    return a.fS(t, u.BO) && (t = C.Plq.ADMINISTRATOR), n => (0, i.jsx)(e, Z(w({}, n), {
      defaultMemberPermissions: t
    }))
  }), [D]), q = R - N._n, Y = q >= 0, X = [{
    buttonClick: V,
    buttonText: S.intl.string(S.t["56jRn5"]),
    noneSelectedText: S.intl.string(S.t.C0rYfn),
    overwrites: W,
    title: null == l ? S.intl.string(S.t["vPWe+/"]) : S.intl.string(S.t["1jLVGB"])
  }, {
    buttonClick: F,
    buttonText: S.intl.string(S.t["i1c+kZ"]),
    noneSelectedText: S.intl.string(S.t.UBJhCw),
    overwrites: U,
    title: null == l ? S.intl.string(S.t.OGiMXF) : S.intl.string(S.t.Ujbaqq)
  }];
  return (0, i.jsxs)(r.Fragment, {
    children: [q > 0 ? (0, i.jsx)(c.Wn, {
      messageType: c.QYI.WARNING,
      children: S.intl.format(S.t["B/dFBA"], {
        removeCount: q
      })
    }) : null, L ? (0, i.jsxs)("div", {
      className: I.requiredPermissionsBanner,
      children: [(0, i.jsx)(c.d3s, {
        size: "sm",
        color: "currentColor",
        className: I.icon
      }), (0, i.jsx)("span", {
        className: I.message,
        children: S.intl.format(S.t["2889Gh"], {})
      }), (0, i.jsx)(c.zxk, {
        variant: "secondary",
        size: "sm",
        onClick: K,
        text: S.intl.string(S.t["HO/oXl"])
      })]
    }) : null, X.map((e, t) => {
      let n = t => (0, i.jsx)(c.zxk, Z(w({}, t), {
          variant: "secondary",
          disabled: Y || !M,
          onClick: e.buttonClick,
          size: "sm",
          text: e.buttonText
        })),
        r = null;
      return M ? Y && (r = S.intl.string(S.t.XTwtW1)) : r = null != l ? S.intl.string(S.t.tybdam) : S.intl.string(S.t.z2hjk5), (0, i.jsx)(_.Z, {
        bar: (0, i.jsx)(c.ua7, {
          tooltipClassName: I.tooltip,
          text: r,
          shouldShow: null != r,
          children: e => n(e)
        }),
        inModal: v,
        title: e.title,
        children: (0, i.jsx)("div", {
          className: v ? true : I.listContainer,
          children: (0, i.jsx)(O.Z, {
            guildId: j,
            commandId: l,
            noneSelectedText: e.noneSelectedText,
            overwrites: e.overwrites,
            editPermissions: z,
            hasAccessToMutatePermissions: M
          })
        })
      }, t)
    })]
  })
}

function P(e) {
  let t = (0, j.w)(e);
  return Z(w({}, t), {
    results: t.results.map(e => Z(w({}, e), {
      type: d.Kw.CHANNEL
    }))
  })
}

function T(e) {
  let t = (0, v.U)(e);
  return Z(w({}, t), {
    results: t.results.roles.map(e => Z(w({}, e), {
      type: d.Kw.ROLE
    })).concat(t.results.members.map(e => Z(w({}, e), {
      type: d.Kw.USER
    })))
  })
}