/** Chunk was on 38663 **/
/** chunk id: 742710, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./733351.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk926675 = require("./926675.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk451395 = require("./451395.jsx"),
  Chunk823016 = require("./823016.jsx"),
  Chunk788593 = require("./788593.jsx"),
  Chunk492280 = require("./492280.jsx"),
  Chunk946599 = require("./946599.jsx"),
  Chunk858808 = require("./858808.jsx"),
  Chunk685049 = require("./685049.jsx"),
  Chunk973397 = require("./973397.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461349 = require("./461349.js"),
  Chunk8208 = require("./8208.js");

function E(e) {
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

function S(e, t) {
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

function T(e) {
  let {
    index: t,
    widgetType: n,
    game: l,
    children: i
  } = e, {
    manageFocusOnReorder: a
  } = (0, y.r)();
  return (0, r.jsx)(m.mG, {
    index: t,
    itemId: l.applicationId,
    listType: n,
    itemType: "GAME_DETAILS_CARD",
    itemPreviewProps: {
      game: l,
      widgetType: n
    },
    "aria-label": w.intl.formatToPlainString(w.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, g.Un)(n, e, t),
    onEnd: () => a(l.applicationId),
    className: P.vF,
    dropBeforeClassName: P.A,
    dropAfterClassName: P.Ze,
    draggingClassName: P.Id,
    children: i
  })
}

function _(e) {
  let {
    applicationId: t,
    userId: n,
    gameName: l
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["applicationId", "userId", "gameName"]), a = (0, d.A)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.Ob.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == a ? (0, r.jsx)(o.Heading, S(E({}, i), {
    children: l
  })) : (0, r.jsx)(o.Heading, S(E({}, i), {
    children: (0, r.jsx)(o.DUT, {
      onClick: a,
      className: P.sd,
      children: l
    })
  }))
}

function N(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    id: i
  } = e;
  return (0, r.jsx)(o.AC4, {
    id: i,
    children: w.intl.format(w.t.TM0XDY, {
      name: p.Ay.getName(n, l, t)
    })
  })
}

function D(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: n,
    children: t
  })
}

function R(e) {
  let {
    text: t,
    user: n,
    guildId: l,
    channelId: i
  } = e, a = (0, c.GV)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": a,
    children: [(0, r.jsx)(o.cyi, {
      size: "xxs",
      color: o.LU0.colors.ICON_MUTED,
      className: P.Ls
    }), (0, r.jsx)(N, {
      user: n,
      guildId: l,
      channelId: i,
      id: a
    }), (0, r.jsx)(D, {
      text: t
    })]
  })
}

function C(e) {
  let {
    text: t,
    user: n,
    guildId: i,
    channelId: u,
    widgetType: d,
    applicationId: f
  } = e, p = (0, c.GV)(), m = (0, c.GV)(), {
    trackUserProfileEditAction: y
  } = (0, b.NJ)(), [O, j] = l.useState("idle"), [x, h] = l.useState(null != t ? t : ""), v = l.useRef(null), A = l.useRef(null), I = w.intl.string(w.t.xKSfBT), E = null != t && "" !== t.trim(), S = l.useCallback(() => {
    y({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), j("editing")
  }, [d, y]), T = l.useCallback(() => {
    let e = x.trim(),
      n = e !== (null != t ? t : "").trim();
    (0, g.oc)(d, f, "" !== e ? e : true), j("completed"), n && y({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, x, t, y]), _ = l.useCallback(e => {
    h(e)
  }, []);
  return l.useEffect(() => {
    "editing" === O && h(null != t ? t : "")
  }, [t, O]), l.useEffect(() => {
    if ("completed" === O) {
      var e;
      null == (e = v.current) || e.focus()
    }
  }, [O]), "editing" === O ? (0, r.jsxs)("div", {
    className: P.kS,
    children: [(0, r.jsx)(o.AC4, {
      tag: "label",
      htmlFor: p,
      children: w.intl.string(w.t.JxKXeT)
    }), (0, r.jsx)(o.fs1, {
      id: p,
      value: x,
      placeholder: I,
      onChange: _,
      onBlur: T,
      rows: 3,
      autoFocus: "editing" === O,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), T())
      },
      maxLength: s.Qi
    })]
  }) : (0, r.jsxs)("div", {
    ref: A,
    role: "group",
    "aria-labelledby": m,
    onClick: S,
    className: P.Vg,
    children: [(0, r.jsx)(o.R2l, {
      size: "xxs",
      color: o.LU0.colors.ICON_MUTED,
      className: P.Ls
    }), (0, r.jsx)(N, {
      user: n,
      guildId: i,
      channelId: u,
      id: m
    }), (0, r.jsx)(D, {
      text: null != t ? t : I,
      className: a()(P.qC, !E && P.qf)
    }), (0, r.jsx)(o.DUT, {
      innerRef: v,
      "aria-label": w.intl.string(w.t.ppb9MJ),
      onClick: e => {
        e.stopPropagation(), S()
      },
      focusProps: {
        ringTarget: A
      }
    })]
  })
}

function k(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    game: i,
    widgetType: s,
    disableInteraction: c = false,
    index: u,
    onRemoveGame: d,
    coverRef: p,
    className: b
  } = e, {
    applicationId: w,
    comment: N,
    tags: D
  } = i, {
    coverImageUrl: k,
    gameName: G,
    isLoading: L
  } = (0, A.A)(w), U = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, M = f.default.getCurrentUser(), F = (null == M ? true : M.id) === t.id, X = 1 === (0, g.cv)(s), W = !c && F, B = W && (0, g.y9)(s), H = W && !X, {
    registerDragHandleRef: K
  } = (0, y.r)();
  if (L) return (0, r.jsx)(j.E, {});
  let z = () => (0, r.jsx)(O.A, {
      coverRef: p,
      className: null == k || c ? true : I.iL,
      imageSrc: k,
      gameName: G,
      applicationId: w,
      userId: t.id,
      disableInteraction: c,
      hideTooltip: true
    }),
    V = () => (0, r.jsxs)("div", {
      className: a()(P.Nr, b),
      children: [H ? (0, r.jsxs)("div", {
        className: P.An,
        children: [z(), (0, r.jsx)(m.jV, {
          buttonRef: K(i.applicationId),
          className: P.BU
        })]
      }) : z(), (0, r.jsxs)("div", {
        className: P.zH,
        children: [c ? (0, r.jsx)(o.Heading, S(E({}, U), {
          children: G
        })) : (0, r.jsx)(_, E({
          applicationId: w,
          userId: t.id,
          gameName: G
        }, U)), B ? (0, r.jsx)(C, {
          text: N,
          user: t,
          guildId: n,
          channelId: l,
          widgetType: s,
          applicationId: w
        }) : (0, r.jsx)(R, {
          text: N,
          user: t,
          guildId: n,
          channelId: l
        }), (0, r.jsx)(x.A, {
          tags: D,
          isCurrentUser: F,
          widgetType: s,
          applicationId: w,
          disableInteraction: c,
          className: P._A
        }), !c && (0, r.jsx)(v.o, {
          className: P.Ez,
          applicationId: w,
          guildId: n,
          channelId: l
        })]
      }), !c && F && (0, r.jsx)(h.A, {
        game: i,
        widgetType: s,
        className: P.vS,
        onRemove: () => null == d ? true : d(i.applicationId)
      })]
    });
  return H ? (0, r.jsx)(T, {
    index: null != u ? u : 0,
    widgetType: s,
    game: i,
    children: V()
  }) : V()
}