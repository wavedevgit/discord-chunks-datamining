/** Chunk was on 76443 **/
/** chunk id: 534225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk662518 = require("./662518.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk554375 = require("./554375.js"),
  Chunk964486 = require("./964486.js"),
  Chunk626584 = require("./626584.js"),
  Chunk885617 = require("./885617.js"),
  Chunk288224 = require("./288224.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk690521 = require("./690521.js"),
  Chunk339143 = require("./339143.js"),
  Chunk80569 = require("./80569.js"),
  Chunk380334 = require("./380334.jsx"),
  Chunk316628 = require("./316628.jsx"),
  Chunk421314 = require("./421314.js"),
  Chunk516628 = require("./516628.jsx"),
  Chunk150639 = require("./150639.jsx"),
  Chunk804998 = require("./804998.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk373149 = require("./373149.js");
let T = new Chunk626584.A("EmojiStudio"),
  R = e => {
    var t;
    let {
      guildId: n
    } = e, i = "userImage" in e ? e.userImage : true, h = "emoji" in e ? e.emoji : true, R = !!h, [D, P] = r.useState(null != i ? i : null), [G, L] = r.useState(false), F = (0, u.bG)([f.A, v.A, j.A], () => {
      let e = v.A.getGuildId(),
        t = f.A.getGuild(e);
      return j.A.can(w.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [H, U] = r.useState(null != n ? n : F), [W, z] = r.useState(false), [J, B] = r.useState(null), [K, Y] = r.useState(null), [q, Q] = r.useState(function(e) {
      var t, n;
      if (null == e) return "";
      let l = null != (t = null == e || null == (n = e.file) ? true : n.name) ? t : "",
        r = l.lastIndexOf("."),
        i = false === r ? l : l.substring(0, r);
      return _.Ay.sanitizeEmojiName(i)
    }(D)), [V, X] = r.useState(null), $ = r.useRef(Date.now()), Z = r.useRef(0), ee = r.useRef(0), et = r.useRef(false), en = r.useRef(null), [el, er] = r.useState(false), ei = r.useRef(null);
    r.useEffect(() => ((0, E.O)(false), () => {
      (0, E.O)(false)
    }), []), r.useEffect(() => {
      if (null == h) return;
      let e = g.A.getEmojiRawAsset(h.id);
      if (null != e) {
        P(e), X(e.data), Q(h.name), L(false);
        return
      }
      L(true), (0, S.$)(h).then(e => {
        P(e), X(e.data), Q(h.name), L(false)
      }).catch(e => {
        T.error("Failed to fetch emoji image", e), B(O.j.MISSING_IMAGE_DATA), L(false)
      })
    }, [h]);
    let ea = r.useCallback(e => {
      let {
        reason: t
      } = e, n = null != J ? J : K;
      x.default.track(w.HAw.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === Z.current,
        has_image: null != D,
        error: null == n ? null : String(n),
        throttled_edit_count: ee.current,
        session_duration_ms: Date.now() - $.current,
        has_guild_selected: null != H
      })
    }, [J, K, $, D, H]);
    (0, m.l0)(() => {
      et.current || ea({
        reason: "closed"
      })
    });
    let es = r.useCallback(async () => {
        if (B(null), null == H) return void B(O.j.MISSING_GUILD);
        if (null == D || (null == D ? true : D.file) == null || null == V) return void B(O.j.MISSING_IMAGE_DATA);
        z(true);
        let e = null;
        try {
          e = await (0, d.Gf)({
            image: V,
            guildId: H,
            name: q,
            analyticsLocation: {
              page: w.liQ.EMOJI_STUDIO
            }
          }), b.X({
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
          z(false), B((0, I.E2)(e)), T.error("Failed to upload emoji.", e);
          return
        }
        if (null != h) try {
          await (0, d.ak)(H, h.id, e.id)
        } catch (e) {
          if (429 === e.status) c.A.show({
            title: C.intl.string(C.t.iufib1),
            body: C.intl.string(C.t.Whhv4w)
          });
          else {
            z(false), B((0, I.E2)(e)), T.error("Failed to delete emoji.", e);
            return
          }
        }(0, E.O)(false), (0, o.OoC)(O.y), ea({
          reason: "uploaded"
        }), et.current = true, (0, p.T)({
          emoji: e,
          guildId: H
        }), z(false)
      }, [H, D, h, V, ea, q]),
      eu = r.useCallback(() => {
        var e;
        B(null), null != D && X(D.data), ee.current = 0, (0, E.O)(false), null == (e = en.current) || e.reset()
      }, [en, D]),
      eo = r.useCallback(() => {
        (0, S.p)({
          onClose: eu
        })
      }, [eu]),
      ec = r.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: l
        } = e, r = null;
        null != t && _.Ay.isDataTooBig(t) && (r = O.j.TOO_BIG), B(null != l ? l : r), n < Z.current || null != t && (X(t), Z.current = n)
      }, []),
      ed = r.useCallback(() => {
        ee.current++, (0, E.O)(true)
      }, []),
      em = R ? C.intl.string(C.t.FOYn8U) : C.intl.string(C.t.iMJO37);
    return G || null == D ? (0, l.jsx)("main", {
      className: M.iW,
      children: (0, l.jsxs)("div", {
        className: M.EN,
        children: [(0, l.jsx)("div", {
          className: M.uv,
          children: (0, l.jsx)(o.Heading, {
            variant: "heading-lg/medium",
            color: "text-strong",
            className: M.DD,
            children: em
          })
        }), (0, l.jsx)("div", {
          className: M.b,
          children: (0, l.jsx)(o.JnF, {
            size: "md",
            onClick: eo
          })
        })]
      })
    }) : (0, l.jsxs)("main", {
      className: a()(M.iW, {
        [M.WY]: null != D
      }),
      children: [(0, l.jsxs)("div", {
        className: M.EN,
        children: [(0, l.jsx)(N.n, {
          ref: en,
          file: D.file,
          imageUri: D.data,
          onUpdate: ec,
          onThrottledEdit: ed
        }), (0, l.jsx)("div", {
          className: M.uv,
          children: (0, l.jsx)(o.Heading, {
            variant: "heading-lg/medium",
            color: "text-strong",
            className: M.DD,
            children: em
          })
        }), (0, l.jsx)("div", {
          className: M.b,
          children: (0, l.jsx)(o.JnF, {
            size: "md",
            onClick: eo
          })
        }), (0, l.jsx)("div", {
          className: M.WA,
          children: (0, l.jsx)(o.YNO, {
            targetElementRef: ei,
            "aria-label": C.intl.string(C.t.vznjTl),
            position: "bottom",
            align: "right",
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, l.jsx)(o.W1t, {
                "data-menu-mixed": true,
                navId: "emoji-studio-context-menu",
                onClose: t,
                onSelect: t,
                "aria-label": C.intl.string(C.t.vznjTl),
                children: (0, l.jsx)(o.Drp, {
                  id: "emoji-studio-reset",
                  color: "danger",
                  label: C.intl.string(C.t.ka3Yhm),
                  action: eu
                })
              })
            },
            shouldShow: el,
            onRequestClose: () => er(false),
            children: () => (0, l.jsx)(o.K0, {
              buttonRef: ei,
              variant: "icon-only",
              icon: o.n1$,
              onClick: () => er(true),
              "aria-label": C.intl.string(C.t.u8IcM0)
            })
          })
        })]
      }), (0, l.jsxs)("aside", {
        className: M.HU,
        children: [(0, l.jsx)("div", {
          className: M.ey,
          children: (0, l.jsx)(o.D0$, {
            label: C.intl.string(C.t.JmuIb5),
            children: (0, l.jsxs)("ul", {
              children: [(0, l.jsx)("li", {
                children: (0, l.jsxs)("div", {
                  className: M.Br,
                  children: [(0, l.jsx)(k, {
                    src: V,
                    alt: C.intl.string(C.t["zS0K+s"])
                  }), (0, l.jsx)("span", {
                    children: "6"
                  })]
                })
              }), (0, l.jsx)("li", {
                children: (0, l.jsx)("div", {
                  className: M.SA,
                  children: (0, l.jsx)(k, {
                    src: V,
                    alt: C.intl.string(C.t["tE41+d"])
                  })
                })
              })]
            })
          })
        }), (0, l.jsx)("div", {
          children: (0, l.jsx)(y.e, {
            label: C.intl.string(C.t.m0YV7M),
            name: q,
            onNameChange: Q
          })
        }), R ? null : (0, l.jsx)("div", {
          children: (0, l.jsx)(A.v, {
            label: C.intl.string(C.t["9uKafS"]),
            required: true,
            onChange: U,
            selected: H,
            onError: e => Y(e),
            labelledBy: "guild-selector-label",
            isEmojiAnimated: (0, s.q)(null == D || null == (t = D.file) ? true : t.type),
            errorMessage: null != K ? (0, I.u1)(K) : true
          })
        }), (0, l.jsxs)("div", {
          className: M.jt,
          children: [null != J && (0, l.jsx)(I.Fx, {
            error: J,
            variant: "text-sm/normal",
            color: "text-feedback-critical"
          }), (0, l.jsx)(o.Button, {
            text: C.intl.string(C.t.Q7UP6F),
            onClick: es,
            loading: W,
            disabled: W || null == D || null == H || q.length < 2 || null != K,
            fullWidth: true
          })]
        })]
      })]
    })
  },
  k = e => {
    let {
      src: t,
      alt: n
    } = e;
    return null == t || "" === t ? (0, l.jsx)("div", {
      className: M.A3
    }) : (0, l.jsx)("img", {
      src: t,
      alt: n
    })
  }