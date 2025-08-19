/** Chunk was on 85362 **/
/** chunk id: 325257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk574981 = require("./574981.js"),
  Chunk803948 = require("./803948.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk399606 = require("./399606.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk153867 = require("./153867.js"),
  Chunk377171 = require("./377171.js"),
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

function R(e) {
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

function D(e, t) {
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
let L = {
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
    } = await Promise.all([n.e("1806"), n.e("36599"), n.e("60962"), n.e("58175"), n.e("7654"), n.e("44156"), n.e("47463"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("42926"), n.e("20087"), n.e("6049"), n.e("56534"), n.e("87154"), n.e("33213"), n.e("35237")]).then(n.bind(n, 545135));
    return n => (0, r.jsx)(e, D(R({}, n), {
      guild: t
    }))
  })
}
let k = Chunk647438.memo(function(e) {
  var t, n, l, h, k;
  let {
    guildNode: U,
    setRef: G,
    onDragStart: B,
    onDragEnd: V,
    route: H,
    guild: F,
    animatable: z,
    selected: W = false,
    unread: K = false,
    mediaState: Y,
    unavailable: q = false,
    badge: X = 0,
    isMentionLowImportance: Q,
    contextMenu: J = M,
    draggable: $ = false,
    sorting: ee = false,
    preloadOnClick: et = true,
    guildJoinRequestStatus: en,
    height: er,
    "aria-setsize": ei,
    "aria-posinset": el
  } = e, {
    id: eo,
    parentId: ea
  } = U, es = null != (t = e.upperBadge) ? t : q ? (0, w.Ny)() : null != Y ? (0, w.Or)(Y) : true, ec = null != (n = e.lowerBadge) ? n : true;
  null == ec && X > 0 ? ec = null != (l = (0, w.Ne)(X, Q ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : true : null == ec && null != en && (ec = null != (h = (0, w.jt)({
    guildJoinRequestStatus: en
  })) ? h : true);
  let eu = null != (k = e.lowerBadgeSize) ? k : {
      width: (0, p.OVM)(X)
    },
    [{
      dragging: ed
    }, ep] = (0, a.c)({
      type: C.eD.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == B || B()
      }), {
        type: U.type,
        nodeId: U.id
      }),
      end() {
        null == V || V(), (0, g.V1)(j.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ef = (0, c.Ie)(null != eo ? eo : Z.lds, null != ea ? 2 : 1),
    [eh, eg] = i.useState(false),
    em = !ee && eh,
    [eb, e_] = i.useState(false),
    [eO, ey] = i.useState(false),
    [ev] = i.useState(() => new d.sW(70, () => ey(true)));
  i.useEffect(() => () => ev.cancel(), [ev]);
  let ej = i.useCallback(() => {
      if (null != H) return void(0, _.uL)(H, {
        state: L
      });
      (0, O.X)(eo, {
        state: L
      })
    }, [eo, H]),
    eC = i.useCallback(() => {
      if (null != H || null == F || q || !et) return;
      let e = (0, b.V)(F.id);
      null != e && f.Z.preload(F.id, e)
    }, [H, F, q, et]),
    eE = (0, u.e7)([v.ZP], () => v.ZP.isCurrentUserGuest(eo)),
    ex = i.useCallback(e => {
      null == F || eE || J(e, F)
    }, [F, J, eE]),
    eS = i.useCallback(e => {
      if ("ArrowLeft" === e.key && null != ea) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(ea, "]"))) || t.focus()
      }
    }, [ea]),
    eI = i.useCallback(e => {
      if (e) return void ev.delay();
      ev.cancel(), ey(false)
    }, [ev]),
    eP = i.useCallback(e => {
      null == G || G(eo, e)
    }, [eo, G]),
    eN = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE);
  if (null == F) return null;
  let ew = eO || eb ? (0, r.jsx)(x.Z, {
      guild: F,
      show: eO,
      active: W,
      onAnimationStart: function() {
        e_(eO)
      },
      onAnimationRest: function() {
        eO || e_(false)
      }
    }) : (0, r.jsx)(p.LYs, D(R({
      ariaLabel: T.intl.formatToPlainString(T.t["/uzRsr"], {
        guildName: F.name,
        mentions: X
      }),
      name: F.name,
      onClick: ej,
      onMouseEnter: function() {
        ee || eg(true)
      },
      onMouseLeave: function() {
        ee || eg(false)
      },
      onMouseDown: eC,
      onContextMenu: ex,
      onKeyDown: eS,
      icon: (0, y.EB)(F, 2 * eN, em && z, true),
      selected: W || em
    }, ef), {
      "aria-setsize": ei,
      "aria-posinset": el,
      "aria-selected": W
    })),
    eZ = ed ? (0, r.jsx)(S.OG, {
      children: (0, r.jsx)(P.Z, {})
    }) : (0, r.jsx)(s.animated.div, {
      ref: $ ? e => {
        ep(e)
      } : true,
      "data-dnd-name": F.name,
      style: {
        scale: null == er ? 1 : er
      },
      "data-drop-hovering": eO,
      className: o()(A.blobContainer, {
        [A.sorting]: ee,
        [A.wobble]: eO,
        [A.selected]: eO || W
      }),
      children: (0, r.jsx)(p.aRk, {
        selected: true,
        upperBadge: es,
        lowerBadge: ec,
        lowerBadgeSize: eu,
        children: ew
      })
    });
  return (0, r.jsxs)(N.H, {
    ref: eP,
    children: [(0, r.jsx)(E.Z, {
      hovered: !ed && em,
      selected: !ed && W,
      unread: !ed && K,
      className: A.pill
    }), (0, r.jsx)(I.Z, {
      guild: F,
      disabled: ee,
      isDragging: ed,
      children: eZ
    }), $ ? (0, r.jsx)(S.ZP, {
      name: F.name,
      targetNode: U,
      onDragOverChanged: eI
    }) : null]
  })
})