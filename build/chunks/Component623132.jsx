/** Chunk was on 22325 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk747101 = require("./747101.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function P(e) {
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
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  var {
    applicationId: t,
    userId: n,
    gameName: i
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let l = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == l ? (0, r.jsx)(c.Heading, w(P({}, a), {
    children: i
  })) : (0, r.jsx)(c.Heading, w(P({}, a), {
    children: (0, r.jsx)(c.P3F, {
      onClick: l,
      className: I.clickableText,
      children: i
    })
  }))
}

function E(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    id: a
  } = e;
  return (0, r.jsx)(c.nn4, {
    id: a,
    children: x.intl.format(x.t.TM0XDQ, {
      name: g.ZP.getName(n, i, t)
    })
  })
}

function T(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: n,
    children: t
  })
}

function C(e) {
  let {
    text: t,
    user: n,
    guildId: i,
    channelId: a
  } = e, l = (0, s.Dt)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": l,
    children: [(0, r.jsx)(c.PEf, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: I.commentIcon
    }), (0, r.jsx)(E, {
      user: n,
      guildId: i,
      channelId: a,
      id: l
    }), (0, r.jsx)(T, {
      text: t
    })]
  })
}

function N(e) {
  let {
    text: t,
    user: n,
    guildId: a,
    channelId: u,
    widgetType: d,
    applicationId: f
  } = e, g = (0, s.Dt)(), b = (0, s.Dt)(), {
    trackUserProfileEditAction: h
  } = (0, p.KZ)(), [v, y] = i.useState("idle"), [j, O] = i.useState(null != t ? t : ""), _ = i.useRef(null), P = i.useRef(null), w = x.intl.string(x.t.xKSfBQ), S = null != t && "" !== t.trim(), C = i.useCallback(() => {
    h({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), y("editing")
  }, [d, h]), N = i.useCallback(() => {
    let e = j.trim(),
      n = e !== (null != t ? t : "").trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), y("completed"), n && h({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, j, t, h]), D = i.useCallback(e => {
    O(e)
  }, []);
  return i.useEffect(() => {
    "editing" === v && O(null != t ? t : "")
  }, [t, v]), i.useEffect(() => {
    if ("completed" === v) {
      var e;
      null == (e = _.current) || e.focus()
    }
  }, [v]), "editing" === v ? (0, r.jsxs)("div", {
    className: I.textAreaContainer,
    children: [(0, r.jsx)(c.nn4, {
      tag: "label",
      htmlFor: g,
      children: x.intl.string(x.t.JxKXeX)
    }), (0, r.jsx)(c.Kx8, {
      id: g,
      value: j,
      placeholder: w,
      onChange: D,
      onBlur: N,
      rows: 3,
      autoFocus: "editing" === v,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N())
      },
      maxLength: o.rN
    })]
  }) : (0, r.jsxs)("div", {
    ref: P,
    role: "group",
    "aria-labelledby": b,
    onClick: C,
    className: I.editableCommentContainer,
    children: [(0, r.jsx)(c.vdY, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: I.commentIcon
    }), (0, r.jsx)(E, {
      user: n,
      guildId: a,
      channelId: u,
      id: b
    }), (0, r.jsx)(T, {
      text: null != t ? t : w,
      className: l()(I.editableCommentText, !S && I.placeholder)
    }), (0, r.jsx)(c.P3F, {
      innerRef: _,
      "aria-label": x.intl.string(x.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), C()
      },
      focusProps: {
        ringTarget: P
      }
    })]
  })
}

function D(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    game: a,
    widgetType: l,
    disableInteraction: o = false,
    onRemoveGame: s,
    coverRef: u
  } = e, {
    gameName: d = x.intl.string(x.t.GIWFlJ),
    imageSrc: g,
    applicationId: p,
    comment: E,
    tags: T
  } = a, D = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, A = f.default.getCurrentUser(), k = (null == A ? true : A.id) === t.id, Z = !o && k && (0, m.vI)(l);
  return (0, b.kO)(p) ? (0, r.jsx)(v.i, {}) : (0, r.jsxs)("div", {
    className: I.card,
    children: [(0, r.jsx)(h.Z, {
      coverRef: u,
      className: null == g || o ? true : _.hoverActiveEffect,
      imageSrc: g,
      gameName: d,
      applicationId: p,
      userId: t.id,
      disableInteraction: o,
      hideTooltip: true
    }), (0, r.jsxs)("div", {
      className: I.details,
      children: [o ? (0, r.jsx)(c.Heading, w(P({}, D), {
        children: d
      })) : (0, r.jsx)(S, P({
        applicationId: p,
        userId: t.id,
        gameName: d
      }, D)), Z ? (0, r.jsx)(N, {
        text: E,
        user: t,
        guildId: n,
        channelId: i,
        widgetType: l,
        applicationId: p
      }) : (0, r.jsx)(C, {
        text: E,
        user: t,
        guildId: n,
        channelId: i
      }), (0, r.jsx)(y.Z, {
        tags: T,
        isCurrentUser: k,
        widgetType: l,
        applicationId: p,
        disableInteraction: o,
        className: I.tags
      }), !o && (0, r.jsx)(O.Z, {
        className: I.socialProof,
        applicationId: p,
        guildId: n,
        channelId: i
      })]
    }), !o && k && (0, r.jsx)(j.Z, {
      game: a,
      widgetType: l,
      className: I.removeGameButton,
      onRemove: () => null == s ? true : s(a.applicationId)
    })]
  })
}