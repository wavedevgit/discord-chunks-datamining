/** Chunk was on 36073 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function S(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: i
  } = e, a = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let o = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == o ? (0, n.jsx)(c.Heading, I(P({}, a), {
    children: i
  })) : (0, n.jsx)(c.Heading, I(P({}, a), {
    children: (0, n.jsx)(c.P3F, {
      onClick: o,
      className: w.clickableText,
      children: i
    })
  }))
}

function E(e) {
  let {
    user: t,
    guildId: r,
    channelId: i,
    id: a
  } = e;
  return (0, n.jsx)(c.nn4, {
    id: a,
    children: h.intl.format(h.t.TM0XDQ, {
      name: f.ZP.getName(r, i, t)
    })
  })
}

function T(e) {
  let {
    text: t,
    className: r
  } = e;
  return (0, n.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: r,
    children: t
  })
}

function D(e) {
  let {
    text: t,
    user: r,
    guildId: i,
    channelId: a
  } = e, o = (0, s.Dt)();
  return null == t || "" === t.trim() ? null : (0, n.jsxs)("div", {
    role: "group",
    "aria-labelledby": o,
    children: [(0, n.jsx)(c.PEf, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: i,
      channelId: a,
      id: o
    }), (0, n.jsx)(T, {
      text: t
    })]
  })
}

function k(e) {
  let {
    text: t,
    user: r,
    guildId: a,
    channelId: u,
    widgetType: d,
    applicationId: g
  } = e, f = (0, s.Dt)(), m = (0, s.Dt)(), {
    trackUserProfileEditAction: O
  } = (0, p.KZ)(), [y, j] = i.useState("idle"), [x, v] = i.useState(null != t ? t : ""), _ = i.useRef(null), P = i.useRef(null), I = h.intl.string(h.t.xKSfBQ), S = null != t && "" !== t.trim(), D = i.useCallback(() => {
    O({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), j("editing")
  }, [d, O]), k = i.useCallback(() => {
    let e = x.trim(),
      r = e !== (null != t ? t : "").trim();
    (0, b.Bu)(d, g, "" !== e ? e : true), j("completed"), r && O({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: g
    })
  }, [d, g, x, t, O]), N = i.useCallback(e => {
    v(e)
  }, []);
  return i.useEffect(() => {
    "editing" === y && v(null != t ? t : "")
  }, [t, y]), i.useEffect(() => {
    if ("completed" === y) {
      var e;
      null == (e = _.current) || e.focus()
    }
  }, [y]), "editing" === y ? (0, n.jsxs)("div", {
    className: w.textAreaContainer,
    children: [(0, n.jsx)(c.nn4, {
      tag: "label",
      htmlFor: f,
      children: h.intl.string(h.t.JxKXeX)
    }), (0, n.jsx)(c.Kx8, {
      id: f,
      value: x,
      placeholder: I,
      onChange: N,
      onBlur: k,
      rows: 3,
      autoFocus: "editing" === y,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k())
      },
      maxLength: l.rN
    })]
  }) : (0, n.jsxs)("div", {
    ref: P,
    role: "group",
    "aria-labelledby": m,
    onClick: D,
    className: w.editableCommentContainer,
    children: [(0, n.jsx)(c.vdY, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: a,
      channelId: u,
      id: m
    }), (0, n.jsx)(T, {
      text: null != t ? t : I,
      className: o()(w.editableCommentText, !S && w.placeholder)
    }), (0, n.jsx)(c.P3F, {
      innerRef: _,
      "aria-label": h.intl.string(h.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), D()
      },
      focusProps: {
        ringTarget: P
      }
    })]
  })
}

function N(e) {
  let {
    user: t,
    guildId: r,
    channelId: i,
    game: a,
    widgetType: o,
    disableInteraction: l = false
  } = e, {
    gameName: s = h.intl.string(h.t.GIWFlJ),
    imageSrc: u,
    applicationId: d,
    comment: f,
    tags: p
  } = a, E = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, T = g.default.getCurrentUser(), N = (null == T ? true : T.id) === t.id, C = !l && N && (0, b.vI)(o);
  return (0, m.kO)(d) ? (0, n.jsx)(y.i, {}) : (0, n.jsxs)("div", {
    className: w.card,
    children: [(0, n.jsx)(O.Z, {
      className: null == u || l ? true : _.hoverActiveEffect,
      imageSrc: u,
      gameName: s,
      applicationId: d,
      userId: t.id,
      disableInteraction: l,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: w.details,
      children: [l ? (0, n.jsx)(c.Heading, I(P({}, E), {
        children: s
      })) : (0, n.jsx)(S, P({
        applicationId: d,
        userId: t.id,
        gameName: s
      }, E)), C ? (0, n.jsx)(k, {
        text: f,
        user: t,
        guildId: r,
        channelId: i,
        widgetType: o,
        applicationId: d
      }) : (0, n.jsx)(D, {
        text: f,
        user: t,
        guildId: r,
        channelId: i
      }), (0, n.jsx)(j.Z, {
        tags: p,
        isCurrentUser: N,
        widgetType: o,
        applicationId: d,
        disableInteraction: l,
        className: w.tags
      }), !l && (0, n.jsx)(v.Z, {
        className: w.socialProof,
        applicationId: d,
        guildId: r,
        channelId: i
      })]
    }), !l && N && (0, n.jsx)(x.Z, {
      game: a,
      widgetType: o,
      className: w.removeGameButton
    })]
  })
}