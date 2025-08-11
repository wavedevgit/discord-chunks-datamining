/** Chunk was on 34779 **/
/** chunk id: 325257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk562075 = require("./562075.js"),
  Chunk126663 = require("./126663.js"),
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
  Chunk335426 = require("./335426.js");

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
  (0, f.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("1806"), n.e("7654"), n.e("58175"), n.e("44156"), n.e("13616"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("20087"), n.e("22988"), n.e("56534"), n.e("87154"), n.e("33213"), n.e("40407")]).then(n.bind(n, 545135));
    return n => (0, r.jsx)(e, D(R({}, n), {
      guild: t
    }))
  })
}
let k = Chunk73800.memo(function(e) {
  var t, n, l, f, k;
  let {
    guildNode: U,
    setRef: G,
    onDragStart: B,
    onDragEnd: V,
    route: F,
    guild: H,
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
    parentId: es
  } = U, ea = null != (t = e.upperBadge) ? t : q ? (0, w.Ny)() : null != Y ? (0, w.Or)(Y) : true, ec = null != (n = e.lowerBadge) ? n : true;
  null == ec && X > 0 ? ec = null != (l = (0, w.Ne)(X, Q ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : true : null == ec && null != en && (ec = null != (f = (0, w.jt)({
    guildJoinRequestStatus: en
  })) ? f : true);
  let eu = null != (k = e.lowerBadgeSize) ? k : {
      width: (0, h.OVM)(X)
    },
    [{
      dragging: ed
    }, eh] = (0, s.c)({
      type: j.eD.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == B || B()
      }), {
        type: U.type,
        nodeId: U.id
      }),
      end() {
        null == V || V(), (0, g.V1)(v.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ep = (0, c.Ie)(null != eo ? eo : Z.lds, null != es ? 2 : 1),
    [ef, eg] = i.useState(false),
    em = !ee && ef,
    [eb, eO] = i.useState(false),
    [e_, ey] = i.useState(false),
    [eC] = i.useState(() => new d.sW(70, () => ey(true)));
  i.useEffect(() => () => eC.cancel(), [eC]);
  let ev = i.useCallback(() => {
      if (null != F) return void(0, O.uL)(F, {
        state: L
      });
      (0, _.X)(eo, {
        state: L
      })
    }, [eo, F]),
    ej = i.useCallback(() => {
      if (null != F || null == H || q || !et) return;
      let e = (0, b.V)(H.id);
      null != e && p.Z.preload(H.id, e)
    }, [F, H, q, et]),
    eE = (0, u.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(eo)),
    eS = i.useCallback(e => {
      null == H || eE || J(e, H)
    }, [H, J, eE]),
    ex = i.useCallback(e => {
      if ("ArrowLeft" === e.key && null != es) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(es, "]"))) || t.focus()
      }
    }, [es]),
    eI = i.useCallback(e => {
      if (e) return void eC.delay();
      eC.cancel(), ey(false)
    }, [eC]),
    eP = i.useCallback(e => {
      null == G || G(eo, e)
    }, [eo, G]),
    eN = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE);
  if (null == H) return null;
  let ew = e_ || eb ? (0, r.jsx)(S.Z, {
      guild: H,
      show: e_,
      active: W,
      onAnimationStart: function() {
        eO(e_)
      },
      onAnimationRest: function() {
        e_ || eO(false)
      }
    }) : (0, r.jsx)(h.LYs, D(R({
      ariaLabel: T.intl.formatToPlainString(T.t["/uzRsr"], {
        guildName: H.name,
        mentions: X
      }),
      name: H.name,
      onClick: ev,
      onMouseEnter: function() {
        ee || eg(true)
      },
      onMouseLeave: function() {
        ee || eg(false)
      },
      onMouseDown: ej,
      onContextMenu: eS,
      onKeyDown: ex,
      icon: (0, y.EB)(H, 2 * eN, em && z, true),
      selected: W || em
    }, ep), {
      "aria-setsize": ei,
      "aria-posinset": el,
      "aria-selected": W
    })),
    eZ = ed ? (0, r.jsx)(x.OG, {
      children: (0, r.jsx)(P.Z, {})
    }) : (0, r.jsx)(a.animated.div, {
      ref: $ ? e => {
        eh(e)
      } : true,
      "data-dnd-name": H.name,
      style: {
        scale: null == er ? 1 : er
      },
      "data-drop-hovering": e_,
      className: o()(A.blobContainer, {
        [A.sorting]: ee,
        [A.wobble]: e_,
        [A.selected]: e_ || W
      }),
      children: (0, r.jsx)(h.aRk, {
        selected: true,
        upperBadge: ea,
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
      guild: H,
      disabled: ee,
      isDragging: ed,
      children: eZ
    }), $ ? (0, r.jsx)(x.ZP, {
      name: H.name,
      targetNode: U,
      onDragOverChanged: eI
    }) : null]
  })
})