/** Chunk was on 61149 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function I(e) {
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

function S(e, t) {
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

function T(e) {
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
  let o = (0, f.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: d.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == o ? (0, n.jsx)(s.X6q, S(I({}, a), {
    children: i
  })) : (0, n.jsx)(s.X6q, S(I({}, a), {
    children: (0, n.jsx)(s.P3F, {
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
  return (0, n.jsx)(s.nn4, {
    id: a,
    children: _.intl.format(_.t.TM0XDQ, {
      name: b.ZP.getName(r, i, t)
    })
  })
}

function N(e) {
  let {
    text: t,
    className: r
  } = e;
  return (0, n.jsx)(s.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: r,
    children: t
  })
}

function k(e) {
  let {
    text: t,
    user: r,
    guildId: i,
    channelId: a
  } = e, o = (0, u.Dt)();
  return null == t || "" === t.trim() ? null : (0, n.jsxs)("div", {
    role: "group",
    "aria-labelledby": o,
    children: [(0, n.jsx)(s.PEf, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: i,
      channelId: a,
      id: o
    }), (0, n.jsx)(N, {
      text: t
    })]
  })
}

function C(e) {
  let {
    text: t,
    user: r,
    guildId: a,
    channelId: c,
    widgetType: d,
    applicationId: f
  } = e, g = (0, u.Dt)(), b = (0, u.Dt)(), {
    trackUserProfileAction: O
  } = (0, p.KZ)(), [y, j] = i.useState("idle"), [x, v] = i.useState(null != t ? t : ""), h = i.useRef(null), P = i.useRef(null), I = _.intl.string(_.t.xKSfBQ), S = null != t && "" !== t.trim(), T = i.useCallback(() => {
    j("editing")
  }, []), k = i.useCallback(() => {
    let e = x.trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), j("completed"), O({
      action: "EDIT_ACTION"
    })
  }, [d, f, x, O]), C = i.useCallback(e => {
    v(e)
  }, []);
  return i.useEffect(() => {
    "editing" === y && v(null != t ? t : "")
  }, [t, y]), i.useEffect(() => {
    if ("completed" === y) {
      var e;
      null == (e = h.current) || e.focus()
    }
  }, [y]), "editing" === y ? (0, n.jsxs)("div", {
    className: w.textAreaContainer,
    children: [(0, n.jsx)(s.nn4, {
      tag: "label",
      htmlFor: g,
      children: _.intl.string(_.t.JxKXeX)
    }), (0, n.jsx)(s.Kx8, {
      id: g,
      value: x,
      placeholder: I,
      onChange: C,
      onBlur: k,
      rows: 3,
      autoFocus: "editing" === y,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k())
      },
      maxLength: l.r
    })]
  }) : (0, n.jsxs)("div", {
    ref: P,
    role: "group",
    "aria-labelledby": b,
    onClick: T,
    className: w.editableCommentContainer,
    children: [(0, n.jsx)(s.vdY, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: a,
      channelId: c,
      id: b
    }), (0, n.jsx)(N, {
      text: null != t ? t : I,
      className: o()(w.editableCommentText, !S && w.placeholder)
    }), (0, n.jsx)(s.P3F, {
      innerRef: h,
      "aria-label": _.intl.string(_.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), T()
      },
      focusProps: {
        ringTarget: P
      }
    })]
  })
}

function D(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: i,
    className: a
  } = e, o = (0, h.Z)(t);
  return o.length > 0 ? (0, n.jsx)(O.Z, {
    label: _.intl.formatToPlainString(_.t.ujhJdH, {
      numFriends: o.length
    }),
    className: a,
    users: o,
    guildId: r,
    channelId: i
  }) : null
}

function Z(e) {
  let {
    user: t,
    guildId: r,
    channelId: i,
    game: a,
    widgetType: o,
    loading: l = false,
    disableInteraction: u = false
  } = e, {
    gameName: d = _.intl.string(_.t.GIWFlJ),
    imageSrc: f,
    applicationId: b,
    comment: p,
    tags: m
  } = a, O = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, h = g.default.getCurrentUser(), E = (null == h ? true : h.id) === t.id, N = !u && E && o === c.l.FAVORITE_GAMES;
  return l ? (0, n.jsx)(j.i, {}) : (0, n.jsxs)("div", {
    className: w.card,
    children: [(0, n.jsx)(y.Z, {
      className: null == f || u ? true : P.hoverActiveEffect,
      imageSrc: f,
      gameName: d,
      applicationId: b,
      userId: t.id,
      disableInteraction: u,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: w.details,
      children: [u ? (0, n.jsx)(s.X6q, S(I({}, O), {
        children: d
      })) : (0, n.jsx)(T, I({
        applicationId: b,
        userId: t.id,
        gameName: d
      }, O)), N ? (0, n.jsx)(C, {
        text: p,
        user: t,
        guildId: r,
        channelId: i,
        widgetType: o,
        applicationId: b
      }) : (0, n.jsx)(k, {
        text: p,
        user: t,
        guildId: r,
        channelId: i
      }), (0, n.jsx)(x.Z, {
        tags: m,
        isCurrentUser: E,
        widgetType: o,
        applicationId: b,
        disableInteraction: u,
        className: w.tags
      }), !u && (0, n.jsx)(D, {
        className: w.socialProof,
        applicationId: b,
        guildId: r,
        channelId: i
      })]
    }), !u && E && (0, n.jsx)(v.Z, {
      game: a,
      widgetType: o,
      className: w.removeGameButton
    })]
  })
}