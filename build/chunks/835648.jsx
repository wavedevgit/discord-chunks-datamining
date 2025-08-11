/** Chunk was on web.js **/
/** chunk id: 835648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk880949 = require("./880949.js"),
  Chunk806966 = require("./806966.js"),
  Chunk254494 = require("./254494.jsx"),
  Chunk593618 = require("./593618.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk697426 = require("./697426.js"),
  Chunk526617 = require("./526617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865006 = require("./865006.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = [8, 8, 8, 8],
  w = 40;

function D(e) {
  var {
    icon: t,
    isSelected: n,
    onClick: i,
    listItemProps: o
  } = e, s = C(e, ["icon", "isSelected", "onClick", "listItemProps"]);
  return <c.P3F{...N(S({}, o, s), {
    onClick: i,
    className: a()(I.categoryIcon, {
      [I.selected]: n
    }),
    children: (0, r.jsx)(t, {
      className: I.categoryIconIcon,
      color: "currentColor"
    })
  })} />
}

function L(e, t, n, i, o, a) {
  switch (e.categoryInfo.type) {
    case g.bg.FAVORITES:
      return <D{...N(S({}, i), {
        icon: c.r7p,
        onClick: t,
        isSelected: n,
        listItemProps: o
      })} />;
    case g.bg.RECENTLY_HEARD:
      return <D{...N(S({}, i), {
        icon: c.T39,
        onClick: t,
        isSelected: n,
        listItemProps: o
      })} />;
    case g.bg.FREQUENTLY_USED:
      return <D{...N(S({}, i), {
        icon: c.IeX,
        onClick: t,
        isSelected: n,
        listItemProps: o
      })} />;
    case g.bg.GUILD:
      return <c.P3F{...N(S({}, o, i), {
        className: I.category,
        onClick: t,
        children: (0, r.jsx)(u.Z, {
          guild: e.categoryInfo.guild,
          isSelected: n,
          isLocked: a
        })
      })} />;
    case g.bg.DEFAULTS:
      return <D{...N(S({}, i), {
        icon: c.gw7,
        onClick: t,
        isSelected: n,
        listItemProps: o
      })} />;
    default:
      return null
  }
}

function x(e) {
  switch (e.categoryInfo.type) {
    case g.bg.FAVORITES:
      return v.intl.string(v.t.k8fFjo);
    case g.bg.RECENTLY_HEARD:
      return v.intl.string(v.t["8i/+SE"]);
    case g.bg.FREQUENTLY_USED:
      return v.intl.string(v.t["+cGVV1"]);
    case g.bg.GUILD:
      return <_.K guild={e.categoryInfo.guild} includeActivity={false} />;
    case g.bg.DEFAULTS:
      return v.intl.string(v.t.Rtvk9f)
  }
}

function M(e) {
  switch (e.categoryInfo.type) {
    case g.bg.FAVORITES:
      return v.intl.string(v.t.k8fFjo);
    case g.bg.RECENTLY_HEARD:
      return v.intl.string(v.t["8i/+SE"]);
    case g.bg.FREQUENTLY_USED:
      return v.intl.string(v.t["+cGVV1"]);
    case g.bg.GUILD:
      return e.categoryInfo.guild.name;
    case g.bg.DEFAULTS:
      return v.intl.string(v.t.Rtvk9f)
  }
}

function k(e) {
  let {
    category: t,
    categoryIndex: n,
    onClick: i,
    isSelected: o,
    isNitroLocked: a
  } = e, l = (0, s.JA)("soundboard_guild_".concat(n));
  return <c.ua7 text={x(t)} aria-label={M(t)} position={"right"}>{e => L(t, i, o, e, l, a)}</c.ua7>
}

function j(e) {
  let {
    soundboardListRef: t,
    categories: n,
    shouldUpsellLockedCategories: o,
    listPadding: a = P,
    guildId: s,
    inExpressionPicker: c
  } = e, u = i.useRef(null), _ = (0, l.e7)([p.default], () => p.default.getCurrentUser()), g = (0, m.I5)(_, O.p9.TIER_2), v = i.useCallback((e, t, n, i) => {
    let a = o && (0, E.O)(e.categoryInfo, g, s),
      l = () => {
        h.default.track(b.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
          location: {
            page: b.ZY5.SOUNDBOARD_POPOUT
          },
          guild_id: null != s ? s : null,
          num_expressions: e.items.length,
          tab: y.X1.SOUNDBOARD,
          sticker_pack_id: null,
          pack_id: null
        }), n()
      };
    return <k category={e} categoryIndex={t} onClick={l} isSelected={i} isNitroLocked={a} />
  }, [s, o, g]);
  return <f.Z className={c ? I.expressionPickerCategoryList : I.categoryList} categoryListRef={u} expressionsListRef={t} store={d.Wq} categories={n} listPadding={a} renderCategoryListItem={v} rowCount={n.length} categoryHeight={w} />
}