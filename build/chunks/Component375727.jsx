/** Chunk was on 67079 **/
/** chunk id: 375727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk33309 = require("./33309.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk80932 = require("./80932.js"),
  Chunk493773 = require("./493773.js"),
  Chunk710845 = require("./710845.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk176354 = require("./176354.js"),
  Chunk598117 = require("./598117.js"),
  Chunk390620 = require("./390620.jsx"),
  Chunk983205 = require("./983205.jsx"),
  Chunk903759 = require("./903759.jsx"),
  Chunk746622 = require("./746622.jsx"),
  Chunk384694 = require("./384694.jsx"),
  Chunk273391 = require("./273391.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342745 = require("./342745.js");
let S = new Chunk710845.Z("EmojiStudio"),
  w = e => {
    var t;
    let {
      userImage: n,
      guildId: i
    } = e, [h, w] = l.useState(n), k = (0, o.e7)([g.Z, f.Z, p.Z], () => {
      let e = f.Z.getGuildId(),
        t = g.Z.getGuild(e);
      return p.Z.can(D.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [M, R] = l.useState(null != i ? i : k), [P, L] = l.useState(null), [Z, z] = l.useState(null), [G, U] = l.useState(""), [W, B] = l.useState(null), [F, H] = l.useState(() => Date.now()), V = l.useRef(0), J = l.useRef(0), Y = l.useRef(false), K = l.useCallback(e => {
      let {
        reason: t
      } = e, n = null != P ? P : Z;
      v.default.track(D.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === V.current,
        has_image: null != h,
        error: null == n ? null : String(n),
        throttled_edit_count: J.current,
        session_duration_ms: Date.now() - F,
        has_guild_selected: null != M
      })
    }, [P, Z, F, h, M]);
    (0, m.zq)(() => {
      Y.current || K({
        reason: "closed"
      })
    });
    let X = l.useCallback(async () => {
        if (L(null), null == M) return void L(_.ze.MISSING_GUILD);
        if (null == h || (null == h ? true : h.file) == null || null == W) return void L(_.ze.MISSING_IMAGE_DATA);
        let e = null;
        try {
          e = await (0, d.rS)({
            image: W,
            guildId: M,
            name: G,
            analyticsLocation: {
              page: D.ZY5.EMOJI_STUDIO
            }
          })
        } catch (e) {
          L((0, E.z)(e)), S.error("Failed to upload emoji.", e);
          return
        }
        K({
          reason: "uploaded"
        }), Y.current = true, (0, c.Mr3)(_.Hj), (0, b.y)({
          emoji: e,
          guildId: M
        })
      }, [M, h, W, K, G]),
      q = l.useCallback(() => {
        K({
          reason: "back_button"
        }), L(null), w(null), B(null), U(""), H(Date.now()), J.current = 0
      }, [K]),
      $ = l.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: r
        } = e, l = null;
        null != t && x.ZP.isDataTooBig(t) && (l = _.ze.TOO_BIG), L(null != r ? r : l), n < V.current || null != t && (B(t), V.current = n)
      }, []),
      Q = l.useCallback(() => {
        J.current++
      }, []),
      ee = l.useCallback(e => {
        var t;
        w(e), U(t => {
          var n, r;
          if ("" !== t) return t;
          let l = null != (r = null == e || null == (n = e.file) ? true : n.name) ? r : "",
            i = l.lastIndexOf("."),
            a = false === i ? l : l.substring(0, i);
          return x.ZP.sanitizeEmojiName(a)
        }), B(null != (t = null == e ? true : e.data) ? t : null)
      }, []);
    return (0, r.jsxs)("main", {
      className: a()(I.main, {
        [I.checkerboard]: null != h
      }),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: I.heading,
        children: y.intl.string(y.t.iMJO39)
      }), null == h ? (0, r.jsx)(O.u, {
        setImage: ee
      }) : (0, r.jsx)("div", {
        className: I.editor,
        children: (0, r.jsx)(C.v, {
          file: h.file,
          imageUri: h.data,
          onUpdate: $,
          onThrottledEdit: Q
        })
      }), (0, r.jsxs)("aside", {
        className: I.aside,
        children: [(0, r.jsxs)("div", {
          className: I.preview,
          children: [(0, r.jsx)("label", {
            children: y.intl.string(y.t.JmuIb2)
          }), (0, r.jsxs)("ul", {
            children: [(0, r.jsx)("li", {
              children: (0, r.jsxs)("div", {
                className: I.reactions,
                children: [(0, r.jsx)(A, {
                  src: W,
                  alt: y.intl.string(y.t["zS0K+v"])
                }), (0, r.jsx)("span", {
                  children: "8"
                })]
              })
            }), (0, r.jsx)("li", {
              children: (0, r.jsx)("div", {
                className: I.jumbo,
                children: (0, r.jsx)(A, {
                  src: W,
                  alt: y.intl.string(y.t["tE41+f"])
                })
              })
            })]
          })]
        }), (0, r.jsx)(c.xJW, {
          title: y.intl.string(y.t.m0YV7O),
          required: true,
          tag: "label",
          children: (0, r.jsx)(j.y, {
            name: G,
            onNameChange: U
          })
        }), (0, r.jsx)(c.xJW, {
          title: y.intl.string(y.t["9uKafX"]),
          required: true,
          tag: "label",
          titleId: "guild-selector-label",
          children: (0, r.jsxs)("div", {
            className: I.guildSelectorContainer,
            children: [(0, r.jsx)(N.q, {
              onChange: R,
              selected: M,
              onError: e => z(e),
              labelledBy: "guild-selector-label",
              isEmojiAnimated: (0, s.v)(null == h || null == (t = h.file) ? true : t.type)
            }), null != Z && (0, r.jsx)(E.H, {
              error: Z,
              variant: "text-xs/medium",
              color: "text-feedback-warning"
            }), null == M && (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-tertiary",
              children: y.intl.string(y.t["1pdw0N"])
            })]
          })
        }), (0, r.jsxs)("div", {
          className: I.foot,
          children: [null != P && (0, r.jsx)(E.H, {
            error: P,
            variant: "text-sm/normal",
            color: "text-danger"
          }), (0, r.jsx)(u.zx, {
            className: I.submit,
            onClick: X,
            fullWidth: true,
            disabled: null == h || null == M || G.length < 2 || null != Z,
            children: y.intl.string(y.t.DU0dy8)
          })]
        })]
      }), null != h ? (0, r.jsx)(T, {
        back: q
      }) : (0, r.jsx)(c.olH, {
        onClick: () => (0, c.Mr3)(_.Hj),
        className: I.closeButton
      })]
    })
  },
  T = e => {
    let {
      back: t
    } = e;
    return (0, r.jsx)(u.zx, {
      "aria-label": y.intl.string(y.t["13/7kZ"]),
      onClick: t,
      look: u.zx.Looks.BLANK,
      innerClassName: I.backButtonInnner,
      className: I.backButton,
      children: (0, r.jsx)(c.j9r, {
        color: "currentColor",
        size: "md"
      })
    })
  },
  A = e => {
    let {
      src: t,
      alt: n
    } = e;
    return null == t || "" === t ? (0, r.jsx)("div", {
      className: I.previewPlaceholder
    }) : (0, r.jsx)("img", {
      src: t,
      alt: n
    })
  }