/** Chunk was on 27662 **/
/** chunk id: 635703, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  openCreateGuildModal: () => d,
  updateCreateGuildModal: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk390885 = require("./390885.js"),
  Chunk626135 = require("./626135.js"),
  Chunk299402 = require("./299402.jsx"),
  Chunk675999 = require("./675999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk630724 = require("./630724.js");

function _(e, t, n, o) {
  return (0, r.jsx)(a.Z, function(e) {
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
      l.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS), e.onClose(), null == o || o(t)
    },
    onSlideChange: e => (function(e, t) {
      switch (e) {
        case s._m.GUILD_TEMPLATES:
          l.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES), i.default.track(c.rMx.OPEN_MODAL, {
            type: "Create Guild Templates",
            location: t
          });
          break;
        case s._m.CUSTOMIZE_GUILD:
          l.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE), i.default.track(c.rMx.OPEN_MODAL, {
            type: "Create Guild Step 2",
            location: t
          });
          break;
        case s._m.CREATION_INTENT:
          i.default.track(c.rMx.OPEN_MODAL, {
            type: "Server Intent Discovery",
            location: t
          });
          break;
        case s._m.JOIN_GUILD:
          l.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD), i.default.track(c.rMx.OPEN_MODAL, {
            type: "Join Guild",
            location: t
          })
      }
    })(e, n),
    initialSlide: t,
    hasJoinButton: true
  }, e))
}
let d = e => {
    let {
      initialSlide: t,
      location: n,
      onSuccess: r
    } = e;
    (0, o.h7j)(e => _(e, t, n, r), {
      modalKey: s.PU
    })
  },
  p = e => {
    let {
      slide: t,
      location: n
    } = e;
    (0, o.oav)(s.PU, e => _(e, t, n))
  }