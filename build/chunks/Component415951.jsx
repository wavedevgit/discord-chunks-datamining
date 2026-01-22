/** Chunk was on web.js **/
/** chunk id: 415951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk954571 = require("./954571.js"),
  Chunk408213 = require("./408213.js"),
  Chunk890620 = require("./890620.js"),
  Chunk260197 = require("./260197.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = () => {
    a.default.track(c.HAw.MODAL_DISMISSED, {
      type: l.mk
    })
  },
  h = e => {
    a.default.track(c.HAw.OPEN_MODAL, {
      type: l.mk,
      guild_id: e
    })
  },
  m = {
    openMemberVerificationModal(e, t, a) {
      if (__OVERLAY__) return;
      h(e);
      let c = async t => {
        await s.Ay.submitVerificationForm(e, t)
      };
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("8458"), n.e("20601")]).then(n.bind(n, 89473));
        return n => (0, r.jsx)(t, p(d({}, n), {
          guildId: e,
          inviteKey: a,
          onComplete: c,
          onClose: async function() {
            let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
            if (!e)
              if (o.YN.getState().hasUnsubmittedChanges) return void(0, o.C7)(true);
              else _();
            await n.onClose()
          }
        }))
      }, {
        modalKey: l.LC,
        onCloseRequest: () => {
          _(), o.YN.getState().hasUnsubmittedChanges ? (0, o.C7)(true) : (0, i.closeModal)(l.LC)
        },
        onCloseCallback: t
      })
    },
    closeMemberVerificationModal() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      e || _(), (0, i.closeModal)(l.LC)
    },
    openMemberVerificationPreviewModal(e) {
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("8458"), n.e("20601")]).then(n.bind(n, 89473));
        return n => (0, r.jsx)(t, p(d({}, n), {
          guildId: e,
          isPreview: true
        }))
      })
    }
  }