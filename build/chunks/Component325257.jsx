/** Chunk was on 82124 **/
/** chunk id: 325257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk17163 = require("./17163.js"),
  Chunk81239 = require("./81239.js"),
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
  Chunk455802 = require("./455802.js");

function w(e) {
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

function M(e, t) {
  (0, h.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("9414"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("9536"), n.e("22516"), n.e("87154"), n.e("33213"), n.e("74978")]).then(n.bind(n, 545135));
    return n => (0, r.jsx)(e, R(w({}, n), {
      guild: t
    }))
  })
}
let k = Chunk473749.memo(function(e) {
  var t, n, l, h, k;
  let {
    guildNode: L,
    setRef: U,
    onDragStart: G,
    onDragEnd: B,
    route: F,
    guild: H,
    animatable: V,
    selected: z = false,
    unread: W = false,
    mediaState: K,
    unavailable: Y = false,
    badge: q = 0,
    isMentionLowImportance: X,
    contextMenu: Q = M,
    draggable: J = false,
    sorting: $ = false,
    preloadOnClick: ee = true,
    guildJoinRequestStatus: et,
    height: en,
    "aria-setsize": er,
    "aria-posinset": ei
  } = e, {
    id: el,
    parentId: ea
  } = L, eo = null != (t = e.upperBadge) ? t : Y ? (0, Z.Ny)() : null != K ? (0, Z.Or)(K) : true, es = null != (n = e.lowerBadge) ? n : true;
  null == es && q > 0 ? es = null != (l = (0, Z.Ne)(q, X ? p.TVs.colors.BACKGROUND_MOD_STRONG.css : p.TVs.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)) ? l : true : null == es && null != et && (es = null != (h = (0, Z.jt)({
    guildJoinRequestStatus: et
  })) ? h : true);
  let ec = null != (k = e.lowerBadgeSize) ? k : {
      width: (0, p.OVM)(q)
    },
    [{
      dragging: eu
    }, ed] = (0, o.c)({
      type: x.eD.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == G || G()
      }), {
        type: L.type,
        nodeId: L.id
      }),
      end() {
        null == B || B(), (0, g.V1)(j.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ep = (0, c.Ie)(null != el ? el : N.lds, null != ea ? 2 : 1),
    [ef, eh] = i.useState(false),
    eg = !$ && ef,
    [em, eb] = i.useState(false),
    [ey, ev] = i.useState(false),
    [eO] = i.useState(() => new d.sW(70, () => ev(true)));
  i.useEffect(() => () => eO.cancel(), [eO]);
  let ej = i.useCallback(() => {
      if (null != F) return void(0, b.uL)(F, {
        state: D
      });
      (0, y.X)(el, {
        state: D
      })
    }, [el, F]),
    ex = i.useCallback(() => {
      if (null != F || null == H || Y || !ee) return;
      let e = (0, m.V)(H.id);
      null != e && f.Z.preload(H.id, e)
    }, [F, H, Y, ee]),
    eC = (0, u.e7)([O.ZP], () => O.ZP.isCurrentUserGuest(el)),
    eE = i.useCallback(e => {
      null == H || eC || Q(e, H)
    }, [H, Q, eC]),
    eS = i.useCallback(e => {
      if ("ArrowLeft" === e.key && null != ea) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(ea, "]"))) || t.focus()
      }
    }, [ea]),
    e_ = i.useCallback(e => {
      if (e) return void eO.delay();
      eO.cancel(), ev(false)
    }, [eO]),
    eI = i.useCallback(e => {
      null == U || U(el, e)
    }, [el, U]),
    eP = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE);
  if (null == H) return null;
  let eZ = ey || em ? (0, r.jsx)(E.Z, {
      guild: H,
      show: ey,
      active: z,
      onAnimationStart: function() {
        eb(ey)
      },
      onAnimationRest: function() {
        ey || eb(false)
      }
    }) : (0, r.jsx)(p.aRk, {
      selected: z,
      children: (0, r.jsx)("div", {
        ref: J ? e => {
          ed(e)
        } : true,
        "data-dnd-name": H.name,
        "data-drop-hovering": ey,
        children: (0, r.jsx)(p.LYs, R(w({
          ariaLabel: T.intl.formatToPlainString(T.t["/uzRss"], {
            guildName: H.name,
            mentions: q
          }),
          name: H.name,
          onClick: ej,
          onMouseEnter: function() {
            $ || eh(true)
          },
          onMouseLeave: function() {
            $ || eh(false)
          },
          onMouseDown: ex,
          onContextMenu: eE,
          onKeyDown: eS,
          icon: (0, v.EB)(H, 2 * eP, eg && V, true),
          selected: z || eg
        }, ep), {
          "aria-setsize": er,
          "aria-posinset": ei,
          "aria-selected": z
        }))
      })
    }),
    eN = eu ? (0, r.jsx)(S.OG, {
      children: (0, r.jsx)(I.Z, {})
    }) : (0, r.jsx)(s.animated.div, {
      style: {
        scale: null == en ? 1 : en
      },
      className: a()(A.blobContainer, {
        [A.sorting]: $,
        [A.wobble]: ey,
        [A.selected]: ey || z
      }),
      "data-drop-hovering": ey,
      children: (0, r.jsx)(p.aRk, {
        selected: z,
        upperBadge: eo,
        lowerBadge: es,
        lowerBadgeSize: ec,
        children: eZ
      })
    });
  return (0, r.jsxs)(P.H, {
    ref: eI,
    children: [(0, r.jsx)(C.Z, {
      hovered: !eu && eg,
      selected: !eu && z,
      unread: !eu && W,
      className: A.pill
    }), (0, r.jsx)(_.Z, {
      guild: H,
      disabled: $,
      isDragging: eu,
      children: eN
    }), J ? (0, r.jsx)(S.ZP, {
      name: H.name,
      targetNode: L,
      onDragOverChanged: e_
    }) : null]
  })
})