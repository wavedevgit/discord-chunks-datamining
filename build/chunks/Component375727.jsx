/** Chunk was on 2262 **/
/** chunk id: 375727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => T
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
  Chunk342745 = require("./342745.js");
let A = new Chunk710845.Z("EmojiStudio"),
  T = e => {
    var t;
    let {
      guildId: n
    } = e, i = "userImage" in e ? e.userImage : true, h = "emoji" in e ? e.emoji : true, T = !!h, [D, k] = r.useState(null != i ? i : null), [G, Z] = r.useState(false), z = (0, s.e7)([b.Z, p.Z, v.Z], () => {
      let e = p.Z.getGuildId(),
        t = b.Z.getGuild(e);
      return v.Z.can(w.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [L, U] = r.useState(null != n ? n : z), [B, F] = r.useState(null), [J, H] = r.useState(null), [V, W] = r.useState(function(e) {
      var t, n;
      if (null == e) return "";
      let l = null != (n = null == e || null == (t = e.file) ? true : t.name) ? n : "",
        r = l.lastIndexOf("."),
        i = false === r ? l : l.substring(0, r);
      return j.ZP.sanitizeEmojiName(i)
    }(D)), [Y, q] = r.useState(null), K = r.useRef(Date.now()), X = r.useRef(0), Q = r.useRef(0), $ = r.useRef(false), ee = r.useRef(null), [et, en] = r.useState(false), el = r.useRef(null);
    r.useEffect(() => ((0, _.g)(false), () => {
      (0, _.g)(false)
    }), []), r.useEffect(() => {
      if (null == h) return;
      let e = g.Z.getEmojiRawAsset(h.id);
      if (null != e) {
        k(e), q(e.data), W(h.name), Z(false);
        return
      }
      Z(true), (0, C.Q)(h).then(e => {
        k(e), q(e.data), W(h.name), Z(false)
      }).catch(e => {
        A.error("Failed to fetch emoji image", e), F(E.ze.MISSING_IMAGE_DATA), Z(false)
      })
    }, [h]);
    let er = r.useCallback(e => {
      let {
        reason: t
      } = e, n = null != B ? B : J;
      x.default.track(w.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === X.current,
        has_image: null != D,
        error: null == n ? null : String(n),
        throttled_edit_count: Q.current,
        session_duration_ms: Date.now() - K.current,
        has_guild_selected: null != L
      })
    }, [B, J, K, D, L]);
    (0, m.zq)(() => {
      $.current || er({
        reason: "closed"
      })
    });
    let ei = r.useCallback(async () => {
        if (F(null), null == L) return void F(E.ze.MISSING_GUILD);
        if (null == D || (null == D ? true : D.file) == null || null == Y) return void F(E.ze.MISSING_IMAGE_DATA);
        let e = null;
        try {
          e = await (0, d.rS)({
            image: Y,
            guildId: L,
            name: V,
            analyticsLocation: {
              page: w.ZY5.EMOJI_STUDIO
            }
          }), f.M({
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
            }({}, D)
          })
        } catch (e) {
          F((0, I.zg)(e)), A.error("Failed to upload emoji.", e);
          return
        }
        if (null != h) try {
          await (0, d.RE)(L, h.id, e.id)
        } catch (e) {
          if (429 === e.status) c.Z.show({
            title: M.intl.string(M.t.iufib1),
            body: M.intl.string(M.t.Whhv4w)
          });
          else {
            F((0, I.zg)(e)), A.error("Failed to delete emoji.", e);
            return
          }
        }(0, _.g)(false), (0, u.Mr3)(E.Hj), er({
          reason: "uploaded"
        }), $.current = true, (0, O.y)({
          emoji: e,
          guildId: L
        })
      }, [L, D, h, Y, er, V]),
      ea = r.useCallback(() => {
        var e;
        F(null), null != D && q(D.data), Q.current = 0, (0, _.g)(false), null == (e = ee.current) || e.reset()
      }, [ee, D]),
      eo = r.useCallback(() => {
        (0, C.E)({
          onClose: ea
        })
      }, [ea]),
      es = r.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: l
        } = e, r = null;
        null != t && j.ZP.isDataTooBig(t) && (r = E.ze.TOO_BIG), F(null != l ? l : r), n < X.current || null != t && (q(t), X.current = n)
      }, []),
      eu = r.useCallback(() => {
        Q.current++, (0, _.g)(true)
      }, []),
      ec = T ? M.intl.string(M.t.FOYn8U) : M.intl.string(M.t.iMJO37);
    return G || null == D ? (0, l.jsx)("main", {
      className: R.main,
      children: (0, l.jsxs)("div", {
        className: R.editor,
        children: [(0, l.jsx)("div", {
          className: R.titleBar,
          children: (0, l.jsx)(u.Heading, {
            variant: "heading-lg/medium",
            color: "header-primary",
            className: R.title,
            children: ec
          })
        }), (0, l.jsx)("div", {
          className: R.closeButton,
          children: (0, l.jsx)(u.PZ7, {
            size: "md",
            onClick: eo
          })
        })]
      })
    }) : (0, l.jsxs)("main", {
      className: a()(R.main, {
        [R.checkerboard]: null != D
      }),
      children: [(0, l.jsxs)("div", {
        className: R.editor,
        children: [(0, l.jsx)(S.v, {
          ref: ee,
          file: D.file,
          imageUri: D.data,
          onUpdate: es,
          onThrottledEdit: eu
        }), (0, l.jsx)("div", {
          className: R.titleBar,
          children: (0, l.jsx)(u.Heading, {
            variant: "heading-lg/medium",
            color: "header-primary",
            className: R.title,
            children: ec
          })
        }), (0, l.jsx)("div", {
          className: R.closeButton,
          children: (0, l.jsx)(u.PZ7, {
            size: "md",
            onClick: eo
          })
        }), (0, l.jsx)("div", {
          className: R.resetButton,
          children: (0, l.jsx)(u.yRy, {
            targetElementRef: el,
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
                  action: ea
                })
              })
            },
            shouldShow: et,
            onRequestClose: () => en(false),
            children: () => (0, l.jsx)(u.hU, {
              buttonRef: el,
              variant: "icon-only",
              icon: u.MTm,
              onClick: () => en(true),
              "aria-label": M.intl.string(M.t.u8IcM0)
            })
          })
        })]
      }), (0, l.jsxs)("aside", {
        className: R.aside,
        children: [(0, l.jsx)("div", {
          className: R.previews,
          children: (0, l.jsx)(u.gNt, {
            label: M.intl.string(M.t.JmuIb5),
            children: (0, l.jsxs)("ul", {
              children: [(0, l.jsx)("li", {
                children: (0, l.jsxs)("div", {
                  className: R.reactions,
                  children: [(0, l.jsx)(P, {
                    src: Y,
                    alt: M.intl.string(M.t["zS0K+s"])
                  }), (0, l.jsx)("span", {
                    children: "6"
                  })]
                })
              }), (0, l.jsx)("li", {
                children: (0, l.jsx)("div", {
                  className: R.jumbo,
                  children: (0, l.jsx)(P, {
                    src: Y,
                    alt: M.intl.string(M.t["tE41+d"])
                  })
                })
              })]
            })
          })
        }), (0, l.jsx)("div", {
          children: (0, l.jsx)(y.y, {
            label: M.intl.string(M.t.m0YV7M),
            name: V,
            onNameChange: W
          })
        }), T ? null : (0, l.jsx)("div", {
          children: (0, l.jsx)(N.q, {
            label: M.intl.string(M.t["9uKafS"]),
            required: true,
            helperText: null == L ? M.intl.string(M.t["1pdw0A"]) : true,
            onChange: U,
            selected: L,
            onError: e => H(e),
            labelledBy: "guild-selector-label",
            isEmojiAnimated: (0, o.v)(null == D || null == (t = D.file) ? true : t.type),
            errorMessage: null != J ? (0, I.e$)(J) : true
          })
        }), (0, l.jsxs)("div", {
          className: R.foot,
          children: [null != B && (0, l.jsx)(I.H4, {
            error: B,
            variant: "text-sm/normal",
            color: "text-feedback-critical"
          }), (0, l.jsx)(u.Button, {
            text: M.intl.string(M.t.Q7UP6F),
            onClick: ei,
            disabled: null == D || null == L || V.length < 2 || null != J,
            fullWidth: true
          })]
        })]
      })]
    })
  },
  P = e => {
    let {
      src: t,
      alt: n
    } = e;
    return null == t || "" === t ? (0, l.jsx)("div", {
      className: R.previewPlaceholder
    }) : (0, l.jsx)("img", {
      src: t,
      alt: n
    })
  }