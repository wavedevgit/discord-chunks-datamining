/** Chunk was on web.js **/
/** chunk id: 66511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js"),
  Chunk626135 = require("./626135.js"),
  Chunk863249 = require("./863249.js"),
  Chunk266395 = require("./266395.js"),
  Chunk592286 = require("./592286.js"),
  Chunk981631 = require("./981631.js");

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
    a.default.track(c.rMx.MODAL_DISMISSED, {
      type: l.N4
    })
  },
  h = e => {
    a.default.track(c.rMx.OPEN_MODAL, {
      type: l.N4,
      guild_id: e
    })
  },
  m = {
    openMemberVerificationModal(e, t, a) {
      if (__OVERLAY__) return;
      h(e);
      let c = async t => {
        await o.ZP.submitVerificationForm(e, t)
      };
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("44686"), n.e("93671")]).then(n.bind(n, 645264));
        return n => (0, r.jsx)(t, p(d({}, n), {
          guildId: e,
          inviteKey: a,
          onComplete: c,
          onClose: async function() {
            let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
            if (!e)
              if (s.rb.getState().hasUnsubmittedChanges) return void(0, s.PE)(true);
              else _();
            await n.onClose()
          }
        }))
      }, {
        modalKey: l.Pn,
        onCloseRequest: () => {
          _(), s.rb.getState().hasUnsubmittedChanges ? (0, s.PE)(true) : (0, i.closeModal)(l.Pn)
        },
        onCloseCallback: t
      })
    },
    closeMemberVerificationModal() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      e || _(), (0, i.closeModal)(l.Pn)
    },
    openMemberVerificationPreviewModal(e) {
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("44686"), n.e("93671")]).then(n.bind(n, 645264));
        return n => (0, r.jsx)(t, p(d({}, n), {
          guildId: e,
          isPreview: true
        }))
      })
    }
  }