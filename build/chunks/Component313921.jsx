/** Chunk was on 86266 **/
/** chunk id: 313921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk522579 = require("./522579.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk102597 = require("./102597.js"),
  Chunk629788 = require("./629788.jsx"),
  Chunk980504 = require("./980504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let h = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    soundGuild: t,
    sound: s,
    activeCallGuildId: d,
    onSelect: b
  } = e, m = function(e, t) {
    let {
      canManageGuildExpressions: i
    } = (0, l.cf)([p.A], () => null == t ? {
      canManageGuildExpressions: false
    } : p.A.getGuildPermissionProps(t), [t]), a = o.useCallback(() => {
      if ((null == t ? true : t.id) == null) return null;
      (0, c.mMO)(async () => {
        let {
          default: o
        } = await Promise.all([n.e("40556"), n.e("61274")]).then(n.bind(n, 6503));
        return n => {
          var i, l;
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
          }({}, n), l = l = {
            existingSound: e,
            guildId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }, [t, e]);
    return i ? (0, r.jsx)(c.Drp, {
      id: "edit-soundboard-sound",
      label: v.intl.string(v.t.ponZcG),
      action: a
    }, "edit-soundboard-sound") : null
  }(s, t), h = function(e) {
    let {
      soundId: t
    } = e, n = o.useCallback(async () => {
      try {
        let e = (0, O.A)(t),
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
          l = "".concat(t, ".").concat(o);
        y.isPlatformEmbedded ? await g.Ay.saveFile(e, l) : (0, i.saveAs)(r, l)
      } catch (e) {
        a.A.show({
          title: v.intl.string(v.t.mK3tDH),
          body: v.intl.string(v.t.jLlfDN),
          confirmText: v.intl.string(v.t.BddRzS)
        })
      }
    }, [t]);
    return e.guildId === w.mV ? null : (0, r.jsx)(c.Drp, {
      id: "download-soundboard-sound",
      label: v.intl.string(v.t["/fzLLK"]),
      action: n
    }, "download-soundboard-sound")
  }(s), P = (0, j.A)(s, d), A = (0, f.A)({
    id: s.soundId,
    label: v.intl.string(v.t.HJikXp)
  });
  return (0, r.jsx)(c.W1t, {
    navId: "sound-button-context",
    onClose: u.Z_,
    "aria-label": v.intl.string(v.t.liqwPJ),
    onSelect: b,
    children: (0, r.jsxs)(c.rXV, {
      children: [m, P, h, A]
    })
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.SOUNDBOARD_BUTTON])