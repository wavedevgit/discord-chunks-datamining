/** Chunk was on 63141 **/
/** chunk id: 635324, original params: e,t,n (module,exports,require) **/
require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk149765 = require("./149765.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk700785 = require("./700785.js");
__OVERLAY__ && Chunk570140.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function(e) {
  var {
    clientId: t,
    authorizeProps: {
      authorizations: s,
      permissions: c
    }
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        o = Object.keys(e);
      for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e.authorizeProps, ["authorizations", "permissions"]);
  let u = "OAuth2Authorize_".concat(t, "_").concat(d.guildId, "_").concat(d.channelId);

  function h(e) {
    let {
      location: n
    } = e;
    l.Z.dispatch({
      type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
      clientId: t,
      location: n
    })
  }
  let p = a.Hn;
  try {
    p = r.vB(null != c ? c : 0)
  } catch (e) {}(0, o.ZDy)(async () => {
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
        authorizations: new Map(s),
        permissions: p,
        callback: h
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
      (0, o.Mr3)(u), h({})
    }
  })
})