/** Chunk was on 86736 **/
/** chunk id: 665578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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

function I(e) {
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

function P(e, t) {
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

function w(e) {
  let {
    applicationId: t,
    commandId: l,
    guildId: j,
    inModal: v,
    editedTargetPermissions: w,
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
  }, [j, R, k, A]), U = null != l ? l : t, [B, W] = r.useMemo(() => {
    let e = {},
      t = {};
    for (let [n, i] of Object.entries(w)) i.type === d.Kw.CHANNEL ? e[n] = i : t[n] = i;
    return [e, t]
  }, [w]), H = r.useCallback(e => {
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
      let e = w[t[0]];
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
  }, [j, w]), F = r.useCallback((e, n) => {
    let i = {};
    for (let [e, t] of Object.entries(w)) i[e] = {
      id: t.id,
      permission: t.permission,
      type: t.type
    };
    if (i = Object.assign(i, e), n.length > 0 && (i = a().omit(i, n)), !H(i)) return void G(e, n);
    h.W4(t, U, i)
  }, [t, w, U, H, G]), K = r.useCallback(() => {
    let e = Object.keys(B);
    return (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("64908").then(n.bind(n, 557944));
      return n => (0, i.jsx)(t, I({
        editPermissions: F,
        guildId: j,
        headerText: S.intl.string(S.t["i1c+kV"]),
        hasMemberSearch: false,
        overwrittenKeys: e,
        search: T,
        searchPlaceholderText: S.intl.string(S.t["TLQo/i"]),
        selectedPermissionCount: D
      }, n))
    })
  }, [F, B, j, D]), z = r.useCallback(() => {
    let e = Object.keys(W);
    return (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("64908").then(n.bind(n, 557944));
      return n => (0, i.jsx)(t, I({
        editPermissions: F,
        guildId: j,
        hasMemberSearch: true,
        headerText: S.intl.string(S.t["56jRn8"]),
        overwrittenKeys: e,
        search: Z,
        searchPlaceholderText: S.intl.string(S.t.wAfO5Y),
        selectedPermissionCount: D
      }, n))
    })
  }, [F, j, W, D]), V = r.useCallback(() => (0, c.ZDy)(async () => {
    let {
      default: e
    } = await n.e("21897").then(n.bind(n, 303313)), t = R.defaultMemberPermissions;
    return o.fS(t, u.BO) && (t = C.Plq.ADMINISTRATOR), n => (0, i.jsx)(e, P(I({}, n), {
      defaultMemberPermissions: t
    }))
  }), [R]), q = D - N._n, Y = q >= 0, J = [{
    buttonClick: z,
    buttonText: S.intl.string(S.t["56jRn8"]),
    noneSelectedText: S.intl.string(S.t.C0rYfq),
    overwrites: W,
    title: null == l ? S.intl.string(S.t["vPWe++"]) : S.intl.string(S.t["1jLVGB"])
  }, {
    buttonClick: K,
    buttonText: S.intl.string(S.t["i1c+kV"]),
    noneSelectedText: S.intl.string(S.t["UBJhC/"]),
    overwrites: B,
    title: null == l ? S.intl.string(S.t.OGiMXJ) : S.intl.string(S.t.Ujbaqm)
  }];
  return (0, i.jsxs)(r.Fragment, {
    children: [q > 0 ? (0, i.jsx)(c.Wn, {
      messageType: c.QYI.WARNING,
      children: S.intl.format(S.t["B/dFBH"], {
        removeCount: q
      })
    }) : null, L ? (0, i.jsxs)("div", {
      className: E.requiredPermissionsBanner,
      children: [(0, i.jsx)(c.d3s, {
        size: "sm",
        color: "currentColor",
        className: E.icon
      }), (0, i.jsx)("span", {
        className: E.message,
        children: S.intl.format(S.t["2889Gq"], {})
      }), (0, i.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        onClick: V,
        text: S.intl.string(S.t["HO/oXl"])
      })]
    }) : null, J.map((e, t) => {
      let n = null;
      return M ? Y && (n = S.intl.string(S.t["XTwtW/"])) : n = null != l ? S.intl.string(S.t.tybdas) : S.intl.string(S.t["z2hjk/"]), (0, i.jsx)(_.Z, {
        bar: (0, i.jsx)(c.aML, {
          tooltipClassName: E.tooltip,
          text: n,
          shouldShow: null != n,
          children: t => (0, i.jsx)(c.Button, P(I({}, t), {
            variant: "secondary",
            disabled: Y || !M,
            onClick: e.buttonClick,
            size: "sm",
            text: e.buttonText
          }))
        }),
        inModal: v,
        title: e.title,
        children: (0, i.jsx)("div", {
          className: v ? true : E.listContainer,
          children: (0, i.jsx)(O.Z, {
            guildId: j,
            commandId: l,
            noneSelectedText: e.noneSelectedText,
            overwrites: e.overwrites,
            editPermissions: F,
            hasAccessToMutatePermissions: M
          })
        })
      }, t)
    })]
  })
}

function T(e) {
  let t = (0, j.w)(e);
  return P(I({}, t), {
    results: t.results.map(e => P(I({}, e), {
      type: d.Kw.CHANNEL
    }))
  })
}

function Z(e) {
  let t = (0, v.U)(e);
  return P(I({}, t), {
    results: t.results.roles.map(e => P(I({}, e), {
      type: d.Kw.ROLE
    })).concat(t.results.members.map(e => P(I({}, e), {
      type: d.Kw.USER
    })))
  })
}