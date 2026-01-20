/** Chunk was on 90882 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk780899 = require("./780899.jsx"),
  Chunk733231 = require("./733231.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk394606 = require("./394606.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713603 = require("./713603.js"),
  Chunk447921 = require("./447921.js");

function S(e) {
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

function T(e, t) {
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

function _(e) {
  let {
    index: t,
    widgetType: n,
    game: i,
    children: l
  } = e, {
    manageFocusOnReorder: a
  } = (0, y.C)();
  return (0, r.jsx)(b.yW, {
    index: t,
    itemId: i.applicationId,
    listType: n,
    itemType: "GAME_DETAILS_CARD",
    itemPreviewProps: {
      game: i,
      widgetType: n
    },
    "aria-label": P.intl.formatToPlainString(P.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, m.Eq)(n, e, t),
    onEnd: () => a(i.applicationId),
    className: E.dropTarget,
    dropBeforeClassName: E.dropIndicatorBefore,
    dropAfterClassName: E.dropIndicatorAfter,
    draggingClassName: E.isDragging,
    children: l
  })
}

function C(e) {
  var {
    applicationId: t,
    userId: n,
    gameName: i
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let a = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == a ? (0, r.jsx)(c.Heading, T(S({}, l), {
    children: i
  })) : (0, r.jsx)(c.Heading, T(S({}, l), {
    children: (0, r.jsx)(c.P3F, {
      onClick: a,
      className: E.clickableText,
      children: i
    })
  }))
}

function N(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    id: l
  } = e;
  return (0, r.jsx)(c.nn4, {
    id: l,
    children: P.intl.format(P.t.TM0XDY, {
      name: g.ZP.getName(n, i, t)
    })
  })
}

function Z(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: n,
    children: t
  })
}

function A(e) {
  let {
    text: t,
    user: n,
    guildId: i,
    channelId: l
  } = e, a = (0, s.Dt)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": a,
    children: [(0, r.jsx)(c.PEf, {
      size: "xxs",
      color: c.TVs.colors.ICON_MUTED,
      className: E.commentIcon
    }), (0, r.jsx)(N, {
      user: n,
      guildId: i,
      channelId: l,
      id: a
    }), (0, r.jsx)(Z, {
      text: t
    })]
  })
}

function D(e) {
  let {
    text: t,
    user: n,
    guildId: l,
    channelId: u,
    widgetType: d,
    applicationId: f
  } = e, g = (0, s.Dt)(), b = (0, s.Dt)(), {
    trackUserProfileEditAction: y
  } = (0, p.KZ)(), [h, j] = i.useState("idle"), [O, x] = i.useState(null != t ? t : ""), v = i.useRef(null), I = i.useRef(null), w = P.intl.string(P.t.xKSfBT), S = null != t && "" !== t.trim(), T = i.useCallback(() => {
    y({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), j("editing")
  }, [d, y]), _ = i.useCallback(() => {
    let e = O.trim(),
      n = e !== (null != t ? t : "").trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), j("completed"), n && y({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, O, t, y]), C = i.useCallback(e => {
    x(e)
  }, []);
  return i.useEffect(() => {
    "editing" === h && x(null != t ? t : "")
  }, [t, h]), i.useEffect(() => {
    if ("completed" === h) {
      var e;
      null == (e = v.current) || e.focus()
    }
  }, [h]), "editing" === h ? (0, r.jsxs)("div", {
    className: E.textAreaContainer,
    children: [(0, r.jsx)(c.nn4, {
      tag: "label",
      htmlFor: g,
      children: P.intl.string(P.t.JxKXeT)
    }), (0, r.jsx)(c.Kx8, {
      id: g,
      value: O,
      placeholder: w,
      onChange: C,
      onBlur: _,
      rows: 3,
      autoFocus: "editing" === h,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), _())
      },
      maxLength: o.rN
    })]
  }) : (0, r.jsxs)("div", {
    ref: I,
    role: "group",
    "aria-labelledby": b,
    onClick: T,
    className: E.editableCommentContainer,
    children: [(0, r.jsx)(c.vdY, {
      size: "xxs",
      color: c.TVs.colors.ICON_MUTED,
      className: E.commentIcon
    }), (0, r.jsx)(N, {
      user: n,
      guildId: l,
      channelId: u,
      id: b
    }), (0, r.jsx)(Z, {
      text: null != t ? t : w,
      className: a()(E.editableCommentText, !S && E.placeholder)
    }), (0, r.jsx)(c.P3F, {
      innerRef: v,
      "aria-label": P.intl.string(P.t.ppb9MJ),
      onClick: e => {
        e.stopPropagation(), T()
      },
      focusProps: {
        ringTarget: I
      }
    })]
  })
}

function k(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    game: l,
    widgetType: o,
    disableInteraction: s = false,
    index: u,
    onRemoveGame: d,
    coverRef: g,
    className: p
  } = e, {
    applicationId: P,
    comment: N,
    tags: Z
  } = l, {
    coverImageUrl: k,
    gameName: R,
    isLoading: L
  } = (0, I.Z)(P), B = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, G = f.default.getCurrentUser(), M = (null == G ? true : G.id) === t.id, F = 1 === (0, m.Gv)(o), W = !s && M, U = W && (0, m.vI)(o), H = W && !F, {
    registerDragHandleRef: z
  } = (0, y.C)();
  if (L) return (0, r.jsx)(j.i, {});
  let K = () => (0, r.jsx)(h.Z, {
      coverRef: g,
      className: null == k || s ? true : w.hoverActiveEffect,
      imageSrc: k,
      gameName: R,
      applicationId: P,
      userId: t.id,
      disableInteraction: s,
      hideTooltip: true
    }),
    q = () => (0, r.jsxs)("div", {
      className: a()(E.card, p),
      children: [H ? (0, r.jsxs)("div", {
        className: E.dragHandleContainer,
        children: [K(), (0, r.jsx)(b.e_, {
          buttonRef: z(l.applicationId),
          className: E.dragHandle
        })]
      }) : K(), (0, r.jsxs)("div", {
        className: E.details,
        children: [s ? (0, r.jsx)(c.Heading, T(S({}, B), {
          children: R
        })) : (0, r.jsx)(C, S({
          applicationId: P,
          userId: t.id,
          gameName: R
        }, B)), U ? (0, r.jsx)(D, {
          text: N,
          user: t,
          guildId: n,
          channelId: i,
          widgetType: o,
          applicationId: P
        }) : (0, r.jsx)(A, {
          text: N,
          user: t,
          guildId: n,
          channelId: i
        }), (0, r.jsx)(O.Z, {
          tags: Z,
          isCurrentUser: M,
          widgetType: o,
          applicationId: P,
          disableInteraction: s,
          className: E.tags
        }), !s && (0, r.jsx)(v.F, {
          className: E.socialProof,
          applicationId: P,
          guildId: n,
          channelId: i
        })]
      }), !s && M && (0, r.jsx)(x.Z, {
        game: l,
        widgetType: o,
        className: E.removeGameButton,
        onRemove: () => null == d ? true : d(l.applicationId)
      })]
    });
  return H ? (0, r.jsx)(_, {
    index: null != u ? u : 0,
    widgetType: o,
    game: l,
    children: q()
  }) : q()
}