/** Chunk was on 93741 **/
/** chunk id: 547652, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let P = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(t) {
  let {
    soundGuild: e,
    sound: s,
    activeCallGuildId: d,
    onSelect: b
  } = t, w = function(t, e) {
    let {
      canManageGuildExpressions: i
    } = (0, l.cj)([p.Z], () => null == e ? {
      canManageGuildExpressions: false
    } : p.Z.getGuildPermissionProps(e), [e]), a = o.useCallback(() => {
      if ((null == e ? true : e.id) == null) return null;
      (0, c.ZDy)(async () => {
        let {
          default: o
        } = await Promise.all([n.e("56035"), n.e("87262")]).then(n.bind(n, 758961));
        return n => {
          var i, l;
          return (0, r.jsx)(o, (i = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))), r.forEach(function(e) {
                var r;
                r = n[e], e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = r
              })
            }
            return t
          }({}, n), l = l = {
            existingSound: t,
            guildId: e.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(t) {
            Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t))
          }), i))
        }
      })
    }, [e, t]);
    return i ? (0, r.jsx)(c.sNh, {
      id: "edit-soundboard-sound",
      label: v.intl.string(v.t.ponZcG),
      action: a
    }, "edit-soundboard-sound") : null
  }(s, e), P = function(t) {
    let {
      soundId: e
    } = t, n = o.useCallback(async () => {
      try {
        let t = (0, j.Z)(e),
          n = await fetch(t),
          r = await n.blob(),
          o = function(t) {
            switch (t.type) {
              case "audio/mpeg":
              case "audio/mpeg3":
                return "mp3";
              case "audio/ogg":
                return "ogg";
              default:
                throw Error("unable to determine file type")
            }
          }(r),
          l = "".concat(e, ".").concat(o);
        y.isPlatformEmbedded ? await g.ZP.saveFile(t, l) : (0, i.saveAs)(r, l)
      } catch (t) {
        a.Z.show({
          title: v.intl.string(v.t.mK3tDH),
          body: v.intl.string(v.t.jLlfDN),
          confirmText: v.intl.string(v.t.BddRzS)
        })
      }
    }, [e]);
    return t.guildId === h.X8 ? null : (0, r.jsx)(c.sNh, {
      id: "download-soundboard-sound",
      label: v.intl.string(v.t["/fzLLK"]),
      action: n
    }, "download-soundboard-sound")
  }(s), m = (0, O.Z)(s, d), Z = (0, f.Z)({
    id: s.soundId,
    label: v.intl.string(v.t.HJikXp)
  });
  return (0, r.jsx)(c.v2r, {
    navId: "sound-button-context",
    onClose: u.Zy,
    "aria-label": v.intl.string(v.t.liqwPJ),
    onSelect: b,
    children: (0, r.jsxs)(c.kSQ, {
      children: [w, m, P, Z]
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.SOUNDBOARD_BUTTON])