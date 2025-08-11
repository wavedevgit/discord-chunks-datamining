/** Chunk was on web.js **/
/** chunk id: 199649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk631937 = require("./631937.js"),
  Chunk702321 = require("./702321.js"),
  Chunk377171 = require("./377171.js"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk862679 = require("./862679.js"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js"),
  Chunk388032 = require("./388032.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    channel: t,
    children: g
  } = e, b = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.getRecipientId()));
  (0, s.Z)(t.id);
  let O = (0, l.Z)(t.id),
    v = t.isSystemDM(),
    I = b && !v && !t.isMultiUserDM(),
    T = () => {
      a.Z.unblockUser(t.getRecipientId())
    },
    S = {};
  if (v) {
    let e = () => {
        if (O) {
          open(h.D2), d.default.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "chat_blocker",
            target: h.D2
          });
          return
        }
        open(f.Z.getArticleURL(p.BhN.SYSTEM_DMS))
      },
      t = O ? <r.Fragment>{m.intl.string(m.t["+KSnWV"])}{<o.rgF size={"xs"} color={c.Z.HEADER_PRIMARY} />}</r.Fragment> : m.intl.string(m.t.hvVgAQ);
    S.message = m.intl.string(m.t.Bt2N7O), S.subtitle = m.intl.string(m.t["n/Vzk5"]), S.buttonText = t, S.onButtonClick = e, S.imageSrc = n(780961)
  } else I && (S.message = m.intl.string(m.t["9T6N5+"]), S.buttonText = m.intl.string(m.t.XyHpKC), S.onButtonClick = T);
  return <_.Z{...y(E({}, S), {
    children: g
  })} />
}