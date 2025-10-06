/** Chunk was on 2262 **/
/** chunk id: 375727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk33309 = require("./33309.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk80932 = require("./80932.js"),
  Chunk493773 = require("./493773.js"),
  Chunk710845 = require("./710845.js"),
  Chunk471613 = require("./471613.js"),
  Chunk806774 = require("./806774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk176354 = require("./176354.js"),
  Chunk598117 = require("./598117.js"),
  Chunk390620 = require("./390620.jsx"),
  Chunk983205 = require("./983205.jsx"),
  Chunk457574 = require("./457574.js"),
  Chunk903759 = require("./903759.jsx"),
  Chunk746622 = require("./746622.jsx"),
  Chunk384694 = require("./384694.jsx"),
  Chunk273391 = require("./273391.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk176898 = require("./176898.js");
let M = new Chunk710845.Z("EmojiStudio");

function P(e) {
  var t, n;
  if (null == e) return "";
  let r = null != (n = null == e || null == (t = e.file) ? true : t.name) ? n : "",
    i = r.lastIndexOf("."),
    l = false === i ? r : r.substring(0, i);
  return _.ZP.sanitizeEmojiName(l)
}
let R = e => {
    var t;
    let {
      guildId: n
    } = e, l = "userImage" in e ? e.userImage : true, g = "emoji" in e ? e.emoji : true, R = !!g, [L, z] = i.useState(null != l ? l : null), [G, U] = i.useState(false), F = (0, o.e7)([v.Z, b.Z, x.Z], () => {
      let e = b.Z.getGuildId(),
        t = v.Z.getGuild(e);
      return x.Z.can(S.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [W, B] = i.useState(null != n ? n : F), [H, V] = i.useState(null), [J, Y] = i.useState(null), [K, X] = i.useState(P(L)), [q, $] = i.useState(null), [Q, ee] = i.useState(() => Date.now()), et = i.useRef(0), en = i.useRef(0), er = i.useRef(false);
    i.useEffect(() => {
      if (null == g) return;
      let e = p.Z.getEmojiRawAsset(g.id);
      if (null != e) {
        z(e), $(e.data), X(g.name), U(false);
        return
      }
      U(true), (0, N.Q)(g).then(e => {
        z(e), $(e.data), X(g.name), U(false)
      }).catch(e => {
        M.error("Failed to fetch emoji image", e), V(O.ze.MISSING_IMAGE_DATA), U(false)
      })
    }, [g]);
    let ei = i.useCallback(e => {
      let {
        reason: t
      } = e, n = null != H ? H : J;
      j.default.track(S.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === et.current,
        has_image: null != L,
        error: null == n ? null : String(n),
        throttled_edit_count: en.current,
        session_duration_ms: Date.now() - Q,
        has_guild_selected: null != W
      })
    }, [H, J, Q, L, W]);
    (0, m.zq)(() => {
      er.current || ei({
        reason: "closed"
      })
    });
    let el = i.useCallback(async () => {
        if (V(null), null == W) return void V(O.ze.MISSING_GUILD);
        if (null == L || (null == L ? true : L.file) == null || null == q) return void V(O.ze.MISSING_IMAGE_DATA);
        let e = null;
        try {
          e = await (0, h.rS)({
            image: q,
            guildId: W,
            name: K,
            analyticsLocation: {
              page: S.ZY5.EMOJI_STUDIO
            }
          }), f.MK({
            emojiId: e.id,
            userImage: function(e) {
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
            }({}, L)
          })
        } catch (e) {
          V((0, D.zg)(e)), M.error("Failed to upload emoji.", e);
          return
        }
        if (null != g) try {
          await (0, h.RE)(W, g.id, e.id)
        } catch (e) {
          if (429 === e.status) d.Z.show({
            title: T.intl.string(T.t.iufib2),
            body: T.intl.string(T.t["Whhv4+"])
          });
          else {
            V((0, D.zg)(e)), M.error("Failed to delete emoji.", e);
            return
          }
        }
        ei({
          reason: "uploaded"
        }), er.current = true, (0, c.Mr3)(O.Hj), (0, y.y)({
          emoji: e,
          guildId: W
        })
      }, [W, L, g, q, ei, K]),
      ea = i.useCallback(() => {
        ei({
          reason: "back_button"
        }), V(null), z(null), $(null), X(""), ee(Date.now()), en.current = 0
      }, [ei]),
      es = i.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: r
        } = e, i = null;
        null != t && _.ZP.isDataTooBig(t) && (i = O.ze.TOO_BIG), V(null != r ? r : i), n < et.current || null != t && ($(t), et.current = n)
      }, []),
      eo = i.useCallback(() => {
        en.current++
      }, []),
      eu = i.useCallback(e => {
        var t;
        z(e), X(t => "" !== t ? t : P(e)), $(null != (t = null == e ? true : e.data) ? t : null)
      }, []),
      ec = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.iMJO39),
      ed = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.DU0dy8);
    return G ? (0, r.jsxs)("main", {
      className: A.main,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: A.heading,
        children: ec
      }), (0, r.jsx)("div", {
        className: A.editor
      }), (0, r.jsx)("div", {
        className: A.closeButton,
        children: (0, r.jsx)(c.PZ7, {
          size: "sm",
          onClick: () => (0, c.Mr3)(O.Hj)
        })
      })]
    }) : (0, r.jsxs)("main", {
      className: a()(A.main, {
        [A.checkerboard]: null != L
      }),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: A.heading,
        children: ec
      }), null == L ? (0, r.jsx)(w.u, {
        setImage: eu
      }) : (0, r.jsx)("div", {
        className: A.editor,
        children: (0, r.jsx)(I.v, {
          file: L.file,
          imageUri: L.data,
          onUpdate: es,
          onThrottledEdit: eo
        })
      }), (0, r.jsxs)("aside", {
        className: A.aside,
        children: [(0, r.jsxs)("div", {
          className: A.preview,
          children: [(0, r.jsx)("label", {
            children: T.intl.string(T.t.JmuIb2)
          }), (0, r.jsxs)("ul", {
            children: [(0, r.jsx)("li", {
              children: (0, r.jsxs)("div", {
                className: A.reactions,
                children: [(0, r.jsx)(Z, {
                  src: q,
                  alt: T.intl.string(T.t["zS0K+v"])
                }), (0, r.jsx)("span", {
                  children: "8"
                })]
              })
            }), (0, r.jsx)("li", {
              children: (0, r.jsx)("div", {
                className: A.jumbo,
                children: (0, r.jsx)(Z, {
                  src: q,
                  alt: T.intl.string(T.t["tE41+f"])
                })
              })
            })]
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(E.y, {
            label: T.intl.string(T.t.m0YV7O),
            name: K,
            onNameChange: X
          })
        }), R ? null : (0, r.jsx)("div", {
          children: (0, r.jsx)(C.q, {
            label: T.intl.string(T.t["9uKafX"]),
            required: true,
            helperText: null == W ? T.intl.string(T.t["1pdw0N"]) : true,
            onChange: B,
            selected: W,
            onError: e => Y(e),
            labelledBy: "guild-selector-label",
            isEmojiAnimated: (0, s.v)(null == L || null == (t = L.file) ? true : t.type),
            errorMessage: null != J ? (0, D.e$)(J) : true
          })
        }), (0, r.jsxs)("div", {
          className: A.foot,
          children: [null != H && (0, r.jsx)(D.H4, {
            error: H,
            variant: "text-sm/normal",
            color: "text-danger"
          }), (0, r.jsx)(u.zx, {
            className: A.submit,
            onClick: el,
            fullWidth: true,
            disabled: null == L || null == W || K.length < 2 || null != J,
            children: ed
          })]
        })]
      }), null != L ? (0, r.jsx)(k, {
        back: ea
      }) : (0, r.jsx)("div", {
        className: A.closeButton,
        children: (0, r.jsx)(c.PZ7, {
          size: "sm",
          onClick: () => (0, c.Mr3)(O.Hj)
        })
      })]
    })
  },
  k = e => {
    let {
      back: t
    } = e;
    return (0, r.jsx)(u.zx, {
      "aria-label": T.intl.string(T.t["13/7kZ"]),
      onClick: t,
      look: u.zx.Looks.BLANK,
      innerClassName: A.backButtonInnner,
      className: A.backButton,
      children: (0, r.jsx)(c.j9r, {
        color: "currentColor",
        size: "md"
      })
    })
  },
  Z = e => {
    let {
      src: t,
      alt: n
    } = e;
    return null == t || "" === t ? (0, r.jsx)("div", {
      className: A.previewPlaceholder
    }) : (0, r.jsx)("img", {
      src: t,
      alt: n
    })
  }