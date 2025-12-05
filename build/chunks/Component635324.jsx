/** Chunk was on 63141 **/
/** chunk id: 635324, original params: e,t,n (module,exports,require) **/
"use strict";
require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk149765 = require("./149765.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk700785 = require("./700785.js");
__OVERLAY__ && Chunk570140.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function(e) {
  var {
    clientId: t,
    authorizeProps: {
      authorizations: a,
      permissions: c
    }
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e.authorizeProps, ["authorizations", "permissions"]);
  let u = "OAuth2Authorize_".concat(t, "_").concat(d.guildId, "_").concat(d.channelId);

  function p(e) {
    let {
      location: n
    } = e;
    o.Z.dispatch({
      type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
      clientId: t,
      location: n
    })
  }
  let h = l.Hn;
  try {
    h = r.vB(null != c ? c : 0)
  } catch (e) {}(0, s.ZDy)(async () => {
    let {
      OAuth2AuthorizeModal: e
    } = await Promise.resolve().then(n.bind(n, 69580));
    return t => {
      var n, r;
      return (0, i.jsx)(e, (n = function(e) {
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
      }({}, t, d), r = r = {
        authorizations: new Map(a),
        permissions: h,
        callback: p
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  }, {
    modalKey: u,
    onCloseRequest: () => {
      (0, s.Mr3)(u), p({})
    }
  })
})