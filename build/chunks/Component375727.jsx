/** Chunk was on 2262 **/
/** chunk id: 375727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => D
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

function R(e) {
  var t, n;
  if (null == e) return "";
  let r = null != (n = null == e || null == (t = e.file) ? true : t.name) ? n : "",
    l = r.lastIndexOf("."),
    i = false === l ? r : r.substring(0, l);
  return y.ZP.sanitizeEmojiName(i)
}
let D = e => {
    var t;
    let {
      guildId: n
    } = e, i = "userImage" in e ? e.userImage : true, g = "emoji" in e ? e.emoji : true, D = !!g, [G, Z] = l.useState(null != i ? i : null), [L, U] = l.useState(false), H = (0, s.e7)([p.Z, v.Z, b.Z], () => {
      let e = v.Z.getGuildId(),
        t = p.Z.getGuild(e);
      return b.Z.can(P.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [F, B] = l.useState(null != n ? n : H), [V, W] = l.useState(null), [Y, J] = l.useState(null), [K, X] = l.useState(R(G)), [q, Q] = l.useState(null), [$, ee] = l.useState(() => Date.now()), et = l.useRef(0), en = l.useRef(0), er = l.useRef(false);
    l.useEffect(() => {
      if (null == g) return;
      let e = f.Z.getEmojiRawAsset(g.id);
      if (null != e) {
        Z(e), Q(e.data), X(g.name), U(false);
        return
      }
      U(true), (0, N.Q)(g).then(e => {
        Z(e), Q(e.data), X(g.name), U(false)
      }).catch(e => {
        M.error("Failed to fetch emoji image", e), W(_.ze.MISSING_IMAGE_DATA), U(false)
      })
    }, [g]);
    let el = l.useCallback(e => {
      let {
        reason: t
      } = e, n = null != V ? V : Y;
      j.default.track(P.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === et.current,
        has_image: null != G,
        error: null == n ? null : String(n),
        throttled_edit_count: en.current,
        session_duration_ms: Date.now() - $,
        has_guild_selected: null != F
      })
    }, [V, Y, $, G, F]);
    (0, h.zq)(() => {
      er.current || el({
        reason: "closed"
      })
    });
    let ei = l.useCallback(async () => {
        if (W(null), null == F) return void W(_.ze.MISSING_GUILD);
        if (null == G || (null == G ? true : G.file) == null || null == q) return void W(_.ze.MISSING_IMAGE_DATA);
        let e = null;
        try {
          e = await (0, m.rS)({
            image: q,
            guildId: F,
            name: K,
            analyticsLocation: {
              page: P.ZY5.EMOJI_STUDIO
            }
          }), x.MK({
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
            }({}, G)
          })
        } catch (e) {
          W((0, w.z)(e)), M.error("Failed to upload emoji.", e);
          return
        }
        if (null != g) try {
          await (0, m.RE)(F, g.id, e.id)
        } catch (e) {
          if (429 === e.status) d.Z.show({
            title: T.intl.string(T.t.iufib2),
            body: T.intl.string(T.t["Whhv4+"])
          });
          else {
            W((0, w.z)(e)), M.error("Failed to delete emoji.", e);
            return
          }
        }
        el({
          reason: "uploaded"
        }), er.current = true, (0, c.Mr3)(_.Hj), (0, O.y)({
          emoji: e,
          guildId: F
        })
      }, [F, G, g, q, el, K]),
      ea = l.useCallback(() => {
        el({
          reason: "back_button"
        }), W(null), Z(null), Q(null), X(""), ee(Date.now()), en.current = 0
      }, [el]),
      eo = l.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: r
        } = e, l = null;
        null != t && y.ZP.isDataTooBig(t) && (l = _.ze.TOO_BIG), W(null != r ? r : l), n < et.current || null != t && (Q(t), et.current = n)
      }, []),
      es = l.useCallback(() => {
        en.current++
      }, []),
      eu = l.useCallback(e => {
        var t;
        Z(e), X(t => "" !== t ? t : R(e)), Q(null != (t = null == e ? true : e.data) ? t : null)
      }, []),
      ec = D ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.iMJO39),
      ed = D ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.DU0dy8);
    return L ? (0, r.jsxs)("main", {
      className: A.main,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: A.heading,
        children: ec
      }), (0, r.jsx)("div", {
        className: A.editor
      }), (0, r.jsx)(c.olH, {
        onClick: () => (0, c.Mr3)(_.Hj),
        className: A.closeButton
      })]
    }) : (0, r.jsxs)("main", {
      className: a()(A.main, {
        [A.checkerboard]: null != G
      }),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: A.heading,
        children: ec
      }), null == G ? (0, r.jsx)(C.u, {
        setImage: eu
      }) : (0, r.jsx)("div", {
        className: A.editor,
        children: (0, r.jsx)(S.v, {
          file: G.file,
          imageUri: G.data,
          onUpdate: eo,
          onThrottledEdit: es
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
                children: [(0, r.jsx)(z, {
                  src: q,
                  alt: T.intl.string(T.t["zS0K+v"])
                }), (0, r.jsx)("span", {
                  children: "8"
                })]
              })
            }), (0, r.jsx)("li", {
              children: (0, r.jsx)("div", {
                className: A.jumbo,
                children: (0, r.jsx)(z, {
                  src: q,
                  alt: T.intl.string(T.t["tE41+f"])
                })
              })
            })]
          })]
        }), (0, r.jsx)(c.xJW, {
          title: T.intl.string(T.t.m0YV7O),
          required: true,
          tag: "label",
          children: (0, r.jsx)(E.y, {
            name: K,
            onNameChange: X
          })
        }), D ? null : (0, r.jsx)(c.xJW, {
          title: T.intl.string(T.t["9uKafX"]),
          required: true,
          tag: "label",
          titleId: "guild-selector-label",
          children: (0, r.jsxs)("div", {
            className: A.guildSelectorContainer,
            children: [(0, r.jsx)(I.q, {
              onChange: B,
              selected: F,
              onError: e => J(e),
              labelledBy: "guild-selector-label",
              isEmojiAnimated: (0, o.v)(null == G || null == (t = G.file) ? true : t.type)
            }), null != Y && (0, r.jsx)(w.H, {
              error: Y,
              variant: "text-xs/medium",
              color: "text-feedback-warning"
            }), null == F && (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-tertiary",
              children: T.intl.string(T.t["1pdw0N"])
            })]
          })
        }), (0, r.jsxs)("div", {
          className: A.foot,
          children: [null != V && (0, r.jsx)(w.H, {
            error: V,
            variant: "text-sm/normal",
            color: "text-danger"
          }), (0, r.jsx)(u.zx, {
            className: A.submit,
            onClick: ei,
            fullWidth: true,
            disabled: null == G || null == F || K.length < 2 || null != Y,
            children: ed
          })]
        })]
      }), null != G ? (0, r.jsx)(k, {
        back: ea
      }) : (0, r.jsx)(c.olH, {
        onClick: () => (0, c.Mr3)(_.Hj),
        className: A.closeButton
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
  z = e => {
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