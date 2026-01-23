/** Chunk was on web.js **/
/** chunk id: 735991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $B: () => P,
  Ag: () => L,
  Cx: () => G,
  EF: () => z,
  Ii: () => U,
  K4: () => B,
  ME: () => H,
  MJ: () => V,
  N3: () => w,
  NO: () => M,
  Pp: () => q,
  V1: () => X,
  X2: () => F,
  b7: () => j,
  fl: () => k,
  hX: () => K,
  kF: () => W,
  lq: () => D,
  sw: () => Y,
  u8: () => x
}), require("./228524.js"), require("./938796.js"), require("./747238.js"), require("./812715.js"), require("./866193.js"), require("./321073.js"), require("./896048.js");
var Chunk487899 = require("./487899.js"),
  Chunk665260 = require("./665260.js"),
  Chunk157559 = require("./157559.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk847381 = require("./847381.js"),
  Chunk264322 = require("./264322.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk545152 = require("./545152.js"),
  Chunk204776 = require("./204776.js"),
  Chunk451909 = require("./451909.js"),
  Chunk611010 = require("./611010.js"),
  Chunk486020 = require("./486020.js"),
  Chunk723702 = require("./723702.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk652215 = require("./652215.js"),
  Chunk73510 = require("./73510.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = R(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let w = {
  id: Chunk73510.Ik.BUILT_IN
};

function P(e) {
  return e.id !== O.Ik.BUILT_IN
}

function D(e) {
  return P(e) ? e.name : A.intl.string(A.t.UB2gG2)
}

function x(e) {
  return P(e) ? e.description : A.intl.string(A.t.X9fusn)
}

function L(e) {
  var t;
  return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, b.gfo.EMBEDDED)
}

function j(e) {
  var t;
  return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, b.gfo.PARTNER)
}

function M(e) {
  var t;
  return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, b.gfo.PROMOTED)
}

function k(e) {
  let t = G(e),
    n = null == t ? true : t.client_platform_config[(0, l.A)((0, g.getOS)())],
    r = Date.now();
  if ((null == n ? true : n.label_until) != null && r < Date.parse(n.label_until) && (null == n ? true : n.label_from) != null && r > Date.parse(n.label_from)) {
    var i;
    return null != (i = null == n ? true : n.label_type) ? i : o.Hr.NONE
  }
  return o.Hr.NONE
}

function U(e) {
  switch (k(e)) {
    case o.Hr.NEW:
      return "New";
    case o.Hr.UPDATED:
      return "Updated";
    default:
      return ""
  }
}

function G(e) {
  return P(e) && L(e) ? e instanceof h.Ay ? e.embeddedActivityConfig : e.embedded_activity_config : null
}

function V(e) {
  let {
    command: t,
    optionValues: n,
    context: r,
    commandTargetId: i,
    maxSizeCallback: o,
    sectionName: l,
    commandOrigin: c = u.iw.APPLICATION_LAUNCHER
  } = e, {
    channel: d
  } = r, p = async () => {
    try {
      let a = await (0, f.A)({
        command: t,
        optionValues: n,
        context: r,
        commandTargetId: i,
        maxSizeCallback: o,
        commandOrigin: c,
        sectionName: l,
        source: E.A.entrypoint()
      });
      if (t.inputType === u.y$.BUILT_IN_TEXT && null != a && null != r.channel) {
        var e;
        let t = _.Ay.parse(d, a.content);
        t.tts = null != (e = a.tts) && e, s.A.sendMessage(r.channel.id, t, true, {
          location: v.Hx.APP_COMMAND
        })
      }
    } catch (e) {
      throw a.A.show({
        title: A.intl.string(A.t["aHO//m"]),
        body: A.intl.string(A.t.kuzKHK),
        confirmText: A.intl.string(A.t["5911Lb"]),
        onConfirm: () => p()
      }), e
    }
  };
  return p()
}

function F(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      fakeAppIconURL: n
    } = t,
    r = N(t, ["fakeAppIconURL"]);
  return P(e) ? {
    iconURL: m.Ay.getApplicationIconURL(C(S({}, r), {
      id: e.id,
      icon: e.icon
    })),
    name: e.name,
    description: e.description
  } : {
    iconURL: null != n ? n : null,
    name: A.intl.string(A.t.UB2gG2),
    description: A.intl.string(A.t.X9fusn)
  }
}

function B(e) {
  return !!P(e) && (e instanceof h.Ay ? e.isMonetized : e.is_monetized)
}

function H(e) {
  let t = G(e);
  return null != t && t.displays_advertisements
}

function Y(e) {
  return e === y.s4.TEXT
}

function W(e) {
  return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ")
}

function K(e) {
  let t = [];
  for (let n of e) {
    let e = n.application_directory_collection_items.filter(e => e.type === r.L.APPLICATION && L(e.application));
    0 !== e.length && t.push(C(S({}, n), {
      application_directory_collection_items: e
    }))
  }
  return t
}

function z(e) {
  return {
    applicationId: e.id,
    customInstallUrl: e.customInstallUrl,
    installParams: e.installParams,
    integrationTypesConfig: e.integrationTypesConfig
  }
}

function q(e) {
  return e instanceof h.Ay ? {
    applicationId: e.id,
    customInstallUrl: e.customInstallUrl,
    installParams: e.installParams,
    integrationTypesConfig: e.integrationTypesConfig
  } : {
    applicationId: e.id,
    customInstallUrl: e.custom_install_url,
    installParams: e.install_params,
    integrationTypesConfig: e.integration_types_config
  }
}

function X(e, t) {
  let n = null != t ? c.Ay.getGuildState(t) : null,
    r = null != n && (0, d.gI)(e.id, n);
  return (0, p.Kp)(e) || r
}