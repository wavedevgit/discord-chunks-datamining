/** Chunk was on 86266 **/
/** chunk id: 313921, original params: t,e,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => j
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
let j = (0, Chunk358367.A)((0, Chunk847767.A)(function(t) {
  let {
    soundGuild: e,
    sound: s,
    activeCallGuildId: d,
    onSelect: f
  } = t, m = function(t, e) {
    let {
      canManageGuildExpressions: i
    } = (0, a.cf)([b.A], () => null == e ? {
      canManageGuildExpressions: false
    } : b.A.getGuildPermissionProps(e), [e]), u = o.useCallback(() => {
      if ((null == e ? true : e.id) == null) return null;
      (0, c.mMO)(async () => {
        let {
          default: o
        } = await Promise.all([n.e("40556"), n.e("74152")]).then(n.bind(n, 6503));
        return n => {
          var i, a;
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
          }({}, n), a = a = {
            existingSound: t,
            guildId: e.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(t) {
            Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(a, t))
          }), i))
        }
      })
    }, [e, t]);
    return i ? (0, r.jsx)(c.Drp, {
      id: "edit-soundboard-sound",
      label: h.intl.string(h.t.ponZcG),
      action: u
    }, "edit-soundboard-sound") : null
  }(s, e), j = function(t) {
    let {
      soundId: e
    } = t, n = o.useCallback(async () => {
      try {
        let t = (0, g.A)(e),
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
          a = "".concat(e, ".").concat(o);
        y.isPlatformEmbedded ? await O.Ay.saveFile(t, a) : (0, i.saveAs)(r, a)
      } catch (t) {
        u.A.show({
          title: h.intl.string(h.t.mK3tDH),
          body: h.intl.string(h.t.jLlfDN),
          confirmText: h.intl.string(h.t.BddRzS)
        })
      }
    }, [e]);
    return t.guildId === v.mV ? null : (0, r.jsx)(c.Drp, {
      id: "download-soundboard-sound",
      label: h.intl.string(h.t["/fzLLK"]),
      action: n
    }, "download-soundboard-sound")
  }(s), S = (0, w.A)(s, d), A = (0, p.A)({
    id: s.soundId,
    label: h.intl.string(h.t.HJikXp)
  });
  return (0, r.jsx)(c.W1t, {
    "data-menu-migrated": true,
    navId: "sound-button-context",
    onClose: l.Z_,
    "aria-label": h.intl.string(h.t.liqwPJ),
    onSelect: f,
    children: (0, r.jsxs)(c.rXV, {
      children: [m, S, j, A]
    })
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.SOUNDBOARD_BUTTON])