/** Chunk was on 62987 **/
/** chunk id: 655018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => I
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
  Chunk298905 = require("./298905.js"),
  Chunk17030 = require("./17030.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk295536 = require("./295536.jsx"),
  Chunk748855 = require("./748855.jsx"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787267 = require("./787267.js"),
  Chunk334405 = require("./334405.js");

function I(e) {
  var t, n;
  let {
    channel: l,
    setIsHangStatusInputFocused: o,
    setPopoutRef: I
  } = e, P = i.useRef(null), Z = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()), T = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()), {
    defaultStatusVariant: N
  } = f.n.useExperiment({
    guildId: l.guild_id,
    location: "HangStatusPicker"
  }), A = (0, g.V)(N), w = i.useRef(null), [R, M] = i.useState(null != (t = null == Z ? true : Z.status) ? t : ""), [D, L] = i.useState(null != (n = null == Z ? true : Z.emoji) ? n : null), k = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()), U = null == R || "" === R.trim(), B = (0, b.Z)(l);
  i.useEffect(() => {
    if (null != D) {
      var e;
      null == (e = P.current) || e.focus()
    }
  }, [D]), i.useEffect(() => {
    var e;
    R !== (null != (e = null == Z ? true : Z.status) ? e : "") && "" !== R.trim() ? o(true) : o(false)
  }, [R, null == Z ? true : Z.status, D, null == Z ? true : Z.emoji, o]), i.useEffect(() => {
    var e;
    (null == k || k === x.tN.CUSTOM) && (null == (e = P.current) || e.focus())
  }, [k]), i.useEffect(() => {
    null == I || I(null == w ? true : w.current)
  }, [w, I]), i.useEffect(() => {
    (null == Z ? true : Z.emoji) != null && null != Z.status ? (M(Z.status), L(Z.emoji)) : (M(""), L(null))
  }, [Z]);
  let G = i.useCallback(e => {
      e !== k && (0, h.Zx)(e, true)
    }, [k]),
    H = i.useCallback(e => {
      let {
        emoji: t,
        status: n
      } = e;
      s()(t, null == Z ? true : Z.emoji) && n === (null == Z ? true : Z.status) || (0, h._s)(e.status, e.emoji, true)
    }, [null == Z ? true : Z.emoji, null == Z ? true : Z.status]),
    F = i.useCallback(e => {
      var t;
      null == (t = e.preventDefault) || t.call(e), U || H({
        status: R,
        emoji: null != D ? D : {
          id: null,
          name: "\uD83D\uDCAD",
          animated: false
        }
      })
    }, [R, D, H, U]),
    V = i.useCallback(() => {
      let e = null,
        t = null;
      do {
        var n;
        if (0 === B.length || (t = (null == (e = (0, c.sample)(B)) ? true : e.id) != null ? {
            id: e.id,
            name: e.name,
            animated: e.animated
          } : {
            id: null,
            name: null != (n = null == e ? true : e.optionallyDiverseSequence) ? n : "",
            animated: false
          }, 1 === B.length)) break
      } while (null == e || (null == e ? true : e.name) == null || s()(D, t));
      null != t && (null == e ? true : e.name) != null && (L(t), M(e.name))
    }, [B, D]),
    z = i.useCallback(() => {
      o(false)
    }, [o]),
    W = i.useCallback(() => {
      var e;
      R !== (null != (e = null == Z ? true : Z.status) ? e : "") && "" !== R.trim() ? o(true) : o(false)
    }, [o, R, null == Z ? true : Z.status]);
  return (0, r.jsxs)("div", {
    ref: w,
    role: "menu",
    id: "hang-status-picker",
    tabIndex: false,
    className: a()(S.menu, E.container),
    children: [(0, r.jsxs)("div", {
      role: "group",
      className: a()(S.groupLabel, E.group),
      children: [(0, r.jsxs)("form", {
        onSubmit: F,
        className: a()(S.item, E.input),
        children: [(0, r.jsx)(d.oil, {
          inputRef: P,
          value: R,
          onBlur: z,
          onFocus: W,
          onChange: e => M(e.substring(0, x.s0)),
          placeholder: j.intl.string(j.t.KPop4u),
          leading: {
            type: "emoji",
            button: (0, r.jsx)(y.A, {
              customStatusEmoji: D,
              setCustomStatusEmoji: L
            })
          },
          trailing: {
            icon: d.$2U,
            onClick: V,
            "aria-label": j.intl.string(j.t["5UAi5+"])
          }
        }), R.trim().length > 0 && (0, r.jsx)(d.hU, {
          onClick: F,
          disabled: U,
          icon: d.dz2,
          "aria-label": j.intl.string(j.t.UDg0qK)
        })]
      }), T.map((e, t) => {
        var n;
        let i = "string" == typeof e,
          l = i ? A[e] : null,
          a = i ? (0, r.jsx)(_.Z, {
            size: 20,
            hangStatusActivity: {
              type: O.IIU.HANG_STATUS,
              state: e
            },
            fallbackVariant: N,
            className: E.icon
          }) : null != e.emoji && (0, r.jsx)(p.Z, {
            emoji: e.emoji,
            hideTooltip: true,
            className: E.icon
          });
        return (0, r.jsx)(v.L, {
          isSelected: i ? k === e : s()(null == Z ? true : Z.emoji, e.emoji) && (null == Z ? true : Z.status) === e.status,
          label: i ? null != (n = null == l ? true : l.title) ? n : "" : e.status,
          icon: a,
          setStatus: () => {
            i ? G(e) : H(e)
          },
          clearStatus: () => (0, h.Sc)(false)
        }, t)
      })]
    }), (0, r.jsx)(C.d, {
      guildId: l.guild_id
    })]
  })
}