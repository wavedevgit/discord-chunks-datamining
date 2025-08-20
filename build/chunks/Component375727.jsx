/** Chunk was on 65819 **/
/** chunk id: 375727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => P
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
  Chunk457574 = require("./457574.js"),
  Chunk903759 = require("./903759.jsx"),
  Chunk746622 = require("./746622.jsx"),
  Chunk384694 = require("./384694.jsx"),
  Chunk273391 = require("./273391.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342745 = require("./342745.js");
let T = new Chunk710845.Z("EmojiStudio"),
  P = e => {
    var t;
    let {
      guildId: n
    } = e, i = "userImage" in e ? e.userImage : true, f = "emoji" in e ? e.emoji : true, [P, R] = l.useState(null != i ? i : null), [k, D] = l.useState(false), z = (0, s.e7)([g.Z, x.Z, h.Z], () => {
      let e = x.Z.getGuildId(),
        t = g.Z.getGuild(e);
      return h.Z.can(y.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [G, L] = l.useState(null != n ? n : z), [Z, U] = l.useState(null), [B, F] = l.useState(null), [H, V] = l.useState(""), [J, Y] = l.useState(null), [W, K] = l.useState(() => Date.now()), X = l.useRef(0), q = l.useRef(0), Q = l.useRef(false);
    l.useEffect(() => {
      null != f && (D(true), (0, N.Q)(f).then(e => {
        R(e), Y(e.data), V(f.name), D(false)
      }).catch(e => {
        T.error("Failed to fetch emoji image", e), U(v.ze.MISSING_IMAGE_DATA), D(false)
      }))
    }, [f]);
    let $ = l.useCallback(e => {
      let {
        reason: t
      } = e, n = null != Z ? Z : B;
      p.default.track(y.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === X.current,
        has_image: null != P,
        error: null == n ? null : String(n),
        throttled_edit_count: q.current,
        session_duration_ms: Date.now() - W,
        has_guild_selected: null != G
      })
    }, [Z, B, W, P, G]);
    (0, m.zq)(() => {
      Q.current || $({
        reason: "closed"
      })
    });
    let ee = l.useCallback(async () => {
        if (U(null), null == G) return void U(v.ze.MISSING_GUILD);
        if (null == P || (null == P ? true : P.file) == null || null == J) return void U(v.ze.MISSING_IMAGE_DATA);
        let e = null;
        try {
          e = await (0, d.rS)({
            image: J,
            guildId: G,
            name: H,
            analyticsLocation: {
              page: y.ZY5.EMOJI_STUDIO
            }
          })
        } catch (e) {
          U((0, O.z)(e)), T.error("Failed to upload emoji.", e);
          return
        }
        $({
          reason: "uploaded"
        }), Q.current = true, (0, c.Mr3)(v.Hj), (0, j.y)({
          emoji: e,
          guildId: G
        })
      }, [G, P, J, $, H]),
      et = l.useCallback(() => {
        $({
          reason: "back_button"
        }), U(null), R(null), Y(null), V(""), K(Date.now()), q.current = 0
      }, [$]),
      en = l.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: r
        } = e, l = null;
        null != t && b.ZP.isDataTooBig(t) && (l = v.ze.TOO_BIG), U(null != r ? r : l), n < X.current || null != t && (Y(t), X.current = n)
      }, []),
      er = l.useCallback(() => {
        q.current++
      }, []),
      el = l.useCallback(e => {
        var t;
        R(e), V(t => {
          var n, r;
          if ("" !== t) return t;
          let l = null != (r = null == e || null == (n = e.file) ? true : n.name) ? r : "",
            i = l.lastIndexOf("."),
            a = false === i ? l : l.substring(0, i);
          return b.ZP.sanitizeEmojiName(a)
        }), Y(null != (t = null == e ? true : e.data) ? t : null)
      }, []),
      ei = null == f ? S.intl.string(S.t.iMJO39) : S.intl.string(S.t.FOYn8f);
    return k ? (0, r.jsxs)("main", {
      className: w.main,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: w.heading,
        children: ei
      }), (0, r.jsx)("div", {
        className: w.editor
      }), (0, r.jsx)(c.olH, {
        onClick: () => (0, c.Mr3)(v.Hj),
        className: w.closeButton
      })]
    }) : (0, r.jsxs)("main", {
      className: a()(w.main, {
        [w.checkerboard]: null != P
      }),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        className: w.heading,
        children: ei
      }), null == P ? (0, r.jsx)(E.u, {
        setImage: el
      }) : (0, r.jsx)("div", {
        className: w.editor,
        children: (0, r.jsx)(I.v, {
          file: P.file,
          imageUri: P.data,
          onUpdate: en,
          onThrottledEdit: er
        })
      }), (0, r.jsxs)("aside", {
        className: w.aside,
        children: [(0, r.jsxs)("div", {
          className: w.preview,
          children: [(0, r.jsx)("label", {
            children: S.intl.string(S.t.JmuIb2)
          }), (0, r.jsxs)("ul", {
            children: [(0, r.jsx)("li", {
              children: (0, r.jsxs)("div", {
                className: w.reactions,
                children: [(0, r.jsx)(M, {
                  src: J,
                  alt: S.intl.string(S.t["zS0K+v"])
                }), (0, r.jsx)("span", {
                  children: "8"
                })]
              })
            }), (0, r.jsx)("li", {
              children: (0, r.jsx)("div", {
                className: w.jumbo,
                children: (0, r.jsx)(M, {
                  src: J,
                  alt: S.intl.string(S.t["tE41+f"])
                })
              })
            })]
          })]
        }), (0, r.jsx)(c.xJW, {
          title: S.intl.string(S.t.m0YV7O),
          required: true,
          tag: "label",
          children: (0, r.jsx)(_.y, {
            name: H,
            onNameChange: V
          })
        }), (0, r.jsx)(c.xJW, {
          title: S.intl.string(S.t["9uKafX"]),
          required: true,
          tag: "label",
          titleId: "guild-selector-label",
          children: (0, r.jsxs)("div", {
            className: w.guildSelectorContainer,
            children: [(0, r.jsx)(C.q, {
              onChange: L,
              selected: G,
              onError: e => F(e),
              labelledBy: "guild-selector-label",
              isEmojiAnimated: (0, o.v)(null == P || null == (t = P.file) ? true : t.type)
            }), null != B && (0, r.jsx)(O.H, {
              error: B,
              variant: "text-xs/medium",
              color: "text-feedback-warning"
            }), null == G && (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-tertiary",
              children: S.intl.string(S.t["1pdw0N"])
            })]
          })
        }), (0, r.jsxs)("div", {
          className: w.foot,
          children: [null != Z && (0, r.jsx)(O.H, {
            error: Z,
            variant: "text-sm/normal",
            color: "text-danger"
          }), (0, r.jsx)(u.zx, {
            className: w.submit,
            onClick: ee,
            fullWidth: true,
            disabled: null == P || null == G || H.length < 2 || null != B,
            children: S.intl.string(S.t.DU0dy8)
          })]
        })]
      }), null != P ? (0, r.jsx)(A, {
        back: et
      }) : (0, r.jsx)(c.olH, {
        onClick: () => (0, c.Mr3)(v.Hj),
        className: w.closeButton
      })]
    })
  },
  A = e => {
    let {
      back: t
    } = e;
    return (0, r.jsx)(u.zx, {
      "aria-label": S.intl.string(S.t["13/7kZ"]),
      onClick: t,
      look: u.zx.Looks.BLANK,
      innerClassName: w.backButtonInnner,
      className: w.backButton,
      children: (0, r.jsx)(c.j9r, {
        color: "currentColor",
        size: "md"
      })
    })
  },
  M = e => {
    let {
      src: t,
      alt: n
    } = e;
    return null == t || "" === t ? (0, r.jsx)("div", {
      className: w.previewPlaceholder
    }) : (0, r.jsx)("img", {
      src: t,
      alt: n
    })
  }