/** Chunk was on 64271 **/
/** chunk id: 325257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk891371 = require("./891371.js"),
  Chunk205120 = require("./205120.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk399606 = require("./399606.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk153867 = require("./153867.js"),
  Chunk35225 = require("./35225.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk601964 = require("./601964.js"),
  Chunk271383 = require("./271383.js"),
  Chunk771845 = require("./771845.js"),
  Chunk727258 = require("./727258.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk249792 = require("./249792.jsx"),
  Chunk40153 = require("./40153.jsx"),
  Chunk593618 = require("./593618.jsx"),
  Chunk252686 = require("./252686.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk534175 = require("./534175.js");

function A(e) {
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

function R(e, t) {
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
let D = {
  analyticsSource: {
    page: Chunk981631.ZY5.GUILD_CHANNEL,
    section: Chunk981631.jXE.CHANNEL_LIST,
    object: Chunk981631.qAy.CHANNEL
  }
};

function L(e, t) {
  (0, p.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("384"), n.e("22516"), n.e("87154"), n.e("33213"), n.e("73709")]).then(n.bind(n, 545135));
    return n => (0, r.jsx)(e, R(A({}, n), {
      guild: t
    }))
  })
}
let M = Chunk473749.memo(function(e) {
  var t, n, l, p, M;
  let {
    guildNode: k,
    setRef: G,
    onDragStart: U,
    onDragEnd: B,
    route: F,
    guild: V,
    animatable: H,
    selected: W = false,
    unread: z = false,
    mediaState: K,
    unavailable: Y = false,
    badge: q = 0,
    isMentionLowImportance: Q,
    contextMenu: X = L,
    draggable: J = false,
    sorting: $ = false,
    preloadOnClick: ee = true,
    guildJoinRequestStatus: et,
    height: en,
    "aria-setsize": er,
    "aria-posinset": ei
  } = e, {
    id: el,
    parentId: eo
  } = k, ea = null != (t = e.upperBadge) ? t : Y ? (0, N.Ny)() : null != K ? (0, N.Or)(K) : true, es = null != (n = e.lowerBadge) ? n : true;
  null == es && q > 0 ? es = null != (l = (0, N.Ne)(q, Q ? f.TVs.colors.BACKGROUND_ACCENT.css : f.TVs.colors.STATUS_DANGER.css)) ? l : true : null == es && null != et && (es = null != (p = (0, N.jt)({
    guildJoinRequestStatus: et
  })) ? p : true);
  let ec = null != (M = e.lowerBadgeSize) ? M : {
      width: (0, f.OVM)(q)
    },
    [{
      dragging: eu
    }, ed] = (0, a.c)({
      type: j.eD.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == U || U()
      }), {
        type: k.type,
        nodeId: k.id
      }),
      end() {
        null == B || B(), (0, g.V1)(v.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ef = (0, c.Ie)(null != el ? el : Z.lds, null != eo ? 2 : 1),
    [eh, ep] = i.useState(false),
    eg = !$ && eh,
    [em, eb] = i.useState(false),
    [e_, ey] = i.useState(false),
    [eO] = i.useState(() => new d.sW(70, () => ey(true)));
  i.useEffect(() => () => eO.cancel(), [eO]);
  let ev = i.useCallback(() => {
      if (null != F) return void(0, b.uL)(F, {
        state: D
      });
      (0, _.X)(el, {
        state: D
      })
    }, [el, F]),
    ej = i.useCallback(() => {
      if (null != F || null == V || Y || !ee) return;
      let e = (0, m.V)(V.id);
      null != e && h.Z.preload(V.id, e)
    }, [F, V, Y, ee]),
    ex = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(el)),
    eC = i.useCallback(e => {
      null == V || ex || X(e, V)
    }, [V, X, ex]),
    eE = i.useCallback(e => {
      if ("ArrowLeft" === e.key && null != eo) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(eo, "]"))) || t.focus()
      }
    }, [eo]),
    eS = i.useCallback(e => {
      if (e) return void eO.delay();
      eO.cancel(), ey(false)
    }, [eO]),
    eI = i.useCallback(e => {
      null == G || G(el, e)
    }, [el, G]),
    eP = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE);
  if (null == V) return null;
  let eN = e_ || em ? (0, r.jsx)(C.Z, {
      guild: V,
      show: e_,
      active: W,
      onAnimationStart: function() {
        eb(e_)
      },
      onAnimationRest: function() {
        e_ || eb(false)
      }
    }) : (0, r.jsx)(f.LYs, R(A({
      ariaLabel: w.intl.formatToPlainString(w.t["/uzRss"], {
        guildName: V.name,
        mentions: q
      }),
      name: V.name,
      onClick: ev,
      onMouseEnter: function() {
        $ || ep(true)
      },
      onMouseLeave: function() {
        $ || ep(false)
      },
      onMouseDown: ej,
      onContextMenu: eC,
      onKeyDown: eE,
      icon: (0, y.EB)(V, 2 * eP, eg && H, true),
      selected: W || eg
    }, ef), {
      "aria-setsize": er,
      "aria-posinset": ei,
      "aria-selected": W
    })),
    eZ = eu ? (0, r.jsx)(E.OG, {
      children: (0, r.jsx)(I.Z, {})
    }) : (0, r.jsx)(s.animated.div, {
      ref: J ? e => {
        ed(e)
      } : true,
      "data-dnd-name": V.name,
      style: {
        scale: null == en ? 1 : en
      },
      "data-drop-hovering": e_,
      className: o()(T.blobContainer, {
        [T.sorting]: $,
        [T.wobble]: e_,
        [T.selected]: e_ || W
      }),
      children: (0, r.jsx)(f.aRk, {
        selected: true,
        upperBadge: ea,
        lowerBadge: es,
        lowerBadgeSize: ec,
        children: eN
      })
    });
  return (0, r.jsxs)(P.H, {
    ref: eI,
    children: [(0, r.jsx)(x.Z, {
      hovered: !eu && eg,
      selected: !eu && W,
      unread: !eu && z,
      className: T.pill
    }), (0, r.jsx)(S.Z, {
      guild: V,
      disabled: $,
      isDragging: eu,
      children: eZ
    }), J ? (0, r.jsx)(E.ZP, {
      name: V.name,
      targetNode: k,
      onDragOverChanged: eS
    }) : null]
  })
})