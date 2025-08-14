/** Chunk was on 93741 **/
/** chunk id: 547652, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => j
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk817080 = require("./817080.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk22382 = require("./22382.js"),
  Chunk51078 = require("./51078.jsx"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let j = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    soundGuild: t,
    sound: s,
    activeCallGuildId: d,
    onSelect: f
  } = e, h = function(e, t) {
    let {
      canManageGuildExpressions: i
    } = (0, a.cj)([p.Z], () => null == t ? {
      canManageGuildExpressions: false
    } : p.Z.getGuildPermissionProps(t), [t]), u = o.useCallback(() => {
      if ((null == t ? true : t.id) == null) return null;
      (0, c.ZDy)(async () => {
        let {
          default: o
        } = await Promise.all([n.e("12830"), n.e("56035"), n.e("62599")]).then(n.bind(n, 758961));
        return n => {
          var i, a;
          return (0, r.jsx)(o, (i = function(e) {
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
          }({}, n), a = a = {
            existingSound: e,
            guildId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
          }), i))
        }
      })
    }, [t, e]);
    return i ? (0, r.jsx)(c.sNh, {
      id: "edit-soundboard-sound",
      label: m.intl.string(m.t.ponZcH),
      action: u
    }, "edit-soundboard-sound") : null
  }(s, t), j = function(e) {
    let {
      soundId: t
    } = e, n = o.useCallback(async () => {
      try {
        let e = (0, O.Z)(t),
          n = await fetch(e),
          r = await n.blob(),
          o = function(e) {
            switch (e.type) {
              case "audio/mpeg":
              case "audio/mpeg3":
                return "mp3";
              case "audio/ogg":
                return "ogg";
              default:
                throw Error("unable to determine file type")
            }
          }(r),
          a = "".concat(t, ".").concat(o);
        y.isPlatformEmbedded ? await w.ZP.saveFile(e, a) : (0, i.saveAs)(r, a)
      } catch (e) {
        u.Z.show({
          title: m.intl.string(m.t.mK3tDA),
          body: m.intl.string(m.t.jLlfDA),
          confirmText: m.intl.string(m.t.BddRzc)
        })
      }
    }, [t]);
    return e.guildId === v.X8 ? null : (0, r.jsx)(c.sNh, {
      id: "download-soundboard-sound",
      label: m.intl.string(m.t["/fzLLC"]),
      action: n
    }, "download-soundboard-sound")
  }(s), S = (0, g.Z)(s, d), P = (0, b.Z)({
    id: s.soundId,
    label: m.intl.string(m.t.HJikXl)
  });
  return (0, r.jsx)(c.v2r, {
    navId: "sound-button-context",
    onClose: l.Zy,
    "aria-label": m.intl.string(m.t.liqwPD),
    onSelect: f,
    children: (0, r.jsxs)(c.kSQ, {
      children: [h, S, j, P]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.SOUNDBOARD_BUTTON])