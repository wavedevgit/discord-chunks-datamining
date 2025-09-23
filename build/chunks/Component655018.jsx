/** Chunk was on 16820 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => Z
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk906605 = require("./906605.js"),
  Chunk574176 = require("./574176.js"),
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk54332 = require("./54332.js"),
  Chunk298905 = require("./298905.js"),
  Chunk778169 = require("./778169.jsx"),
  Chunk17030 = require("./17030.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk295536 = require("./295536.jsx"),
  Chunk748855 = require("./748855.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk34101 = require("./34101.js"),
  Chunk515527 = require("./515527.js");

function Z(e) {
  var t, n, l;
  let {
    channel: o,
    setIsHangStatusInputFocused: Z,
    setPopoutRef: T
  } = e, N = i.useRef(null), A = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()), w = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()), M = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()), {
    defaultStatusVariant: R
  } = f.n.useExperiment({
    guildId: o.guild_id,
    location: "HangStatusPicker"
  }), k = (0, g.V)(R), L = i.useRef(null), [D, U] = i.useState(null != (n = null == A ? true : A.status) ? n : ""), [B, H] = i.useState(null != (l = null == A ? true : A.emoji) ? l : null), V = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()), F = M.length > 0, G = null == D || "" === D.trim(), z = (0, y.Z)(o), W = D.trim().length > 0 && D.trim() !== (null == A || null == (t = A.status) ? true : t.trim()) || null != B && !s()(B, null == A ? true : A.emoji), [q, Y] = i.useState(false);
  i.useEffect(() => {
    D.trim().length > 0 && q && Y(false), null == B && q && Y(false)
  }, [D, B, q]), i.useEffect(() => {
    if (null != B) {
      var e;
      null == (e = N.current) || e.focus()
    }
  }, [B]), i.useEffect(() => {
    var e;
    D !== (null != (e = null == A ? true : A.status) ? e : "") && "" !== D.trim() ? Z(true) : Z(false)
  }, [D, null == A ? true : A.status, B, null == A ? true : A.emoji, Z]), i.useEffect(() => {
    var e;
    (null == V || V === j.tN.CUSTOM) && (null == (e = N.current) || e.focus())
  }, [V]), i.useEffect(() => {
    null == T || T(null == L ? true : L.current)
  }, [L, T]);
  let K = i.useCallback(e => {
      e !== V && ((0, h.Zx)(e, true), null != B && H(null), "" !== D.trim() && U(""))
    }, [V, B, D]),
    X = i.useCallback((e, t) => {
      let {
        emoji: n,
        status: r
      } = e;
      s()(n, null == A ? true : A.emoji) && r === (null == A ? true : A.status) || ((0, h._s)(e.status, e.emoji, true), H(t ? null : e.emoji), U(t ? "" : e.status))
    }, [null == A ? true : A.emoji, null == A ? true : A.status]),
    J = i.useCallback(e => {
      var t;
      null == e || null == (t = e.preventDefault) || t.call(e), null != B && 0 === D.trim().length && Y(true), G || X({
        status: D,
        emoji: null != B ? B : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      }, true)
    }, [D, B, X, G]),
    Q = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === z.length || (t = (null == (e = (0, c.sample)(z)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === z.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(B, t));
      null != t && (null == e ? true : e.name) != null && (H(t), U(e.name))
    }, [z, B]),
    $ = i.useCallback(() => {
      Z(false)
    }, [Z]),
    ee = i.useCallback(() => {
      var e;
      D !== (null != (e = null == A ? true : A.status) ? e : "") && "" !== D.trim() ? Z(true) : Z(false)
    }, [Z, D, null == A ? true : A.status]),
    et = i.useCallback((e, t, n) => {
      var i;
      let l = (0, b.Z)(e),
        a = l ? k[e] : null,
        o = M.some(t => (0, b.Z)(t) && l && e === t || !(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
        c = l ? (0, r.jsx)(v.Z, {
          size: 20,
          hangStatusActivity: {
            type: E.IIU.HANG_STATUS,
            state: e
          },
          fallbackVariant: R,
          className: P.icon
        }) : null != e.emoji && (0, r.jsx)(p.Z, {
          emoji: e.emoji,
          hideTooltip: true,
          className: P.icon
        });
      return (0, r.jsx)(O.L, {
        isSelected: l ? V === e : s()(null == A ? true : A.emoji, e.emoji) && (null == A ? true : A.status) === e.status,
        label: l ? null != (i = null == a ? true : a.title) ? i : "" : e.status,
        icon: c,
        setStatus: () => {
          l ? K(e) : X(e)
        },
        clearStatus: () => (0, h.Sc)(true),
        isFavorited: o,
        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji)
      }, "".concat(n, "-").concat(t))
    }, [R, X, K, k, null == A ? true : A.emoji, null == A ? true : A.status, V, M]);
  return (0, r.jsxs)("div", {
    ref: L,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(I.menu, P.container),
    children: [(0, r.jsx)("div", {
      role: "group",
      className: a()(I.groupLabel, P.group),
      children: (0, r.jsxs)("form", {
        onSubmit: J,
        className: a()(I.item, P.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: N,
          value: D,
          onBlur: $,
          onFocus: ee,
          onChange: e => U(e.substring(0, j.s0)),
          placeholder: S.intl.string(S.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(_.A, {
              customStatusEmoji: B,
              setCustomStatusEmoji: H
            })
          },
          trailing: {
            icon: C.k,
            onClick: Q,
            "aria-label": S.intl.string(S.t["5UAi5+"])
          }
        }), q && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: P.inputHint,
          color: "text-danger",
          children: S.intl.string(S.t["s/oq0d"])
        }), W && !q && (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: P.inputHint,
          children: S.intl.format(S.t["VjkH/v"], {
            onSave: () => J()
          })
        })]
      })
    }), (0, r.jsxs)(d.Ttm, {
      fade: true,
      role: "group",
      className: a()(I.groupLabel, P.group, P.scroller),
      children: [(0, r.jsx)(x.d, {
        guildId: o.guild_id
      }), F && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: P.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: S.intl.string(S.t.k8fFjo)
          }), (0, r.jsx)(d.r7p, {
            size: "xxs"
          })]
        }), M.map((e, t) => et(e, t, "favorite"))]
      }), w.length > 0 && F && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          role: "separator",
          className: P.separator
        }), (0, r.jsxs)("div", {
          className: P.subtitle,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: S.intl.string(S.t["+9QSnp"])
          }), (0, r.jsx)(d.T39, {
            size: "xxs"
          })]
        })]
      }), w.map((e, t) => et(e, t, "recent"))]
    })]
  })
}