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
  Chunk342745 = require("./342745.js");
let M = new Chunk710845.Z("EmojiStudio"),
  R = e => {
    var t;
    let {
      guildId: n
    } = e, i = "userImage" in e ? e.userImage : true, g = "emoji" in e ? e.emoji : true, R = !!g, [z, G] = l.useState(null != i ? i : null), [Z, L] = l.useState(false), U = (0, s.e7)([p.Z, v.Z, b.Z], () => {
      let e = v.Z.getGuildId(),
        t = p.Z.getGuild(e);
      return b.Z.can(P.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [H, F] = l.useState(null != n ? n : U), [B, V] = l.useState(null), [W, Y] = l.useState(null), [J, K] = l.useState(""), [X, q] = l.useState(null), [Q, $] = l.useState(() => Date.now()), ee = l.useRef(0), et = l.useRef(0), en = l.useRef(false);
    l.useEffect(() => {
      if (null == g) return;
      let e = f.Z.getEmojiRawAsset(g.id);
      if (null != e) {
        G(e), q(e.data), K(g.name), L(false);
        return
      }
      L(true), (0, N.Q)(g).then(e => {
        G(e), q(e.data), K(g.name), L(false)
      }).catch(e => {
        M.error("Failed to fetch emoji image", e), V(_.ze.MISSING_IMAGE_DATA), L(false)
      })
    }, [g]);
    let er = l.useCallback(e => {
      let {
        reason: t
      } = e, n = null != B ? B : W;
      j.default.track(P.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === ee.current,
        has_image: null != z,
        error: null == n ? null : String(n),
        throttled_edit_count: et.current,
        session_duration_ms: Date.now() - Q,
        has_guild_selected: null != H
      })
    }, [B, W, Q, z, H]);
    (0, h.zq)(() => {
      en.current || er({
        reason: "closed"
      })
    });
    let el = l.useCallback(async () => {
        if (V(null), null == H) return void V(_.ze.MISSING_GUILD);
        if (null == z || (null == z ? true : z.file) == null || null == X) return void V(_.ze.MISSING_IMAGE_DATA);
        let e = null;
        try {
          e = await (0, m.rS)({
            image: X,
            guildId: H,
            name: J,
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
            }({}, z)
          })
        } catch (e) {
          V((0, w.z)(e)), M.error("Failed to upload emoji.", e);
          return
        }
        if (null != g) try {
          await (0, m.RE)(H, g.id)
        } catch (e) {
          if (429 === e.status) d.Z.show({
            title: T.intl.string(T.t.iufib2),
            body: T.intl.string(T.t["Whhv4+"])
          });
          else {
            V((0, w.z)(e)), M.error("Failed to delete emoji.", e);
            return
          }
        }
        er({
          reason: "uploaded"
        }), en.current = true, (0, c.Mr3)(_.Hj), (0, O.y)({
          emoji: e,
          guildId: H
        })
      }, [H, z, g, X, er, J]),
      ei = l.useCallback(() => {
        er({
          reason: "back_button"
        }), V(null), G(null), q(null), K(""), $(Date.now()), et.current = 0
      }, [er]),
      ea = l.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: r
        } = e, l = null;
        null != t && y.ZP.isDataTooBig(t) && (l = _.ze.TOO_BIG), V(null != r ? r : l), n < ee.current || null != t && (q(t), ee.current = n)
      }, []),
      eo = l.useCallback(() => {
        et.current++
      }, []),
      es = l.useCallback(e => {
        var t;
        G(e), K(t => {
          var n, r;
          if ("" !== t) return t;
          let l = null != (r = null == e || null == (n = e.file) ? true : n.name) ? r : "",
            i = l.lastIndexOf("."),
            a = false === i ? l : l.substring(0, i);
          return y.ZP.sanitizeEmojiName(a)
        }), q(null != (t = null == e ? true : e.data) ? t : null)
      }, []),
      eu = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.iMJO39),
      ec = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.DU0dy8);
    return Z ? (0, r.jsxs)("main", {
      className: A.main,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: A.heading,
        children: eu
      }), (0, r.jsx)("div", {
        className: A.editor
      }), (0, r.jsx)(c.olH, {
        onClick: () => (0, c.Mr3)(_.Hj),
        className: A.closeButton
      })]
    }) : (0, r.jsxs)("main", {
      className: a()(A.main, {
        [A.checkerboard]: null != z
      }),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: A.heading,
        children: eu
      }), null == z ? (0, r.jsx)(C.u, {
        setImage: es
      }) : (0, r.jsx)("div", {
        className: A.editor,
        children: (0, r.jsx)(S.v, {
          file: z.file,
          imageUri: z.data,
          onUpdate: ea,
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
                children: [(0, r.jsx)(k, {
                  src: X,
                  alt: T.intl.string(T.t["zS0K+v"])
                }), (0, r.jsx)("span", {
                  children: "8"
                })]
              })
            }), (0, r.jsx)("li", {
              children: (0, r.jsx)("div", {
                className: A.jumbo,
                children: (0, r.jsx)(k, {
                  src: X,
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
            name: J,
            onNameChange: K
          })
        }), R ? null : (0, r.jsx)(c.xJW, {
          title: T.intl.string(T.t["9uKafX"]),
          required: true,
          tag: "label",
          titleId: "guild-selector-label",
          children: (0, r.jsxs)("div", {
            className: A.guildSelectorContainer,
            children: [(0, r.jsx)(I.q, {
              onChange: F,
              selected: H,
              onError: e => Y(e),
              labelledBy: "guild-selector-label",
              isEmojiAnimated: (0, o.v)(null == z || null == (t = z.file) ? true : t.type)
            }), null != W && (0, r.jsx)(w.H, {
              error: W,
              variant: "text-xs/medium",
              color: "text-feedback-warning"
            }), null == H && (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-tertiary",
              children: T.intl.string(T.t["1pdw0N"])
            })]
          })
        }), (0, r.jsxs)("div", {
          className: A.foot,
          children: [null != B && (0, r.jsx)(w.H, {
            error: B,
            variant: "text-sm/normal",
            color: "text-danger"
          }), (0, r.jsx)(u.zx, {
            className: A.submit,
            onClick: el,
            fullWidth: true,
            disabled: null == z || null == H || J.length < 2 || null != W,
            children: ec
          })]
        })]
      }), null != z ? (0, r.jsx)(D, {
        back: ei
      }) : (0, r.jsx)(c.olH, {
        onClick: () => (0, c.Mr3)(_.Hj),
        className: A.closeButton
      })]
    })
  },
  D = e => {
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
  k = e => {
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