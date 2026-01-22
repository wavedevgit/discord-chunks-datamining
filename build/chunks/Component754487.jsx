/** Chunk was on 52081 **/
/** chunk id: 754487, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  openCreateGuildModal: () => p,
  updateCreateGuildModal: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk894778 = require("./894778.js"),
  Chunk954571 = require("./954571.js"),
  Chunk396777 = require("./396777.jsx"),
  Chunk819638 = require("./819638.js"),
  Chunk652215 = require("./652215.js"),
  Chunk315290 = require("./315290.js");

function d(e, t, n, l) {
  return (0, r.jsx)(i.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    onSuccess: t => {
      a.A.flowStep(u.do.CREATE_GUILD, u.jC.SUCCESS), e.onClose(), null == l || l(t)
    },
    onSlideChange: e => (function(e, t) {
      switch (e) {
        case c.oS.GUILD_TEMPLATES:
          a.A.flowStepOrStart(u.do.CREATE_GUILD, u.jC.GUILD_TEMPLATES), o.default.track(s.HAw.OPEN_MODAL, {
            type: "Create Guild Templates",
            location: t
          });
          break;
        case c.oS.CUSTOMIZE_GUILD:
          a.A.flowStep(u.do.CREATE_GUILD, u.jC.GUILD_CREATE), o.default.track(s.HAw.OPEN_MODAL, {
            type: "Create Guild Step 2",
            location: t
          });
          break;
        case c.oS.CREATION_INTENT:
          o.default.track(s.HAw.OPEN_MODAL, {
            type: "Server Intent Discovery",
            location: t
          });
          break;
        case c.oS.JOIN_GUILD:
          a.A.flowStep(u.do.CREATE_GUILD, u.jC.JOIN_GUILD), o.default.track(s.HAw.OPEN_MODAL, {
            type: "Join Guild",
            location: t
          })
      }
    })(e, n),
    initialSlide: t,
    hasJoinButton: true
  }, e))
}
let p = e => {
    let {
      initialSlide: t,
      location: n,
      onSuccess: r
    } = e;
    (0, l.qfG)(e => d(e, t, n, r), {
      modalKey: c.fc
    })
  },
  f = e => {
    let {
      slide: t,
      location: n
    } = e;
    (0, l.zbz)(c.fc, e => d(e, t, n))
  }