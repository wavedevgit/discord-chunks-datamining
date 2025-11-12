/** Chunk was on web.js **/
/** chunk id: 783097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $d: () => w,
  BQ: () => D,
  Cb: () => F,
  Hu: () => V,
  L1: () => z,
  Ow: () => K,
  PZ: () => q,
  WA: () => k,
  Wx: () => P,
  XZ: () => Y,
  Y$: () => B,
  Yn: () => H,
  dF: () => U,
  jD: () => x,
  lf: () => j,
  pF: () => W,
  sl: () => Z,
  vJ: () => M,
  yJ: () => G,
  ye: () => L
}), require("./953529.js"), require("./997841.js"), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk912370 = require("./912370.js"),
  Chunk668781 = require("./668781.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk761122 = require("./761122.js"),
  Chunk213459 = require("./213459.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk667204 = require("./667204.js"),
  Chunk433534 = require("./433534.js"),
  Chunk957730 = require("./957730.js"),
  Chunk973616 = require("./973616.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk358085 = require("./358085.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
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
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = {
  id: Chunk689079.bi.BUILT_IN
};

function D(e) {
  return e.id !== O.bi.BUILT_IN
}

function w(e) {
  return D(e) ? e.name : I.intl.string(I.t.UB2gG2)
}

function x(e) {
  return D(e) ? e.description : I.intl.string(I.t.X9fusn)
}

function L(e) {
  var t;
  return D(e) && (0, m.yE)(null != (t = e.flags) ? t : 0, y.udG.EMBEDDED)
}

function M(e) {
  var t;
  return D(e) && (0, m.yE)(null != (t = e.flags) ? t : 0, y.udG.PARTNER)
}

function j(e) {
  var t;
  return D(e) && (0, m.yE)(null != (t = e.flags) ? t : 0, y.udG.PROMOTED)
}

function k(e) {
  let t = G(e),
    n = null == t ? true : t.client_platform_config[(0, s.Z)((0, g.getOS)())],
    r = Date.now();
  if ((null == n ? true : n.label_until) != null && r < Date.parse(n.label_until) && (null == n ? true : n.label_from) != null && r > Date.parse(n.label_from)) {
    var i;
    return null != (i = null == n ? true : n.label_type) ? i : o.ww.NONE
  }
  return o.ww.NONE
}

function U(e) {
  switch (k(e)) {
    case o.ww.NEW:
      return "New";
    case o.ww.UPDATED:
      return "Updated";
    default:
      return ""
  }
}

function G(e) {
  return D(e) && L(e) ? e instanceof p.ZP ? e.embeddedActivityConfig : e.embedded_activity_config : null
}

function B(e) {
  let {
    command: t,
    optionValues: n,
    context: r,
    commandTargetId: o,
    maxSizeCallback: s,
    sectionName: l,
    commandOrigin: u = c.bB.APPLICATION_LAUNCHER
  } = e, {
    channel: f
  } = r, p = async () => {
    try {
      let i = await (0, d.Z)({
        command: t,
        optionValues: n,
        context: r,
        commandTargetId: o,
        maxSizeCallback: s,
        commandOrigin: u,
        sectionName: l,
        source: E.Z.entrypoint()
      });
      if (t.inputType === c.iw.BUILT_IN_TEXT && null != i && null != r.channel) {
        var e;
        let t = _.ZP.parse(f, i.content);
        t.tts = null != (e = i.tts) && e, a.Z.sendMessage(r.channel.id, t, true, {
          location: v.dy.APP_COMMAND
        })
      }
    } catch (e) {
      throw i.Z.show({
        title: I.intl.string(I.t["aHO//m"]),
        body: I.intl.string(I.t.kuzKHK),
        confirmText: I.intl.string(I.t["5911Lb"]),
        onConfirm: () => p()
      }), e
    }
  };
  return p()
}

function Z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      fakeAppIconURL: n
    } = t,
    r = N(t, ["fakeAppIconURL"]);
  return D(e) ? {
    iconURL: h.ZP.getApplicationIconURL(C(S({}, r), {
      id: e.id,
      icon: e.icon
    })),
    name: e.name,
    description: e.description
  } : {
    iconURL: null != n ? n : null,
    name: I.intl.string(I.t.UB2gG2),
    description: I.intl.string(I.t.X9fusn)
  }
}

function F(e) {
  return !!D(e) && (e instanceof p.ZP ? e.isMonetized : e.is_monetized)
}

function V(e) {
  let t = G(e);
  return null != t && t.displays_advertisements
}

function H(e) {
  return e === b._b.TEXT
}

function Y(e) {
  return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ")
}

function W(e) {
  let t = [];
  for (let n of e) {
    let e = n.application_directory_collection_items.filter(e => e.type === r.C.APPLICATION && L(e.application));
    0 !== e.length && t.push(C(S({}, n), {
      application_directory_collection_items: e
    }))
  }
  return t
}

function K(e) {
  return {
    applicationId: e.id,
    customInstallUrl: e.customInstallUrl,
    installParams: e.installParams,
    integrationTypesConfig: e.integrationTypesConfig
  }
}

function z(e) {
  return e instanceof p.ZP ? {
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

function q(e, t) {
  let n = null != t ? l.ZP.getGuildState(t) : null,
    r = null != n && (0, u.TK)(e.id, n);
  return (0, f.Dz)(e) || r
}