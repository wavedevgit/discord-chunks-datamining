/** Chunk was on 58511 **/
/** chunk id: 665578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
  Chunk591086 = require("./591086.js");

function P(e) {
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

function I(e, t) {
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

function Z(e) {
  let {
    applicationId: t,
    commandId: l,
    guildId: j,
    inModal: v,
    editedTargetPermissions: Z,
    originalApplicationPermissions: k,
    originalCommandPermissions: A,
    selectedPermissionCount: D
  } = e, R = (0, s.e7)([x.Z], () => null == l ? null : x.Z.getCommand(l), [l]), L = (null == R ? true : R.defaultMemberPermissions) != null, M = (0, s.e7)([g.Z, m.ZP, f.Z], () => {
    let e = g.Z.getGuild(j),
      t = m.ZP.getSelfMember(j);
    return null != e && null != t && (0, u.Ft)({
      PermissionStore: f.Z,
      guild: e,
      selfMember: t,
      applicationLevelPermissions: k,
      commandLevelPermissions: A,
      defaultMemberPermissions: null == R ? true : R.defaultMemberPermissions
    })
  }, [j, R, k, A]), B = null != l ? l : t, [U, W] = r.useMemo(() => {
    let e = {},
      t = {};
    for (let [n, i] of Object.entries(Z)) i.type === d.Kw.CHANNEL ? e[n] = i : t[n] = i;
    return [e, t]
  }, [Z]), H = r.useCallback(e => {
    let t = g.Z.getGuild(j),
      n = m.ZP.getSelfMember(j);
    return null != t && null != n && (null != l ? (0, u.Ft)({
      PermissionStore: f.Z,
      guild: t,
      selfMember: n,
      applicationLevelPermissions: k,
      commandLevelPermissions: e,
      defaultMemberPermissions: null == R ? true : R.defaultMemberPermissions
    }) : (0, u.Ft)({
      PermissionStore: f.Z,
      guild: t,
      selfMember: n,
      applicationLevelPermissions: e
    }))
  }, [j, R, l, k]), G = r.useCallback((e, t) => {
    let n, i = null;
    if (0 !== t.length) {
      let e = Z[t[0]];
      if (e.type === d.Kw.USER) n = O.s.REMOVE_SELF;
      else {
        let t = e.id;
        if (n = O.s.REMOVE_ROLE, (0, p.pM)(j, t)) i = "@everyone";
        else {
          let e = b.Z.getRole(j, t);
          i = null != e ? e.name : "role"
        }
      }
    } else {
      let t = Object.values(e)[0].id;
      if (n = O.s.DENY_ROLE, (0, p.pM)(j, t)) i = "@everyone";
      else {
        let e = b.Z.getRole(j, t);
        i = null != e ? e.name : "role"
      }
    }(0, O._)(n, i)
  }, [j, Z]), z = r.useCallback((e, n) => {
    let i = {};
    for (let [e, t] of Object.entries(Z)) i[e] = {
      id: t.id,
      permission: t.permission,
      type: t.type
    };
    if (i = Object.assign(i, e), n.length > 0 && (i = a().omit(i, n)), !H(i)) return void G(e, n);
    h.W4(t, B, i)
  }, [t, Z, B, H, G]), F = r.useCallback(() => {
    let e = Object.keys(U);
    return (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("64908").then(n.bind(n, 557944));
      return n => (0, i.jsx)(t, P({
        editPermissions: z,
        guildId: j,
        headerText: w.intl.string(w.t["i1c+kZ"]),
        hasMemberSearch: false,
        overwrittenKeys: e,
        search: E,
        searchPlaceholderText: w.intl.string(w.t["TLQo/v"]),
        selectedPermissionCount: D
      }, n))
    })
  }, [z, U, j, D]), K = r.useCallback(() => {
    let e = Object.keys(W);
    return (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("64908").then(n.bind(n, 557944));
      return n => (0, i.jsx)(t, P({
        editPermissions: z,
        guildId: j,
        hasMemberSearch: true,
        headerText: w.intl.string(w.t["56jRn5"]),
        overwrittenKeys: e,
        search: T,
        searchPlaceholderText: w.intl.string(w.t.wAfO5e),
        selectedPermissionCount: D
      }, n))
    })
  }, [z, j, W, D]), q = r.useCallback(() => (0, c.ZDy)(async () => {
    let {
      default: e
    } = await n.e("21897").then(n.bind(n, 303313)), t = R.defaultMemberPermissions;
    return o.fS(t, u.BO) && (t = C.Plq.ADMINISTRATOR), n => (0, i.jsx)(e, I(P({}, n), {
      defaultMemberPermissions: t
    }))
  }), [R]), V = D - N._n, J = V >= 0, Y = [{
    buttonClick: K,
    buttonText: w.intl.string(w.t["56jRn5"]),
    noneSelectedText: w.intl.string(w.t.C0rYfn),
    overwrites: W,
    title: null == l ? w.intl.string(w.t["vPWe+/"]) : w.intl.string(w.t["1jLVGB"])
  }, {
    buttonClick: F,
    buttonText: w.intl.string(w.t["i1c+kZ"]),
    noneSelectedText: w.intl.string(w.t.UBJhCw),
    overwrites: U,
    title: null == l ? w.intl.string(w.t.OGiMXF) : w.intl.string(w.t.Ujbaqq)
  }];
  return (0, i.jsxs)(r.Fragment, {
    children: [V > 0 ? (0, i.jsx)(c.Wn, {
      messageType: c.QYI.WARNING,
      children: w.intl.format(w.t["B/dFBA"], {
        removeCount: V
      })
    }) : null, L ? (0, i.jsxs)("div", {
      className: S.requiredPermissionsBanner,
      children: [(0, i.jsx)(c.d3s, {
        size: "sm",
        color: "currentColor",
        className: S.icon
      }), (0, i.jsx)("span", {
        className: S.message,
        children: w.intl.format(w.t["2889Gh"], {})
      }), (0, i.jsx)(c.zxk, {
        variant: "secondary",
        size: "sm",
        onClick: q,
        text: w.intl.string(w.t["HO/oXl"])
      })]
    }) : null, Y.map((e, t) => {
      let n = null;
      return M ? J && (n = w.intl.string(w.t.XTwtW1)) : n = null != l ? w.intl.string(w.t.tybdam) : w.intl.string(w.t.z2hjk5), (0, i.jsx)(_.Z, {
        bar: (0, i.jsx)(c.ua7, {
          tooltipClassName: S.tooltip,
          text: n,
          shouldShow: null != n,
          children: t => (0, i.jsx)(c.zxk, I(P({}, t), {
            variant: "secondary",
            disabled: J || !M,
            onClick: e.buttonClick,
            size: "sm",
            text: e.buttonText
          }))
        }),
        inModal: v,
        title: e.title,
        children: (0, i.jsx)("div", {
          className: v ? true : S.listContainer,
          children: (0, i.jsx)(y.Z, {
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

function E(e) {
  let t = (0, j.w)(e);
  return I(P({}, t), {
    results: t.results.map(e => I(P({}, e), {
      type: d.Kw.CHANNEL
    }))
  })
}

function T(e) {
  let t = (0, v.U)(e);
  return I(P({}, t), {
    results: t.results.roles.map(e => I(P({}, e), {
      type: d.Kw.ROLE
    })).concat(t.results.members.map(e => I(P({}, e), {
      type: d.Kw.USER
    })))
  })
}