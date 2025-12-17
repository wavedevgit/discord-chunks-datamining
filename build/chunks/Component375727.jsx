/** Chunk was on 2262 **/
/** chunk id: 375727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk33309 = require("./33309.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk539266 = require("./539266.js"),
  Chunk598117 = require("./598117.js"),
  Chunk390620 = require("./390620.jsx"),
  Chunk983205 = require("./983205.jsx"),
  Chunk457574 = require("./457574.js"),
  Chunk746622 = require("./746622.jsx"),
  Chunk384694 = require("./384694.jsx"),
  Chunk273391 = require("./273391.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk286274 = require("./286274.js");
let P = new Chunk710845.Z("EmojiStudio"),
  k = e => {
    var t;
    let {
      guildId: n
    } = e, r = "userImage" in e ? e.userImage : true, b = "emoji" in e ? e.emoji : true, k = !!b, [R, Z] = i.useState(null != r ? r : null), [D, z] = i.useState(false), G = (0, s.e7)([f.Z, x.Z, v.Z], () => {
      let e = x.Z.getGuildId(),
        t = f.Z.getGuild(e);
      return v.Z.can(w.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [L, U] = i.useState(null != n ? n : G), [B, J] = i.useState(false), [H, F] = i.useState(null), [W, Y] = i.useState(null), [q, V] = i.useState(function(e) {
      var t, n;
      if (null == e) return "";
      let l = null != (n = null == e || null == (t = e.file) ? true : t.name) ? n : "",
        i = l.lastIndexOf("."),
        r = false === i ? l : l.substring(0, i);
      return p.ZP.sanitizeEmojiName(r)
    }(R)), [K, X] = i.useState(null), Q = i.useRef(Date.now()), $ = i.useRef(0), ee = i.useRef(0), et = i.useRef(false), en = i.useRef(null), [el, ei] = i.useState(false), er = i.useRef(null);
    i.useEffect(() => ((0, E.g)(false), () => {
      (0, E.g)(false)
    }), []), i.useEffect(() => {
      if (null == b) return;
      let e = h.Z.getEmojiRawAsset(b.id);
      if (null != e) {
        Z(e), X(e.data), V(b.name), z(false);
        return
      }
      z(true), (0, S.Q)(b).then(e => {
        Z(e), X(e.data), V(b.name), z(false)
      }).catch(e => {
        P.error("Failed to fetch emoji image", e), F(O.ze.MISSING_IMAGE_DATA), z(false)
      })
    }, [b]);
    let ea = i.useCallback(e => {
      let {
        reason: t
      } = e, n = null != H ? H : W;
      j.default.track(w.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === $.current,
        has_image: null != R,
        error: null == n ? null : String(n),
        throttled_edit_count: ee.current,
        session_duration_ms: Date.now() - Q.current,
        has_guild_selected: null != L
      })
    }, [H, W, Q, R, L]);
    (0, m.zq)(() => {
      et.current || ea({
        reason: "closed"
      })
    });
    let eo = i.useCallback(async () => {
        if (F(null), null == L) return void F(O.ze.MISSING_GUILD);
        if (null == R || (null == R ? true : R.file) == null || null == K) return void F(O.ze.MISSING_IMAGE_DATA);
        J(true);
        let e = null;
        try {
          e = await (0, d.rS)({
            image: K,
            guildId: L,
            name: q,
            analyticsLocation: {
              page: w.ZY5.EMOJI_STUDIO
            }
          }), g.M({
            emojiId: e.id,
            userImage: function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                  var l;
                  l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = l
                })
              }
              return e
            }({}, R)
          })
        } catch (e) {
          J(false), F((0, N.zg)(e)), P.error("Failed to upload emoji.", e);
          return
        }
        if (null != b) try {
          await (0, d.RE)(L, b.id, e.id)
        } catch (e) {
          if (429 === e.status) c.Z.show({
            title: M.intl.string(M.t.iufib1),
            body: M.intl.string(M.t.Whhv4w)
          });
          else {
            J(false), F((0, N.zg)(e)), P.error("Failed to delete emoji.", e);
            return
          }
        }(0, E.g)(false), (0, u.Mr3)(O.Hj), ea({
          reason: "uploaded"
        }), et.current = true, (0, y.y)({
          emoji: e,
          guildId: L
        }), J(false)
      }, [L, R, b, K, ea, q]),
      es = i.useCallback(() => {
        var e;
        F(null), null != R && X(R.data), ee.current = 0, (0, E.g)(false), null == (e = en.current) || e.reset()
      }, [en, R]),
      eu = i.useCallback(() => {
        (0, S.E)({
          onClose: es
        })
      }, [es]),
      ec = i.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: l
        } = e, i = null;
        null != t && p.ZP.isDataTooBig(t) && (i = O.ze.TOO_BIG), F(null != l ? l : i), n < $.current || null != t && (X(t), $.current = n)
      }, []),
      ed = i.useCallback(() => {
        ee.current++, (0, E.g)(true)
      }, []),
      em = k ? M.intl.string(M.t.FOYn8U) : M.intl.string(M.t.iMJO37);
    return D || null == R ? (0, l.jsx)("main", {
      className: T.main,
      children: (0, l.jsxs)("div", {
        className: T.editor,
        children: [(0, l.jsx)("div", {
          className: T.titleBar,
          children: (0, l.jsx)(u.Heading, {
            variant: "heading-lg/medium",
            color: "text-strong",
            className: T.title,
            children: em
          })
        }), (0, l.jsx)("div", {
          className: T.closeButton,
          children: (0, l.jsx)(u.PZ7, {
            size: "md",
            onClick: eu
          })
        })]
      })
    }) : (0, l.jsxs)("main", {
      className: a()(T.main, {
        [T.checkerboard]: null != R
      }),
      children: [(0, l.jsxs)("div", {
        className: T.editor,
        children: [(0, l.jsx)(_.v, {
          ref: en,
          file: R.file,
          imageUri: R.data,
          onUpdate: ec,
          onThrottledEdit: ed
        }), (0, l.jsx)("div", {
          className: T.titleBar,
          children: (0, l.jsx)(u.Heading, {
            variant: "heading-lg/medium",
            color: "text-strong",
            className: T.title,
            children: em
          })
        }), (0, l.jsx)("div", {
          className: T.closeButton,
          children: (0, l.jsx)(u.PZ7, {
            size: "md",
            onClick: eu
          })
        }), (0, l.jsx)("div", {
          className: T.resetButton,
          children: (0, l.jsx)(u.yRy, {
            targetElementRef: er,
            "aria-label": M.intl.string(M.t.vznjTl),
            position: "bottom",
            align: "right",
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, l.jsx)(u.v2r, {
                navId: "emoji-studio-context-menu",
                onClose: t,
                onSelect: t,
                "aria-label": M.intl.string(M.t.vznjTl),
                children: (0, l.jsx)(u.sNh, {
                  id: "emoji-studio-reset",
                  color: "danger",
                  label: M.intl.string(M.t.ka3Yhm),
                  action: es
                })
              })
            },
            shouldShow: el,
            onRequestClose: () => ei(false),
            children: () => (0, l.jsx)(u.hU, {
              buttonRef: er,
              variant: "icon-only",
              icon: u.MTm,
              onClick: () => ei(true),
              "aria-label": M.intl.string(M.t.u8IcM0)
            })
          })
        })]
      }), (0, l.jsxs)("aside", {
        className: T.aside,
        children: [(0, l.jsx)("div", {
          className: T.previews,
          children: (0, l.jsx)(u.gNt, {
            label: M.intl.string(M.t.JmuIb5),
            children: (0, l.jsxs)("ul", {
              children: [(0, l.jsx)("li", {
                children: (0, l.jsxs)("div", {
                  className: T.reactions,
                  children: [(0, l.jsx)(A, {
                    src: K,
                    alt: M.intl.string(M.t["zS0K+s"])
                  }), (0, l.jsx)("span", {
                    children: "6"
                  })]
                })
              }), (0, l.jsx)("li", {
                children: (0, l.jsx)("div", {
                  className: T.jumbo,
                  children: (0, l.jsx)(A, {
                    src: K,
                    alt: M.intl.string(M.t["tE41+d"])
                  })
                })
              })]
            })
          })
        }), (0, l.jsx)("div", {
          children: (0, l.jsx)(I.y, {
            label: M.intl.string(M.t.m0YV7M),
            name: q,
            onNameChange: V
          })
        }), k ? null : (0, l.jsx)("div", {
          children: (0, l.jsx)(C.q, {
            label: M.intl.string(M.t["9uKafS"]),
            required: true,
            helperText: null == L ? M.intl.string(M.t["1pdw0A"]) : true,
            onChange: U,
            selected: L,
            onError: e => Y(e),
            labelledBy: "guild-selector-label",
            isEmojiAnimated: (0, o.v)(null == R || null == (t = R.file) ? true : t.type),
            errorMessage: null != W ? (0, N.e$)(W) : true
          })
        }), (0, l.jsxs)("div", {
          className: T.foot,
          children: [null != H && (0, l.jsx)(N.H4, {
            error: H,
            variant: "text-sm/normal",
            color: "text-feedback-critical"
          }), (0, l.jsx)(u.Button, {
            text: M.intl.string(M.t.Q7UP6F),
            onClick: eo,
            loading: B,
            disabled: B || null == R || null == L || q.length < 2 || null != W,
            fullWidth: true
          })]
        })]
      })]
    })
  },
  A = e => {
    let {
      src: t,
      alt: n
    } = e;
    return null == t || "" === t ? (0, l.jsx)("div", {
      className: T.previewPlaceholder
    }) : (0, l.jsx)("img", {
      src: t,
      alt: n
    })
  }